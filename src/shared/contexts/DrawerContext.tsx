import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}
interface IThemeProvider {
  children: ReactNode
}

const DrawerContext = createContext({

} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

export const DrawerProvider = ({ children }: IThemeProvider) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<true | false>(false);
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, []);


  return (
    <DrawerContext.Provider
      value={{ isDrawerOpen, toggleDrawerOpen }}
    >
      {children}
    </DrawerContext.Provider>)
}