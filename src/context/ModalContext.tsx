"use client";

import { OutValues } from '@/types';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the modal context
interface ModalContextType {
  isOpen: boolean;
  openModal: (values: any) => void;
  closeModal: () => void;
  values: any;
}

// Initialize the context with a default value
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Create a custom hook to use the ModalContext
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};


interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [values, setValues] = useState<any>({});

  const openModal = (v: any) => {
    setIsOpen(true)
    console.log("v", v);
    setValues(v)
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, values }}>
      {children}
    </ModalContext.Provider>
  );
};