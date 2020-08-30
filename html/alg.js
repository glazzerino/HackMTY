
function get_plan(w, h,seatd, mind, percentage) {
    var mat = new Array(h);
    for (var i=0;i<h; i++) {
        mat[i] = new Array(w);
        for(var x=0; x<w; x++) {
          mat[i][x] = ' ';
        }
    }
    // console.log(mat);   
    
    var seat_distance = seatd;
    var distance = mind;
    var intervalo = Math.trunc(distance / seat_distance);
    n = seatd;
    m = mind;
    i = 0;
    j = 0;
    
    // console.log(mat)
    counter = 0;
    while(j < h) {
        while(i < w) {
            mat[j][i] = 'O';
            counter++;
            i+= intervalo
        }
        j+=intervalo;
        i=0;

    }

    return [mat,counter];
}



