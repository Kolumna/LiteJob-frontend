import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { currentUser } = useAuth();
  const { isPanel, setIsPanel } = useState(false);

  const history = useNavigate();

  const handleLogout = () => {
    history("/panel");
    setIsPanel(true);
  };

  return (
    <nav className=" flex justify-between items-center h-[100px] p-4 md:p-8 shadow-xl">
      <div className=" flex items-center">
        <Link to="/">
          <div className=" flex items-center">
            <svg
              width="132"
              height="32"
              viewBox="0 0 132 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.22543 25.5614H18.1026V31H0.417143V1.65186H7.22543V25.5614ZM27.7532 10.1119V31H21.5089V10.1119H27.7532ZM28.4783 4.39128C28.4783 4.88814 28.3776 5.35814 28.1762 5.80129C27.9748 6.231 27.6995 6.61371 27.3503 6.94943C27.0012 7.27171 26.5916 7.53357 26.1216 7.735C25.6651 7.923 25.1749 8.017 24.6512 8.017C24.1409 8.017 23.6642 7.923 23.2211 7.735C22.7779 7.53357 22.3818 7.27171 22.0326 6.94943C21.6969 6.61371 21.4283 6.231 21.2269 5.80129C21.0389 5.35814 20.9449 4.88814 20.9449 4.39128C20.9449 3.881 21.0389 3.40428 21.2269 2.96114C21.4283 2.518 21.6969 2.12857 22.0326 1.79286C22.3818 1.45714 22.7779 1.19529 23.2211 1.00728C23.6642 0.819286 24.1409 0.725286 24.6512 0.725286C25.1749 0.725286 25.6651 0.819286 26.1216 1.00728C26.5916 1.19529 27.0012 1.45714 27.3503 1.79286C27.6995 2.12857 27.9748 2.518 28.1762 2.96114C28.3776 3.40428 28.4783 3.881 28.4783 4.39128ZM40.1272 31.3223C39.1335 31.3223 38.2539 31.1813 37.4885 30.8993C36.7365 30.6039 36.0986 30.1943 35.5749 29.6706C35.0646 29.1334 34.6752 28.4889 34.4066 27.7369C34.1381 26.9849 34.0038 26.1456 34.0038 25.219V14.4224H32.2312C31.9089 14.4224 31.6336 14.3217 31.4054 14.1203C31.1771 13.9054 31.0629 13.5966 31.0629 13.1937V10.7564L34.3865 10.1119L35.6152 5.01571C35.7764 4.37114 36.2329 4.04886 36.9849 4.04886H40.2481V10.1521H45.3241V14.4224H40.2481V24.796C40.2481 25.2794 40.3622 25.6823 40.5905 26.0046C40.8322 26.3134 41.1746 26.4679 41.6178 26.4679C41.8461 26.4679 42.0341 26.4477 42.1818 26.4074C42.3429 26.3537 42.4772 26.3 42.5846 26.2463C42.7055 26.1791 42.8129 26.1254 42.9069 26.0851C43.0144 26.0314 43.1352 26.0046 43.2695 26.0046C43.4575 26.0046 43.6052 26.0516 43.7126 26.1456C43.8335 26.2261 43.9544 26.3604 44.0752 26.5484L45.9686 29.5094C45.1629 30.1137 44.2565 30.5703 43.2494 30.8791C42.2422 31.1746 41.2015 31.3223 40.1272 31.3223ZM57.8687 9.78957C59.2518 9.78957 60.5141 10.0044 61.6555 10.4341C62.8104 10.8639 63.7974 11.4883 64.6165 12.3074C65.4491 13.1266 66.0937 14.1337 66.5502 15.3289C67.0202 16.5106 67.2552 17.8534 67.2552 19.3574C67.2552 19.8274 67.2351 20.2101 67.1948 20.5056C67.1545 20.801 67.0807 21.036 66.9732 21.2106C66.8658 21.3851 66.7181 21.506 66.5301 21.5731C66.3555 21.6403 66.1272 21.6739 65.8452 21.6739H53.7998C54.0012 23.4196 54.5317 24.6886 55.3911 25.4809C56.2505 26.2597 57.3584 26.6491 58.7147 26.6491C59.4398 26.6491 60.0642 26.5619 60.5879 26.3873C61.1117 26.2127 61.5749 26.018 61.9778 25.8031C62.3941 25.5883 62.7701 25.3936 63.1058 25.219C63.4549 25.0444 63.8175 24.9571 64.1935 24.9571C64.6904 24.9571 65.0664 25.1384 65.3215 25.501L67.1344 27.7369C66.4898 28.4754 65.7915 29.0797 65.0395 29.5497C64.3009 30.0063 63.5355 30.3689 62.7432 30.6374C61.9644 30.8926 61.1788 31.0671 60.3865 31.1611C59.6077 31.2686 58.8624 31.3223 58.1507 31.3223C56.6869 31.3223 55.3105 31.0873 54.0214 30.6173C52.7457 30.1339 51.6244 29.4221 50.6575 28.4821C49.7041 27.5421 48.9454 26.3739 48.3814 24.9773C47.8308 23.5807 47.5555 21.9559 47.5555 20.1027C47.5555 18.7061 47.7905 17.3834 48.2605 16.1346C48.7439 14.8857 49.4288 13.7913 50.3151 12.8513C51.2148 11.9113 52.2958 11.166 53.5581 10.6154C54.8338 10.0649 56.2707 9.78957 57.8687 9.78957ZM57.9895 14.1001C56.7944 14.1001 55.8611 14.4426 55.1897 15.1274C54.5182 15.7989 54.0751 16.7724 53.8602 18.0481H61.6555C61.6555 17.5513 61.5884 17.0679 61.4541 16.5979C61.3332 16.1279 61.1251 15.7116 60.8297 15.349C60.5477 14.973 60.1717 14.6709 59.7017 14.4426C59.2317 14.2143 58.6609 14.1001 57.9895 14.1001Z"
                fill="#4ED1C9"
              />
              <path
                d="M83.327 20.3646C83.327 22.0029 83.1189 23.4934 82.7026 24.8363C82.2997 26.1791 81.682 27.334 80.8495 28.3009C80.0303 29.2543 78.9963 29.9996 77.7475 30.5367C76.4986 31.0604 75.0282 31.3223 73.3362 31.3223C72.5707 31.3223 71.812 31.282 71.06 31.2014C70.3215 31.1209 69.5493 30.9866 68.7436 30.7986L69.1062 26.8304C69.133 26.4813 69.2673 26.1993 69.509 25.9844C69.7642 25.7696 70.1133 25.6621 70.5565 25.6621C70.7847 25.6621 71.0667 25.7024 71.4025 25.783C71.7382 25.8501 72.141 25.8837 72.611 25.8837C73.269 25.8837 73.8397 25.7964 74.3232 25.6219C74.82 25.4339 75.2296 25.1317 75.5519 24.7154C75.8742 24.2857 76.1159 23.7284 76.277 23.0436C76.4382 22.3587 76.5187 21.5127 76.5187 20.5056V1.65186H83.327V20.3646ZM97.4547 9.78957C99.0393 9.78957 100.483 10.038 101.785 10.5349C103.088 11.0317 104.203 11.7434 105.129 12.67C106.069 13.5966 106.794 14.7246 107.305 16.054C107.828 17.37 108.09 18.8539 108.09 20.5056C108.09 22.1707 107.828 23.6747 107.305 25.0176C106.794 26.347 106.069 27.4817 105.129 28.4217C104.203 29.3483 103.088 30.0667 101.785 30.577C100.483 31.0739 99.0393 31.3223 97.4547 31.3223C95.8567 31.3223 94.3997 31.0739 93.0837 30.577C91.7812 30.0667 90.6532 29.3483 89.6997 28.4217C88.7597 27.4817 88.0279 26.347 87.5042 25.0176C86.9939 23.6747 86.7387 22.1707 86.7387 20.5056C86.7387 18.8539 86.9939 17.37 87.5042 16.054C88.0279 14.7246 88.7597 13.5966 89.6997 12.67C90.6532 11.7434 91.7812 11.0317 93.0837 10.5349C94.3997 10.038 95.8567 9.78957 97.4547 9.78957ZM97.4547 26.6894C98.8916 26.6894 99.9457 26.1859 100.617 25.1787C101.302 24.1581 101.644 22.6139 101.644 20.5459C101.644 18.4779 101.302 16.9403 100.617 15.9331C99.9457 14.926 98.8916 14.4224 97.4547 14.4224C95.9776 14.4224 94.8966 14.926 94.2117 15.9331C93.5269 16.9403 93.1844 18.4779 93.1844 20.5459C93.1844 22.6139 93.5269 24.1581 94.2117 25.1787C94.8966 26.1859 95.9776 26.6894 97.4547 26.6894ZM111.518 31V0.846142H117.762V12.3276C118.541 11.5621 119.42 10.9511 120.401 10.4946C121.394 10.0246 122.556 9.78957 123.885 9.78957C124.973 9.78957 125.98 10.0246 126.907 10.4946C127.833 10.9646 128.632 11.6561 129.304 12.5693C129.975 13.469 130.499 14.5769 130.875 15.8929C131.264 17.2089 131.459 18.7061 131.459 20.3847C131.459 21.9559 131.237 23.4061 130.794 24.7356C130.365 26.065 129.754 27.2199 128.961 28.2001C128.182 29.1804 127.242 29.9459 126.141 30.4964C125.054 31.047 123.845 31.3223 122.516 31.3223C121.898 31.3223 121.341 31.2619 120.844 31.141C120.36 31.0201 119.91 30.8523 119.494 30.6374C119.091 30.4091 118.715 30.1406 118.366 29.8317C118.03 29.5229 117.701 29.1871 117.379 28.8246L117.158 29.872C117.064 30.3017 116.889 30.5971 116.634 30.7583C116.392 30.9194 116.07 31 115.667 31H111.518ZM121.71 14.4829C121.253 14.4829 120.837 14.5299 120.461 14.6239C120.098 14.7044 119.756 14.8253 119.434 14.9864C119.125 15.1476 118.836 15.3557 118.568 15.6109C118.299 15.8526 118.03 16.1346 117.762 16.4569V25.3197C118.232 25.8434 118.742 26.2127 119.293 26.4276C119.843 26.629 120.421 26.7297 121.025 26.7297C121.602 26.7297 122.133 26.6156 122.616 26.3873C123.1 26.159 123.516 25.7964 123.865 25.2996C124.228 24.7893 124.51 24.1313 124.711 23.3256C124.913 22.5199 125.013 21.5396 125.013 20.3847C125.013 19.2836 124.933 18.357 124.772 17.605C124.61 16.853 124.382 16.2487 124.087 15.7921C123.805 15.3221 123.462 14.9864 123.059 14.785C122.657 14.5836 122.207 14.4829 121.71 14.4829Z"
                fill="black"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className=" flex">
        <div className=" hidden md:flex items-center mr-8">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_32_42"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_32_42)">
              <path
                d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.8043 11.0207 14 10.55 14 10C14 9.45 13.8043 8.979 13.413 8.587C13.021 8.19567 12.55 8 12 8C11.45 8 10.9793 8.19567 10.588 8.587C10.196 8.979 10 9.45 10 10C10 10.55 10.196 11.0207 10.588 11.412C10.9793 11.804 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7373 18 11.3833 18 10.2C18 8.38333 17.4207 6.89567 16.262 5.737C15.104 4.579 13.6833 4 12 4C10.3167 4 8.89567 4.579 7.737 5.737C6.579 6.89567 6 8.38333 6 10.2C6 11.3833 6.49167 12.7373 7.475 14.262C8.45833 15.7873 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.31267 17.5957 5.988 15.637C4.66267 13.679 4 11.8667 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.021 2.74167 9.88333 2 12 2C14.1167 2 15.979 2.74167 17.587 4.225C19.1957 5.70833 20 7.7 20 10.2C20 11.8667 19.3377 13.679 18.013 15.637C16.6877 17.5957 14.6833 19.7167 12 22Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          <span className=" text-[#000000] ml-2 text-2xl font-bold">Toruń</span>
        </div>
        {currentUser && !isPanel && (
          <button
            onClick={handleLogout}
            className=" simple-button p-2 pl-8 pr-8 text-md"
            variant="contained"
          >
            Panel
          </button>
        )}
        {isPanel && (
          <button
            onClick={handleLogout}
            className=" simple-button p-2 pl-8 pr-8 text-md"
            variant="contained"
          >
            Wyloguj
          </button>
        )}
        {!currentUser && (
          <Link to="/login">
            <button
              className=" simple-button p-2 pl-8 pr-8 text-md"
              variant="contained"
            >
              Zaloguj
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
