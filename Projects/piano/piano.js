//regular
const noteC = new Audio('assets/mp3 Notes/c3.mp3');
const noteD = new Audio('assets/mp3 Notes/d3.mp3');
const noteE = new Audio('assets/mp3 Notes/e3.mp3');
const noteF = new Audio('assets/mp3 Notes/f3.mp3');
const noteG = new Audio('assets/mp3 Notes/g3.mp3');
const noteA = new Audio('assets/mp3 Notes/a4.mp3');
const noteH = new Audio('assets/mp3 Notes/h4.mp3');

//sharp
const noteCs = new Audio('assets/mp3 Notes/c-3.mp3');
const noteDs = new Audio('assets/mp3 Notes/d-3.mp3');
const noteFs = new Audio('assets/mp3 Notes/f-3.mp3');
const noteGs = new Audio('assets/mp3 Notes/g-3.mp3');
const noteAs = new Audio('assets/mp3 Notes/a-4.mp3');


//plays sound based on pressed key and adds class which colors the key
document.addEventListener('keydown', function(event) {
    let pressedKey = event.key.toLowerCase();

    //regular
    if (pressedKey === 'a') {
        document.getElementsByName('c-note')[0].classList.add('piano-button-pressed');
        let cloneC = noteC.cloneNode();
        cloneC.play();
    }
    else if (pressedKey === 's') {
        document.getElementsByName('d-note')[0].classList.add('piano-button-pressed');
        let cloneD = noteD.cloneNode();
        cloneD.play();
    }
    else if (pressedKey === 'd') {
        document.getElementsByName('e-note')[0].classList.add('piano-button-pressed');
        let cloneE = noteE.cloneNode();
        cloneE.play();
    }
    else if (pressedKey === 'f') {
        document.getElementsByName('f-note')[0].classList.add('piano-button-pressed');
        let cloneF = noteF.cloneNode();
        cloneF.play();
    }
    else if (pressedKey === 'g') {
        document.getElementsByName('g-note')[0].classList.add('piano-button-pressed');
        let cloneG = noteG.cloneNode();
        cloneG.play();
    }
    else if (pressedKey === 'h') {
        document.getElementsByName('a-note')[0].classList.add('piano-button-pressed');
        let cloneA = noteA.cloneNode();
        cloneA.play();
    }
    else if (pressedKey === 'j') {
        document.getElementsByName('h-note')[0].classList.add('piano-button-pressed');
        let cloneH = noteH.cloneNode();
        cloneH.play();
    }

    //sharps
    else if (pressedKey === 'w') {
        document.getElementsByName('c-sharp')[0].classList.add('piano-button-pressed');
        let cloneCs = noteCs.cloneNode();
        cloneCs.play();
    }
    else if (pressedKey === 'e') {
        document.getElementsByName('d-sharp')[0].classList.add('piano-button-pressed');
        let cloneDs = noteDs.cloneNode();
        cloneDs.play();
    }
    else if (pressedKey === 't') {
        document.getElementsByName('f-sharp')[0].classList.add('piano-button-pressed');
        let cloneFs = noteFs.cloneNode();
        cloneFs.play();
    }
    else if (pressedKey === 'z' || pressedKey === 'y') /* different keyboards */ {
        document.getElementsByName('g-sharp')[0].classList.add('piano-button-pressed');
        let cloneGs = noteGs.cloneNode();
        cloneGs.play();
    }
    else if (pressedKey === 'u') {
        document.getElementsByName('a-sharp')[0].classList.add('piano-button-pressed');
        let cloneAs = noteAs.cloneNode();
        cloneAs.play();
    }
});

//removes pressed class for different key coloring
document.addEventListener('keyup', function(event) {
    let pressedKey = event.key.toLowerCase();

    //regular
    if (pressedKey === 'a')
        console.log(document.getElementsByName('c-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 's') 
        console.log(document.getElementsByName('d-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'd') 
        console.log(document.getElementsByName('e-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'f') 
        console.log(document.getElementsByName('f-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'g') 
        console.log(document.getElementsByName('g-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'h') 
        console.log(document.getElementsByName('a-note')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'j') 
        console.log(document.getElementsByName('h-note')[0].classList.remove('piano-button-pressed'));

    //sharp
    else if (pressedKey === 'w') 
        console.log(document.getElementsByName('c-sharp')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'e') 
        console.log(document.getElementsByName('d-sharp')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 't')
        console.log(document.getElementsByName('f-sharp')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'z' || pressedKey === 'y') 
        console.log(document.getElementsByName('g-sharp')[0].classList.remove('piano-button-pressed'));
    else if (pressedKey === 'u') 
        console.log(document.getElementsByName('a-sharp')[0].classList.remove('piano-button-pressed'));

});