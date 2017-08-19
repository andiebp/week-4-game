$(function () {
	function loss() {
		var lossCount = parseInt($("#losses").html());
		lossCount++;
		$("#losses").html(lossCount);
		alert("You lost!!!");
		resetTheGame();
	}
	function win() {
		var winCount = parseInt($("#wins").html());
		winCount++;
		$("#wins").html(winCount);
		alert("You win!!!");
		resetTheGame();

	}
	function resetTheGame() {
		$("#total").html("0");
		$("#computer-number").html(randomize(19, 120));
		$("#fourCrystals img").each(function (i, el) {
			$(el).data("randomNumber", randomize(1, 12));
		});
	}

	function randomize(min, max) {
		var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		return randomNumber;
	}

	resetTheGame();

	$("#fourCrystals img").on("click", function (event) {
		var totalScore = $("#total").html();
		totalScore = parseInt(totalScore);
		totalScore += $(this).data("randomNumber");
		$("#total").html(totalScore);
		var computerNumber = $("#computer-number").html();
		computerNumber = parseInt(computerNumber);
		console.log(totalScore, computerNumber);
		if (computerNumber < totalScore) {
			loss();
		}
		if (totalScore === computerNumber) {
			win();
		}
	});

});