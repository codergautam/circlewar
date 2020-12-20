const express = require('express')
const app = express()
const port = 3000

app.use("/dist", express.static("./dist"))
app.use(express.static("./assets"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/client/index.html")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})