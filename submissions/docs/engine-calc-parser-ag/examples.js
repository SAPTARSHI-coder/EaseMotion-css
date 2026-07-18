const examples = [
  {
    name: 'Simple calc',
    expression: 'calc(100% - 2rem)'
  },
  {
    name: 'Nested parens in calc',
    expression: 'calc((100vw - 120px) / 2)'
  },
  {
    name: 'Nested calc inside clamp',
    expression: 'clamp(300px, calc(50vw + 20px), 900px)'
  },
  {
    name: 'max with nested calc',
    expression: 'max(24px, calc(2vw + 10px))'
  },
  {
    name: 'min with nested calc',
    expression: 'min(calc(80% - 20px), 600px)'
  },
  {
    name: 'Deeply nested combination',
    expression: 'calc(max(20px, 2vw) + clamp(10px, 5vw, 50px))'
  },
  {
    name: 'Invalid: missing parenthesis',
    expression: 'calc(max(20px,)'
  },
  {
    name: 'Invalid: unexpected end',
    expression: 'calc(100% - '
  },
  {
    name: 'Invalid: hanging parens',
    expression: 'calc((100px)'
  }
];
