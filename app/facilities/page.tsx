import Container from "@/app/components/Container";
import ClientOnly from "../components/ClientOnly";
import Section from "../components/Section";
import Carousel from "../components/Carousel";
import CarouselGym from "../components/CarouselGym";
import CarouselYoga from "../components/CarouselYoga";
import CarouselRes from "../components/CarouselRes";

const About = async () => {
  return (
    <ClientOnly>
      <Container>
        <Section title="Fasilitas">
              <Carousel />
        </Section>
        <Section shortDescription="Our Facilities" title="GYM">
        <div className="max-w-lg mx-auto mt-10">
            <CarouselGym />
          </div>
          <p className="max-w-5xl mx-auto mt-10 text-center text-md text-custom-gray">
          Hotel Paradise Resort menawarkan fasilitas gym modern dan lengkap bagi para tamu. 
          Dengan ruangan yang luas dan peralatan canggih, tamu dapat menjaga kesehatan dan kebugaran mereka. 
          Gym ini dilengkapi dengan mesin kardio dan peralatan kekuatan, serta didukung oleh staf ahli yang siap membantu. 
          Tamu dapat berlatih dengan nyaman dan efektif di fasilitas gym Hotel Paradise Resort.
          </p>
        </Section>
        <Section shortDescription="Our Facilities" title="YOGA"> 
        <div className="max-w-lg mx-auto mt-10">
            <CarouselYoga />
          </div>
          <p className="max-w-5xl mx-auto mt-10 text-center text-md text-custom-gray">
          Hotel Paradise Resort juga menyediakan fasilitas yoga yang menghadirkan kedamaian dan keseimbangan bagi para tamu. 
          Dalam ruang yoga yang tenang dan nyaman, tamu dapat menikmati latihan yoga yang dipandu oleh instruktur berpengalaman. 
          Fasilitas ini dilengkapi dengan perlengkapan yoga seperti matras, bantal meditasi, dan alat pendukung lainnya. Tamu dapat memilih dari berbagai jenis kelas yoga, 
          mulai dari yoga Vinyasa yang dinamis hingga yoga Yin yang menenangkan. 
          Dengan atmosfer yang santai dan pemandangan alam yang indah, fasilitas yoga di Hotel Paradise Resort adalah tempat yang ideal untuk memulihkan pikiran, tubuh, dan jiwa.
          </p>
        </Section>
        <Section shortDescription="Our Facilities" title="RESTAURANT">
        <div className="max-w-lg mx-auto mt-10">
            <CarouselRes />
          </div>
          <p className="max-w-5xl mx-auto mt-10 text-center text-md text-custom-gray">
          Hotel Paradise Resort juga memiliki restoran yang menawarkan pengalaman kuliner 
          yang istimewa bagi para tamu. 
          Restoran ini menyajikan beragam hidangan lezat dengan menu yang variatif. 
          Dari hidangan lokal autentik hingga masakan internasional, tamu dapat menikmati 
          berbagai pilihan kuliner yang disiapkan dengan bahan-bahan segar dan berkualitas tinggi. 
          Dengan suasana yang elegan dan pelayanan yang ramah, restoran Hotel Paradise Resort memberikan 
          pengalaman makan yang tak terlupakan. Tamu dapat menikmati hidangan lezat sambil menikmati 
          pemandangan yang indah atau bersantap di lingkungan yang intim. Dengan kualitas kuliner 
          yang tinggi dan atmosfer yang menyenangkan, restoran ini menjadi tempat yang sempurna untuk
           menikmati makanan yang lezat dan bersantap dengan gaya di Hotel Paradise Resort.
          </p>
        </Section>
      </Container>
    </ClientOnly>
  );
};

export default About;
