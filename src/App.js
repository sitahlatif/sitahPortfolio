import React, { Component } from "react";

import Gallery from "./Gallery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-wrap">
          <nav id="nav">
            <ul>
              <li>
                <a href="index.html" className="active">
                  <span className="icon fa-home" />
                </a>
              </li>
              <li>
                <a href="gallery.html">
                  <span className="icon fa-camera-retro" />
                </a>
              </li>
            </ul>
          </nav>

          <section id="main">
            <section id="banner">
              <div className="inner">
                <h1>Hello, I'm Sitah</h1>
                <p>Here I'm Photographer </p>
                <ul className="actions">
                  <li>
                    <a href="#galleries" className="button alt scrolly big">
                      Continue
                    </a>
                  </li>
                </ul>
                <p>
                  As Programmer <br />
                  <a
                    href="http://www.sitahalsaleem.cf"
                    style={{ color: "coral" }}
                  >
                    Click here to Know More about me
                  </a>
                </p>
              </div>
            </section>

            <Gallery />

            <section id="contact">
              <div className="social column">
                <h3>About Me</h3>
                <p>
                  I'm Sitah Alsaleem, 23 years old, graduated from king faisal
                  university in computer scince major.
                </p>
                <p>
                  I love photography. programming , Traveling and reading books
                  . This site is about my photos taken from different places
                </p>
                <h3>Follow Me</h3>
                <ul className="icons">
                  <li>
                    <a
                      href="https://twitter.com/SitahSweet"
                      className="icon fa-twitter"
                    >
                      <span
                        href="https://twitter.com/SitahSweet"
                        className="label"
                      >
                        Twitter
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/SitahSweet"
                      className="icon fa-facebook"
                    >
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/SitahSweet"
                      className="icon fa-instagram"
                    >
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="column">
                <h3>Get in Touch</h3>
                <form action="#" method="post">
                  <div className="field half first">
                    <label for="name">Name</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field">
                    <label for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="6"
                      placeholder="Message"
                    />
                  </div>
                  <ul className="actions">
                    <li>
                      <input
                        value="Send Message"
                        className="button"
                        type="submit"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
