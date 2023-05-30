// import div from "../components/div";
import chart1 from "../asserts/chart1.svg"
import massage from "../asserts/message.svg"
import user from "../asserts/User.svg"
import file from "../asserts/file.svg"
import downlode from "../asserts/downlode.svg"
import arrow from "../asserts/arrow-down-sign-to-navigate.svg"
import usericon from "../asserts/usericon.svg"
import pesa from "../asserts/pesa.svg"
import week from "../asserts/next-week.svg"
import apple from "../asserts/apple.svg"
import android from "../asserts/android.svg"
import exchange from "../asserts/exchange.svg"
import gold from "../asserts/gold.svg"
import Userdata from "../components/Userdata";
import Search from "antd/lib/input/Search";
import Graphchart from "../components/Graphchart";



// const Items = [
//   {text: "All Customers", num: 900, color: 'red'},
//   {text: "Free Trial", num: 35 , color: 'blue'},
//   {text: "Paid Clients", num: 288, color: 'green'},
//   {text: "Active Paid", num: 96, color: 'pink'},
//   {text: "Dormant", num: 42, color: 'orange'},
// ]

export default function DashBoard() {

  // const onSearch = (value) => console.log(value);

  return <div className="">
           <div className="py-[54px] lg:pl-[60px]">

            {/* search & header */}
            <div className="flex lg:justify-between">
              <div> 
              <Search placeholder="search" type='text' className="w-[508px] px-4 text-white"/>
              </div>
              <div className="flex gap-[34px]">
                <img src={massage}></img>
                <img src={user}></img>
                <img src={arrow}></img>
              </div>
            </div>
          
          {/* Dashboard & Reports */}
            <div className="flex lg:justify-between">
              <div className="mt-[25px] mb-[7px]"> 
               <h1 className="text-3xl">DaseBoard</h1>
               <p className="mb-[13px]">Good afternoo, Onkaresh</p>
                </div>

              <div className="mt-[25px] mb-[45px]">
                <div className="flex gap-[18px]">
                <div className="bg-white px-4 py-1 flex gap-2">
                  <img src={file}/>
                 <div>Reports</div>
                  </div>
                <div className="bg-white px-4 py-1 flex gap-2">
                  <img src={downlode}/>
                   Export</div>
                  </div>
              </div>
            </div>

            {/* Cards */}
            <div className=" flex gap-5">
              <div className="relative w-[202px] p-7 h-[109px] rounded-[15px] text-center item-center bg-[#FE6976] text-white">
              <div>All Customers</div>
              <div>900</div>
              <div className="bg-[#D8EFFE] overflow-hidden absolute bottom-0 left-0 right-[85.56%] top-65.09%] rounded-full">
              <img src={usericon} className="w-[50px] h-[30px]"/>
              </div>
              </div>
       
              <div className="relative w-[202px] p-7 h-[109px] rounded-[15px] text-center item-center bg-[#19A2FB] text-white">
              <div>Free Trial</div>
              <div>35</div>
              <div className="bg-[#D8EFFE] overflow-hidden absolute bottom-0 left-0 right-[85.56%] top-65.09%] rounded-full">
              <img src={usericon} className="w-[50px] h-[30px]"/>
              </div>
              </div>
        
              <div className="relative w-[202px] p-7 h-[109px] rounded-[15px] text-center item-center bg-[#74CDFF] text-white">
              <div>Paid Clients</div>
              <div>288</div>
              <div className="bg-[#D8EFFE] overflow-hidden absolute bottom-0 left-0 right-[85.56%] top-65.09%] rounded-full">
              <img src={usericon} className="w-[50px] h-[30px]"/>
              </div>
              </div>
            
              <div className="relative w-[202px] p-7 h-[109px] rounded-[15px] text-center item-center bg-[#83B3C0] text-white">
              <div>Active Paid</div>
              <div>96</div>
              <div className="bg-[#D8EFFE] overflow-hidden absolute bottom-0 left-0 right-[85.56%] top-65.09%] rounded-full">
              <img src={usericon} className="w-[50px] h-[30px]"/>
              </div>
              </div>

              <div className=" relative w-[202px] p-7 h-[109px] rounded-[15px] text-center item-center bg-[#FF9066] text-white">
              <div>Dormant</div>
              <div>42</div>
              <div className="bg-[#D8EFFE] overflow-hidden absolute bottom-0 left-0 right-[85.56%] top-65.09%] rounded-full">
              <img src={usericon} className="w-[50px] h-[30px]"/>
              </div>
              </div>
            </div>

          {/* Graph */}
         <div className="w-[1120px] h-[415px] rounded-[12px] flex justify-between border-slate-300 border-2 bg-white my-[25px] ">
            <div className="w-[70%] ml-[54px]">
            <div className="mt-[48px] font-semibold text-lg">Viewership Installs & Signups Graph</div>
            <Graphchart/>
            {/* <img src={chart1} className=""/>
            <div className="flex pl-20 gap-80">
              <div>2021</div>
              <div>2022</div>
            </div> */}
            </div>
            <div className="py-8 w-[20%]">
                <div className="flex gap-5">
                 <img src={apple} className="w-[30px] h-[30px]"/>
                 <img src={android} className="w-[30px] h-[30px]"/>
                 <div className="text-3xl font-semibold">102</div>
                </div>
                <div className="py-[12px]">Installs This Month</div>
                <select className="w-[171px] h-[42px] p-1 font-semibold rounded-[5px] border-2 border-slate-300">
                  <option>Select all Customers</option>
                </select>
                <div className="mt-[33px] mb-[16px] font-bold ">
                <h1>Currencies Vs</h1>
                <h1>Commodities</h1>
                </div>
                <div className="flex gap-[45px]">
                <div>
                <img src={exchange}/>
                <div className="px-5 pt-2">
                <h6>7k</h6>
                <h6>Clicks</h6>
                </div>
                  </div>
                  <div>
                 <img src={gold}/>
               <div className="px-5">
                <h6> 10.6k</h6>
                <h6>Clicks</h6>
                </div>
                  </div>
                </div>
            </div>
          </div>
            
            {/* User Data */}
            <div className="flex gap-5 mb-[25px]">
              <div className="w-[550px] rounded-[12px] border-2 border-slate-300 bg-white">  
               <div className="text-lg font-semibold mt-[33px]  ml-[27px]">Latest Customer Onboards</div>
               <div className="ml-5">
               <Userdata/>
               </div>
               <div className="bg-[#0099FB] w-[166px] h-[27px] rounded-[5px] ml-[27px] mb-[34px] text-center">View all customers</div>
              </div>
              <div className="w-[550px] rounded-[12px] border-2 border-slate-300 bg-white">
               <div className="text-lg font-semibold mt-[33px] ml-[27px]">Upcomming follow Ups</div>
               <div className="ml-5">
               <Userdata/>
               </div>
               <div className=" bg-[#0099FB] w-[166px] h-[27px] rounded-[5px] ml-[27px] mb-[34px] text-center">View all Follow Ups</div>
              </div>
            </div>
            
            {/* cards & footer */}
            <div className="flex gap-[24px]">
            <div className="relative text-center w-[358px] h-[291px] rounded-[12px] bg-white p-[27px] text-black border-2 border-slate-300">
            <h1 className="text-5xl font-semibold mb-2">₹ 16,58,000</h1>
            <p className="text-lg">Last Month Sales</p>
            <div className="flex justify-end mt-[27px]">
            <div className="bg-[#D8EFFE] overflow-hidden  absolute bottom-0 left-0 right-[77.56%] top-[75.09%] rounded-full">
              <img src={pesa} className="w-[76px] h-[74px]"/>
              </div>
            <div>
              <div className="flex justify-around  gap-16 p-2">
               <div>Gold</div>
               <div className="rounded-[5px] h-[27px] w-[47px] bg-[#E7FB00]">4</div>
              </div>
              <div className="flex justify-around gap-10 p-2">
               <div>Platinum</div>
               <div className="rounded-[5px] h-[27px] w-[47px] bg-[#EEEEEE]">15</div>
              </div>
              <div className="flex justify-around gap-10 p-2">
               <div>Titanium</div>
               <div className="rounded-[5px] h-[27px] w-[47px] bg-[#0099FB]">12</div>
              </div>
            </div>
            </div>
            </div>
            <div className="relative text-center w-[358px] h-[291px] rounded-[12px] bg-white p-[27px] text-black border-2 border-slate-300">
            <h1 className="text-5xl font-semibold mb-2">₹ 20,00,000</h1>
            <p className="text-lg">Upcoming Renewals</p>
            <div className="flex justify-end mt-[27px]">
            <div className="bg-[#D8EFFE] overflow-hidden  absolute bottom-0 left-0 right-[77.56%] top-[75.09%] rounded-full">
              <img src={week} className="w-[76px] h-[74px]"/>
              </div>
            <div>
              <div className="flex justify-around  gap-16 p-2">
               <div>Gold</div>
               <div className="rounded-[5px] h-[27px] w-[47px] bg-[#E7FB00]">4</div>
              </div>
              <div className="flex justify-around gap-10 p-2">
               <div>Platinum</div>
               <div className="rounded-[5px] h-[27px] w-[47px] bg-[#EEEEEE]">15</div>
              </div>
              <div className="flex justify-around gap-10 p-2">
               <div>Titanium</div>
               <div className="rounded-[5px] h-[27px] w-[47px] bg-[#0099FB]">12</div>
              </div>
            </div>
            </div>
            </div>
            <div className="relative text-center w-[358px] h-[291px] rounded-[12px] border-2 border-slate-300 bg-white p-[27px] text-black">
              <h1 className="text-[23px] font-bold mb-[13px]">Upcomming Renewal Client</h1>
              <div className="flex justify-between w-[302px] h-[57px] rounded-[2px] border-2 border-slate-300 pl-[26px] pr-[13px]">
              <div>
                <div>Nitin Singhal</div>
                <div className=" bg-[#E7FB00] rounded-[5px] w-[39px] h-[23px] text-[10px]">Gold</div>
              </div>
              <div className="py-[10px]">₹ 80,762</div>
              </div>
              <div className="flex justify-between w-[302px] h-[57px] rounded-[2px] border-x-2 border-slate-300 pl-[26px] pr-[13px]">
              <div>
              <div>Balraj</div>
                <div className="bg-[#EEEEEE] rounded-[5px] w-[48px] h-[23px] text-[10px]">Platinum</div>
              </div>
              <div className="py-[10px]">₹ 12,962</div>
              </div>
              <div className="flex justify-between w-[302px] h-[57px] rounded-[2px] border-2 border-slate-300 pl-[26px] pr-[13px]">
              <div>
              <div >Raghav</div>
                <div className="bg-[#0099FB]  rounded-[5px] w-[61px] h-[23px] text-[10px] mb-10">Titanium</div>
              </div>
              <div className="py-[10px]">₹ 18,45,900</div>
              </div>
              <div className="flex justify-start font-semibold w-[68px] h-[17px] mt-[14px]">See all</div>
            </div>  
            </div>

            </div>

  </div>;
}

