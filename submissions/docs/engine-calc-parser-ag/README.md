# Engine: Support for Nested CSS calc() Expressions

This is a standalone proof-of-concept parser designed to tokenize and parse nested CSS math expressions (`calc()`, `min()`, `max()`, and `clamp()`) into an Abstract Syntax Tree (AST). It was built as a demonstration for extending the EaseMotion engine, adhering to the core framework freeze.

## Strategy

### Tokenizer
A simple regex-based lexer identifies basic components:
- Functions (e.g. `calc(`, `min(`)
- Operators (`+`, `-`, `*`, `/`)
- Values (`100%`, `2rem`, `50vw`, `-10px`)
- Identifiers
- Punctuators (`(`, `)`, `,`)

### Recursive Descent Parser
The parser uses a standard recursive descent approach to correctly handle operation precedence and nested parentheses:
- `parseExpression()` handles addition/subtraction.
- `parseTerm()` handles multiplication/division.
- `parseFactor()` handles values, nested functions, and grouped expressions (parentheses).

This approach reliably builds a valid AST while failing gracefully with detailed error messages on malformed input (e.g. missing parentheses or unexpected operators).

## Running the Demo

Open `demo.html` in any modern web browser to access an interactive UI. 
You can type custom CSS math expressions, parse them, and instantly view the generated tokens and AST JSON structure.

## Files
- `parser.js`: Contains the `Tokenizer` and `Parser` classes.
- `examples.js`: Pre-defined valid and invalid expressions for testing.
- `demo.html`: The visual demonstration interface.
- `README.md`: This documentation.

## Future Integration
Once the framework freeze is lifted, this logic can be integrated into the main `engine/parser.js` by intercepting values containing `calc`, `clamp`, `min`, or `max`, offloading them to this recursive structure, and injecting the resulting AST node into the existing engine AST.
