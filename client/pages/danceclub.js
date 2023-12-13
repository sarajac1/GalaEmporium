import { loadEvent_dc, renderEvents_dc } from "../components/events.js"
export default async function () {
  const danceevent = await loadEvent_dc();
  return `
<div class="dancebody">
  <div class="danceheader"><img src="../client/img/Danceclub.png" alt=""></div>

  <div id="dancewrapper">
  <div class="intro"><p>
    Welcome to Dance Stage, the pulsating heart of Gala Emporium dedicated to the art of dance. <br> Step into a world where
    movement becomes poetry, and every performance is a celebration of rhythm and expression. <br> Dance Stage is more than
    a club; it's a dance sanctuary where the stage comes alive with a symphony of motion and emotion. <br>
  <br> Get your tickets today! </p>
  <img src="../client/img/dancers.jpeg" alt=""></div>

   

        <div id="dance" class="calendar">
        <h1 id="dance class="calendar_heading"><h1>Our events:</h1>
        <ul id="dance" class="ul">
      ${renderEvents_dc(danceevent)}
        </ul>
      </div>

  <div class="ballet">
    <iframe src="https://www.youtube.com/embed/0GsajWIF3ws"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe></div>


  </div>
</div>

<footer id="dance" class="footer">
<h4>Contact us</h4>
<h4>Social media</h4>
<h4>FAQ</h4>
</footer>
 `
}