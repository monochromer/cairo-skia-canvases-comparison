export function wrapText({ ctx, text, x, y, maxWidth, lineHeight }) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  let testLine = '';

  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    const testWord = words[wordIndex] + ' ';
    testLine += testWord;
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && wordIndex > 0) {
      lines.push({ line, x, y });
      y += lineHeight;
      line = testWord;
      testLine = testWord;
    } else {
      line += testWord;
    }

    if (wordIndex === words.length - 1) {
      lines.push({ line, x, y });
    }
  }

  return lines;
}

export default wrapText;