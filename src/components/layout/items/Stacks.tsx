import { IconType } from "react-icons";

export type SVGObject = {
  icon: IconType;
  name: string;
  color: string;
};

type IPropsStack = {
  arrStacks: SVGObject[];
};

const Stacks = ({ arrStacks }: IPropsStack) => {
  return (
    <div className="d-flex justify-content-evenly align-items-center flex-wrap">
      {arrStacks.map((item, i) => (
        <div key={i} className="flex-item m-4">
          <i className="m-1">{<item.icon color={item.color} fontSize={24} />}</i><br />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stacks;
