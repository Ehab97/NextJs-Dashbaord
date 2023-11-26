// import React, { useContext } from "react";
// import { AppContext } from "../context/AppProvider";
// import Link from "next/link";
// const Sidebar: React.FC = () => {
//   const { isSidebarOpened } = useContext(AppContext);

//   return (
//     <aside className={`bg-gray-900 self-start sticky z-2 w-64 ${isSidebarOpened ? "block" : "hidden"}`} id="sidebar">
//       <ul className="px-8 pt-6">
//         <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
//           <Link href="/dashboard" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="icon icon-tabler icon-tabler-grid w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//             >
//               <path stroke="none" d="M0 0h24v24H0z"></path>
//               <rect x="4" y="4" width="6" height="6" rx="1"></rect>
//               <rect x="14" y="4" width="6" height="6" rx="1"></rect>
//               <rect x="4" y="14" width="6" height="6" rx="1"></rect>
//               <rect x="14" y="14" width="6" height="6" rx="1"></rect>
//             </svg>
//             <span className="text-sm ml-2">Dashboard</span>
//           </Link>
//           <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5</div>
//         </li>
//         <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
//           <Link className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" href="/users">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
//               />
//             </svg>
//             <span className="text-sm ml-2">Users</span>
//           </Link>
//         </li>
//         <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
//           <Link className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" href="/posts">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
//               />
//             </svg>
//             <span className="text-sm ml-2">Posts</span>
//           </Link>
//           <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8</div>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChatBubbleBottomCenterIcon, TableCellsIcon, UsersIcon } from "@heroicons/react/20/solid";

// Define an array of sidebar items

const Sidebar: React.FC = () => {
  const { isSidebarOpened, itemsCount } = useContext(AppContext);
  const { asPath } = useRouter();

  const sidebarItems = [
    {
      label: "Dashboard",
      icon: <TableCellsIcon className="h-5 w-5 mr-2" />,
      link: "/dashboard",
      items: 0,
    },
    {
      label: "Users",
      icon: <UsersIcon className="h-5 w-5 mr-2" />,
      link: "/users",
      items: itemsCount.UserNumbers,
    },
    {
      label: "Posts",
      icon: <ChatBubbleBottomCenterIcon className="h-5 w-5 mr-2" />,
      link: "/posts",
      items: itemsCount.PostNumbers,
    },
  ];
  return (
    <aside
      className={`self-start sticky z-2 w-64 bg-black dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full transition-all duration-300 ease-linear ${
        isSidebarOpened ? "block" : "hidden"
      }`}
      id="sidebar"
    >
      {/* <aside className={`bg-gray-900 self-start sticky z-2 w-64 ${isSidebarOpened ? "block" : "hidden"}`} id="sidebar"> */}
      <ul className="px-8 pt-6">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`flex w-full justify-between  cursor-pointer items-center mb-6 ${
              asPath === item.link ? "text-white" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <Link href={item.link} className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              {item.icon}
              <span className="text-sm ml-2">{item.label}</span>
            </Link>
            {item.items > 0 && (
              <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
                {item.items}
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
