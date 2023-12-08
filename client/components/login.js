export default function init() {
  return `
    <form onsubmit="login(); return false">
      <input name="email" placeholder="your email" style="border: 2px solid white;
  border-radius: 4px;
  font-family: 'Dosis';
background-color: #efe6ce;
">
      <input name="password" placeholder="your password" style="border: 2px solid white;
  border-radius: 4px;
  font-family: 'Dosis';
background-color: #efe6ce;">
      <input type="submit" value="Login" style="background-color: #efe6ce; border: 2px solid white;  border-radius: 4px;
  font-family: 'Dosis';">
    </form>
  `
}

async function login() {
  const credentials = {
    email: $('[name=email]').val(),
    password: $('[name=password]').val()
  }
  console.log(credentials)
  let response = await fetch('/api/login', {
    // tell the server we want to send/create data
    method: 'post',
    // and that we will send data json formatted
    headers: { 'Content-Type': 'application/json' },
    // the data encoded as json
    body: JSON.stringify(credentials)
  });
  let result = await response.json();
  console.log(result)
  if (result.loggedIn) {
    $('#login').html(`
      <button onclick="logout()">Logout</button>
    `)
  }
}

window.login = login // expose login to global (html) scope
async function logout() {
  console.log('sir, logging out?')
  let response = await fetch('/api/login', {
    method: 'delete'
  });
  let result = await response.json();
  console.log(result)
  if (!result.loggedIn) {
    $('#login').html(init())
  }
}

window.logout = logout


async function checkLogin() {
  const response = await fetch('/api/login')
  const result = await response.json()
  console.log(result)
  if (result.loggedIn || result.email) {
    $('#login').html(`
      <button onclick="logout()">Logout</button>
    `)
  }
}

checkLogin() // will execute on load

