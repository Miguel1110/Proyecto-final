$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.encabezado').addClass("movimiento");
        }else{
            $('.encabezado').removeClass("movimiento");
        }
    })

   
})