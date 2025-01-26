const emojiMap = {
    // Emotions
    'confused': '😕',
    'happy': '😊',
    'sad': '😢',
    'angry': '😠',
    'mad': '😠',
    'love': '❤️',
    'laugh': '😂',
    'lol': '😂',
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
    'okay': '👌',
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


/*
 *        SETS UP SET OF DOM ELEMENTS
*/

// An object as a dictionary, initially empty
// key: id provided by server, value: struct (or something else?) of attributes that should match the JSON format
let domElements = {};


/*
 *        ALL CALLS AND FUNCTIONS TO/FROM THE SERVER/DATABASE GO HERE
*/

// Session ID + Slide ID
/*
let SERVER_URL = 'http://18.117.98.43:3000/data'


async function sendLinkToServer(link, USER_ID) {
    fetch(SERVER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({link : link})
    })
    .then(response => response.json())
    .then(data => console.log('Response from server:', data))
    .catch(error => console.error('Error:', error));
}
*/
/*
async function sendQuestionToServer(text, x_pos, y_pos, user_creator){
    const payload = {
        text : text,
        x_pos : x_pos,
        y_pos : y_pos,
        userId : user_creator,
    };
    const response = await fetch(SERVER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "applciation/json",
        },
        body : JSON.stringify(payload),
    });
} 
    
function 


*/


/*
 *        RETRIEVES DATA REGARDING PROFESSOR VALUE
*/

let isProfessor = false; // Default value

// Get the current value from storage
chrome.storage.sync.get('booleanValue', (data) => {
    isProfessor = data.booleanValue || false;
    console.log('Initial boolean value:', isProfessor);
});

// Listen for changes to the value in storage
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync' && changes.booleanValue) {
        isProfessor = changes.booleanValue.newValue;
        console.log('Boolean value updated to:', isProfessor);
    }
});


/*
 *        ALL ELEMENT CREATION AND INPUT GOES HERE
*/

//const cursorUrl = chrome.runtime.getURL('icons/32x32.png');

let ratioX;
let ratioY;

//create an invisible commentInput object
const commentInput = document.createElement("div");
commentInput.id = "#popup"
commentInput.style.position = 'absolute';
commentInput.style.background = '#EB9C27';
commentInput.style.border = '2px dashed #ccc';
commentInput.style.borderRadius = '0.5rem';
commentInput.style.padding = '10px';
commentInput.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
commentInput.style.maxWidth = '200px';
commentInput.style.display = 'none';
const form = document.createElement("input");
form.id = "#input";
form.type = 'text';
form.placeholder = "Enter your comment";
commentInput.focus();
form.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        if (form.value == '') return; //do not submit if comment is empty
        submitComment(form.value,ratioX, ratioY);
        commentInput.style.display = 'none'; //dismiss after input
        form.value = ''; //clear value
    }
})
commentInput.appendChild(form);
document.body.appendChild(commentInput);

let slideContainer;
let slideContainer_bound;

let clickX, clickY;

function ratioToLocation(ratioX, ratioY) {
    let container = document.getElementById("canvas-container");
    let bound = container.getBoundingClientRect();

    const containerWidth = bound.right - bound.left;
    const containerHeight = bound.bottom - bound.top;

    let xInSlide = ratioX * containerWidth;
    let yInSlide = ratioY * containerHeight;

    let overallX = xInSlide + bound.left;
    let overallY = yInSlide + bound.top;
    
    return [overallX, overallY];
}

function submitComment(input, percentX, percentY){
    let position = ratioToLocation(percentX, percentY);
    // Create the comment block
    const commentBlock = document.createElement('div');
    commentBlock.dataset.upvote = 0;
    // stylized comment block
    commentBlock.className = 'comment-block';
    commentBlock.style.position = 'absolute';
    commentBlock.style.left = `${position[0]}px`;
    commentBlock.style.top = `${position[1]}px`;
    commentBlock.style.background = '#EB9C27'; // orange-golden (rgb: 235, 156, 39)
    commentBlock.style.fontSize = `${(1+parseInt(commentBlock.dataset.upvote))*10}px`;
    commentBlock.style.border = '2px dashed #ccc';
    commentBlock.style.borderRadius = '0.5rem';
    commentBlock.style.padding = '10px';
    commentBlock.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    //commentBlock.style.maxWidth = '200px';
    commentBlock.style.transition = 'font-size 0.3s ease'
    
    //scaling effect when zoom in
    // commentBlock.addEventListener('mouseenter', () => {
    //     commentBlock.style.fontSize = '50px';
    // })
    // commentBlock.addEventListener('mouseleave', () => {
    //     commentBlock.style.fontSize = `${(1+parseInt(commentBlock.dataset.upvote))*10}px`;
    // })

    commentBlock.addEventListener('mouseleave', () => {
        commentBlock.style.fontSize = `${(1+parseInt(commentBlock.dataset.upvote))*10}px`;
    })

    commentBlock.addEventListener("click", (e) => {
        if (e.shiftKey) {
            commentBlock.remove();
        }
        else {
            let newCount = parseInt(commentBlock.dataset.upvote);
            newCount += 1;
            commentBlock.dataset.upvote = newCount;
            //alert(`${commentBlock.dataset.upvote} people agree with you!`);
        }
    })
    document.body.appendChild(commentBlock);

    if (input.startsWith('/')) {
        const [keyword, ...textContent] = input.slice(1).split(' ');
        const emoji = emojiMap[keyword.toLowerCase()] || '❓';
        const text = textContent.join(' ');

        commentBlock.dataset.emoji = emoji;
        commentBlock.dataset.text = text;
        commentBlock.innerHTML = `${emoji} ${text}`;
    } else {
        commentBlock.dataset.text = input;
        commentBlock.innerHTML = `${input}`;
    }
}

// Add click event listener to the document
document.addEventListener('click', (e) => {
    /*
    if (!e.ctrlKey) {
        return;
    }
    */

    let slideContainer = document.getElementById("canvas-container");
    let slideContainer_bound = slideContainer.getBoundingClientRect();
  
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
  let cclickX = clickX - slideContainer_bound.left;
  let cclickY = clickY - slideContainer_bound.top;

  const containerWidth = slideContainer_bound.right - slideContainer_bound.left;
  const containerHeight = slideContainer_bound.bottom - slideContainer_bound.top;
  ratioX = cclickX / containerWidth;
  ratioY = cclickY / containerHeight;

  // Prompt the user for a comment
  //const input = prompt('Enter your comment (start with /emoji for an emoji):');
  if (e.target.closest('#popup')) return;
    const p = document.getElementById('#popup');
    p.style.left = `${clickX}px`;
    p.style.top = `${clickY}px`;
    p.style.display = 'block';
    const form = document.getElementById("#input");
    form.focus(); //focus on that so user can enter right away
  //submit comment logic handle separately
});


/*
 *        ALL INTERVAL-RELATED CODE GOES HERE
*/

let currUrl = window.location.href;

// THE INTERVAL FUNCTION

const INTERVAL = 1000; // 1 second (1000 milliseconds)

setInterval(function() {
    
    // Checks whether the URL has changed (which means we've moved to a new slide)
    let newCurrUrl = window.location.href;
    if (currUrl != newCurrUrl) {
        currUrl = newCurrUrl;
        
        // CALL TO A FUNCTION THAT REFRESHES EVERYTHING

    }

    console.log("isProfessor: " + isProfessor);
    
}, INTERVAL);