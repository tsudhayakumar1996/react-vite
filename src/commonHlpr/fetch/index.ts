import { NOT_AUTHENTICATED_FROM_API } from '@/commonConst/apiInfoMsgs'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'

export const connectServerGet = (endPoint: string) =>
  fetch(import.meta.env.VITE_SERVER_END_POINT + endPoint, { credentials: 'include' })
    .then((r) => errorHndlr(r))
    .catch((e) => {
      logoutCb(e)
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
      logoutCb(e)
      throw e
    })

export const errorHndlr = async (r: Response) => {
  const res = await r.json()
  if (r.ok) return res
  else throw new Error(res.error)
}

const logoutCb = (e: Error) => {
  if (e.message === NOT_AUTHENTICATED_FROM_API) window.location.replace(PATH_NAMES.LOGOUT)
  return
}
