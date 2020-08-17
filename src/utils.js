import * as api from './api'

export const getParams = () => {
  const params = {}
  const parser = document.createElement('a')
  parser.href = window.location.href
  const queries = parser.search.substring(1).split('&')
  for (const param of queries) {
    const pair = param.split('=')
    if (pair.length < 2) return null
    params[pair[0]] = decodeURIComponent(pair[1].replace(/\+/g, ' '))
  }
  return params
}

export const onSubmit = data => async e => {
  e.preventDefault()
  const formData = Object.fromEntries(new FormData(document.getElementById('modal-form')))
  if (data && data.id) {
    await api.patchRequest(formData, data.id)
  } else {
    await api.postRequest(formData)
  }
  window.location.href = '/'
}

export const onDelete = id => async e => {
  e.preventDefault()
  await api.deleteRequest(id)
  window.location.href = '/'
}
