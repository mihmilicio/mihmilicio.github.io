import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Milena Milicio</title>
        <link rel="stylesheet" href="/global.css" />
        <script
          src="https://kit.fontawesome.com/bc8eb1b8d2.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Header />

      <main style={{ padding: '0 24px' }}>
        <Section title="who am I?">
          <p className="mt-0">
            I'm a 20yo brazilian{' '}
            <span className="text-muted">(Curitiba-PR)</span> front-end
            developer. Currently working with ReactJS at Paraná Banco and
            studying at Universidade Positivo{' '}
            <span className="text-muted">
              (Bacharelado em Sistemas de Informação){' '}
            </span>
            since 2020.
          </p>
          <p>
            Through the years 2016 - 2019 I studied at TECPUC{' '}
            <span className="text-muted">(Técnico em Informática)</span>. I
            started working with front-end at 2018, and my favorite part about
            the job always has been CSS.
          </p>
        </Section>

        <Section title="now">
          <p className="mt-0">
            Beyond academic studies, I have a few things going on right now:
          </p>
          <ul>
            <li>Studying and training for Android native development</li>
            <li>Trying my best&trade; at UI/UX design and Figma</li>
            <li>
              Focusing on{' '}
              <a
                href="https://github.com/mihmilicio/ktane-manual-android"
                target="_blank"
              >
                KTANE Auto Manual for Android
              </a>
            </li>
            <li>
              Reading "Steal Like an Artist" by Austin Kleon, and "The Seven
              Husbands of Evelyn Hugo" by Taylor Jenkins Reid
            </li>
            <li>Hoping for getting vaccinated soon</li>
          </ul>
        </Section>

        <Section title="contact">
          <p className="mt-0">
            If you wanna chat, DM me at Instagram - I'm always open for a good
            talk! If you're serious, take my LinkedIn or e-mail.
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}
