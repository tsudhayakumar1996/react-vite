export const connectServerGet = (endPoint: string) =>
  fetch(import.meta.env.VITE_SERVER_END_POINT + endPoint).then((r) => r.json())

export const connectServerPost = <T>(endPoint: string, payload: T) =>
  fetch(import.meta.env.VITE_SERVER_END_POINT + endPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then((r) => r.json())
