import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import mainStyles from '../styles/main.module.css';
import Script from 'next/script';
import React from 'react';

export default function Home() {
    return(
      <>
        <Head>
            <title>My Portfolio</title>
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
        <section className= {mainStyles.heroSection}>
          <div className= {mainStyles.hero}>

            <h2 className= {mainStyles.h2}> Welcome</h2>
            <h1 className= {mainStyles.h1}> I’m Swasti Johri</h1>
            <h1 className= {mainStyles.h1_2}>Master Of Management Student</h1>
            <div className= {mainStyles.subtext}>
            Data Driven Business Analyst Specalist
            </div>
          </div>

          <div className= {mainStyles.hero}>
                <Image 
                  className= {mainStyles.heroimage} 
                  src= "/images/profile.jpg" 
                  alt="Profile Picture"
                  priority='True'
                  width= {394}
                  height= {394}/>
          </div>
        </section>
        
        <section className= {mainStyles.bio}>
          <div >
              <p>Eager and driven recent technology graduate looking for a stimulating chance to acquire knowledge and hands-on experience, aiming to advance my career and contribute to the growth-focused objectives of an organization. Additionally, a motivated Business Analyst with a strong interest in transforming extensive data into effective business plans. Rapidly skilled in both independent work and team collaboration, adept at guiding and distributing tasks among diverse groups. Attentive to details, analytical thinker, and adaptable to contemporary work settings.</p>
          </div>
        </section>
        <section className={mainStyles.subscribeSection}>
        <div id="mc_embed_shell">
          <Link href="/cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" > </Link>
  
          <div id="mc_embed_signup">
              <form action="https://gmail.us21.list-manage.com/subscribe/post?u=3f00d03ed160bae4d19feb09a&amp;id=7681caec4c&amp;f_id=00846ae1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                  <div id="mc_embed_signup_scroll"><h2 className={mainStyles.h2_sub}>Subscribe</h2>
                      <div className= {mainStyles.formText}>
                        <label for="mce-EMAIL">
                          Email Address 
                          <span class="asterisk">*</span>
                          </label>
                          <input type="email" name="EMAIL" className={mainStyles.emailaddress}  id="mce-EMAIL" required="">
                          </input>
                            <span id="mce-EMAIL-HELPERTEXT" class="helper_text">someone@example.com</span></div>
                  <div id="mce-responses" class="clear foot">
                      <div class="response" id="mce-error-response" ></div>
                      <div class="response" id="mce-success-response"></div>
                  </div>
                  <div class="optionalParent">
                      <div class="clear foot">
                          <input type="submit" name="subscribe" id="mc-embedded-subscribe" className={mainStyles.footertext} value="Subscribe">
                            </input>
                          </div>
                  </div>
                  </div>
              </form>
          </div>
        </div>

          
        </section>
      </>
    );
}