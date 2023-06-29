import { IconType } from "react-icons";

type IPropsStack = {
  arrStacks: IconType[];
};

const Stacks = ({ arrStacks }: IPropsStack) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {arrStacks.map((Icon, i) => (
        <div key={i} className="flex-item mx-2 my-4">
          <Icon  size={24} />
        </div>
      ))}
    </div>
  );
};

export default Stacks;
