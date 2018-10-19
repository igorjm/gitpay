import axios from 'axios'
import api from '../consts'
import { loggedIn } from './loginActions'

const FETCH_PREFERENCES_REQUESTED = 'FETCH_PREFERENCES_REQUESTED'
const FETCH_PREFERENCES_SUCCESS = 'FETCH_PREFERENCES_SUCCESS'
const FETCH_PREFERENCES_ERROR = 'FETCH_PREFERENCES_ERROR'

const fetchPreferencesRequested = () => {
  return { type: FETCH_PREFERENCES_REQUESTED, completed: false }
}

const fetchPreferencesSuccess = (response) => {
  return { type: FETCH_PREFERENCES_SUCCESS, completed: true, language: response.language }
}

const fetchPreferencesError = (error) => {
  return { type: FETCH_PREFERENCES_ERROR, completed: true, error }
}

const fetchPreferences = (userId) => {
  return (dispatch) => {
    return dispatch(loggedIn()).then(user => {
      console.log(user)
      dispatch(fetchPreferencesRequested())
      return axios
        .get(`${api.API_URL}/users/${userId}/preferences`)
        .then(response => {
          return dispatch(fetchPreferencesSuccess(response.data))
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
          return dispatch(fetchPreferencesError(error))
        })
    })
  }
}

export {
  FETCH_PREFERENCES_REQUESTED,
  FETCH_PREFERENCES_SUCCESS,
  FETCH_PREFERENCES_ERROR,
  fetchPreferencesRequested,
  fetchPreferencesSuccess,
  fetchPreferencesError,
  fetchPreferences
}
