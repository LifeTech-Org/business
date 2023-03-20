import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
const Navigate = ({ items, current }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        {[...new Array(items)].map((_, index) => {
          return (
            <div
              key={index}
              className={
                current - 1 === index
                  ? "h-3 w-3 mr-1 rounded-full bg-cyan-700"
                  : "h-3 w-3 mr-1 rounded-full bg-cyan-400"
              }
            ></div>
          );
        })}
      </div>
      <div>
        <button className="text-white">
          <NavigateBeforeIcon />
        </button>
        <button className="text-white h-10 w-10 bg-cyan-700 ml-6">
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default Navigate;
