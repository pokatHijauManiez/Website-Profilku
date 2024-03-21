import React from 'react'
import '../Bio/Bio.css'
const Bio = () => {
  return (
    <>
        <header>
        <div className="main-container">
            <div className="nav">
                <div className="logo">
                    <a href="/">AS</a>
                </div>

                <nav>
                    <ul>
                        <li><a href="#bio">Bio</a></li>
                        <li><a href="#galeri">Galery</a></li>
                        <li><a href="#galeri">Achivement</a></li>
                        <li><a href="#portfolio">Portfolios</a></li>
                        <li><a href="/resume.pdf" target="_blank">
                            <button className="btn">Resume</button>
                        </a>
                        </li>
                    </ul>
                </nav>

                <div className="burger">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>    
            </div>
            <section id="hero">
                <div className="hero-left">
                    <h3 className="pre-title">My Name is</h3>
                    <h1 className="hero-name">Abmi <span>Sukma</span></h1>
                    <p>
                        Hey there! Welcome to my little corner of the internet. 
                        This website is all about me. From my bio to my portfolio, 
                        you'll find everything you need to know about who I am and what I do. 
                        So, grab a seat, take a look around, and let's get to know each other better!"
                    </p>
                </div>
                <div className="hero-right">
                    <img src="Gambar/ami.png" alt="Person Photo"/>
                </div>
            </section>
        </div> 
        </header>
        {/* <!-- end of header --> */}

        {/* <!-- portfolio --> */}
        <section id="portfolio">
        <div className="portfolio main-container">
            <h3 className="pre-title">Portfolio</h3>
            <h1 className="section-title portfolio-title">Specialized In</h1>

            <div className="grid-3">
                {/* <!-- Portfolio 1 --> */}
                <div className="Portfolio">
                    <div className="Portfolio-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24"
                        >
                            <path d="M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z"/>
                        </svg>   
                    </div>
                    <h4>Advertisement Design </h4>
                    <p>Turn what you have in mind of digital product into reality</p>
                </div>

                {/* <!-- Portfolio 2 --> */}
                <div className="Portfolio">
                    <div className="Portfolio-icon">
                        <svg 
                        width="24" 
                        height="24" 
                        xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M15.062 21.518c.426-2.809.573-5.6.444-8.338 2.788.488 3.993 3.112 4.729 4.484-1.239 1.799-3.052 3.17-5.173 3.854m-8.502-1.136c2.47-2.684 4.118-6.227 6.946-7.078.132 2.833-.04 5.73-.533 8.648-2.354.221-4.56-.364-6.413-1.57m-4.479-7.167c3.397-1.758 7.199-2.832 11.13-3.21.059.433.115.867.159 1.304-4.026 1.006-5.615 4.88-8.375 7.82-1.575-1.547-2.634-3.61-2.914-5.914m2.509-7.911c2.405.211 5.2 1.617 8.112 1.776.065.296.116.596.173.894-4.045.398-7.957 1.579-10.824 3.004.222-2.175 1.15-4.137 2.539-5.674m8.765-3.201c1.318.18 2.553.613 3.656 1.255-.898.805-1.432 1.341-2.761 1.633-.261-.978-.555-1.942-.895-2.888m-2.156-.062c.378.986.701 1.996.989 3.019-1.799-.22-3.579-.967-5.625-1.444 1.355-.881 2.935-1.44 4.636-1.575m10.044 6.149c-2.579-.38-4.559-.423-6.351-.352l-.161-.889c2.079-.453 2.698-1.557 3.99-2.334 1.083.986 1.953 2.2 2.522 3.575m-6.021 1.684c2.198-.073 4.42.06 6.624.441.291 1.705.178 3.412-.495 5.201-1.313-2.234-3.378-4.226-5.992-4.401-.041-.415-.083-.829-.137-1.241m-3.223-9.874c-6.623 0-12 5.377-12 12s5.377 12 12 12c6.624 0 12.001-5.377 12.001-12s-5.377-12-12.001-12"/>
                        </svg>  
                    </div>
                    <h4>Basketball</h4>
                    <p>Always have time to play and enjoy the game with friends.</p>
                </div>

                {/* <!-- Portfolio 3--> */}
                <div className="Portfolio">
                    <div className="Portfolio-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24">
                        <path d="M17.622 3c-1.913 0-2.558 1.382-5.623 1.382-3.009 0-3.746-1.382-5.623-1.382-5.209 0-6.376 10.375-6.376 14.348 0 2.145.817 3.652 2.469 3.652 3.458 0 2.926-5 6.915-5h5.23c3.989 0 3.457 5 6.915 5 1.652 0 2.471-1.506 2.471-3.651 0-3.973-1.169-14.349-6.378-14.349zm-10.622 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm10-6c.552 0 1 .447 1 1 0 .553-.448 1-1 1s-1-.447-1-1c0-.553.448-1 1-1zm-2 4c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2 2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2-2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm-10.25-1c0 .965-.785 1.75-1.75 1.75s-1.75-.785-1.75-1.75.785-1.75 1.75-1.75 1.75.785 1.75 1.75z"/>
                        </svg>  
                    </div>
                    <h4>Game</h4>
                    <p>Also have many experience for firts person shoot game. I'm the competitive when playing</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end of portfolio --> */}

    {/* <!-- portgambar --> */}
    <section id="portfolios">
        <div className="portfolios main-container">
            <h3 className="pre-title">My Works</h3>
            <h1 className="section-title">Featured Portfolios</h1>

            <div className="grid-3">
                {/* <!-- 1 --> */}
                <div className="portfolio">
                    <div className="portfolio-cover">
                        <img src="Gambar/upcoming.svg" alt="Portfolio 1"/>
                    </div>

                    <div className="portfolio-info">
                        <div className="portfolio-title">
                            <h4>Design Flyer
                               <a href="/" className="portfolio-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
                                </svg>
                               </a> 
                            </h4>
                        </div>
                    </div>
                </div>

                {/* <!-- 2 --> */}
                <div className="portfolio">
                    <div className="portfolio-cover">
                        <img src="Gambar/Palestine.svg" alt="Portfolio 2"/>
                    </div>

                    <div className="portfolio-info">
                        <div className="portfolio-title">
                            <h4>Design Posting
                               <a href="/" className="portfolio-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
                                </svg>
                               </a> 
                            </h4>
                        </div>
                    </div>
                </div>

                {/* <!-- 3 --> */}
                <div className="portfolio">
                    <div className="portfolio-cover">
                        <img src="Gambar/News-HP dari China kunci serangan hamas ke Israel.svg" alt="Portfolio 3"/>
                    </div>

                    <div className="portfolio-info">
                        <div className="portfolio-title">
                            <h4>Design Content
                               <a href="/" className="portfolio-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
                                </svg>
                               </a> 
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* <!-- end portgambar --> */}

    {/* <!-- Biodata --> */}
    <section id="bio">
        <div className="bio main-container">
            <h3 className="pre-title">About ID</h3>
            <h1 className="section-title">My Bio</h1>

            <div className="bio-grid">
                <div className="bio-left">

                    {/* <!-- ket 1 --> */}
                    <div className="keterangan">
                        <div className="line">
                            <div></div>
                        </div>

                        <div className="info-info">
                            <h4 className="info-title">Full Name</h4>
                            <p>Abmi Sukma Edri</p>
                        </div>
                    </div>

                    {/* <!-- ket2 --> */}
                    <div className="keterangan">
                        <div className="line">
                            <div></div>
                        </div>

                        <div className="info-info">
                            <h4 className="info-title">Place and date of birth</h4>
                            <p>Pekanbaru, 17 January 2004</p>
                        </div>
                    </div>

                    {/* <!-- ket3 --> */}
                    <div className="keterangan">
                        <div className="line">
                            <div></div>
                        </div>

                        <div className="info-info">
                            <h4 className="info-title">Religion</h4>
                            <p>Islam</p>
                        </div>
                    </div>

                    {/* <!-- ket4 --> */}
                    <div className="keterangan">
                        <div className="line">
                            <div></div>
                        </div>

                        <div className="info-info">
                            <h4 className="info-title">Live in now</h4>
                            <p>Kota Pekanbaru, Riau, Indonesia</p>
                        </div>
                    </div>
                </div>

                <div className="skills-right">
                    <p>
                        I have been continuosly learning in the field of informatic engineer and experimenting with new technologies and framework, 
                        i have been playing game since  i was a child. I enjoy playing games that challenges me to improve my skills.
                        And here you can see a summary of my skills overall. 
                    </p>

                    <div className="skill-list">
                        <ul>
                            <li>Java</li>
                            <li>HTML</li>
                            <li>Android Studio</li>
                            <li>Valorant Player</li>
                            <li>Basketball Player</li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    </section>

     {/* <!-- Galeri --> */}
     <section id="galeri">
        <div className="galeri main-container">
            <h3 className="pre-title">Galery</h3>
            <h1 className="section-title">Some moment need to rise</h1>

            <div className="grid-3">
                {/* <!-- 1 --> */}
                <div className="galeri">
                    <div className="galeri-cover">
                        <img src="Gambar/AbmiSukma.svg" alt="galeri 1"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end galeri --> */}

    {/* <!-- contact --> */}
    <section id="contact">
        <div className="contact main-container">

            <div className="contact-left">
                <form className="contact-form" action="">
                    <div>
                        <input type="text" placeholder="Name" name="Name"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" name="=Email"/>
                    </div>
                    <div>
                        <textarea name="Message" id="message" placeholder="Message" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button className="btn-submit">Send Mesaage</button>
                    </div>
                </form>
            </div>

            <div className="contact-right">
                {/* <!-- contact item 1 --> */}
                <div className="contact-item">
                    <div className="contact-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/>
                    </svg>
                    </div>

                    <div className="contact-item-detail">
                        <h4>Adress</h4>
                        <p>24A Wirapuri Indah, Indrapuri St</p>
                    </div>  
                </div>

                {/* <!-- contact item 2 --> */}
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                        </svg>
                    </div>

                    <div className="contact-item-detail">
                        <h4>Phone</h4>
                        <p>+62 851-5611-7924</p>
                    </div>  
                </div>
                
                {/* <!-- contact item 3 --> */}
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                        </svg>
                    </div>

                    <div className="contact-item-detail">
                        <h4>Email</h4>
                        <p>abmisukma.e@gmail.com</p>
                    </div>  
                </div>
            </div>

        </div>
    </section>
    {/* <!-- end contact --> */}

    {/* <!-- footer --> */}
    <footer>
        <div className="footer-icons">
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z"/>
                </svg>
            </a>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>
        </div>
        <p>&#169; 2024 - Made by Abmi Sukma</p>
    </footer>
    {/* <!-- end footer --> */}

    </>
    
  )
}

export default Bio