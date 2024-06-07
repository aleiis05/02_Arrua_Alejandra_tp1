const coberturas = document.getElementsByClassName('coberturas');


function mostrarClic(e){
    console.log(e.target.innerText);
}

for(const cobertura of coberturas) {
    cobertura.addEventlistener('click',mostrarClic);
}


