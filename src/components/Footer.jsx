import { ReactComponent as LogoGithub } from "../images/logo-github.svg";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/thiagosequeira"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoGithub />
      </a>
    </footer>
  );
};

export default Footer;