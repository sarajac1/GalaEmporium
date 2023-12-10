export async function loadEvent_ms() {
  const response = await fetch("/api/events/magicshowclub")
  const eventsList = await response.json()
  console.log("Log from Magicshow",eventsList)
 return eventsList
}

export function renderEvents_ms(eventsList) {
  let events = ""
  
  for (let event of eventsList) {
    events += `
      <li>
          ${event.title} - ${event.description} - ${event.starts_at.substring(0,16).replace('T', ' from ' )} to ${event.ends_at .substring(11,16)}          
      </li>
    `
  }
  return events
}



