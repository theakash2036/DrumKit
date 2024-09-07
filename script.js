// Create an array of drum sounds
const drumSounds = [
    { key: 65, sound: 'crash' },
    { key: 83, sound: 'kick' },
    { key: 68, sound: 'snare' },
    { key: 70, sound: 'tom' },
    { key: 71, sound: 'crash' },
    { key: 72, sound: 'kick' },
    { key: 74, sound: 'snare' },
    { key: 75, sound: 'tom' },
    { key: 76, sound: 'crash' }
];

// Get all drum pads
const drumPads = document.querySelectorAll('.drum-pad');

// Add event listener to each drum pad
drumPads.forEach(drumPad => {
    drumPad.addEventListener('click', () => {
        // Get the key of the drum pad
        const key = drumPad.getAttribute('data-key');

        // Find the corresponding drum sound
        const drumSound = drumSounds.find(sound => sound.key === parseInt(key));

        // Play the drum sound
        if (drumSound) {
            const audio = document.getElementById(drumSound.sound);
            audio.play();
        }
    });
});