import React from 'react'
import { Button, Modal, Container, Row, Col, Image } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player'
import { useStore } from '../../stores/rootStore'

interface IProps {
  name: string
  show: boolean
  icon: string
  id: string
  price: number
  onShow: (show: boolean) => void
}

const ItemModal: React.FC<IProps> = ({
  id,
  show,
  icon,
  onShow,
  name,
  price,
}) => {
  //cloud service
  const {
    soundStore: { play },
  } = useStore()

  const URL = `https://res.cloudinary.com/dsi5cdwvo/video/upload/v1643050300/sounds/${name.toLowerCase()}.mp3`

  return (
    <div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col className="col-3">
                <Image
                  src={require(`../../assets/images/sound-thumbnail/${icon}`)}
                  thumbnail={true}
                />
              </Col>
              <Col>
                <table>
                  <tr>
                    <td>
                      <strong>Price</strong>:
                    </td>
                    <td>€{price.toFixed(2)}</td>
                  </tr>
                </table>
                <ReactAudioPlayer src={URL} controls onPlay={() => play(id)} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onShow(!show)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ItemModal
