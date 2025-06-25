import { Button } from "@/src/components/ui/button";
import { Navbar } from "./components/navigation-menu";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center">
        <Button>Bonsoir !</Button>
      </div>
    </div>
  );
}
