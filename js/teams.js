let parent = document.getElementsByClassName("team")[0];

let array = JSON.parse(teamMembers);

array.forEach((element) => {
  let container = document.createElement("div");
  container.classList.add("person");
  let image = document.createElement("img");
  image.src = element.image;
  let name = document.createElement("h4");
  name.innerText = element.name;
  let email = document.createElement("p");
  email.innerText = element.email;
  let age = document.createElement("p");
  age.innerText = element.age;
  let ocupation = document.createElement("p");
  ocupation.innerText = element.ocupation;
  container.append(image);
  container.append(name);
  container.append(email);
  container.append(age);
  container.append(ocupation);
  parent.append(container);
});
