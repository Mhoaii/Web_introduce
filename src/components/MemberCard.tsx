import Image from "next/image";
import type { Member } from "@/data/content";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full bg-slate-100">
        <Image
          src={member.imageSrc}
          alt={member.fullName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-slate-900">{member.fullName}</h3>
        <p className="mt-1 text-sm font-medium text-slate-700">{member.role}</p>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed whitespace-pre-line">{member.shortBio}</p>
      </div>
    </article>
  );
}
