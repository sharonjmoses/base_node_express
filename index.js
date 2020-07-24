const express = require('express')
const app = express()
 
const route = require('./Router/route');

const port = 3008

app.use('/api', route)
 
// app.listen(3008)


app.listen(process.env.port || port, () => console.log(`App listening on port ${port}!`));

// app.listen(port, ()=>console.log(`APP IS RUNNING ${port}`))