const link = document.querySelectorAll('.navlink ul li a');
const line = document.querySelector('.line');
link.forEach(item => {
    item.addEventListener('click', (e) => {
        link.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active')

        line.style.left = e.target.offsetLeft + "px";
        line.style.width = e.target.offsetWidth + "px";
    })
})

// image click
const ones = document.querySelectorAll('.threemoji .ones');
const content = document.querySelectorAll('.threecontains');
ones.forEach((item, index) => {
    item.addEventListener('click', () => {

        ones.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')

        content.forEach(content => {
            content.classList.remove('active')
        })
        content[index].classList.add('active');
    })
})
// blur finction 
const one = document.querySelector('.one');

window.addEventListener('scroll', () => {
    one.classList.toggle('scroll', window.scrollY > 50)
})
