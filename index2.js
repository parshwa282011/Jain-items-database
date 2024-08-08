function check(){
    var search = request.value;
    window.location.replace('?' + search);
}
function reqListener() {
    console.log(this.responseText);
}

function error(){
    console.log(this.error)
}
function postData(query){
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.addEventListener("error",error)
    req.open("GET", "https://ccb9ccaa-640d-44a7-bf96-4ef3ac5bba3c-00-38vxd3ietij3j.worf.replit.dev/?data="+query);
    req.send();
}
function sendPost(){
    var search = window.location.href.split("?")[1];
    postData(JSON.stringify({"itemToResearch":search}));
}