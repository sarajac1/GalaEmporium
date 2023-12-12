export default function () {
  return `
  <h1>Add new book!</h1>
  <form onsubmit="addBook(); return false">
    <input type="text" name="title" placeholder="Book name">
    <input id="submit" type="submit" value="Add Book">
  </form>
  `
}

async function addBook() {
  const title = $("[name=title]").val()
  console.log(title)

  if (title.trim().length > 0) {
    const response = await fetch("api/events", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title })
    })
    const result = await response.json()

    if (result.bookAdded) {
      alert(`${title.trim()} was added`)
      $("[name=title]").val("")
    }
  } else {
    alert("Du måste skriva något!")
  }
}

window.addBook = addBook

/*
    <div class="bordertext">
  <form onsubmit="createEvent(); return false">
            <h1>Create Event</h1> <br>
      <h4>Club Name</h4>

      <input type="radio" id="vampireclub" name="clubs" value="vampireclub">
<label for="vampireclub">Vampire Club</label><br>
      <input type="radio" id="magicshowclub" name="clubs" value="magicshowclub">
<label for="magicshowclub">Magic Show Club</label><br>
      <input type="radio" id="danceclub" name="clubs" value="danceclub">
<label for="danceclub">Dance Club</label><br>
      <input type="radio" id="fancyclub" name="clubs" value="fancyclub">
<label for="fancyclub">Fancy Club</label><br>
      <input type="radio" id="cowboyclub" name="clubs" value="cowboyclub">
<label for="cowboyclub">Cowboy Club</label><br>
    
      <h4>Event Title</h4>
      <input type="text" id="eventTitle" name="eventTitle" value="default title">
      <h4>Event Description</h4>
      <textarea id="eventDescription" name="eventDescription" rows="4" cols="50">
      Here is some default text</textarea>
      <h4>Starts at:</h4>
      <input type="datetime-local" id="startsAt">
      <h4>Ends at:</h4>
      <input type="datetime-local" id="endsAt"><br> <br>
        <input type="submit" value="Create event">
      </form>
    </div>

*/