$(document).ready(function(){
    $('[data-behavior="ajax"]').on('click', function(){
        var url = $(this).data('href'),
            target = $($(this).data('target'));
        $.ajax({
            'url': url 
        }).done(function(data){
            target.html(data);
            $('#myModal').modal('show');
        })
    })
});