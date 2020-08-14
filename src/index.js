import * as api from './api'

const columns = [
  'id',
  'name',
  'level',
  'school',
  'components',
  'time',
  'ritual',
  'concentration',
  'source',
]

const init = async () => {
  document.title = 'Table'
  const table = document.createElement('table')
  const data = await api.getRequest()
	console.log("​init -> data", data)
  generateTable(table, data)
  generateTableHead(table)
  document.body.appendChild(table)
}

const generateTable = (table, data) => {
  for (let element of data) {
    const row = table.insertRow()
    for (let column of columns) {
      const cell = row.insertCell()
      const text = document.createTextNode(element[column])
      cell.appendChild(text)
    }
  }
}

const generateTableHead = table => {
  const thead = table.createTHead()
  const row = thead.insertRow()
  for (let column of columns) {
    const th = document.createElement('th')
    const text = document.createTextNode(column)
    th.appendChild(text)
    row.appendChild(th)
  }
}

init()
