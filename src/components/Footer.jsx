export default function Footer({ isDark }) {
  return (
    <div
      className={`w-full h-20 md:w-1/2 text-center flex flex-col items-center justify-center mt-6 px-6 ${
        isDark ? "text-secondary" : "text-text"
      }`}
    >
      <span>Desarrollado con ❤️ por KevinDev.</span>
      <span className="text-xs">© 2025</span>
    </div>
  );
}
