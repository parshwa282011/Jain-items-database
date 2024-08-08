import {PageType} from "./enum.js";
var search = window.location.href.split("?")[1];
async function getData(){
    return (await fetch("data.json")).json()
}
function searchData(query,data){
    try{
        var brand = data["brands"][query];
    } catch {
        var brand = null;
    }
    try{
        var item = data["item"][query];
    } catch {
        var item = null;
    }
    if (brand && item){
        return [brand,item]
    } else if (brand && !item){
        return brand
    }else if (!brand && item){
        return item
    } else {
        return "not Found"
    }
}
var pagetype;
if (search == undefined){
    pagetype = PageType["StartPage"];
} else {
    pagetype = PageType["ItemPage"]
}
if (pagetype == PageType["ItemPage"]){
    var dat = await getData();
    var data = searchData(search.toLowerCase() ,dat);
    if (data == "not Found"){
        pagetype = PageType["NotFoundPage"];
    } else if (typeof(data[0]) == typeof([])){
        pagetype = PageType["DoubleFoundPage"]
    } else if (data["type"] == "brand"){
        data = Object.assign({}, data, dat["item"][data["product"]])
    }
}
if (search != undefined){
    pagetype
}
if (pagetype == PageType["NotFoundPage"]){
    var output = document.getElementById("output-area");
    output.innerHTML = "<div class=\"output\"><div>Sorry No data found for this yet or invalid</div><button id=\"output\" onclick=\"sendPost()\">Ask to research and add</button></div>"
} else if(pagetype == PageType["ItemPage"]){
    var output = document.getElementById("output-area");
    output.innerHTML = "<div class=\"output\"><div>Item:<br>" + data["item"] + "</div><div>Safe to use brands:<br>" + data["safe"] + "</div><div>Not Safe to use brands:<br>"+ data["unsafe"] +"</div><br>if the brand you are looking for isn't shown then instead put the brand as request and click button for us to reasearch that brand</div>"
}