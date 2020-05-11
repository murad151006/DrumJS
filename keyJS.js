/*
This script is for playing Drumkit
.............................................
1. Make 2 functions to play the audios , to add transitions, and to remove transitions

2. Call the function playAudio at the eventlistener 'keydown'
3. Call the function removeTransition when transion is end
*/


// All the functions

 function playAudio(e){
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // it returns audio elements which contain the keyCode of what we presseing

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // it returns class named key which contain the keyCode of what we presseing
    
    // Play the Audios
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    // After transition if there are no property named transform return nothing else remove that class contain transform property
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');

}


//Event listeners 

const keys = document.querySelectorAll(".key"); // return all the classes named key
// set eventlistener for each key 
keys.forEach(i => i.addEventListener('transitionend', removeTransition));

// Keydown listener 
window.addEventListener('keydown', playAudio)