// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Basics',
  tagline: 'A hands-on introductory course by Gaurav Sharma',
  favicon: 'img/js-logo.png',

  // Set the production url of your site here
  url: 'https://gaurav-me.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gaurav-me', // Usually your GitHub org/user name.
  projectName: 'gaurav-me.github.io', // Usually your repo name.

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
          routeBasePath: 'basics-react',
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
      image: 'img/js-logo.png',
      navbar: {
        title: 'React Basics',
        logo: {
          alt: 'Site Logo',
          src: 'img/js-logo.png',
        },
        items: [
          {
            type: 'html',
            position: 'right',
            value:
              '<a className="lnkdn-ic-right differentiator" href="https://www.linkedin.com/in/gaurav-sh/" style="content: \'\'; width: 24px; height: 24px; background-image: url(\'/img/linkedin-icon.svg\'); background-repeat: no-repeat;  background-size: 24px 24px; display: flex" />',
          },
        ],
        hideOnScroll: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
