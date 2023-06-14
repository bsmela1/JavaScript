//variables:
var clickedDivs = []
let div_1 = 0
let div_2 = 0
let div_1_x = 0
let div_1_y = 0
let div_2_x = 0
let div_2_y = 0

//functions:
function clearArrays(){
    if(clickedDivs.length==2){
        if(clickedDivs[0].id == clickedDivs[1].id){
            clickedDivs = []
        }
    }else if(clickedDivs.length>2){
        clickedDivs = []
    }
}

function checkTwoDivs(divs_array){
    div_1 = divs_array[0].id.split("_")
    div_2 = divs_array[1].id.split("_")

    div_1_x = div_1[1]
    console.log(div_1_x)
    div_1_y = div_1[2]
    console.log(div_1_y)

    div_2_x = div_2[1]
    console.log(div_2_x)
    div_2_y = div_2[2]
    console.log(div_2_y)

    if((Math.abs(div_1_x - div_2_x)<=1) && (Math.abs(div_1_y - div_2_y)<=1) 
    && divs_array[0].style.backgroundColor == divs_array[1].style.backgroundColor
    && divs_array[0].id != divs_array[1].id){
        document.getElementById(divs_array[0].id).style.backgroundColor = "white"
        document.getElementById(divs_array[1].id).style.backgroundColor = "white"
        console.log("tak")
    }
    clickedDivs = []
    document.getElementById("clicked_divs_amount").innerHTML = clickedDivs.length
}

function createGrid(){
    console.clear()
    document.getElementById('grid').innerHTML = "";
    var collumns = parseInt(document.getElementById('collumns_input').value)
    var rows = parseInt(document.getElementById('rows_input').value)
    var colorsCount = parseInt(document.getElementById('colors_count').value)
    var colorsTab = []
    var randomColor = null

    for(var k=0; k<colorsCount; k++){
        if(k>0){
            do{
                randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).toString()
            }while(colorsTab.indexOf(randomColor)!=-1)
        }else{
            do{
                randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).toString()
            }while(colorsTab.indexOf(randomColor)!=-1)
        }
        colorsTab.push(randomColor)
    }

    for(var r=1; r<=rows; r++){
        for(var c=1; c<=collumns; c++){
            var new_grid_element = document.createElement('div')
            var randomNum = Math.floor(Math.random() * colorsCount)

            new_grid_element.style.float = "left"
            new_grid_element.style.backgroundColor = colorsTab[randomNum]
            new_grid_element.className = "grid_element"
            new_grid_element.id = "grid_" + r.toString() + "_" + c.toString()
            
            if(c==1 && r!=1) new_grid_element.style.clear = "both"

            if(r==1) new_grid_element.style.borderTop = "6px solid black"
            else if(r==rows) new_grid_element.style.borderBottom = "6px solid black"
            
            if(c==1) new_grid_element.style.borderLeft = "6px solid black"
            else if(c==collumns) new_grid_element.style.borderRight = "6px solid black"

            new_grid_element.onclick = function (){
                clearArrays()
                console.log(this.id);
                clickedDivs.push(this)
                console.log(clickedDivs)
                document.getElementById("clicked_divs_amount").innerHTML = clickedDivs.length
                if(clickedDivs.length == 2){
                    checkTwoDivs(clickedDivs)
                }
            }
            document.getElementById('grid').appendChild(new_grid_element)
        }
    }
}