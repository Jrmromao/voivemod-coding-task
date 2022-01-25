import React from 'react'
import { Button } from 'react-bootstrap'
import { useStore } from '../../stores/rootStore'

const LoadSounds = () => {
  const {
    soundStore: { submitSounds },
  } = useStore()

  return (
    <>
      <Button className="btn btn-success" onClick={submitSounds}>
        Load sounds!
      </Button>
    </>
  )
}

export default LoadSounds
