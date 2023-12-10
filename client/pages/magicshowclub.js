import { loadEvent_ms, renderEvents_ms } from "../components/events.js"
export default async function () {
  const magicshowevents = await loadEvent_ms();
  
  return ` 

<div class="ms-main">
      <main class="ms-middle">
        <div class="ms-middlediv">
          <p>Welcome to the magical world of the Magician!
            A comical magic show suitable for both children and adults. In this unique performance, the audience can
            actively
            participate and experience the amazing magic trick.
            Come and experience this magical magic show that guarantees laughter and an unforgettable experience!.</p>

          <div class="ms-image-section">
            <section>
              <img class="ms-img" src="./magicShowClub/Pic1.jpg">
              <p>Great Magic Show</p>
            </section>

            <section>
              <img class="ms-img" src="./magicShowClub/Pic2.jpg">
              <p>The Magician</p>
            </section>

            <section>
              <img class="ms-img" src="./magicShowClub/Pic3.jpg">
              <p>Best entertainment for kids</p>
            </section>

            <section>
              <img class="ms-img" src="./magicShowClub/Pic4.jpg">
              <p>Magic inside the Hat </p>
            </section>

            <section>
              <img class="ms-img" src="./magicShowClub/Pic5.jpg">
              <p>Master of Magicians</p>
            </section>

            <section>
              <img class="ms-img" src="./magicShowClub/Pic6.jpg">
              <p>Play more with Playing Cards</p>
            </section>
            </div>
            </div>
            </main>

        <aside class="ms-aside">
        <h2>Upcoming Events</h2>
          <ul class="ms-ul">
          ${renderEvents_ms(magicshowevents)}
          </ul>       
        </aside>
       </div>      
  <footer>
    <p class="ms-footer">Designed & Developed by Group8, Students @ NBI/Handelsakademin, Malmö, Sweden </p>
  </footer>
 `
}

