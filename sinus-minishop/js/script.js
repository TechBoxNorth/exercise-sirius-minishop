// 1.
const potato = document.querySelector('.art-1 h3');
potato.innerText = 'Potato';

// 2. 3.
let start = document.querySelector('nav');
start.children[0].innerText = 'Start';
start.children[2].innerText = 'Mail Us'
start = document.querySelector('footer section article');
start.children[1].innerText = 'Start';
start.children[3].innerText = 'Mail Us';

// 4.
const fireInfo = document.querySelector('.art-2 p');
fireInfo.innerText = 'Int the cold of winter the firey red color of this hoodie will keep you warm!';

// 5.
const waterBtn = document.querySelector('.art-3 button');
waterBtn.style.backgroundColor = '#af302a';
waterBtn.innerText = 'purchase'