const canvas = document.querySelector('.gameCanvas');
const context = canvas.getContext('2d');

document.addEventListener('keypress', event => {
    switch (event.key) {
        case "z":
            console.log("haut");
            break;
        case "q":
            
            break;
        case "s":
            
            break;
        case "d":
            
            break;
    }
})

function resampleCanvas() {
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
}

const canvasResizeObserver = new ResizeObserver(() => resampleCanvas());
canvasResizeObserver.observe(canvas);