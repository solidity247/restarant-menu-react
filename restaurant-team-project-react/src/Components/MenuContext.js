import { createContext } from "preact";
import { useContext, useReducer, useEffect } from "preact/hooks";

const MenuContext = createContext(null);
const MenuDispatchContext = createContext(null);

const initialMenu = [];

const menuReducer = (menuData, action) => {
  switch (action.type) {
    case "fetchComplete":
      return [...menuData, ...action.payload];
    case "submit":
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

  useEffect(() => {
    const fetchMenuData = async () => {
      const restData = await fetch("data.json");
      const data = await restData.json();

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
