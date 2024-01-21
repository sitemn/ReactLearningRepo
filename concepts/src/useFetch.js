import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(url);
        setData(response.data);
    };
    
    useEffect(() => {fetchData();}, []);

  return [data];
}
