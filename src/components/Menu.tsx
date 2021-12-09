import React, { useState } from "react";
import styles from "../styles/components/menu.module.scss";
import { useTheme } from "../hooks/useChooseTheme";
import { Link } from "react-router-dom";

//Componente
export function Menu() {
  const { darkOn, enableDarkMode, enableLightMode } = useTheme();

  return (
    <>
      <div className={styles.app}>
        <header className={styles.content}>
          <div className={styles.logo}>
            {darkOn ? (
              <img src="dark-logo.svg" alt="HiText!" />
            ) : (
              <img src="light-logo.svg" alt="HiText!" />
            )}
          </div>
          <div className={styles.chooseTheme}>
            {darkOn ? (
              <button onClick={enableLightMode}>
                <img
                  src="sun.svg"
                  alt="Enable light mode"
                  title="Enable light mode"
                />
              </button>
            ) : (
              <button onClick={enableDarkMode}>
                <img
                  src="moon.svg"
                  alt="Enable dark mode"
                  title="Enable dark mode"
                />
              </button>
            )}
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href="https://github.com/Greens-Organization/HiText/tree/main"
              target="_blank"
            >
              Github
            </a>
          </nav>
        </header>
        <main></main>
      </div>
    </>
  );
}
function useChooseTheme(): {} {
  throw new Error("Function not implemented.");
}