// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ImplementFreeDsr = () => {
//   const baseUrl = process.env.REACT_APP_API_URL;
//   const [createDSR, setcreateDSR] = useState({
//    fillDate: "",
//    comment:""
//   });

//   const handlecrateDSR = (e) => {
//     setcreateDSR({ ...createDSR, [e.target.name]: e.target.value });
//   };
//   const addDSRList = async (e) => {
//     try {
//       e.preventDefault();
//       const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//       createDSR.userDetails = userInfo[0]._id;

//       const response = await axios.post(`${baseUrl}/addDSR`, createDSR);
//       toast.success(" DSR Fill Successful!");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   return (
//     <>
//       <div>
//       <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//         <div class="input-group mb-3">
//           <span class="input-group-text" id="basic-addon1">
//             select status
//           </span>
//           <span class="input-group-text" id="basic-addon1">
//             <input
//               type="radio"
//               checked
//               id="html"
//               name="fav_language"
//               value="HTML"
//             />
//              <label for="html">Free</label>
//           </span>
//           <br />
//           {/* <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> */}
//         </div>
//         <div class="input-group mb-3">
//           <span class="input-group-text" id="basic-addon1">
//             select Data for which you are filling report
//           </span>
//           <input
//             type="date"
//             class="form-control"
//             placeholder="Username"
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//             value={createDSR.fillDate}
//             name="fillDate"
//             onChange={handlecrateDSR}

//           />
//         </div>

//         <div class="input-group">
//           <span class="input-group-text">List of major modules/Comment:</span>
//           <textarea class="form-control" aria-label="With textarea" name="comment" value={createDSR.comment} onChange={handlecrateDSR}></textarea>
//         </div>
//         <button
//             class="flex w-full items-center justify-center gap-2 rounded bg-primary py-2.5 px-4.5 font-medium text-white"
//             onClick={addDSRList}
//           >
//             Add DSR
//           </button>

//       </div>
//     </>
//   );
// };

// export default ImplementFreeDsr;

// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";
// import DatePicker from "react-date-picker";

// const ImplementFreeDsr = () => {
//   const baseUrl = process.env.REACT_APP_API_URL;
//   const [createDSR, setCreateDSR] = useState({
//     fillDate: "",
//     comment: "",
//   });
//   const [selectedDate, setSelectedDate] = useState();

//   const handleCreateDate = (date) => {
//     setCreateDSR({ ...selectedDate, fillDate: date });
//   };

//   const handleCreateDSR = (e, dat) => {
//     setCreateDSR({ ...createDSR, [e.target.name]: e.target.value });
//   };

//   const addDSRList = async (e) => {
//     try {
//       e.preventDefault();
//       const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//       createDSR.userDetails = userInfo[0]._id;

//       const response = await axios.post(`${baseUrl}/addDSR`, createDSR);
//       toast.success("DSR Fill Successful!");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//         <div className="input-group mb-3">
//           <span className="input-group-text" id="basic-addon1">
//             Select status
//           </span>
//           <span className="input-group-text" id="basic-addon1">
//             <input
//               type="radio"
//               checked
//               id="html"
//               name="fav_language"
//               value="HTML"
//               onChange={handleCreateDSR}
//             />
//             <label htmlFor="html">Free</label>
//           </span>
//         </div>
//         <div className="input-group mb-2">
//           <span className="input-group-text" id="basic-addon1">
//             Select Date
//           </span>
//           <DatePicker
//             selected={selectedDate.fillDate}
//             onChange={handleCreateDate}
//             className="form-control"
//           />
//         </div>

//         <div className="input-group mb-2">
//           <span className="input-group-text">
//             List of major modules/Comment:
//           </span>
//           <textarea
//             className="form-control"
//             aria-label="Comment"
//             name="comment"
//             value={createDSR.comment}
//             onChange={handleCreateDSR}
//           ></textarea>
//         </div>
//         <button
//           className="flex w-full items-center justify-center gap-2 rounded bg-primary py-2.5 px-4.5 font-medium text-white"
//           onClick={addDSRList}
//         >
//           Add DSR
//         </button>
//       </div>
//     </>
//   );
// };

// export default ImplementFreeDsr;



import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";

const ImplementFreeDsr = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [createDSR, setCreateDSR] = useState({
    fillDate: null, // Initialize with null to work with DatePicker
    comment: "",
  });

  const [selectedDate, setSelectedDate] = useState(null); 

  

  const handleCreateDSR = (e) => {
    setCreateDSR({ ...createDSR, [e.target.name]: e.target.value });
  };

  const addDSRList = async (e) => {
    try {
      e.preventDefault();
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      createDSR.userDetails = userInfo[0]._id;

      // Set the 'fillDate' in 'createDSR' to the selected date
      createDSR.fillDate = selectedDate;

      const response = await axios.post(`${baseUrl}/addDSR`, createDSR);
      toast.success("DSR Fill Successful!");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Select status
          </span>
          <span className="input-group-text" id="basic-addon1">
            <input
              type="radio"
              checked
              id="html"
              name="fav_language"
              value="HTML"
              onChange={handleCreateDSR}
            />
            <label htmlFor="html">Free</label>
          </span>
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text" id="basic-addon1">
            Select Date
          </span>
          <DatePicker
            selected={selectedDate?.fillDate}
            onChange={onChange}
            className="form-control"
            value={value}
          />
        </div>

        <div className="input-group mb-2">
          <span className="input-group-text">
            List of major modules/Comment:
          </span>
          <textarea
            className="form-control"
            aria-label="Comment"
            name="comment"
            value={createDSR.comment}
            onChange={handleCreateDSR}
          ></textarea>
        </div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded bg-primary py-2.5 px-4.5 font-medium text-white"
          onClick={addDSRList}
        >
          Add DSR
        </button>
      </div>
    </>
  );
};

export default ImplementFreeDsr;
