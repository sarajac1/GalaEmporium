export default async function init() {
  $("#cart").html(await loadCart())
}

async function addToCart(productId) {
  saveNewItem(productId)
  $("#cart").html(await loadCart())
}

window.addToCart = addToCart // expose addToCart to global (html) scope

async function saveNewItem(productId) {
  let response = await fetch('/api/cart-items', {
    // tell the server we want to send/create data
    method: 'post',
    // and that we will send data json formatted
    headers: { 'Content-Type': 'application/json' },
    // the data encoded as json
    body: JSON.stringify({ product: productId, amount: 1 })
  });
  let result = await response.json();
  console.log(result)
}

async function loadCart() {
  const response = await fetch("/api/cart-items")
  const cart = await response.json()
  console.log(cart)

  if (cart.length > 0) {
    return renderCart(cart)
  }
}

function renderCart(cart) {
  let items = ""
  let totalPrice = 0;

  for (let item of cart) {
    items += `
      <li>
          ${item.name} - ${item.price} kr
      </li>
    `

    totalPrice += item.price
  }


  return `
    <h3>Cart</h3>
    <ul>
      ${items}
    </ul>
    <p>Total: ${totalPrice} kr</p>
  `
}
