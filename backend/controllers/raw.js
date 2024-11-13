const { POKENEAS } = require('../mocks/pokeneas');
const os = require("os");

let pokeneas_size = POKENEAS.length;

const getRawPokenea = () => {
    let data = {};
    let randomPokenea = POKENEAS[Math.floor(Math.random() * pokeneas_size)];
    let { image, phrase, ...pokeneaWithoutImage } = randomPokenea;
    data.pokenea = pokeneaWithoutImage;
    data.container = os.hostname();

    return data;
}

module.exports = { getRawPokenea };