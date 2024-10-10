console.log(`Linked successfully`);
let pagelanguage=`en`;

document.getElementById("language-select").onchange = function (){
    console.log(`called translate function`);
    if (pagelanguage==`en`) {
        document.getElementById(`page-header`).textContent = (`HTML5のグラフィカルキャンバスに描きましょう`);
        document.getElementById(`language-select-label`).textContent = (`言語を選ぶ:`);
        document.getElementById(`colour-label`).textContent = (`色:`);
        document.getElementById(`width-label`).textContent = (`太さ:`);
        document.getElementById(`clear`).textContent = (`消す`);
        pagelanguage=`jp`;
    } else {
        document.getElementById(`page-header`).textContent = (`Let's Draw on a HTML5 Canvas`);
        document.getElementById(`language-select-label`).textContent = (`Select a language:`);
        document.getElementById(`colour-label`).textContent = (`Colour:`);
        document.getElementById(`width-label`).textContent = (`Width:`);
        document.getElementById(`clear`).textContent = (`Clear`);
        pagelanguage=`en`;
    }

}