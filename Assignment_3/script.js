let token = document.getElementById("get_token")
token.onclick = async function()
{   let RESP = await fetch('http://localhost:12345/get_token');let res =  await RESP.text();
    var L_one = document.createElement('p')
    L_one.innerHTML="Token----->" + "    " + res ;
    document.getElementById("d1").appendChild(L_one);
}
let register = document.getElementById("Register")
register.onclick = async function() {
    var o = {
        "username" : String(document.getElementById("UserName").value),
        "data" : String(document.getElementById("Data").value),
        "token" : String(document.getElementById("Token").value),
    }
    let r1 = await fetch('http://localhost:12345/register' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(o)
    });
    console.log(r1);
    if (r1.ok) {
        alert("Registeration successful.");
    }
}
let d1= document.getElementById("AccessData");
d1.onclick =  async function() {
    var data_token = {
        "token" : String(document.getElementById("DataToken").value)
    }
    let r2 = await fetch('http://localhost:12345/get_data' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_token)
    })
    console.log(r2);
    if(r2.ok) {
        let L_two = document.createElement('p');
        let b = await r2.text();
        L_two.innerHTML = "Your data-" + "<br><br><br>" + b;
        document.getElementById("d2").appendChild(L_two);
        }
    }
    