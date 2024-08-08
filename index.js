import {PageType} from "./enum.js";
var search = window.location.href.split("?")[1];
console.log(search);
function postData(query){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ccb9ccaa-640d-44a7-bf96-4ef3ac5bba3c-00-38vxd3ietij3j.worf.replit.dev:8080/");
    //xhr.send(JSON.stringify(query))
    xhr.responseType = "text"
    xhr.onload = (e) => {
        const text = req.response; // not responseText
        console.log(text)
        console.log(e);
    };
}
function getData(){
    fetch("data.json").then((response) => {
        return response;
    })
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
    //var dat = getData();
    //var data = searchData(search ,dat);
    //if (data == "not Found"){
    //    pagetype = PageType["NotFoundPage"];
    //} else if (typeof(data) == typeof([])){
    //    pagetype = PageType["DoubleFoundPage"]
    //}
}
if (pagetype == PageType["NotFoundPage"]){
    var output = document.getElementById("output-area");
    output.innerHTML = "<div class=\"output\"><div>Sorry No data found for this yet or invalid</div><button onclick=\"sendPost()\">Ask to research and add</button></div>"
}
postData("hi");