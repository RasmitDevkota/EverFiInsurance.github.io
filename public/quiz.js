function start() {
    $('#startBtn').hide();
    $('#q1').show();
};

function next(q) {
    if(q == 10) {
        $('#q' + q).hide();
        $('#done').show();
    } else {
        $('#q' + q).hide();
        $('#q' + 1).show();
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
