import { actions, initialState } from './store';

export type StateType = typeof initialState

type InferActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = InferActionType<typeof actions>

export type CharacterType = 'sber' | 'joy' | 'eva'

export type MovieType = {
  name: string
  description: string
  img: string
  genres: string[]
  year: string
  rate: number
}