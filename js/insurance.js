function calculateInsurance(event) {
  //prevents page from refreshing at form submit
  event.preventDefault();
  //declaring needed variables
  let display = document.getElementsByClassName("result")[0].firstChild;
  let form = document.getElementById("form");
  let formValues = form.elements;
  let informationObject = {};
  let result = 0;
  //loops to create object with whole data
  for (let i = 0; i < formValues.length; i++) {
    let item = formValues.item(i);
    //checks if the value is not a number, if it's not converts it into a number, before asigning it
    informationObject[item.name] = isNaN(item.value)
      ? item.value
      : Number(item.value);
  }
  console.log(informationObject);
  //calculates result in respect to client's country
  if (informationObject.country === "Hungary") {
    result = (informationObject.horsepower * 120) / informationObject.age + 100;
  } else if (informationObject.country === "Austria") {
    result = (informationObject.horsepower * 100) / informationObject.age + 50;
  } else if (informationObject.country === "Greece") {
    result =
      (informationObject.horsepower * 150) / (informationObject.age + 3) + 50;
  }
  console.log(result);
  display.textContent = `${
    informationObject.name
  }, your insurance costs ${Math.trunc(result)} €`;
  form.reset();
}

let button = document.getElementById("calculate");
button.addEventListener("click", calculateInsurance);
