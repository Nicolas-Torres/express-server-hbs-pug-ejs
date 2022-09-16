const express = require('express')

const { Router } = express

const router = Router()

const productos = [{
    title: "The Hobbit",
    price: "45.25",
    thumbnail: "www.google.com.pe/TheHobbit.png",
    id: 1
    }]

router.get('/productos',(req,res) => {
    res.render("productos",{productos: productos})
    // res.send(productos)
})

router.get('/productos/:id',(req,res) => {
    const { id } = req.params
    const index = productos.findIndex(val => val.id == id)
    console.log(index)
    if(index == -1){
        res.send({error: "producto no encontrado"})
    }else{
        const producto = productos[index]
        res.send(producto)
    }
})

router.post('/productos',(req,res) => {
    const { title, price, thumbnail } = req.body
    productos.push({title, price, thumbnail, id: productos.length + 1})
    // res.send(productos)
    res.redirect('/')
})

router.put('/productos/:id',(req,res) => {
    const { id } = req.params
    const { title, price, thumbnail } = req.body

    const index = productos.findIndex(val => val.id == id)
    
    if(index == -1){
        res.send({error: "producto no encontrado"})
    }else{
        productos[index].title = title || productos[index].title
        productos[index].price = price || productos[index].price
        productos[index].thumbnail = thumbnail || productos[index].thumbnail
        res.send(productos[index])
    }
})

router.delete('/productos/:id',(req,res) => {
    const { id } = req.params
    const index = productos.findIndex(val => val.id == id)
    if(index == -1){
        res.send({error: "producto no encontrado"})
    }else{
        productos.splice(index,1)
        productos.forEach((val,i=0) => val["id"] = i+1)
        res.send(productos)
    }
})

module.exports = router