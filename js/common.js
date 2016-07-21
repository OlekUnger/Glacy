var search_btn = document.querySelector(".search-btn");
var search_form = document.querySelector(".search-form");
var search = document.querySelector(".search");
var search_field = search_form.querySelector("[name=search]");


search_btn.addEventListener("mouseover", function(event) {
  event.preventDefault();
  search_form.classList.add("modal-content-show");
  search_field.focus();
});

search_field.addEventListener("mouseout", function(event) {
  search_form.classList.remove("modal-content-show");
});

$(function() {
                /*************  Initialize Price Range Slider *************/
                $( "#slider-range" ).slider({
                        range: true,
                        min: 0,
                        max: 900,
                        step: 10, // Use this determine the amount of each interval
                        values: [ 100, 500 ], // The default range
                        slide: function( event, ui ) {
                                $( "#min-price" ).val( ui.values[ 0 ]);// for input text box
                                $( "#max-price" ).val(ui.values[ 1 ]);
                                $( "#my_min" ).val(ui.values[ 0 ]); // Display and selected the min Price
                                $( "#my_max" ).val(ui.values[ 1 ]); // Display and selected the max Price
                        }
                });
        /*************  Set Initial Value of the Dropdown Box *************/
                //For dropdown box
                $( "#my_min" ).val($( "#slider-range" ).slider( "values", 0 ));
                $( "#my_max" ).val($( "#slider-range" ).slider( "values", 1 ));
        

   /************* When user choose from dropdown box directly *************/
                $("select.price_range").change(function () {
                        $myMinValue = $("#my_min option:selected").val();
                        $myMaxValue = $("#my_max option:selected").val();
                        //Make changes on the slider itself
                        if($myMinValue <= $myMaxValue) {
                                $( "#slider-range" ).slider({
                                        values: [$myMinValue, $myMaxValue]                                                     
                                });
                        } else {
                                alert("Invalid Input");
                        }
                });
          });