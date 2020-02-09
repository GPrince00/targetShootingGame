var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var radius = 10;
var xAleatorio = drawPosition(800);
var yAleatorio = drawPosition(500);

const drawCircle = (x, y, radius, cor) => {
    ctx.fillStyle = cor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

}

const resetCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const desenhaAlvo = (x, y) => {
    drawCircle(x, y, radius + 20, 'red');
    drawCircle(x, y, radius + 10, 'white');
    drawCircle(x, y, radius, 'red');
}

function drawPosition(maximo) {
    return Math.floor(Math.random() * maximo);
}

const updateCanvas = () => {
    resetCanvas();
    xAleatorio = drawPosition(canvas.width);
    yAleatorio = drawPosition(canvas.height);
    desenhaAlvo(xAleatorio, yAleatorio);
}

const checkCollision = (evento) => {
    var x = evento.pageX - canvas.offsetLeft;
    var y = evento.pageY - canvas.offsetTop;

    if ((x > xAleatorio - radius)
        && (x < xAleatorio + radius)
        && (y > yAleatorio - radius)
        && (y < yAleatorio + radius)) {

        nextLevel();
    }
}

canvas.onclick = checkCollision;

var position = 0;
var nivelDificuldade = 4000;
setInterval(updateCanvas, nivelDificuldade);

const nextLevel = () => {
    var nivel = [1, 2, 3, 4, 5, 6, 7, 8, 'Hard Core'];
    position++;
    alert('Acertou! Nível: ' + nivel[position]);

    nivelDificuldade = nivelDificuldade - 500;
    setInterval(updateCanvas, nivelDificuldade);
}