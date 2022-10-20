import {defineStore} from 'pinia'
import{productInter}from "../assets/json/product"
import {useProductStore} from "./index"
import {ref} from "vue"

type Icart = {
    quantity:number
    size:string
    // totalC:number
    // totalP:number
} & Omit<productInter,'inventory'>

export const useCarStore = defineStore("cart",{
state:()=>({
   cartList:[] as Icart[],
    
}),
getters:{
    totalCount(state){
        return state.cartList.reduce((total,item)=>{
            return total += item.quantity
        },0)
        
    },
    totalPrice(state){
        return state.cartList.reduce((total,item)=>{
            return total += item.quantity*item.price
    },0)
    
},
    


},
actions:{
    addCart(product:productInter){
         //引入商品的數量
        const productStore =useProductStore()
        
        //庫存小於1不能加入購物車
        if(product.inventory<2){
            alert("庫存不夠")
            return  
        }else if(productStore.size===""){
            alert("請選擇size")
            return
        }else if(productStore.count===0){
            alert("請選擇數量")
            return
        }else if(productStore.count>10){
            alert("最多只能訂購10件")
            return
        }else if(productStore.count>product.inventory){
            alert("超過庫存數")
            return
        }
        //判斷商品是否相同
        const isProduct = this.cartList.find(item=> item.name === product.name && item.size===productStore.size)
        if(isProduct){
            //若商品一樣,直接加上去
            isProduct.quantity =isProduct.quantity+ productStore.count
            alert("數量增加成功")
        }else{
            //如果是新商品,新增在我的購物車陣列裡
            alert("新增商品成功")
            this.cartList.push({
                title:product.title,
                img:product.img,
                name:product.name,
                price:product.price,
                oldPrice:product.oldPrice,
                progress:product.progress,
                quantity:productStore.count,
                size:productStore.size,
                
        })
    }
        //最後一個步驟 執行庫存減少
        productStore.decrement(product)

        //存至local
        
        localStorage.setItem("cartListInfo", JSON.stringify(this.cartList));
        localStorage.setItem("totalP", JSON.stringify(this.totalPrice));

        // if (localStorage.getItem('cartListInfo') !== null) {
        //    this.aaa = JSON.parse(localStorage.getItem('cartListInfo')!);
        //   } else {
        //     return;
        //   }
    },
    //清理購物車
    clearCart(){
        this.cartList = []
        alert("結算成功")
    }
}
})