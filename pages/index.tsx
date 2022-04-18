import type { NextPage } from "next";
import Head from "next/head";
import { Character, PageTemplate, Search } from "@/components";
import Styles from "../styles/internals.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>On Food App</title>
        <meta name="description" content="App de Delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTemplate>
        <div className={Styles.content}>
          <h1>Encontre opções em Delivery proximos a você</h1>
          <Search />
          <h2>
            Descubra seu novo Delivery Favorito. Milhares de opções a um clique
          </h2>
          <Character/>
        </div>
      </PageTemplate>
    </>
  );
};

export default Home;
