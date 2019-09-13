class Header {
  insertFirstHeading () {
    const header = document.querySelector('header')
    const headingOne = document.createElement('h1')
    headingOne.appendChild(document.createTextNode('Webpack Boilerplate'))
    header.appendChild(headingOne)
    header.insertBefore(headingOne, header.childNodes[0] || null)
  }
}

export default Header
