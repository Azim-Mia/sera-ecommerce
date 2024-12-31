import Image from 'next/image';
const CartModuls = ()=>{
  const isCart =true;
  return (<div className="w-max absolute p-4 rounded-md shadow-[_0_3px_10px_rgb(0.0.0.2)] bg-white top-10 right-0 flex flex-center items-center">
  {!isCart ? (<div className=""><p>Cart is Empty</p>
  </div>):(<div className="flex gap-4">
  <Image src="/flower.jpg" alt="products" width={72} height={96} className="object-cover rounded-md"/>
<div className="flex flex-col justify-between w-full">
  {/*TOP*/}
  <div className=""></div>
   {/* TITLE*/}
   <div className="flex items-center justify-between gap-8">
   <h3 className="font-senibold">Product title</h3>
   <div className="p-2 bg-pink rounded-sm">599</div>
   </div>
    {/* DSC*/}
      <div className="text-sm text-gray">ableable</div>
     {/*BUTTOM */}
     <div className="flex justify-between items-center">
    <span className="bg-gray-light p-1 rounded-sm">Qnt. 2</span>
    <span className="bg-gray-light p-1 rounded-sm">Remove</span>
     </div>
     {/*BUTTOM */}
     <div>
     <div className="flex justify-between text-sm items-center">
     <span className="text-lama">Subtotal</span>
     <span className="text-blue">$1999</span>
     </div>
     <p className="text-sm text-gray mt-2 md-4">
     Shipping and taxes calculate is checkout
     </p>
     </div>
     <div className="flex justify-between text-sm">
     <button className="rounded-md py-1 px-2 ring-1 ring-gray">View Cart</button>
    <button className="rounded-md py-1 px-2 ring-1 ring-gray bg-black text-white">Checkout</button>
     </div>
</div>
  </div>)}
  </div>)
}
export default CartModuls;