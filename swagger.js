const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/index.ts']

swaggerAutogen(outputFile, endpointsFiles).then(async () => {
    await require('./src/routes/index.ts')
})