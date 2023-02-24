
export default function LoadingButton(props) {
  const {
    loading = false,
    onClick = () => {},
    children,
    disabled = false,
  } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="bg-yellow-500 p-2 px-4 text-yellow-50 rounded-md disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed transition-all delay-100 ml-auto"
    >
      {loading ? "loader" : children}
    </button>
  );
}
