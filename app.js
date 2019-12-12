// let list = document.getElementsByTagName('li');
// let [...li] = list;
// li.forEach(x => {
//     console.log(x);
//     x.classList.add('anu');
//     x.innerHTML = 'hey anu wht.....'
// });
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// odd.forEach(x =>{
//     x.classList.add('odd');
//     x.innerHTML = 'odd here';
// });
// even.forEach(y =>{
//     y.classList.add('even');
//     y.innerHTML = 'even here';
// })
// var 
var oddButton = document.getElementById('odd');
var evenButton = document.getElementById('even');
//li's and even and odd
var oddli = document.querySelectorAll('li:nth-child(odd)');

 var evenli = document.querySelectorAll('li:nth-child(even)');
// access dom with  events
oddButton.addEventListener('mouseenter', () => {
    console.log('mouse enterd...odd');
    oddli.forEach(x => {
        x.classList.add('odd');
    });
    evenli.forEach(x => {
        x.classList.remove('even');
    });
});

evenButton.addEventListener('mouseenter', () => {
    console.log('mouse enterd...even');
    oddli.forEach( x=> {
        x.classList.add('even');
    });
    evenli.forEach(x => {
        x.classList.remove('odd');
    });

});