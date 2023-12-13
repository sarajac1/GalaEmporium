import { loadEvent_ms, loadEvent_vc, loadEvent_fc, loadEvent_dc } from "../components/events.js"

let user_id = ""
let clubname = ""

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
    user_id = result.id
    clubname = result.clubname
    if (result.visitor != null && result.visitor) {
      $('#login').html(`
      <button onclick="logout()">Logout</button>
      <button onclick="bookEvent()">Book Event</button>
    `)
    } else {
      $('#login').html(`
      <button onclick="logout()">Logout</button>      
      <button onclick="clubOrganiser()">Add Event</button>
      <button onclick="bookEvent()">Book Event</button>      
    `)
    }
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
async function clubOrganiser() {

  $('main').html(`
      
      <div class="bordertext">
 
            <h1>Create Event</h1> <br>
      <h4>Club Name</h4>

      <input type="radio" id="vampireclub" name="clubs" value="vampireclub"/>
<label for="vampireclub">Vampire Club</label><br>
      <input type="radio" id="magicshowclub" name="clubs" value="magicshowclub"/>
<label for="magicshowclub">Magic Show Club</label><br>
      <input type="radio" id="danceclub" name="clubs" value="danceclub"/>
<label for="danceclub">Dance Club</label><br>
      <input type="radio" id="fancyclub" name="clubs" value="fancyclub"/>
<label for="fancyclub">Fancy Club</label><br>
      <input type="radio" id="cowboyclub" name="clubs" value="cowboyclub"/>
<label for="cowboyclub">Cowboy Club</label><br>
    
      <h4>Event Title</h4>
      <input type="text" id="eventTitle" name="eventTitle" value="default title">
      <h4>Event Description</h4>
      <textarea id="eventDescription" name="eventDescription" rows="4" cols="50">
      Here is some default text</textarea>
      <h4>Starts at:</h4>
      <input type="datetime-local" id="startsAt" name="startsAt">
      <h4>Ends at:</h4>
      <input type="datetime-local" id="endsAt" name="endsAt"><br> <br>
        <button onclick="addEvent()">Create Event</button>
     
    </div>
    `)

}

async function addEvent() {
  const club_name = $("[name=clubs]:checked").val()
  const title = $("[name=eventTitle]").val()
  const description = $("[name=eventDescription]").val()
  const starts_at = $("[name=startsAt]").val()
  const ends_at = $("[name=endsAt]").val()
  const created_by = user_id
  const body = {
    "club_name": club_name,
    "title": title,
    "description": description,
    "starts_at": starts_at,
    "ends_at": ends_at,
    "created_by": created_by
  }
  console.log(JSON.stringify(body))

  if (title != undefined && title.trim().length > 0) {
    const response = await fetch("api/events", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const result = await response.json()

    if (result.eventAdded) {
      //alert(`${title.trim()} was added`)
      $('main').html(`
      <br>
      <div class="bordertext">
      <br>
        <p><h1>${title.trim()} was successfully created!</h1><br>
        </p>
        <br>
      </div>
      <br>
`)

    }
  } else {
    alert("Failed to add an event!")
  }
}

async function bookEvent() {
  let events = ""
  switch (clubname) {
    case "magicshowclub":
      events = await loadEvent_ms()
      break
    case "vampireclub":
      events = await loadEvent_vc()
      break
    case "fancyclub":
      events = await loadEvent_fc()
      break
    case "danceclub":
      events = await loadEvent_dc()
      break
    case "cowboyclub":
      //events = await loadEvent_cc()
      break
  }
  $('main').html(`
      
      <div class="bordertext">
 
            <h1>Book Event</h1> <br>
            <h3>Club Name: ${clubname}</h3>
            <ul>
            ${renderEvents(events)}
            </ul>
            
      `)
}

function renderEvents(eventsList) {
  let events = ""
  for (let event of eventsList) {
    events += `
      <li>
          ${event.title} - ${event.description} - ${event.starts_at.substring(0, 16).replace('T', ' from ')} to ${event.ends_at.substring(11, 16)}          
          <button id="${event.id}" onclick="addEventAttendee(${event.id})">Book</button>
      </li>
    `
  }
  return events
}

async function addEventAttendee(event_id) {
  const body = {
    "event_id": event_id,
    "user_id": user_id
  }
  console.log(JSON.stringify(body))

  if (event_id != undefined) {
    const response = await fetch('/api/events/bookevent', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const result = await response.json()

    if (result.eventBooked) {
      alert(`Event is booked!`)
    }
  } else {
    alert("Failed to add an event!")
  }
}

window.addEvent = addEvent
window.clubOrganiser = clubOrganiser
window.bookEvent = bookEvent
window.addEventAttendee = addEventAttendee