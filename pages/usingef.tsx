import React, { useState, useEffect } from 'react';

interface UserData {
  id: number;
  name: string;
  lastname: string;
}

function YComponent() {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users'); // URL API ใน node app.js
        const responseData = await res.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.id}: {item.name} {item.lastname}
        </div>
      ))}
    </div>
  );
}

export default YComponent;

