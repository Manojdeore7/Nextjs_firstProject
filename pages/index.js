import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="./">Home</Link>
      <Link href="./AboutUs">AboutUs</Link>
      <Link href="./">Home</Link>
    </>
  );
}
