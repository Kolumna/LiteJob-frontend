import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";

const SignIn = () => {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const [isPending, setIsPending] = useState(false);
  const [backendData, setBackendData] = useState([{}]);

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = () => {
    setIsPending(true);
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      }).then(() => {
        setIsPending(false)
        backendData.map((element) => (
          console.log(element.login)
        ))
      });
  };

  return (
    <section className=" w-full h-full flex justify-center items-center mt-64">
      <div className=" w-full h-full flex justify-center items-end flex-col">
        <div className=" mr-24 h-full flex flex-col justify-center items-center">
          <svg
            width="314"
            height="74"
            viewBox="0 0 314 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.984 60.04H42.904V73H0.76V3.064H16.984V60.04ZM65.9013 23.224V73H51.0213V23.224H65.9013ZM67.6293 9.592C67.6293 10.776 67.3893 11.896 66.9093 12.952C66.4293 13.976 65.7733 14.888 64.9413 15.688C64.1093 16.456 63.1333 17.08 62.0133 17.56C60.9253 18.008 59.7573 18.232 58.5093 18.232C57.2933 18.232 56.1573 18.008 55.1013 17.56C54.0453 17.08 53.1013 16.456 52.2693 15.688C51.4693 14.888 50.8293 13.976 50.3493 12.952C49.9013 11.896 49.6773 10.776 49.6773 9.592C49.6773 8.376 49.9013 7.24 50.3493 6.184C50.8293 5.128 51.4693 4.2 52.2693 3.4C53.1013 2.6 54.0453 1.976 55.1013 1.528C56.1573 1.08 57.2933 0.855999 58.5093 0.855999C59.7573 0.855999 60.9253 1.08 62.0133 1.528C63.1333 1.976 64.1093 2.6 64.9413 3.4C65.7733 4.2 66.4293 5.128 66.9093 6.184C67.3893 7.24 67.6293 8.376 67.6293 9.592ZM95.3883 73.768C93.0203 73.768 90.9243 73.432 89.1003 72.76C87.3083 72.056 85.7883 71.08 84.5403 69.832C83.3243 68.552 82.3963 67.016 81.7563 65.224C81.1163 63.432 80.7963 61.432 80.7963 59.224V33.496H76.5723C75.8043 33.496 75.1483 33.256 74.6043 32.776C74.0603 32.264 73.7883 31.528 73.7883 30.568V24.76L81.7083 23.224L84.6363 11.08C85.0203 9.544 86.1083 8.776 87.9003 8.776H95.6763V23.32H107.772V33.496H95.6763V58.216C95.6763 59.368 95.9483 60.328 96.4923 61.096C97.0683 61.832 97.8843 62.2 98.9403 62.2C99.4843 62.2 99.9323 62.152 100.284 62.056C100.668 61.928 100.988 61.8 101.244 61.672C101.532 61.512 101.788 61.384 102.012 61.288C102.268 61.16 102.556 61.096 102.876 61.096C103.324 61.096 103.676 61.208 103.932 61.432C104.22 61.624 104.508 61.944 104.796 62.392L109.308 69.448C107.388 70.888 105.228 71.976 102.828 72.712C100.428 73.416 97.9483 73.768 95.3883 73.768ZM137.666 22.456C140.962 22.456 143.97 22.968 146.69 23.992C149.442 25.016 151.794 26.504 153.746 28.456C155.73 30.408 157.266 32.808 158.354 35.656C159.474 38.472 160.034 41.672 160.034 45.256C160.034 46.376 159.986 47.288 159.89 47.992C159.794 48.696 159.618 49.256 159.362 49.672C159.106 50.088 158.754 50.376 158.306 50.536C157.89 50.696 157.346 50.776 156.674 50.776H127.97C128.45 54.936 129.714 57.96 131.762 59.848C133.81 61.704 136.45 62.632 139.682 62.632C141.41 62.632 142.898 62.424 144.146 62.008C145.394 61.592 146.498 61.128 147.458 60.616C148.45 60.104 149.346 59.64 150.146 59.224C150.978 58.808 151.842 58.6 152.738 58.6C153.922 58.6 154.818 59.032 155.426 59.896L159.746 65.224C158.21 66.984 156.546 68.424 154.754 69.544C152.994 70.632 151.17 71.496 149.282 72.136C147.426 72.744 145.554 73.16 143.666 73.384C141.81 73.64 140.034 73.768 138.338 73.768C134.85 73.768 131.57 73.208 128.498 72.088C125.458 70.936 122.786 69.24 120.482 67C118.21 64.76 116.402 61.976 115.058 58.648C113.746 55.32 113.09 51.448 113.09 47.032C113.09 43.704 113.65 40.552 114.77 37.576C115.922 34.6 117.554 31.992 119.666 29.752C121.81 27.512 124.386 25.736 127.394 24.424C130.434 23.112 133.858 22.456 137.666 22.456ZM137.954 32.728C135.106 32.728 132.882 33.544 131.282 35.176C129.682 36.776 128.626 39.096 128.114 42.136H146.69C146.69 40.952 146.53 39.8 146.21 38.68C145.922 37.56 145.426 36.568 144.722 35.704C144.05 34.808 143.154 34.088 142.034 33.544C140.914 33 139.554 32.728 137.954 32.728Z"
              fill="#4ED1C9"
            />
            <path
              d="M198.333 47.656C198.333 51.56 197.837 55.112 196.845 58.312C195.885 61.512 194.413 64.264 192.429 66.568C190.477 68.84 188.013 70.616 185.037 71.896C182.061 73.144 178.557 73.768 174.525 73.768C172.701 73.768 170.893 73.672 169.101 73.48C167.341 73.288 165.501 72.968 163.581 72.52L164.445 63.064C164.509 62.232 164.829 61.56 165.405 61.048C166.013 60.536 166.845 60.28 167.901 60.28C168.445 60.28 169.117 60.376 169.917 60.568C170.717 60.728 171.677 60.808 172.797 60.808C174.365 60.808 175.725 60.6 176.877 60.184C178.061 59.736 179.037 59.016 179.805 58.024C180.573 57 181.149 55.672 181.533 54.04C181.917 52.408 182.109 50.392 182.109 47.992V3.064H198.333V47.656ZM231.999 22.456C235.775 22.456 239.215 23.048 242.319 24.232C245.423 25.416 248.079 27.112 250.287 29.32C252.527 31.528 254.255 34.216 255.471 37.384C256.719 40.52 257.343 44.056 257.343 47.992C257.343 51.96 256.719 55.544 255.471 58.744C254.255 61.912 252.527 64.616 250.287 66.856C248.079 69.064 245.423 70.776 242.319 71.992C239.215 73.176 235.775 73.768 231.999 73.768C228.191 73.768 224.719 73.176 221.583 71.992C218.479 70.776 215.791 69.064 213.519 66.856C211.279 64.616 209.535 61.912 208.287 58.744C207.071 55.544 206.463 51.96 206.463 47.992C206.463 44.056 207.071 40.52 208.287 37.384C209.535 34.216 211.279 31.528 213.519 29.32C215.791 27.112 218.479 25.416 221.583 24.232C224.719 23.048 228.191 22.456 231.999 22.456ZM231.999 62.728C235.423 62.728 237.935 61.528 239.535 59.128C241.167 56.696 241.983 53.016 241.983 48.088C241.983 43.16 241.167 39.496 239.535 37.096C237.935 34.696 235.423 33.496 231.999 33.496C228.479 33.496 225.903 34.696 224.271 37.096C222.639 39.496 221.823 43.16 221.823 48.088C221.823 53.016 222.639 56.696 224.271 59.128C225.903 61.528 228.479 62.728 231.999 62.728ZM265.51 73V1.144H280.39V28.504C282.246 26.68 284.342 25.224 286.678 24.136C289.046 23.016 291.814 22.456 294.982 22.456C297.574 22.456 299.974 23.016 302.182 24.136C304.39 25.256 306.294 26.904 307.894 29.08C309.494 31.224 310.742 33.864 311.638 37C312.566 40.136 313.03 43.704 313.03 47.704C313.03 51.448 312.502 54.904 311.446 58.072C310.422 61.24 308.966 63.992 307.078 66.328C305.222 68.664 302.982 70.488 300.358 71.8C297.766 73.112 294.886 73.768 291.718 73.768C290.246 73.768 288.918 73.624 287.734 73.336C286.582 73.048 285.51 72.648 284.518 72.136C283.558 71.592 282.662 70.952 281.83 70.216C281.03 69.48 280.246 68.68 279.478 67.816L278.95 70.312C278.726 71.336 278.31 72.04 277.702 72.424C277.126 72.808 276.358 73 275.398 73H265.51ZM289.798 33.64C288.71 33.64 287.718 33.752 286.822 33.976C285.958 34.168 285.142 34.456 284.374 34.84C283.638 35.224 282.95 35.72 282.31 36.328C281.67 36.904 281.03 37.576 280.39 38.344V59.464C281.51 60.712 282.726 61.592 284.038 62.104C285.35 62.584 286.726 62.824 288.166 62.824C289.542 62.824 290.806 62.552 291.958 62.008C293.11 61.464 294.102 60.6 294.934 59.416C295.798 58.2 296.47 56.632 296.95 54.712C297.43 52.792 297.67 50.456 297.67 47.704C297.67 45.08 297.478 42.872 297.094 41.08C296.71 39.288 296.166 37.848 295.462 36.76C294.79 35.64 293.974 34.84 293.014 34.36C292.054 33.88 290.982 33.64 289.798 33.64Z"
              fill="black"
            />
          </svg>
          <form className=" flex flex-col justify-evenly h-auto w-[400px] items-center mt-24">
            <TextField
              id="login"
              onChange={(e) => handle(e)}
              margin="dense"
              fullWidth
              label="login"
              variant="outlined"
              value={data.login}
            />
            <TextField
              id="password"
              onChange={(e) => handle(e)}
              margin="dense"
              fullWidth
              label="hasło"
              variant="outlined"
              value={data.password}
            />
            <div className=" mt-12">
              {!isPending && (
                <Button onClick={handleSubmit} margin="normal" variant="contained">
                  zaloguj
                </Button>
              )}
              {isPending && (
                <CircularProgress />
              )}
            </div>
          </form>
        </div>
      </div>
      <div className=" w-full h-full flex justify-start items-center">
        <div className=" ml-24 h-full flex flex-col justify-center items-center">
          <p className=" text-6xl font-bold">
            Nie masz <span className=" text-[#4ED1C9]">konta</span>?
          </p>
          <div className=" mt-12">
            <Button href="/register" margin="normal" variant="contained">
              zarejestruj się
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;