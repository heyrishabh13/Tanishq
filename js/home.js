import {products} from "../data/data.js"
import {showProducts} from '../scripts/showProducts.js'

let container = document.getElementById('container');

showProducts(products,container);