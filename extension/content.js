/*
const cursorDisplay = document.createElement('div');
cursorDisplay.style.position = 'absolute';
cursorDisplay.style.top = '10px';
cursorDisplay.style.left = '10px';
cursorDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
cursorDisplay.style.color = 'white';
cursorDisplay.style.padding = '5px';
cursorDisplay.style.zIndex = '1000';
cursorDisplay.style.cursor = 'pointer'; // Optional: Changes the cursor to a pointer when hovering over the div
document.body.appendChild(cursorDisplay);

document.addEventListener('mousemove', function(event) {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  cursorDisplay.textContent = `X: ${cursorX}, Y: ${cursorY}`;
});

cursorDisplay.addEventListener('click', function() {
  alert('The div was clicked!');
});
*/

document.addEventListener("mousedown", (event) => {
  if (event.altKey && event.button == 0) {
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    alert("Mouse pos: " + cursorX + ", " + cursorY);
  }
});