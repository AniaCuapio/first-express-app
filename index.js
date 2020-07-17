const app = require('express')

//GET
//Método + ruta ---> endpoint
app.get('/hola', (request, response) => {
    response.write('HOLA MUNDO!')
    response.end()
})

app.post('/hola', () => {
    response.write('Hola mundo desde express')
    response.end()
})

app.listen(8080, () => {
    console.log('servidor listo')
})