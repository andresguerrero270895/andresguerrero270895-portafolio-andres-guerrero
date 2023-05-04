// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clicked')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});

window.addEventListener('scroll', () => {
  if(document.querySelector('.aside').classList.contains('active')) {
      document.querySelector('.aside').classList.remove('active')
  }
})