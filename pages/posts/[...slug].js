import { useRouter } from "next/router"
const FullPost = ()=>{
    const router=useRouter()
    //  const postId=router.query.postId
    console.log(router)
    return (
        <div>
           
        <h1>FullPost </h1>
        </div>
    )
}

export default FullPost