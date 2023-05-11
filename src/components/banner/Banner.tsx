type BannerProps = {
  gist: string;
};

type BannerClasses = {
  bg: string;
  fs: string;
};

const Banner = ({ gist }: BannerProps) => {
  const styles: [BannerClasses, BannerClasses] = [
    { bg: "bg-oliv", fs: "text-xs" },
    { bg: "bg-main-color", fs: "text-sm" },
  ];

  const saleContent: JSX.Element = (
    <>
      Get Sweaty, Feel Good With Up to 40% Off Select Styles.{" "}
      <span className="whitespace-nowrap">
        <a className="underline" href="/">
          Shop Men
        </a>{" "}
        |{" "}
        <a className="underline" href="/">
          Shop Women
        </a>{" "}
        *
        <a className="underline" href="/">
          Details
        </a>
      </span>
    </>
  );

  const noteContent: JSX.Element = (
    <>
      <span className="text-bold">Discover Your Perfect Pair</span>
      Try our Style Quiz to find the best pair for you.{" "}
      <a className="underline whitespace-nowrap" href="/">
        Take the Style Quiz
      </a>
    </>
  );

  const currStyles: BannerClasses = gist === "sale" ? styles[0] : styles[1];
  const bannerContent: JSX.Element =
    gist === "sale" ? saleContent : noteContent;

  return (
    <div className={`banner ${currStyles.bg}`}>
      <div className="container mx-auto">
        <p
          className={`py-2 px-2 md:px-4 sm:py-3 text-center text-white font-semibold ${currStyles.fs}`}
        >
          {bannerContent}
        </p>
      </div>
    </div>
  );
};

export default Banner;
