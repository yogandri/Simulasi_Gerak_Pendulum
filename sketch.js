//Inisiasi Variabel
let theta;                  // sudut awal
let pTali    = 150;         // panjang tali
let thetaVel = 0;           // kecepatan sudut awal
let thetaAcc = 0;           // percepatan sudut awal
let ballSize = 40;          // Ukuran bola
let gravity  = 0;           // gravitasi
let damping  = 0;           // redaman awal

//Gambar
let sudut;
let itera;
let mtk;

function preload(){
  sudut = loadImage("Sudut.png")
  itera = loadImage("ITERA.png")
  mtk = loadImage("mtk.png")
}


function resetNilai() {
  pTali    = 150; 
  gravity  = 0;
  ballSize = 40;
  theta    = 0;
  damping  = 0;
}

//Tambah dan Kurangi Panjang Tali
function Ttali(){
  pTali += 10
}

function Ktali(){
  pTali -= 10
  
  if (pTali < 10) {
    pTali = 10;
 }
}

//Tambah dan Kurangi Besar Pendulum
function Tbola(){
  ballSize += 10
}

function Kbola(){
  ballSize -= 10
  
  if (ballSize < 0) {
    ballSize = 0;
 }
}

//Tambah dan Kurangi Gravitasi
function Tgravitasi(){
  gravity += 1
}

function Kgravitasi(){
  gravity -= 1
  
  if (gravity < 0) {
    gravity = 0;
 } 
}

//Tambah dan Kurangi Redaman
function Tdamping(){
  damping += 0.01
}

function Kdamping(){
  damping -= 0.01
  
  if (damping < 0) {
    damping = 0;
 }
}


function setup() {
  createCanvas(1200, 550);
  
  //tombol Reset
  let tombolReset = createButton("Reset Angka");
  tombolReset.position(1085, 125);
  tombolReset.mousePressed(resetNilai)
  
  //tomboh tambah panjang
  let tTali = createButton("+")
  tTali.position (270,125)
  tTali.mousePressed(Ttali)
  
  //Tombol Kurangi Panjang
  let kTali = createButton("-")
  kTali.position (240,125)
  kTali.mousePressed(Ktali)
  
  
  //tomboh tambah besar bola
  let tBola = createButton("+")
  tBola.position (470,125)
  tBola.mousePressed(Tbola)
  
  //Tombol Kurangi Besar Bola
  let kBola = createButton("-")
  kBola.position (440,125)
  kBola.mousePressed(Kbola)
  
  
  //Tombol tambah Gravitasi
  let tGravitasi = createButton("+")
  tGravitasi.position (660,125)
  tGravitasi.mousePressed(Tgravitasi)
  
  //Tombol Kurangi Gravitasi
  let kGravitasi = createButton("-")
  kGravitasi.position (630,125)
  kGravitasi.mousePressed(Kgravitasi)
  
  
  //Tombol tambah Redaman
  let tDamping = createButton("+")
  tDamping.position (870,125)
  tDamping.mousePressed(Tdamping)
  
  //Tombol Kurangi Redaman
  let kDamping = createButton("-")
  kDamping.position (840,125)
  kDamping.mousePressed(Kdamping)
  
  
  //menambahkan besar sudut awal
  s = createInput(0)
  s.position(30, 125)
  s.changed(sudut)
  sudut();

function sudut(){
  theta = radians(s.value())
 } 
}

function draw() {
  background("#000852");
  
  //Header
  fill("#A2A6B7")
  rect(20,10,1160,70)
  
  fill("black")
  textSize(25)
  text("P R O J E C T   P E N D U L U M"               ,420,42)
  textSize(15)
  text("Mata Kuliah Visualisasi Dalam Sains (MA 2213)" ,445,65)
 
  image(mtk,340,15,50,50)
  image(itera,820,15,50,50)
  
  //Navigation Bar
  fill("#A2A6B7")
  rect(20,90,1160,60)
  

  //Content
  rect(20,160,790,300)

  //Sidebar
  rect(820,160,360,300)
  
  fill("black")
  textSize(14)
  text("Pendulum merupakan contoh sistem fisik yang",845,180)
  text("menggambarkan gerakan periodik. Gerakan"    ,845,200)
  text("pendulum dipengaruhi oleh gaya gravitasi"   ,845,220)
  text("yang bekerja pada massa pendulum, serta"    ,845,240)
  text("panjang dan sudut awalnya"                  ,845,260)
  
  text("Persamaan Pendulum Sederhana :"              ,845,300)
  text("ω(t) = ω(t-∆t) + ((-g)/L(sin⁡(θ(t-∆t)))) * ∆t",845,320)
  text("θ(t)  = θ(t-∆t) + ω(t) * ∆t"                 ,845,345)

  text("Persamaan Pendulum Dengan Faktor Redaman :"                ,845,390)
  text("ω(t) = ω(t-∆t) + ((-g)/L(sin⁡(θ(t-∆t)) - (Q.ω(t-∆t)))) * ∆t",845,410)
  text("θ(t)  = θ(t-∆t) + ω(t) * ∆t"                               ,845,435)
  
  //Fotter
  fill("#A2A6B7")
  rect(20,470, 1160,70)
  
  fill("black")
  textSize(15)
  text("INFORMASI KELOMPOK 2 :"            ,22,485)
  text("1. Yoga Andriyanto (121160008)"    ,22,510)
  text("2. Tiara Juliana (121160107)"      ,22,535)
  text("3. Cornelia Marsela (121160014)"   ,300,510)
  text("4. Peniel Manoah J H (119160092)"  ,300,535)
  text("5. Eni Perlove (121160088)"        ,590,510)
  text("6. Dyah Ayu W (121160073)"         ,590,535)
  text("7. Risma Dewi (121160051)"         ,850,510)
  
  
  //Navigation Control
  fill("black")
  textSize(16)
  text("Masukkan Sudut Awal :",22,110)
  
  
  //Menampilkan nilai variabel
  textSize(16)
  fill("black")
  text("Panjang Tali : "+pTali           ,230,110)
  text("Besar Bola : "+ballSize          ,430,110)
  text("Gaya Gravitasi : "+gravity       ,620,110)
  text("Besar Redaman : "+damping        ,830,110)
  
  fill("black")
  rect(400,160,40,20)
  image(sudut,320,177,200,100)
  
  
  
  //Koding Simulasi
  translate(width/2-180, 180); // Pusatkan canvas di tengah
  
  // Menghitung percepatan sudut
  thetaAcc = (-gravity / pTali) * sin(theta) -(damping * thetaVel);
  
  // Menghitung kecepatan sudut
  thetaVel += thetaAcc;
  
  // Menghitung sudut
  theta += thetaVel;
  
  // Hitung koordinat ujung tali
  let x = pTali * sin(theta);
  let y = pTali * cos(theta);
  
  // Gambar tali
  stroke(0);
  strokeWeight(2);
  line(0, 0, x, y);
  
  // Gambar bola
  noStroke();
  fill("#FF0022");
  ellipse(x, y, ballSize, ballSize);
  
}