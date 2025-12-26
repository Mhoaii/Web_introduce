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
  foundingYear: "2025",              // VD: "2024"
  logoSrc: "/logo_nhom.jpg",  // Thay bằng logo của nhóm trong /public
  slogan: "Chúng tôi là (Trễ Deadline)^-1, một nhóm sinh viên đam mê phát triển game và công nghệ web, luôn nỗ lực để tạo ra những sản phẩm sáng tạo và chất lượng cao."
};

export const members: Member[] = [
  {
    id: "m1",
    fullName: "Đoàn Ngọc Khải",
    role: "Vai trò: Leader",
    shortBio: "Học vấn: Sinh viên năm nhất trường Đại học Khoa học Tự nhiên, ĐHQG TP.HCM",
    imageSrc: "/dnk.jpg"
  },
  {
    id: "m2",
    fullName: "Phan Minh Hoài",
    role: "Vai trò: Dev Web",
    shortBio: "Năm sinh: 2007 \nCông việc: Internship AILab - VBI Academy \nHọc vấn: Sinh viên năm nhất trường Đại học Khoa học Tự nhiên, ĐHQG TP.HCM\nSở thích: debug code, học hỏi, đọc sách\nVai trò trong nhóm: Làm dev website của nhóm\nLiên hệ: LinkedIn: https://www.linkedin.com/in/minh-ho%C3%A0i-phan-9bb6b6387/\nGithub:https://github.com/Mhoaii",
    imageSrc: "/mhoai.jpg"
  },
  {
    id: "m3",
    fullName: "Nguyễn Xuân Hoàng",
    role: "Vai trò: Dev Game",
    shortBio: "Năm sinh: 2007 \nVai trò trong nhóm: chịu trách nhiệm phần sản xuất game.\nLiên hệ: - Gmail: xhoang.suy@gmail.com",
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
    shortBio: "Năm sinh: 2007.\nSở thích: Viết truyện, vẽ tranh, làm đề IELTS.\nMục tiêu: Trở thành một Game Developer standalone.\nVai trò trong nhóm: Phát triển game.\nGmail: Nth23022007@gmail.com.",
    imageSrc: "/thaihoa.png"
  }
];

export const games: Game[] = [
  {
    id: "g1",
    name: "Surveyor-36",
    imageSrc: "/Surveyor.png",
    description: "Surveyor-36 là một game ngắn dựa trên đề tài cosmic horror và du hành trong không gian, người chơi trong vai một phi hành gia điều khiển một tàu khảo sát không gian mẫu ",
    story: "Surveyor, phiên bản thứ 36, đi qua những hệ sao khác nhau để khảo sát, ghi chép và tìm ra hành tinh có dấu hiệu sống, trong khi phi thuyền sẽ dần hỏng hóc theo thời gian.\nLiệu bạn có thể hoàn thành nhiệm vụ để trở về?",
    downloadUrl: "https://drive.google.com/file/d/1aHOcdd93B5Hq1cixpdps5UosPOMOiF3g/view",
    demoVideoUrl: "https://youtu.be/araQ5df6y2o"
  },
  {
    id: "g2",
    name: " SPACE EXPLORER",
    imageSrc: "/space.png",
    description: "Khi bầu trời sao biến thành địa ngục đạn...",
    story: "Chào mừng phi công đến với Space Explorer – tựa game bắn súng phong cách Bullet-hell (Mưa đạn) mang đậm chất Arcade cổ điển nhưng với những cơ chế chiến đấu hiện đại và tàn khốc.\nPress F11 for best experience.",
    downloadUrl: "https://space-explorers-gules.vercel.app",
    demoVideoUrl: "https://www.youtube.com/watch?v=5FledgxT8r8"
  },
  {
    id: "g3",
    name: "Tetris",
    imageSrc: "/Tetris.png",
    description: "Game xếp gạch kinh điển mọi thời đại.",
    story: "Sống lại ký ức điện tử 4 nút huyền thoại. Thỏa sức xoay gạch, ghép hàng điêu luyện và đua top điểm số kịch tính cùng bạn bè. Chơi ngay hôm nay nào bạn ơi!",
    downloadUrl: "https://youtu.be/araQ5df6y2o",
    demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "g4",
    name: "HCMUS Enjoyers",
    imageSrc: "/hcmus.png",
    description: "Mô phỏng cuộc sống sinh viên HCMUS vào game",
    story: "HCMUS enjoyers là một tựa game parody Sonic Classic vào những năm 1900, lấy bối cảnh là tại trường HCMUS, các tân sinh viên phải trải qua bao nhiêu gian khó để vượt qua môn Vi Tích Phân vô cùng gian khó.",
    downloadUrl: "https://sinh-vien-hcmus-farm-hoc-hong.vercel.app/",
    demoVideoUrl: "https://youtu.be/LGGS4Na6d6Q"
  },
  {
    id: "g5",
    name: "EX-Redline Prime Protocol",
    imageSrc: "/redline.png",
    description: "Mô tả game 5 ...",
    story: "Cốt truyện game 5 ...",
    downloadUrl: "https://example.com/download/game-5",
    demoVideoUrl: "https://youtu.be/phIq8prtYQw"
  }
];
