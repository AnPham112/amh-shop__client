import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AngleLeft from '../assets/icons/angle-left-solid.svg'
import AngleRight from '../assets/icons/angle-right-solid.svg'
import Button from './Button';

function HeroSlider(props) {
  const { data, control } = props;
  const timeOut = props.timeOut ? props.timeOut : 3000
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(
    () => {
      const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
      setActiveSlide(index)
    },
    [activeSlide, data],
  )

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
    setActiveSlide(index)
  }


  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        nextSlide()
      }, timeOut)
      return () => {
        clearInterval(slideAuto)
      }
    }
  }, [props.auto, nextSlide, timeOut])
  return (
    <div className="hero-slider">
      {
        data.map((item, index) => (
          <HeroSliderItem key={index} item={item} active={index === activeSlide} />
        ))
      }
      {
        control ? (
          <div className="hero-slider__control">
            <div className="hero-slider__control__item" onClick={prevSlide}>
              <img src={AngleLeft} alt="" width={20} />
            </div>
            <div className="hero-slider__control__item">
              <div className="index">
                {activeSlide + 1}/{data.length}
              </div>
            </div>
            <div className="hero-slider__control__item" onClick={nextSlide}>
              <img src={AngleRight} alt="" width={20} />
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

function HeroSliderItem({ item, active }) {
  return (
    <div className={`hero-slider__item ${active ? 'active' : ''}`}>
      <div className="hero-slider__item__info">
        <div className="hero-slider__item__info__title">
          <span>{item.title}</span>
        </div>
        <div className="hero-slider__item__info__description">
          <span>{item.description}</span>
        </div>
        <div className="hero-slider__item__info__btn">
          <Link to={item.path}>
            <Button
              icon="cart-plus"
              animate={true}
            >
              Shop now
            </Button>
          </Link>
        </div>
      </div>
      <div className="hero-slider__item__image">
        <div className={`shape shape--${item.color}`}></div>
        <img src={item.img} alt={item.img} />
      </div>
    </div>
  )

}

export default HeroSlider