import {navbar } from '../components/navbar.js'
import {footer} from '../components/footer.js'
import {navTop} from '../components/navTop.js'
import {navTop2} from '../components/navTop2.js'
import {debouncing} from '../components/debouncing.js'

document.querySelector('nav').innerHTML = navbar()
document.querySelector('footer').innerHTML = footer();

navTop();

navTop2();

debouncing();

//Start

let data = JSON.parse(localStorage.getItem("specific_category"));

  let parent = document.getElementById("grid-board");
  

  function showProducts(d) {


    parent.innerHTML = null;
   
    d.forEach(function (product) {
     // console.log(product.name)

      var div = document.createElement("div");

      var img = document.createElement("img");
      img.src = product.images;

      var price = document.createElement("p");
      price.textContent = "₹" + product.newPrice;

      var name = document.createElement("p");
      name.textContent = product.name;

    
   var addtocart_btn = document.createElement("div")

   addtocart_btn.innerText = "QUICK VIEW"
     
   


      div.append(img, name, price, addtocart_btn)

      div.onclick = function () {

        localStorage.setItem('product', JSON.stringify(product));
        
        window.location.href = '../html/prod_detail.html';

      };

      parent.append(div)



    })

  
  }
 
  
showProducts(data);


    function shorthl() {
    let arr = data.sort((a, b) => (a.newPrice < b.newPrice ? 1 : -1));

    showProducts(arr);

    

}

  

function shortlh() {
    let arr = data.sort((a, b) => (a.newPrice > b.newPrice ? 1 : -1));

    showProducts(arr);

    

}

function purity() {

    let arr = data.sort((a, b) => (a.purity > b.purity ? 1 : -1));

showProducts(arr);

}



function product() {

let arr = data.sort((a, b) => (a.product > b.product ? 1 : -1));

showProducts(arr);

}

// function product() {

// let arr = data.sort((a, b) => (a.product > b.product ? 1 : -1));

// showProducts(arr);

// }



function type() {

let arr = data.sort((a, b) => (a.jewelleryType > b.jewelleryType ? 1 : -1));

showProducts(arr);

}

function Occasion() {

let arr = data.sort((a, b) => (a.occasion > b.occasion ? 1 : -1));

showProducts(arr);

}



function showmore() {

let arr = data.sort((a, b) => (a.name > b.name ? 1 : -1));

showProducts(arr);

}


// if(localStorage.getItem("cart")=== null) {
//       localStorage.setItem("cart", JSON.stringify([]))
//     }


//   function addtocart(product) {

//     let proucts_cart = JSON.parse(localStorage.getItem("cart"));
    
//     proucts_cart.push(product)

//     localStorage.setItem("cart", JSON.stringify(proucts_cart))
//     console.log("product", proucts_cart)

    
//   }