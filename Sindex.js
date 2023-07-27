const profile1 = {
    userId:202301,
    userPassword:6122023,
    userName: "Juan Dias"
}

const profile2 = {
  userId:202302,
  userPassword:6122023,
}

const profile3 = {
    userId:202303,
    userPassword:6122023,
}

const inputEl = document.getElementById("name")
const inputP = document.getElementById("password")
const subBtn = document.getElementById("submit-btn")
const alertU = document.getElementById("alertU")
const alertP = document.getElementById("alertP")

subBtn.addEventListener("click", function() {
  userName()

                                       })


function userName(){
  let val = inputEl.value
    if (val === "202301" ){
      userPassword()
    }else if (val === "202302"){
      userPassword()
    }else if (val === "202303"){
      userPassword()
    }else if (val === "202304"){
      userPassword()
    }else if (val === "202305"){
      userPassword()
    }else if (val === "202306"){
      userPassword()
    }else {
      alertU.innerHTML="Wrong Username or Password" 
    }
  }
  
  function userPassword(){
    let valp = inputP.value
      console.log(valp)
      if (valp === "6122023" ){
        pushWeb()
      }else {
        alertU.innerHTML="Wrong Username or Password"
      }
    }

    function addNewArray(){
      newArr.push("202301");
      return newArr;
   }
   //calling a function
   addNewArray(newArr[" "])
    




    function pushWeb() {
      location.replace("https://sage-lily-3b571d.netlify.app");
    }
  

 
