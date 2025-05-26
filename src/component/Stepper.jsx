// const Stepper = ({ step }) => {
//   const steps = ['Personal', 'Second Step', 'Confirmation'];

//   return (
//     <div className="flex justify-between mb-6">
//       {steps.map((label, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <div
//             className={`w-8 h-8 flex items-center justify-center rounded-full border ${
//               step === index + 1 ? 'bg-blue-600 text-white' : 'border-gray-300 text-gray-500'
//             }`}
//           >
//             {index + 1}
//           </div>
//           <span className="text-sm mt-1">{label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stepper;
// Stepper.jsx
// const Stepper = ({ step, steps }) => {
//   return (
//     <div className="flex justify-between mb-6 p-5">
//       {steps.map((label, index) => (
//         <div key={index} className={`flex flex-col items-center ${
//               step === index + 1
//                 ? 'bg-blue-100 text-white px-5'
//                 : 'border-gray-300 text-gray-500'
//             }`}>
//           <div
//             className={`w-8 h-8 flex items-center justify-center rounded-full border ${
//               step === index + 1
//                 ? 'bg-blue-600 text-white'
//                 : 'border-gray-300 text-gray-500'
//             }`}
//           >
//             {index + 1}
//           </div>
//           <span className={`text-xl mt-1 ${
//               step === index + 1
//                 ? ' text-blue-600'
//                 : 'border-gray-300 text-gray-500'
//             }`}>{label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };
// const Stepper = ({ step, steps }) => {
//   return (
//     <div className="flex justify-between items-center w-full px-5 mb-6">
//       {steps.map((label, index) => {
//         const isCompleted = step > index + 1;
//         const isCurrent = step === index + 1;

//         return (
//           <div className="flex items-center w-full relative" key={index}>
//             {/* Step indicator */}
//             <div className="flex flex-col items-center z-10">
//               <div
//                 className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-semibold transition-all ${
//                   isCompleted
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : isCurrent
//                     ? "bg-white text-blue-600 border-blue-600"
//                     : "bg-white text-gray-400 border-gray-300"
//                 }`}
//               >
//                 {index + 1}
//               </div>
//               <span
//                 className={`text-sm mt-1 text-center ${
//                   isCompleted || isCurrent ? "text-blue-600" : "text-gray-500"
//                 }`}
//               >
//                 {label}
//               </span>
//             </div>

//             {/* Connector line (except after last step) */}
//             {index < steps.length - 1 && (
//               <div
//                 className={`absolute top-4 left-1/2 w-full h-0.5 ${
//                   isCompleted ? "bg-blue-600" : "bg-gray-300"
//                 }`}
//                 style={{ zIndex: 0 }}
//               ></div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const Stepper = ({ step, steps }) => {
//   return (
//     <div className="flex items-center w-full px-5 mb-6">
//       {steps.map((label, index) => {
//         const isCompleted = step > index + 1;
//         const isCurrent = step === index + 1;

//         return (
//           <div className="flex items-center w-full relative" key={index}>
//             {/* Step indicator and label */}
//             <div className="flex flex-col items-center text-center z-10">
//               <div
//                 className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-semibold transition-all ${
//                   isCompleted
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : isCurrent
//                     ? "bg-white text-blue-600 border-blue-600"
//                     : "bg-white text-gray-400 border-gray-300"
//                 }`}
//               >
//                 {index + 1}
//               </div>
//               <span
//                 className={`text-lg font-semibold mt-2 ${
//                   isCompleted || isCurrent ? "text-blue-600" : "text-gray-500"
//                 }`}
//               >
//                 {label}
//               </span>
//             </div>

//             {/* Connector line */}
//             {index < steps.length - 1 && (
//               <div className="absolute top-4 left-1/2 w-full h-0.5">
//                 <div
//                   className={`w-full h-full ${
//                     step > index + 1 ? "bg-blue-600" : "bg-gray-300"
//                   }`}
//                 ></div>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const Stepper = ({ step, steps }) => {
  return (
    <div className="flex items-center w-full mb-10 px-5">
      {steps.map((label, index) => {
        const isCompleted = step > index + 1;
        const isCurrent = step === index + 1;

        return (
          <div className="flex-1 flex flex-col items-center relative" key={index}>
            {/* Horizontal line */}
            {index !== 0 && (
              <div className="absolute top-4 left-0 w-1/2 h-0.5 bg-gray-300 z-0">
                <div
                  className={`h-full ${
                    step > index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            )}
            {index !== steps.length - 1 && (
              <div className="absolute top-4 right-0 w-1/2 h-0.5 bg-gray-300 z-0">
                <div
                  className={`h-full ${
                    step > index + 1 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            )}

            {/* Circle */}
            <div
              className={`z-10 w-8 h-8 flex items-center justify-center rounded-full border-2 font-semibold transition-all ${
                isCompleted
                  ? "bg-blue-600 text-white border-blue-600"
                  : isCurrent
                  ? "bg-white text-blue-600 border-blue-600"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              {index + 1}
            </div>

            {/* Label */}
            <span
              className={`text-lg mt-2 font-semibold ${
                isCompleted || isCurrent ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};





export default Stepper;

