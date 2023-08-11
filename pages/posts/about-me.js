import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import aboutStyle from '../../styles/about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDatabase, faFileExcel, faServer} from '@fortawesome/free-solid-svg-icons';
import * as code from '@fortawesome/free-brands-svg-icons';

export default function AboutMePost() {
    return (
    <>
    <Head>
      <title>About Me</title>
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
      {/* <h1 className= {aboutStyle.h1_about}>About Me</h1> */}
      <section>
            <h2 className= {aboutStyle.h2}>Skills</h2>
            <div className= {aboutStyle.skills}>
                  <FontAwesomeIcon icon={code.faPython} /> Python
                  <FontAwesomeIcon icon={code.faHtml5} /> HTML
                  <FontAwesomeIcon icon={code.faPhp} /> Php
                  <FontAwesomeIcon icon={faFileExcel} /> Excel
                  <FontAwesomeIcon icon={code.faRProject} /> R
                  <FontAwesomeIcon icon={code.faReact} /> React
                  <FontAwesomeIcon icon={faDatabase} /> Mongo
                  <FontAwesomeIcon icon={faServer} /> SQL
                  <FontAwesomeIcon icon={code.faJs} /> JavaScript
                  <FontAwesomeIcon icon={code.faNodeJs} /> NodeJs
                  <FontAwesomeIcon icon={code.faCss3} /> CSS
                  <FontAwesomeIcon icon={code.faAws} /> AWS
                  <FontAwesomeIcon icon={code.faDocker} /> Docker
                  <FontAwesomeIcon icon={code.faMailchimp} /> Mailchimp
                  <FontAwesomeIcon icon={code.faJava} /> Java
                  <FontAwesomeIcon icon={code.faAtlassian} /> Agile
                  <FontAwesomeIcon icon={code.faDev} /> DevOps
            </div>
      </section>
      <section>
            <h2 className= {aboutStyle.h2}>Experience</h2>
            <article>
                  <h3 className= {aboutStyle.jobTitle}><u> Associate | Rackspace Technology </u></h3>
                  <div className= {aboutStyle.desc}>
                        <h4> 07/2021 - 12/2022 </h4>

                        <p> Responsible for creatively managing the relationship for Onica, an AWS Partner Network (APN) Premier Consulting Partner and Managed Service Provider, supporting nearly 1,000 individual customers leveraging AWS.
                              Strategically manage an account base of 1000+ customers by providing IT infrastructure consulting across a vast portfolio of services and products that include AWS. </p>
                  </div>
            </article>
            <article>
                  <h3 className= {aboutStyle.jobTitle}><u> Change Management Specialist | Orange Business Services </u></h3>
                  
                  <div className= {aboutStyle.desc}>
                        <h4> 07/2017 - 04/2021 </h4>

                        <p> Successfully onboarding new customers by designing plans for training, implementation & mutual success.
                              Maintaining high satisfaction index for customers of Orange by ensuring standardisation in process adherence & agility in task resolution.
                              Spearheading support & change management for 6 critical projects having combined spend of $500k+.
                              Resourceful in implementing strategic plans for query resolution, maintaining SLA across different type of processes and guidelines.</p>
                  </div>
                </article>
      </section>
      <section>
            <h2 className= {aboutStyle.h2}>Passion</h2>
            <div className= {aboutStyle.passion}>
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Passionate Data-Driven Problem Solver
                        </h3>
                        <p>Passionate about using data to solve complex problems. 
                              Ability to demonstrate a systematic and disciplined approach to evaluate and improve risk management in their work.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Proficient in Tools and Technologies
                        </h3>
                        <p>Enthusiastic about working with various data analytics tools and technologies. Leverage tools to manipulate, extract, and analyze data efficiently.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Continuous Learner and Adaptable
                        </h3>
                        <p>Open to learning and adapting to new technologies and methodologies.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Skilled in Visual Storytelling
                        </h3>
                        <p>Passion for data visualization is evident through their use of Power BI.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Attentive to Detail
                        </h3>
                        <p>A strong attention to detail, ensuring data accuracy and reliability.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Driven for Improvement
                        </h3>
                        <p>A proactive approach to continually improving processes and systems.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Collaborative Team Player
                        </h3>
                        <p>Work effectively within teams to achieve common goals.</p>
                  </div>
            </div>
      </section>
    </main>
    </>
    );
  }