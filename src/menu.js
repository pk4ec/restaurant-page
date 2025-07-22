export const div = document.createElement('div')
import sashimisrc from './pic/sashimi.png'
import sushisrc from './pic/sushi.png'
import lobstersrc from './pic/lobster.png'
const menu = [{
    name: 'SASHIMI',
    src: sashimisrc,
    desc: "The Sanji's Wedding Special: Dragon Boat of Dragon Salmon Sashimi is a Draconic Super-Fillet Salmon cut into sashimi and served in a sushi boat.",
    price: 22
},
{
    name: 'SUSHI',
    src: sushisrc,
    desc: "The Succulent Seared Dragon Salmon Sushi is Draconic Super-Fillet Salmon served in nigiri-style sushi made with roughly chopped scallions and wasabi.",
    price: 22
},
{
    name: 'LOBSTER',
    src: lobstersrc,
    desc: "The Tomahawk Spiny Lobster is a very rare, gigantic lobster with axe-shaped blades instead of pincers. It's a very difficult ingredient to prepare that even first-rated chefs from top-class restaurants would struggle with this ingredient.",
    price: 1997
}]
document.querySelector('.menu').addEventListener('click', function () {
    content.innerHTML = ''
    content.style.padding = '10vh'
    content.appendChild(Object.assign(document.createElement('div'), { className: 'themenu'}))
    document.querySelector('.themenu').appendChild(Object.assign(document.createElement('div'), { className: 'menutitle', textContent: 'MENU'}))
    for (let i in menu) {
        document.querySelector('.themenu').appendChild(Object.assign(document.createElement('div'), {className: 'submenu'}))
        document.querySelectorAll('.submenu')[i].appendChild(Object.assign(document.createElement('div'), {className: 'submenutitle', textContent: menu[i].name}))
        document.querySelectorAll('.submenu')[i].appendChild(Object.assign(document.createElement('img'), {src: menu[i].src, className: 'food'}))
        document.querySelectorAll('.submenu')[i].appendChild(Object.assign(document.createElement('div'), {className:'desc', textContent: menu[i].desc}))
        document.querySelectorAll('.submenu')[i].appendChild(Object.assign(document.createElement('div'), {className:'price', textContent: `$${menu[i].price}`}))
    }
})