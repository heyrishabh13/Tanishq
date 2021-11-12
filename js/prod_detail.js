import { navbar } from '../components/navbar.js'
import {footer} from '../components/footer.js'
import {navTop} from '../components/navTop.js'
import {navTop2} from '../components/navTop2.js'
import {debouncing} from '../components/debouncing.js'

document.querySelector('nav').innerHTML = navbar()
document.querySelector('footer').innerHTML = footer();

navTop();

navTop2();

debouncing();

let dummy_data = [
    {
      name: 'Shimmering Gold Mangalsutra Pendant',
      newPrice: 14710,
      oldPrice: 14795,
      images: [
        'https://staticimg.titan.co.in/Tanishq/Catalog/511193PAJAAA00_1.jpg?impolicy=pqmed&imwidth=640',
      ],
      purity: '22.00',
      jewelleryType: 'Plain Gold Jewellery',
      occasion: 'Casual Wear',
      product: 'Pendant',
      size : "Chain Size: 53 mm",
      weight : "7.639g",
    }
  ];
  localStorage.setItem('prod',JSON.stringify(dummy_data))
  let store = JSON.parse(localStorage.getItem("prod"));
  let Weight = document.getElementById("Weight");
  Weight.textContent = Math.floor(Math.random()*20) + "g";
  let left_img = document.getElementById("left_img");
  let sample1 = document.getElementById("sample1");
  let sample2 = document.getElementById("sample2");
  left_img.src = store[0].images[0];
  sample1.src = store[0].images[0];
  sample2.src = store[0].images[1];
  let price_tag = document.getElementById("price_tag");
  price_tag.textContent = "PRICE" + " " +"₹"+ " " +store[0].newPrice;
  if(localStorage.getItem("prod_for_cart") == null){
      localStorage.setItem("prod_for_cart", JSON.stringify([])) 
  } 
  function new_array(){
      console.log(store[0]);
      let local_arr = JSON.parse(localStorage.getItem("prod_for_cart"));
      local_arr.push(store[0]);
      localStorage.setItem("prod_for_cart", JSON.stringify(local_arr));
  }


// if(localStorage.getItem("add-cart") === null){ 
//     localStorage.setItem("add-cart", JSON.stringify([]));
// } 

// function addToCart(){
        
//     /* pushing the data into the local storage */
//     let product = JSON.parse(localStorage.getItem('show_item'));
    
//     let cart = JSON.parse(localStorage.getItem('add-cart'));

//     cart.push(product);

//     localStorage.setItem('add-cart', JSON.stringify(cart));
// }

// let data = localStorage.getItem("show_item");
// let data_obj = JSON.parse(data);
// document.getElementById("title").innerHTML = data_obj.name + " | Tanishq";
// document.getElementById("item_name").innerHTML = data_obj.name;
// document.getElementById("picture").src = data_obj.images[0];
// document.getElementById("old-price").innerHTML = data_obj.oldPrice;
// document.getElementById("new_Price").innerHTML = data_obj.newPrice;
// document.getElementById("text2").innerHTML = data_obj.name;

// function goToHome(){
//     location.replace("index.html")
// }