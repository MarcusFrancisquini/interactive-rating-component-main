//? itens
const submitButton = document.getElementById('submit-btn');
const segundaTela = document.getElementById('thanks');
const primeiraTela = document.getElementById('rating');
const rating = document.getElementById('change');
const btns = document.querySelectorAll('.btn-rating');


//* mostrar a segunda tela
function mostrarTela(event) {
    if (event.type === 'click') {
        segundaTela.classList.remove('hide');
        primeiraTela.classList.add('hide')
    }
}

submitButton.addEventListener('click', mostrarTela)


//* selecionar o número
btns.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        rating.innerHTML = btn.innerHTML
        const selected = document.querySelector(".checked");
        
        if (selected) {
            selected.classList.remove("checked");
        }
        
        const circle = e.target;
        circle.classList.add("checked"); 
    })
})

