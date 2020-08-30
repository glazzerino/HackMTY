<<<<<<< HEAD

var matsave = new Array;
=======
>>>>>>> 2f90c48aedafe4ee90d58b0a84ade65a13e8af93
function draw() {
    var h_config = document.getElementById("h_config");
    var w_config = document.getElementById("w_config");
    var w = w_config.value;
    var h = h_config.value;
    var mind = document.getElementById("safe_distance").value;
    var container = document.getElementById("container");
    var seat_distance = document.getElementById("seat_distance").value;
    container.innerHTML="";

    var matrix_and_counter = get_plan(w,h,seat_distance,mind);
    var mat = matrix_and_counter[0];
    var counter = matrix_and_counter[1];
    var indicator = document.createElement("p3");
    indicator.textContent = "Max occupancy percentage: " + parseFloat((counter * 100) / (w*h)).toFixed(2) +"%";
    container.appendChild(indicator)
    var row = 0;
    for (row=0; row<h; row++) {

        var newrow = document.createElement("div");
        newrow.id = "row_" + row;
        newrow.style.padding="1%"
        var indicator = document.createElement("p3");
        indicator.id = "indicator";
        for (var column=0; column<w; column++) {

            var square = document.createElement("button");
            square.type= "button";
            square.class = "seat";

            square.style.marginLeft="1%";
            square.style.backgroundColor="white";
            square.style.padding="1%";
            square.style.borderRadius="2px";

            square.id = row +"_"+ column;
            square.style.border="none";
            newrow.appendChild(square);
           
        }
        container.appendChild(newrow);
    }

    

    
    console.log(mat);
    for (var j=0;j<h; j++) {
        for (var i=0; i<w; i++) {
            //Seat slot recoloring
            if (mat[j][i] == 'O') {
                console.log("hi")
                var square = document.getElementById(j+"_"+i);
             
                if (j == 0) {
                var square = document.getElementById(j+"_"+i);
                square.style.backgroundColor = "blue";
                square.title = "Handicap seat";
                }
                else {
                    square.style.backgroundColor = "#F77F00";
                }   
            }
        }
    }
    // indicator.value = "Available percentage: " + (ci)
    matsave = mat; 
    console.log(mat);
}

function animate_redirect() {
    window.location.replace("./animationA/animationA.html")
}
