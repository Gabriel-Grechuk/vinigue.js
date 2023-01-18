const gm = require('gm').subClass({appPath: './res/bin/magick'});
const fs = require('fs');

const template = fs.readFileSync('./res/img/VinigueModel.jpg');

const viniGueNewImage = gm(template)

viniGueNewImage
  .fill('#FFFFFF')
  .font('./res/font/Ubuntu-Regular.ttf', 55)
  .drawText(50, 150, '" Não fui na academia hoje\n  porque estava chovendo "')
  .write('teste.jpg', error => {
    if (error)
      return console.log(error);
  })
