import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb"
  },

  {
    code: "nl",
    name: "Dutch",
    country_code: "nl"
  },

  {
    code: "ar",
    name: "العربيه",
    country_code: "sa",
    dir: "rtl"
  }
]
const Navbar = () => {
  const currentLanguageCode = cookies.get("i18next") || "en"
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const { t } = useTranslation();
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr"
    document.title = t("app_title")
  }, [currentLanguage, t])
  return (
    <nav className={`mx-auto ${pathname === "/" && "navbar-home"}`}>
      <h1 className="logo mt-3 mb-0">{t("welcome_message")}</h1>
      <div className="navbar navbar-expand-lg ">
        <div className={`container mt-3 ${currentLanguage.code === "ar" ? "flex-row-reverse" : ""}`}>
          <a className="navbar-brand  display-logo" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler navbar-dark ms-auto humb-menu-bg-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse background-navbar background-navbar" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  navbar-font-color background-ul-color">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  {t("home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {t("links")}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("our_works")}
                </a>
                <ul className="dropdown-menu dropdown-bg-color">
                  <li className="drop">
                    <a className="dropdown-item" href="#">
                      Latest works
                    </a>
                  </li>
                  <li className="drop">
                    <a className="dropdown-item" href="#">
                      Works History
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="drop">
                    <a className="dropdown-item" href="#">
                      archives
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  {t("news")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  {t("about")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  {t("contact")}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("language")}
                </a>
                <ul className="dropdown-menu dropdown-bg-color ">
                  <li>
                    <span className="dropdown-item-text text-white">{t("language")}</span>
                  </li>
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code} >
                      <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                        <span style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }} className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                        {name}
                        {/* <img src="/Images/flags/usa-flag.png" alt="usa-flag" /> */}
                      </button>
                    </li>
                  ))}

                  {/* <li>
                    <a className="dropdown-item" href="#">
                      <img src="/Images/flags/netherlands-flag.png" alt="netherlands-flag" /> Dutch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <img src="/Images/flags/uae-flag.png" alt="uae-flag" /> Arabic
                    </a>
                  </li> */}


                </ul>
              </li>
            </ul>

          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
