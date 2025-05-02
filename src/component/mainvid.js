import { videos } from "../asset/videolist.js";

const Mainvid = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((clip) => (
        <div
          key={clip.id}
          className="w-72 p-4 m-2 bg-white rounded-lg shadow-md"
        >
          <img
            src={clip.image}
            alt="video thumbnail"
            className="w-full h-48 object-cover rounded-md"
          />
          <div>
            <h1 className="mt-2 text-xl font-bold">{clip.title}</h1>
          </div>
          <div className="flex items-center mt-4">
            <img
              src={clip.account_logo}
              alt="logo"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <h2 className="text-lg font-semibold">{clip.account_name}</h2>
              <div className="flex text-sm text-gray-600 space-x-4">
                <p>{clip.uploaded}</p>
                <p>{clip.views} views</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainvid;
