import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Helmet from '../../components/Helmet'
import HeroSlider from '../../components/HeroSlider'

import heroSliderData from '../../assets/fake-data/hero-slider'

function Home() {
  return (
    <Helmet title="Home">
      {/* Slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={6000}
      />
      {/* End slider */}

    </Helmet>
  )
}

export default Home
