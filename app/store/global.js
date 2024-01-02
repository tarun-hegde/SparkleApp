import { create } from 'zustand'
import secure from '../security/secure'
import api from '../api/restapi'
import utils from '../util/utils'
const useStore = create((set) => ({
  // Initial state

  initialized : false,
  init:()=>{
    const credentials = secure.get('credentials')
    if (credentials) {
      try {
        const response=api({
          method: 'post',
          url: 'api/login/',
          data: {
            username: credentials.username,
            password: credentials.password
          }
        })
        if(response.status!=200){
          throw ' failed'
        }
        const user=response.data.user
        const tokens=response.data.tokens

        secure.set('tokens',tokens)
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
  login:(credentials,user,tokens)=>{
    secure.set('credentials',credentials)
    secure.set('tokens',tokens)
    set({isauthenticated:true,user:user})
  },
  logout:(user)=>{
    secure.remove('user',user)
        set({isauthenticated:false,user:{}})
    },

  //Websocket
  socket :null,

  socketConnect: (socket) => {
    const tokens = secure.get('tokens')
    
    utils.log('TOKENS',tokens)
  },

  socketDisconnect: () => {
    set({socket:null})
  },


}))

export default useStore