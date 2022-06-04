import { TOGGLE_VISIBLE_PROFILE } from './types'

const initialState = {
  firstName: 'Имя пользователя',
  lastName: 'Фамилия пользователя',
  isVisibleProfile: true,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return {
        ...state,
        isVisibleProfile: !state.isVisibleProfile,
      }
    default:
      return state
  }
}
