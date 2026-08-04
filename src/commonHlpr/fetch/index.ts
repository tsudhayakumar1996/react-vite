import { CONNECTION_VIOLATES, NOT_AUTHENTICATED_FROM_API } from '@/commonConst/apiInfoMsgs'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'

export const connectServerGet = (endPoint: string, redirectHandledByParent: boolean = false) =>
  fetch(import.meta.env.VITE_SERVER_END_POINT + endPoint, { credentials: 'include' })
    .then((r) => errorHndlr(r))
    .catch((e) => {
      if (!redirectHandledByParent) redirectCb(e)
      throw e
    })

export const connectServerPost = <T>(endPoint: string, payload: T, redirectHandledByParent: boolean = false) =>
  fetch(import.meta.env.VITE_SERVER_END_POINT + endPoint, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then((r) => errorHndlr(r))
    .catch((e) => {
      if (!redirectHandledByParent) redirectCb(e)
      throw e
    })

export const errorHndlr = async (r: Response) => {
  const res = await r.json()
  if (r.ok) return res
  else throw new Error(res.error)
}

const redirectCb = (e: Error) => {
  if (e.message === NOT_AUTHENTICATED_FROM_API) window.location.replace(PATH_NAMES.LOGOUT)
  if (e.message === CONNECTION_VIOLATES) window.location.replace(PATH_NAMES.HIT_LIMIT)
  return
}
