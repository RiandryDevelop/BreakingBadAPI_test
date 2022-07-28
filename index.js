// Document variable
const d = document;

//Even to get the info from the form
d.querySelector("form").addEventListener("submit", (e) => {
  try {
    e.preventDefault();
    const formData = new FormData(e.target);
    let id = parseInt(formData.get("title"));

    if (id === "") {
      alert("Type a number");
    } else {
      // Connection to the API
      const petition = fetch(
        `https://www.breakingbadapi.com/api/characters/${id}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          const {
            name,
            birthday,
            occupation,
            img,
            status,
            nickname,
            portrayed,
          } = data[0];
          console.log(name);
          d.querySelector(
            "#root"
          ).innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">${name}</h5>
    <ul class="list-group">
    <li><h5>Birthday:</h5><p class="card-text">${occupation}</p></li>
    <li><h5>Birthday:</h5><p class="card-text">${birthday}</p></li>
    <li><h5>Status:</h5><p class="card-text">${status}</p></li>
    <li><h5>NickName:</h5><p class="card-text">${nickname}</p></li>
    <li><h5>Portrayed:</h5><p class="card-text">${portrayed}</p>
    </li>
    </ul>
  </div>
</div>`;
        })
        .catch((err) => console.error);
    }
  } catch (e) {
    console.error(e.message);
  }
});
