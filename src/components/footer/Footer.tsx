import { nanoid } from "nanoid";
import SvgSprites from "../UI/SvgSprites";

type BlockProps = {
  title: string;
  className?: string,
  children: JSX.Element;
};

type ListLinksProps = {
  links: string[];
};

const Block = ({ title, children, className }: BlockProps) => {
  return (
    <div className={`${className}`}>
      <h5 className="text-white font-bold text-lg mb-1 sm:mb-2">{title}</h5>
      {children}
    </div>
  );
};

const ListLinks = ({ links }: ListLinksProps) => {
  return (
    <ul>
      {links?.map((link) => (
        <li className="mb-2 last:mb-0 flex sm:mb-3" key={nanoid()}>
          <a className="text-sm text-white" href="/">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  const helpLinks = [
      "+380000000000",
      "+380000000011(Text)",
      "help@ivnnvi.com",
      "Returns/Exchanges",
      "FAQ/Contact Us",
    ],
    shopLinks = [
      "Men's Shoes",
      "Women's Shoes",
      "Men's Apparel",
      "Women's Apparel",
      "Socks"
    ];

  return (
    <>
      <footer className="footer py-9 sm:py-11 md:py-12 lg:py-[90px] bg-main-color">
        <div className="container mx-auto px-3 flex flex-wrap gap-5 sm:justify-between md:justify-start md:gap-8">
          <Block title="Shop">
            <ListLinks links={shopLinks} />
          </Block>
          <Block title="Help">
            <ListLinks links={helpLinks} />
          </Block>
          <Block title="Follow The Flock" className="w-[100%] max-w-[404px] sm:max-w-[300px] md:max-w-[404px]">
            <>
              <p className="text-sm text-white mb-3 sm:mb-4">
                Exclusive offers, a heads up on new things, and sightings of
                Ivn_nvI in the wild. Oh, we have cute sheep, too.
              </p>
              <ul className="flex items-center">
                <li className="mr-[8px]">
                  <a href="/">
                    <svg className="footer__icon footer__icon--inst w-6 h-6">
                      <use xlinkHref="#instagram-icon"/>
                    </svg>
                  </a>
                </li>
                <li className="mr-[3px]">
                  <a href="/">
                    <svg className="footer__icon footer__icon--twitter w-6 h-6">
                      <use xlinkHref="#twitter-icon"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg className="footer__icon footer__icon--twitter w-5 h-5">
                      <use xlinkHref="#facebook-icon"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </>
          </Block>
        </div>
      </footer>
      <SvgSprites />
    </>
  );
};

export default Footer;
