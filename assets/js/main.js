    var arrMensaje = new Array();
	arrMensaje = "LABORATORIA ES PARTE DE ESE CAMBIO";
	function cambioTexto(id){
	document.getElementById("soad").innerHTML = arrMensaje;
}

function floatRight() {
    document.getElementById("myImg").style.cssFloat = "right";
}

function validateForm() {
    // remueve todos los span antes de cada validacion!
    document.querySelectorAll(".form-signup span").forEach(function(e) {
        e.remove()
    });
	var letras = /^[A-Za-z]*$/; /*/^[a-zA-Z ]*$/;/^[0-9]$/*/
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("input-email").value;
    var coment = document.getElementById("asunto").value;

     if (nombre == null || nombre.length == 0) {
        var contenedor = document.getElementsByClassName("input-box")[0];
        var res = document.createElement("span");
        var texto = document.createTextNode("Contesta todos los campos");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(nombre + " Esta vacio");
    } else if (nombre.substring(0, 1) !== nombre.substring(0, 1).toUpperCase()) {
        var contenedor = document.getElementsByClassName("input-box")[0];
        var res = document.createElement("span");
        var texto = document.createTextNode("Tu nombre debe llevar Mayuscula inicial");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(nombre + " Falta mayusculas inicial");
    } else {
        console.log(nombre + " Valido");
    }
  if (email == null || email.length == 0) {
        var contenedor = document.getElementsByClassName("input-box")[1];
        var res = document.createElement("span");
        var texto = document.createTextNode("Contesta todos los campos");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(email + " Esta vacio");
    } else if (!email.test) {
        var contenedor = document.getElementsByClassName("input-box")[1];
        var res = document.createElement("span");
        var texto = document.createTextNode("Agregar @ para ser valido");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(email + " agregar @");
    } else {
        console.log(email + " Valido");
    }

     if (coment == null || coment.length == 0) {
        var contenedor = document.getElementsByClassName("input-box")[2];
        var res = document.createElement("span");
        var texto = document.createTextNode("Contesta todos los campos");
        contenedor.appendChild(res);
        res.appendChild(texto);
        console.log(coment + " Esta vacio");
    }       

   	document.getElementById("name").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("asunto").value = "";

}




