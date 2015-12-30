require('./assets/docs.css')
require('./assets/style.css')
require('prismjs')
require('./js/showLanguage')


import sideBar from './example/sideBar.vue'
import webHeader from './example/webHeader.vue'

Vue.config.debug = true

new Vue({
  el: '#wrapper',
  components: {
    sideBar,
    webHeader,

    list: {
      inherit: true,
      template: ''
    }
  },
  data() {
    return {
      anchor: []
    }
  },
  filters: {
    space(val) {
      return val.replace('-', ' ')
    }
  },
  ready() {
    // add h1.anchor.innerHTML to sidebar list
    const anchor = document.querySelectorAll('.anchor')
    this.anchor = [...anchor].map(el=> el.innerHTML.replace(' ', '-'))
    // Scrollspy
    const section = document.querySelectorAll('.bs-docs-section')
    const sections = {}
    const navbar = document.querySelector('#sidenav')
    let i = 0

    window.onload = ()=> {
      Array.prototype.forEach.call(section, (e)=> {
        sections[e.id] = e.offsetTop
      })
    }

    function scrollSpy() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

      for (i in sections) {
        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
        if (sections[i] + 420 <= scrollPosition) {
  	      if (navbar) {
  	        if (navbar.querySelector('.active')) navbar.querySelector('.active').className = ''
  	        navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active'
  	      }
        }
      }
    }

    window.onscroll = ()=> {
      scrollSpy()
    }
  }
})
