import axios from 'redaxios'
import { CONFIG } from '@config'

export function newsletterSubscribe(email: string, token: string) {
  return axios.post(
    CONFIG.api.newsletter.subscribe,
    { email },
    {
      headers: { 'captcha-token': token },
    }
  )
}
