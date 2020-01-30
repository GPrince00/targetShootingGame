var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    var raio = 10;
    var xAleatorio = sorteiaPosicao(600);
    var yAleatorio = sorteiaPosicao(400);

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();

    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);
    }

    function desenhaAlvo(x, y) {

        desenhaCirculo(x, y, raio + 20, 'red');
        desenhaCirculo(x, y, raio + 10, 'white');
        desenhaCirculo(x, y, raio, 'red');
    }

    function sorteiaPosicao(maximo) {
        return Math.floor(Math.random() * maximo);
    }

    function atualizaTela() {
        limpaTela();

        xAleatorio = sorteiaPosicao(600);
        yAleatorio = sorteiaPosicao(400);
        desenhaAlvo(xAleatorio, yAleatorio);
    }

    function dispara(evento) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        if ((x > xAleatorio - raio)
            && (x < xAleatorio + raio)
            && (y > yAleatorio - raio)
            && (y < yAleatorio + raio)) {

            aumentaNivel();
        }
    }

    tela.onclick = dispara;

    var posicao = 0;
    var nivelDificuldade = 4000;
    setInterval(atualizaTela, nivelDificuldade);

    function aumentaNivel() {
        var nivel = [1, 2, 3, 4, 5, 6, 7, 8, 'Hard Core'];
        posicao++;
        alert('Acertou! Nível: ' + nivel[posicao]);

        nivelDificuldade = nivelDificuldade - 500;
        setInterval(atualizaTela, nivelDificuldade);
    }