// "use client";
// import { createContext, useContext, useEffect, useState } from "react";

// interface ModalProviderProps {
//   children: React.ReactNode;
// }

// export type ModalData = {};

// type ModalContextType = {
//   data: ModalData;
//   isOpen: boolean;
//   setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void;
//   setClose: () => void;
// };

// export const ModalContext = createContext<ModalContextType>({
//   data: {},
//   isOpen: false,
//   setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => {},
//   setClose: () => {},
// });

// const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [data, setData] = useState<ModalData>({});
//   const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const setOpen = async (
//     modal: React.ReactNode,
//     fetchData?: () => Promise<any>
//   ) => {
//     if (modal) {
//       try {
//         if (typeof fetchData === "function") {
//           const fetchedData = await fetchData();
//           setData((prevData) => ({ ...prevData, ...fetchedData }));
//         }
//         setShowingModal(modal);
//         setIsOpen(true);
//       } catch (error) {
//         console.error("Error fetching modal data:", error);
//         setData({});
//       }
//     }
//   };

//   const setClose = () => {
//     setIsOpen(false);
//     setData({});
//   };

//   if (!isMounted) return null;

//   return (
//     <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
//       {children}
//       {showingModal}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => {
//   const context = useContext(ModalContext);
//   if (!context) {
//     throw new Error("useModal must be used within the modal provider");
//   }
//   return context;
// };

// export default ModalProvider;

// src/providers/modal-provider.ts

// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// interface ModalProviderProps {
//   children: React.ReactNode;
// }

// export type ModalData = {};

// type ModalContextType = {
//   data: ModalData;
//   isOpen: boolean;
//   setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void;
//   setClose: () => void;
// };

// const ModalContext = createContext<ModalContextType | undefined>(undefined);

// export function useModal() {
//   const context = useContext(ModalContext);
//   if (context === undefined) {
//     throw new Error("useModal must be used within a ModalProvider");
//   }
//   return context;
// }

// export function ModalProvider({ children }: ModalProviderProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [data, setData] = useState<ModalData>({});
//   const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const setOpen = async (
//     modal: React.ReactNode,
//     fetchData?: () => Promise<any>
//   ) => {
//     if (modal) {
//       try {
//         if (typeof fetchData === "function") {
//           const fetchedData = await fetchData();
//           setData((prevData) => ({ ...prevData, ...fetchedData }));
//         }
//         setShowingModal(modal);
//         setIsOpen(true);
//       } catch (error) {
//         console.error("Error fetching modal data:", error);
//         setData({});
//       }
//     }
//   };

//   const setClose = () => {
//     setIsOpen(false);
//     setData({});
//   };

//   if (!isMounted) return null;

//   return (
//     <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
//       {children}
//       {showingModal}
//     </ModalContext.Provider>
//   );
// }

// src/providers/modal-provider.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ModalProviderProps {
  children: React.ReactNode;
}

export type ModalData = {
  title?: string;
  subheading?: string;
};

type ModalContextType = {
  data: ModalData;
  isOpen: boolean;
  setOpen: (content: React.ReactNode, data?: ModalData) => void;
  setClose: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ModalData>({});
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setOpen = (content: React.ReactNode, modalData: ModalData = {}) => {
    setModalContent(content);
    setData(modalData);
    setIsOpen(true);
  };

  const setClose = () => {
    setIsOpen(false);
    setModalContent(null);
    setData({});
  };

  if (!isMounted) return null;

  return (
    <ModalContext.Provider value={{ data, isOpen, setOpen, setClose }}>
      {children}
      {isOpen && modalContent}
    </ModalContext.Provider>
  );
}
