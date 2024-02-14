import files from './files.js'
const cards = document.querySelectorAll('.card-file');

for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', () => {
        const link = document.createElement('a')
        const blob = new Blob([ files[i] ], {type: 'octet-stream'})
        link.href = URL.createObjectURL(blob)
        link.download = 'აკადემიკოს ილია ვეკუას სახელობის N42 საჯარო სკოლის შინაგანაწესი (2021წ)'
        link.click()
        link.remove()
    })
}