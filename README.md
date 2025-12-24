# (Trễ Deadline)^-1 — Website giới thiệu nhóm (Deploy Vercel)

## 1) Cài đặt & chạy local
```bash
npm install
npm run dev
```
Mở: http://localhost:3000

## 2) Chỉnh nội dung (labels đã tạo sẵn)
- Chỉnh thông tin nhóm / thành viên / game tại: `src/data/content.ts`
- Thay ảnh tại: `public/` (logo, ảnh thành viên, ảnh game)

## 3) Deploy lên Vercel
- Đẩy project lên GitHub (hoặc upload trực tiếp lên Vercel)
- Vercel sẽ tự nhận Next.js
- Build command: `npm run build`
- Output: mặc định của Next.js

## Gợi ý ảnh
- Logo: `public/logo-placeholder.svg` (thay bằng logo của nhóm)
- Ảnh thành viên: `public/member-placeholder.svg`
- Ảnh game: `public/game-placeholder.svg`
