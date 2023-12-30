import { create } from 'zustand'
import secure from '../security/secure'
import api from '../api/restapi'
const useStore = create((set) => ({
  // Initial state

  initialized : false,
  init:()=>{
    const credentials = secure.get('credentials')
    if (credentials) {
      try {
        api({
          method: 'post',
          url: 'api/login/',
          data: {
            username: credentials.username,
            password: credentials.password
          }
        })
        if(response.status!=200){
          throw 'Authentication failed'
        }
        const user=response.data.user
        set({initialized:true,isauthenticated:true,user:user})
        return 
      } catch (error) { 
      console.log('useGlobalStore.init(): ',error)
      }
    }
    set({initialized:true})
  },


  // Authentication
    isauthenticated: false,
  user:{},
  login:(credentials,user)=>{
    secure.set('credentials',credentials)
    set({isauthenticated:true,user:user})
  },
  logout:(user)=>{
    secure.remove('user',user)
        set({isauthenticated:false,user:{}})
    }

}))

export default useStore