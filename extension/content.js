const emojiMap = {
    // Emotions
    'confuse': '😕',
    'happy': '😊',
    'sad': '😢',
    'angry': '😠',
    'love': '❤️',
    'laugh': '😂',
    'cool': '😎',
    'cry': '😭',
    'surprise': '😮',
    'wink': '😉',
    'kiss': '😘',
    'blush': '😊',
    'scream': '😱',
    'sleepy': '😴',
    'nerd': '🤓',
    'thinking': '🤔',
    'shush': '🤫',
    'eyeroll': '🙄',
    'facepalm': '🤦',
    'shrug': '🤷',
  
    // Animals
    'dog': '🐶',
    'cat': '🐱',
    'panda': '🐼',
    'tiger': '🐯',
    'lion': '🦁',
    'fox': '🦊',
    'bear': '🐻',
    'rabbit': '🐰',
    'pig': '🐷',
    'cow': '🐮',
    'monkey': '🐵',
    'chicken': '🐔',
    'penguin': '🐧',
    'owl': '🦉',
    'frog': '🐸',
    'fish': '🐟',
    'whale': '🐋',
    'dolphin': '🐬',
    'turtle': '🐢',
    'snake': '🐍',
    'dragon': '🐉',
  
    // Objects
    'book': '📖',
    'pencil': '✏️',
    'computer': '💻',
    'phone': '📱',
    'camera': '📷',
    'clock': '⏰',
    'lightbulb': '💡',
    'money': '💰',
    'gem': '💎',
    'gift': '🎁',
    'balloon': '🎈',
    'fire': '🔥',
    'star': '⭐',
    'moon': '🌙',
    'sun': '☀️',
    'cloud': '☁️',
    'rainbow': '🌈',
    'flower': '🌸',
    'tree': '🌳',
    'car': '🚗',
    'plane': '✈️',
    'rocket': '🚀',
    'bike': '🚲',
  
    // Symbols
    'check': '✅',
    'cross': '❌',
    'heart': '❤️',
    'broken-heart': '💔',
    'thumbs-up': '👍',
    'thumbs-down': '👎',
    'ok': '👌',
    'clap': '👏',
    'pray': '🙏',
    'wave': '👋',
    'muscle': '💪',
    'brain': '🧠',
    'bone': '🦴',
    'microscope': '🔬',
    'telescope': '🔭',
    'lock': '🔒',
    'key': '🔑',
    'bell': '🔔',
    'alarm': '⏰',
    'magnifying-glass': '🔍',
    'gear': '⚙️',
    'link': '🔗',
    'warning': '⚠️',
    'radioactive': '☢️',
    'biohazard': '☣️',
    'peace': '☮️',
    'yin-yang': '☯️',
  
    // Food
    'pizza': '🍕',
    'burger': '🍔',
    'fries': '🍟',
    'sushi': '🍣',
    'ramen': '🍜',
    'ice-cream': '🍦',
    'cake': '🍰',
    'cookie': '🍪',
    'coffee': '☕',
    'tea': '🍵',
    'beer': '🍺',
    'wine': '🍷',
    'cocktail': '🍸',
    'water': '💧',
    'milk': '🥛',
    'bread': '🍞',
    'cheese': '🧀',
    'egg': '🥚',
    'bacon': '🥓',
    'salad': '🥗',
    'avocado': '🥑',
    'strawberry': '🍓',
    'banana': '🍌',
    'apple': '🍎',
    'grapes': '🍇',
    'melon': '🍈',
    'watermelon': '🍉',
    'pineapple': '🍍',
    'peach': '🍑',
    'cherry': '🍒',
    'lemon': '🍋',
    'tomato': '🍅',
    'carrot': '🥕',
    'potato': '🥔',
    'corn': '🌽',
    'pepper': '🌶️',
    'mushroom': '🍄',
    'peanuts': '🥜',
    'honey': '🍯',
  
    // Activities
    'soccer': '⚽',
    'basketball': '🏀',
    'tennis': '🎾',
    'baseball': '⚾',
    'golf': '⛳',
    'swim': '🏊',
    'run': '🏃',
    'yoga': '🧘',
    'dance': '💃',
    'music': '🎵',
    'guitar': '🎸',
    'piano': '🎹',
    'movie': '🎬',
    'game': '🎮',
    'chess': '♟️',
    'cards': '🃏',
    'art': '🎨',
    'photo': '📸',
    'camping': '🏕️',
    'hiking': '🥾',
    'travel': '🧳',
    'beach': '🏖️',
    'mountain': '⛰️',
    'snow': '❄️',
    'rain': '🌧️',
    'storm': '⛈️',
    'sunrise': '🌅',
    'sunset': '🌇',
    'night': '🌃',
    'city': '🏙️',
    'village': '🏘️',
    'farm': '🚜',
    'factory': '🏭',
    'office': '🏢',
    'hospital': '🏥',
    'school': '🏫',
    'church': '⛪',
    'mosque': '🕌',
    'temple': '🛕',
    'synagogue': '🕍',
    'statue': '🗽',
    'fountain': '⛲',
    'bridge': '🌉',
    'tower': '🗼',
    'castle': '🏰',
    'stadium': '🏟️',
    'airport': '✈️',
    'train': '🚆',
    'subway': '🚇',
    'bus': '🚌',
    'taxi': '🚕',
    'ambulance': '🚑',
    'fire-truck': '🚒',
    'police-car': '🚓',
    'bicycle': '🚲',
    'scooter': '🛴',
    'motorcycle': '🏍️',
    'truck': '🚚',
    'ship': '🚢',
    'anchor': '⚓',
    'rocket': '🚀',
    'satellite': '🛰️',
    'ufo': '🛸',
    'parachute': '🪂',
    'luggage': '🧳',
    'passport': '🛂',
    'customs': '🛃',
    'baggage-claim': '🛄',
    'left-luggage': '🛅',
    'wheelchair': '♿',
    'men': '🚹',
    'women': '🚺',
    'restroom': '🚻',
    'baby': '🚼',
    'water-closet': '🚾',
    'warning': '⚠️',
    'construction': '🚧',
    'traffic-light': '🚥',
    'stop-sign': '🛑',
    'do-not-enter': '⛔',
    'no-smoking': '🚭',
    'no-pedestrians': '🚷',
    'no-mobile-phones': '📵',
    'no-one-under-eighteen': '🔞',
    'radioactive': '☢️',
    'biohazard': '☣️',
    'up-arrow': '⬆️',
    'down-arrow': '⬇️',
    'left-arrow': '⬅️',
    'right-arrow': '➡️',
    'up-down-arrow': '↕️',
    'left-right-arrow': '↔️',
    'right-arrow-curving-up': '⤴️',
    'right-arrow-curving-down': '⤵️',
    'clockwise-arrows': '🔃',
    'counterclockwise-arrows': '🔄',
    'back-arrow': '🔙',
    'end-arrow': '🔚',
    'on-arrow': '🔛',
    'soon-arrow': '🔜',
    'top-arrow': '🔝',
    'place-of-worship': '🛐',
    'atom-symbol': '⚛️',
    'om': '🕉️',
    'star-of-david': '✡️',
    'wheel-of-dharma': '☸️',
    'yin-yang': '☯️',
    'latin-cross': '✝️',
    'orthodox-cross': '☦️',
    'star-and-crescent': '☪️',
    'peace-symbol': '☮️',
    'menorah': '🕎',
    'dotted-six-pointed-star': '🔯',
    'aries': '♈',
    'taurus': '♉',
    'gemini': '♊',
    'cancer': '♋',
    'leo': '♌',
    'virgo': '♍',
    'libra': '♎',
    'scorpio': '♏',
    'sagittarius': '♐',
    'capricorn': '♑',
    'aquarius': '♒',
    'pisces': '♓',
    'ophiuchus': '⛎',
    'shuffle-tracks-button': '🔀',
    'repeat-button': '🔁',
    'repeat-single-button': '🔂',
    'play-button': '▶️',
    'fast-forward-button': '⏩',
    'reverse-button': '◀️',
    'fast-reverse-button': '⏪',
    'upwards-button': '🔼',
    'fast-upwards-button': '⏫',
    'downwards-button': '🔽',
    'fast-downwards-button': '⏬',
    'pause-button': '⏸️',
    'stop-button': '⏹️',
    'record-button': '⏺️',
    'eject-button': '⏏️',
    'cinema': '🎦',
    'dim-button': '🔅',
    'bright-button': '🔆',
    'antenna-bars': '📶',
    'vibration-mode': '📳',
    'mobile-phone-off': '📴',
    'female-sign': '♀️',
    'male-sign': '♂️',
    'medical-symbol': '⚕️',
    'infinity': '♾️',
    'recycling-symbol': '♻️',
    'fleur-de-lis': '⚜️',
    'trident-emblem': '🔱',
    'name-badge': '📛',
    'japanese-symbol-for-beginner': '🔰',
    'hollow-red-circle': '⭕',
    'check-mark-button': '✅',
    'cross-mark-button': '❌',
    'cross-mark': '❎',
    'curly-loop': '➰',
    'double-curly-loop': '➿',
    'part-alternation-mark': '〽️',
    'eight-spoked-asterisk': '✳️',
    'eight-pointed-star': '✴️',
    'sparkle': '❇️',
    'copyright': '©️',
    'registered': '®️',
    'trade-mark': '™️',
    'keycap-number-sign': '#️⃣',
    'keycap-asterisk': '*️⃣',
    'keycap-0': '0️⃣',
    'keycap-1': '1️⃣',
    'keycap-2': '2️⃣',
    'keycap-3': '3️⃣',
    'keycap-4': '4️⃣',
    'keycap-5': '5️⃣',
    'keycap-6': '6️⃣',
    'keycap-7': '7️⃣',
    'keycap-8': '8️⃣',
    'keycap-9': '9️⃣',
    'keycap-10': '🔟',
    'input-latin-uppercase': '🔠',
    'input-latin-lowercase': '🔡',
    'input-numbers': '🔢',
    'input-symbols': '🔣',
    'input-latin-letters': '🔤',
    'a-button': '🅰️',
    'ab-button': '🆎',
    'b-button': '🅱️',
    'cl-button': '🆑',
    'cool-button': '🆒',
    'free-button': '🆓',
    'information': 'ℹ️',
    'id-button': '🆔',
    'circled-m': 'Ⓜ️',
    'new-button': '🆕',
    'ng-button': '🆖',
    'o-button': '🅾️',
    'ok-button': '🆗',
    'p-button': '🅿️',
    'sos-button': '🆘',
    'up-button': '🆙',
    'vs-button': '🆚',
    'japanese-here-button': '🈁',
    'japanese-service-charge-button': '🈂️',
    'japanese-monthly-amount-button': '🈷️',
    'japanese-not-free-of-charge-button': '🈶',
    'japanese-reserved-button': '🈯',
    'japanese-bargain-button': '🉐',
    'japanese-discount-button': '🈹',
    'japanese-free-of-charge-button': '🈚',
    'japanese-prohibited-button': '🈲',
    'japanese-acceptable-button': '🉑',
    'japanese-application-button': '🈸',
    'japanese-passing-grade-button': '🈴',
    'japanese-vacancy-button': '🈳',
    'japanese-congratulations-button': '㊗️',
    'japanese-secret-button': '㊙️',
    'japanese-open-for-business-button': '🈺',
    'japanese-no-vacancy-button': '🈵',
    'black-small-square': '▪️',
    'white-small-square': '▫️',
    'white-medium-square': '◻️',
    'black-medium-square': '◼️',
    'white-medium-small-square': '◽',
    'black-medium-small-square': '◾',
    'black-large-square': '⬛',
    'white-large-square': '⬜',
    'large-orange-diamond': '🔶',
    'large-blue-diamond': '🔷',
    'small-orange-diamond': '🔸',
    'small-blue-diamond': '🔹',
    'red-triangle-pointed-up': '🔺',
    'red-triangle-pointed-down': '🔻',
    'diamond-with-a-dot': '💠',
    'radio-button': '🔘',
    'white-square-button': '🔳',
    'black-square-button': '🔲'
};

const slideContainer = document.getElementById("canvas-container");
const slideContainer_bound = slideContainer.getBoundingClientRect();

// Define the emoji map

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
    // alert("You can only make comment on slide!")
    return;
  }

  // Prevent creating a comment if clicking on an existing comment block
  if (e.target.closest('.comment-block')) return;

  // Store the click coordinates
  clickX = e.clientX;
  clickY = e.clientY;

  // Clamps the mouse pos relative to canvas-container
  clickX -= slideContainer_bound.left;
  clickY -= slideContainer_bound.right;

  const containerWidth = slideContainer_bound.right - slideCounter_bound.left;
  const containerHeight = slideContainer_bound.bottom - slideCounter_bound.top;
  let ratioX = clickX / containerWidth;
  let ratioY = clickY / containerHeight;

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