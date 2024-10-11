const canvas = document.getElementById('board');
const toolbar = document.getElementById('sidebar');
const ctx = canvas.getContext('2d');
const offsetX = canvas.offsetLeft;
const offsetY = canvas.offsetTop;

canvas.width = window.innerWidth - offsetX;
canvas.height = window.innerHeight - offsetY;
let pagelanguage = `en`;
let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#4061A0';
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - offsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

// Language switch
document.getElementById("language-select").onchange = function () {
    console.log(`called translate function`);
    if (pagelanguage == `en`) {
        document.getElementById(`page-header`).textContent = (`HTML5のグラフィカルキャンバスに描きましょう`);
        document.getElementById(`language-select-label`).textContent = (`言語を選ぶ:`);
        document.getElementById(`colour-label`).textContent = (`色:`);
        document.getElementById(`width-label`).textContent = (`太さ:`);
        document.getElementById(`erase-label`).textContent = (`消す:`);
        document.getElementById(`clear`).textContent = (`全部を消す`);
        pagelanguage = `jp`;
    } else {
        document.getElementById(`page-header`).textContent = (`Let's Draw on a HTML5 Canvas`);
        document.getElementById(`language-select-label`).textContent = (`Select a language:`);
        document.getElementById(`colour-label`).textContent = (`Colour:`);
        document.getElementById(`width-label`).textContent = (`Width:`);
        document.getElementById(`erase-label`).textContent = (`Erase:`);
        document.getElementById(`clear`).textContent = (`Clear`);
        pagelanguage = `en`;
    }
}
