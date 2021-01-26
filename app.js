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
        {nama: "Biro PSDM", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link: "/divisi/psdm"},
        {nama: "Divisi Humas", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link:"/divisi/humas"},
        {nama: "Divisi Keilmuan", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link: "/divisi/keilmuan"},
        {nama: "Divisi Sosmas", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link:"/divisi/sosmas"},
        {nama: "Divisi MIT", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link:"/divisi/mit"},
        {nama: "Divisi Kawirus", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link: "/divisi/kawirus"},
        {nama: "Divisi PPM", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra", link: "/divisi/ppm"}
    ]


    res.render("homepage", {ph:ph, divisi:divisi})
})

app.get("/divisi/:id", function(req, res){

    class Pengurus{
        constructor(nama, jabatan, foto){
            this.nama = nama;
            this.jabatan = jabatan;
            this.foto = `../images/foto/${foto}`;
        }
    }

    class Divisi{
        constructor(nama, namaAbb, ketua, deskripsi, benefit, cocok, proker, subkoor){
            this.nama = nama
            this.namaAbb = namaAbb
            this.ketua = ketua
            this.deskripsi = deskripsi
            this.benefit = benefit
            this.cocok = cocok
            this.proker = proker
            this.subkoor = subkoor
        }
    }

    let mit = new Divisi(
        "Divisi Multimedia dan IT",
        "MIT",
        new Pengurus("Kinanthi", "Ketua DIvisi MIT", "kinan.png"),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra",
        ["Benefit1", "Benefit2", "Benefit3"],
        ["cocok1", "cocok2", "cocok3", "cocok4"],
        [
            {nama: "proker1", deskripsi: "deskripsi proker1"},
            {nama: "proker2", deskripsi: "deskripsi proker2"},
            {nama: "proker3", deskripsi: "deskripsi proker3"},
            {nama: "proker4", deskripsi: "deskripsi proker4"},
            {nama: "proker5", deskripsi: "deskripsi proker5"},
            {nama: "proker6", deskripsi: "deskripsi proker6"}],
        [
            new Pengurus("Irfan", "Sub Koor IT", "irfan.png"),
            new Pengurus("Okta", "Sub Koor Desain", "irfan.png"),
            new Pengurus("Kartika", "Sub Koor Kreatif", "irfan.png"),
            new Pengurus("Adhi", "Sub Koor Publikasi", "irfan.png")]
    )

    switch(req.params.id){
        case "mit":
            divisi = mit;
            break;
        case "psdm":
            divisi = mit;
            break;
        case "humas":
            divisi = mit;
            break;
        case "sosmas":
            divisi = mit;
            break;
        case "kawirus":
            divisi = mit;
            break;
        case "kelimuan":
            divisi = mit;
            break;
        case "ppm":
            divisi = mit;
            break;
    }
        
    res.render("divisi", {divisi:divisi})

})

app.get("/pendaftaran", function(req, res){
    res.render("pendaftaran")
})


app.listen(process.env.PORT || "3000")