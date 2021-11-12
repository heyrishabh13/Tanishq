import {products} from "../data/data.js"

function navTop(){

    

    let select = document.getElementById("currency")
        let sel_cur = document.getElementById("sel_curr")
        
        sel_cur.style.display = "none";
        select.onclick = () => {
           if(sel_cur.style.display == "block"){
               sel_cur.style.display = "none";
           } else {
               sel_cur.style.display = "block";
               three_div.style.display = "none";
           }
        }

        let gold_rate = document.getElementById("gold_rate")
        let three_div = document.getElementById("three_div")
        
        three_div.style.display = "none";
        gold_rate.onclick = () => {
           if(three_div.style.display == "block"){
            three_div.style.display = "none";
           } else {
            three_div.style.display = "block";
            sel_cur.style.display = "none"
           }
        }
        

        // let cart_page = document.getElementById('cart-page')
        // console.log(cart_page);

        // cart_page.onclick = ()=> {

        //     console.log('hello');
        //     alert();
        //     window.location.href = '../html/cart.html';
        // }


        
    
    
    // document.getElementById("currency").onclick = () => {
    //     let select = document.getElementById("sel_cur")
    //     ind++;
    //     select.style.display = "block"
        // if(ind == 1){
        //     select.style.display = "block";
        //     ind = 0;
        // }
    //}


    
    console.log(products);

    

    if(localStorage.getItem("specific_category") == null){
        localStorage.setItem("specific_category", JSON.stringify([]));
    }

    function push(){
        let earrings = document.getElementById("earrings");
        let pendants = document.getElementById("pendants");
        let mangalsutra = document.getElementById("mangalsutra");
        let necklace = document.getElementById("necklace");
        let array = [];
    
        // console.log(earrings, pendants);
    
        
    
    
        earrings.onclick = () =>{
            products.forEach(element => {
            
            //console.log(element.product);
                if(element.product == "Earrings"){
                    array.push(element);
                }
            });
            localStorage.setItem("specific_category", JSON.stringify(array));
            array = [];
        }
        pendants.onclick = () =>{
            products.forEach(element => {
            
            //console.log(element.product);
                if(element.product == "Pendant"){
                    array.push(element);
                }
            });
            console.log(array);
            localStorage.setItem("specific_category", JSON.stringify(array));
            array = [];
        }
        mangalsutra.onclick = () =>{
            products.forEach(element => {
            
            //console.log(element.product);
                if(element.product == "Mangalsutra"){
                    array.push(element);
                }
            });
            localStorage.setItem("specific_category", JSON.stringify(array));
            array = [];
    
        }
        necklace.onclick = () =>{
            products.forEach(element => {
            
            //console.log(element.product);
                if(element.product == "Necklace"){
                    array.push(element);
                }
            });
            localStorage.setItem("specific_category", JSON.stringify(array));
            array = [];
        }

        
        
    }

    push();

    // script_of_mediaquery
    
    let menu = document.getElementById("menu");
    let ham_drop = document.getElementById("ham_drop")
    menu.onclick = () =>{
        if(ham_drop.style.display == "none"){
            ham_drop.style.display = "block";
        } else {
            ham_drop.style.display = "none";
        }
    }
        

    let search = document.getElementById("search");
    let search_div = document.getElementById("search_div");
    search.onclick = () =>{
        if(search_div.style.display == "none"){
            search_div.style.display = "block";
        } else {
            search_div.style.display = "none";
        }
    }
    
}


 





export {navTop};
   
    
    
   