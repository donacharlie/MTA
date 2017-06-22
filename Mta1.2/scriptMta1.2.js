var name = document.getElementsByName(firstName)
function myFunction(){
    if(sessionStorage){
        sessionStorage.setItem("firstName", name);
        redirectValues();

    }
    else {
        alert("Sorry, your browser do not support session storage.");
    }
}

function redirectValues(){
            if(sessionStorage){
                var contact = sessionStorage.getItem("firstName");
                document.getElementById("valuesRedirected").innerHtml= contact;
            }
            else{
                alert("Sorry, your browser do not support session storage.");
            }
        }