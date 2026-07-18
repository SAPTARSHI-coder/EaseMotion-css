class Tokenizer {
  constructor(input) {
    this.input = input;
    this.pos = 0;
  }

  tokenize() {
    const tokens = [];
    while (this.pos < this.input.length) {
      let char = this.input[this.pos];

      if (/\s/.test(char)) {
        this.pos++;
        continue;
      }

      if (char === '(' || char === ')' || char === ',') {
        tokens.push({ type: 'Punctuator', value: char });
        this.pos++;
        continue;
      }

      if (char === '+' || char === '-' || char === '*' || char === '/') {
        tokens.push({ type: 'Operator', value: char });
        this.pos++;
        continue;
      }

      let match = this.input.slice(this.pos).match(/^[a-zA-Z-]+\(/);
      if (match) {
        const funcName = match[0].slice(0, -1);
        tokens.push({ type: 'Function', value: funcName });
        tokens.push({ type: 'Punctuator', value: '(' });
        this.pos += match[0].length;
        continue;
      }

      match = this.input.slice(this.pos).match(/^-?\d*\.?\d+[a-zA-Z%]*|-?\d*\.?\d+/);
      if (match) {
        tokens.push({ type: 'Value', value: match[0] });
        this.pos += match[0].length;
        continue;
      }

      match = this.input.slice(this.pos).match(/^[a-zA-Z-]+/);
      if (match) {
        tokens.push({ type: 'Identifier', value: match[0] });
        this.pos += match[0].length;
        continue;
      }

      throw new Error(`Unexpected character '${char}' at index ${this.pos}`);
    }
    return tokens;
  }
}

class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.pos = 0;
  }

  parse() {
    const ast = this.parseExpression();
    if (this.pos < this.tokens.length) {
      throw new Error("Unexpected tokens at the end of expression.");
    }
    return ast;
  }

  parseExpression() {
    let left = this.parseTerm();
    
    while (this.pos < this.tokens.length) {
      let token = this.tokens[this.pos];
      if (token.type === 'Operator' && (token.value === '+' || token.value === '-')) {
        this.pos++;
        let right = this.parseTerm();
        left = {
          type: 'BinaryExpression',
          operator: token.value,
          left: left,
          right: right
        };
      } else {
        break;
      }
    }
    return left;
  }

  parseTerm() {
    let left = this.parseFactor();

    while (this.pos < this.tokens.length) {
      let token = this.tokens[this.pos];
      if (token.type === 'Operator' && (token.value === '*' || token.value === '/')) {
        this.pos++;
        let right = this.parseFactor();
        left = {
          type: 'BinaryExpression',
          operator: token.value,
          left: left,
          right: right
        };
      } else {
        break;
      }
    }
    return left;
  }

  parseFactor() {
    if (this.pos >= this.tokens.length) {
      throw new Error("Unexpected end of expression.");
    }

    let token = this.tokens[this.pos];

    if (token.type === 'Value' || token.type === 'Identifier') {
      this.pos++;
      return token.value;
    }

    if (token.type === 'Function') {
      const funcName = token.value;
      this.pos++; // Skip function name
      
      if (this.tokens[this.pos]?.value !== '(') {
        throw new Error("Expected '(' after function name.");
      }
      this.pos++; // Skip '('

      const args = [];
      if (this.tokens[this.pos]?.value !== ')') {
        while (true) {
          args.push(this.parseExpression());
          if (this.pos >= this.tokens.length) {
            throw new Error("Missing closing parenthesis.");
          }
          if (this.tokens[this.pos].value === ',') {
            this.pos++;
          } else if (this.tokens[this.pos].value === ')') {
            break;
          } else {
            throw new Error("Expected ',' or ')' in function arguments.");
          }
        }
      }
      this.pos++; // Skip ')'

      return {
        type: 'Function',
        name: funcName,
        arguments: args
      };
    }

    if (token.type === 'Punctuator' && token.value === '(') {
      this.pos++;
      const expr = this.parseExpression();
      if (this.pos >= this.tokens.length || this.tokens[this.pos].value !== ')') {
        throw new Error("Missing closing parenthesis.");
      }
      this.pos++;
      return expr;
    }

    throw new Error(`Unexpected token '${token.value}'`);
  }
}

window.parseCSSMath = function(input) {
  try {
    const tokenizer = new Tokenizer(input);
    const tokens = tokenizer.tokenize();
    const parser = new Parser(tokens);
    return { success: true, ast: parser.parse(), tokens };
  } catch (err) {
    return { success: false, error: err.message };
  }
};
