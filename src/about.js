export const divs = document.createElement('div')
document.querySelector('.about').addEventListener('click', function () {
    document.querySelector('#content').innerHTML = ''
    document.querySelector('#content').style = ''
    document.querySelector('#content').appendChild(Object.assign(document.createElement('div'), {className: 'abouttitle', textContent: 'About Us'}))
    document.querySelector('#content').append(Object.assign(document.createElement('p'), {textContent: `Not currently operating due to being pursued by marines. Please check back later!`}))
})
