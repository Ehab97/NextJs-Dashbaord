"use client";
import React, { createContext, useState, PropsWithChildren, useMemo } from "react";

//initila value
interface AppContextProps {
  isSidebarOpened: boolean;
  toggleSidebar: () => void;
  itemsCount: {
    [key: string]: number;
  };
  addNumbers: (type: NumberType, number: number) => void;
}
const initilaState: AppContextProps = {
  isSidebarOpened: true,
  toggleSidebar: () => {},
  itemsCount: {},
  addNumbers: (type: NumberType, number: number) => {},
};

export enum NumberType {
  Post = "Post",
  User = "User",
}

// Create the AppProvider context
export const AppContext = createContext<AppContextProps>(initilaState);
const initialCounts = Object.keys(NumberType).reduce((acc, type) => {
  acc[type + "Numbers"] = 0;
  return acc;
}, {} as { [key: string]: number });

// Create the AppProvider component
export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // State to manage the sidebar
  const [isSidebarOpened, setSidebarOpened] = useState(false);
  const [itemsCount, setItemsCount] = useState(initialCounts);

  const addNumbers = (type: NumberType, number: number) => {
    if (itemsCount.hasOwnProperty(type + "Numbers")) {
      setItemsCount((prevItemsCount) => ({
        ...prevItemsCount,
        [type + "Numbers"]: prevItemsCount[type + "Numbers"] + number,
      }));
    }
  };

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpened(!isSidebarOpened);
  };

  // Value object to be provided by the context
  const appContextValue = useMemo(() => {
    return {
      isSidebarOpened,
      toggleSidebar,
      itemsCount,
      addNumbers,
    };
  }, [isSidebarOpened, itemsCount, addNumbers]);

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};
