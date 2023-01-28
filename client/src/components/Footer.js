import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="center">
          <a
            href="https://github.com/PrismaticDevs"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" sx={{ fontSize: 60 }} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
