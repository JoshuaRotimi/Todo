

// Check off specific to dos by clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

// Click on X to delete to do
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();

    });
     event.stopPropagation();
});

$("button").on('click', addNew);
        // grabbing new to do by entering input
function addNew() {
    let todoText = $('input').val();
    $(this).val('');

    $('ul').append(`<li><span><i class=\"fa fa-trash\"></i></span>${todoText} </li>`);




}

$('.fa-plus').on('click', function () {
    $('input').fadeToggle();
    $('button').fadeToggle();

});




