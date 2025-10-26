/**
 * Dynamic header component with context-aware navigation
 * Displays theme toggle and conditional action buttons:
 * - "New Test" button on results page
 * - "Home" button on contact page
 * Uses Next.js navigation hooks for routing
 */
"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import DarkModeToggle from "../Elements/DarkModeToggle/DarkModeToggle";
import Button from "../Elements/Button/Button";

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const handleRetest = () => {
    router.push("/survey");
  };
  const goToHome = () => {
    router.push("/");
  };
  const isResultsPage = pathname === "/results";
  const isContactPage = pathname === "/contact";
  return (
    <div className={styles.headerContainer}>
      <DarkModeToggle />
      {isResultsPage && (
        <Button text={"Neuer Test"} handleClick={handleRetest} />
      )}

      {isContactPage && <Button text={"Home"} handleClick={goToHome} />}
    </div>
  );
}

export default Header;
