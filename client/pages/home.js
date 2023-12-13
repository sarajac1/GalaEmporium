import { loadEvent_ge, renderEvents_ge } from "../components/events.js"
export default async function home() {
  const allevents = await loadEvent_ge()

  return `
    <main>
      <br>
      <div class="bordertext">
        <p>Welcome to Gala Emporium, the premier venue that opens its stage to a myriad of live performances.
          At Gala Emporium, we believe in creating a vibrant and inclusive space for artists of all kinds to showcase
          their talents. <br>
        </p>
      </div>
      </p>
      <div id="threeColumns">
          <div class="row">
          <div class="borderimg">
            <a class="magic-show" href="#magicshowclub">
              <img src="img/magic-show.jpg" alt="">Magic show club <br> Do you love magic? Of course you do! Then The Great Magic Show is for you!
            </a>
          </div>

          <div class="borderimg">
            <a class="dancestage" href="#danceclub">
              <img src="img/dance_stage.jpg" alt="">Dance Club <br>Where rhythm meets expression in a vibrant dance sanctuary
            </a>
          </div>

          <div class="borderimg">
            <a class="vampireclub" href="#vampireclub">
              <img src="img/eclipsed_embrace.jpg" alt="">Vampire club <br> A sanctuary blurring mortal and immortal boundaries, inviting you into the shadows
            </a>
          </div>
        </div>

        <div class="row">
          <div class="borderimg">
            <a class="fancy-club" href="#fancyclub">
              <img src="https://cdn.vox-cdn.com/thumbor/V0iHI3a8eg77wf87m7HYKl1zQCU=/0x0:2400x1602/920x0/filters:focal(0x0:2400x1602):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24575363/PearlClubInteriors_digital_6817.jpg" alt="">Fancy Club <br> Our web platform serves as a portal to the dynamic
              world of live entertainment.
            </a>
          </div>

          <div class="borderimg">
            <a class="cowboy-club" href="#cowboyclub">
              <img src="img/cowboylogo.png" alt="cowboylogo">Cowboy Club <br> Join us for frontier tales and camaraderie. Saddle up for adventure!
            </a>
          </div>

        </div>
      </div>
      <br>

      <div class="calendar">
        <div id="calendar"></div>
        <div id="bookingText">
         ${renderEvents_ge(allevents)}
        </div>
        <p><br></p>
      </div>
      <br>

    </main>
    <footer> <a href="#">About us</a>
      <a href="#">Policy</a>
      <a href="#">Contact</a>
      <a href="#">Jobs</a>
    </footer>

  </div>

  `
}