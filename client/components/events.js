export default async function init() {
  $("#events").html(await loadEvent())
}

async function loadEvent() {
  const response = await fetch("/api/events/magicshowclub")
  const eventsList = await response.json()
  console.log(eventsList)

  if (eventsList.length > 0) {
    return renderEvents(eventsList)
  }
}

function renderEvents(eventsList) {
  let events = ""
  
  for (let event of eventsList) {
    events += `
      <li>

          ${event.title} - ${event.description} - ${event.starts_at} - ${event.ends_at}
          
      </li>
    `
  }

  return `
    <h2>Upcoming Events</h2>
    <ul>

      ${events}
    
      </ul>    
  `
}
