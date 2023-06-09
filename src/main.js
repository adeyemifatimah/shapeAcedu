// Main.js is for user interphase
// to import into ur main
// import { Triangle } from "./triangle.js";
// import { Square } from "./triangle.js";
// import $ from 'jquery';
// import Triangle from "./triangle.js";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';


// $('#triangle-checker-form').submit(function(event) {
//   event.preventDefault();
//   const length1 = $('#length1').val();
//   const length2 = $('#length2').val();
//   const length3 = $('#length3').val();
//   const triangle = new Triangle(length1, length2, length3);
//   const response = triangle.checkType();
//   $('#response').append("<p>" + response + "</p>");
// });

// update for rectangle
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Triangle from './js/triangle.js';
import Rectangle from './js/rectangle.js';
import myDog from './assets/images/myDog.jpg';


$("img").attr("src",myDog);
$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($('#length1').val());
    const length2 = parseInt($('#length2').val());
    const length3 = parseInt($('#length3').val());
    const triangle = new Triangle(length1, length2, length3);
    const response = triangle.checkType();
    $('#response').append(`<p>${response}</p>`);
  });

  $('#rectangle-area-form').submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($('#rect-length1').val());
    const length2 = parseInt($('#rect-length2').val());
    const rectangle = new Rectangle(length1, length2);
    const response = rectangle.getArea();
    $('#response2').append(`<p> The area of the rectangle is ${response}.</p>`);
  });
});


    