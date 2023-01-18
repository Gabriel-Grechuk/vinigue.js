const helpText = `Ajuda para usar o vinigue.js cli
yarn cli -t [TEXTO] -o [OUTPUT_FILE]

Ex:

  yarn cli -t "Não fui na academia porque estava chovendo" -o "migue.jpg"

-------------------------------------------------------------------------------
  -t    Migué a ser senderizado na imagem final.
  -o    Arquivo onde o migué será gravado.
`;

function showHelp(exitCode) {
  console.log(helpText);
  if (exitCode !== undefined)
    process.exit(exitCode);
}

function getArg(arg) {
  const argv = process.argv;

  for (const index in argv) {
    const i = parseInt(index);
    if(argv[i] === arg)
      return argv[i + 1]
  }
}

module.exports = {
  showHelp,
  getArg,
}
