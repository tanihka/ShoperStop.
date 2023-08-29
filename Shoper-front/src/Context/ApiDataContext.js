import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiDataContext = createContext();

const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setApiData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ApiDataContext.Provider value={{ apiData, fetchData }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export { ApiDataContext, ApiDataProvider };
