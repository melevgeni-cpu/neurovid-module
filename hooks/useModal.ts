'use client'

import { create } from 'zustand'

type ModalType = 'contact' | 'upload' | 'business' | 'order'

interface ModalStore {
  isOpen: boolean
  type: ModalType | null
  openModal: (type: ModalType) => void
  closeModal: () => void
}

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  openModal: (type) => set({ isOpen: true, type }),
  closeModal: () => set({ isOpen: false, type: null }),
}))