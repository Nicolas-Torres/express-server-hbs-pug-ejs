const express = require('express')

const app = express()
const productos = require('./productos')

const PORT = process.env.PORT || 8082

app.use(express.urlencoded({extended: true}))
app.use(express.json())
    
// app.engine("hbs", handlebars.engine({
//             extname: "hbs",
//             layoutsDir: __dirname + "/views/layouts",
//             defaultLayout: "index",
// }))

app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render("form") 
});
app.use('/', productos)



const server = app.listen(PORT, () => {
    console.log(`Server express con handlebars iniciado - PORT: ${PORT}`)
})


server.on('error', err => {
    console.log(err.message)
})















