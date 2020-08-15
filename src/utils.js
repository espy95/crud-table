export const getId = () => {
  const href = window.location.href
  const reg = new RegExp('[#?&]id=([^&#]*)', 'i')
  const string = reg.exec(href)
  return string ? string[1] : null
}

export const getParams = () => {
  const params = {}
  const parser = document.createElement('a')
  parser.href = window.location.href
  const queries = parser.search.substring(1).split('&')
	console.log("​getParams -> queries", queries)
  for (const param of queries) {
    const pair = param.split('=')
    params[pair[0]] = decodeURIComponent(pair[1])
  }
  return params
}
