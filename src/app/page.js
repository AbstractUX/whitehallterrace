import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Whitehall Terrace</h1>
      
      <p>We are currently gathering feedback from our Shareholders to better understand any</p>
      <p>concerns, complaints, or top issues you may have while living here.</p> 

      <p>Your input is important to us and will help guide improvements moving forward.</p>
      <p>Please take a few moments to share your thoughts by filling out the form linked below.</p>
    </div>
  );

}
