const botaoAlterarEvento = document.querySelector("#botaoAlterarEvento")
const botaoExcluirEvento = document.querySelector('#botaoExcluirEvento')

// MODAL
function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


// EDITAR EVENTO
botaoAlterarEvento.addEventListener("click", (e)=>{
        e.preventDefault()
        editarEvento()
})

async function editarEvento() {

    //necessário dar um get e buscar o evento pelo id ou titulo para com essa identificação dar o put

    const idEvento = {
        method : 'GET', 
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }

    const title = prompt('Qual título da Tarefa?');

    const recebeEvento = await fetch(`http://localhost:3000/events/${title}`);
    console.log(recebeEvento);


    const titleEvento = document.querySelector("#titulo").value
    const descricaoEvento = document.querySelector("#descricao").value
    const dataInicioEvento = document.querySelector("#dataInicio").value
    const dataFimEvento = document.querySelector("#dataFim").value

    const body = {
        title: titleEvento,
        description: descricaoEvento,
        start: dataInicioEvento,
        end: dataFimEvento
    }

    const options = {
        method: 'PUT', //id;
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }

    const response = await fetch("http://localhost:3000/events", options)
    console.log(response)
}


// - fazer com que ao clicar no nome do evento que esta na agenda possa abrir o modal para edição do evento
// - criar a funcao que se titulo, descrição, datainicio ou datafim de um evento selecionado for diferente entao faz a alteração











// EXCLUIR EVENTO
botaoAlterarEvento.addEventListener("click", (e)=>{
    e.preventDefault()
    editarEvento()
})

async function excluirEvento() {
    const titleEvento = document.querySelector("#titulo").value
    const descricaoEvento = document.querySelector("#descricao").value
    const dataInicioEvento = document.querySelector("#dataInicio").value
    const dataFimEvento = document.querySelector("#dataFim").value

    const body = {
        title: titleEvento,
        description: descricaoEvento,
        start: dataInicioEvento,
        end: dataFimEvento
    }

    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }

    const response = await fetch("http://localhost:3000/events", options)
    console.log(response)
}

