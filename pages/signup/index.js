import { useState } from "react"
import { signup } from "../../client/request"
import { useRouter } from "next/router"
const Signup = props => {
  const router= useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const signupHandler = async (e) => {
    e.preventDefault();
    const payload = { name, email, password }
    const result = await signup(payload)
    console.log(result)
    if(result.hasError){
        setErrorMessage(result.errorMessage)
    }else{
      console.log(result)
      setErrorMessage(null)
      setName('')
      setEmail('')
      setPassword('')
      router.replace('/login')
    }
  }
  return (
    <main className="form-signin w-100 m-auto">
      <form style={{
        margin: '50px 0'
      }} onSubmit={signupHandler}>
        {/* <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        {/* {errorMessage && (<h>{errorMessage}</h>)} */}
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>
  )
}
export default Signup