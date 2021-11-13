import {products} from '../data/data.js'

// debouncing


function debouncing(){
    let timeId;

let input_box = document.getElementById('search_inp');

input_box.addEventListener('input', function(){
    // search_box.style.display = 'block';
    debounce(main, 1000)
});

function debounce(main, delay){
    if(timeId){
        clearTimeout(timeId);
    }

    timeId = setTimeout(function(){
        main();
    }, delay);
}

async function main(){

    let data = await searchFunc();

    console.log(data);

    appendProducts(data);
}

function searchFunc(){

    let input = document.getElementById('search_inp').value;

    let arr = [];

    products.forEach((product) => {
        if(product.name.toLowerCase().split(' ').includes(input.toLowerCase())){
            arr.push(product);
        }
    })
    
    return arr;
}

function appendProducts(data){

    let default_show = document.getElementById('popu_grid1');
    let show = document.getElementById('show');

    if(data.length > 0){
        if(show.style.display == 'none'){
            show.style.display = 'grid';
        }
        show.innerHTML = null;
        default_show.style.display = 'none';

        // <div>
        //                 <img src="https://staticimg.titan.co.in/Tanishq/Catalog/600212ZCDRBS00_1.jpg?impolicy=pqmed&imwidth=320" alt="">
        //             </div>
        //             <div>
        //                 <p>25 gram 24 Karat Gold Biscuit</p>
        //                 <p>600212ZCDRBS00</p>
        //                 <p></p>
        //             </div>

        for(let i = 0; i < 3; i++){

            let product = data[i];

            let img_div = document.createElement('div');
            let img = document.createElement('img');
            img.src = product.images[0];
            img_div.append(img);

            let content_div = document.createElement('div');

            let name = document.createElement('p');
            name.innerText = product.name;
            
            let type = document.createElement('p');
            type.innerText = product.jewelleryType;
            content_div.append(name, type);

            show.append(img_div, content_div);
        }
                    
    }
    else{
        show.style.display = 'none';
        default_show.style.display = 'grid';
    }


}
}

export {debouncing};