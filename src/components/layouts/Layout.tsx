import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div>
        <Header />
        <div className="main">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
