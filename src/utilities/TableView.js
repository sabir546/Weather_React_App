// // // FETCHING DATA ASIOS API AND USING FILTER ON IT

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // // import { fetchWeatherData } from "../api/OpenWeatherService";
// // const SearchFilter = () => {
// //   const [data, setData] = useState([]);
// //   const [records, setRecords] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("")
// //       .then((res) => {
// //         setData(res.data);
// //         setRecords(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   const Filter = (filters) => {
// //     setRecords(
// //       data.filter((subArray) => {
// //         for (const key in filters) {
// //           if (!subArray[key].toLowerCase().includes(filters[key].toLowerCase())) {
// //             return false;
// //           }
// //         }
// //         return true;
// //       })
// //     );
// //   };

// //   const handleFilterChange = (event) => {
// //     const { name, value } = event.target;
// //     Filter({ [name]: value });
// //   };

// //   return (
// //     <div className="p-5 bg-light">
// //       <div className="bg-white shadow border">
// //         <input
// //           type="text"
// //           name="title"
// //           className="form-control"
// //           onChange={handleFilterChange}
// //           placeholder="Search by title"
// //         />
// //       </div>
// //       <div className=" bg-gray-100 flex justify-center items-center">
// //         <div className="max-w-screen-l w-full">
// //           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">
// //             Movie List
// //           </h2>

// //           <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
// //             {records.map((city) => (
// //               <div className="group relative overflow-hidden rounded-md shadow-md bg-white hover:shadow-lg transition duration-300 transform hover:scale-105">
// //                 <h4 className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-105">
// //                   {city.city.name}
// //                 </h4>
// //                 <div className="p-4">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
// //                     {city.country}
// //                   </h3>
// //                   <p className="text-sm text-gray-700 mb-2">{city.cod}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchFilter;
// import React, { useEffect, useState } from "react";
// import { fetchWeatherData, fetchCities } from "../api/OpenWeatherService";

// const SearchFilter = () => {
//   const [data, setData] = useState([]);
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const citiesResponse = await fetchCities("London");
//         const { lat, lon } = citiesResponse.data[0]; // Assuming the first result

//         const [weatherResponse, forecastResponse] = await fetchWeatherData(
//           lat,
//           lon
//         );

//         setData([weatherResponse, forecastResponse]);
//         setRecords([weatherResponse, forecastResponse]);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const Filter = (filters) => {
//     setRecords(
//       data.map((subArray) => {
//         if (Array.isArray(subArray)) {
//           return subArray.filter((item) => {
//             for (const key in filters) {
//               if (
//                 item &&
//                 item[key] &&
//                 !item[key].toLowerCase().includes(filters[key].toLowerCase())
//               ) {
//                 return false;
//               }
//             }
//             return true;
//           });
//         } else {
//           return [];
//         }
//       })
//     );
//   };

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     Filter({ [name]: value });
//   };

//   return (
//     <div className="p-5 bg-light">
//       <div className="bg-white shadow border">
//         <input
//           type="text"
//           name="title"
//           className="form-control"
//           onChange={handleFilterChange}
//           placeholder="Search by title"
//         />
//       </div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className=" bg-gray-100 flex justify-center items-center">
//           <div className="max-w-screen-l w-full">
//             <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//               {records.map((subArray, index) => (
//                 <React.Fragment key={index}>
//                   {Array.isArray(subArray) &&
//                     subArray.map((item, i) => (
//                       <div
//                         key={i}
//                         className="group relative overflow-hidden rounded-md shadow-md bg-white hover:shadow-lg transition duration-300 transform hover:scale-105"
//                       >
//                         <h4 className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-105">
//                           {item.dt_txt} {item.city}
//                         </h4>
//                         <div className="p-4">
//                           <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                             {item.id}
//                           </h3>
//                           <p className="text-sm text-gray-700 mb-2">
//                             {item.country}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchFilter;

import React from 'react'

const TableView = () => {
  return (
    <div>
      
    </div>
  )
}

export default TableView
