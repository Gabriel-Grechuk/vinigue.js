const gm = require('gm').subClass({appPath : './res/bin/magick'});
const fs = require('fs');
const template = fs.readFileSync('./res/img/VinigueModel.jpg');
const viniGueNewImage = gm(template)

function formatText(str) {
  var response = "";
  const buff = str.trim().split(' ');
  var lineCount = 0;

  response = response.concat('" ');
  for (const word of buff) {
    if (lineCount > 15) {
      lineCount = 0;
      response = response.concat('\n  ');
    }
    response = response.concat(word, ' ');
    lineCount += word.length;
  }

  response = response.concat(' "');
  return response;
}

function genLocalImage(str, output) {
  viniGueNewImage.fill('#FFFFFF')
      .font('./res/font/Ubuntu-Regular.ttf', 55)
      .drawText(50, 150, formatText(str))
      .write(output, error => {
        if (error) {
          console.log(error);
          process.exit(1)
        }
      })
}

module.exports = {
  formatText,
  genLocalImage,
}
