import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products:[]
}



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  //reducers属性是一个包含多个Reducer函数的对象。每个Reducer函数都对应一个特定的Action类型，并描述了如何更新状态。
  reducers: {
    addToCart: (state, action) => {
      //如果现在的状态中的products中，有item是满足，item的id和我们即将进行的action的id是一样的话。。。
      //这里item指代cart里面的内容，也就是state.product，我们对此的初始值为[]
      //action.payload是我们给予的一个js对象，比如在product中我们对addToCard的dispatch传入action，同时这边设置了action的内容，也就是reducer
        const item = state.products.find(item => item.id === action.payload.id)
        if(item){
            item.quantity += action.payload.quantity
        }else{
            state.products.push(action.payload);
        }
    },
    removeItem: (state, action) => {
        state.products=state.products.filter(item => item.id !== action.payload)
    },
    resetCart: (state) => {
        state.products= []
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer