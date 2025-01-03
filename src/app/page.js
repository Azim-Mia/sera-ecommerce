import Image from "next/image";
import Slider from '@/components/Slider';
import ProductList  from '@/components/ProductList'
export default function HomePage() {
  return (<>
  <Slider />
  <div className="mt-10 xl:mt-24 px-4 bg-gray-light sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <h1>Features Products</h1>
  <ProductList />
  </div>
  </>);
}
