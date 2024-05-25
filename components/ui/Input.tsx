type InputProps = {
  type: string;
  name: string;
};

const InputComponent = ({ type, name }: InputProps) => {
  return (
    <form>
      <div className="space-x-4">
        <label htmlFor={name}>{name}</label>
        <input id={name} type={type} className="mt-4 rounded-xl p-2 outline" />
      </div>
    </form>
  );
};

export default InputComponent;
