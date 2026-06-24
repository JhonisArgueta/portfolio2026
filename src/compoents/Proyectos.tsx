import { useState } from "react";

// --- Interfaces ---
interface Project {
  title: string;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  description?: string;
}

interface Technology {
  name: string;
  image: string;
  category: string;
}

type CategoryFilter = "all" | "web" | "mobile" | "backend" | "design";

interface CategoryTab {
  label: string;
  filter: CategoryFilter;
}

// --- Datos ---
const projects: Project[] = [
  {
    title: "Performance Pressure Wash",
    description: "Sitio web comercial para empresa de servicios en Florida.",
    images: ["imagenes/performance_pressure.png"],
    demoUrl: "https://www.performancepressurewash.com"
  },
  
  
  {
    title: "App de gestión de inventario",
    images: ["imagenes/tienda1.PNG", "imagenes/tienda2.PNG", "imagenes/tienda3.PNG", "imagenes/tienda4.PNG"],
    description: "App multiplataforma creada con React Native, para gestionar clientes y ventas de manera local"
  },
  {
    title: "Expense Tracker",
    images: ["imagenes/expense_tracker/imagen1.PNG", "imagenes/expense_tracker/imagen2.PNG", "imagenes/expense_tracker/imagen3.PNG"],
    description: "Aplicación de seguimiento de gastos con React Native y AsyncStorage.",
    githubUrl: "https://github.com/JhoniArguetaLemus/expense_tracker.git"
  },
  {
  title: "AgroIA",
  images: ["imagenes/agroia/imagen1.PNG", "imagenes/agroia/imagen2.PNG"],
  description: "Sistema de visión por computadora basado en inteligencia artificial que detecta y clasifica enfermedades en cultivos a partir de fotografías, proporcionando resultados precisos para mejorar la salud y productividad de las plantas.",
  githubUrl: "https://github.com/JhoniArguetaLemus/AgroIA.git"
},
  {
  title: "Tienda en Línea para Café Barrios",
  images: [
    "imagenes/cafe/cafe1.png",
    "imagenes/cafe/cafe2.png"
  ],
  description: "Plataforma de comercio electrónico desarrollada con Next.js para Café Barrios, diseñada para ofrecer una experiencia de compra moderna, rápida y segura. Incluye autenticación de usuarios, gestión de productos, carrito de compras, aplicación de cupones de descuento, administración y seguimiento de pedidos, múltiples opciones de pago y panel de gestión para la administración del negocio. La solución está optimizada para dispositivos móviles y de escritorio, mejorando la experiencia del cliente y facilitando la operación comercial."
  ,demoUrl: "https://cafecb.vercel.app/"
}
];

const technologies: Technology[] = [
  { name: "JavaScript",      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",   category: "web"     },
  { name: "React",           image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",             category: "web"     },
  { name: "Tailwind",        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/330px-Tailwind_CSS_Logo.svg.png",    category: "web"     },
  { name: "React Native",    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",             category: "mobile"  },
  { name: "Kotlin",          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",           category: "mobile"  },
  { name: "Jetpack Compose", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg", category: "mobile" },
  { name: "Firebase",        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",          category: "backend" },
  { name: "MySQL",           image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",             category: "backend" },
  { name: "Figma",           image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",             category: "design"  },
];

const categories: CategoryTab[] = [
  { label: "Todas",   filter: "all"     },
  { label: "Web",     filter: "web"     },
  { label: "Mobile",  filter: "mobile"  },
  { label: "Backend", filter: "backend" },
  { label: "Diseño",  filter: "design"  },
];

// --- ProjectCard ---
const ProjectCard = ({
  project,
  openModal
}: {
  project: Project;
  openModal: (p: Project, idx: number) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(i => (i === 0 ? project.images.length - 1 : i - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(i => (i === project.images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/20 flex flex-col overflow-hidden h-full">

      {/* Imagen */}
      <div
        className="h-48 overflow-hidden relative cursor-pointer bg-slate-100 dark:bg-slate-900"
        onClick={() => openModal(project, currentIndex)}
      >
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-all z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
          <i className="fa-solid fa-magnifying-glass-plus text-white text-3xl drop-shadow-lg"></i>
        </div>

        <img
          src={project.images[currentIndex]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {project.images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
              {project.images.map((_, slideIndex) => (
                <div key={slideIndex} className={`w-1.5 h-1.5 rounded-full transition-all shadow-sm ${currentIndex === slideIndex ? "bg-white scale-125" : "bg-white/60"}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{project.title}</h3>
        {project.description && (
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed transition-colors">{project.description}</p>
        )}
        <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-200 dark:shadow-none"
            >
              Demo <i className="fa-solid fa-eye"></i>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-2"
            >
              GitHub <i className="fa-brands fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Componente principal ---
export default function Proyectos() {
  const [activeModal, setActiveModal] = useState<{ project: Project; index: number } | null>(null);
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const filteredTechs = activeTab === "all"
    ? technologies
    : technologies.filter(t => t.category === activeTab);

  const handleNextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeModal) return;
    const isLast = activeModal.index === activeModal.project.images.length - 1;
    setActiveModal({ ...activeModal, index: isLast ? 0 : activeModal.index + 1 });
  };

  const handlePrevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeModal) return;
    const isFirst = activeModal.index === 0;
    setActiveModal({ ...activeModal, index: isFirst ? activeModal.project.images.length - 1 : activeModal.index - 1 });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">

      {/* Fondo */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] transition-opacity duration-300"
        style={{ backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-all duration-300" />
      <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal transition-all duration-300" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- Proyectos --- */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm mb-4 transition-colors">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500" />
              <span className="text-slate-600 dark:text-slate-300 text-xs font-bold tracking-wide uppercase">Portafolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">
              Proyectos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Destacados
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors">
              Una selección de mis trabajos recientes en desarrollo web y móvil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={(p, idx) => setActiveModal({ project: p, index: idx })}
              />
            ))}
          </div>
        </section>

        {/* --- Tecnologías --- */}
        <section id="tecnologias">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
              Stack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400">
                Tecnológico
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-8" />

            {/* Tabs */}
            <div className="flex justify-center">
              <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                {categories.map(({ label, filter }) => (
                  <button
                    key={filter}
                    onClick={() => setActiveTab(filter)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === filter
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid tecnologías */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 p-6 rounded-xl flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50 rounded-full group-hover:scale-110 transition-transform">
                  <img src={tech.image} alt={tech.name} className="w-10 h-10 object-contain" />
                </div>
                <span className="text-slate-600 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* --- Modal --- */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50"
            onClick={() => setActiveModal(null)}
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>

          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            {activeModal.project.images.length > 1 && (
              <button
                onClick={handlePrevModalImage}
                className="absolute left-0 md:left-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
              >
                <i className="fa-solid fa-chevron-left text-3xl md:text-5xl"></i>
              </button>
            )}

            <img
              key={activeModal.index}
              src={activeModal.project.images[activeModal.index]}
              alt="Vista previa"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={e => e.stopPropagation()}
            />

            {activeModal.project.images.length > 1 && (
              <button
                onClick={handleNextModalImage}
                className="absolute right-0 md:right-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
              >
                <i className="fa-solid fa-chevron-right text-3xl md:text-5xl"></i>
              </button>
            )}

            {activeModal.project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 bg-black/50 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md border border-white/10">
                {activeModal.index + 1} / {activeModal.project.images.length}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}