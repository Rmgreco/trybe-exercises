function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diaDoMes() {
  let lista = document.querySelector('#days');

  for (let contador = 0; contador < dezDaysList.length; contador += 1) {
    let day = dezDaysList[contador];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      lista.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday-day';
      dayItem.innerHTML = day;
      lista.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday-day';
      dayItem.innerHTML = day;
      lista.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      lista.appendChild(dayItem);
    }
  };
};
diaDoMes();

function criarBotao(buttonName) {
    let botao = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');
    
    novoBotao.innerHTML = buttonName;
    novoBotao.id = 'btn-holiday';
    botao.appendChild(novoBotao);
  };
  
  criarBotao('Feriados');
  function mudarCor() {
    let botao = document.querySelector('#btn-holiday');
    let feriados = document.querySelectorAll('.holiday')   
  
    botao.addEventListener('click', function() {
      for (let index = 0; index < feriados.length; index += 1) {
        if (feriados[index].style.backgroundColor === 'yellow') {
          feriados[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
          feriados[index].style.backgroundColor = 'yellow';
        }
      }
    })
  };
  
  mudarCor();