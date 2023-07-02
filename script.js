//---------saving in local storage(first add savetolocalstorage(event)in form likein html and do below steps) 
function savetolocalstorage(event)
{
    //to prevent default behaviour
event.preventDefault()
//
const name=event.target.name.value
const email=event.target.email.value
const number=event.target.number.value

// localStorage.setItem("name",name)
// localStorage.setItem("email",email)
// localStorage.setItem("number",number)

//instead of writing like the above three lines,we write below singleline
var obj={ name,
    email,
     number}

// ----------storing as object(one line)in localstorage(this is for single user)
//localStorage.setItem("obj",JSON.stringify(obj))


//for multiple user ,write above one line same and change key only like below(we can change name or email or number as key)
localStorage.setItem(obj.name,JSON.stringify(obj))

//we have to show details on screen for that first declare like below

showUserOnScreen(obj)

//write function to display details on screen

function showUserOnScreen(obj){
    //grab parent element 
    const parentElement=document.getElementById('users')
//creating li (child elem)to display on screen
    const childElem=document.createElement('li')
    childElem.innerHTML=obj.name+ " - " +obj.email + " - " +obj.number//content will be like this  

//creating delete btn
 const deletebtn=document.createElement("input");
 deletebtn.type="button";
 deletebtn.value="delete";
 //function to delete in ls and screen
 deletebtn.onclick =()=>{
     localStorage.removeItem(obj.name)//ls
     parentElement.removeChild(childElem)//screen
 }

 //creating edit button to edit

 const editbtn=document.createElement("input");
 editbtn.type="button";
 editbtn.value="edit";
 editbtn.onclick =()=>{
    localStorage.removeItem(obj.name)//ls
    parentElement.removeChild(childElem)//screen
    document.getElementById('nameInputTag').value=obj.name
    document.getElementById('emailInputTag').value=obj.email
    document.getElementById('numberInputTag').value=obj.number
}


//appending all

 childElem.appendChild(deletebtn)//appending delebtn to childelem
 childElem.appendChild(editbtn)
 parentElement.appendChild(childElem)//appending childelem to parent

}
}