import { members } from "@/data/content";
import MemberCard from "@/components/MemberCard";

export default function MembersPage() {
  return (
    <div className="space-y-6">
      {/* <div>
        <h1 className="text-2xl font-bold tracking-tight">Giới thiệu thành viên</h1>
        <p className="mt-2 text-sm text-slate-600">
          Dạng card/grid — bạn chỉ cần thay ảnh và điền thông tin trong{" "}
          <span className="font-mono">src/data/content.ts</span>.
        </p>
      </div> */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>
    </div>
  );
}
