import { COLUMNS } from './constants'
import { route } from './utils'
import { buttonElement } from './components'

const generateTableContent = (table, data) => {
  for (const element of data) {
    const row = table.insertRow()
    row.className = 'table-row'
    for (const column of COLUMNS) {
      const cell = row.insertCell()
      cell.innerText = element[column]
    }
    const cell = row.insertCell()
    const button = buttonElement('edit', route(element.id))
    cell.appendChild(button)
  }
}

const generateTableHead = table => {
  const thead = table.createTHead()
  const row = thead.insertRow()
  for (const column of COLUMNS) {
    const th = document.createElement('th')
    th.innerText = column
    row.appendChild(th)
  }
}

export const generateTable = data => {
  const table = document.createElement('table')
  generateTableContent(table, data)
  generateTableHead(table)
  document.body.appendChild(table)
}
