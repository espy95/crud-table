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
  const id = utils.getId()
  console.log('id', id)
  if (id) {
    const data = await api.getRequest(id)
		console.log("​window.onhashchange -> data", data)
    edit(data)
  }
}

const init = async () => {
  document.onkeydown = e => {
    if (e.keyCode === 27) hideModal()
  }
  const data = await api.getRequest()
  generateTable(data)
  generateModal()
}

export const edit = data => {
  console.group('edit spell')
  console.log('data', data)
  showModal()
  console.groupEnd()
}

init()
