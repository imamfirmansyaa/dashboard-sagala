import React from "react";
import { BiSolidHome, BiBasket , BiSolidBarChartAlt2 , BiUser, BiLock} from "react-icons/bi";

export default function Sidebar() {

  const menu = [
    {name: 'Main Dashboard', icon: <BiSolidHome/>},
    {name: 'NFT MarketPlace', icon: <BiBasket/>},
    {name: 'Data Tables', icon: <BiSolidBarChartAlt2/>},
    {name: 'Profile', icon: <BiUser/>},
    {name: 'Sign In', icon: <BiLock/>},
    {name: 'RTL Admin', icon: <BiSolidHome/>},
  ]

  return(
    <div className="h-screen border-r border-gray-200 w-64 px-9 py-9">
      <div className="flex flex-row items-center">
        <div className="mt-5 mb-5">
          HORIZON FREE
        </div>
      </div>

      <div>
        <ul className="space-y-7">
          {menu.map((val, index) => {
            return (
              <li key={index} className="mb-7 flex flex-row items-center">
                <div className="mr-5">{val.icon}</div>
                <div>{val.name}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}