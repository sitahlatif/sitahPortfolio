import React, { Component } from "react";
import image1 from "./images/fulls/12.jpg";
import image_1 from "./images/thumbs/12.jpg";
import image2 from "./images/fulls/05.jpg";
import image_2 from "./images/thumbs/05.jpg";
import image3 from "./images/fulls/13.jpg";
import image_3 from "./images/thumbs/13.jpg";
import image4 from "./images/fulls/02.jpg";
import image_4 from "./images/thumbs/02.jpg";
import image5 from "./images/fulls/03.jpg";
import image_5 from "./images/thumbs/03.jpg";
import image6 from "./images/fulls/11.jpg";
import image_6 from "./images/thumbs/11.jpg";
import image7 from "./images/fulls/14.jpg";
import image_7 from "./images/thumbs/14.jpg";
import image8 from "./images/fulls/07.jpg";
import image_8 from "./images/thumbs/07.jpg";

class Gallery extends Component {
  render() {
    return (
      <div id="galleries">
        <div className="gallery">
          <header className="special">
            <h2>What's New</h2>
          </header>
          <div className="content">
            <div className="media">
              <a href={image1}>
                <img
                  src={image_1}
                  alt=""
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div className="media">
              <a href={image2}>
                <img
                  src={image_2}
                  alt=""
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div className="media">
              <a href={image3}>
                <img
                  src={image_3}
                  alt=""
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div className="media">
              <a href={image4}>
                <img
                  src={image_4}
                  alt=""
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div className="media">
              <a href={image5}>
                <img
                  src={image_5}
                  alt=""
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div className="media">
              <a href={image6}>
                <img
                  src={image_6}
                  alt=""
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div className="media">
              <a href={image7}>
                <img
                  src={image_7}
                  alt=""
                  title="This right here is a caption."
                />
              </a>
            </div>
            <div className="media">
              <a href={image8}>
                <img
                  src={image_8}
                  alt=""
                  title="This right here is a caption."
                />
              </a>
            </div>
          </div>
          <footer>
            <a href="gallery.html" className="button big">
              Full Gallery
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
export default Gallery;
