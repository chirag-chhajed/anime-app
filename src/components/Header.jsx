import { Link } from "react-router-dom";
import styles from "../css/header.module.css";
import { RiHeartFill, RiSearchLine } from "@remixicon/react";

export default function Header() {
  return (
    <header className={styles}>
      <Link to="/">
        <h2>
          Anime
          <br /> Paradise
        </h2>
      </Link>

      <div>
        <Link to="/favourite">
          <RiHeartFill
            size={32} // set custom `width` and `height`
            color="red" // set `fill` color
            className="red" // add custom class name
            aria-description="Favourite"
          />
        </Link>
        <Link to="/search">
          <RiSearchLine size={32} color="white" aria-description="Search" />
        </Link>
      </div>
    </header>
  );
}
