module.exports = {
  title: 'WildBeast',
  tagline: 'A Discord bot made for maximum personalisation and ease of use. ',
  url: 'https://docs.thesharks.xyz',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'TheSharks', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'WildBeast',
      logo: {
        alt: 'Logo',
        src: 'img/logo_small.png'
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/TheSharks/WildBeast',
          label: 'GitHub',
          position: 'left'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1'
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/wildbot'
            },
            {
              label: 'Invite WildBot',
              href: 'https://invite.thesharks.xyz/'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TheSharks'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TheSharks. Documentation built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TheSharks/docs/edit/master/website/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TheSharks/docs/edit/master/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
