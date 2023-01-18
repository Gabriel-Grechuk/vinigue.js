const args = require("./args")
const core = require("../core/migue-core")

function main() {
  const argText = args.getArg('-t');
  const argOutput = args.getArg('-o');

  if(!argText || !argOutput)
    args.showHelp(1);

  core.genLocalImage(argText, argOutput);
}

main();

