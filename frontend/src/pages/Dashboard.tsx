import React from "react"
import MenuComponent from "../components/MenuComponent"
import DashboardTop from "../components/DashboardTop"
import DBDataEntry from "../components/DBDataEntry"

const Dashboard: React.FC = () => {
  // if the Dashboard is rendered, Ive setup the routes such that the route will be localhost:3000/dashboard. 
  // The dashboard will be rendered with the MenuComponent and DashboardTop
  // I want to render the DBDataEntry component when the route is localhost:3000/dashboard/DataEntry
  // to do that: 
  // return ( 
  //    <Routes>
  //      <Route path="dashboard/DataEntry" element={<DBDataEntry />} />
  //    </Routes>
  // )
  // this is not the correct way to do it. 
  // the correct way is to use the Route component from react-router-dom
  // the Route component takes two props: path and element


  return (
    <div className=" w-full h-full flex ">
      <MenuComponent />
      <div className="bg-gray-100 flex-grow px-[24px] pt-4">
        <DashboardTop/>
        <DBDataEntry/>
      </div>
    </div>
  )
}

export default Dashboard