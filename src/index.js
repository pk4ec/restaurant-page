import "./style.css"
import { div } from "./menu"
import { divs } from "./about"
import sanjisrc from './pic/sanji.png' // this how img src with webpack works

const content = document.querySelector('#content')
    content.appendChild(Object.assign(document.createElement('img'), { src: sanjisrc, className: 'sanji'}))
    content.appendChild(Object.assign(document.createElement('p'), { textContent: `"Agh, jeez... Looks like I've chosen a dumbass for my captain... But it's still a hundred times better than being in a pirate crew that would harm a lady."`}))
    
document.querySelector('.home').addEventListener('click', function () {
    content.innerHTML = ''
    content.style = ''
    content.appendChild(Object.assign(document.createElement('img'), {src: sanjisrc, className: 'sanji'}))
    content.appendChild(Object.assign(document.createElement('p'), {textContent: `"Agh, jeez... Looks like I've chosen a dumbass for my captain... But it's still a hundred times better than being in a pirate crew that would harm a lady."`}))
})
