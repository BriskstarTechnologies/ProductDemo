import AppConstant from "../../App/utils/AppConstant";

//Item List API
export async function listApi() {
        var  response = await fetch(AppConstant.API_ITEMS_LIST);
        var json = await response.json(); 
       
        return json;
}

//ProductList API
export async function productListApi() {
    var  response = await fetch(AppConstant.API_PRODUCT_LIST);
    var json = await response.json(); 
       return json;
}
