import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import mainStyles from '../../styles/main.module.css';
import Script from 'next/script';

export default function ProjectPost() {
    return (
    <>
    <Head>
        <title>Project</title>
        <meta
          name="description"
          content="Welcome to my Portfolio."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <Script strategy='afterinteractive' 
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ID_KEY}`} />
        <Script strategy='afterinteractive'
            dangerouslySetInnerHTML={{ __html : `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.G_ID_KEY}', {
                page_path: window.location.pathname,
            });
            `,
            }}
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <main>
        <h1 className= {mainStyles.h1_project}>My Project</h1>

        <section>
            <div className= {mainStyles.bio}>
                <p className= {mainStyles.p}> 
                <h1>Women Safety Device using GPS and GSM</h1>
                The project’s main purpose was to stop crimes against women by designing a safety device consisting of
temperature sensor, heartbeat sensor and an emergency push button switch using ATMEGA8L microcontroller,
GSM module interfaced with microcontroller through MAX-RS 232, 2016
                </p>
            </div>
        </section>
        <section>
            <div className= {mainStyles.bio}>
                <p className= {mainStyles.p}> 
                <h1>Eye Blink Detection System</h1>
                Preclusion of traffic collisions due to drowsy driving by sensing an eye blink through an eye glass and thus
implementing various features on the vehicle to prevent a fatal crash. The project got selected to be presented in
State Level competition at Vigyan Bhawan Bhopal. Awarded excellence prize, 2016  
                </p>
            </div>
        </section>
    </main>
    
    </>
    );
  }