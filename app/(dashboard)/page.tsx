import { ThemeToggle } from "@/components/theme-toggle";
import ChallengeTable from "./components/challenge-table";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-3">
      <div className="flex">
        <p>Some intro stuff</p>
      </div>
      <div className="flex justify-center align-center ">
        <ChallengeTable />
      </div>
    </main>
  );
}
