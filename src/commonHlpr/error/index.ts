import { enqueueSnackbar } from 'notistack'

import { LANGUAGE } from '@/language'

export const errHndlrCb = (e: unknown, caldFrm: string) => {
   if (e instanceof Error) enqueueSnackbar(e.message, { variant: 'error' })
   else enqueueSnackbar(LANGUAGE.unknwnErr + 'in' + caldFrm, { variant: 'error' })
}
