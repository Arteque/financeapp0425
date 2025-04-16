import { NavLink } from "react-router-dom";


const Navigation = () => {
  
  const urls = [
    {
      id: 1,
      title: "Overview",
      url: "/",
      icon: `/icon-nav-overview.svg`,
    },
    {
      id: 2,
      title: "Transactions",
      url: "/transactions",
      icon: `/icon-nav-transactions.svg`,
    },
    {
      id: 3,
      title: "Budgets",
      url: "/budgets",
      icon: `/icon-nav-budgets.svg`,
    },
    {
      id: 4,
      title: "Pots",
      url: "/pots",
      icon: `/icon-nav-pots.svg`,
    },
    {
      id: 5,
      title: "Recurring Bilss",
      url: "/recurring_bills",
      icon: `icon-nav-recurring-bills.svg`,
    },
  ];

  return (
    <nav>
      <ul className="nav_ul">
        {urls &&
          urls.map(({ id, title, url, icon }) => (
            <li key={id}>
              <NavLink
                to={url}
                data-location={url}
                className={({ isActive }) =>
                  (isActive ? "current" : null) + " link"
                }
              >
                <span className="icon" style={{
                   backgroundColor: 'currentColor',  /* the current color is set in the style.scss */
                   WebkitMaskImage: `url("${icon}")`,
                   WebkitMaskRepeat: 'no-repeat',
                   WebkitMaskSize: 'contain',
                   WebkitMaskPosition: 'center',
               
                   maskImage: `url("${icon}")`,
                   maskRepeat: 'no-repeat',
                   maskSize: 'contain',
                   maskPosition: 'center',
                  }}>
                  <img src={icon} alt={title} />
                </span>
                <span className="text">{title}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
