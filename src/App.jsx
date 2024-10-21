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
    { "images/pic1.jpg": "Closeup of a human eye" },
    { "images/pic2.jpg": "Rock that looks like a wave" },
    { "images/pic3.jpg": "Purple and white pansies" },
    { "images/pic4.jpg": "Section of wall from a pharoah's tomb" },
    { "images/pic5.jpg": "Large moth on a leaf" }
  ];

  function handleClick(event) {
    event.preventDefault();
    alert("hello");
  }
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          onClick={handleClick}
          className="displayed-img"
          src="images/pic1.jpg"
          alt="Closeup of a human eye"
        />
        {/* {array.map((src, alt) => {
          return (
            <img
              onClick={(handleClick)}
              key={alt}
              src={src}
            />
          );
        })} */}
        <div className="overlay"></div>
        <button onClick={handleClick} className="dark">Darken</button>
      </div>
      <div className="thumb-bar"></div>
    </>
  );
}