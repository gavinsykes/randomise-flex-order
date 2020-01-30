const randomiseFlexOrder = querySelector => {
  Array.from(querySelector).map((c,i,a) => c.style.order = Math.floor(Math.random() * a.length + 1));
};
document.addEventListener('DOMContentLoaded',randomiseFlexOrder(document.querySelectorAll('.item')));
Array.from(document.querySelectorAll('.randomise-button')).map(i => i.addEventListener('click',() => randomiseFlexOrder(document.querySelectorAll('.item'))));
