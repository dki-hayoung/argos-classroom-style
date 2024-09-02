// SNB
document.addEventListener('DOMContentLoaded', function () {
  const snb = document.querySelector('.snb');
  const toggleButton = document.getElementById('toggle-snb');

  toggleButton.addEventListener('click', function () {
    snb.classList.toggle('closed');
  });
});

// Card Item Active
const items = document.querySelectorAll(".card-item");
items.forEach((item)=>{
  item.addEventListener('click',()=>{
    item.classList.toggle('active');
  })
})
