


const container = document.querySelector('#container');

const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
    container.appendChild(content);

const p = document.createElement('p');  
    p.textContent = "Hey Im red!"
    p.style.color = 'red'
    container.appendChild(p);

const head3 = document.createElement('h3')
    head3.textContent= "I'm a blue h3!"
    head3.style.color = 'blue'
    container.appendChild(head3)

const div = document.createElement('div')
    div.style.background = 'pink'
    div.style.border = 'black'

const head1 = document.createElement('h1')
    head1.textContent= "I'm in a div"
    div.appendChild(head1)

const p2 = document.createElement('p')
    p2.textContent = "ME TOO!"
    div.appendChild(p2)
    container.appendChild(div)
    
const btn = document.querySelector('#btn');
    btn.onclick = () => alert("Hello World");

// the JavaScript file
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  
  // METHOD 2
  btn.onclick = alertFunction;
  
  // METHOD 3
  btn.addEventListener('click', alertFunction);

  btn.addEventListener('click', function (e) {
    console.log(e);
  });
  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});