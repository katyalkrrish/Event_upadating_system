let logout= document.querySelector("#logout");

let accessvalue=JSON.parse(localStorage.getItem('Key'))||[];

let login= document.querySelector("#login");




function disp(){
    if(accessvalue==0){
        logout.className="disp";
    }else {
        login.className="disp";   
    }
}

logout.addEventListener('click',()=>{
    localStorage.removeItem('Key');
    localStorage.setItem('Key',0);
    disp();
})
disp();






