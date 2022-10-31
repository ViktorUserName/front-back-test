import React from 'react';

const DataContext = React.createContext({'enter': []})

export const DataProvider = DataContext.Provider

export default DataContext;