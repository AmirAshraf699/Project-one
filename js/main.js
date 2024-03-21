let toggle = document.querySelector('header .toggle')
let spanTwo = document.querySelector('header .links .toggle .two')
let arrow = document.querySelector('header nav .arrow')
let ul = document.querySelector('header nav ul')

toggle.onclick = function () {
    spanTwo.classList.toggle('full')
    arrow.classList.toggle('border')
    ul.classList.toggle('open')
}


let portImage = document.querySelectorAll('.portfolio .project img')

portImage.forEach((img) => {
    img.onclick = () => {
        let div = document.createElement('div')
        div.className = 'popup-father'
        let overlay = document.createElement('div')
        overlay.className = 'overlay'
        div.appendChild(overlay)
        let popup = document.createElement('div')
        popup.className = 'popup'
        let image = document.createElement('img')
        image.src = img.src
        popup.appendChild(image) 
        let button = document.createElement('button')
        button.className = 'x'
        button.textContent = "X"
        popup.appendChild(button)
        div.appendChild(popup)
        document.body.appendChild(div)
        button.onclick = () => {
            div.remove()
        }
    }
})