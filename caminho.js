const path = require("path");

const getPastaRaiz = () => {
  return path.dirname(process.mainModule.filename);
};

module.exports = {
    getPastaRaiz
};
