import { nanoid } from "nanoid";

interface BreadCrumbsProps {
  links: string[];
}

const BreadCrumbs = ({ links }: BreadCrumbsProps) => {
  const listItems = links.map((link) => (
    <li className="text-[11px] leading-tight font-bold mr-[4px]" key={nanoid()}>
      <a href="/" className="underline mr-[2px] tracking-wider">
        {link}
      </a>{" "}
      /
    </li>
  ));
  return <ul className="breadcrumbs__list flex">{listItems}</ul>;
};

export default BreadCrumbs;