function start() {
    $('#next1').show();
};

function next(q) {
    $('#q' + q).hide();
    $('#next' + q + 1).show();
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