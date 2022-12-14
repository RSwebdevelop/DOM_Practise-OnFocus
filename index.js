// const btn = document.getElementById('simple-button');
// const exampleDiv = document.getElementById('example-div');
const showkey = document.getElementById('show-key')
// const thenum = document.getElementById('the-number')

// document.addEventListener('mousemove', (event)=> {
//     const {screenX} = event;
//     exampleDiv.style.width = `${screenX}px`; 
// })




// KEY Pressed

// document.addEventListener('keypress', (event)=> {
//     console.log(event)
//     const key = event.key;
//     const isShift = event.shiftKey
//     console.log("pressed")
//     if(isShift){
//         showkey.innerText += key.toUpperCase();
//     }
//     else{
//         showkey.innerText += key
//     }
// })

// document.addEventListener('keyup', ()=> {
//     console.log("released")
//     showkey.innerText = ""
// })





// let counter=0;

//  thenum.innerText = counter;

// function incrementby1(){
//     counter++;
//     thenum.innerText = counter;
// }

// btn.addEventListener('click', incrementby1)

// exampleDiv.addEventListener('mouseover',()=> {counter=0;
//     thenum.innerText = counter;})
// exampleDiv.addEventListener('mouseout', ()=> {if(counter==0){
//     counter=-69
// }else{
//     counter= -counter
// }
// thenum.innerText = counter;
// })

// btn.addEventListener('mouseup', ()=> console.log('Button released'));
// btn.addEventListener('mousedown', ()=> console.log('Button pressed'));




// Focus

const nameInput= document.getElementById('name-input')
const usrname= document.getElementById('user-name')
const emailInput= document.getElementById('email-input')
const focusName= document.getElementById('focus-name')
const focusEmail= document.getElementById('focus-email')
const whatFocus= document.getElementById('what-focused')
const userForm= document.getElementById('user-form')

focusName.addEventListener('click', ()=> {
    nameInput.focus();
})

nameInput.addEventListener('focus', ()=> {
    whatFocus.innerText = "Name "
})

focusEmail.addEventListener('click', ()=> {
    emailInput.focus();
})

emailInput.addEventListener('focus', ()=> {
    whatFocus.innerText = "Email "
})

nameInput.addEventListener('change', (event)=>{
    const inputValue = event.target.value
    usrname.innerText = inputValue;
})

nameInput.addEventListener('blur', (event)=> {
    if(event.target.value===""){
        nameInput.style.border = "1px solid red";
    }
    whatFocus.innerText = ""
})
emailInput.addEventListener('blur', (event)=> {
    if(event.target.value===""){
        emailInput.style.border = "1px solid red";
    }
    whatFocus.innerText = ""
})


const users = [{
    name:"Ranjan",
    email: "r@gmail.com"
}]


userForm.addEventListener('submit', (event)=> {
    event.preventDefault();


// array mein save krna AI


    const name=event.target.name.value
    const email=event.target.name.value
    users.push({name, email});
    console.log(users)   ;

})