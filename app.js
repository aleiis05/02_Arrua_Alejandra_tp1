const coberturas = document.getElementsByClassName('cobertura')


function mostrarClic(e) {
    console.log(e.target.innerText);

}
for (const cobertura of coberturas) {
    cobertura.addEventListener('click', mostrarClic);
} 