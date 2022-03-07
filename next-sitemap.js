/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.bitswired.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
}
