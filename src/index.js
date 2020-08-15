import * as api from './api'
import * as utils from './utils'
import { TITLE, HEADING } from './constants'
import { generateTable } from './table'
import { generateModal } from './modal'

const link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'style.css'
document.head.appendChild(link)
document.title = TITLE
const heading = document.createElement('h1')
heading.innerText = HEADING
document.body.appendChild(heading)

window.onhashchange = async () => {
  console.log(window.location.href)
}

const init = async () => {
  const data = await api.getRequest()
  const params = utils.getParams()
  console.log('​params', params)
  generateTable(data)
  generateModal()
}

init()
