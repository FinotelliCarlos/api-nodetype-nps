import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({ message: "Busca realizada!"});
})

app.post('/',(req, res) => {
    return res.json({ message: "Dados Salvos!"});
})

app.listen(3333, () => console.log("Server it's Running!!!"))