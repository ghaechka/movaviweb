localStorage.setItem('09.03.2021', 'asdfghjkl');

console.log(localStorage.getItem('09.03.2021'));
text = localStorage.getItem('09.03.2021')
document.querySelector('h1').innerText = text;

// localStorage.removeItem('09.03.2021');
// console.log(localStorage.getItem('09.03.2021'));

localStorage['09.03.2021'] = 'Tuesday';
console.log(localStorage.getItem('09.03.2021'));

// Create Read Update Delete 