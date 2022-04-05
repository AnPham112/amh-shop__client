import React from 'react'
import { Card, Row, Avatar, Text } from '@nextui-org/react'

function PolicyCard({ icon, name, description }) {
  return (
    // <div className="policy-card">
    //   <div className="policy-card__icon">
    //     <i className={icon}></i>
    //   </div>
    //   <div className="policy-card__info">
    //     <div className="policy-card__info__name">
    //       {name}
    //     </div>

    //     <div className="policy-card__info__description">
    //       This is where you would provide a summary of your blog aaaaaaaaaaaaaaaa cuoc song nay qua dang cho tao co the song cho den het cuoc doi vi the ngay trong hom nay hay song het minh vi ban than va gia dinh
    //     </div>
    //   </div>
    // </div>
    <Card>
      <Card.Header>
        <Row justify='center'>
          <Avatar
            squared
            icon={<i className={icon}></i>}
          />
        </Row>
      </Card.Header>
      <Card.Body>
        <Row justify='center'>
          <Text h4>{name}</Text>
        </Row>
        <Row justify='center'>
          <Text p className="policy-card__info__description">This is where you would provide a summary of your blog aaaaaaaaaaaaaaaa cuoc song nay qua dang cho tao co the song cho den het cuoc doi vi the ngay trong hom nay hay song het minh vi ban than va gia dinh</Text>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default PolicyCard