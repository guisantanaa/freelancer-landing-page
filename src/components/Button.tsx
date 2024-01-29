interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const handleClick = () => {
  window.location.href =
    'https://api.whatsapp.com/send?phone=5577988080660&text=';
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-green-500 rounded p-5 py-4 text-textColor-300 font-normal text-base hover:brightness-75 transition"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
