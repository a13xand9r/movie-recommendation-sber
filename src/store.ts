import { StateType, ActionsType, CharacterType, MovieType } from './types';

export const initialState = {
  character: 'sber' as CharacterType,
  movie: null as null | MovieType,
}

export const reducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {...state, character: action.characterId}
    case 'SET_MOVIE':
      return {...state, movie: action.movie}
    default: return state
  }
}

export const actions = {
  setCharacter: (characterId: CharacterType) => ({ type: 'SET_CHARACTER', characterId } as const),
  setTVShow: (movie: MovieType | null) => ({ type: 'SET_MOVIE', movie } as const),
}