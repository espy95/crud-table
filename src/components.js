import { COLUMNS, OPTIONS } from './constants'

export const buttonElement = (name, onClick) => {
  const button = document.createElement('button')
  button.id = name
  button.className = name
  button.innerText = name
  button.onclick = onClick
  return button
}

export const formElement = () => {
  const form = document.createElement('form')
  const fieldset = document.createElement('fieldset')
  for (const column of COLUMNS) {
    if (column === 'id') continue
    const label = document.createElement('label')
    label.className = 'field-label'
    label.innerText = column
    fieldset.appendChild(label)
    const input = inputField(column)
    fieldset.appendChild(input)
  }
  form.appendChild(fieldset)
  return form
}

export const inputField = name => {
  switch (name) {
    case 'name':
    case 'source': {
      const input = document.createElement('input')
      input.id = name + '-field'
      input.type = 'text'
      input.placeholder = name
      return input
    }
    case 'level':
    case 'school':
    case 'time': {
      const select = document.createElement('select')
      select.id = name + '-field'
      for (const value of OPTIONS[name]) {
        const option = document.createElement('option')
        option.id = 'option-' + name + '-' + value
        option.value = value
        option.innerText = value
        select.appendChild(option)
      }
      return select
    }
    case 'components': {
      const span = document.createElement('span')
      span.id = name + '-field'
      for (const value of OPTIONS[name]) {
        const label = document.createElement('label')
        label.innerText = value
        span.appendChild(label)
        const input = document.createElement('input')
        input.id = name + '-' + value
        input.type = 'checkbox'
        input.value = value
        span.appendChild(input)
      }
      return span
    }
    case 'ritual':
    case 'concentration': {
      const input = document.createElement('input')
      input.id = name + '-field'
      input.type = 'checkbox'
      input.value = 'yes'
      return input
    }
    default:
      return null
  }
}

