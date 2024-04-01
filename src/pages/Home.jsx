import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowid="1" title="Populer" fetchurl={requests.requestpopuler}/>
      <Row rowid="2" title="Top" fetchurl={requests.requesttop}/>
      <Row rowid="3" title="Tranding" fetchurl={requests.requesttranding}/>
      <Row rowid="4" title="UpComing" fetchurl={requests.requestupcoming}/>
    </div>
  )
}

export default Home