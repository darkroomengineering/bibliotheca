import { hello } from '../dist/index.js'
import './global.css'

const p = document.createElement('p')
p.textContent = hello('World')

document.body.appendChild(p)
