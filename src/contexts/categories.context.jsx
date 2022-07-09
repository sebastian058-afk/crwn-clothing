import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setCatagoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCatagoriesMap(categoryMap)
        }

        getCategoriesMap();
    }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}