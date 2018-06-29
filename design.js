$("#sizePicker").submit(function (event) 
                        {event.preventDefault();
                         height=$("#imput-height").val();
                                  width=("input-width").val();
                         makeGrid(height, width); })
function makeGrid(x,y) { $("tr").remove();
                        for(var i=1; i<=x; i++) {$("#pixel_canvas).append("<tr id=table"+i+"></tr>");
                                                   for(var j=1; j<=y j++) {$("table "+i).append("<td></td>);
                                                                                                }
                                                                                                }
                                                                                                $(" td").clicj(function addColor() {color=$("colorPicker).val();
                                                                                                                                            if($(this).attr("style")}
                                                                                                               else{$(this).attr("style","backgroundcolor;"+color);}
                                                 }
