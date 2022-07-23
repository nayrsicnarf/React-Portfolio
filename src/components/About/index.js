import React from 'react';

function About() {
    return (
        <section className="title">
            <h1 class="name">about: Francis Ryan Aguinaldo</h1>
            <hr></hr>

            <div className="row justify-content-center">
                <div className="col-10" id="about-section">
                    <img class="mb-5" src="https://raw.githubusercontent.com/nayrsicnarf/react-portfolio/main/src/assets/Francis's-Selfie%20Medium.jpeg" alt="Francis Aguinaldo" />
                    <h2>
                        WHO AM I
                    </h2>
                    <p>
                        I was born and raised in Southern California. I attended St. John Bosco High School. The same school that some UW football fans would know, former quarterback, Keith Price. After high school, I went to Cal Poly Pomona and recieved a BS in Electrical Engineering. Moved to the state of Washington in 2010 to work at Boeing and I've been working there ever since.
                    </p>
                    <h2>
                        WHAT I LIKE
                    </h2>
                    <p>
                        I enjoy sports such as basketball, football, soccer, golf, and baseball. I also like to play most sports as well. I'm a big foodie so I love to try new types of food. Although I don't play as much, I like to occasionally play video games with my free time.
                    </p>
                    <h2>
                        FAMILY
                    </h2>
                    <p>
                        I am married to my beautiful wifem Starr. We have to wonderful kids, Lyanna (4) and Damien (11m).
                    </p>
                    <h2>
                        FUN FACT
                    </h2>
                    <p>
                        We are in the middle of a move out of state. We are moving to the Big Island in Hawaii. It's a tough decision because even though we are both implants, we grew to love the state of Washington. But an opportunity presented itself and we couldn't pass it up.
                    </p>
                    <p>
                        View full <a href="#/resume" class="link">resume</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;