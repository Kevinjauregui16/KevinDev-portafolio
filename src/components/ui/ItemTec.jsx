export default function ItemTec({ isDark, icon, name }) {
  return (
    <div
      className={` border-2  ${
        isDark ? "border-secondary text-secondary" : "border-text text-text"
      } flex items-center w-min font-semibold gap-1 p-2 rounded-2xl `}
    >
      {icon}
      {name}
    </div>
  );
}
