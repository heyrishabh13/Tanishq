import { navbar } from '../components/navbar.js'
import {footer} from '../components/footer.js'
import {navTop} from '../components/navTop.js'
import {debouncing} from '../components/debouncing.js'

// import {navTop2} from '../components/navTop2.js'

document.querySelector('nav').innerHTML = navbar()
document.querySelector('footer').innerHTML = footer();

navTop();

// navTop2();

debouncing();
//created a dummy data for ls
/*
let dummy_data = [
  {
    name: 'Opulent Gold Jhumka Style Earrings',
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
  },
  {
    name: 'Traditional 22 Karat Gold Half Moon Pendant',
    newPrice: '39787',
    oldPrice: '40221',
    images: [
      'https://staticimg.titan.co.in/Tanishq/Catalog/511194PSHAAA00_1.jpg?impolicy=pqmed&imwidth=640',
      'https://staticimg.titan.co.in/Tanishq/Catalog/511194PSHAAA00_2.jpg?impolicy=pqmed&imwidth=640',
      'https://staticimg.titan.co.in/Tanishq/Catalog/511194PSHAAA00_3.jpg?impolicy=pqmed&imwidth=640',
    ],
    purity: '22.00',
    jewelleryType: 'Plain Gold Jewellery',
    occasion: 'Casual Wear',
    product: 'Pendant',
    size : "Chain Size: 18.23 cm",
    weight : "7.639g",
  },
  {
    name: "Charming Ruby Pendant With Chain",
    newPrice: 72948,
    oldPrice: 73603,
    images: ["https://staticimg.titan.co.in/Tanishq/Catalog/513318GDJAB18_1.jpg?impolicy=pqmed&imwidth=640"],
    purity: "22.00",
    jewelleryType: "Jewellery with Gemstones",
    occasion: "Traditional and Ethnic Wear",
    product:"Necklace"
},
{
    name: "Elegant Emerald And Ruby Pendant With Chain",
    newPrice: 53994,
    oldPrice:  54468,
    images: ["https://staticimg.titan.co.in/Tanishq/Catalog/513318GEBAA40_1.jpg?impolicy=pqmed&imwidth=640"],
    purity: "22.00",
    jewelleryType: "Jewellery with Gemstones",
    occasion: "Traditional and Ethnic Wear",
    product:"Necklace"
},
{
    name: "Filigree Work Gold Neckwear",
    newPrice: 137055,
    oldPrice: 140164,
    images: ["https://staticimg.titan.co.in/Tanishq/Catalog/513220NPLAA00_1.jpg?impolicy=pqmed&imwidth=640"],
    purity: "22.00",
    jewelleryType: "Plain Gold Jewellery",
    occasion: "Traditional and Ethnic Wear",
    product:"Necklace"
},
{
    name: "Glorious Detailed Gold Haaram",
    newPrice: 306930,
    oldPrice: 318408,
    images: ["https://staticimg.titan.co.in/Tanishq/Catalog/513719EDH1AAP1_1.jpg?impolicy=pqmed&imwidth=640"],
    purity: "22.00",
    jewelleryType: "Plain Jewellery with Stones",
    occasion: "Traditional and Ethnic Wear",
    product:"Necklace"
},
{
    name: "Traditional Gold Leaf Pattern Haaram",
    newPrice: 303080,
    oldPrice:314092 ,
    images: ["https://staticimg.titan.co.in/Tanishq/Catalog/513719EEV1AA00_1.jpg?impolicy=pqmed&imwidth=640"],
    purity: "22.00",
    jewelleryType: "Plain Gold Jewellery",
    occasion: "Traditional and Ethnic Wear",
    product:"Necklace"
},
]
localStorage.setItem('cart',JSON.stringify(dummy_data))


*/
let count = document.getElementById('count')

let cart = JSON.parse(localStorage.getItem("cart"))
console.log('cart:', cart)
let empty_cart = document.getElementById('empty_cart')
let parent = document.getElementById('parent')
let not_empty_cart = document.getElementById('not_empty_cart')
console.log('kya h ye',localStorage.getItem("cart") )
if (localStorage.getItem("cart") == null) {
empty_cart.style.display = 'block';
not_empty_cart.style.display= 'none';
console.log('empty')
}
//   console.log(localStorage.getItem("cart"))
else if (localStorage.getItem("cart")) {
  empty_cart.style.display = 'none';
  not_empty_cart.style.display= 'block';
function showItems() {
  // recover data from local storage having name cart
   

  count.innerHTML = `CART : <span style="font-family : sans-serif">${cart.length}</span> ITEMS`


  cart.forEach(({name , newPrice,images }) => {
//creating details container having image, name , price add other imp. stuff
    let main_div = document.createElement('div');

    let img_div = document.createElement('div');

    let name_div =  document.createElement('div');

    let quantity_div = document.createElement('div');

    let quantity =  document.createElement('div');
    quantity.innerHTML = "<div class='signs'>-</div> <div class='quantity'>1</div><div class='signs'>+</div> "
    quantity.setAttribute('class','quan')

   

    let p_name = document.createElement('div')
    p_name.innerHTML = name
    p_name.setAttribute('class','name')

    let code =  document.createElement('div');
    code.innerHTML = `<b>511518JCZABA002EA005967</b>`
    
    let p_img = document.createElement('img')
    p_img.src = images[0]
    p_img.setAttribute('class','image')

    let p_weight = document.createElement('div')
    let weight = Math.random()*50+10;
    let fixed_decimal = Number.parseFloat(weight).toFixed(3)
    p_weight.innerHTML = `Weight (g): ${fixed_decimal}`

   

    let price = document.createElement('div')
    price.setAttribute('class','price')
    price.innerHTML = `<b>₹${newPrice}</b>`

    let total = document.createElement('div')
    total.innerHTML = `<b>₹${newPrice}</b>`

    let remove_btn = document.createElement('button')
    remove_btn.setAttribute('class','remove_btn')
    remove_btn.innerHTML = 'Remove'
    remove_btn.onmouseover = ()=>{
      remove_btn.setAttribute('class','remove_btn_hover')
    }
    remove_btn.onmouseleave = ()=>{
      remove_btn.setAttribute('class','remove_btn')
    }
    remove_btn.onclick =  () =>{
      setTimeout(()=>{
        removeItem(name,main_div,parent)
      },1500)
    }
    let items_div = document.createElement('div')

    img_div.append(p_img);

    name_div.append(p_name ,code, price,p_weight )

    items_div.append(p_img , name_div)
    items_div.setAttribute('class','items_div')

    quantity_div.append(quantity, remove_btn)

    main_div.append(items_div, quantity_div , total)

    parent.append(main_div);
  

  })

      // let products = JSON.parse(localStorage.getItem("cart"));
     

  }
  showItems()

  function removeItem(name,main_div,parent) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    
    // console.log(name)
    let arr = []
    for (let i = 0 ; i < cart.length ; i++) {
      if (cart[i].name != name) {
        arr.push(cart[i])
      }
     
    }
   
    cart = arr
    count.innerHTML = `CART : <span style="font-family : sans-serif">${cart.length}</span> ITEMS`
    localStorage.setItem('cart',JSON.stringify(cart))
    parent.removeChild(main_div)
    let display_cont = document.getElementById('display_cont')
    showTotal()
    if (cart.length === 0) {
      empty_cart.style.display = 'block';
      not_empty_cart.style.display= 'none';
      console.log('empty')
  }
}

  function showTotal() {
    let parent = document.getElementById('display_cont')

    let cart = JSON.parse(localStorage.getItem("cart"))
    let sum = 0
    cart.forEach(({newPrice}) =>{
      sum+= +newPrice
    })
  

    let amt = document.getElementById('amt')
    amt.innerHTML = `₹${sum}`

    let final_amt = document.getElementById('final_amt')
    final_amt.innerHTML = `₹${sum}`
  }
  showTotal() 


}

