import { URL } from './constants'

export const getRequest = () => {
  return fetch(URL)
    .then(res => res.json())
    .catch(error => console.log(error))
}

export const postRequest = data => {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => console.log('post', res))
    .catch(error => console.log(error))
}

export const deleteRequest = id => {
  return fetch(URL + '/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res =>
      res.ok
        ? Promise.resolve('Spell deleted')
        : Promise.reject('An error occured')
    )
    .then(res => console.log(res))
}
