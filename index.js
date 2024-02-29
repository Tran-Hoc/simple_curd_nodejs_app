const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route')
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', productRoute);


app.listen(3000, () => {
    console.log('Server is running on port ' + 3000)
})

app.get('/', (req, res) => {
    res.send('Hello from node api')
})

mongoose.connect("mongodb+srv://2001tranhoc:hKBozTUckDcFwNwf@cluster0.1jamchx.mongodb.net/crud_api?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to database!')
    })
    .catch(() => {
        console.log('Connection failed!')
    })