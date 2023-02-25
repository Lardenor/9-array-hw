'use strict'
const $container = document.querySelector('.container')
const getUsers = async  () => {
    const users = await  fetch('https://jsonplaceholder.typicode.com/users');
    const result = await  users.json()
    if(users.status === 200){
        renderUser($container, result);
    }
}
getUsers();







function renderUser(element, users) {
  users.forEach((user) => {
    const { id, name, email, address, phone, company, website } = user;
    element.innerHTML += `
      <div class="user">
        <img src="https://randomuser.me/api/portraits/men/${id}.jpg" alt="user" class="user__img">
        <ul class="user__list">
          <li>${name}</li>
          <li>Email: ${email}</li>
          <li>Address: ${address.street}, ${address.suite}</li>
          <li>Phone: ${phone}</li>
          <li>Website: <a href="${website}" class="list__link">${website}</a></li>
          <li>Company: ${company.name}</li>
        </ul>
      </div>
    `;
  });
  element.querySelectorAll(".user").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.nodeName === "DIV") {
        favoriteUser(event.target);
      }
    });
  });
}
let favoritUserList = [];
const favoriteUserElement = document.querySelector(".user__list_fav");
function favoriteUser(user) {
  const ul = user.querySelector(".user__list");
  const userName = ul.firstElementChild.textContent;

  if (!favoritUserList.includes(userName)) {
    favoritUserList.push(userName);
    favoriteUserElement.innerHTML += `<li>${userName}</li>`;
  }
}






































































// Вивести favoriteUser на екран, забрати " Name: "




// function renderUser(element, data){
//     console.log("-> data", data[0]);
//
//     for(let i = 0; i < data.length; i++){
//
//         const {id, name, email, address, phone, company, website} = data[i]
//
//         element.innerHTML += `
//           <div class="user">
//             <img src="https://randomuser.me/api/portraits/men/${id}.jpg" alt="user" class="user__img">
//           <ul class="user__list">
//             <li>Name: ${name}</li>
//             <li>Email: ${email}</li>
//             <li>Address: ${address.street}, ${address.suite}</li>
//             <li>Phone: ${phone}</li>
//             <li>Website: <a href="" class="list__link">${website}</a></li>
//             <li>Company: ${company.name}</li>
//           </ul>
//           </div>
//         `
//     }
// }
//
//

