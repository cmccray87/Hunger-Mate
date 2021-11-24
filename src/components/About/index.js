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
            <li>David &#128663;</li>
            <li>Micah &#128664;</li>
            <li>Missy &#128641;</li>
            <li>Gbenga &#128757;</li>
            <li>Cody &#128692;</li>
          </ul>
        </p>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p>
        Text or Call 1(800)FEEDMEE
        </p>
      </div>
    </section>
  );
}

export default About;
