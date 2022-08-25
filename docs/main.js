import { hello } from '../dist/index.modern.mjs'
import './index.css'

const el = document.createElement('p')
el.textContent = hello('world')

document.body.appendChild(el)
