document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("submit", addPost);

function getUsers() {
  fetch("db.json")
    .then(res => res.json())
    .then(data => {
     // let output = "<h2>Users</h2>";

      console.log(data);

      data.forEach((user) => {
        output += `  <ul>
                     <li>ID: ${user[data]}</li>                   
                   
                    </ul>`;
      });
     // document.getElementById("output").innerHTML = output;
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      let output = "<h2>Posts</h2>";
      data.forEach(post => {
        output += `  <div>
                    <h3> ${post.title} </h3>
                    <p> ${post.body} </p>
                    </div>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ title: title, body: body })
  })
    .then(res => res.json())
    .then(data => console.log(data));
}
