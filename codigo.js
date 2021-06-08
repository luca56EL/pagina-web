
//primero selecciono los valores ingresados
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");
//al hacer click sobre el boton llama a una funcion

boton.addEventListener("click",(e)=>{
	e.preventDefault(); //para que no envie los dats del formulario
	let error =validarcampos();
	if (error[0]){
		resultado.innerHTML=error[1];
		resultado.classList.add("red")
	} else {
		//document.getElementById("resultado").innerHTML="solicitud enviada correctamente";
		resultado.innerHTML="solicitud enviada correctamente";
		resultado.classList.add("green")
		resultado.classList.remove("red")
	}
})

const validarcampos=()=>{
	let error=[];
	if (nombre.value.length <5){
		error[0]=true;
		error[1]="El nombre no puede tener menos de 5 caracteres";
		return error;
	}else if (nombre.value.length > 40){
		error[0]=true;
		error[1]="El nombre no puede tener mas de 40 caracteres";
		return error;
	} else if (email.value.length <5 ||
				email.value.length > 40 ||
				email.value.indexOf("@") == -1 ||
				email.value.indexOf(".") == -1){
		error[0]=true;
		error[1]="El mail es invalido";
		return error;
	} else if (materia.value.length <4 ||
				materia.value.length > 40 ){
		error[0]=true;
		error[1]="La materia es invalida";
		return error;
	}
	
	error[0]=false;
	return error;
}

