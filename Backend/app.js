const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
.then(data=>{
    
})





const port = 3000



app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))