import * as api from './api'
import * as utils from './utils'
import { TITLE } from './constants'
import { generateTable } from './table'
import { generateModal, showModal, hideModal } from './modal'
import { formElement } from './components'

const link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'style.css'
document.head.appendChild(link)
document.title = TITLE

window.onhashchange = () => console.log('#', window.location.href)

const init = async () => {
  document.onkeydown = e => {
    if (e.keyCode === 27) hideModal()
  }
  const data = await api.getRequest()
  generateTable(data)
  generateModal()
  // const params = utils.getParams(window.location.href)
  // console.log('params', params)
  const id = utils.getId()
  console.log('id', id)
  console.log('​data', data)
  if (id) edit(data)
}

export const edit = data => {
  window.location.href = '#id=' + data.id
  showModal()
  const modalContent = document.querySelector('.modal-content')
  console.group('editing spell')
  console.log('data', data)
  const form = formElement()
  form.id = 'modal-form'
  const oldForm = document.getElementById('modal-form')
  if (oldForm) {
    modalContent.replaceChild(form, oldForm)
  } else {
    modalContent.appendChild(form)
  }
  console.groupEnd()
}

init()
