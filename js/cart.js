import { navbar } from '/components/navbar.js'

// document.querySelector('nav').innerHTML = navbar()

//created a dummy data for ls

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
]
localStorage.setItem('cart',JSON.stringify(dummy_data))


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
  // recover data from local storage
   

  count.innerHTML = `CART: ${cart.length} ITEMS`


  cart.forEach(({name , newPrice,images, size, weight }) => {
    // working
    console.log(name, newPrice,images[0], size, weight );
//creating details container having image, name , price add other imp. stuff
    let main_div = document.createElement('div');

    let img_div = document.createElement('div');

    let name_div =  document.createElement('div');

    let quantity_div = document.createElement('div');

    let quantity =  document.createElement('div');
    quantity.innerHTML = "- 1 +"

   

    let p_name = document.createElement('div')
    p_name.innerHTML = name
    
    let p_img = document.createElement('img')
    p_img.src = images[0]
    p_img.setAttribute('class','image')

    let p_weight = document.createElement('div')
    p_weight.innerHTML = weight

    let p_size = document.createElement('div')
    p_size.innerHTML = size;


    let total = document.createElement('div')
    total.innerHTML = `₹${newPrice}`

    let remove_btn = document.createElement('button')
    remove_btn.innerHTML = 'Remove'

    remove_btn.onclick =  () =>{
      removeItem(name,main_div,parent)
    }
    let items_div = document.createElement('div')

    img_div.append(p_img);

    name_div.append(p_name , p_weight , p_size)

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
    count.innerHTML = `CART: ${cart.length} ITEMS`
    localStorage.setItem('cart',JSON.stringify(cart))
    parent.removeChild(main_div)
    let display_cont = document.getElementById('display_cont')
    display_cont.innerHTML = null
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
    let initial_price = document.createElement('div')
    initial_price.innerHTML = `ORDER TOTAL (${cart.length} ITEMS)<b> ₹${sum}</b>`

    let shipping = document.createElement('div')
    shipping.innerHTML = `SHIPPING <b>FREE</b>`

    let discount = document.createElement('div')
    discount.innerHTML = `DISCOUNT <b>₹0</b>`

    let final_price = document.createElement('div')
    final_price.innerHTML = `<b>YOU PAY ₹${sum}<b/>`

    let tax = document.createElement('div')
    tax.innerHTML = `<b>INCLUSIVE OF ALL TAXES*</b>`

    parent.append(initial_price,discount,shipping,final_price,tax)
  }
  showTotal() 


}

