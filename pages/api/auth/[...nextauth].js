import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from '../../../models/user'
import bcrypt from 'bcrypt'
import { validateAllOnce } from "../../../utils/common"
export default nextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                // const res = await fetch("/your/endpoint", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()
                try{ const { email, password } = credentials;
                console.log({ email, password })
                validateAllOnce({email,password})
                const user = await User.findOne({ email }).exec()
                if(! user){
                throw new Error('Something went wrong') 
                }
                const userDoc= user._doc;
                const isMatched= await bcrypt.compare(password,userDoc.password)
                console.log({isMatched})

                // If no error and we have user data, return it
                if (user && isMatched) {
                    delete userDoc.password
                    return userDoc
                } else {
                    // Return null if user data could not be retrieved
                    throw new Error('Email or Password Incorrect...!')
                }

                }catch(error){
                throw new Error(error)  
                }
               
            }
        })
    ],
    callbacks: {
    async session({ session, user }) {
        console.log('session',{session, user})
        if(user && user.id){
            session.user.id= user.id
        }
    return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
        console.log('jwt',{token, user})
        if(user && user._id){
            token.id= user._id
        }
    return token
    }

}
})