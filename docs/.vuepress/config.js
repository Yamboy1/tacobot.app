const sidebar = require('./sidebar.js');

const config = {
  title: 'Taco Bot',
  description: 'Manage Trello boards and get notified of board updates straight from Discord!',
  main: 'layouts/Layout.vue',
  head: [
    // Manifest
    ['link', { rel: 'icon', href: '/logo_happy.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],

    // Icons
    ['link', { rel: 'mask-icon', href: '/logo/safari-pinned-tab.svg', color: '#93a01e' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo/apple-touch-icon.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/logo/favicon-16x16.png' }],
    ['link', { rel: 'icon', sizes: '32x32', href: '/logo/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '192x192', href: '/logo/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', sizes: '512x512', href: '/logo/android-chrome-512x512.png' }],

    // Theme Color
    ['meta', { name: 'theme-color', content: '#93a01e' }],
    ['meta', { name: 'msapplication-TileColor', content: '#93a01e' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:url', content: 'https://tacobot.app/' }],
    ['meta', { name: 'twitter:title', content: 'Taco Bot' }],
    ['meta', { name: 'twitter:description', content: 'Manage Trello boards and get notified of board updates straight from Discord!' }],
    ['meta', { name: 'twitter:image', content: '/logo_happy.png' }],

    // OpenGraph
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: 'https://tacobot.app/' }],
    ['meta', { name: 'og:title', content: 'Taco Bot' }],
    ['meta', { name: 'og:description', content: 'Manage Trello boards and get notified of board updates straight from Discord!' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:image', content: '/logo_happy.png' }],
    ['meta', {
      name: 'og:keywords',
      content: [
        'Discord',
        'd i s c o r d',
        'discord bots',
        'discord bot',
        'bots discord',
        'trello',
        'trello bot',
        'webhook',
        'webhooks'
      ].join(',')
    }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-167866550-1' }
    ],
    [
      'zooming',
      {
        selector: 'div:not(lightbox__thumbnail) > img:not(.logo):not([alt="hero"]):not([no-zoom]),.md-img',
        options: {
          bgColor: 'black',
          bgOpacity: 0.5,
          scaleBase: 0.8
        }
      }
    ],
    '@vuepress/pwa',
    '@vuepress/last-updated',
    [
      'sitemap',
      {
        hostname: 'https://tacobot.app'
      }
    ],
    [
      require('./plugins/redirect.js'),
      [
        { url: 'https://discord.com/oauth2/authorize?client_id=620126394390675466&permissions=536931392&scope=bot%20applications.commands',
          aliases: ['/invite/', '/bot/'] },
        { url: 'https://discord.com/oauth2/authorize?client_id=202929883863580673&permissions=536931392&scope=bot%20applications.commands',
          aliases: ['/invitetwo/', '/twobot/', '/invitetali/', '/talibot/'] },
        { url: 'https://discord.com/oauth2/authorize?client_id=617830404103077928&permissions=536931392&scope=bot%20applications.commands',
          aliases: ['/invitenightly/', '/nightlybot/'] },
        { url: 'https://discord.gg/fJrZZ7V',
          aliases: ['/serverinvite/', '/support/', '/server/'] },
        { url: 'https://auth.tacobot.app/',
          aliases: ['/auth/', '/authentication/'] },
        { url: 'https://www.patreon.com/trello_talk',
          aliases: ['/patreon/'] },
        { url: 'https://ko-fi.com/trello_talk',
          aliases: ['/kofi/', '/ko-fi/'] },
        { url: 'https://github.com/trello-talk/Taco',
          aliases: ['/source/'] },
        { url: 'https://github.com/trello-talk',
          aliases: ['/github/'] },
        { url: 'https://twitter.com/TacoBotDiscord/',
          aliases: ['/twitter/'] },
        { url: 'https://tacobot.app/guide/other/contact/',
          aliases: ['/contact/'] }
      ]
    ],
    require('./plugins/richmeta.js')
  ],
  themeConfig: {
    search: false,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Support', link: '/support/' },
      { text: 'Add to Discord', link: '/bot/', class: 'primary' },
    ],
    sidebar,
    nextLinks: true,
    prevlinks: true,
    docsRepo: 'trello-talk/tacobot.app',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page on GitHub!',
    logo: '/logo_happy.svg',
    logoDark: '/logo_nightly_happy.svg',
    smoothScroll: true,
    footer: {
      columns: [
        {
          title: 'Consider donating!',
          rows: [{
            icon: 'patreon',
            title: 'Patreon',
            link: '/patreon'
          },
          {
            icon: 'kofi',
            title: 'Ko-fi',
            link: '/kofi'
          }]
        },
        {
          title: 'Social Links',
          rows: [{
            icon: 'twitter',
            title: 'Twitter',
            link: '/twitter'
          },
          {
            icon: 'github',
            title: 'GitHub',
            link: '/github'
          }]
        },
        {
          title: 'More',
          rows: [{
            text: 'FAQ',
            link: '/guide/other/faq/'
          },
          {
            text: 'Team',
            link: '/guide/other/team/'
          },
          {
            text: 'Bot Invite',
            link: '/bot/'
          },
          {
            text: 'Privacy Policy',
            link: '/privacy'
          },
          {
            text: 'Contact Us',
            link: '/contact'
          },
          {
            darkbtn: true
          }]
        }
      ],
      finePrints: [
        'This project is licenced under the GNU General Public License v3.0.',
        'Trello Talk and the Taco Bot is not affiliated with Trello Inc. or Taco the Husky.',
        '',
        'Copyright © {year} Taco Team'
      ]
    }
  }
}

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}
module.exports = config;
