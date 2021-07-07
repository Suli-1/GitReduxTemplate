import axios from 'axios'

const initialState = {
  repos: [],
  user: {},
  readme: ''
}

const GET_REPOS = 'GET_REPOS'
const GET_USER = 'GET_USER'
const GET_README = 'GET_README'

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.user }
    case GET_REPOS:
      return { ...state, repos: action.repos }
    case GET_README:
      return { ...state, readme: action.readme }
    default:
      return state
  }
}

export function getRepos(userName) {
  return async (dispatch) => {
    const { data: repos } = await axios(`https://api.github.com/users/${userName}/repos`)
    dispatch({ type: 'GET_REPOS', repos })
  }
}

export const getUser = (userName) => {
  return async (dispatch) => {
    const { data: user } = await axios(`https://api.github.com/users/${userName}`)
    dispatch({ type: 'GET_USER', user })
  }
}

export const getReadme = (userName, repositoryName) => {
  return async (dispatch) => {
    const { data: readme } = await axios(
      `https://api.github.com/repos/${userName}/${repositoryName}/readme`,
      {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }
    )
    dispatch({ type: 'GET_README', readme })
  }
}
