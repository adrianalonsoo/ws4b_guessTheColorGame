let numero = 6;
let colores = [];
let targetColor;

let cuadrados = document.querySelectorAll(".cuadrado");
let h1 = document.querySelector("h1");
let mensaje = document.getElementById("mensaje");
let rgb = document.querySelector("#rgb");
let resetBoton = document.querySelector("#reset");


window.onload =()=>{
    colocarCuadrados();
	reset();
}


//AddEventListener para resetear pulsando el boton
resetBoton.addEventListener("click", ()=>{
	reset();
}) ;


function colocarCuadrados() {
	for( let i = 0; i < cuadrados.length; i++) {
		cuadrados[i].addEventListener("click", (e)=>{
			// Color seleccionado
			let colorSeleccionado = e.target.style.backgroundColor;
			// Comparar color con el color random
			if(colorSeleccionado === targetColor) {
				mensaje.textContent = "Correcto!";
				cambiarColor(targetColor);
			}
			else{
				// mostrar cuadrado en negro para que desaparezca
				e.target.style.backgroundColor = "#232323";
				mensaje.textContent = "Intentalo de nuevo!";
			}
		});
	}
}

function reset() {
	// generar una lista de colores pasandole un numero
	colores = generaColor(numero);
	// seleccionar nuevo color random
	targetColor = randomColor();
	// cambiar rgb al color random
    rgb.textContent = targetColor;
    // cambiar color de los cuadrados
    for(let i = 0; i < cuadrados.length; i++) {
    	if(colores[i]){
		    cuadrados[i].style.display = "block";
	    	cuadrados[i].style.backgroundColor = colores[i];
    	}
    	else {
    		cuadrados[i].style.display = "none";
    	}
    }
    //  cambiar color del h1
	h1.style.backgroundColor = "rgb(37, 143, 229)";
	// mostrar mensaje reseteado
	mensaje.textContent = "";
}


function randomColor() {
	//Genera el random
	let random = Math.floor(Math.random() * colores.length);
	return colores[random];
}

function cambiarColor(color) {
	// bucle para todos los cuadrados
	for(let i = 0; i < cuadrados.length; i++) {
		// cambiar cada color para el color dado
		cuadrados[i].style.backgroundColor = color;
	}
	// cambiar el titulo para que tenga el mismo color
	h1.style.backgroundColor = color;
}

function generaColor(num) {
	//Array
	let array = [];
	for(let i = 0; i < num; i++) {
		//Generar color aleatorio y lo introduce en el array
		let color = generaColorRandom();
		array.push(color);
	}
	//Devuelve el array
	return array;
}

function generaColorRandom() {
	// Genera el rojo para el rgb
	let red = Math.floor(Math.random() * 256);
	// genera el verde para el rgb
	let green = Math.floor(Math.random() * 256);
	// genera el azul para el rgb
	let blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")"
}