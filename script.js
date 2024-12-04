const canvas = document.getElementById('matrixCanvas');
let ctx = canvas.getContext('2d');

//Canvas Size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Characters
const katakana = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝヴヵヶ'; //Half-width Katakana Characters
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789';
const characters = katakana + latin + numbers;

//Basic Settings
const fontSize = 16;
const columns = Math.floor(canvas.width/fontSize)

//Initial Positions of Raindrops
const rainDrops = [];
for (let i=0; i<columns; i++) {
    rainDrops.push(1); //Initial Y Position
}

//Rain Effect Function
function rainEffect() {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height); //Fade Effect

    ctx.fillStyle = '#0F0'
    ctx. fontSize = `${fontSize}px monospace` //Font Size and Font Family

    rainDrops.forEach((y,x) => {

        ctx.fillText(characters[Math.floor(Math.random() * characters.length)], x * fontSize, y * fontSize); //Random Characters

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[x] = 0; //Reset Y Position (Reset Raindrop To Top)
        }

        rainDrops[x]++; //Increase Y Position (Move Down)

    })
}

setInterval(rainEffect, 30); //Update Rain Effect Every 30ms