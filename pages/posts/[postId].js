import { useRouter } from "next/router"

export function getStaticPaths(){
    return{
        paths:[
        {
            params:{
                postId:'5'
            }
        }
    ], fallback:true
    }
    
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const posts = await res.json()
  console.log('data1')

  return {
    props: { post:posts || null },  revalidate:3
     // will be passed to the page component as props
  }
}
const PostDetails = ({post})=>{
    const router=useRouter()
    // const postId=router.query.postId

    if(router.isFallback){
        return <h1>Loading...</h1>
    }
    return (
        <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </div>
    )
}

export default PostDetails