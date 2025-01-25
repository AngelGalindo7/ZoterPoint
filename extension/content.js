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

function writeData(dataString) {
  chrome.storage.local.set({mouseInfo: dataString}, function() {
      alert("Data is stored: " + dataString);
  });
}

function retrieveData(event) {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const currUrl = window.location.href;
  const dataString = String(cursorX) + " " + String(cursorY) + " " + currUrl;
  writeData(dataString);
}

document.addEventListener("mousedown", (event) => {
  if (event.ctrlKey && event.button == 0) {
    retrieveData(event);
  }
});

function exitPresentation() {
  const exitButton = document.querySelector('[data-tooltip="Slideshow"]');
  if (exitButton){
    exitButton.click();
  }
  else {
    alert('exit button not located');
  }
}

function displayData() {
  chrome.storage.local.get(['mouseInfo'], function(result) {
    // alert(result.mouseInfo);
    console.log(result.mouseInfo);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'q'){
    displayData();
  }
});