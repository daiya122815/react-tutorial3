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
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src="images/pic1.jpg"
          alt="Closeup of a human eye"
        />
        <div className="overlay"></div>
        <button className="dark">Darken</button>
      </div>
      <div className="thumb-bar"></div>
    </>
  );
}