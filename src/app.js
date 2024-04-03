const canvas = document.querySelector('.gameCanvas'),
	context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.moveTo(0, 500);
context.lineTo(canvas.width, 500);

context.moveTo(0, 700);
context.lineTo(canvas.width, 700);
context.stroke();
