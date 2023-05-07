import React ,{useContext,useEffect,useState}from "react";

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(rec=>setData(rec))
        .catch(err=>console.log(err))
    },[])
    return <AppContext.Provider value={{data}}>
        {children}
    </AppContext.Provider>


};
export {AppContext,AppProvider};