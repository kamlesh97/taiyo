interface Btn{
  onClick:any;
  children:string;
}
const Button = ({ onClick, children }:Btn) => {
  return (
    <button
      className="bg-violet-700 text-white py-2 px-6 my-10 rounded hover:bg-violet-500 "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
