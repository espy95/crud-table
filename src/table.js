import { COLUMNS } from './constants'
import { showModal } from './modal'
import { buttonElement } from './components'
import { onDelete } from './utils'

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
    const editCell = row.insertCell()
    const deleteCell = row.insertCell()
    editCell.className = 'action'
    deleteCell.className = 'action'
    editCell.appendChild(buttonElement('edit', () => showModal(element)))
    deleteCell.appendChild(buttonElement('delete', onDelete(element.id)))
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
  const th = document.createElement('th')
  th.className = 'action'
  th.colSpan = 2
  th.appendChild(buttonElement('create', () => showModal()))
  row.appendChild(th)
}

export const generateTable = data => {
  const table = document.createElement('table')
  generateTableContent(table, data)
  generateTableHead(table)
  document.body.appendChild(table)
}
