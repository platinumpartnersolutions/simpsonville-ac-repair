import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "@/pages/LandingPage";
import ServicePage from "@/pages/ServicePage";
import LocationPage from "@/pages/LocationPage";
import SymptomPage from "@/pages/SymptomPage";
import FreeEstimate from "@/pages/FreeEstimate";
import EmergencyPage from "@/pages/EmergencyPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={LandingPage} />

      {/* Core Service Pages */}
      <Route path="/ac-repair/" component={ServicePage} />
      <Route path="/hvac-repair/" component={ServicePage} />
      <Route path="/ac-installation/" component={ServicePage} />
      <Route path="/ac-replacement/" component={ServicePage} />
      <Route path="/heat-pump-repair/" component={ServicePage} />
      <Route path="/furnace-repair/" component={ServicePage} />
      <Route path="/ac-maintenance/" component={ServicePage} />
      <Route path="/ductless-mini-split/" component={ServicePage} />

      {/* Symptom / Problem Pages */}
      <Route path="/ac-not-cooling/" component={SymptomPage} />
      <Route path="/ac-not-turning-on/" component={SymptomPage} />
      <Route path="/ac-leaking-water/" component={SymptomPage} />
      <Route path="/ac-making-noise/" component={SymptomPage} />
      <Route path="/high-electric-bill/" component={SymptomPage} />

      {/* Location Pages */}
      <Route path="/simpsonville-sc/" component={LocationPage} />
      <Route path="/mauldin-sc/" component={LocationPage} />
      <Route path="/fountain-inn-sc/" component={LocationPage} />
      <Route path="/greenville-sc/" component={LocationPage} />

      {/* Trust / Conversion Pages */}
      <Route path="/free-estimate/" component={FreeEstimate} />
      <Route path="/emergency-ac-repair/" component={EmergencyPage} />
      <Route path="/about/" component={AboutPage} />
      <Route path="/contact/" component={ContactPage} />

      {/* Catch-all */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}
