if(module.hot){ module.hot.accept() }
import 'lazysizes'
import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new MobileMenu();
new StickyHeader()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 65)
let modal;

document.querySelectorAll('.open-modal').forEach( el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    if(typeof modal == 'undefined'){
      import(/* webpackChunkName: "modal" */'./modules/Modal').then( modalFile => {
        modal = new modalFile.default()
        setTimeout( () => modal.openTheModal(), 20)
      }).catch( e => console.log('There was a problem: '+e.message))
    }else{
      modal.openTheModal()
    }
  })
})