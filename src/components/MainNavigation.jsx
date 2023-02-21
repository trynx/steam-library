import { Link, useHref } from "react-router-dom";

export const MainNavigation = () => {
  const href = useHref();
  const isHome = href === "/";

  return (
    <header>
      <ul>
        <Link to="/">Home</Link>
        {
          !isHome /* && TODO: Add SearchRecipes once it's better decoupled from mainpage -> Only when not in home */
        }
      </ul>
    </header>
  );
};
