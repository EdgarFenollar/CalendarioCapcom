const checkbox = document.getElementById('cookies');
const resultado = document.getElementById('resultado');

if (!checkbox.checked) {
  resultado.innerHTML = '<i class="fa-solid fa-x fa-fade" style="color: #ff0000;"></i>';
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    resultado.innerHTML = '<i class="fa-solid fa-check fa-beat-fade" style="color: #11ff00;"></i>';
  } else {
    resultado.innerHTML = '<i class="fa-solid fa-x fa-fade" style="color: #ff0000;"></i>';
  }
});

const checkbox2 = document.getElementById('privacidad');
const resultado2 = document.getElementById('resultado2');

if (!checkbox2.checked) {
  resultado2.innerHTML = '<i class="fa-solid fa-x fa-fade" style="color: #ff0000;"></i>';
}

checkbox2.addEventListener('change', function() {
  if (this.checked) {
    resultado2.innerHTML = '<i class="fa-solid fa-check fa-beat-fade" style="color: #11ff00;"></i>';
  } else {
    resultado2.innerHTML = '<i class="fa-solid fa-x fa-fade" style="color: #ff0000;"></i>';
  }
});

function toggleCheckbox(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  const resultado = document.getElementById(`resultado${checkboxId.slice(-1)}`);

  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    resultado.innerHTML = '<i class="fa-solid fa-check fa-beat-fade" style="color: #11ff00;"></i>';
  } else {
    resultado.innerHTML = '<i class="fa-solid fa-x fa-fade" style="color: #ff0000;"></i>';
  }
}