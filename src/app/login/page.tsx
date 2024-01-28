"use client"
import { useLoginMutation } from "../lib/features/login/loginSlice"

const Login: React.FC = () => {
  const [ login ] = useLoginMutation()

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    let user = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    await login(user)
  }

  return (
    <div className='w-full h-full grid place-items-center'>
      <form onSubmit={handleSubmit} action="" className='min-w-80 text-black min-h-20 flex items-center flex-col bg-slate-600 p-2 space-y-5'>
        <h2>Login</h2>
        <input 
          type="text" 
          className='w-full px-3 py-1 text-xl' 
          placeholder='Your name'
          />
        <input 
          type="password" 
          className='w-full px-3 py-1 text-xl' 
          placeholder='Your password'
        />
        <button className='bg-blue-600 px-4 py-2'>Send</button>
      </form>
    </div>
  )
}

export default Login
