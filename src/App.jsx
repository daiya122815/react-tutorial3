import { useState } from "react";
export default function App() {

  const images = [
    { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
    { src: "images/pic5.jpg", alt: "Large moth on a leaf" }
  ];

  const [displayedSrc, setDisplayedSrc] = useState(images[0].src);
  const [displayedAlt, setDisplayedAlt] = useState(images[0].alt);
  const [button, setButton] = useState("Dark");

  function setDisplayed(event) {
    event.preventDefault();
    setDisplayedSrc(event.target.src);
    setDisplayedAlt(event.target.alt);
  }

  function handleClick(event) {
    event.preventDefault();
    if (button == "Dark") {
      setButton("Light");
    } else {
      setButton("Dark");
    }
  }

  return (
    <>
      <h1>Image gallery example</h1>

      <div className="full-img">
        <img
          className="displayed-img"
          src={displayedSrc}
          alt={displayedAlt}
        />
        <div className="overlay" style={{ backgroundColor: button === "Dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)" }}></div>
        <button onClick={handleClick} className="dark">{button}</button>
      </div >

      <div className="thumb-bar">
        {images.map((image, index) => {
          return (
            <img
              onClick={setDisplayed}
              key={index}
              src={image.src}
              alt={image.alt}
            />
          );
        })}
      </div>

    </>
  );
}