import {PageType} from "./enum";
search = window.location.href.split("?")[1];
console.log(search);
function getData(query){
    data = {}
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    xhr.send({"request":query});
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.response);
            data = xhr.response;
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    return data
}
if (search == undefined){
    pagetype = PageType["StartPage"];
} else {
    pagetype = PageType["ItemPage"]

}