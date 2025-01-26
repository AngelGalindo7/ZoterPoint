const rive_script = document.createElement("script");
rive_script.src = 'https://unpkg.com/rive-js';
const rive = new rive.Rive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    canvas: document.getElementById('canvas'),
    autoplay: true,
});


// Get the toggle element
const toggle = document.getElementById('toggle');

// Retrieve the saved value from storage when the popup opens
chrome.storage.sync.get('booleanValue', (data) => {
    toggle.checked = data.booleanValue || false; // Default to false if not set
});

// Listen for changes to the toggle
toggle.addEventListener('change', () => {
    const value = toggle.checked;
    // Save the new value in Chrome's storage
    chrome.storage.sync.set({ booleanValue: value });
});
