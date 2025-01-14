import noContentGif from "../../assets/videos/empty_state.gif";

const NoContent = () => {
  return (
    <div className="text-center flex flex-col justify-end items-center py-10">
      <img src={noContentGif} alt="No Content Gif" />
      <p className="text-xl my-5 text-gray-600">No Content</p>
    </div>
  );
};

export default NoContent;
