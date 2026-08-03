// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Auto RepAI Documentation',
  tagline: 'AI content generation & repair for WordPress — guides, tutorials and reference',
  favicon: 'img/favicon.ico',

  // NOTE: flip to the custom domain with deploy-custom-domain.ps1 once the
  // DNS CNAME (docs -> emrahsinekli.github.io) exists.
  url: process.env.DOCS_CUSTOM_DOMAIN ? 'https://docs.autorepai.com' : 'https://emrahsinekli.github.io',
  baseUrl: process.env.DOCS_CUSTOM_DOMAIN ? '/' : '/autorepai-docs/',
  trailingSlash: false,

  organizationName: 'emrahsinekli',
  projectName: 'autorepai-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      metadata: [
        {name: 'keywords', content: 'Auto RepAI, WordPress AI plugin, AI content generator, GEO, AI visibility, WooCommerce AI, accessibility repair, documentation'},
        {name: 'robots', content: 'index, follow'},
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Auto RepAI',
        logo: {
          alt: 'Auto RepAI logo',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'doc', docId: 'getting-started/installation', position: 'left', label: 'Getting Started'},
          {type: 'doc', docId: 'content-tools/content-generator', position: 'left', label: 'Features'},
          {type: 'doc', docId: 'pro/overview', position: 'left', label: 'Pro'},
          {type: 'doc', docId: 'reference/faq', position: 'left', label: 'FAQ'},
          {type: 'doc', docId: 'reference/changelog', position: 'left', label: 'Changelog'},
          {href: 'https://wordpress.org/plugins/auto-repai-ai-content-generator/', label: 'Download', position: 'right'},
          {href: 'https://autorepai.com', label: 'autorepai.com', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Installation', to: '/getting-started/installation'},
              {label: 'API keys', to: '/getting-started/api-keys'},
              {label: 'Your first article', to: '/getting-started/first-article'},
              {label: 'Troubleshooting', to: '/reference/troubleshooting'},
            ],
          },
          {
            title: 'Popular guides',
            items: [
              {label: 'AI Visibility (GEO)', to: '/seo-geo/ai-visibility'},
              {label: 'Auto Repair', to: '/content-tools/auto-repair'},
              {label: 'WooCommerce AI', to: '/woocommerce/product-scanner'},
              {label: 'Health Report', to: '/content-tools/health-report'},
            ],
          },
          {
            title: 'Product',
            items: [
              {label: 'Download free plugin', href: 'https://wordpress.org/plugins/auto-repai-ai-content-generator/'},
              {label: 'Auto RepAI Pro', to: '/pro/overview'},
              {label: 'Changelog', to: '/reference/changelog'},
            ],
          },
          {
            title: 'Company',
            items: [
              {label: 'Website', href: 'https://autorepai.com'},
              {label: 'Support', href: 'mailto:support@autorepai.com'},
              {label: 'Privacy & external services', to: '/reference/external-services'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Auto RepAI. Built with your own API key — your content never passes through our servers.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'bash'],
      },
    }),
};

export default config;
