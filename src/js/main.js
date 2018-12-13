//@prepros-prepend vendor/jQuery-3.3.1.min.js
//@prepros-append plugins/plugins.js
// camera js
/* Open when someone clicks on the camera button */
function openNav() {
  document.getElementById("camera").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("camera").style.width = "0%";
}
// end camera js

//start index filter js
// shows and hides filtered items
$(".filter-simple-button").click(function() {
  var value = $(this).attr('data-filter');
  if(value === "all") {
    $('.filter-simple-item').show('1000');
  } else {
    $(".filter-simple-item").not('.'+value).hide('3000');
    $('.filter-simple-item').filter('.'+value).show('3000');
  }
});

// changes active class on filter buttons
$('.filter-simple-button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});


// end index filter js