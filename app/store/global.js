import { create } from 'zustand'

const useStore = create((set) => ({
    isauthenticated: false,
  user:{},
  login:(user)=>{
    set({isauthenticated:true,user:user})
  },
  logout:()=>{
        set({isauthenticated:false,user:{}})
    }

}))

export default useStore