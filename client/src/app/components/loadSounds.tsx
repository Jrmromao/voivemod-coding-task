import React from 'react'
import { Button } from 'react-bootstrap'
import { useStore } from '../../stores/rootStore'

const loadSounds = () => {
  const {
    soundStore: { submit },
  } = useStore()

  return (
    <>
      <Button className="btn btn-success" onClick={submit}>
        Load the list of sounds!
      </Button>
    </>
  )
}

export default loadSounds
