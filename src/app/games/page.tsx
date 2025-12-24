import { games } from "@/data/content";
import GameCard from "@/components/GameCard";

export default function GamesPage() {
  return (
    <div className="space-y-6">
      {/* <div>
        <h1 className="text-2xl font-bold tracking-tight">Giới thiệu game của nhóm</h1>
        <p className="mt-2 text-sm text-slate-600">
          Trang này đã tạo sẵn <span className="font-semibold">{games.length}</span> game (ít nhất 5).
          Bạn chỉ cần điền nội dung trong{" "}
          <span className="font-mono">src/data/content.ts</span>.
        </p>
      </div> */}

      <div className="space-y-6">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </div>
  );
}
