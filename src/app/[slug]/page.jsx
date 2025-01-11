import productDatas from '@/lips/productDatas';
const SlugPage =async({params})=>{
 const id =(await params).slug;
  return (<>
<p>{id}</p>
  </>)
}
export default SlugPage;
  //This page is modify static optimise
  export async function generateStaticParams(){
    const products =await productDatas()
    return products.map((data)=>({
      slug:data.id.toString(),
    }));
  };
