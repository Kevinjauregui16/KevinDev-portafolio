export default function ButtonLink({ isDark, icon }) {
  return (
    <button
      className={`border-2 ${
        isDark ? "border-secondary" : "border-text"
      } w-20 py-1 rounded-2xl transition-all flex items-center justify-center`}
    >
      <span className=" bg-transparent text-2xl">{icon}</span>
    </button>
  );
}
