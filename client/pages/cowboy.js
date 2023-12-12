export default function () {
  return `

        <body class="cc-body">

            <header class="cc-header">
                <div class="cc-align cc-align_left"><button class="cc-sidebar-button" onclick="toggleSidebar()">
                    <i class="fa-solid fa-bars"></i></button>
                </div>
                <div class="cc-align cc-align_middle">
                    <nav>
                        <h1 class="cc-club-title">Cowboy Club</h1>
                    </nav>
                </div>
                <div class="cc-align cc-align_right">
                    <div class="cc-login-section">
                        <form id="cc-login-form">
                            <!-- <input type="text" id="username" name="username" placeholder="Username">
                        <input type="password" id="password" name="password" placeholder="Password"> -->
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </header>

            <!-- Sidebar funktion -->
            <aside class="cc-sidebar">
                <button class="cc-close-button" onclick="toggleSidebar()">&times;</button>
                <nav class="cc-sidebar-nav">
                    <ul>
                        <li><a href="../index.html"><i class="fa-solid fa-house"></i> Home</a></li>
                    </ul>
                </nav>
            </aside>

            <main class="cc-content">

                <section class="cc-left-section">
                    <div class="cc-text-content">
                        <h2>About Us</h2><br>
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
                    <div class="cc-text-box">
                        <h1>Upcoming Events</h1><br>
                        <ul>
                            <li><strong>Mechanical Bull Riding Competition</strong> - December 15, 6:00 PM<br>
                                <span class="cc-event-description">Compete and show off your cowboy skills!</span>
                            </li>
                            <li><strong>Western Movie Night</strong> - December 20, 7:30 PM<br>
                                <span class="cc-event-description">Screen classic Western films outdoors.</span>
                            </li>
                            <li><strong>Chuckwagon Race</strong> - December 25, 2:00 PM<br>
                                <span class="cc-event-description">Exciting horse-drawn wagon races.</span>
                            </li>
                            <li><strong>Gold Panning</strong> - January 1, 10:00 AM<br>
                                <span class="cc-event-description">Learn the historic art of panning for gold.</span>
                            </li>
                            <li><strong>Sharpshooting Competition</strong> - January 8, 3:45 PM<br>
                                <span class="cc-event-description">Test your marksmanship skills in shooting contests.</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>


            <footer class="cc-footer">
                <div class="cc-footer-content">
                    <div class="cc-copyright">
                        &copy; My Roslund
                    </div>
                </div>
            </footer>

        </body>

        </html>
  
  `;
}
