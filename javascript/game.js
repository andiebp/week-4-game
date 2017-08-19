function loss() {

	var lossCount = parseInt($("#losses").html());
	lossCount++;
	$("#losses").html(lossCount);

}
function win() {
	var winCount = parseInt($("#wins").html());
	winCount++;
	$("#wins").html(winCount);

}

function randomize(min, max) {
	var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return randomNumber;
}
var computerNumber = randomize(19, 120);

$("#fourCrystals img").each(function (i, el) {
	$(el).data("randomNumber", randomize(1, 12));
	$(el).on("click", function (event) {
		var totalScore = $("#total").html();
		totalScore = parseInt(totalScore);
		totalScore += $(el).data("randomNumber");
		$("#total").html(totalScore);
		if (computerNumber < totalScore) {
			loss();
		}
		if (totalScore === computerNumber) {
			win();
		}
	});

});

