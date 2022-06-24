const botaoSalvarEvento = document.querySelector("#botaoSalvarEvento")

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

botaoSalvarEvento.addEventListener("click", (e)=>{
        e.preventDefault()
        cadastraEvento()
        window.location.reload()
        this.close;

})

async function cadastraEvento() {
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
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }

    const response = await fetch("http://localhost:3000/events", options)
    console.log(response)
    
}

