import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemModal from './ItemModal'

// import ''
interface IProps {
  icon: string
  name: string
  id: string
  price: number
}

const ItemCard: React.FC<IProps> = ({ name, icon, id, price }) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div>
      <ItemModal
        id={id}
        name={name}
        icon={icon}
        show={modalShow}
        price={price}
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
