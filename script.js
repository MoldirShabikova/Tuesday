const giveMeanewJoke = document.querySelector('button')
const joke = document.getElementById('joke')
const name1 = document.getElementsByClassName('name')
const lastName = document.getElementsByClassName('lastName')
const products = document.querySelector('#products')

giveMeanewJoke.addEventListener('click', () => {
  // fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(data => joke.innerHTML = data.value).catch(err=> console.log(err.message))

  betterCallToApi()
})
const betterCallToApi = async () => {
  try {
    let fullName = name1.value.trim() + '' + lastName.value.trim()
    if (fullName === ' ') fullName = ' Chuck Norris'

    const req = await fetch(
      `https://api.chucknorris.io/jokes/random?name=${fullName}`
    )
    const data = await req.json()

    joke.innerHTML = data.value
  } catch (err) {
    console.log(err.message)
  }
}

const getAllproducts = async () => {
  const req = await fetch('https://fakestoreapi.com/products')
  const data = await req.json()
  data.forEach((product) => {
    console.log(product)
    const newProduct = document.createElement('div')
    const title = document.createElement('h4')
    const image = document.createElement('img')
    image.src = product.image
    image.style.maxWidth = '150px'
    title.innerHTML = product.title
    newProduct.append(title)
    newProduct.append(image)
    products.append(newProduct)
    products.classList.add('conttainer__products')
    newProduct.classList.add('container__products--product')
  })
}

getAllproducts()
