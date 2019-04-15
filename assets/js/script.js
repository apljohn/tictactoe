
$( document ).ready(function() {

    var number  = 1;
    $('.col-4').on('click' , function(event) {

    var divclicked = $(this);

    if(divclicked.hasClass('X') || divclicked.hasClass('O')){
        alert('choisis une autre case.');
    }
    else {
        if (number === 1){
            divclicked.addClass('X');

            number= 2;
        }
        else {
            divclicked.addClass('O');

            number = 1;
        }
    }

    })
});