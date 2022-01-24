import React, { useEffect } from 'react'
import { Button, Modal, Container, Row, Col, Image } from 'react-bootstrap'
import { ISoundDetailsModal } from '../models/models'
import ReactAudioPlayer from 'react-audio-player'
import { useStore } from '../../stores/rootStore'

interface IProps {
  name: string
  show: boolean
  icon: string
  onShow: (show: boolean) => void
}

const ItemModal: React.FC<IProps> = ({ show, icon, onShow, name }) => {
  //cloud service
  const { soundStore } = useStore()

  useEffect(() => {})

  // const URL = `https://res.cloudinary.com/dsi5cdwvo/video/upload/v1642883037/${props.image.name}}.mp3`
  const URL = ` `

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
                    <td>€12.22</td>
                  </tr>
                </table>
                <ReactAudioPlayer src={URL} controls />
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
