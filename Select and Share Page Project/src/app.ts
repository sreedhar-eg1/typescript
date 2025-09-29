const form = document.querySelector("form") as HTMLFormElement;
const addressInput = <HTMLInputElement>document.getElementById("address");

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;

  console.log(enteredAddress)
}

form.addEventListener("submit", searchAddressHandler);
