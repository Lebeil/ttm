import Head from 'next/head'
import Image from 'next/image'
import Layout from "../Components/layout";
import Homes from "../Components/home";
import Propos from "../Components/propos";
import Entreprise from "../Components/entreprise";

export default function Home() {
  return (
    <Layout>
      <Homes/>
        <Propos/>
        <Entreprise/>
    </Layout>
  )
}
