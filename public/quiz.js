function start() {
    $('#startBtn').hide();
    $('#q1').show();
};

function next(q) {
    if (q == 10) {
        $('#q' + q).hide();
        $('#done').show();
        $('#message').show();
        $('#done').css({
            "display": "flex",
            "flex-direction": "row",
            "justify-content": "center"
        });
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

function reset() {
    $('#done').hide();
    $('#message').hide();
    $('#q1').show();
};