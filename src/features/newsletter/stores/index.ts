import create from 'zustand'

interface NewsletterState {
  isOpen: boolean
  toggle: () => void
}

export const useNewsletterStore = create<NewsletterState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
