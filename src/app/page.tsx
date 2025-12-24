import Image from "next/image";
import Link from "next/link";
import { groupInfo } from "@/data/content";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          <div className="p-8">
            <p className="text-sm font-semibold text-slate-600">GIỚI THIỆU NHÓM</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {groupInfo.name}
            </h1>

            <div className="mt-4 space-y-2 text-slate-700">
              <p>
                <span className="font-semibold">Năm thành lập:</span>{" "}
                <span className="rounded-lg bg-slate-100 px-2 py-1 text-sm font-medium">
                  {groupInfo.foundingYear}
                </span>
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Mô tả / slogan:</span>{" "}
                {groupInfo.slogan}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/members"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Xem thành viên
              </Link>
              <Link
                href="/games"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Xem game của nhóm
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold">✅ Bạn chỉ cần điền nội dung ở đâu?</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  Chỉnh thông tin nhóm, thành viên, game trong{" "}
                  <span className="font-mono">src/data/content.ts</span>
                </li>
                <li>
                  Thay ảnh trong thư mục <span className="font-mono">public/</span> (logo, ảnh thành viên, ảnh game)
                </li>
              </ul>
            </div>
          </div>

          <div className="relative min-h-[260px] bg-slate-100">
            <div className="absolute inset-0">
              <Image
                src={groupInfo.logoSrc}
                alt="Logo nhóm"
                fill
                className="object-contain p-12"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-800">Trang Giới thiệu</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Tên nhóm, năm thành lập, logo và mô tả ngắn. Đơn giản, rõ ràng, dễ chỉnh.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-800">Trang Thành viên</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Dạng card/grid, mỗi thành viên có: ảnh, họ tên, mô tả ngắn, vai trò.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-800">Trang Game của nhóm</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Hiển thị ít nhất 5 game: tên, hình, mô tả, cốt truyện, link tải, video demo.
          </p>
        </div>
      </section>
    </div>
  );
}
