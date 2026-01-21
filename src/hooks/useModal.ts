'use client';

import { useState, useCallback } from 'react';
import { RegistrationFormData, ModalType, ModalState } from '@/types/registration';

interface UseModalReturn {
  modalState: ModalState;
  openModal: (type: ModalType, data?: RegistrationFormData | null) => void;
  closeModal: () => void;
  isOpen: boolean;
}

export function useModal(): UseModalReturn {
  const [modalState, setModalState] = useState<ModalState>({
    type: null,
    data: null,
    isOpen: false,
  });

  const openModal = useCallback((type: ModalType, data: RegistrationFormData | null = null) => {
    setModalState({
      type,
      data,
      isOpen: true,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState({
      type: null,
      data: null,
      isOpen: false,
    });
  }, []);

  return {
    modalState,
    openModal,
    closeModal,
    isOpen: modalState.isOpen,
  };
}
