import styles from "./page.module.css";
import Head from "next/head";
import Header from "./components/Header";
import Form from "./components/Form";
import Output from "./components/Output";

export default function Home() {
  return (
    <>
      <Header />
      <Form />
      <Output />
    </>
  );
}
