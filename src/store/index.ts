import { defineStore } from "pinia";
import{product,productInter}from "../assets/json/product"
// import{computed,reactive,ref}from "vue"



export const useProductStore = defineStore("product",{
state:()=>({
    productList:[] as productInter[],
    count:0,
    size:"",
}),

getters:{},
actions:{
    //獲得商品資料
    getProduct(){
        this.productList = product
    },addCount(){
        this.count++
    },
    redCount(){
        this.count--
    },
    //減少庫存
    decrement(product:productInter){
        const isProduct = this.productList.find(item=> item.name===product.name)

        //庫存
        if(isProduct){
            isProduct.inventory=isProduct.inventory-this.count
        }
        localStorage.setItem("inventory", JSON.stringify(isProduct));
        
        
    
    },

    

    //size
    handleUpdateValue(value:string, option:string) {
        this.size=option
        console.log(value, option);
        
    }
      
}







})