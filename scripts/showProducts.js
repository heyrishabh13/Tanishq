

function showProducts(arr, container){

 arr.forEach( ({name, images, oldPrice, newPrice}) => {
        
        let div = document.createElement('div');
        div.id = "hover-div";

        let img = document.createElement('img');    
        img.src = images[0];
        img.style.width = "95%";

        let product_name = document.createElement('h3');
        product_name.innerText = name;
        product_name.id = "item-name"

        let rupee_sym = document.createElement('span');
        rupee_sym.innerText = "₹";
        rupee_sym.style.color = "#8c8c8c";

        let old_price = document.createElement('span');
        old_price.innerHTML = oldPrice;
        old_price.id = "price-style";
    
        let price = document.createElement('h3');
        price.innerHTML = "₹" + newPrice + ', ';
        price.append(rupee_sym, old_price);
        price.style.textAlign = "center";

        let charge = document.createElement('p');
        charge.innerText = "10 % OFF ON MAKING CHARGES";
        charge.id = 'charge';

        let text = document.createElement('p');
        text.innerText = "TRY ON AVAILABLE";
        text.id = "text";

        

        div.append(img, product_name, price, charge, text);
        container.append(div);
    })
}


export {showProducts}