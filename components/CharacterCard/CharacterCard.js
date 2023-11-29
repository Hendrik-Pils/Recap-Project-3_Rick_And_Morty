export function CharacterCard(results) {
    results.forEach((result) => {
    cardContainer.innerHTML += `<li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${result.name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">${result.status}</dt>
        <dd class="card__info-description">Alive</dd>
        <dt class="card__info-title">${result.type}</dt>
        <dd class="card__info-description"></dd>
        <dt class="card__info-title">${result.episode.length}</dt>
        <dd class="card__info-description">51</dd>
      </dl>
    </div>
  </li>`;
});
}



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
