export const getServerSideProps=async({query})=>{

    const u= await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
    const user= await u.json()

    return{
        props:{
            data:user || null
        }
    }
}

const Profile=({data})=>{

    if(!Object.keys(data).length){
        return <h1>Invalid User</h1>
    }
    return(
        <div>
            <h1>{data.name}</h1>
            <h3>{data.email}</h3>
        </div>
    )
}
export default Profile