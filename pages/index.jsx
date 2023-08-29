import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import Miners from "../components/miners";

export default function Home() {
  return (
    
    <div>
      <Miners />
      <main className={styles.main}>
        <NFTGallery />
      </main>
    </div>
  );
}
