import React from 'react'
import { Modal, Row, Text, Button } from '@nextui-org/react'

function NewModal({ open, onClose, onRemoveProduct }) {
  return (
    <Modal
      open={open}
      closeButton
      aria-labelledby="modal-title"
      onClose={onClose}
    >
      <Modal.Header>
        <Text>Do you want to delete this product?</Text>
      </Modal.Header>
      <Modal.Footer>
        <Row justify='space-between' align='center'>
          <Button auto onClick={onClose}>Close</Button>
          <Button auto onClick={onRemoveProduct}>Yes</Button>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default NewModal