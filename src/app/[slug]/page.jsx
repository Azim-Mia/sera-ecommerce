const SlugPage =async({params})=>{
 const id =(await params).slug;
  return (<>
<p>{id}</p>
  </>)
}
export default SlugPage;