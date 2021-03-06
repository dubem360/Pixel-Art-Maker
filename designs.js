let makeGrid = function() {
// sets the grid height and width
let gridHeight, gridWidth,canvas,cell, rows;

gridHeight = $('#input-height').val();
gridWidth = $('#input-width').val();
canvas = $('#pixel-canvas');

canvas.children().remove();
let n = 0;
while (n < gridHeight){
    canvas.append('<tr></tr>');
    n++;
}
rows = $('tr');
for (let m = 0; m < gridWidth; m++){
    rows.append('<td></td>');
}
// color selection from input form
cell = canvas.find('td');
cell.click(function(){
    let color;
    color = $('#color-picker').val();
    if($(this).attr('style')){
        $(this).removeAttr('style');
    }else{
        $(this).attr('style','background-color:' + color);
    }
});

}

// submission of input.
let submit;
submit = $('input[type="submit"]')
submit.click(function(event){
    event.preventDefault();
    makeGrid();
});

