import {useEffect} from 'react';

import {useLocalStorage} from './useLocalStorage';


export const useDarkMode = () => {
   const[darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if(darkMode === true){
            className = 'dark-mode'
        }else{
            className = ''
        }
    },[setDarkMode]);

    return[darkMode, setDarkMode];
}