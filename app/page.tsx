export const dynamic = "force-dynamic";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";
import Image from "next/image";
import getListings, { IListingsParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Section from "./components/Section";
import Carousel from "./components/Carousel";

const Home = async () => {
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Container>
        <section className="bg-custom-brown pt-24 pb-10 px-16">
          <h2 className=" uppercase text-center relative top-5 z-10 text-slate-50 font-bold text-6xl ">
            tinggal dengan nyaman !
          </h2>
          <div className="relative overflow-hidden h-[500px] w-full">
            <Image
              alt="Paradise View"
              src="/landing.jpg"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex gap-4 mt-9 flex-wrap justify-center">
            <div className="text-2xl font-extrabold h-56 flex flex-col justify-center overflow-hidden bg-[#9FD86A] text-black p-7 w-80">
              <p>Nikmati Liburan yang Luar Biasa!</p>
            </div>
            <div className="bg-[#F0CAC5] gap-4 h-56 flex flex-col justify-center overflow-hidden bg-[#9FD86A] text-black p-7 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <p className="uppercase font-bold text-xl">
                Temukan Kesempurnaan di Setiap Sudut
              </p>
            </div>
            <div className="relative bg-[#EED7B3] gap-4 h-56 flex flex-col justify-center overflow-hidden bg-[#9FD86A] text-black p-7 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-96 h-96 absolute z-1 rotate-6 text-slate-50 opacity-50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>
              <div className="relative z-2 text-2xl font-extrabold h-56 flex flex-col justify-center overflow-hidden bg-transparent text-black p-7 w-80">
                <p>
                  <span className="text-4xl">M</span>EWAH
                </p>
                <p>
                  <span className="text-4xl">M</span>ODERN
                </p>
                <p>
                  <span className="text-4xl">M</span>EKSKLUSIF
                </p>
              </div>
            </div>
          </div>
        </section>
        <Section shortDescription="Welcome to" title="Paradise Resort">
          <p className="max-w-5xl mx-auto mt-10 text-center text-md text-custom-gray">
            Selamat datang di Hotel Paradise Resort, sebuah surga tersembunyi di
            tepi pantai yang menawarkan pengalaman tak terlupakan bagi tamu-tamu
            kami. Hotel ini dikelilingi oleh pemandangan alam yang menakjubkan,
            hamparan pasir putih yang lembut, dan air laut yang biru jernih.
            Kami menawarkan akomodasi yang mewah dengan desain modern yang
            memadukan sentuhan klasik, menciptakan suasana yang santai namun
            elegan. Setiap kamar dilengkapi dengan perabotan berkualitas tinggi
            dan perlengkapan kamar mandi mewah untuk memastikan kenyamanan tamu
            kami.
          </p>
        </Section>
        <Section title="Fasilitas">
          <div className="max-w-lg mx-auto mt-10">
            <Carousel />
          </div>
        </Section>
      </Container>
    </ClientOnly>
  );
};

export default Home;
