const fs = require('fs').promises;
let jsonData;

async function loadJSON() {
    try {
        const data = await fs.readFile('./src/palpedia.json', 'utf8');
        jsonData = JSON.parse(data);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

function accessJSON() {
    if (jsonData) {
        return jsonData
    } else {
        console.error('Os dados JSON não foram carregados ainda.');
    }
}

module.exports = { loadJSON, accessJSON };