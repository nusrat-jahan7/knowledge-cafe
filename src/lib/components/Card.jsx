/* eslint-disable react/prop-types */

import { toast } from "react-hot-toast";

/* eslint-disable react/no-unescaped-entities */
const Card = ({education, count, setCount}) => {

  const{authorImg,authorName,publishedDate,thumbnail,tags,title} = education;

  const handleClick = () => {
    toast.success("Added mark as read")
    setCount(count + 5);
  }


  return (
    <div className="rounded-lg shadow-md lg:w-full sm:w-96 dark:bg-gray-900 dark:text-gray-100 lg:h-[580px] h-[615px] mt-5 mb-5">
      <img
        src={thumbnail}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="flex items-center justify-between p-3 pt-5">
        <div className="flex items-center space-x-2">
          <img
            src={authorImg}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="-space-y-1 ms-2 ps-3">
            <h2 className=" font-bold leading-none">
              {authorName}
            </h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400 font-semibold text-gray-500">
              {publishedDate}
            </span>
          </div>
        </div>
        <div className="flex items-end">
          <p className="text-xs font-semibold text-gray-500">5 min read</p>
          <button
            onClick={title}
            type="button"
            title="Bookmark post"
            className="flex items-center justify-center text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:ms-5 ms-3">
        <h1 className="text-xl font-bold mb-3"> {title} </h1>
          <p className="text-xs mb-3 font-semibold text-gray-500">{tags}</p>
        <button onClick={() => handleClick()} className="text-xs text-sky-600 font-semibold underline decoration-sky-600">Mark as read</button>
      </div>
    </div>
  );
};

export default Card;
