
export default function init() {
  return `
    <form onsubmit="login(); return false">
      <input name="email" placeholder="your email">
      <br>
      <input name="password" placeholder="your password">
      <br>
      <input type="submit" value="Login">
    </form>  
  `
}

async function login() {
  const credentials = {
    email: $('[name=email]').val(),
    password: $('[name=password]').val()
  }
  console.log(credentials)
}

window.login = login // expose login to global (html) scope


