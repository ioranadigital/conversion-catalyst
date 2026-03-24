import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import SeoTecnico from "./pages/servicios/SeoTecnico";
import PpcPaidSearch from "./pages/servicios/PpcPaidSearch";
import ContentMarketing from "./pages/servicios/ContentMarketing";
import Automatizaciones from "./pages/servicios/Automatizaciones";
import DesarrolloWeb from "./pages/servicios/DesarrolloWeb";
import ImagenDeMarca from "./pages/servicios/ImagenDeMarca";
import KitDigital from "./pages/soluciones/KitDigital";
import DisenoLandings from "./pages/soluciones/DisenoLandings";
import TodoParaTuNegocio from "./pages/soluciones/TodoParaTuNegocio";
import ComoEstaOptimizadoMiWeb from "./pages/servicios/ComoEstaOptimizadoMiWeb";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/como-esta-optimizado-mi-web" element={<ComoEstaOptimizadoMiWeb />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/servicios/seo-tecnico" element={<SeoTecnico />} />
          <Route path="/servicios/ppc-paid-search" element={<PpcPaidSearch />} />
          <Route path="/servicios/content-marketing" element={<ContentMarketing />} />
          <Route path="/servicios/automatizaciones" element={<Automatizaciones />} />
          <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/servicios/imagen-de-marca" element={<ImagenDeMarca />} />
          <Route path="/soluciones/kit-digital" element={<KitDigital />} />
          <Route path="/soluciones/diseno-de-landings" element={<DisenoLandings />} />
          <Route path="/soluciones/todo-para-tu-negocio" element={<TodoParaTuNegocio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
