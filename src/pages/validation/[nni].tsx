import ValidationCard from "@/components/ValidationCard";
import { useRouter } from "next/router";
import React from "react";

function validation() {
  const router = useRouter();
  const { operateur } = router.query;
  const { doc } = router.query;
  const { nombre } = router.query;
  const { nni } = router.query;

  return (
    <>
      <div className="grid grid-cols-8 gap-2 justify-between ">
        <ValidationCard
          operateur={operateur}
          nombre={nombre}
          document={doc}
          nni={nni}
        />
      </div>
    </>
  );
}

export default validation;
