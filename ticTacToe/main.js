var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

const BOARD_IMG = loadImage("res/board.png")
const MOVES_IMG = loadImage("res/moves.png")

var board = [
	0, 0, 0,
	0, 0, 0,
	0, 0, 0,
]

var gameWinner = -1

function restart() {
	board = [
		0, 0, 0,
		0, 0, 0,
		0, 0, 0,
	]
	gameWinner = -1

	render()
}

function render() {
	context.fillStyle = "white"
	context.fillRect(0, 0, canvas.width, canvas.height)

	context.drawImage(BOARD_IMG, (canvas.width - BOARD_IMG.width) * 0.5, (canvas.height - BOARD_IMG.height) * 0.5)

	const baseMoveX = canvas.width * 0.5 - 240
	const baseMoveY = canvas.height * 0.5 - 240

	for (let i = 0; i < board.length; i++) {
		context.drawImage(
			MOVES_IMG,
			board[i] * 160, 0, 160, 160,
			baseMoveX + (i % 3) * 160, baseMoveY + Math.floor(i / 3) * 160,
			160, 160,
		)
	}

	if (gameWinner != -1) {
		context.fillStyle = "blue"
		context.font = "70px Arial"

		var halfCanvasWidth = canvas.width * 0.5

		if (gameWinner == 0)
			context.fillText("Tie", halfCanvasWidth - context.measureText("Tie").width * 0.5, 100)
		if (gameWinner == 1)
			context.fillText("Let's face it, you cheated", halfCanvasWidth - context.measureText("Let's face it, you cheated").width * 0.5, 100)
		if (gameWinner == 2)
			context.fillText("Computer wins!", halfCanvasWidth - context.measureText("Computer wins!").width * 0.5, 100)
	}
}

function overlaps(a, b) {
	return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
}

function loadImage(src) {
	var img = new Image()
	img.src = src

	return img
}

function aiMove() {
	if (gameWinner != -1) return

	var bestScore = -2
	var bestMove = 4
	for (let i = 0; i < board.length; i++) {
		if (board[i] == 0) {
			board[i] = 2
			var score = minMax(false)
			board[i] = 0

			if (score > bestScore) {
				bestScore = score
				bestMove = i
			}
		}
	}

	if (bestScore != -2) {
		board[bestMove] = 2
	}

	gameWinner = checkWinner()
}

function equals3(a, b, c) {
	return board[a] != 0 && board[a] == board[b] && board[b] == board[c]
}

function checkWinner() {
	for (let i = 0; i < 3; i++)
		if (equals3(i * 3, 1 + i * 3, 2 + i * 3))
			return board[i * 3]

	for (let i = 0; i < 3; i++)
		if (equals3(i, 3 + i, 6 + i))
			return board[i]

	if (equals3(0, 4, 8))
		return board[0]
	if (equals3(2, 4, 6))
		return board[2]

	if (board.includes(0))
		return -1
	else
		return 0
}

function minMax(isMaximizing) {
	var winner = checkWinner()
	if (winner != -1) {
		if (winner == 2) return 1
		if (winner == 1) return -1
		if (winner == 0) return 0
	}

	if (isMaximizing) {
		var bestScore = -2
		for (let i = 0; i < board.length; i++) {
			if (board[i] == 0) {
				board[i] = 2
				var score = minMax(false)
				board[i] = 0
				bestScore = Math.max(score, bestScore)
			}
		}

		return bestScore;
	}

	var bestScore = 2
	for (let i = 0; i < board.length; i++) {
		if (board[i] == 0) {
			board[i] = 1
			var score = minMax(true)
			board[i] = 0
			bestScore = Math.min(score, bestScore)
		}
	}

	return bestScore
}

window.onmousedown = function(e) {
	if (gameWinner != -1) {
		restart()
		return
	}

	const baseMoveX = canvas.width * 0.5 - 240
	const baseMoveY = canvas.height * 0.5 - 240

	for (let i = 0; i < board.length; i++) {
		if (overlaps(
			{
				x: baseMoveX + (i % 3) * 160,
				y: baseMoveY + Math.floor(i / 3) * 160,
				w: 160,
				h: 160,
			},
			{
				x: e.clientX,
				y: e.clientY,
				w: 1,
				h: 1,
			},
		)) {
			if (board[i] == 0) {
				board[i] = 1

				aiMove()

				render()
			}

			return
		}
	}
}

window.onresize = function() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	context.imageSmoothingEnabled = false
	render()
}

window.addEventListener("load", event => {
	console.log(BOARD_IMG)
    window.onresize()
});