import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import logo from "@site/static/img/burnys_logo_circle_380_380.png";






function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx( styles.heroBanner)}  style={{backgroundImage: `url('../../burning/img/pink_bg_Plain_SVG.svg')`}}  >
      <div className="container">
	    
		<img src={logo} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            請由此參觀 >> ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="布妮的作品區">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
