const button = document.querySelector('button');

const onButtonClick = (evt) => {
  console.log('Hello, world')
  console.log(evt)
}

button.addEventListener('click', onButtonClick)
