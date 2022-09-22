const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "numbre",
    demandOption: true,
    describe: "Pon una base y te dare su tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en la consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    describe: "Imprime todas las tablas hasta el numero indicado",
  }).argv;

module.exports = argv;
