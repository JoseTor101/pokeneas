const { POKENEAS } = require('../mocks/pokeneas');
const os = require("os");

let pokeneas_size = POKENEAS.length;

const getFullPokenea = () => {
    let data = POKENEAS[Math.floor(Math.random() * pokeneas_size)];
    data.container = os.hostname();
    return data;
}

module.exports = { getFullPokenea };