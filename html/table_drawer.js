
function draw() {
    var h_config = document.getElementById("h_config");
    var w_config = document.getElementById("w_config");
    var w = w_config.value;
    var h = h_config.value;
    var container = document.getElementById("container");
    container.innerHTML="";
    // console.log(h)
    var row = 0;
    for (row=0; row<h; row++) {

        var newrow = document.createElement("div");
        newrow.id = "row_" + row;
        newrow.style.padding="1%"
        for (var column=0; column<w; column++) {
            
            var square = document.createElement("button");
            square.type= "button";
            square.class = "seat";
            // square.style.width = "5%";
            square.style.marginLeft="1%";
            square.style.backgroundColor="#F77F00";
            square.style.padding="2%";
            square.style.borderRadius="2px";
            // square.style.border
            square.id = row +"_"+ column;
            square.style.border="none";
            newrow.appendChild(square);
            // console.log(square);
        }
        console.log(newrow);
        container.appendChild(newrow);
    }
}