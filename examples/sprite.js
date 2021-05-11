kaboom({
	global: true,
	fullscreen: true,
	scale: 2,
});

loadRoot("/pub/examples/");
loadSprite("mark", "img/mark.png");

scene("main", () => {
	add([
		sprite("mark"),
		// BIGMARK
		scale(10),
	]);
});

start("main");
