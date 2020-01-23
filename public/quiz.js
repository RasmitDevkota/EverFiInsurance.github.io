function start() {
    $('#startBtn').hide();
    $('#q1').show();
};

function next(q) {
    if (q == 1) {

        var score = 1;
    }
    if(q == 10) {
        $('#q' + q).hide();
        $('#done').show();
        $('#message').html("Good job! Your score is " + score + "/10!");
    } else {
        var n = q + 1;
        $('#q' + q).hide();
        $('#q' + n).show();
    }
};

function checkbox(q, correct) {
    $('#correct' + q).hide();
    $('#wrong' + q).hide();
    if ($('#q' + q + correct).is(':checked')) {
        $('#correct' + q).show();
        $('#next' + q).show();
    } else {
        $('#wrong' + q).show();
        $('#next' + q).hide();
    }
};
