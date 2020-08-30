function owner_redirect() {
    window.location.replace("./owner/owner.html")
}

function client_redirect() {
    window.location.replace("./client/client.html")
}
    
function userType_redirect(id){
    if (id=="customRadio1") {
        owner_redirect()
    } else {
        client_redirect()
    }
}