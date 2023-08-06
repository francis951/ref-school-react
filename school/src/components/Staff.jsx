import React, { useState, useEffect } from 'react';

const API_URL = 'https://school-api-2wqk.onrender.com/api/staff/';

const Staff = () => {
  const [staffData, setStaffData] = useState(null);

  useEffect(() => {
    fetchStaffData();
  }, []);

  const fetchStaffData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStaffData(data.results);
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  return (
    <div>
      {staffData ? (
        <ul>
          {staffData.map((staff) => (
            <li key={staff.id}>
              {staff.first_name} {staff.second_name} - {staff.gender} - {staff.age} - {staff.email} - {staff.department}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading staff data...</p>
      )}
    </div>
  );
};

export default Staff;

// import React from 'react';
// // import React, { useState, useEffect} from 'react';
// export default function Staff() {
//   const[staff, setStaff] = React.useState([]);

//   const fetchData =() =>{
//     fetch('https://school-api-2wqk.onrender.com/api/clubs/')
//     .then(response => response.json())
//     .then(data => setStaff(data));
//   }
//   React.useEffect(()=>{
//     fetchData();
//   },[]);
//   return Object.keys(staff).length > 0 ?(
//     <div>
//       <h1>{staff.results[0].club_name}</h1>
//     </div>
//   ):(
//     <h2>waiting</h2>
//   );
// }
