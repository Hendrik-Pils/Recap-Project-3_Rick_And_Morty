export function CharacterCard({image, alt, name, status, type, episode}) {
    const cardContainer = document.querySelector('[data-js="card-container"]');
    cardContainer.innerHTML += `<li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src="${image}"
        alt="${alt}"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">${status}</dt>
        <dd class="card__info-description">Alive</dd>
        <dt class="card__info-title">${type}</dt>
        <dd class="card__info-description"></dd>
        <dt class="card__info-title">${episode.length}</dt>
        <dd class="card__info-description">51</dd>
      </dl>
    </div>
  </li>`;
}

console.log(CharacterCard);

// const button = document.querySelector("button");
// const list = document.querySelector("ul");

// button.addEventListener("click", onClick);
// button.addEventListener("click", async () => {
//    /// ..
// });

// async function onClick() {
//   const users = await getUsers();
//   list.innerHTML = "";
//   renderUsers(users);
//   button.disabled = true;
// }

// // ['a', 'b', 'c', 'd'].slice(0, 2) -> ['a', 'b']
// async function getUsers() {
//   const response = await fetch("https://reqres.in/api/users");
//   const json = await response.json();
//   return json.data;
// }

// function renderUsers(users) {
//   users.forEach((user) => {
//     list.innerHTML += `
// 		<li>
// 			<span>${user.first_name} ${user.last_name}</span>
// 			<img src=${user.avatar} alt="Picture of ${user.first_name}"/>
// 		</li>
// 		`;
//   });
// }
