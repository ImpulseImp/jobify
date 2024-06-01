type InputProps = {
  type: string;
  name: string;
  placeholder: string;
};

const InputComponent = ({ type, name, placeholder }: InputProps) => {
  return (
    <form>
      <div className="space-x-4">
        {/* <label htmlFor={name}>{name}</label> */}
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className="mt-4 rounded-xl p-2 outline"
        />
      </div>
    </form>
  );
};

export default InputComponent;
