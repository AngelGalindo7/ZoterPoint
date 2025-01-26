const slideContainer = document.getElementById("canvas-container");
const slideContainer_bound = slideContainer.getBoundingClientRect();

// Define the emoji map
const emojiMap = {
  'confuse': '😕',
  'happy': '😊',
  'sad': '😢',
  'angry': '😠',
  'love': '❤️',
  'laugh': '😂'
};

let clickX, clickY;

// Add click event listener to the document
document.addEventListener('click', (e) => {
  //do Bound check
  const isInBounds =
    e.clientX >= slideContainer_bound.left &&
    e.clientX <= slideContainer_bound.right &&
    e.clientY >= slideContainer_bound.top &&
    e.clientY <= slideContainer_bound.bottom;

  if (!isInBounds) {
    alert("You can only make comment on slide!")
    return;
  }

  // Prevent creating a comment if clicking on an existing comment block
  if (e.target.closest('.comment-block')) return;

  // Store the click coordinates
  clickX = e.clientX;
  clickY = e.clientY;

  // Prompt the user for a comment
  const input = prompt('Enter your comment (start with /emoji for an emoji):');

  if (input) {
      if (input.startsWith('/')) {
          const [keyword, ...textContent] = input.slice(1).split(' ');
          const emoji = emojiMap[keyword.toLowerCase()] || '❓';
          const text = textContent.join(' ');

          // Create the comment block
          const commentBlock = document.createElement('div');
          commentBlock.className = 'comment-block';
          commentBlock.style.position = 'absolute';
          commentBlock.style.left = `${clickX}px`;
          commentBlock.style.top = `${clickY}px`;
          commentBlock.style.background = 'white';
          commentBlock.style.border = '1px solid #ccc';
          commentBlock.style.padding = '10px';
          commentBlock.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          commentBlock.style.maxWidth = '200px';
          commentBlock.style.wordWrap = 'break-word';
          commentBlock.dataset.emoji = emoji;
          commentBlock.dataset.text = text;
          commentBlock.innerHTML = `${emoji} ${text}`;

          // Append the comment block to the body
          document.body.appendChild(commentBlock);
      } else {
          // Create a comment block without an emoji
          const commentBlock = document.createElement('div');
          commentBlock.className = 'comment-block';
          commentBlock.style.position = 'absolute';
          commentBlock.style.left = `${clickX}px`;
          commentBlock.style.top = `${clickY}px`;
          commentBlock.style.background = 'white';
          commentBlock.style.border = '1px solid #ccc';
          commentBlock.style.padding = '10px';
          commentBlock.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          commentBlock.style.maxWidth = '200px';
          commentBlock.style.wordWrap = 'break-word';
          commentBlock.textContent = input;

          // Append the comment block to the body
          document.body.appendChild(commentBlock);
      }
  }
});



/*
// Get the element with the ID 'canvas-container'
const canvasContainer = document.getElementById('canvas-container');

// Check if the element exists
if (canvasContainer) {
    // Add a 'mouseenter' event listener to the element
    canvasContainer.addEventListener('mouseenter', () => {
        console.log('Cursor entered the canvas-container element.');
    });

    // Add a 'mouseleave' event listener to the element
    canvasContainer.addEventListener('mouseleave', () => {
        console.log('Cursor left the canvas-container element.');
    });
} else {
    console.error('Element with ID "canvas-container" not found.');
}
    */

/*
// Select the element to monitor
const myDiv = document.querySelector('canvas-container'); // Replace with your target element

// Add an event listener to track the mouse position
document.addEventListener('mousemove', (event) => {
    // Get the bounding rectangle of the element
    const rect = myDiv.getBoundingClientRect();

    // Get the cursor's position (relative to the viewport)
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Check if the cursor is within the rectangle
    const isWithinBounds =
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom;

    if (isWithinBounds) {
        console.log('Cursor is inside the element.');
    } else {
        console.log('Cursor is outside the element.');
    }
});
*/