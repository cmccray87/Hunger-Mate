import React from 'react';
import { Image } from 'react-bootstrap';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
          <p>
        Rough night? You’ve come to the right place to start your recovery!
        </p>
        <p>
        When someone says, “Beer me!” you hand them a beer. When someone says, “Feed me!” you hand them Hunger-Mate!
        </p>
        <p>
        Our options are simple with a one-click food and drink combo. Sign up today to get your order on the way!
        </p>
      <Image src={ require("../../assets/images/delivery.jpg") } />
      </div>
      <div>
        <h2>Meet Our Drivers, Riders &amp; Flyers</h2>
        <p>
          <ul>
            <li>David <span role="img" aria-label="car emoji">&#128663;</span></li>
            <li>Micah <span role="img" aria-label="car emoji">&#128664;</span></li>
            <li>Missy <span role="img" aria-label="car emoji">&#128641;</span></li>
            <li>Gbenga <span role="img" aria-label="car emoji">&#128757;</span></li>
            <li>Cody <span role="img" aria-label="car emoji">&#128692;</span></li>
          </ul>
        </p>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p>
        Text or Call 1(800)HNGRMTE
        </p>
      </div>
    </section>
  );
}

export default About;
