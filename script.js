button = document.querySelector('.animals');

button.addEventListener('mouseup', function(){
  this.classList.add('active');
  setTimeout(function () {
    button.classList.remove('active');
}, 300);
});