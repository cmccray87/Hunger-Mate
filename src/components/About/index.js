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
        When someone says, “Beer me!”
        you hand them a beer. When someone says, “Feed me!” you hand them Hunger-Mate!
        Our options are simple with a one-click food and drink combo. Sign up today to get your order on the way!
        </p>
        <p>
          For some it may be breakfast burritos, for others it might be tacos, and for very few it may be a banana.
          You are hungover, and we are eager to help; let us help you! Order your most desired food and beverage combo
          right here and we'll deliver it to you in just minutes! 
        </p>
        
      <Image src={ require("../../assets/images/delivery.jpg") } />
     
    
        
       
      </div>
    </section>
  );
}

export default About;
