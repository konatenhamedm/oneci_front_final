-"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import ServiceCard from "@/components/ServiceCard";
import ServiceCardSeconde from "@/components/ServiceCardSeconde";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 mb-8 ">
        <ServiceCard
          title="Imprime extrait d'acte de naissance"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni=""
          type="extrait"
        />
        <ServiceCard
          title="Imprime acte de Mariage"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni=""
          type="mariage"
        />
        <ServiceCard
          title="Imprime acte de décès"
          description=""
          image="illustration_achat_de_timbre_oneci.svg"
          nni=""
          type="deces"
        />

        {/*  <ServiceCard
        title="CARTE TEMPORAIRE"
        description=""
        image="illustration_achat_de_timbre_oneci.svg"
        nni={params.nni}
        type="carte"
      /> */}
      </div>

      <div className="grid grid-cols-2 gap-2 ">
        <ServiceCardSeconde
          title="Services d'identités"
          description=""
          image="illustration_services_vip_oneci.svg"
          nni=""
          type="service"
        />
        <ServiceCardSeconde
          title="Certificat de residence"
          description=""
          image="illustration_services_vip_oneci.svg"
          nni=""
          type="certificat"
        />
      </div>
    </>
  );
}
