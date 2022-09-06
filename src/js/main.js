(function () {
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.hero-title, .hero-paragraph, .newsletter-header, .newsletter-form', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })

    sr.reveal('.bubble-3, .bubble-4, .hero-browser-inner, .bubble-1, .bubble-2', {
      duration: 1000,
      scale: 0.95,
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 150
    })

    sr.reveal('.feature', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      viewFactor: 0.5
    })
  }
}())





let bringText = '';



let myInput = document.querySelector('input');
let myButton = document.querySelector('.con-2');




// let logo = "";
let url = bringText;

  let css = `
  
/*Add a start screen */
body:after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 9999999 !important;
    left: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 75px;
    transform: scale(0);
    animation-name: popup_Emad;
    animation-duration: 2s;
}

@keyframes popup-Emad {
    
    0%{transform:scale(0)}
    
    18%{transform:scale(2)}
    
    75%{transform:scale(2)}
    
    95%{transform:scale(0)}
    
    100%{transform:scale(0)}
}

body:before {
content: "";
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: fixed;
    z-index: 999999;
    transform: scale(0);
    animation-name: pupup;
    animation-duration: 2s;
}
@keyframes pupup {
   
     0%{transform:scale(2)}
     18%{transform:scale(2)}
     80%{transform:scale(2)}
     100%{transform:scale(0)}

}

/*for mobile*/
@media (max-width:768px) {
   body:after {
       animation-name:pupup_logo-mobile;
   }
}
@keyframes  pupup_logo-mobile {
    
0%{transform:scale(0)}

18%{transform:scale(2)}

75%{transform:scale(2)}

95%{transform:scale(0)}

100%{transform:scale(0)}
}
/*Add a start screen */

  `
let css2 = `body:after {  background-image: url('`;
let css3 = `') !important ; }`;
  myButton.onclick = function() {
    if (myInput.value !== '') {
      if (myInput.value.includes('.jpg') || myInput.value.includes('.png') ) {
        console.log('link ok')
        bringText = myInput.value;
        // console.log(bringText)
        showCode();
        copied.style.setProperty("--copiedplay","paused");
      }
    } else {
  
      console.log('no url link')
    }
  };
  
  let codediv = document.querySelector('.prepared-code');

  let copier = document.querySelector('.mycopier');


let showCode = function() {
  console.log('code launched')
  url = bringText;
  console.log(bringText)

  codediv.style.height = 'auto';
  codediv.style.padding = '20px';
  codediv.style.opacity = '1';

  console.log('js worked')
  
  /* Select the text field */
  // copier.setSelectionRange(0, 99999); /* For mobile devices */
}

//  /* Copy the text inside the text field */
//  copier.addEventListener('click', function() {
//    console.log('worked the onclick copier')
//  },false);
// //  copier.select();

let copied = document.querySelector('body');

copier.onclick = function () { 
     navigator.clipboard.writeText(css+css2+url+css3);
     copied.style.setProperty("--copiedplay", "running");
     console.log('body fixed running')
};

$( ".ex-button" ).hover(
  function() {
    $( ".explain .box" ).css("display","block");
    $( ".explain .box" ).css("transform","translateY(-30px)");

  }, function() {
    $( ".explain .box" ).css("display","none"); //to remove property set it to ''
  }
);