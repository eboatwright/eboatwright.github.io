const whiteTimer = document.getElementById("white_timer");
const blackTimer = document.getElementById("black_timer");

var started = false;
var whitesTurn = false;

const timeForEachSide = prompt("Set game time (in minutes):") * 60 * 1000;

var whiteTimeInMilliseconds = timeForEachSide;
var whiteDelayInMilliseconds = 0;
var blackTimeInMilliseconds = timeForEachSide;
var blackDelayInMilliseconds = 0;

const bonusTimeInMilliseconds = prompt("Set bonus (in seconds):") * 1000;
const delayTimeInMilliseconds = prompt("Set delay (in seconds):") * 1000;

var nowTime = 0;
var lastTime = 0;

function setTimer(timer, timeInMilliseconds, delayInMilliseconds, myTurn) {
	if (timeInMilliseconds <= 0) {
		timer.innerHTML = "TIME OUT!";
		return;
	}

	const timeInSeconds = timeInMilliseconds / 1000;
	const timeInMinutes = Math.floor(timeInSeconds / 60);
	const displaySeconds = (timeInSeconds % 60).toFixed(2).toString().padStart(5, "0");

	var finalString = "";

	if (myTurn && delayInMilliseconds > 0) {
		finalString = "(" + Math.ceil(delayInMilliseconds / 1000) + ") ";
	}

	finalString += timeInMinutes + ":" + displaySeconds;
	timer.innerHTML = finalString;
}

function onClick(e) {
	e.preventDefault();

	if (started) {
		if (whitesTurn) {
			whiteTimeInMilliseconds += bonusTimeInMilliseconds;
		} else {
			blackTimeInMilliseconds += bonusTimeInMilliseconds;
		}
	}

	started = true;
	whitesTurn = !whitesTurn;

	whiteDelayInMilliseconds = delayTimeInMilliseconds;
	blackDelayInMilliseconds = delayTimeInMilliseconds;
}

function main() {
	lastTime = nowTime;
	nowTime = performance.now();
	const delta = nowTime - lastTime;

	if (started) {
		if (whitesTurn) {
			if (whiteDelayInMilliseconds > 0) {
				whiteDelayInMilliseconds -= delta;
			} else {
				whiteTimeInMilliseconds -= delta;
			}
		} else {
			if (blackDelayInMilliseconds > 0) {
				blackDelayInMilliseconds -= delta;
			} else {
				blackTimeInMilliseconds -= delta;
			}
		}
	}

	setTimer(whiteTimer, whiteTimeInMilliseconds, whiteDelayInMilliseconds, whitesTurn);
	setTimer(blackTimer, blackTimeInMilliseconds, blackDelayInMilliseconds, !whitesTurn);

	if (whiteTimeInMilliseconds <= 0
	|| blackTimeInMilliseconds <= 0) {
		return;
	}

	window.requestAnimationFrame(main);
}

document.body.addEventListener("touchend", onClick);

window.requestAnimationFrame(main);