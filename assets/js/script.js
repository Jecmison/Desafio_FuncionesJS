// Requerimiento 3

let elem = document.getElementById('ele1');
elem.style.backgroundColor = 'green'

let pintar = ({ target }, color) => {
  target.style.backgroundColor = color;
}

elem.addEventListener("click", (e) => {
  pintar(e, 'yellow')
});