import { buttonElement, formElement } from './components'

export const showModal = data => {
  const modal = document.querySelector('.modal')
  modal.classList.add('modal-show')
  modal.classList.remove('modal-hide')
  document.body.classList.add('modal-show')
  const modalContent = modal.firstChild
  const oldForm = document.getElementById('modal-form')
  if (oldForm) {
    modalContent.replaceChild(formElement(data), oldForm)
  } else {
    modalContent.appendChild(formElement(data))
  }
}

export const hideModal = () => {
  const modal = document.querySelector('.modal')
  modal.classList.remove('modal-show')
  modal.classList.add('modal-hide')
  document.body.classList.remove('modal-show')
}

export const generateModal = () => {
  const modal = document.createElement('div')
  modal.className = 'modal modal-hide'
  document.onkeydown = e => {
    if (e.keyCode === 27) hideModal()
  }
  modal.onclick = e => {
    if (e.target !== modal) return
    hideModal()
  }
  const modalContent = document.createElement('div')
  modalContent.className = 'modal-content'
  modalContent.appendChild(buttonElement('x', () => hideModal()))
  modal.appendChild(modalContent)
  document.body.appendChild(modal)
}
