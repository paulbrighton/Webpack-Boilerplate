import Header from './app/header'
import Footer from './app/footer'
import './styles/scss/main.scss'
// import catImage from './assets/images/british-lilac-cat-2.jpg'

let header = new Header()
let firstHeading = header.getFirstHeading()
console.log(firstHeading)

let footer = new Footer()
let footerText = footer.getFooterText()
console.log(footerText)

// document.getElementById('cat-image').setAttribute('src', catImage)
