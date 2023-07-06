$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(`<li></li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#tarefa-nova').val(' ');
 
        $(novoItem).on('click', function(){
            $(this).css({"text-decoration":"line-through"});
        })
    })
})