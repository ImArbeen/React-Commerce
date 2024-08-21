export type SliderImageProps = {
  image: string;
  link: string;
  alt?: string;
};
const SliderComponents = ({
  image,
  link,
  alt = "img error",
}: SliderImageProps) => {
  return (
    <>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        {link ? (
          <a href="">
            {" "}
            <img src={image} alt={alt} />
          </a>
        ) : (
          <>
            {" "}
            <img src={image} alt={alt} />,
          </>
        )}
      </div>
    </>
  );
};

export default SliderComponents;
