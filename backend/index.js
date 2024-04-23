const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const cors = require('cors');
const app = express()
const port = 4000

  app.use(express.json());
  app.use(cors());

//available Routes
app.use('/api/auth', require ('./routes/auth'))
app.use('/api/serviceRoutes', require ('./routes/serviceRoutes'))
app.patch('/api/updateservice/:id', require ('./routes/serviceRoutes'))
app.use('/api/fetchitemsofmenswear/:serviceId', require ('./routes/serviceRoutes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



