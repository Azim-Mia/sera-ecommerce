import React from 'react';
import Image from 'next/image';
import product_1 from '@/assets/images/product_1.jpeg'
export default async function ListPage(){
  return (<>
  <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  {/*CAMPAGN*/}
  <div className="">
  <div className=""></div>
  <div className="">
  <Image src={product_1} fill alt="image" size={28} />
  </div>
  </div>
  </div>
  </>)
}