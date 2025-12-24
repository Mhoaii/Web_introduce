export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} (Trễ Deadline)^-1 — Website giới thiệu nhóm
          </p>
          <p className="text-slate-500">
            Tip: Mọi nội dung có thể chỉnh trong <span className="font-mono">src/data/content.ts</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
