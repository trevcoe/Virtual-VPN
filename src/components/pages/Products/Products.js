import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data'
import Pricing from '../../Pricing';
function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne } />
    </>
  )
}

export default Products;