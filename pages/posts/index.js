

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/5')
  const posts = await res.json()
  console.log('data')

  return {
    props: { posts: posts || null }, // will be passed to the page component as props
  }
}


const Posts = ({ posts }) => {
  return (
    <div>
      <div >
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
      </div>
    </div>
  )
}
export default Posts

