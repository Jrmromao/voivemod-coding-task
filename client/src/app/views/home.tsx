import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ItemContainer from '../components/itemContainer'
import MyNavbar from '../components/myNavbar'
import { useStore } from '../../stores/rootStore'
import LoadSounds from '../components/loadSounds'
import { observer } from "mobx-react-lite";
interface IProps {}

const Home: React.FC<IProps> = ({}) => {
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
        {soundList.length > 0 ? (
          <ItemContainer soundsList={soundList} />
        ) : (
          <LoadSounds />
        )}
      </Container>
    </div>
  )
}

export default observer(Home)
