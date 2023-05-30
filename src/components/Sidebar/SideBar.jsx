import { NavLink } from "react-router-dom";
import {RiDashboardLine } from "react-icons/ri";
import {HiOutlineUsers, HiOutlineDocumentText } from "react-icons/hi";
import {SiGoogleanalytics} from "react-icons/si";
import {FiAlertTriangle} from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import logo from "../../asserts/logo.svg"
import arrowdown from "../../asserts/arrow-down.svg"


const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <RiDashboardLine/>,
  },
  {
    path: "/users",
    name: "USERS",
    icon: <HiOutlineUsers/>,
    subRoutes: [
      {
        path: "/users/allcustomers",
        name: "All Customers",
  
      },
      {
        path: "/users/manuallyaddcustomers",
        name: "Manually Add Customers",
  
      },
      {
        path: "/Users/freetrialcustomers",
        name: "Free Trial Customers",
    
      },
      {
        path: "/Users/allpaidcustomers",
        name: "All Paid Customers",
      
      },
      {
        path: "/Users/activepaidcustomers",
        name: "Active Paid Customer",
      
      },
      {
        path: "/Users/dormantclients",
        name: "Dormant Clientss",
    
      },
      {
        path: "/Users/upcomingrenewals",
        name: "Upcoming Renewals",
  
      },
      {
        path: "/Users/createuser",
        name: "Create User",
    
      },
      {
        path: "/Users/allusers",
        name: "All Users",

      },
      {
        path: "/Users/allunverifiedclients",
        name: "All Unverified Clients",
 
      },
    ],
  },
  {
    path: "/analytics",
    name: "ANALYTICS",
    icon: <SiGoogleanalytics/>,
    subRoutes: [
      {
        path: "/analytics/notification",
        name: "Notification",

      },
      {
        path: "/analytics/chatbotslogbook",
        name: "Chatbots Logbook",

      },
      {
        path: "/analytics/chatbottrafficanalysis",
        name: "Chatbot Traffic Analysis",
     
      },
      {
        path: "/analytics/newslettersubscription",
        name: "Newsletter Subscription",
 
      },
      {
        path: "/analytics/opengoldadmin",
        name: "Open Gold Admin",
      
      },
      {
        path: "/analytics/trackreferrals",
        name: "Track Referrals",

      },
      {
        path: "/analytics/addpaymentrequest",
        name: "Add Payment Request",
   
      },
      {
        path: "/analytics/paymentrequest",
        name: "Payment Request",
   
      },
      {
        path: "/analytics/allreceivedpayments",
        name: "All Received Payments",
 
      },
      {
        path: "/analytics/Accounting Sheets",
        name: "accountingsheets",
   
      },
    ],
  },
  {
    path: "/createreports", 
    name: "CREATE REPORTS",
    icon: <HiOutlineDocumentText />,
    subRoutes: [
      {
        path: "/createreports/rolemanagement",
        name: "Role Management",
 
      },
      {
        path: "/createreports/couponmanagement",
        name: "Coupon Management",
      
      },
      {
        path: "/createreports/crashesreports",
        name: "Crashes & Reports",
        
      },
    ],
  },
  {
    path: "/documentation",
    name: "DOCUMENTATION",
    icon: <HiOutlineDocumentText/>,
    subRoutes: [
      {
        path: "/documentation/updatesubscriptionplans",
        name: "Update Subscription Plans",
      },
      {
        path: "/documentation/addnewsupdate",
        name: "Add News Update",
      },
      {
        path: "/documentation/allnews",
        name: "All News",
       
      },
    ],
    
  },
  {
    path: "/settings",
    name: "SETTINGS",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/callbackrequests",
        name: "Callback Requests ",
      },
    ],
  },
  {
    path: "/alerts",
    name: "ALERTS",
    exact: true,
    icon: <FiAlertTriangle/>,
    subRoutes: [
      {
        path: "/alerts/expectedrangeemailshooter",
        name: "Expected Range Email Shooter",
      },
      {
        path: "/alerts/businessproposalshooter",
        name: "Business Proposal Shooter",
      },
      {
        path: "/alerts/setratealert",
        name: "Set Rate Alert",
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="main-container">
        <div
          animate={{
            width: isOpen ? "250px" : "65px",
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
               
               <img src={logo}/>
               
              )}
            </AnimatePresence>
      
            {/* <div className="bars"> */}
              {/* <FaBars onClick={toggle} /> */}
              <div
              onClick={toggle}
              className="border-2 border-slate-300 rounded-full p-3 shadow-amber-50 text-center place-items-center "
            >
              <img src={arrowdown} className="flex text-center h-[20px] w-[20px]"/>
            </div>
            {/* </div> */}
          </div>
         
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link mb-10"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <div
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </div>

        <main className="text-lg lg:w-auto"   
        // animate={{ width: isOpen ? "100%" : "80%",}}
            >{children}</main>
      </div>
    </>
  );
};

export default SideBar;
