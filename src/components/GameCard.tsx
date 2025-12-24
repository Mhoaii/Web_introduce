import Image from "next/image";
import type { Game } from "@/data/content";

function getYouTubeEmbedUrl(url: string) {
  // Supports common YouTube patterns. If not YouTube, returns the original url.
  // You can paste a YouTube link (watch?v=...) and it will embed automatically.
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      // already embed?
      return url;
    }
    if (u.hostname === "youtu.be") {
      const v = u.pathname.replace("/", "");
      if (v) return `https://www.youtube.com/embed/${v}`;
      return url;
    }
    return url;
  } catch {
    return url;
  }
}

export default function GameCard({ game }: { game: Game }) {
  const embedUrl = getYouTubeEmbedUrl(game.demoVideoUrl);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
        <div className="relative md:col-span-2">
          <div className="relative aspect-[16/10] w-full bg-slate-100">
            <Image
              src={game.imageSrc}
              alt={game.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={false}
            />
          </div>
          <div className="p-4">
            <a
              href={game.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Tải game
            </a>
            <p className="mt-2 text-xs text-slate-500 break-words">
              (Chỉnh link tải trong <span className="font-mono">src/data/content.ts</span>)
            </p>
          </div>
        </div>

        <div className="p-5 md:col-span-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{game.name}</h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-800">Mô tả</p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {game.description}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">Cốt truyện</p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {game.story}
                </p>
              </div>
            </div>

            <div className="mt-2">
              <p className="text-sm font-semibold text-slate-800">Video demo</p>
              <div className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={embedUrl}
                    title={`Demo video - ${game.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500 break-words">
                (Dán link YouTube vào <span className="font-mono">demoVideoUrl</span> là tự embed)
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
