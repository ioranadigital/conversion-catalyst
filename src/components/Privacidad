import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans antialiased text-slate-800">
      
      {/* Navbar Simple */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-semibold text-sm group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Volver
          </button>
          <div className="font-bold text-xl tracking-tighter text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <ShieldCheck size={18} />
            </div>
            RHV Agency
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Encabezado */}
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Política de Privacidad
            </h1>
            <p className="text-slate-500 font-medium">
              Última actualización: <span className="text-slate-900">7 de marzo de 2026</span>
            </p>
          </header>

          {/* Contenido en Tarjeta Estilo Novu */}
          <div className="space-y-12 bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
            
            {/* Sección 1 */}
            <section className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <FileText size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">1. Responsable del Tratamiento</h2>
              </div>
              <p className="leading-relaxed text-slate-600 ml-11">
                El responsable del tratamiento de sus datos es <strong>Ricardo Herrera Varela (RHV Agency)</strong>. 
                Nuestra prioridad es la transparencia y la seguridad de la información de nuestros clientes y colaboradores.
                Para cualquier duda, puede contactarnos en: <span className="text-blue-600 font-semibold">hola@dominio.com</span>.
              </p>
            </section>

            {/* Sección 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Eye size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">2. Datos que Recopilamos</h2>
              </div>
              <div className="ml-11 space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Recopilamos información necesaria para la prestación de servicios de consultoría tecnológica:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Datos Identificativos', 'Información de Contacto', 'Datos de Navegación', 'Preferencias de Servicio'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Sección 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Lock size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">3. Seguridad de la Información</h2>
              </div>
              <p className="leading-relaxed text-slate-600 ml-11">
                Implementamos protocolos de seguridad de nivel empresarial (SSL, cifrado AES-256) para asegurar 
                que sus datos operativos y personales estén protegidos contra cualquier acceso no autorizado o pérdida accidental.
              </p>
            </section>

            {/* Cuadro de Compromiso */}
            <div className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2">Compromiso GDPR</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Cumplimos estrictamente con el Reglamento General de Protección de Datos (RGPD). 
                    Usted mantiene el control total sobre su información en todo momento.
                  </p>
               </div>
               <ShieldCheck size={120} className="absolute -right-8 -bottom-8 text-white/5" />
            </div>

          </div>

          <footer className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              &copy; 2026 RHV Agency. Ingeniería de Procesos y Estrategia Digital.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Privacidad;
