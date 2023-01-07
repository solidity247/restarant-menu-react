import { createContext } from "preact";
import { useContext, useReducer, useEffect, useState } from "preact/hooks";

const MenuContext = createContext(null);
const MenuDispatchContext = createContext(null);

const initialMenu = [];
export const DISPATCH_EVENTS = {
  FETCH_COMPLETE: "fetchComplete",
  SUBMIT: "submit",
};

const menuReducer = (menuData, action) => {
  switch (action.type) {
    case DISPATCH_EVENTS.FETCH_COMPLETE:
      return [...menuData, ...action.payload];
    case DISPATCH_EVENTS.SUBMIT:
      return menuData.map((item) => {
        if (item.id === action.payload.collectedInfo.id) {
          return action.payload.collectedInfo;
        } else {
          return item;
        }
      });
    default: {
      throw Error(`Unknown action ${action.type}`);
    }
  }
};

export function MenuProvider({ children }) {
  const [menu, dispatch] = useReducer(menuReducer, initialMenu);
  const [fetchComplete, setFetchComplete] = useState(false);

  useEffect(() => {
    const fetchMenuData = async () => {
      if (fetchComplete) return;
      const restData = await fetch("data.json");
      const data = await restData.json();

      setFetchComplete(true);
      dispatch({ type: "fetchComplete", payload: data });
    };
    fetchMenuData();
  }, []);

  return (
    <MenuContext.Provider value={menu}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}

export function useMenuDispatch() {
  return useContext(MenuDispatchContext);
}
