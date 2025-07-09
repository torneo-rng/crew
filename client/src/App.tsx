import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Tournament from "@/pages/tournament";
import Admin from "@/pages/admin";
import Bracket from "@/pages/bracket";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Tournament} />
      <Route path="/admin" component={Admin} />
      <Route path="/bracket" component={Bracket} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
