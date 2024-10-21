// export default function App() {
//   const urls = [
//     "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
//     "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
//  ];
//  return (
//    <>
//      {urls.map((url, i) => {
//        return (
//          <img key={i} src={url} />
//        );
//      })}
//    </>
//  );
// }

export default function App() {
  // const obj = {
  //   "src": "src",
  //   "alt": "alt"
  // };

  // const objArray = [
  //   obj.key = ,
  // ];

  const array = [
    { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
    { src: "images/pic5.jpg", alt: "Large moth on a leaf" }
  ];

  function handleClick(event) {
    event.preventDefault();
    alert("hello");
  }
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        {/* <img
          onClick={handleClick}
          className="displayed-img"
          src="images/pic1.jpg"
          alt="Closeup of a human eye"
        /> */}
        <div className="overlay"></div>
        <button onClick={handleClick} className="dark">Darken</button>
      </div>
      <div className="thumb-bar">
        {array.map((src, i, alt) => {
          return (
            <img
              onClick={handleClick}
              key={i}
              src={src}
              alt={alt}
            />
          );
        })}
      </div>
    </>
  );
}