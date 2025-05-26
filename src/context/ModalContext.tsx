import React, { createContext, useContext, ReactNode, useState } from "react";

interface ModalContextType {
  addCreditsModalVisible: boolean;
  setAddCreditsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [addCreditsModalVisible, setAddCreditsModalVisible] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        addCreditsModalVisible,
        setAddCreditsModalVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
