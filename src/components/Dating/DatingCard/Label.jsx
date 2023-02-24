const Label = ({ matched = 0 }) => {
  const generateColor = (match) => {
    if (match <= 30) {
      return "bg-red-500";
    } else if (match <= 60) {
      return "bg-yellow-500";
    }

    return "bg-green-500";
  };

  return (
    <div
      className={`absolute top-5 right-0 ${generateColor(
        matched
      )} p-2 rounded-tl-lg rounded-bl-lg`}
    >
      <p className="text-xs text-gray-900 font-semibold">{matched}% match</p>
    </div>
  );
};

export default Label;
