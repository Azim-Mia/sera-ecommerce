'use client';
import React,{useState} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import CartModuls from '@/components/CartModuls';
const NavIcon =()=>{
  const [isProfileOpen, serIsProfileOpen] = useState(false);
  const [isCartOpen, serIsCartOpen] = useState(false);
  const router =  useRouter();
const isLoggedIn = false;
const handleProfile =()=>{
  if(!isLoggedIn){
    router.push('/login');
  }
  serIsProfileOpen((prev)=>!prev);
}
  return (<>
  <div className="flex gap-4 lg:gap-6">
   <div className="relative">
    <Image src="/cart_2.png" onClick={()=>serIsCartOpen((prev)=>!prev)} alt ="logo" width={28} height={28} />
    <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-sm text-white flex justify-center items-center">2</div>
   </div>
    {isCartOpen && <CartModuls />}
   <Image src="/notification.png" alt ="logo" width={28} height={28} />
 <Image src="/user.png" onClick={handleProfile} alt ="logo" width={28} height={28} className="cursor-pointer" />
  {isProfileOpen && (<div className="absolute flex flex-col  bg-yellow gap-4 mt-10 right-0 p-4 rounded-md shadow-[0_3px_10px_rgb(0.0.0.2)] z-20">
 <Link href="/profile" className="cursor-pointer hover:border-b-2">Profile</Link>
<Link href="/logout" className="cursor-pointer hover:border-b-2">Logout</Link>
 </div>)}
  </div>
  </>)
}
export default NavIcon;