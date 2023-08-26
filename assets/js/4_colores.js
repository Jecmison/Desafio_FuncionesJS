const elements = document.querySelectorAll('.part');


const pincel = (e) => {
  const color = 'black';
  e.target.style.background = color;
}


elements.forEach(element => {
  element.addEventListener('click', pincel);
});


const room = document.getElementById('key');
const list = document.getElementById('container');

const colors = 
{
'a': 'pink', 's': 'orange', 'd': 'skyblue', 'q': 'purple', 'w': 'gray', 'e': 'maroon'
};


const boxColor = (userKey) => colors[userKey] || null;

const roomBackColor = (color) => {
  room.style.backgroundColor = color || '';
};

const agregado = (color) => {
  if (color) {
    const newB = document.createElement('div');
    newB.style.cssText = `width: 200px; height: 200px; background: ${color}; border: 2px solid black;`;
    list.appendChild(newB);
  }
};

document.addEventListener("keydown", (e) => {
  const teclaOn = e.key;
  const color = boxColor(teclaOn);

  if (color) {
    if (['a', 's', 'd'].includes(teclaOn)) {
        roomBackColor(color);
    } else {
      agregado(color);
    }
  } else {
    alert('Tecla no válida!');
  }
});