$('#submit-btn').click(function(event) {
  event.preventDefault()
  var userInput = $('#city-type').val()
  if (userInput === 'la' || userInput === 'los angeles') {
    $('body').css('background', 'url(images/la.jpg)')
  } else if (userInput === 'sydney' || userInput === 'Sydney Aus') {
    $('body').css('background', 'url(images/sydney.jpg)')
  } else if (userInput === 'austin') {
    $('body').css('background', 'url(images/austin.jpg)')
  } else if (userInput === 'sf' || userInput === 'San Francisco') {
    $('body').css('background', 'url(images/sf.jpg)')
  } else if (userInput === 'NYC' || userInput === 'new york') {
    $('body').css('background', 'url(images/nyc.jpg)')
  }
})

/*$('#submit-btn').click(function(event) {
  event.preventDefault()
  var userInput = $('#city-type').val()
  if (userInput === 'nyc' || userInput === 'new york' || userInput === 'New York City') {
    $('body').css('background', 'url(images/nyc.jpg)')
  } else if { (userInput === 'la' || userInput === 'los angeles') {
    $('body').css('background', 'url(images/la.jpg)')
  } else if (userInput === 'sydney' || userInput === 'Sydney Aus') {
    $('body').css('background', 'url(images/sydney.jpg)')
  } else if (userInput === 'austin') {
    $('body').css('background', 'url(images/austin.jpg)')
  } else if (userInput === 'sf' || userInput === 'San Francisco') {
    $('body').css('background', 'url(images/sf.jpg)')
  }
})





/*var userInput = 'los angeles'
var userInput = 'new york'
var userInput = 'san francisco'
var userInput = 'sydney'


 $('#submit-btn').click(imageChange);

 function imageChange() {
   $('#submit-btn').css("backgroundColor", "starter_code/images/la.jpg");
 }
*//*console.log('Hello')
$('#submit-btn').click(searchKeyword);
$('#city-type').val()
 */
