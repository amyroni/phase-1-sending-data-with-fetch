// Add your code here

function submitData(username, useremail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: username,
      email: useremail,
    })
  })
  .then(response => response.json())
  .then(userData => {
    document.body.innerHTML = userData.id
    // const user = document.createElement("p")
    // user.innerText = userData.id
    // document.querySelector("body").appendChild(user)
  })
  .catch((error) => {
    document.body.innerHTML = error.message
    // const errorMessage = document.createElement("p")
    // errorMessage.innerText = error
    // document.querySelector("body").appendChild(errorMessage)
  })
}


