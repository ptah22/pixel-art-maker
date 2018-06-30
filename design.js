// Select color inpt
//select size input
var height, width, color;

//when size is submittd by te user, cal makeGrid()
$('#sizePicker').submit(funcion (event) {
    event.preventDefault();
    height = $(#inputHeight').val();
    width = $(#inputWeight').val();
    makeGrid(height, width);

)}


function makeGrid(x,y) {
    $('tr').remove();
	
	
     for (var i = 1; i <=x; i++) {
	  $('#pixel_canvas').append('tr id=table' + i + '></tr>');
	  for (var j = 1; j <=y; j++) {
	       $('#table' + i).append('<td></td>');
	  }
     }
	
	
	$('td').click(function addColor() {
	   color = $('#colorPicker').val();
		
	   if ($(this).attr('style')) [
		$(this).removeAttr('style')
           } else { 
		$(this).attr('style', 'background-color:' + color)
           }
         })
 }
