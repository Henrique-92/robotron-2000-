
const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () =>{
    lista.setAttribute("data-lista", "mostrar")
});


document.querySelector(".close").addEventListener("click", () =>{
    lista.setAttribute("data-lista", "esconder")
})


function mudaCores(elementos){
    let cores = elementos.getAttribute("[data-cor]");
    let tipoElemento = elementos.getAttribute("[data-tipo]")
}

