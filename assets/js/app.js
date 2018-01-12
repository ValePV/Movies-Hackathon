$(document).ready(function(){
// Splash versión móvil:
  $(function() {
    setTimeout(function() {
      $('#splash').fadeOut(700);
    }, 3000);
});
  
  $('.second_section2').hide();
  $('.third_section').hide();
  $('.fourth_section').hide();
  $('.fifth').hide();
  $('.btn_movie').click(function(){
  $('.first_section').hide();
  $('.second_section2').show();
  $('.third_section').show();
  $('.fourth_section').show();
  $('.btn_movie').hide();
  $('.logo').click(function(){
    $('.first_section').show();
    $('.second_section2').hide();
    $('.third_section').hide();
    $('.fourth_section').hide();
    $('.fifth').hide();
    $('.btn_movie').show();
  $('.btn_profile').click(function(){
    $('.fifth').show();
    $('.div_row').hide();
    $('.first_section').hide();
    $('.second_section2').hide();
    $('.third_section').hide();
    $('.fourth_section').hide();
      

});

  });
});

var todayFeed = new Date();
    var date = todayFeed.getDate();
    var month = todayFeed.getMonth();
    var year = todayFeed.getFullYear();
    var hours = todayFeed.getHours();
    var minutes = todayFeed.getMinutes();
    var fullDate = date +'/'+ month +'/'+ year +' '+ hours +':'+ minutes
$('#sendBtn').click(function() {
    if ($('#comment').val() !== "") {
        $('#commentList').append(
          "<div class='commentTxt'>" +
            "<p>" + 
              "<span>  " + fullDate + " </span>" + $('#comment').val() +
            "</p>" +
          "</div>"  
        );
      }
  });
});

$(document).ready(function(){
  var imgItems = $('.slider li').length; //Numero de slides
  var imgPos = 1;
  //Agregando paginación
  for(i = 1;i <= imgItems; i++){
    $('.pagination').append('<li class="col-sm-2 col-md-2"><i class="fa fa-circle" aria-hidden="true"></i></li>');
  }
  
  $('.slider li').hide(); //ocultar las imagenes
  $('.slider li:first').show();//mostrar la primera imagen
  $('.pagination li:first').css({'color':'#cd6e2e'}); //cambiar el color del primer icono

  //Ejecución de las funciones
  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);
  
  //intervalos en n segundos
  setInterval(function(){
    nextSlider();
  }, 4000);
  //Funciones
  function pagination(){
    //variable que se selecciones el elemento que estoy clickeando, index(el valor de la posicion del elemento)
    var paginationPos = $(this).index() + 1;
    //ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();
    //cambiar de color el icono segun corresponda
    $('.pagination li').css({'color':'#858585'});
    $(this).css({'color':'#CD6E2E'});

    imgPos = paginationPos;
  }

  function nextSlider(){
    if(imgPos >= imgItems){
      imgPos = 1;
    } else {
      imgPos++;
    }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});
    //ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }

  function prevSlider(){
    if(imgPos <= 1){
      imgPos = imgItems;
    } else {
      imgPos--;
    }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});
    //ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }


});

