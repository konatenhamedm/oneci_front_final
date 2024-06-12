import Tuto from "@/components/Tuto";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import LoginModal from "@/components/modals/LoginModal";
import VerificationModal from "@/components/modals/VerificationModal";
import { Html, Head, Main, NextScript } from "next/document";
/* import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="container bg-white  max-w-5xl border-double border-4 border-[#f0a020]">
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <Header />
            <div className="text-neutral-800 py-6 mt-auto relative overflow-hidden flex flex-col justify-around w-full  h-[440px] bg-white p-3 px-6">
              <Main />
            </div>
            <Footer />
            <LoginModal />
            {/* <VerificationModal /> */}
            <Tuto />
            {/*  <ErrorNotFoundModal /> */}
          </main>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
