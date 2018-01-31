
function makeGrid() {

            var gridHeight = $("#input_height").val();
            var gridWidth = $("#input_width").val();
            var grid = $("#pixel_canvas");
            

            grid.html('');//clears grids

            for (var h = 0; h < gridHeight; h++) {
                grid.append('<tr></tr>'); //create rows
                for (var w = 0; w < gridWidth; w++) {
                    grid.children().last().append('<td></td>'); //create columns
                }
            }

            grid.on('click','td',function () {
                var gridColor = $("#colorPicker").val();
                $(this).attr('bgcolor', gridColor);//apply color
            });

            grid.on('dblclick', 'td', function() {
            	$(this).remove();//remove color
            });
        };


         $("#button").click( function(event){
            event.preventDefault(); //prevent refresh with submit
            makeGrid(); //create grid
            })
