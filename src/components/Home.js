import React from "react";
import {
    Link
} from "react-router-dom";
export default function Home() {
    return (
        <div className="home-content">
            <div className="para">
                Hi, I am Mohit. I build things that help users have a better experience on web.
      </div><br />
            <div className="para">
                Currently working as a Senior Software Engineer at <a href="https://www.impactanalytics.co/"><span className="para-link">Impact Analytics</span></a> where I build retail based SAAS products.
      </div><br />
            <div className="para">
                My past gig was at <a href="https://www.faceprep.in/"><span className="para-link">Chalkstreet (FACE)</span></a> where I built an online learning platform.
      </div><br />
            <div className="para">
                I enjoy watching football (CFC Pride of London), anime and playing games in my free time. Check out my <Link to="/"><span className="para-link">watchList</span></Link>.
      </div><br />
            <div className="para">
                You can find me on <a href="https://github.com/mohits1005"><span className="para-link">Github</span></a>, and <a href="https://www.linkedin.com/in/mohit-sharma-09b5a8154/"><span className="para-link">LinkedIn</span></a>, or reach me via <a href="mailto:mohit.shar1005@gmail.com"><span className="para-link">email</span></a>. Let's turn the world upside down. :P
      </div>
        </div>
    );
}
