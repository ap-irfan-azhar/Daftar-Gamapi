const express = require('express');
const ejs = require('ejs');

app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", function(req, res){
    let ph = [
        {nama: "Vincenza Castaglione", jabatan: "Majelis Mahasiswa", foto:"vincen.png"},
        {nama: "Zulfa Annisa", jabatan: "Bendahara 1", foto:"zulfa.png"},
        {nama: "Anugrah Sasi Raya", jabatan: "Bendahara 2", foto:"sasi.png"},
        {nama: "Monica Nanda Bakti Nusa", jabatan: "Sekretaris 1", foto:"monic.png"},
        {nama: "Nuzul Nur Hanifah", jabatan: "Sekretaris 2", foto:"hani.png"},
    ]

    let divisi = [
        {nama: "Biro PSDM", deskripsi: "Asyik-in Ajah", link: "/divisi/psdm"},
        {nama: "Divisi Humas", deskripsi: "Creating Values Through Connections", link:"/divisi/humas"},
        {nama: "Divisi Keilmuan", deskripsi: "Think the Unthinkable", link: "/divisi/keilmuan"},
        {nama: "Divisi Sosmas", deskripsi: "create, connect, collab", link:"/divisi/sosmas"},
        {nama: "Divisi MIT", deskripsi: "THINK CREATIVE.", link:"/divisi/mit"},
        {nama: "Divisi Kawirus", deskripsi: "HIDUP CUAN (Gak jualan risol kok 👍)" , link: "/divisi/kawirus"},
        {nama: "Divisi PPM", deskripsi: "santai berkualitas", link: "/divisi/ppm"}
    ]


    res.render("homepage", {ph:ph, divisi:divisi, title: "Gamapi Butuh Kamu"})
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
        constructor(nama, namaAbb, ketua, deskripsi, benefit, cocok, proker, subkoor, logo){
            this.nama = nama
            this.namaAbb = namaAbb
            this.ketua = ketua
            this.deskripsi = deskripsi
            this.benefit = benefit
            this.cocok = cocok
            this.proker = proker
            this.subkoor = subkoor
            this.logo = `../images/logo/${logo}`
        }
    }

    class Proker{
        constructor(nama, deskripsi){
            this.nama = nama
            this.deskripsi = deskripsi
        }
    }

    let mit = new Divisi(
        "Divisi Multimedia Informasi dan Teknologi",
        "MIT",
        new Pengurus("Kinanthi Sinaring Tyas", "Ketua DIvisi MIT", "kinan.png"),
        "Kreatif jadi salah satu poin penting dalam menyediakan ruang bagi mahasiswa DMKP untuk berkarya, terutama di dalam penggunaan teknologi digital, seperti alat digital, internet, sosial media, dan lain sebagainya. Di MIT, kita bisa menjadi super team, untuk saling berbagi ilmu, saling menyatukan ide, saling cari tahu solusi, dan saling-saling lainnya!",
        ["Kita bekerja sama sebagai tim, bantuan akan selalu datang kapan saja kamu butuh", "Kita bisa menuangkan ide-ide yang masih fresh, yang baru keluar dari kepala kita", "Bosan sama perkuliahan belajar tentang kebijakan publik? Di sini, kamu bisa me-refresh pikiran kamu sejenak, sekaligus mengasah hard-skill kamu yang keren itu!", "Punya pertemanan yang solid dengan our super team!", "Belajar banyak hal baru, seperti branding media sosial, analisis media sosial, etc!"],
        ["Mau belajar bareng ", "Responsif", "Mampu menghadapi tekanan ", "Mampu menciptakan ide/alternatif baru", "krab dengan penggunaan teknologi", "Memiliki akses internet yang cukup baik"],
        [
            new Proker("Monday Info Unic", "Informasi yang hadir setiap Senin mengenai seluk beluk lingkungan kampus dan isu-isu yang sedang terjadi di media sosial Indonesia."),
            new Proker("What’s On Today?", "Informasi singkat mengenai perayaan hari-hari besar di Indonesia dan dunia internasional."),
            new Proker("Liputan Gamapi", "Dokumentasi menarik dari kegiatan-kegiatan DMKP dan Gamapi!"),
            new Proker("Monthly Info Unic", "Ilmu baru yang akan dikemas dalam bentuk infografis mengenai seluk beluk media dan teknologi."),
            new Proker("MKPodcast", "Wadah penyalur kegiatan Gamapi yang dikemas dalam bentuk podcast untuk berbagi informasi kepada pendengar."),
            new Proker("Media Study", "Web Seminar yang ngobrolin tentang pemanfaatan teknologi digital untuk mahasiswa DMKP maupun masyarakat umum."),
            new Proker("Reformedia", "Majalah daring Gamapi. Berisi rekap konten selama setahun, fresh-baked article, dan artworks dari mahasiswa DMKP yang rilis di akhir tahun kepengurusan."),
            new Proker("Website Gamapi", "Penyebaran informasi kepada publik, konten edukasi yang lebih lengkap, wadah mahasiswa untuk berkarya, dan menjadi salah satu sarana branding DMKP dan Gamapi.")
        ],
        [
            new Pengurus("Muhammad Irfan Azhar", "Sub Koor IT", "irfan.png"),
            new Pengurus("Ksatria Okta Perdana", "Sub Koor Desain", "okta.png"),
            new Pengurus("Kartika Dwi Safarina", "Sub Koor Kreatif", "kartika.png"),
            new Pengurus("Nur Adhi Inawan", "Sub Koor Publikasi", "adhi.png")
        ],
            "mit.png"
    )

    let humas = new Divisi(
        "Divisi Hubungan Masyarakat",
        "Humas",
        new Pengurus("Maysa Ameera Andarini", "Ketua Divisi Humas", "maysa.png"),
        "Divisi Hubungan Masyarakat merupakan citra dari sebuah organisasi sekaligus menjadi wadah untuk berkarya, berkembang dan menciptakan nilai positif serta hubungan yang benefisial melalui kerjasama dengan pihak internal maupun external MKP",
        ["Long-lasting and meaningful connections", "Adaptability", "Advance your communication skills", "Create your Professional Portofolio with us"],
        ["Memiliki minat dalam public relations ","Percaya diri", "Memiliki skill komunikasi yang baik", "Responsif", "Berkomitmen", "Memiliki koneksi dengan pihak eksternal seperti media partners dan instansi lainnya is a plus!"],
        [
            new Proker("Halo, Gamapi?", "Halo, Gamapi merupakan platform dimana teman-teman MKP dapat menceritakan keresahan atau menyuarakan opini mereka. Program kerja ini inisiasi hotline pertama di Gamapi yang akan membantu menjaring aspirasi Mahasiswa MKP, loh!"),
            new Proker("Don’t Miss It!", "Jangan sampai kelewatan nih, info-info terkini mengenai beasiswa, lomba dan magang ya guys! Program kerja Don’t Miss It ini bertujuan untuk menyediakan informasi terkait lowongan magang, lomba, dan beasiswa kepada mahasiswa MKP melalui platform media sosial Gamapi."),
            new Proker("Deep Talk", "Lebih dekat dengan departemen yuk, temen-temen. Deep Talk bertujuan untuk menjembatani interaksi antara departemen dengan mahasiswa, dimana mahasiswa bisamenyampaikan isu-isu akademik dalam forum ini"),
            new Proker("Single-data Mahasiswa", "Merupakan program kerja Advokasi yang berupaya mengumpulkan informasi setiap mahasiswa MKP secara menyeluruh, termasuk juga minat dan preferensi karir teman-teman sehingga bisa digunakan sebagai input untuk kegiatan Gamapi selanjutnya."),
            new Proker("Hi, Alumni!", "Kepingin tau nggak sih, bagaimana cerita-cerita hebat dari alumni kita? Program kerja ini bertujuan untuk mendekatkan teman-teman Mahasiswa aktif dengan alumni DMKP dalam memberikan insight baru mengenai perjalanannya untuk menggapai kesuksesan"),
            new Proker("Policy O Rama", "Connect with amazing speakers from their exceptional careers! Policy O Rama merupakan program kerja yang bertujuan untuk mengenalkan Exposure Career pada jurusan MKP / administrasi negara di seluruh Indonesia melalui inspiring talkshow"),
            new Proker("Gamapi Roadshow", "Jadi duta MKP di sekolah kalian bisa lewat Gamapi Roadshow, loh. GAMAPI Roadshow bertujuan untuk menarik minat siswa/i SMA sederajat untuk menjadikan DMKP sebagai pilihan jurusan mereka"),
            new Proker("Public Visit", "Public Visit adalah program kerja yang menawarkan mahasiswa/i DMKP untuk dapat merasakan kuliah secara langsung dengan mengunjungi instansi pemerintah yang tentunya berkaitan dengan mata kuliah tertentu di DMKP"),
            new Proker("Benchmarking", "Kenalan sama orang-orang keren di himpunan mahasiswa lainnya melalui Benchmarking! Benchmarking bertujuan untuk memperluas koneksi dan saling bertukar ilmu mengenai organisasi, jurusan dan hal menarik lainnya bersama mahasiswa berbagai himpunan universitas di Indonesia"),
            new Proker("Single-Data Alumni", "Program kerja ini merupakan support system dari Hi-Alumni yang berfungsi untuk mengumpulkan data alumni berisikan nama, pekerjaan, tahun lulusan, account linkedin, dan nomor kontak yang dapat dihubungi.")
        ],
        [
            new Pengurus("Nandariza Yoga Pertiwi", "Subkoor Advokasi", "nanda.png"),
            new Pengurus("Reza Triana Putri", "Subkoor Eksternal", "reza.png")
        ],
        "humas.png"

    )

    let kawirus = new Divisi(
        "Divisi Kewirausahaan",
        "Kawirus",
        new Pengurus("Fanny fegiansyah", "Ketua Divisi Kewirausahaan", "fanny.png"),
        "Kawirus merupakan tempat bagi mahasiswa DMKP yang berminat untuk bersama-sama memenuhi hasrat berwirausahanya. Selain itu, divisi ini juga sebagai penyokong dana tetap GAMAPI setiap tahun. ",
        ["Mendapat insights langsung mengenai entrepreneurship (kewirausahaan) melalui program kerja Kawirus", "Menambah teman", "Menambah skill entrepreneurship dong pastinya, karena pada saat ini skill entrepreneurship merupakan soft skill yang sangat dibutuhkan mahasiswa", "Dapat sharing investasi/reksadana/saham bersama"],
        ["Niat, jujur, dan komitmen", "Mau belajar dan berusaha", "Kreatif dan inovatif dalam bidang wirausaha", "Punya link sponsor (nilai plus)", "Punya usaha atau berniat ingin membuka usaha (nilai plus)"],
        [
            new Proker("Sekolah Finansial", "Merupakan kegiatan dimana teman-teman bisa belajar bareng mengenai insights financial seperti financial planning hingga investasi."),
            new Proker("Company Visit", "nantinya kita bareng-bareng menilik kehidupan perusahaan rintisan di Indonesia dan mencari tahu seluk beluk didalamnya."),
            new Proker("Gamapi Store", "Ini nih tokonya MKP, kalau temen-temen beli korsa itu tuh masuk ke porgram kerja ini. Nantinya juga tidak hanya korsa lho yang dijual mulai dari totebag, jaket, kaos hingga sticker juga bisa dijual kok."),
            new Proker("Kelas Barista", "sering ngopi tapi juga kepo cara bikinnya? Tenang nanti di kelas barista kalian dapat belajar menjadi barista dengan di pandu oleh ahlinya"),
            new Proker("Public E-sport", "Kawirus juga ngadain lomba nih buat nambah pemasukan. Public esport nanti kita belajar bareng ngadain lomba E-sport biar ada tambahan pemasukan juga hihihi."),
            new Proker("MKPreneur", "temen-temen yang punya usaha jangan khawatir, nanti kita wadahi kok buat bantu promosiin dan juga sharing bareng biar temen-temen MKP juga banyak yang ikut berwirausaha")
        ],
        [
            new Pengurus("Vika Apriyani", "Sub Koor Pengembangan", "vika.png"),
            new Pengurus("Diva Humaira", "Sub Koor Dana Usaha", "diva.png")
        ],
        "kawirus.png"
    )

    let keilmuan = new Divisi(
        "Divisi Keilmuan",
        "Keilmuan",
        new Pengurus("Maulana Aji Negara", "Ketua Divisi Keilmuan", "aji.png"),
        "Divisi Keilmuan adalah divisi yang menjadi garda depan GAMAPI dalam pengawalan isu strategis, pengembangan khazanah keilmuan administrasi publik dan kebijakan publik, serta sebisa mungkin memberikan dasar ilmiah bagi GAMAPI dalam bertindak maupun bersikap sebagai organisasi mahasiswa",
        ["Mendapat Circle Rekan Berpikir", "Akselerasi ilmu", "Mengasah skill", "Panjat Sosial"],
        ["Penting niat dulu dan mau belajar hal yang baru","Kritis, mampu mempertanyakan kembali asumsi yang ada", "Responsif, nggak cuma ngeread doang dan aktif saat diskusi atau rapat", "Mampu bekerja sama dalam tim", "Selalu update terhadap isu-isu aktual, nggak selalu isu yang berat-berat bisa juga lika-liku kemahasiswaan duniawi", "Terbuka akan kritik dan masukan", "Bertanggung jawab dan jujur, loss ra rewel"],
        [
            new Proker("Riset GAMAPI", "Melakukan riset terkait  topik strategis atau populer Contoh: Riset preferensi pemimpin politik, riset kesehatan mental, dll"),
            new Proker("Riset Internal GAMAPI", "Melakukan riset dalam rangka menilai GAMAPI sebagai sebuah organisasi"),
            new Proker("Review Artikel Jurnal", "Membuat review dari artikel atau jurnal menarik yang relevan dengan MKP"),
            new Proker("Kajian GAMAPI", "Membuat kajian tentang isu strategis nasional atau regional yang diupayakan bersifat berkelanjutan dalam pengawalan isu tersebut Contoh: Kajian Resesi ekonomi, kajian vaksin dll"),
            new Proker("Kajian Kolaboratif", "Membuat kajian tentang isu strategis nasional atau regional dengan berkolaborasi dengan organisasi mahasiswa lain"),
            new Proker("Kelas GAMAPI", "Kelas pelatihan untuk meningkatkan skill tertentu yang ditujukan untuk Mahasiswa DMKP. Kelas GAMAPI menyesuaikan minat dari Mahasiswa DMKP"),
            new Proker("Diskusi GAMAPI", "Diskusi mengundang narasumber untuk membahas suatu isu strategis yang aktual dan faktual. Bisa  bersifat kolaboratif menyesuaikan isu. Contoh: Diskusi Omnibus Law, DIskusi birokrasi selama pandemi dll"),
            new Proker("Mentoring GAMAPI", "Mentoring bagi mahasiswa DMKP menjelang UTS atau UAS Hotline Lomba GAMAPI: Memfasilitasi mahasiswa DMKP yang ingin mengikuti lomba (LKTI, debat, essay, konferensi)"),
            new Proker("Pojok Buku", "Bekerja sama dengan departemen membedah buku."),
            new Proker("Gamapi Open Submission", "Keilmuan Gamapi menerima karya tulis mahasiswa DMKP dalam bentuk essay, opini, dan infografis")
        ],
        [
            new Pengurus("Ruth Manullang", "Sub Koor Kastrat", "ruth.png"),
            new Pengurus("Benedikta Chiquita", "Sub Koor Riset", "chika.png"),
            new Pengurus("Stefan Advent", "Subkoor Pengembangan Wawasan", "stefan.png")
        ],
        "keilmuan.png"
    )

    let ppm = new Divisi(
        "Divisi Pengembangan dan Pemberdayaan Mahasiswa",
        "PPM",
        new Pengurus("Rizqitha Aqmaril Maulidina", "Ketua Divisi PPM", "kiki.png"),
        "Pengembangan dan Pemberdayaan Mahasiswa (PPM) merupakan tempat bagi mahasiswa DMKP dalam mengembangakan minat dan bakatnya melalui program kerja yang kolektif dan fun. PPM juga bertugas untuk menguatkan hubungan internal mahasiswa DMKP.",
        ["Belajar dalam event making / program making (cocok banget buat kamu pecinta dunia kreatif)", "Mengasah kemampuan berpikir secara kreatif dan inovatif", "Belajar berkoordinasi dan problem solving", "Udah pusing kejar deadline tugas tapi harus mikirin proker? Eits tenang aja program kerja di PPM dijamin anti spaneng", "team yang bisa diajak seru-seruan bareng anti baper!"],
        ["Kreatif dan inovatif", "Memiliki ketertarikan dibidang seni dan olahraga", "Proaktif, responsif dan komunikatif", "Dapat bekerja dalam tim", "berkomitmen"],
        [
            new Proker("PublicInspire", "Kelas online yang menyenangkan  seputar minat dan bakat mahasiswa"),
            new Proker("Ngluyur", "kegiatan jalan-jalan mahasiswa DMKP (psstt.. biasanya kita adain camping loh)"),
            new Proker("Paguyonan", "malam perayaan ulang tahun gamapi yang berisi pertunjukan seni oleh setiap angkatan"),
            new Proker("Lekker", "perlombaan seni dan olahraga antar angkatan mahasiswa DMKP"),
            new Proker("Ruang Memikat", "ruang bagi mahasiswa DMKP untuk berbagi cerita, pengalaman, minat, dan sebagainya"),
            new Proker("GYMKP", "buat kamu yang mau olahraga tapi alesan gapunya temen, disini kita olahraga bareng sesama mahasiswa DMKP"),
            new Proker("MKP ALL STAR", "penjaringan para atlet MKP untuk mengikuti berbagai cabang olahraga"),
            new Proker("Movie date MKP", "gapuya pacar buat diajak nonton? Tenang aja MKP selalu siap menemani kalian^^"),
            new Proker("Pameran MKP", "empat bagi mahasiswa DMKP menunjukkan hasil karya seni yang telah dibuat"),
            new Proker("Selasa korsa", "menurut survey, pakai korsa bareng-bareng bisa meningkatkan ke-kecean kamu loh...")
        ],
        [
            new Pengurus("Rizka Khairunissa Herdiani", "Sub Koor Seni", "rizka.png"),
            new Pengurus("Thoriqul Falah", "Sub Koor Olahraga", "thoriq.png")
        ],
        "ppm.png"
    )

    let sosmas = new Divisi(
        "Divisi Sosial Masyarakat",
        "Sosmas",
        new Pengurus("Riska Gabriella Dwi Lauciho Tarigan", "Ketua Divisi Sosmas", "riska.png"),
        "Sosmas bersama membentuk program, bergerak untuk masyarakat dan kolaborasi bersama banyak pihak. Sosmas hadir sebagai bentuk implementasi nyata dari salah satu tridarma perguruan tinggi, yaitu pengabdian masyarakat. Jangan berhenti berbuat kebaikan!",
        ["Upgrade yourself & your skill", "Networking (bakal ketemu orang-orang baru yg keren lhoo)", "Peka terhadap isu-isu sosial", "Tidak hanya simpati, tetapi juga empati", "Simulasi KKN", "Liburan dan jalan-jalan", "Kerja santuy anti spaneng, TAPI serius"],
        ["Memiliki kepribadian yang proaktif, seru, dan ceria", "Mau belajar hal-hal baru", "Domisili Jogja (diprioritaskan)", "Tertarik pada hal-hal kemasyarakatan", "Inovatif dan kreatif", "Siapapun boleh gabung sosmas, tanpa terkecuali, yg penting kemauan dan niat lov <3"],
        [
            new Proker("Takisz (Tabungan Kita Bersama)", "Bank milik Gamapi, dimana semua pihak bisa berdonasi dan berbagi. Yang nantinya akan sosmas bantuk untuk salurkan kepada pihak yang membutuhkan"),
            new Proker("Bernas (Berbagi Nasi)", "Pernah ga ngerasa kelaparan? Ga enak kan? Setiap insan manusia punya hak untuk kenyang. So, mari kita bantu teman-teman jalanan untuk mendapatkan haknya pula"),
            new Proker("Baksos (Bakti Sosial)", "Lewat baksos ini, sosmas ingin salurkan bantuan teman-teman dari Takisz. Agar bantuannya tepat sasaran."),
            new Proker("Angklung (Aksi Lingkungan)", "Sapa bilang sembari liburan ga bisa ngelakuin kegiatan sosial? Sosmas sih bisa ^^ Mau nanam pohon? Mau jalan-jalan ke pantai? Atau mau bertemu penyu-penyu lucu? Gabung sosmas dulu sini. Dan rasakan keseruan kami!"),
            new Proker("Sosmas Cerita", "Suka cari info-info sosial, lingkungan, dan masyarakat? Kita punya sosmas cerita. Lewat ini, akan banyak insight-insight baru yang terceritakan."),
            new Proker("Insan (Insan Pengabdian)", "Di sosmas juga sabi banget buat ngobrol-ngobrol asik with the expert soal dunia volunteer lho. Insan bakal dikemas dalam sebuah podcast, biar temen-temen yang lain bisa dengerin & tentunya dapet insight baru!"),
            new Proker("Bumdes (Bantu UMKM Desa)", "Sosmas akan membantu salah satu UMKM (surprise) mulai dari pengolahan, strategi marketing, social media, hingga sampai ke tangan konsumen."),
            new Proker("Mendes (Mlebu Ndeso)", "proker paling yahud dari sosmas! Disini bakal live in selama 2 hari, yaa berasa simulasi KKN gitu")
        ],
        [
            new Pengurus("Ariel Teguh Wibowo", "Sub Koor Sosial", "ariel.png"),
            new Pengurus("Dyah Ayu Ningrum", "Sub Koor Pengembangan Desa", "ayu.png")
        ],
        "sosmas.png"
    )

    let psdm = new Divisi(
        "Biro Pengembangan Sumberdaya Manusia",
        "PSDM",
        new Pengurus("Gaudentius Deanda Mahendra Putra", "Ketua Divisi PSDM", "dean.png"),
        "Divisi dengan tanggungjawab esktra dengan fokus internal dan kaderisasi. PSDM berusaha untuk menangkap isu dan permasalahan individu di Gamapi lalu berusaha menemukan solusinya. Di samping menyamankan, menentramkan, serta menjadi support system dari Gamapi. Recruitment, pengawasan, penilaian, serta evaluasi juga tanggungjawab PSDM yang lainnya",
        ["Keluarga baru yang seru dan menyenangkan (networking bertambah so pasti!)", "Keorganisasian yang seru dan ga kaku tetapi tetap bertanggungjawab (koor dan subkoor anti spaneng-spaneng club)", "Mengasah kemampuan problem solving", "Bisa jadi mata-mata divisi lain lhooo", "Kemampuan manajerial sumber daya manusia a.k.a latihan jadi HRD gitu (belajar bentuk konkret dari matkul sem 2 yaitu MSDM juga nih)"],
        ["Mau belajar dan berkembang: PSDM butuh temen-temen yang mau berjalan dan berlari bersama karena “No One Left Behind”", "Lebih suka bekerja dalam tim: PSDM suka gotong royong karena sekaligus mengamalkan sila ke-3 Pancasila", "Peduli sesama dan proaktif (kalo rajin menabung juga boleh sih hehehe)", "Cekatan dan berkomitmen", "Ceria, rame, asyik: karena PSDM ingin membangun suasana yang menyenangkan dan mengasyikkan", "No drama-baper club: karena drama hanya diperlukan di drakor, sinetron, dan setingan artis"],
        [
            new Proker("Gamapi Butuh Kamu! dan Oprec Sit In 2021", "alias bursa transfer"),
            new Proker("Goyang Gamapi dan Tarik Sist! Semongko!", "meet n greet bersama anggota baroe, no bonding no party!"),
            new Proker("Woles Dab~", "sesungguhnya semua yang kita lakukan harus dipertanggungjawabkan alias evaluasi per divisi brooo"),
            new Proker("Satelit", "kapan lagi kan yah ngepoin dan ngawasin dari divisi lain?"),
            new Proker("Rapotan"," evaluasi kinerja individu (UTS dan UAS)"),
            new Proker("Electoral Commission (ELCO)", "badan semi otonom di bawah psdm gamapi yang memfasilitasi pemilihan ketua gamapi"),
            new Proker("E-Sertifikat", "sesungguhnya setiap kepengurusan akan dapat sertifikat (tapi cetak sendiri hiyahiyahiya)"),
            new Proker("Leadership Talk", "webinar dengan materi yang berhubungan dengan kepemimpinan"),
            new Proker("Greetings", "kesempatan kamu buat ngucapin selamat pagi ke gebetan tanpa takut ketauan modus"),
            new Proker("Gamapost!", "tempatmu berkirim pesan kepada dia tanpa takut ketauan"),
            new Proker("Gamapi Ngobrolin Skills", "apa ga tertarik buat terlibat dalam proker besar psdm yang melibatkan seluruh divisi di Gamapi?"),
            new Proker("Gamapi? Curhat Yuk!", "berusaha menangkap keluh-kesah permasalahan individu di Gamapi lalu bersama kita elaborasikan untuk mencari solusinya")
        ],
        [
            new Pengurus("Annisa Nubian Pasha", "Sub Koor PSDM", "pasha.png")
        ],
        "psdm.png"
    )


    switch(req.params.id){
        case "mit":
            divisi = mit;
            break;
        case "psdm":
            divisi = psdm;
            break;
        case "humas":
            divisi = humas;
            break;
        case "sosmas":
            divisi = sosmas;
            break;
        case "kawirus":
            divisi = kawirus;
            break;
        case "keilmuan":
            divisi = keilmuan;
            break;
        case "ppm":
            divisi = ppm;
            break;
    }
    res.render("divisi", {divisi:divisi, title: divisi.nama})

})

app.get("/pendaftaran", function(req, res){

    let open = new Date("feb 6, 2021 05:00:00").getTime()
    let now = new Date().getTime()

    let distance = open - now
    
    
    page = distance <= 0 ? "pendaftaran": "countdown";
    

    res.render(page, {title: "Pendaftaran Gamapi"})
})


app.get("/how-to-apply", function(req, res){
    res.render("how-to-apply", {title: "How to Apply"})
})


app.listen(process.env.PORT || "3000")