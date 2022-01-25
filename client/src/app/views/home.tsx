import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ItemContainer from '../components/itemContainer'
import MyNavbar from '../components/myNavbar'
import { useStore } from '../../stores/rootStore'
import { observer } from 'mobx-react-lite'

const Home: React.FC = () => {
  const {
    soundStore: { getAll, soundList },
  } = useStore()

  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <div>
      <MyNavbar />

      <Container className="main-container">
        <ItemContainer soundsList={soundList} />
      </Container>
    </div>
  )
}

export default observer(Home)
