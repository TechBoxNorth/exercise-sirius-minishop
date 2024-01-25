// 1.
const potato = document.querySelector('.art-1 h3');
potato.innerText = 'Potato';

// 2. 3. 10.
let start = document.querySelector('nav');
start.children[0].innerText = 'Start';
start.children[0].classList.add('active');
start.children[2].innerText = 'Mail Us'
start = document.querySelector('footer section article');
start.children[1].innerText = 'Start';
start.children[1].classList.add('active');
start.children[3].innerText = 'Mail Us';

// 4.
const fireInfo = document.querySelector('.art-2 p');
fireInfo.innerText = 'In the cold of winter the firey red color of this hoodie will keep you warm!';

// 5.
const waterBtn = document.querySelector('.art-3 button');
waterBtn.style.backgroundColor = '#af302a';
waterBtn.innerText = 'purchase'

// 6.
const artBg = document.querySelector('.art-1 figure');
artBg.style.backgroundColor = 'hotpink';

// 7.
let adress = document.querySelector('footer section').children[1];
adress.innerHTML = '<h3>Find us here</h3><p>Sinus skateboards <br>Railsgatan 33 <br>133 37, Rampviken<p>';

// 8.
const allPs = document.querySelectorAll('p');
allPs.forEach(p => {
    p.style.color = 'darkorange';
});

// 9.
const allBtns = document.querySelectorAll('button');
allBtns.forEach(btn => {
    btn.innerText = 'add to cart';
});

// 11.
const logo = document.querySelector('header img');
logo.classList.remove('logo');

// 12.
const menu = document.querySelector('footer section').firstElementChild;
menu.insertAdjacentHTML('beforeend', '<a href="#">Jobs</a>');

// 13.
const main = document.querySelector('main');
main.insertAdjacentHTML('beforeend', '<article class="art-1"><figure><img src="img/hoodie-forrest.png"alt="hoodie"></figure><h2>Sinus Hoodie</h2><h3>Forrest</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p><button>buy</button></article>')

// 14.
logo.addEventListener('click', () => {
    console.log('found you!');
});

// 15.
const articles = document.querySelectorAll('article');
articles.forEach(article => {
    article.addEventListener('click', () => {
        console.log(`Hi, I'm article ${article.querySelector('h3').innerText}!`);
    });
});