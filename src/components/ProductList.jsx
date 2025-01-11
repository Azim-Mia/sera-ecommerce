import Link from 'next/link';
import Image from 'next/image';
import productDatas from '@/lips/productDatas';
const ProductLists = ()=>{
  const productData = productDatas();
  return (<div className = "mt-10 mb-2 flex gap-x-8 gap-y-16 justify-between flex-wrap">
 {productData.map((data)=><Link href="/list" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" key={data.id}>
  <div className="relative h-96 w-full">
    <Image src={data.img} alt="product" fill size="25vw" className="absolute object-cover rounded-sm hover:opacity-0 transition-opacity  easy duration-500" />
  </div>
  <div className="flex justify-between">
  <span className="font-medum">Product Name</span>
    <span className="font-semibold">Price: $**</span>
  </div>
  <div className="text-sm text-gray">describtion</div>
  <button className="rounded-2xl ring-1 ring-lama text-lame py-2 px-4 hover:bg-lama hover:text-white">Add-to-cart</button>
  </Link>
 )};
  </div>)
}
export default ProductLists;