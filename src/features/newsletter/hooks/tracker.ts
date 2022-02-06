declare global {
  interface Window {
    dataLayer: object[]
  }
}

interface NewsletterSubscriptionSuccessEvent {
  email: string
}

const tracker = {
  trackNewsletterSubscriptionSuccess: (
    data: NewsletterSubscriptionSuccessEvent
  ) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: 'newsletter_subscription_success',
      ...data,
    })
  },
}

export function useTracker() {
  return tracker
}
