// components, not used in router
import login from "./components/login.js"
$('#login').html(login())

//import events from "./components/events.js"
//events()

// pages, used in router
import home from "./pages/home.js"
import vampireclub from "./pages/vampireclub.js"
import danceclub from "./pages/danceclub.js"
import fancyclub from "./pages/fancyclub.js"
import magicshowclub from "./pages/magicshowclub.js"
import cowboyclub from "./pages/cowboy.js"

// routed pages
async function router() {
  switch (location.hash) {

    case "":
      $('main').html(await home())
      break

    case "#danceclub":
      $('main').html(danceclub())
      break

    case "#vampireclub":
      $('main').html(await vampireclub())
      break

    case "#fancyclub":
      $('main').html(await fancyclub())
      break

    case "#magicshowclub":
      $('main').html(await magicshowclub())
      break

    case "#cowboyclub":
      $('main').html(cowboyclub())
      break

    default:
      $('main').html(`<h2><strong>404</strong> Good job! You've broken the internet.</h2>`)

  }
}


// event handlers, calls the router function on each event (change, load)
window.onhashchange = router
window.onload = router
