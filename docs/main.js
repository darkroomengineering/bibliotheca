import { hello } from '../dist/esm/index.mjs'
import './index.css'

const el = document.createElement('p')
el.textContent = hello('world')

document.body.appendChild(el)
