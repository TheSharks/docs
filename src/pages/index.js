import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Powerful default features</>,
    description: (
      <>
        WildBeast is a jack of all trades for your server, with features like music playback,
        moderation features and fun commands like Urban Dictionary querying making it a good
        all-round bot for your daily needs.
      </>
    )
  },
  {
    title: <>Fully extendable</>,
    description: (
      <>
        WildBeast has been designed to be fully extendable, allowing you to add your own commands
        to the already existing framework created by us. The command API is well documented and
        easy to build upon.
      </>
    )
  },
  {
    title: <>Self-hosting support</>,
    description: (
      <>
        There are extensive directions available for running WildBeast yourself and customising it
        to your own server. With a vide variety of operating systems being supported and an easy
        setup procedure, you can get your own instance running in a matter of minutes!
      </>
    )
  }
]

const v7features = [
  {
    title: <>New changes</>,
    description: (
      <>
        Version 7 of WildBeast brings with itself several major changes, such as an entirely rewritten
        command engine and custom command creation structure, as well as support for major new features
        of the Discord API like gateway intents. There are also several bug fixes and lifecycle improvements.
      </>
    )
  },
  {
    title: <>Migration procedure</>,
    description: (
      <>
        If you're coming here to find directives on how to upgrade from WildBeast version 6, check the Migrating
        v6 => v7 page to get started. <b>Note:</b> Upgrading to v7 urgently is recommended due to the many internal
        changes that allow it to function with latest API features, such as the aforementioned gateway intents.
      </>
    )
  },
  {
    title: <>Licensing changes</>,
    description: (
      <>
        Due to the new Discord bot verification program, version 7 comes with a minor change to the licensing model of
        the WildBeast program. Fret not, however! This change will most likely not affect you if you're using WildBeast
        for small-scale personal use, and only comes in the form of a change to large-scale distribution terms.
      </>
    )
  }
]

function Feature ({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title='Documentation'
      description='WildBeast Documentation'>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/doc1')}>
              Documentation
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && v7features && (
          <section className={styles.features}>
            <div className='container'>
              <h1 className='text--center section-title'>Main features</h1>
              <div className='row'>
                {features.map((props, idx) => <Feature key={idx} {...props} />)}
              </div>
              <h1 className='text--center section-title'>Version 7</h1>
              <div className='row'>
                {v7features.map((props, idx) => <Feature key={idx} {...props} />)}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
