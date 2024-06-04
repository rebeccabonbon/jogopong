let largura = 450
let altura = 300
let xbolinha = 200
let ybolinha = 200
let xraquete = 5
let yraquete = altura/2
let xraqueteop = 440
let yraqueteop = altura/2
let raquetelarg = 10
let raquetealt = 100
let diametro = 30
let raio = diametro/2
let xvelocidade = 5
let yvelocidade = 5
let yvelocidadeop;
let colidiu = false
let minhapontuacao=0
let pontuacaoop=0



function setup() {
  createCanvas(largura, altura);
}

function draw() {
  background(0);
  createcircle();
  movimentobolinha();
  bateevolta();
  criaraquete();
  sobedesce();
  colisaoraquete();
  criaraqueteop();
  movimentoop();
  colisaoraqueteop();
  criaplacar();
  marcaponto();
}
function createcircle() {
  circle(xbolinha,ybolinha,diametro)
}
function movimentobolinha() {
  xbolinha += xvelocidade
  ybolinha += yvelocidade
}
function bateevolta() {
  if (xbolinha + raio > largura || xbolinha - raio < 0)
    xvelocidade *= -1
  if (ybolinha + raio > altura || ybolinha - raio < 0)
    yvelocidade *= -1
}
function criaraquete() {                    rect(xraquete,yraquete,raquetelarg,raquetealt)
}
function sobedesce() {
  if (keyIsDown(UP_ARROW))
    yraquete -= 10
  if (keyIsDown(DOWN_ARROW))
    yraquete += 10
}
function colisaoraquete(){
if (xraquete + raquetelarg > xbolinha - raio 
    && ybolinha - raio < yraquete + raquetealt 
    && ybolinha + raio > yraquete)
  xvelocidade *= -1}
function criaraqueteop(){
  rect(xraqueteop, yraqueteop, raquetelarg, raquetealt)
}
function movimentoop(){
  yvelocidadeop = ybolinha - yraqueteop - raquetelarg/2 - 120
  yraqueteop += yvelocidadeop
}
function colisaoraqueteop(){
colidiu = collideRectCircle(xraqueteop,yraqueteop,raquetelarg,raquetealt,xbolinha,ybolinha,diametro)
  if(colidiu)
    xvelocidade*=-1
}
function criaplacar(){
  fill (color (255, 140,0))
  rect(100,10,40,30)
  rect(340,10,40,30)
  fill (255)
  text (pontuacaoop,340,35)
  fill(240)
  textSize(26)
  text(minhapontuacao,100,35)
}
  
function marcaponto(){
  if (xbolinha<15)
    pontuacaoop+=1
  if (xbolinha>435)
    minhapontuacao+=1
}
