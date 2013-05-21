//$.include("js/jquery.js");
var image = new Image();
var goButton = new Image();
var default_width = 320;
var default_height = 480;
var brick_width = 20;
// var status = new Array(24);
// var shapes = new Shapes();

window.addEventListener("keypress", transform, false);

/*
 * make namespace
 */
if (typeof (Tetris) == undefined || !Tetris) {
	var Tetris = {};
}

/*
 * 
 */
(function() {
	Tetris.Status = new Array(24);
	Tetris.Context;
	Tetris.Canvas_w;
	Tetris.Canvas_h;
	Tetris.Timer_play;

	Tetris.Init = function() {
		// you must know how to call a function. it is basics
		image.onload = gray;
		image.src = "img/back.png";
		goButton.onload = button;
		goButton.src = "img/go.png";

	};
	// Tetris.Controler = new Shapes();

	function gray() {
		var canvas = document.getElementById("back");
		var cxt = canvas.getContext("2d");

		canvas.addEventListener("mouseover", ret, false);
		canvas.addEventListener("mouseout", gray, false);
		cxt.drawImage(image, 0, 0);
		var imgpixel = cxt.getImageData(0, 0, canvas.width, canvas.height);
		for ( var y = 0; y < imgpixel.height; y++) {
			for ( var x = 0; x < imgpixel.width; x++) {
				var i = (y * 4) * imgpixel.width + x * 4;
				var avg = (imgpixel.data[i] + imgpixel.data[i + 1] + imgpixel.data[i + 2]) / 3;
				imgpixel.data[i] = avg;
				imgpixel.data[i + 1] = avg;
				imgpixel.data[i + 2] = avg;
			}
		}
		cxt.putImageData(imgpixel, 0, 0);
	}
	;
	// function go
	function button() {
		var canvas = document.getElementById("field");
		Tetris.Canvas_w = canvas.width = default_width;
		Tetris.Canvas_h = canvas.height = default_height;
		var cxt = canvas.getContext("2d");
		Tetris.Context = cxt;
		canvas.addEventListener("click", Tetris.Start, false);
		this.addEventListener("keypress", transform, false);
		cxt.clearRect(0, 0, canvas.width, canvas.height);
		cxt.drawImage(goButton, 10, 10);
	}
	Tetris.Start = function() {
		// var canvas = document.getElementById("field");
		var cxt = Tetris.Context;
		cxt.clearRect(0, 0, Tetris.Canvas_w, Tetris.Canvas_h);
		cxt.fillStyle = "green";
		// need to define a [][] to show the status of ocuppy
		for ( var a = 0; a < Tetris.Status.length; a++) {
			Tetris.Status[a] = new Array(16);
			for ( var b = 0; b < Tetris.Status[a].length; b++) {
				Tetris.Status[a][b] = 0;
			}
		}

		var type = Math.floor(Math.random() * 8);
		Shapes.Create(type, 0, 7);

		Tetris.Timer_play = setInterval(Tetris.Interval, 1000);

		Tetris.Paint(Tetris.Status, cxt);
	};
	
	Tetris.GameOver = function(){
		clearInterval(Tetris.Timer_play);
		Tetris.Reset();
		alert("Game Over");
	};
	
	Tetris.Interval = function() {
		if (Shapes.Confirmed == true) {
			var type = Math.floor(Math.random() * 8);
			Shapes.Create(type, 0, 7);
			
		}
		Shapes.Move("down");
		Tetris.Paint(Tetris.Status, Tetris.Context);
		if(Shapes.Confirmed){
			Tetris.IsRowFilled(Tetris.Status, Tetris.Context);
		}
	};
	// reset the game
	Tetris.Reset = function() {
		window.location.reload();
		//Tetris.Start();
	};

	//cxt.fillStyle = get_random_color();
	// paint
	Tetris.Paint = function(array, cxt) {
		cxt.clearRect(0, 0, 320, 480);
		for ( var a = 0; a < array.length; a++) {
			for ( var b = 0; b < array[a].length; b++) {
				if (array[a][b] == 1) {
					cxt.fillRect(b * 20, a * 20, brick_width, brick_width);
					// cxt.clearRect(b*21,a*21,brick_width-1,brick_width-1);
				}
			}
		}
	};
	Tetris.BackLight = function(){
		var canvas = document.getElementById("back");
		var cxt = canvas.getContext("2d");
		cxt.drawImage(image, 0, 0);
		setTimeout(function(){
			var imgpixel = cxt.getImageData(0, 0, canvas.width, canvas.height);
			for ( var y = 0; y < imgpixel.height; y++) {
				for ( var x = 0; x < imgpixel.width; x++) {
					var i = (y * 4) * imgpixel.width + x * 4;
					var avg = (imgpixel.data[i] + imgpixel.data[i + 1] + imgpixel.data[i + 2]) / 3;
					imgpixel.data[i] = avg;
					imgpixel.data[i + 1] = avg;
					imgpixel.data[i + 2] = avg;
				}
			}
			cxt.putImageData(imgpixel, 0, 0);
		},500);
		
	};
	// if the row has been filled
	Tetris.IsRowFilled = function(array, cxt) {
		for ( var a = 0; a < array.length; a++) {
			var filled = 1;
			for ( var b = 0; b < array[a].length; b++) {
				if (array[a][b] == 0) {
					filled = 0;
				}
			}
			// if the row is filled the repaint the bricks above the row
			if (filled == 1) {
				
				Tetris.Delete(array, a, cxt);
			}
		}
	};
	// when row filled ,repaint
	Tetris.Delete = function(array, rownum, cxt) {
		// repainted by the row above
		for ( var a = rownum; a > 0; a--) {
			for ( var b = 0; b < array[a].length; b++) {
				array[a][b] = array[a - 1][b];
			}
		}
		Tetris.BackLight();
		Tetris.Paint(array, cxt);
	};
})();

// return to origion
function ret() {
	var canvas = document.getElementById("back");
	var cxt = canvas.getContext("2d");
	cxt.drawImage(image, 0, 0);
}

// define the function to draw shapes
// cata:define the kind of the shape;x row ,y column define the init position in
// the status array
function shapes(cata, x, y, status) {
	shapes.cata = cata;
	shapes.center = x;

	switch (cata) {
	case 1:
		status[x][y] = 1;
		status[x + 1][y] = 1;
		status[x + 1][y + 1] = 1;
		status[x + 2][y] = 1;
		// shapes.parts = [];
		break;
	case 2:
		status[x][y] = 1;
		status[x][y + 1] = 1;
		status[x + 1][y] = 1;
		status[x + 1][y + 1] = 1;
		break;
	// case 3:
	// status[x][y] = 1;
	}
}

// shape transform
function transform() {
	if (event.keyCode == 119 || event.keyCode == 126) {
		Shapes.Transform();
	}
	if (event.keyCode == 97 || event.keyCode == 123) {
		Shapes.Move("left");
	}
	if (event.keyCode == 100 || event.keyCode == 124) {
		Shapes.Move("right");
	}
	if (event.keyCode == 115 || event.keyCode == 125) {
		Shapes.Move("down");
	}

	Tetris.Paint(Tetris.Status, Tetris.Context);
	if (Shapes.Confirmed) {
		Tetris.IsRowFilled(Tetris.Status, Tetris.Context);
	}
}

function get_random_color() {
	  function c() {
	    return Math.floor(Math.random()*256).toString(16);
	  }
	  return "#"+c()+c()+c();
	}