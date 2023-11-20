

import React, { useEffect, useState } from "react";
import ImplementDSR from "./ImplementDSR";
import ImplementFreeDsr from "./ImplementFreeDsr";
import axios from "axios";

const MyStatus = () => {
  const [data, setData] = useState(null);
  const[fillData, setFillData]=useState()
  const baseUrl = process.env.REACT_APP_API_URL;

  const getProject = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo[0]._id;

      const response = await axios.get(
        `http://localhost:3010/api/v1/getRecordById?id=${userId}`
      );

      setData(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProject();
  }, []);






  const getDSRList = async () => {
    try {
     
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo[0]._id;

      const response = await axios.get(`${baseUrl}/getDSRDetails/${userId}`);
      setFillData(response.data.data)
      console.log("resonse",response);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };
useEffect(()=>{
  getDSRList()
},[])

  const projectName = data?.[0]?.projectName;
  const isProjectAvailable = !!projectName;

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          My Current Status
        </span>
        <span class="input-group-text" id="basic-addon1">
          {fillData}
          </span>
      </div>

      {isProjectAvailable ? <ImplementDSR /> : null}
      {isProjectAvailable ? null : <ImplementFreeDsr />}
    </>
  );
};




export default MyStatus;

