(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
//loader
window.addEventListener("load", function() {
  var miElemento = document.querySelector(".show");
  const contenido = document.getElementById("spinner");

  // Retrasar el cambio de opacidad, z-index y visibilidad
  setTimeout(function() {
    contenido.style.transition = "opacity 0.5s ease, z-index 0.5s ease, visibility 0s linear 0s";
    contenido.style.opacity = "0";
    contenido.style.zIndex = "0";

    // Esperar hasta que la transición de opacidad se complete antes de ocultar el elemento
    setTimeout(function() {
      contenido.style.visibility = "hidden";
    }, 150);
  }, 300); // Retraso de 1 segundo (1000 milisegundos)
});
  

//segundo nav metabuscador
let prevScrollPos = window.pageYOffset;
let maxScroll = 200; // Puedes ajustar este valor según tus necesidades

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > maxScroll) {
        document.querySelector(".scrolling-nav").style.top = "0";
        document.querySelector(".scrolling-nav").style.transition = "top 0.7s ";
    } else {
        document.querySelector(".scrolling-nav").style.top = "78px";
        document.querySelector(".scrolling-nav").style.transition = "top 0.7s ease";
    }

    prevScrollPos = currentScrollPos;
}
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".scrolling-nav ");
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "transparent";
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
  });
  //tamaño del pleaceholder al desplazar
  window.addEventListener('scroll', function() {
    var inputElement = document.getElementById('searchInput');
    var scrollTop = window.scrollY || window.scrollTop || document.documentElement.scrollTop;

    // Definir el ancho máximo y mínimo que deseas para el input
    var maxWidth = 480;
    var minWidth = 0;

    // Calcular el nuevo ancho basado en el desplazamiento
    var newWidth = maxWidth - (scrollTop / 0.1); // Puedes ajustar este valor según tus preferencias

    // Limitar el ancho dentro del rango deseado
    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

    // Aplicar el nuevo ancho al elemento de entrada
    inputElement.style.width = newWidth + 'px';
  });
  document.addEventListener('DOMContentLoaded', function() {
    var botonElement = document.getElementById('fa fa');

    botonElement.addEventListener('click', function() {
      // Desplazar la página al principio del contenido (top)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  });
        // opacidad del pleace holder
  const scrollPlaceholder = document.getElementById("mtbid");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const opacityValue = 1 - scrollPosition / 150; // Puedes ajustar el divisor para controlar la velocidad del cambio

  scrollPlaceholder.style.opacity = opacityValue.toFixed(2);
});
//segundo nav modifcar su tamaño
const inputField = document.getElementById('searchInput');
const navbar = document.getElementById('scrollnavm');

inputField.addEventListener('input', function() {
  if (inputField.value.length > 0) {
    scrollnavm.style.height = '80px'; // Modifica el tamaño de la barra de navegación
    scrollnavm.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    scrollnavm.style.height = '60px'; // Restaura el tamaño original de la barra de navegación
    scrollnavm.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
});
//trancion de l herf
$(document).ready(function() {
    $("a.ancla").click(function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 800); // Velocidad de la transición en milisegundos
    });
  });
  $(document).ready(function() {
    // Función para activar automáticamente el siguiente control
    function activarSiguienteControl() {
        $(".carousel-control-next").trigger("click");
    }
    
    // Intervalo de tiempo (en milisegundos) para activar el siguiente control
    var intervalo = 7500; // 3 segundos
    
    // Activar automáticamente el siguiente control cada 'intervalo' milisegundos
    setInterval(activarSiguienteControl, intervalo);
});

/***filtro de busqueda */
// scripts.js

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleFilters");
  const filterContainer = document.getElementById("filtroForm");

  filterContainer.style.display = "none";

  // Mostrar u ocultar el formulario al hacer clic en el botón
  toggleButton.addEventListener("click", function() {
      if (filterContainer.style.display === "none") {
          filterContainer.style.display = "block";
          toggleButton.textContent = "Ocultar Filtros";
      } else {
          filterContainer.style.display = "none";
          toggleButton.textContent = "Mostrar Filtros";
      }
  });

  // Ocultar el formulario al hacer clic fuera del formulario
  document.addEventListener("click", function(event) {
      if (!filterContainer.contains(event.target) && event.target !== toggleButton) {
          filterContainer.style.display = "none";
          toggleButton.textContent = "Mostrar Filtros";
      }
  });
});
// opacidad del boton del filtro
const myButton = document.getElementById('toggleFilters');

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    myButton.classList.remove('hide'); // Mostrar el botón cuando esté en la parte superior
  } else {
    myButton.classList.add('hide'); // Ocultar el botón en cualquier otra posición
  }
});
//ocultar el filtro de preferencias si esta activado
const toggleFiltersButton = document.getElementById('toggleFilters');
const filterForm = document.getElementById('filtroForm'); // Debe coincidir con el ID del formulario en el HTML
let prevScrollPoos = window.pageYOffset;

toggleFiltersButton.addEventListener('click', () => {
  filterForm.classList.toggle('hide2');
});

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPoos) {
    toggleFiltersButton.classList.add('hide');
    if (window.getComputedStyle(filterForm).display === 'block') { // Aquí también debe ser 'filterForm'
      toggleFiltersButton.click();
    }
  } else {
    toggleFiltersButton.classList.remove('hide2');
  }

  prevScrollPoos = currentScrollPos;
});
$(document).ready(function () {
  $("html, body").scrollTop(0);
});


/***perfil */
// scripts.js
/**video de juego**/ 
function playVideoOnHover(contenedor) {
  const video = contenedor.querySelector('.video');

  contenedor.addEventListener('mouseenter', () => {
    video.play();
  });

  contenedor.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
}

const contenedores = document.querySelectorAll('.proyection');
contenedores.forEach(playVideoOnHover);



/**perfil logeado**/
var formularioVisible = false; // Estado inicial del formulario

document.getElementById("perfilbtn").addEventListener("click", function() {
  var formulario = document.getElementById("perfil");
  
  if (formularioVisible) {
    formulario.style.display = "none"; // Ocultar el formulario si ya estaba visible
  } else {
    formulario.style.display = "block"; // Mostrar el formulario si no estaba visible
  }
  
  formularioVisible = !formularioVisible; // Cambiar el estado del formulario


});
