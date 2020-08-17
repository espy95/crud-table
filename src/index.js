import { TITLE, HEADING } from './constants'
import { getRequest } from './api'
import { generateTable } from './table'
import { generateModal, showModal } from './modal'
import { getParams } from './utils'

const meta = document.createElement('meta')
meta.name = 'viewport'
meta.content = 'width=device-width, initial-scale=1'
document.head.appendChild(meta)

const link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'style.css'
document.head.appendChild(link)

document.title = TITLE

const heading = document.createElement('h1')
heading.innerText = HEADING
document.body.appendChild(heading)

const init = async () => {
  const data = await getRequest()
	const params = getParams()
  generateTable(data)
  generateModal()
  if (params) showModal(params)
}

init()
