import { loadEvent_vc, renderEvents_vc } from "../components/events.js"
export default async function () {
  const vampireevent = await loadEvent_vc();

  return ` 
  <div class="vamwrapper">
  <div id="vamheader"></div>
    <br><br>
    <div class="vamcontainer">
      <div class="vamrow_text">
        <p>
          Welcome to the mesmerizing world of "Eclipsed Embrace," a clandestine haven where shadows dance, and the
          allure
          of the
          eternal night reigns supreme. This exclusive vampire performance club is a seductive blend of gothic elegance
          and
          otherworldly mystique, promising an immersive experience that transcends the boundaries of the ordinary.
          <br>
        </p>
        <p>
          As you approach the unassuming entrance, a subtle crimson glow beckons you into a realm where time stands
          still.
          The
          club is nestled in the heart of the city, hidden from the prying eyes of mortals, and only those who have
          received
          a
          discreet invitation or possess a certain affinity for the supernatural are granted entry.
          <br>
        </p>
        <p>
          Once inside, your senses are enveloped by the haunting strains of haunting melodies and the rhythmic pulse of
          ethereal
          beats. The interior is adorned with opulent velvet drapes, ancient candelabras casting flickering shadows, and
          ornate,
          blood-red furnishings that evoke a sense of decadent luxury. The ambiance is a delicate balance between the
          macabre and
          the enchanting, creating an atmosphere where the boundary between reality and fantasy blurs.
          <br>
        </p>
        <p> The performers, draped in elaborate gothic attire, move with an unearthly grace, captivating the audience
          with
          their
          mesmerizing routines. Talented dancers, each possessing an aura of timeless allure, express themselves through
          a
          fusion
          of balletic movements and the sensual allure of the undead. Their choreography tells tales of centuries-long
          love,
          tragic romance, and the eternal struggle between darkness and light.
          <br>
        </p>
        <p>
          Specialized mixologists craft signature cocktails with names like "Crimson Elixir" and "Vein Velvet," adding
          to
          the
          immersive experience. The bar itself is a masterpiece, featuring intricately carved woodwork and an impressive
          array of
          rare and exotic beverages.
          <br>
        </p>
        <p>
          Eclipsed Embrace is not merely a performance venue; it is a sanctuary for those who seek refuge from the
          mundane
          world,
          a place where the boundaries between mortal and immortal blur, and where the timeless embrace of the night
          comes
          to life
          in every heartbeat. Whether you're an avid enthusiast of vampire lore or simply curious about the allure of
          the
          unknown,
          this enigmatic club promises an unforgettable journey into the shadows of the supernatural. <br></p>
      </div>
      <div class="vamrow_images"> <div id="vamcollage"></div>

      </div>
</div>

    <div class="vamcalendar">
    <h1>Upcoming events</h1>
          ${renderEvents_vc(vampireevent)}
    </div>

 `
}
