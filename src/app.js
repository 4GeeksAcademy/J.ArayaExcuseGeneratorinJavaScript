window.onload = function () {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let excuses = [who, action, what, when];
  let randomIndex = '';

  for (let i = 0; i < excuses.length; i++) {
    randomIndex += excuses[i][Math.floor(Math.random() * excuses[i].length)] + ' ';
    console.log(randomIndex);
  };
  document.getElementById("excusa").textContent = randomIndex;

};