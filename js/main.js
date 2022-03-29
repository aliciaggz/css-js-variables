const inputs = document.querySelectorAll('.controls input');

function handleChanges() {
  console.log(this.value);
}

inputs.forEach((input) => input.addEventListener('change', handleChanges));
inputs.forEach((input) => input.addEventListener('mousemove', handleChanges));
