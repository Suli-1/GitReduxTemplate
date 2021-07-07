import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Repos from './repos'
import Readme from './readme'
import Header from './header'
import SearchUser from './searchUser'
// eslint-disable-next-line import/named
import { getRepos, getUser, getReadme } from '../redux/reducers/data'

const Home = () => {
  const dispatch = useDispatch()
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    if (userName) {
      dispatch(getRepos(userName))
      dispatch(getUser(userName))
    }
    if (repositoryName) {
      dispatch(getReadme(userName, repositoryName))
    }
  }, [userName, repositoryName, dispatch])
  return (
    <>
      <Header />
      <SearchUser userName={userName} />
      <Route exact path="/:userName" component={() => <Repos userName={userName} />} />
      <Route exact path="/:userName/:repositoryName" component={() => <Readme />} />
    </>
  )
}

Home.propTypes = {}

export default Home
