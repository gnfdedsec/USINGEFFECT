import React from 'react';

interface UserData {
  id: number;
  name: string;
  lastname: string;
}



export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:5000/api/users'); // URL API ใน node app.js
    const responseData = await res.json();
    return {
      props: {
        data: responseData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
}
function YourComponent({ data }: { data: UserData[] }) {
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
export default YourComponent;
