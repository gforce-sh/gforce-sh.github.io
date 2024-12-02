// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const DOMAIN = 'gforce-sh.github.io';
const BOOK_PATH = 'software-basics';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Page',
  tagline: "Things I've learned by Gaurav Sharma",
  favicon: 'img/book-logo-64.png',

  // Set the production url of your site here
  url: `https://${DOMAIN}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gforce-sh', // Usually your GitHub org/user name.
  projectName: DOMAIN, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Change to '/' to make docs the landing page
          routeBasePath: BOOK_PATH,
          // sidebarCollapsed: false,
          exclude: ['**/clean-code/**'],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/book-logo-64.png',
      navbar: {
        title: 'Software Basics',
        logo: {
          alt: 'Site Logo',
          src: 'img/book-logo-64.png',
          href: `/${BOOK_PATH}`,
          target: '_self',
          width: 32,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        items: [
          {
            className: 'book-icon',
            href: '/',
            target: '_self',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
