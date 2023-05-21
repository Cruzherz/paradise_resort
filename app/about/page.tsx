import Container from "@/app/components/Container";
import ClientOnly from "../components/ClientOnly";
import Section from "../components/Section";

const About = async () => {
  return (
    <ClientOnly>
      <Container>
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
      </Container>
    </ClientOnly>
  );
};

export default About;
