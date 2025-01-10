'use client';
import React,{useState,useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link';
const slides=[
  {
   id:1,
   title:"summer sale collections ",
   des:"Sale! Up to 30% Off!",
   img:"../assets/images/product_1.jpeg",
   url:"/",
   bg:"bg-gradient-to-r from-yellow to-pink",
  },
  {
  id:2,
   title:"summer sale collections ",
   des:"Sale! Up to 40% Off!",
   img:"../assets/images/product_2.jpeg",
   url:"/",
   bg:"bg-gradient-to-r from-yellow to-pink",
  },
  {
  id:3,
   title:"summer sale collections ",
   des:"Sale! Up to 50% Off!",
   img:"../assets/images/product_3.jpeg",
   url:"/",
   bg:"bg-gradient-to-r from-yellow to-pink",
  },
  {
  id:4,
   title:"summer sale collections ",
   des:"Sale! Up to 60% Off!",
   img:"../assets/images/product_4.jpeg",
   url:"/",
   bg:"bg-gradient-to-r from-yellow to-pink",
  },
    {
  id:5,
   title:"summer sale collections ",
   des:"Sale! Up to 70% Off!",
   img:"../assets/images/product_5.jpeg",
   url:"/",
   bg:"bg-gradient-to-r from-yellow to-pink",
  }
  ];
const Slider = ()=>{
  const [current, setCurrent] =useState(0)
  const [slideData, setSlideData] =useState(slides);
  useEffect(()=>{
  const setInvId =setInterval(()=>{
    setCurrent((prev)=>(prev === slideData.length -1 ? 0 : prev + 1));
  },3000);
  return ()=>clearInterval(setInvId)
  },[current]);
  return (<div className="h-[calc(100vh-40px)] overflow-hidden z-10">
  <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{transfrom:`translateX(-${current * 100}vw)`}}>
{slideData.map((slide)=><div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
{/*TEXT CONTEINER*/}
<div className="h-1/2 xl:w-1/2 xl:h-full sm:bottom-3 sm:pt-12 flex flex-col gap-8 items-center justify-center 2xl:gap-12 text-center ">
<h2 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{slide.des}</h2>
<h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-Bxt font-semibold">{slide.title}</h1>
<Link href={slide.url} className="rounded-md bg-black text-white p-1">Shop Now </Link> 
</div>
{/*IMAGE CONTEINER*/}
<div className="h-1/2 xl:w-1/2 xl:h-full relative">
<Image src ={slide.img} fill alt="prodcts" size="100%" className="object-cover sm:60%" />  
<div className="absolute text-center left-1/2 flex gap-4 sm:bottom-1 xs:bottom-1">
  {slideData.map((slide,index)=>(
  <div className={`w-4 h-4 sm:w-7 sm:h-7 md:w-7 md:h-7 rounded-full ring-2 bg-red cursor-pointer flex bt-0 ${current === index ? "scale-150":""}`} key={slide.id} onClick={()=>setCurrent(index)}>
  <div className="m-auto">{current === index && (<div className="w-[8px] h-[8px] sm:w-[16px] sm:h-[16px] flex justify-center items-center text-center cursor-pointer bg-black  rounded-full"></div>)}</div>
  </div>
  ))}
</div>
</div>
  </div>)}
  </div>
  </div>)
}
export default Slider;