export default function AboutMe({ isDark }) {
  return (
    <div
      className={`w-full md:w-1/2 mt-4 px-6 ${
        isDark ? "text-secondary" : "text-text"
      }`}
    >
      <h2 className="text-3xl font-semibold">Sobre mí</h2>
      <p
        className={`text-xl border-b pb-8 ${
          isDark ? "border-secondary" : "border-text"
        }`}
      >
        Soy un programador inquieto con una doble vida, ya que trabajo en una
        prestigiosa empresa de software pero también he cometido todos los
        crímenes informáticos que existen. Tengo la sensación de que nada es lo
        que parece ser.
      </p>
    </div>
  );
}
