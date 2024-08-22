export const splitText = (text, maxLength) => {
  const words = text.split(" ");
  let currentLine = "";
  let result = "";

  words.forEach((word) => {
    if ((currentLine + word).length <= maxLength) {
      currentLine += (currentLine ? " " : "") + word;
    } else {
      result += (result ? "<br />" : "") + currentLine;
      currentLine = word;
    }
  });

  if (currentLine) {
    result += (result ? "<br />" : "") + currentLine;
  }

  return result;
};
