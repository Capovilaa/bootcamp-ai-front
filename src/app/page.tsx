import { Header } from "@/components/components/header";
import { Main } from "@/components/components/main";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Header />
      <Main />
    </div>
  );
}
