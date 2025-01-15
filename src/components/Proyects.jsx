import ItemProyect from "./ui/ItemProyect";

export default function Proyects({ isDark }) {
  return (
    <div
      className={`w-full md:w-1/2 mt-6 px-6 space-y-4 ${
        isDark ? "text-secondary" : "text-text"
      }`}
    >
      <p className="text-3xl font-semibold">Proyectos</p>
      <ItemProyect
        isDark={isDark}
        proyectName="Punto de Venta"
        tecnologies="React, Next, Tailwind"
        imgName="/pVenta.png"
      />
      <ItemProyect
        isDark={isDark}
        proyectName="Calculadora de Propinas"
        tecnologies="React, Next, Tailwind"
        imgName="/pCalculadora.png"
      />
      <ItemProyect
        isDark={isDark}
        proyectName="Landing Page"
        tecnologies="React, Next, Tailwind"
        imgName="/pLanding.png"
      />
    </div>
  );
}
