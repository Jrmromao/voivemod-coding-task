import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemModal from './ItemModal'

// import ''
interface IProps {
  icon: string
  name: string
  id: string
}

const ItemCard: React.FC<IProps> = ({ name, icon, id }) => {
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    console.log('running...')
  }, [])

  return (
    <div>
      <ItemModal
        show={modalShow}
        icon={icon}
        name={name}
        onShow={() => setModalShow(!modalShow)}
      />
      <Card style={{ width: '18rem' }}>
        <Card.Title>{name}</Card.Title>
        <Card.Img
          variant="top"
          src={require(`../../assets/images/sound-thumbnail/${icon}`)}
        />
        <Card.Footer>
          <Button
            size="lg"
            className="btn btn-primary w-100"
            variant="success"
            onClick={() => setModalShow(!modalShow)}
          >
            View
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default ItemCard
