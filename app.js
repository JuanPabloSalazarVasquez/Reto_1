//variables
let hojas = document.getElementById('hojas');
//variables

//funciones
function arbol(id) {
    // definimos la anchura máxima
    var max = 20;
    // variables de interación
    var j = 1, k = 1;
    // contiene el resultado a mostrar
    var result = "";

    for (var h = 1; h < 4; h++) {
            for (var i = k; i <= max; i += 2) {
                console.log( (1 + (Math.ceil(max / 2)) - j) );
                if(j % 2 == 0) {
                    console.log("Par: " + i);
                    result += "<br>" + (Array((1 + (Math.ceil(max / 2)) - j)).join(" ") + Array(i + 1).join("<p>" + 1 + "</p>"));
                    j = j + 1;
                }else{
                    console.log("Impar: " + i);
                    result += "<br>" + (Array((1 + (Math.ceil(max / 2)) - j)).join(" ") + Array(i + 1).join("<p>" + 0 + "</p>"));
                    j = j + 1;
                }
            }
            k = 10;
            j = 3; 
    }
    //tronco
    if (max >= 7) {
        result += "<br>" + (Array((1 + (Math.ceil(max / 2)) - 2)).join(" ") + Array(4).join("<h6>" + 0 + "</h6>"));
        result += "<br>" + (Array((1 + (Math.ceil(max / 2)) - 2)).join(" ") + Array(4).join("<h6>" + 1 + "</h6>"));
    }

    document.getElementById(id).innerHTML = result;
}
//funciones

window.onload = arbol('hojas')