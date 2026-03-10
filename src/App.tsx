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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/servicios/seo-tecnico" element={<SeoTecnico />} />
          <Route path="/servicios/ppc-paid-search" element={<PpcPaidSearch />} />
          <Route path="/servicios/content-marketing" element={<ContentMarketing />} />
          <Route path="/servicios/automatizaciones" element={<Automatizaciones />} />
          <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
