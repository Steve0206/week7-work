AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  
  initClassName: 'aos-init', // class applied after initialization
  
  animatedClassName: 'aos-animate', // class applied on animation
  
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  
  offset: 150, // offset (in px) from the original trigger point (距離底部120px觸發 <150)
  
  delay: 0, // values from 0 to 3000, with step 50ms
  
  duration: 800, // values from 0 to 3000, with step 50ms  (400 600 800 不超過1秒)
  
  easing: 'ease', // default easing for AOS animations
  
  once: false, // whether animation should happen only once - while scrolling down (true 一次往回重看不會消失)
  
  mirror: false, // whether elements should animate out while scrolling past them
  
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});