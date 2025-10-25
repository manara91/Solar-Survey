"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import DarkModeToggle from "../../../elements/DarkModeToggle/DarkModeToggle";
import Button from "../../../elements/Button/Button";

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
