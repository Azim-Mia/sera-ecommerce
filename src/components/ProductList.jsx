import Link from 'next/link';
import Image from 'next/image';
const ProductLists = ()=>{
  return (<div className = "flex gap-x-8 gap-y-16 justify-between flex-wrap">
  <Link href="/list" className="relative w-full h-80">
  <Image src="/product_2.jpeg" alt="product" fill size="25vw" /> 
  </Link>
  </div>)
}
export default ProductLists;