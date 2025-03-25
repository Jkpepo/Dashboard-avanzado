// componente para las tarjetas

import { CustomIcon } from "./CustomIcons";

export function CardSumary(props) {
  const { icon: Icon, title, total } = props;
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <CustomIcon icon={Icon} />

          {title}
        </div>
        <div className="flex gap-4  md:mt-4">
          <p className=" "> {total}</p>
        </div>
      </div>
    </div>
  );
}
