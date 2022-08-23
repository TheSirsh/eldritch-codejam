import ancients from '../assets/Ancients/index.js'
import buttons from '../script/buttons.js'

const ancientsBox = document.querySelector('.ancientsBox')
const settingAncient = document.querySelector('.settingAncient');
let TheAncient = ''
let TheDifficulty = ''

let ancientsArr = []
let text = []

for (let i=0; i<ancients.length; i++) {
    let ancientCell = document.createElement('div')
    ancientCell.classList.add('ancientCell');
    ancientsArr[i] = document.createElement('div');
    ancientsArr[i].classList.add('ancientCard');
    ancientsArr[i].classList.add('inactive');
    ancientsArr[i].style.backgroundImage = 'url(' + ancients[i].imgSource + ')';
    text[i] = document.createElement('span')
    text[i].classList.add('ancientName')
    text[i].classList.add('inactive');
    text[i].textContent = ancients[i].ancientName
    ancientCell.append(ancientsArr[i])
    ancientCell.append(text[i])
    ancientsBox.append(ancientCell)
}


ancientsBox.addEventListener('click', chosenAncient);

const stage1 = document.querySelector('.stage1')
const stage2 = document.querySelector('.stage2')
const stage3 = document.querySelector('.stage3')
const difficult = document.querySelector('.difficult')


function chosenAncient(elem) {
    let i = ancientsArr.indexOf(elem.target)
    text[i].classList.remove('inactive');
    text[i].classList.add('active');
    ancientsArr[i].classList.remove('inactive');
    ancientsArr[i].classList.add('active');
    settingAncient.classList.remove('inactive');
    TheAncient = ancients[i].ancientTag;
    settingAncient.textContent = 'Ваш Древний - ' + ancients[i].ancientName;
    settingAncient.classList.add('active');
    stage1.classList.add('hide');
    stage2.classList.remove('hide')
    difficult.classList.remove('hide')
    ancientsBox.removeEventListener('click', chosenAncient)
}

let difBtn = []

for (let i=0; i<buttons.length; i++) {
    let button = document.createElement('button')
    button.classList.add('btn')
    difBtn[i]= button;
    difBtn[i].textContent = buttons[i].buttontName
    difficult.append(difBtn[i])
}
const settingDiffuculty = document.querySelector('.settingDiffuculty')
difficult.addEventListener('click', chouseDifficult);


function chouseDifficult(elem) {
    let i = difBtn.indexOf(elem.target);
    TheDifficulty = buttons[i].difficulty;
    difficult.classList.add('hide');
    settingDiffuculty.classList.remove('inactive');
    settingDiffuculty.classList.add('active');
    settingDiffuculty.textContent = 'Ваш уровень сложность - ' + buttons[i].buttontName
    stage2.classList.add('hide')
    stage3.classList.remove('hide')
    difficult.removeEventListener('click', chouseDifficult)
}
