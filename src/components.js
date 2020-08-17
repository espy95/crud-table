import { COLUMNS, OPTIONS } from './constants'
import { onSubmit } from './utils'

export const buttonElement = (name, onClick) => {
  const button = document.createElement('button')
  button.id = name
  button.className = name
  button.innerText = name
  button.onclick = onClick
  return button
}

export const formElement = data => {
  const form = document.createElement('form')
  form.id = 'modal-form'
  const fieldset = document.createElement('fieldset')
  if (data && data.id) {
    const id = document.createElement('input')
    id.name = 'id'
    id.value = data.id
    id.className = 'hidden'
    fieldset.appendChild(id)
  }
  for (const column of COLUMNS) {
    const label = document.createElement('label')
    label.className = 'field-label'
    label.innerText = column
    fieldset.appendChild(label)
    fieldset.appendChild(input(column, data ? data[column] : ''))
  }
  form.appendChild(fieldset)
  form.appendChild(buttonElement('submit', onSubmit(data)))
  form.appendChild(buttonElement('share', () => {}))
  return form
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
      for (const value of OPTIONS[field]) {
        const option = document.createElement('option')
        option.id = 'option-' + field + '-' + value
        option.value = value
        option.innerText = value
        if (value === initial) option.selected = 'selected'
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
  }
}
