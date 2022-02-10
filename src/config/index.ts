export const CONFIG = {
  navigation: {
    paths: [
      { name: 'home', path: '/' },
      { name: 'blog', path: '/blog' },
      { name: 'about', path: '/about' },
    ],
  },
  socials: {
    twitter: 'https://twitter.com/bitswired',
    linkedin: 'https://www.linkedin.com/in/jimi-vaubien',
  },
  images: {
    //me: 'https://statics.bitswired.com/images-opti/me/jimzer-id-photo@960.webp',
    me: 'https://assets.bitswired.com/general/jimzer-id-photo.jpg?w=200&q=50',
  },
  hCaptcha: {
    siteKey: 'acc1764f-11de-455c-8547-1c5ce7bd8e35',
  },
  api: {
    newsletter: {
      subscribe: 'https://public-api.bitswired.workers.dev/subscribe',
    },
  },
  paths: {
    content: {
      blog: 'content/blog',
    },
  },
}
