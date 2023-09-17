var main = document.getElementById("main");

var navbar = document.createElement("div");
navbar.setAttribute("id","navbar");
main.appendChild(navbar);
var admin = document.createElement("span");
admin.setAttribute("id","admin");
admin.innerHTML = "admin";
navbar.appendChild(admin);
var login = document.createElement("button");
login.setAttribute("id","login");
login.innerHTML = "Login";
navbar.appendChild(login);

var row = document.createElement("div");
row.setAttribute("class","row");
row.style.marginTop = "40px"
main.appendChild(row);

var space1 = document.createElement("div");
space1.setAttribute("class","col-xxl-3 col-xl-3 col-lg-3 col-md-3");
space1.setAttribute("id","space1");
row.appendChild(space1);

var container = document.createElement("div");
container.setAttribute("id","contain");
container.setAttribute("class","col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12")
row.appendChild(container);

var space2 = document.createElement("div");
space1.setAttribute("class","col-xxl-3 col-xl-3 col-lg-3 col-md-3");
space2.setAttribute("id","space2");
row.appendChild(space2)


var head = document.createElement("div");
head.setAttribute("id","head");
container.appendChild(head);
var h2 = document.createElement("h1");
h2.setAttribute("id","h1")
h2.innerHTML = "Todo Lists";
head.appendChild(h2);

var todo = document.createElement("div");
todo.setAttribute("id","todo");
todo.setAttribute("class","row")
container.appendChild(todo);
var input_1 = document.createElement("input");
input_1.setAttribute("id","input-1");
input_1.setAttribute("class","col-8");
input_1.setAttribute("type","text");
input_1.setAttribute("placeholder","Enter prompt here");    
todo.appendChild(input_1);

var btn_1 = document.createElement("button");
btn_1.setAttribute("id","btn-1");
btn_1.setAttribute("class","col-2");
btn_1.setAttribute("onclick","addData()")
btn_1.innerHTML = "Add";
todo.appendChild(btn_1);

var btn_2 = document.createElement("button");
btn_2.setAttribute("id","btn-2");
btn_2.setAttribute("class","col-2");
btn_2.setAttribute("onclick","deleteall()")
btn_2.innerHTML = "DeleteAll";
todo.appendChild(btn_2);

var message = document.createElement("p");
message.setAttribute("id","message");
todo.appendChild(message);

var all = document.createElement("div");
all.setAttribute("id","allists");
container.appendChild(all);

var ul = document.createElement("ul");
ul.type = "none";
all.appendChild(ul);
function addData(){
    if(input_1.value === ""){
        message.innerHTML = "Please enter any value";
        message.style.display = "block";
        message.style.color = "red";
        input_1.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    }else{
        var li = document.createElement("li");
        li.setAttribute("id","list-1")
        li.innerHTML = input_1.value;
        ul.appendChild(li);

        var edit = document.createElement("button");
        var editimg = document.createElement("img");
        editimg.setAttribute("src","./images/edit.png");
        editimg.setAttribute("class","editImg");
        edit.appendChild(editimg);
        edit.setAttribute("class","btn-edit");
        edit.setAttribute("onclick","edit()");
        li.appendChild(edit);

        edit.addEventListener("click",function(){
            var update = prompt();  
            li.innerHTML = update;
        })

        var dlt = document.createElement("button");
        // dlt.innerHTML = "delete";
        var dltimg = document.createElement("img");
        dltimg.setAttribute("src","./images/bin.png");
        dltimg.setAttribute("class","dltImg");
        dlt.appendChild(dltimg);
        dlt.setAttribute("class","btn-delete");
        dlt.setAttribute("onclick","dlt()");
        li.appendChild(dlt);

        dlt.addEventListener("click",function(){
            li.style.display = "none";
        })

    
        message.style.display = "block";
        message.innerHTML = "Success";
        message.style.color = "limegreen";
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
        input_1.value = "";
    }
}


function deleteall(){
    ul.innerHTML = "";   
   }


