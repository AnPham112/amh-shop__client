import React from 'react'

function PolicyCard({ icon, name, description }) {
  return (
    <div className="policy-card">
      <div className="policy-card__icon">
        <i className={icon}></i>
      </div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">
          {name}
        </div>

        <div className="policy-card__info__description">
          This is where you would provide a summary of your blog aaaaaaaaaaaaaaaa cuoc song nay qua dang cho tao co the song cho den het cuoc doi vi the ngay trong hom nay hay song het minh vi ban than va gia dinh
        </div>

      </div>
    </div>
  )
}

export default PolicyCard