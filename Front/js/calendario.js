const visualizacaoAgenda = document.querySelector("#visualizacaoAgenda")


document.addEventListener('DOMContentLoaded', ()=>{  
  renderAgenda("mes")
});

async function renderAgenda(tipoEvento){
  const initialView = definirTipoEvento(tipoEvento)
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: initialView,
    events: await mostrarEventos(),
    locale: 'pt-br',
    selectable: true,
    editable: true,
    dateClick: function(events) {
      console.log(events.dateStr);
    }
  });
calendar.render();

localeSelectorEl.addEventListener('change', function() {
  if (this.value) {
    calendar.setOption('locale', this.value);
  }
});
}

function definirTipoEvento(tipoEvento){
  let visualizacaoInicial
  switch(tipoEvento){
    case "semana":
    visualizacaoInicial = "timeGridWeek" 
    break
    case "dia":
      visualizacaoInicial = "timeGridDay"
      break
    case "mes":
      visualizacaoInicial = "dayGridMonth"
      break
  }
  return visualizacaoInicial
}

visualizacaoAgenda.addEventListener("change", (e)=>{
      const tipoVisualizacao = e.target.value
      renderAgenda(tipoVisualizacao)
})

async function mostrarEventos(){
      const response = await fetch("http://localhost:3000/events")
      const eventos = await response.json()
      return eventos
}

