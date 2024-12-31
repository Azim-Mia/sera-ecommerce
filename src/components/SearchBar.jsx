'use client';
import React,{useState, useRef} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
const SearchBar = ()=>{
  const searchValue = useRef();
  const router = useRouter();
  const handleSearch =(e)=>{
    e.preventDefault();
  const name = searchValue.current.value;
  if(name){
    router.push(`/products?name=${name}`);
  }
  }
  return (<>
  <form onSubmit={handleSearch} className="flex">
  <input type="text" ref={searchValue} name="search" placeholder="search products" className="text-center rounded-md cursor-pointer"/>
    <button type="submit"><Image src ="/search.png" alt="logo" width={28} height={28} /></button>
    </form>
  </>)
}
export default SearchBar;