import { useRouter } from "next/router"
const User = ()=>{
    const router=useRouter()
    const username=router.query.username
    return (
        <div>
           
        <h1>User -{username}</h1>
        </div>
    )
}

export default User