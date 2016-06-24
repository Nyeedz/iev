$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
  $(".dropdown-buttonmb").dropdown();
  $(".slider").slider();
  $('select').material_select('destroy');

  $(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false
  });
  });

  $(document).ready(function(){
  $('ul.tabs').tabs();
  });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });

  var options = [
          {selector: '#teste', offset: 500, callback: function() { Materialize.showStaggeredList("#teste"); } },
        ];
  Materialize.scrollFire(options);
  });
