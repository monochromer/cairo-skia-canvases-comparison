import { wrapText } from './utils/wrap-text.js';

export function renderImage(createCanvas, settings) {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  ctx.font = `400 ${settings.font.fontSize}px/${settings.font.lineHeight}px ${settings.font.fontFamily}`;

  ctx.fillStyle = settings.colors.background;
  ctx.fillRect(0, 0, 1200, 630);

  ctx.fillStyle = settings.colors.foregorund;
  const textLines = wrapText({
    ctx,
    text: 'Some random text about sync and async functions `async () => {}`',
    x: 64,
    y: settings.font.lineHeight + 64,
    maxWidth: 1200 - 64,
    lineHeight: settings.font.lineHeight
  });
  textLines.forEach((item) => {
    ctx.fillText(item.line, item.x, item.y);
  });
  return canvas.toBuffer('image/png');
}