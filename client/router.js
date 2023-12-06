// components, not used in router
import login from "./components/login.js"
$('#login').html(login())

//main page
import home from "./pages/home.js"

//vampire club
import vampireclub from "./pages/vampireclub.js"

// routed pages
async function router() {
  switch (location.hash) {

    case "":
      $('main').html(home())
      break

    case "#vampireclub":
      $('main').html(vampireclub())
      break

    default:
      $('main').html(`<h2><strong>404</strong> Good job! You've broken the internet.</h2>`)

  }
}

// event handlers, calls the router function on each event (change, load)
window.onhashchange = router
window.onload = router


// event handlers, calls the router function on each event (change, load)
// window.onhashchange = router
// window.onload = router
