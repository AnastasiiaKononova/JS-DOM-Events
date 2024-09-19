
const link = document.getElementById('createBtnLink');
const buttonContainer = document.getElementById('btnContainer');


link.addEventListener('click', function() {
  const newBtn = document.createElement('button');
  newBtn.textContent = 'Нова кнопка';
  buttonContainer.append(newBtn);
});
