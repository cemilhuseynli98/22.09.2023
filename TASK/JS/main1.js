const runmove = document.querySelector('.run');

runmove.addEventListener('mouseover', () => {
  runmove.style.transform = 'scale(1.8)'
});

runmove.addEventListener('mouseout', () => {
  runmove.style.transform = 'scale(1)'
});
