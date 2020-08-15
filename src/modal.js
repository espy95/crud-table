import { buttonElement, formElement, loadForm } from './components'

export const showModal = data => {
  const modal = document.querySelector('.modal')
  modal.classList.add('modal-show')
  const modalContent = modal.firstChild
  const oldForm = document.querySelector('#modal-form')
  if (oldForm) {
    modalContent.replaceChild(formElement(data), oldForm)
  } else {
    modalContent.appendChild(formElement(data))
  }
}

export const hideModal = () => {
  const modal = document.querySelector('.modal')
  modal.classList.remove('modal-show')
}

export const generateModal = () => {
  const modal = document.createElement('div')
  modal.className = 'modal'
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
