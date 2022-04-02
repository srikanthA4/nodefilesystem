const fs = require("fs");

const express = require("express")
const app = express()

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const timestamp = () => {
    const d = new Date();
    console.log(d);
    var content = d.toString()
    console.log(content);


    var date = d.getDate()
    var month = d.getMonth() + 1
    var time = (d.getHours() + " " + d.getMinutes() + " " + d.getSeconds())
    fs.writeFile(`./Timestamp/${"(" + date + "-" + month + ")" + "-" +"(" + time +")"}.txt`, content, err => {
        if (err) {
            console.log(err)
        }
        console.log("file has been created with current timestamp")
    })
    return content
}

app.get("/", (req, res) => {
    res.send(`Create New File: Use url/createFile & Get Files: Use url/getFile`);
  });
  


app.get("/createFile", (request, response) => {
    response.send(timestamp())
})




app.get("/getFile", (request, response) => {
    var storage = fs.readdirSync("./Timestamp");
  response.send(storage.sort());
})

app.listen(PORT,() => console.log("the server is started",PORT));

