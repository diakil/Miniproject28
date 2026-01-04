type ListNameProps = {
  userName: string;
  indexList: number;
  changeFunction: () => void;
};

const ListName = ({ userName, indexList, changeFunction }: ListNameProps) => {
  return (
    <div className="flex items-center gap-2">
      <span>
        {indexList + 1}. {userName}
      </span>
      <button
        onClick={changeFunction}
        className="cursor-pointer ml-2 text-sm text-blue-600"
      >
        Rubah
      </button>
    </div>
  );
};
export default ListName;
