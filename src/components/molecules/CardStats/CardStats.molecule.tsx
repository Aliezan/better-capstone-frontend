/* eslint-disable max-len */
// import React from 'react';
// import Link from 'next/link';

// type CardStatsProps = {
//   statsNumber: number;
//   statsTitle: string;
//   hover: boolean;
//   page: string;
//   id: string;
// };

// function CardStats({
//   statsNumber,
//   statsTitle,
//   hover,
//   page,
//   id,
// }: CardStatsProps) {
//   return (
//     <div
//       className="w-[280px] flex justify-center items-center bg-[#FFFFFF] shadow-lg rounded-[10px] cursor-pointer"
//       id={id}
//     >
//       <div
//         className={`w-[260px] p-6 transition-all duration-300 ${
//           hover && 'hover:p-8'
//         }`}
//       >
//         <Link
//           href={page}
//           className={({ isActive }) =>
//             isActive
//               ? 'font-source-sans font-normal text-[16px] text-center text-blue-500'
//               : 'font-source-sans font-normal text-[16px] text-center'
//           }
//         >
//           <p>{statsNumber}</p>
//         </Link>
//         <Link
//           href={page}
//           className={({ isActive }) =>
//             isActive
//               ? 'font-source-sans font-normal text-[16px] text-center text-blue-500'
//               : 'font-source-sans font-normal text-[16px] text-center'
//           }
//         >
//           <p>{statsTitle}</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CardStats;
