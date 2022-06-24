document.addEventListener('DOMContentLoaded', function() {
    var traducao = 'pt-br';
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'title'
      },
      locale: traducao,
      buttonIcons: false, // show the prev/next text
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
    });
  
    calendar.render();
  
      
    // when the selected option changes, dynamically change the calendar option
    localeSelectorEl.addEventListener('change', function() {
      if (this.value) {
        calendar.setOption('locale', this.value);
      }
    });
  
  });