import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
    <img className={styles.alchemy_logo} alt={styles.logo} src="/gsd.png"></img>
      
      <a
        href="https://bafybeifpfzjnrub4xkpberlusdyhy4kx3nywzuvr25uyetkf3sn2he64cq.ipfs.dweb.link/"
        target={"_blank"}
      >
        </a>
        <div>
          <ul>
          <a href="https://bafybeifpfzjnrub4">Your Tokens</a>
          <a href="https://bafybeifpfzjnrub4">Your Games</a>
          <a href="https://bafybeifpfzjnrub4">Your Future</a>
          </ul>
        </div>
      
      <ConnectButton></ConnectButton>
    </nav>
  );
}
