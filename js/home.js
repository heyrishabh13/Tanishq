import {navbar} from '../components/navbar.js'
import {footer} from '../components/footer.js'
import {navTop} from '../components/navTop.js';



document.querySelector('nav').innerHTML = navbar();

document.querySelector('footer').innerHTML = footer();

navTop();


var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function() {
       document.getElementById('category_img').scrollLeft += 330;
       document.getElementById('slide_num').textContent = "2 / 2"
    };
    buttonLeft.onclick = function() {
       document.getElementById('category_img').scrollLeft -= 330;
       document.getElementById('slide_num').textContent = "1 / 2"
    };