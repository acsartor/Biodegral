$(document).ready(function(){
    $('.nav-link').hover(
        function() {
            $(this).css({ //Passa o mouse por cima da navbar
                'color': '#00FA9A',
                'box-shadow': '0 2px 0 #00FA9A'
            });
        },
        function() { //Tira o mouse de cima da navbar
            $(this).css({
                'color': '',
                'box-shadow': ''
            });
        }
    );
});