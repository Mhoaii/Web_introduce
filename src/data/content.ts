export type Member = {
  id: string;
  fullName: string;     // ✅ Họ tên
  role: string;         // ✅ Vai trò trong nhóm
  shortBio: string;     // ✅ Mô tả ngắn
  imageSrc: string;     // ✅ Ảnh (đường dẫn trong /public)
};

export type Game = {
  id: string;
  name: string;         // ✅ Tên game
  imageSrc: string;     // ✅ Hình (đường dẫn trong /public)
  description: string;  // ✅ Mô tả
  story: string;        // ✅ Cốt truyện
  downloadUrl: string;  // ✅ Link tải
  demoVideoUrl: string; // ✅ Video demo (YouTube link hoặc link embed)
};

export const groupInfo = {
  // ⚠️ Tên nhóm theo yêu cầu đề bài (không đổi)
  name: "(Trễ Deadline)^-1",

  // ✅ Label — bạn chỉ cần điền
  foundingYear: "20XX",              // VD: "2024"
  logoSrc: "/logo-placeholder.svg",  // Thay bằng logo của nhóm trong /public
  slogan: "Điền slogan / mô tả ngắn của nhóm tại đây."
};

export const members: Member[] = [
  {
    id: "m1",
    fullName: "Đoàn Ngọc Khải",
    role: "Vai trò: Leader",
    shortBio: "Mô tả ngắn (1–2 câu) về thành viên 1.",
    imageSrc: "/dnk.jpg"
  },
  {
    id: "m2",
    fullName: "Phan Minh Hoài",
    role: "Vai trò: Dev Web",
    shortBio: "Năm sinh: 2007 \nCông việc: Internship AILab - VBI Academy \nHọc vấn: Sinh viên năm nhất trường Đại học Khoa học Tự nhiên, ĐHQG TP.HCM\nSở thích: debug code, học hỏi, đọc sách\nVai trò trong nhóm: Làm dev website của nhóm\nLiên hệ: Github:https://github.com/Mhoaii",
    imageSrc: "/mhoai.jpg"
  },
  {
    id: "m3",
    fullName: "Nguyễn Xuân Hoàng",
    role: "Vai trò: Dev Game",
    shortBio: "Gmail: xhoang.suy@gmail.com",
    imageSrc: "/xhoang.png"
  },
  {
    id: "m4",
    fullName: "Nguyễn Xuân Huy",
    role: "Vai trò: Dev Game",
    shortBio: "Mô tả về bản thân: Là một người thích tìm tòi, làm những dự án có ích cho mọi\nngười xung quanh. Đặc biệt là những dự án có liên quan tới công nghệ, lập trình.\n người xung quanh. Đặc biệt là những dự án có liên quan tới công nghệ, lập trình.\n\nBên cạnh đó, mình cũng là một người đang chập chững những bước đầu trong hành trình nghiên cứu trong lĩnh vực GenAI. Mong muốn của bản thân là sẽ đạt được thành tựu nghiên cứu khoa học trước khi ra trường.\n\nVai trò: Làm game Space Explorers - Một tựa game có mô típ bắn tàu và né đạn\ngiống Touhou hay Chicken Invaders.",
    imageSrc: "/xhuy.jpg"
  },
  {
    id: "m5",
    fullName: "Tô Ngọc Gia Khiêm",
    role: "Vai trò: Dev Game",
    shortBio: "Năm sinh 2007 \nSở trường: viết lách, kiên trì\nSở thích: debug code, học hỏi, đọc sách\nVai trò trong nhóm: đồng sáng lập EX-Redline: Prime Prôtcol, viết cốt truyện, description,  làm animation, người tạo ra game tetris 1 trong 5 game của nhóm. \n Liên hệ: 2512035969@stundent.hcmus.edu.vn",
    imageSrc: "/khiem.jpg"
  },
  {
    id: "m6",
    fullName: "Nguyễn Nam Khánh",
    role: "Vai trò: Dev Game",
    shortBio: "Sở trường: Giải thuật toán, chăm chỉ\nMục tiêu: phát triển thông qua các cuộc thi \nVai trò: Làm model map \nLiên hệ: lenamkhanh07082007@gmail.com",
    imageSrc: "/khanh.png"
  },
  {
    id: "m7",
    fullName: "Nguyễn Thái Hòa",
    role: "Vai trò: Dev Game",
    shortBio: "Mô tả ngắn (1–2 câu) về thành viên 7.",
    imageSrc: "/thaihoa.png"
  }
];

export const games: Game[] = [
  {
    id: "g1",
    name: "Tên game 1",
    imageSrc: "/game-placeholder.svg",
    description: "Mô tả game 1 (thể loại, gameplay chính, điểm nổi bật...).",
    story: "Cốt truyện game 1 (tóm tắt bối cảnh, mục tiêu, nhân vật...).",
    downloadUrl: "https://example.com/download/game-1",
    demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "g2",
    name: "Tên game 2",
    imageSrc: "/game-placeholder.svg",
    description: "Mô tả game 2 ...",
    story: "Cốt truyện game 2 ...",
    downloadUrl: "https://example.com/download/game-2",
    demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "g3",
    name: "Tên game 3",
    imageSrc: "/game-placeholder.svg",
    description: "Mô tả game 3 ...",
    story: "Cốt truyện game 3 ...",
    downloadUrl: "https://example.com/download/game-3",
    demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "g4",
    name: "Tên game 4",
    imageSrc: "/game-placeholder.svg",
    description: "Mô tả game 4 ...",
    story: "Cốt truyện game 4 ...",
    downloadUrl: "https://example.com/download/game-4",
    demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "g5",
    name: "Tên game 5",
    imageSrc: "/game-placeholder.svg",
    description: "Mô tả game 5 ...",
    story: "Cốt truyện game 5 ...",
    downloadUrl: "https://example.com/download/game-5",
    demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];
