import { IoIosNotificationsOutline } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";

export const navData: Array<Object> = [
  {
    id: 1,
    text: "Home",
    icon: <RiHome2Line size={20} />,
    path: "/",
  },

  {
    id: 2,
    text: "Notifications",
    path: "/notifications",
    icon: <IoIosNotificationsOutline size={20} />,
  },

  {
    id: 3,
    text: "Profile",
    path: "/profile",
    icon: <FaUserCircle size={20} />,
  },

  {
    id: 4,
    text: "Followers",
    path: "/followers",
    icon: <LiaUserFriendsSolid size={20} />,
  },
];
