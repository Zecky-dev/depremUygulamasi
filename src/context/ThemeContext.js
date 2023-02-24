import React, {useState,createContext,useEffect} from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const currentTheme = useColorScheme();
    const [theme,setTheme] = useState(currentTheme);
    
    useEffect(() => {
        setTheme(currentTheme);
    },[currentTheme])

    return (
        <ThemeContext.Provider value={theme}>
            {children}           
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

export {ThemeContext};
