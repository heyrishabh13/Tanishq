import { navbar } from '../components/navbar.js'
import {footer} from '../components/footer.js'
import {navTop} from '../components/navTop.js'
import {debouncing} from '../components/debouncing.js'

document.querySelector('nav').innerHTML = navbar()
document.querySelector('footer').innerHTML = footer();

navTop();

debouncing();
