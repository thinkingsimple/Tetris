if (typeof (Shapes) == undefined || !Shapes) {
	var Shapes = {};
}

(function() {
	// Shapes.Shape
	Shapes.Cordinator = new Array(3);
	Shapes.Centerx;
	Shapes.Centery;
	Shapes.Cata;
	Shapes.Confirmed = false;

	Shapes.Create = function(cata, center_x, center_y) {
		// initial the cordinator
		Shapes.Cata = cata;
		Shapes.Confirmed = false;
		Shapes.Centerx = -1;
		Shapes.Centery = -1;
		//Shapes.Cordinator = new Array(3);
		//initiate the cordinator
		for ( var a = 0; a < Shapes.Cordinator.length; a++) {
			Shapes.Cordinator[a] = new Array(2);
		}
		//
		switch (cata) {
		case 1:
			if (Shapes.IsColid(center_x, center_y, center_x + 1, center_y,
					center_x + 2, center_y, center_x + 1, center_y + 1)) {
				Tetris.GameOver();
				return;
			}
			Shapes.Centerx = center_x + 1;
			Shapes.Centery = center_y;
			
			Tetris.Status[center_x][center_y] = 1;
			Tetris.Status[center_x + 1][center_y] = 1;
			Tetris.Status[center_x + 2][center_y] = 1;
			Tetris.Status[center_x + 1][center_y + 1] = 1;
			Shapes.Cordinator[0][0] = center_x;
			Shapes.Cordinator[0][1] = center_y;
			Shapes.Cordinator[1][0] = center_x + 2;
			Shapes.Cordinator[1][1] = center_y;
			Shapes.Cordinator[2][0] = center_x + 1;
			Shapes.Cordinator[2][1] = center_y + 1;
			
			break;
		case 2:
			if (Shapes.IsColid(center_x, center_y, center_x, center_y-1,
					center_x , center_y + 1, center_x, center_y + 2)) {
				Tetris.GameOver();
				return;
			}
			Tetris.Status[center_x][center_y] = 1;
			Tetris.Status[center_x][center_y - 1] = 1;
			Tetris.Status[center_x][center_y + 1] = 1;
			Tetris.Status[center_x][center_y + 2] = 1;
			Shapes.Cordinator[0][0] = center_x;
			Shapes.Cordinator[0][1] = center_y - 1;
			Shapes.Cordinator[1][0] = center_x;
			Shapes.Cordinator[1][1] = center_y + 1;
			Shapes.Cordinator[2][0] = center_x;
			Shapes.Cordinator[2][1] = center_y + 2;
			Shapes.Centerx = center_x;
			Shapes.Centery = center_y;
			break;
		case 3:
			if (Shapes.IsColid(center_x, center_y, center_x, center_y + 1,
					center_x + 1, center_y, center_x + 1, center_y + 1)) {
				Tetris.GameOver();
				return;
			}
			Tetris.Status[center_x][center_y] = 1;
			Tetris.Status[center_x][center_y + 1] = 1;
			Tetris.Status[center_x + 1][center_y] = 1;
			Tetris.Status[center_x + 1][center_y + 1] = 1;
			Shapes.Cordinator[0][0] = center_x;
			Shapes.Cordinator[0][1] = center_y + 1;
			Shapes.Cordinator[1][0] = center_x + 1;
			Shapes.Cordinator[1][1] = center_y;
			Shapes.Cordinator[2][0] = center_x + 1;
			Shapes.Cordinator[2][1] = center_y + 1;
			Shapes.Centerx = center_x;
			Shapes.Centery = center_y;
			break;
		case 4:
			if (Shapes.IsColid(center_x, center_y, center_x, center_y - 1,
					center_x + 1, center_y, center_x + 1, center_y + 1)) {
				Tetris.GameOver();
				return;
			}
			Tetris.Status[center_x][center_y] = 1;
			Tetris.Status[center_x][center_y - 1] = 1;
			Tetris.Status[center_x + 1][center_y] = 1;
			Tetris.Status[center_x + 1][center_y + 1] = 1;
			Shapes.Cordinator[0][0] = center_x;
			Shapes.Cordinator[0][1] = center_y - 1;
			Shapes.Cordinator[1][0] = center_x + 1;
			Shapes.Cordinator[1][1] = center_y;
			Shapes.Cordinator[2][0] = center_x + 1;
			Shapes.Cordinator[2][1] = center_y + 1;
			Shapes.Centerx = center_x;
			Shapes.Centery = center_y;
			break;
		case 5:
			if (Shapes.IsColid(center_x, center_y, center_x, center_y - 1,
					center_x + 1, center_y, center_x + 2, center_y)) {
				Tetris.GameOver();
				return;
			}
			Tetris.Status[center_x][center_y] = 1;
			Tetris.Status[center_x][center_y - 1] = 1;
			Tetris.Status[center_x + 1][center_y] = 1;
			Tetris.Status[center_x + 2][center_y] = 1;
			Shapes.Cordinator[0][0] = center_x;
			Shapes.Cordinator[0][1] = center_y - 1;
			Shapes.Cordinator[1][0] = center_x + 1;
			Shapes.Cordinator[1][1] = center_y;
			Shapes.Cordinator[2][0] = center_x + 2;
			Shapes.Cordinator[2][1] = center_y;
			Shapes.Centerx = center_x;
			Shapes.Centery = center_y;
			break;
		case 6:
			if (Shapes.IsColid(center_x, center_y, center_x, center_y + 1,
					center_x + 1, center_y, center_x + 2, center_y)) {
				Tetris.GameOver();
				return;
			}
			Tetris.Status[center_x][center_y] = 1;
			Tetris.Status[center_x][center_y + 1] = 1;
			Tetris.Status[center_x + 1][center_y] = 1;
			Tetris.Status[center_x + 2][center_y] = 1;
			Shapes.Cordinator[0][0] = center_x;
			Shapes.Cordinator[0][1] = center_y + 1;
			Shapes.Cordinator[1][0] = center_x + 1;
			Shapes.Cordinator[1][1] = center_y;
			Shapes.Cordinator[2][0] = center_x + 2;
			Shapes.Cordinator[2][1] = center_y;
			Shapes.Centerx = center_x;
			Shapes.Centery = center_y;
			break;
		case 7:
			if (Shapes.IsColid(center_x, center_y, center_x, center_y + 1,
					center_x + 1, center_y, center_x + 1, center_y -1)) {
				Tetris.GameOver();
				return;
			}
			Tetris.Status[center_x][center_y] = 1;
			Tetris.Status[center_x][center_y + 1] = 1;
			Tetris.Status[center_x + 1][center_y] = 1;
			Tetris.Status[center_x + 1][center_y - 1] = 1;
			Shapes.Cordinator[0][0] = center_x;
			Shapes.Cordinator[0][1] = center_y + 1;
			Shapes.Cordinator[1][0] = center_x + 1;
			Shapes.Cordinator[1][1] = center_y;
			Shapes.Cordinator[2][0] = center_x + 1;
			Shapes.Cordinator[2][1] = center_y - 1;
			Shapes.Centerx = center_x;
			Shapes.Centery = center_y;
			break;
		}
		
	};
	Shapes.CordinateReset = function() {
		Tetris.Status[Shapes.Centerx][Shapes.Centery] = 0;
		Tetris.Status[Shapes.Cordinator[0][0]][Shapes.Cordinator[0][1]] = 0;
		Tetris.Status[Shapes.Cordinator[1][0]][Shapes.Cordinator[1][1]] = 0;
		Tetris.Status[Shapes.Cordinator[2][0]][Shapes.Cordinator[2][1]] = 0;
	};
	Shapes.CordinatorSet = function() {
		Tetris.Status[Shapes.Centerx][Shapes.Centery] = 1;
		Tetris.Status[Shapes.Cordinator[0][0]][Shapes.Cordinator[0][1]] = 1;
		Tetris.Status[Shapes.Cordinator[1][0]][Shapes.Cordinator[1][1]] = 1;
		Tetris.Status[Shapes.Cordinator[2][0]][Shapes.Cordinator[2][1]] = 1;
	};
	Shapes.IsOutOfRange = function(action) {
		if (action == "left" && !Shapes.Confirmed) {
			if (Shapes.Centery >= 1 && Shapes.Cordinator[0][1] >= 1
					&& Shapes.Cordinator[1][1] >= 1
					&& Shapes.Cordinator[2][1] >= 1) {
				return false;
			}
		}
		if (action == "right" && !Shapes.Confirmed) {
			if (Shapes.Centery <= 14 && Shapes.Cordinator[0][1] <= 14
					&& Shapes.Cordinator[1][1] <= 14
					&& Shapes.Cordinator[2][1] <= 14) {
				return false;
			}
		}
		if (action == "down" && !Shapes.Confirmed) {
			if (Shapes.Centerx <= 22 && Shapes.Cordinator[0][0] <= 22
					&& Shapes.Cordinator[1][0] <= 22
					&& Shapes.Cordinator[2][0] <= 22) {
				return false;
			} else {
				Shapes.Confirmed = true;
			}
		}
		return true;
	};
	// can move anymore? is there any collid
	Shapes.IsParts = function(x, y) {
		if (Shapes.Centerx == x) {
			if (Shapes.Centery == y) {
				return true;
			}
		}
		if (Shapes.Cordinator[0][0] == x) {
			if (Shapes.Cordinator[0][1] == y) {
				return true;
			}
		}
		if (Shapes.Cordinator[1][0] == x) {
			if (Shapes.Cordinator[1][1] == y) {
				return true;
			}
		}
		if (Shapes.Cordinator[2][0] == x) {
			if (Shapes.Cordinator[2][1] == y) {
				return true;
			}
		}
		return false;
	};
	Shapes.IsColid = function(x, y, x1, y1, x2, y2, x3, y3) {
		if (!Shapes.IsParts(x, y)) {
			if (Tetris.Status[x][y] == 1) {
				return true;
			}
		}
		if (!Shapes.IsParts(x1, y1)) {
			if (Tetris.Status[x1][y1] == 1) {
				return true;
			}
		}
		if (!Shapes.IsParts(x2, y2)) {
			if (Tetris.Status[x2][y2] == 1) {
				return true;
			}
		}
		if (!Shapes.IsParts(x3, y3)) {
			if (Tetris.Status[x3][y3] == 1) {
				return true;
			}
		}
		return false;
	};

	Shapes.Move = function(action) {
		if (Shapes.IsOutOfRange(action)) {
			return;
		}
		var tempx = 0;
		var tempx1 = 0;
		var tempx2 = 0;
		var tempx3 = 0;

		var tempy = 0;
		var tempy1 = 0;
		var tempy2 = 0;
		var tempy3 = 0;

		switch (action) {
		case "left":
			tempx = Shapes.Centerx;
			tempy = Shapes.Centery - 1;
			tempx1 = Shapes.Cordinator[0][0];
			tempy1 = Shapes.Cordinator[0][1] - 1;
			tempx2 = Shapes.Cordinator[1][0];
			tempy2 = Shapes.Cordinator[1][1] - 1;
			tempx3 = Shapes.Cordinator[2][0];
			tempy3 = Shapes.Cordinator[2][1] - 1;
			if (!Shapes.IsColid(tempx, tempy, tempx1, tempy1, tempx2, tempy2,
					tempx3, tempy3)) {
				// reset the origion
				Shapes.CordinateReset();

				// set the new cordination
				Shapes.Centery = Shapes.Centery - 1;
				Shapes.Cordinator[0][1] = Shapes.Cordinator[0][1] - 1;
				Shapes.Cordinator[1][1] = Shapes.Cordinator[1][1] - 1;
				Shapes.Cordinator[2][1] = Shapes.Cordinator[2][1] - 1;

				Shapes.CordinatorSet();
			}
			break;
		case "right":
			tempx = Shapes.Centerx;
			tempy = Shapes.Centery + 1;
			tempx1 = Shapes.Cordinator[0][0];
			tempy1 = Shapes.Cordinator[0][1] + 1;
			tempx2 = Shapes.Cordinator[1][0];
			tempy2 = Shapes.Cordinator[1][1] + 1;
			tempx3 = Shapes.Cordinator[2][0];
			tempy3 = Shapes.Cordinator[2][1] + 1;
			if (!Shapes.IsColid(tempx, tempy, tempx1, tempy1, tempx2, tempy2,
					tempx3, tempy3)) {
				// reset the origion
				Shapes.CordinateReset();

				// set new cordination
				Shapes.Centery = Shapes.Centery + 1;
				Shapes.Cordinator[0][1] = Shapes.Cordinator[0][1] + 1;
				Shapes.Cordinator[1][1] = Shapes.Cordinator[1][1] + 1;
				Shapes.Cordinator[2][1] = Shapes.Cordinator[2][1] + 1;

				Shapes.CordinatorSet();
			}

			break;
		case "down":
			tempx = Shapes.Centerx + 1;
			tempy = Shapes.Centery;
			tempx1 = Shapes.Cordinator[0][0] + 1;
			tempy1 = Shapes.Cordinator[0][1];
			tempx2 = Shapes.Cordinator[1][0] + 1;
			tempy2 = Shapes.Cordinator[1][1];
			tempx3 = Shapes.Cordinator[2][0] + 1;
			tempy3 = Shapes.Cordinator[2][1];
			if (!Shapes.IsColid(tempx, tempy, tempx1, tempy1, tempx2, tempy2,
					tempx3, tempy3)) {
				// reset the origion
				Shapes.CordinateReset();

				Shapes.Centerx = Shapes.Centerx + 1;
				Shapes.Cordinator[0][0] = Shapes.Cordinator[0][0] + 1;
				Shapes.Cordinator[1][0] = Shapes.Cordinator[1][0] + 1;
				Shapes.Cordinator[2][0] = Shapes.Cordinator[2][0] + 1;
				// alert(Shapes.Centerx + " " + Shapes.Cordinator[0][0] + " " +
				// Shapes.Cordinator[1][0] + " " + Shapes.Cordinator[2][0] ) ;
				if (Shapes.Centerx == 23 || Shapes.Cordinator[0][0] == 23
						|| Shapes.Cordinator[1][0] == 23
						|| Shapes.Cordinator[2][0] == 23) {

					Shapes.Confirmed = true;
				}

				Shapes.CordinatorSet();
			} else {
				Shapes.Confirmed = true;
			}
			break;
		}
		;

	};
	// shape transformation,rotate 90
	Shapes.Transform = function() {
		if (Shapes.Cata != 3 && !Shapes.Confirmed) {

			var tempx = Shapes.Centerx;
			var tempx1 = 0;
			var tempx2 = 0;
			var tempx3 = 0;

			var tempy = Shapes.Centery;
			var tempy1 = 0;
			var tempy2 = 0;
			var tempy3 = 0;

			var canTransform = false;

			var x = Shapes.Cordinator[0][0] - Shapes.Centerx;
			var y = Shapes.Cordinator[0][1] - Shapes.Centery;
			tempx1 = Shapes.Centerx + x * 0 + y * 1;
			tempy1 = Shapes.Centery + x * (-1) + y * 0;

			x = Shapes.Cordinator[1][0] - Shapes.Centerx;
			y = Shapes.Cordinator[1][1] - Shapes.Centery;

			tempx2 = Shapes.Centerx + x * 0 + y * 1;
			tempy2 = Shapes.Centery + x * (-1) + y * 0;

			x = Shapes.Cordinator[2][0] - Shapes.Centerx;
			y = Shapes.Cordinator[2][1] - Shapes.Centery;

			tempx3 = Shapes.Centerx + x * 0 + y * 1;
			tempy3 = Shapes.Centery + x * (-1) + y * 0;
			// first , the new cordination must all be in the range
			if (tempx >= 0 && tempx <= 23 && tempx1 >= 0 && tempx1 <= 23
					&& tempx2 >= 0 && tempx2 <= 23 && tempx3 >= 0
					&& tempx3 <= 23 && tempy >= 0 && tempy <= 15 && tempy1 >= 0
					&& tempy1 <= 15 && tempy2 >= 0 && tempy2 <= 15
					&& tempy3 >= 0 && tempy3 <= 15) {
				if (Shapes.IsColid(tempx, tempy, tempx1, tempy1, tempx2,
						tempy2, tempx3, tempy3)) {
					return;
				} else {
					canTransform = true;
				}
			} else {
				for ( var a = 1; a < 16; a++) {
					if ((tempy - a) >= 0 && (tempy - a) <= 15
							&& (tempy1 - a) >= 0 && (tempy1 - a) <= 15
							&& (tempy2 - a) >= 0 && (tempy2 - a) <= 15
							&& (tempy3 - a) >= 0 && (tempy3 - a) <= 15) {
						if (!Shapes.IsColid(tempx, tempy - a, tempx1, tempy1
								- a, tempx2, tempy2 - a, tempx3, tempy3 - a)) {
							tempy = tempy - a;
							tempy1 = tempy1 - a;
							tempy2 = tempy2 - a;
							tempy3 = tempy3 - a;
							canTransform = true;
							break;
						}
					}
				}
				for ( var a = 1; a < 16; a++) {
					if ((tempy + a) >= 0 && (tempy + a) <= 15
							&& (tempy1 + a) >= 0 && (tempy1 + a) <= 15
							&& (tempy2 + a) >= 0 && (tempy2 + a) <= 15
							&& (tempy3 + a) >= 0 && (tempy3 + a) <= 15) {
						if (!Shapes.IsColid(tempx, tempy, tempx1, tempy1,
								tempx2, tempy2, tempx3, tempy3)) {
							tempy = tempy + a;
							tempy1 = tempy1 + a;
							tempy2 = tempy2 + a;
							tempy3 = tempy3 + a;
							canTransform = true;
							break;
						}
					}
				}
			}
			if (canTransform) {
				Tetris.Status[Shapes.Centerx][Shapes.Centery] = 0;
				Tetris.Status[Shapes.Cordinator[0][0]][Shapes.Cordinator[0][1]] = 0;
				Tetris.Status[Shapes.Cordinator[1][0]][Shapes.Cordinator[1][1]] = 0;
				Tetris.Status[Shapes.Cordinator[2][0]][Shapes.Cordinator[2][1]] = 0;

				Shapes.Centerx = tempx;
				Shapes.Centery = tempy;
				Tetris.Status[tempx][tempy] = 1;

				Shapes.Cordinator[0][0] = tempx1;
				Shapes.Cordinator[0][1] = tempy1;

				Tetris.Status[Shapes.Cordinator[0][0]][Shapes.Cordinator[0][1]] = 1;

				Shapes.Cordinator[1][0] = tempx2;
				Shapes.Cordinator[1][1] = tempy2;

				Tetris.Status[Shapes.Cordinator[1][0]][Shapes.Cordinator[1][1]] = 1;

				Shapes.Cordinator[2][0] = tempx3;
				Shapes.Cordinator[2][1] = tempy3;
				Tetris.Status[Shapes.Cordinator[2][0]][Shapes.Cordinator[2][1]] = 1;
			}
		}
	};

})();

