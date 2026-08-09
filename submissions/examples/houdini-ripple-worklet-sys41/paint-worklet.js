class RippleWorklet {
  static get inputProperties() {
    return ['--ripple-x', '--ripple-y', '--ripple-radius', '--ripple-color'];
  }

  paint(ctx, geom, properties) {
    const x = parseFloat(properties.get('--ripple-x')) || geom.width / 2;
    const y = parseFloat(properties.get('--ripple-y')) || geom.height / 2;
    const radius = parseFloat(properties.get('--ripple-radius')) || 0;
    const color = properties.get('--ripple-color').toString().trim() || 'rgba(99, 102, 241, 0.4)';

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

registerPaint('ripple', RippleWorklet);
