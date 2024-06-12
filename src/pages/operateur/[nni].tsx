import OperateurCard from "@/components/OperateurCard";
import { useRouter } from "next/router";
import React from "react";

function Operateur() {
  const router = useRouter();
  const { doc } = router.query;
  const { nombre } = router.query;

  return (
    <>
      <div className="grid grid-cols-2 gap-2 ">
        <OperateurCard
          title="Orange Money"
          color="#000000"
          description="Orange est là"
          image="orange"
          type="orange"
          doc={doc}
          nombre={nombre}
        />
        <OperateurCard
          title="MTN Money"
          color="#f7c201"
          description="Everywhere you go"
          image="mtn"
          type="mtn"
          doc={doc}
          nombre={nombre}
        />
        <OperateurCard
          title="MOOV Money"
          color="#0063ad"
          description="Un monde nouveau vous appelle"
          image="moov"
          type="moov"
          doc={doc}
          nombre={nombre}
        />
        <OperateurCard
          title="Wave"
          color="#1dc4ff"
          description="Un monde nouveau vous appelle"
          image="wave"
          type="wave"
          doc={doc}
          nombre={nombre}
        />
      </div>
    </>
  );
}

export default Operateur;
