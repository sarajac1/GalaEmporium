// components, not used in router
import login from "./components/login.js"
$('#login').html(login())


// event handlers, calls the router function on each event (change, load)
// window.onhashchange = router
// window.onload = router