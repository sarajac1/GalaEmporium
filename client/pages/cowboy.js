import { loadEvent_cc, renderEvents_cc } from "../components/events.js"
export default async function () {
    const cowboyevent = await loadEvent_cc();
    return `

        <div class="cc-body">

            <div class="cc-header">
                <div class="cc-align cc-align_middle">
                    <nav class="cls-nav">
                        <h1 class="cc-club-title">Cowboy Club</h1>
                      </nav>
                </div>
                <!-- <div class="cc-align cc-align_right">
                    <div class="cc-login-section">
                        <form id="cc-login-form">
                        <input type="text" id="uname" name="uname" placeholder="Username">
                        <input type="password" id="pwd" name="pwd" placeholder="Password">
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div> -->
            </div>

            <!-- Sidebar funktion -->

            <!-- <main class="cc-content"> -->
            <div class="cc-content">
                <section class="cc-left-section">
                    <div class="cc-text-content">
                        <h2>About Us</h2>
                        <p>Saddle up and join us for an exhilarating journey into the heart of the Old West. At Cowboy Club, we embody
                            the spirit
                            of rugged adventure, where the echoes of frontier tales resonate through every trail we blaze.<br><br>

                            Experience the thrill of authentic cowboy life with our range of activities, from horseback riding through
                            scenic
                            landscapes to mastering the art of lassoing and honing your sharpshooting skills. Our seasoned guides share
                            their
                            extensive knowledge of the West, regaling you with tales of outlaws, gold rushes, and the untamed
                            wilderness.<br><br>

                            Immerse yourself in our themed events that transport you back to the days of saloons and showdowns, offering a
                            chance to
                            revel in the camaraderie of fellow enthusiasts. Capture these moments forever in our gallery, showcasing
                            stunning
                            visuals and stories from our adventures.<br><br>

                            Join Cowboy Club, where the frontier spirit lives on, and the Wild West becomes your playground.<br><br>

                            Saddle up, partners! Adventure awaits.</p>
                    </div>
                </section>

                <section class="cc-middle-section">
                    <div class="cc-middle-content">
                        <div class="cc-image-grid">
                            <div class="cc-image-item">
                                <img src="img/saloon.jpg" alt="Saloon">
                            </div>
                            <div class="cc-image-item">
                                <img src="img/bull.jpg" alt="Bull">
                            </div>
                            <div class="cc-image-item cc-single-column">
                                <img src="img/bar.jpg" alt="Bar">
                            </div>
                        </div>
                    </div>
                </section>


                <section class="cc-right-section">
                    <div class="cowcalendar">
                        <h1>Upcoming Events</h1>
                        ${renderEvents_cc(cowboyevent)}
                    </div>
                </section>
            </div>
            <!-- </main> -->


            <footer class="cc-footer">
                <div class="cc-footer-content">
                    <div class="cc-copyright">
                        &copy; My Roslund
                    </div>
                </div>
            </footer>

        </div>

        <!-- </html> -->
  
  `;
}
