const NewsCard = () => {
  return (
    <div className="mt-2 rounded-xl flex flex-col w-[360px]  bg-gray-900">
      <div className=" w-full h-56 bg-cover">
        <img
          className="rounded-t-xl bg-cover w-full h-full"
          src="https://picsum.photos/200/300"
          alt=""
        />
      </div>
      <div className="mt-4 p-4">
        <div className="flex items-center gap-4 font-semibold ">
          <div className="w-fit border px-2 rounded-sm">
            <span>World</span>
          </div>
          <div className="text-sm">5 min read</div>
        </div>
        <div className="mt-4  font-bold text-3xl">
          Trump declares war against Brazil
        </div>
        <div className="mt-4 leading-2">
          A significant event has occurred , impacting many lives globally
        </div>
        <button className="flex items-center gap-2 mt-4 font-medium">
          <span>Read more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
