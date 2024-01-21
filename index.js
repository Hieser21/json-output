const express = require('express');
const fs = require('fs')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    let output = JSON.parse(fs.readFileSync('data.json'));
    res.status(200).json(output)
})
app.post('/data', async(req, res) => {

    let data = req.body
    console.log(data)
    res.header('Access-Control-Allow-Origin', '*')
    fs.writeFileSync('data.json', JSON.stringify(data))
    return res.status(200).json({success: true, message: "Data changed"})
})
app.get('/data', (req, res) => {
    let output = fs.readFileSync('data.json')
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).json({success: true, data: JSON.parse(output)})
})



app.listen(8000)
