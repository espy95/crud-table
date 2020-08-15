import { COLUMNS } from './constants'
import { showModal } from './modal'
import { buttonElement } from './components'

const generateTableContent = (table, data) => {
  for (const element of data) {
    const row = table.insertRow()
    row.className = 'table-row'
    row.id = element.name
    for (const column of COLUMNS) {
      const cell = row.insertCell()
      cell.innerText = element[column]
      if (
        !element[column] &&
        (column === 'ritual' || column === 'concentration')
      )
        cell.innerText = 'no'
    }
    const cell = row.insertCell()
    cell.className = 'no-padding'
    cell.appendChild(buttonElement('edit', () => showModal(element)))
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
  row.appendChild(document.createElement('th'))
}

export const generateTable = data => {
  const table = document.createElement('table')
  generateTableContent(table, data)
  generateTableHead(table)
  document.body.appendChild(table)
}
