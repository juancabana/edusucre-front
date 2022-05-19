'use strict'

const jwt = require('jsonwebtoken')

// function sign(payload, secret, callback) {
//     jwt.sign(payload, secret, callback)
    
// }
// function verify(token, secret, callback) {
//     jwt.verify(token, secret, callback)
    
// }
// module.exports = {
//     sign,
//     verify
// }

// Para hacer uso de estas funciones puedo ir a la terminal y puedo crear un nuevo token, accediendo a la carpeta 'src'
// ejecutando el comando 'cd .\src\', luego ejecuto el comando 'node', 
// ejecuto el comando 'var auth = require('./auth')',
// ejecuto el comando 'auth.sign({username: 'JuanCabana'}, 'cabana', console.log)', puedo copiar el token
// y ponerlo en la página jwt.io, y se va a mostrar todo lo que envié al jwt.

// Para verificar ejecuto el comando 'auth.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikp1YW5DYWJhbmEiLCJpYXQiOjE2NTE2NzQ4NDR9.OgmrFqX2AlwkOqIYtCk5Nf_ARx1mTm5hf67GOkWK4b0', 'cabana', console.log)'