
function draw() {
    var h_config = document.getElementById("h_config");
    var w_config = document.getElementById("w_config");
    var w = w_config.value;
    var h = h_config.value;
    var mind = document.getElementById("safe_distance").value;
    var container = document.getElementById("container");
    var seat_distance = document.getElementById("seat_distance").value;
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
            square.style.backgroundColor="white";
            square.style.padding="2%";
            square.style.borderRadius="2px";
            // square.style.border
            square.id = row +"_"+ column;
            square.style.border="none";
            newrow.appendChild(square);
            // console.log(square);
        }
        // console.log(newrow);
        container.appendChild(newrow);
    }
    
    var matrix_and_counter = get_plan(w,h,seat_distance,mind);

    var mat = matrix_and_counter[0];
    for (var j=0;j<h; j++) {
        for (var i=0; i<w; i++) {
            if (mat[j][i] == 'O') {
                console.log("hi")
                var square = document.getElementById(j+"_"+i);
                square.style.backgroundColor = "#F77F00";
            }
        }
    } 
}

function animate_redirect() {
    window.location.replace("./animationA/animationA.html")
}
