import React from 'react'
import {client, clinet} from '../lib/client';

import {Product, FooterBanner,HeroBanner}
from '../components';

const Home = ({products, bannerData}) => (

  <div>
    <HeroBanner heroBanner = {bannerData.length && bannerData[0]} /> 

    <div className="products-heading">
      <h2> MVP Headset and Speakers</h2>
      <p> Speakers of Many Variations</p>
    </div>

    <div className= "products-container">
      {products?.map((product) => product.name) }
    </div>

    <FooterBanner />
  
  </div>
  
);

export const getServerSideProps = async() => {
  const query ='*[_type =="product"]';
  const products = await client.fetch(query);

  const bannerQuery ='*[_type =="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData }
  }
}

export default Home;