import { createSmartappDebugger, createAssistant } from '@sberdevices/assistant-client'
import { Dispatch } from 'react'
import { actions } from './store'

export const initializeAssistant = (getState: () => any) => {
  if (process.env.NODE_ENV === 'development') {
    return createSmartappDebugger({
      token: process.env.REACT_APP_ASSISTANT_TOKEN ?? '',
      initPhrase: 'Запусти подбор фильма',
      getState
    })
  }
  return createAssistant({ getState })
}

export const initAssistant = (
  dispatch: Dispatch<any>
  ) => {
  const assistant = initializeAssistant(() => { })
  assistant.on('data', ({ smart_app_data, type, character }: any) => {
    if (smart_app_data) {
      console.log(smart_app_data)
      dispatch(smart_app_data)
    }
    if (type === 'character') dispatch(actions.setCharacter(character.id))
  })
  return assistant
}