var catastrophisingBtn = Ladda.create(document.querySelector('#catastrophising-btn'));
var secondGuessingBtn = Ladda.create(document.querySelector('#second-guessing-btn'));

document.getElementById('catastrophising-btn').addEventListener('click', (e) => {
  catastrophisingBtn.start();
  setTimeout(() => { catastrophisingBtn.stop() }, 1000);
});

document.getElementById('second-guessing-btn').addEventListener('click', (e) => {
  secondGuessingBtn.start();
  setTimeout(() => { secondGuessingBtn.stop() }, 1000);
});
