import React from 'react'
import { Modal, Row, Text, Button } from '@nextui-org/react'

function NewModal({ open, onClose, title, onDeleteProduct, productId }) {
  return (
    <Modal
      open={open}
      closeButton
      aria-labelledby="modal-title"
      onClose={onClose}
    >
      <Modal.Header>
        <Text>{title}</Text>
      </Modal.Header>
      <Modal.Footer>
        <Row justify='space-between' align='center'>
          <Button auto onClick={onClose}>Close</Button>
          <Button auto onClick={() => onDeleteProduct(productId)}>Yes</Button>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default NewModal