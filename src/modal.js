import { buttonElement } from './components'

export const showModal = () => {
  const modal = document.querySelector('.modal')
  modal.classList.add('modal-show')
  const scrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
}

export const hideModal = () => {
  const modal = document.querySelector('.modal')
  modal.classList.remove('modal-show')
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
  window.location.href = '#'
}

export const generateModal = () => {
  const modal = document.createElement('div')
  modal.className = 'modal'
  const modalContent = document.createElement('div')
  modalContent.className = 'modal-content'
  const button = buttonElement('x', () => hideModal())
  modalContent.appendChild(button)
  modal.onclick = e => {
    if (e.target !== modal) return
    hideModal()
  }
  modal.appendChild(modalContent)
  document.body.appendChild(modal)
}
