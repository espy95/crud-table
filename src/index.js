import * as api from './api'
import * as utils from './utils'
import { TITLE } from './constants'
import { generateTable } from './table'
import { generateModal, showModal, hideModal } from './modal'

const link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'style.css'
document.head.appendChild(link)
document.title = TITLE

window.onhashchange = async () => {
  console.log(window.location.href)
}

const init = async () => {
  const data = await api.getRequest()
  const params = utils.getParams()
	console.log("​params", params)
  generateTable(data)
  generateModal()
}

init()
