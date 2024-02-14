const header = document.querySelector('header')
const hidden_els = document.querySelectorAll('.hidden')

const year = document.querySelector('#year')
year.textContent = new Date().getFullYear();

document.addEventListener('scroll', () => {
    if(scrollY > 20){
        header.style.backgroundColor = '#9FD8ED'
        // header.style.backgroundColor = '#edd0b2'
        header.style.boxShadow = '0 0 10px 10px rgb(55, 55, 55)'
    }
    else{
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = 'none'
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showing')
        }
        else entry.target.classList.remove('showing')
    })
})

hidden_els.forEach(el => observer.observe(el))