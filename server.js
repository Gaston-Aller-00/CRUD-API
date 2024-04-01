const express =  require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()



const app = express();


// middleware
app.use(express.json())
//--------------
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use(errorHandler)


const PORT = process.env.PORT || 5000 

app.listen(PORT,()=>{
    console.log(`Server is runnig on the port ${PORT}`);
})


