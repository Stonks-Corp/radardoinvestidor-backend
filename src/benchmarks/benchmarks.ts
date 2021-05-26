function getBenchmarks() {

    const request = require('request');

    request.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados?formato=json&dataInicial=01/01/2020&dataFinal=24/05/2021', (error, response, body) => {
        if (error) {
            console.dir(error);
        }
        console.dir(JSON.parse(body));
    })
}

export default getBenchmarks;
