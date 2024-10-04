import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptionsProps[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOptionsProps[]) => void;
}
interface IThemeProvider {
  children: ReactNode;
}

interface IDrawerOptionsProps {
  icon: string;
  label: string;
  path: string;
}
const DrawerContext = createContext({

} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}


export const DrawerProvider = ({ children }: IThemeProvider) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<true | false>(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptionsProps[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptionsProps[]) => {
    setDrawerOptions(newDrawerOptions)
  }, []);

  return (
    <DrawerContext.Provider
      value=
      {{
        isDrawerOpen,
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions,
        toggleDrawerOpen
      }}
    >
      {children}
    </DrawerContext.Provider>)
}