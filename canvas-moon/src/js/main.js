// const stars = new Stars();

let canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	width = window.innerWidth,
	height = window.innerHeight,
	stars = new Stars(ctx, width, height, 200),
	moon = new Moon(ctx, width, height),
	meteors = [],
	count = 0;

canvas.width = width;
canvas.height = height;
const frame = () => {
	count++;
	count % 10 == 0 && stars.blink()
	moon.draw();
	stars.draw();
	requestAnimationFrame(frame);
}
frame();
