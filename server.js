const express =  require('express')
const dotenv = require('dotenv').config()



const app = express();


app.use("/api/contacts",require("./routes/contactRoutes"))

const PORT = process.env.PORT || 5000 

app.listen(PORT,()=>{
    console.log(`Server is runnig on the port ${PORT}`);
})


