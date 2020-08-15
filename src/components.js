import { COLUMNS, OPTIONS } from './constants'
import * as api from './api'

export const buttonElement = (name, onClick) => {
  const button = document.createElement('button')
  button.id = name
  button.className = name
  button.innerText = name
  button.onclick = onClick
  return button
}

export const loadForm = data => {
  console.group('loadForm')
  console.log('data', data)
  const form = document.getElementById('modal-form')
  console.log('form', form)
  const formData = new FormData(form)
  console.log('​loadForm -> formData', formData)
  for (const field of form.firstChild.childNodes) {
  }
  console.groupEnd()
}

export const formElement = data => {
  const form = document.createElement('form')
  form.id = 'modal-form'
  form.className = 'modal-form'
  // form.action = 'http://localhost:3000/spells'
  // form.method = 'get'
  const fieldset = document.createElement('fieldset')
  for (const column of COLUMNS) {
    const label = document.createElement('label')
    label.className = 'field-label'
    label.innerText = column
    fieldset.appendChild(label)
    fieldset.appendChild(input(column, data[column]))
  }
  form.appendChild(fieldset)
  form.appendChild(buttonElement('save', () => submit(form)))
  form.appendChild(buttonElement('delete', () => api.deleteRequest(data.id)))
  return form
}

const submit = form => {
  console.group('submit')
  console.log('form', form)
  console.groupEnd()
}

export const input = (field, initial) => {
  switch (field) {
    case 'name':
    case 'source': {
      const input = document.createElement('input')
      input.id = field + '-field'
      input.name = field
      input.type = 'text'
      input.value = initial
      return input
    }
    case 'level':
    case 'school':
    case 'time': {
      const select = document.createElement('select')
      select.id = field + '-field'
      select.name = field
      select.value = initial
      for (const value of OPTIONS[field]) {
        const option = document.createElement('option')
        option.id = 'option-' + field + '-' + value
        option.value = value
        option.innerText = value
        select.appendChild(option)
      }
      return select
    }
    case 'ritual':
    case 'concentration': {
      const input = document.createElement('input')
      input.id = field + '-field'
      input.name = field
      input.type = 'checkbox'
      input.value = 'yes'
      input.checked = initial === 'yes'
      return input
    }
    default:
      return document.createTextNode(initial)
  }
}
