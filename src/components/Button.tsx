interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-green-500 rounded p-5 py-4 text-white font-normal text-base hover:brightness-75 transition"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
