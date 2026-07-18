export function mapASTToWAAPI(ast) {
  // Extract keyframes
  const keyframes = ast.keyframes.map(kf => {
    return { ...kf };
  });

  // Extract timing options
  const options = {
    duration: ast.duration || 1000,
    delay: ast.delay || 0,
    easing: mapEasing(ast.easing || 'ease'),
    fill: ast.fill || 'both',
    iterations: ast.iterations || 1,
    direction: ast.direction || 'normal'
  };

  return { keyframes, options };
}

function mapEasing(easing) {
  // basic mapping, WAAPI supports standard cubic-bezier and steps
  // which are the same as CSS
  return easing;
}
