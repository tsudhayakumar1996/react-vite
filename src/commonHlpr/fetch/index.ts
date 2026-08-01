export const connectServerGet = (endPoint: string) =>
  fetch(import.meta.env.VITE_SERVER_END_POINT + endPoint, { credentials: 'include' })
    .then((r) => errorHndlr(r))
    .catch((e) => {
      throw e
    })

export const connectServerPost = <T>(endPoint: string, payload: T) =>
  fetch(import.meta.env.VITE_SERVER_END_POINT + endPoint, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then((r) => errorHndlr(r))
    .catch((e) => {
      throw e
    })

const errorHndlr = (r: Response) => {
  if (r.ok) return r.json()
  else throw new Error(JSON.stringify(r))
}
