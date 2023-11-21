import { Link } from "react-router-dom";

function PageLink({ id, href, text, childClass }) {
  return (
    <li>
      <Link to={href} className={childClass}>
        {text}
      </Link>
    </li>
  );
}

export default PageLink;
