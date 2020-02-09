var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var raio = 10;
var xAleatorio = sorteiaPosicao(800);
var yAleatorio = sorteiaPosicao(500);

const desenhaCirculo = (x, y, raio, cor) => {
    ctx.fillStyle = cor;
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.fill();

}

const limpacanvas = () => {
    ctx.clearRect(0, 0, 800, 600);
}

const desenhaAlvo = (x, y) => {
    desenhaCirculo(x, y, raio + 20, 'red');
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red');
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

const atualizacanvas = () => {
    limpacanvas();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio, yAleatorio);
}

const dispara = (evento) => {
    var x = evento.pageX - canvas.offsetLeft;
    var y = evento.pageY - canvas.offsetTop;

    if ((x > xAleatorio - raio)
        && (x < xAleatorio + raio)
        && (y > yAleatorio - raio)
        && (y < yAleatorio + raio)) {

        aumentaNivel();
    }
}

canvas.onclick = dispara;

var posicao = 0;
var nivelDificuldade = 4000;
setInterval(atualizacanvas, nivelDificuldade);

const aumentaNivel = () => {
    var nivel = [1, 2, 3, 4, 5, 6, 7, 8, 'Hard Core'];
    posicao++;
    alert('Acertou! Nível: ' + nivel[posicao]);

    nivelDificuldade = nivelDificuldade - 500;
    setInterval(atualizacanvas, nivelDificuldade);
}