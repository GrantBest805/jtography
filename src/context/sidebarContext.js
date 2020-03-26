import { createContext } from 'react';

export const SideBarContext = createContext({
  isHeaderOpen: false,
  setToggleHeader: () => {},
  open: () => {},
  close: () => {},
});
