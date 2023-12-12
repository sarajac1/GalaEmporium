//Main page

export async function loadEvent_ge() {
  const response = await fetch("/api/events/all")
  const eventsList = await response.json()
  console.log("Log from Gala Emporium", eventsList)
  return eventsList
}

export function renderEvents_ge(eventsList) {
  let events = ""

  for (let event of eventsList) {
    events += `
      <li>
          <h2>${event.title}</h2> ${event.starts_at.substring(0, 16).replace('T', ' from ')} to ${event.ends_at.substring(11, 16)} <br> ${event.description}          
      </li>
    `
  }
  return events
}


//magic club

export async function loadEvent_ms() {
  const response = await fetch("/api/events/magicshowclub")
  const eventsList = await response.json()
  console.log("Log from Magicshow", eventsList)
  return eventsList
}

export function renderEvents_ms(eventsList) {
  let events = ""

  for (let event of eventsList) {
    events += `
      <li>
          ${event.title} - ${event.description} - ${event.starts_at.substring(0, 16).replace('T', ' from ')} to ${event.ends_at.substring(11, 16)}          
      </li>
    `
  }
  return events
}

// vampire club

export async function loadEvent_vc() {
  const response = await fetch("/api/events/vampireclub")
  const eventsList = await response.json()
  console.log("Log from Vampire club", eventsList)
  return eventsList
}


export function renderEvents_vc(eventsList) {
  let events = ""

  for (let event of eventsList) {
    events += `
      <li>
          <h2>${event.title}</h2> ${event.starts_at.substring(0, 16).replace('T', ' from ')} to ${event.ends_at.substring(11, 16)} <br> ${event.description}          
      </li>
    `
  }
  return events
}


// fancy club

export async function loadEvent_fc() {
  const response = await fetch("/api/events/fancyclub")
  const eventsList = await response.json()
  console.log("Log from Fancy club", eventsList)
  return eventsList
}


export function renderEvents_fc(eventsList) {
  let events = ""

  for (let event of eventsList) {
    events += `
      <li>
          <h2>${event.title}</h2> ${event.starts_at.substring(0, 16).replace('T', ' from ')} to ${event.ends_at.substring(11, 16)} <br> ${event.description}          
      </li>
    `
  }
  return events
}

// Cowboy Events //

export async function loadEvent_cc() {
  const response = await fetch("/api/events/cowboyclub")
  const eventsList = await response.json()
  console.log("Log from Cowboy Club", eventsList)
  return eventsList
}


export function renderEvents_cc(eventsList) {
  let events = ""

  events = '<ul class = "cc-right-section">'
  for (let event of eventsList) {
    events += `
      <li>
       <strong>${event.title}</strong> 
       - ${event.starts_at.substring(0, 16).replace('T', ' from ')} to ${event.ends_at.substring(11, 16)}
      <br>
      <span class = "cc-event-desciption"> ${event.description} </span>
      </li>
    `
  }
  events += "</ul>"
  
  return events
}
