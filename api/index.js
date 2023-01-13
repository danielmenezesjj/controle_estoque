const express = require('express')
const routes = require('./routes')
const app = express()
const cors = require('cors')

app.use(cors())
routes(app);
const port = 4000;
app.listen(port, () => console.log(`A api está rodando na porta ${port}`))
module.exports = app;
