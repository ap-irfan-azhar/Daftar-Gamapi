const express = require('express');
const ejs = require('ejs');

app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", function(req, res){
    let ph = [
        {nama: "Fery", jabatan: "Mahelis Mahasiswa", foto:"fery.png"},
        {nama: "Fery", jabatan: "Bendahara 1", foto:"fery.png"},
        {nama: "Fery", jabatan: "Bendahara2", foto:"fery.png"},
        {nama: "Fery", jabatan: "Sekretaris1", foto:"fery.png"},
        {nama: "Fery", jabatan: "Sekretaris2", foto:"fery.png"},
    ]

    let divisi = [
        {nama: "Biro PSDM", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link: "/"},
        {nama: "Divisi Humas", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link:"/"},
        {nama: "Divisi Keilmuan", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link: "/"},
        {nama: "Divisi Sosmas", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link:"/"},
        {nama: "Divisi MIT", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link:"/divisi/mit"},
        {nama: "Divisi Kawirus", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link: "/"},
        {nama: "Divisi PPM", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link: "/"}
    ]


    res.render("homepage", {ph:ph, divisi:divisi})
})


app.listen("3000")