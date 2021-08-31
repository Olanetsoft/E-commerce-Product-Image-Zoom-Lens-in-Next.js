import ReactImageMagnify from "react-image-magnify";

export default function IndexPage() {
  const imageBaseUrl =
    "https://res.cloudinary.com/olanetsoft/image/upload/cat.jpg";

  const sizes = [
    "355",
    "481",
    "584",
    "687",
    "770",
    "861",
    "955",
    "1033",
    "1112",
    "1192",
    "1200"
  ];

  const srcSet = () => {
    sizes.forEach((i) => {
      return `https://res.cloudinary.com/olanetsoft/image/upload/w_${i},c_scale/cat.jpg`;
    });
  };
  return (
    <div className="body">
      <div className="image">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Cat",
              isFluidWidth: true,
              src: `${imageBaseUrl}`,
              srcSet,
              sizes:
                "(min-width: 1000px) 33.5vw, (min-width: 415px) 50vw, 100vw"
            },
            largeImage: {
              alt: "",
              src: `${imageBaseUrl}`,
              width: 1200,
              height: 1800
            },
            isHintEnabled: true
          }}
        />
      </div>
      <div className="text">
        <h2>E-commerce Product Image Zoom Lens in Next.js</h2>
        <h3>Touch</h3>

        <p>Hover image to magnify</p>
      </div>
    </div>
  );
}
