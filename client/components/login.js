let user_id = ""

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
    if (result.visitor != null && result.visitor) {
      $('#login').html(`
      <button onclick="logout()">Logout</button>
      <button>Book Event</button>
    `)
    } else {
      $('#login').html(`
      <button onclick="logout()">Logout</button>      
      <button onclick="clubOrganiser()">Add Event</button>      
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
    "created_by" : created_by
  }
  console.log(JSON.stringify(body))

  if (title!=undefined && title.trim().length > 0) {
    const response = await fetch("api/events", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const result = await response.json()

    if (result.eventAdded) {
      //alert(`${title.trim()} was added`)
      $('main').html(`
      <h1>${title.trim()} was added</h1>`)
      
    }
  } else {
    alert("Failed to add an event!")
  }
}

window.addEvent = addEvent
window.clubOrganiser= clubOrganiser

