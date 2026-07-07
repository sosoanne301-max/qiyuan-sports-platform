# 齊元賽事資訊平台｜可部署版

本專案為 Next.js + Supabase 會員制賽事資訊平台，包含會員註冊登入、會員方案、付款回填、管理員審核、會員內容權限與正式政策頁。

## 本機啟動

1. 複製 `.env.example` 成 `.env.local`
2. 填入 Supabase URL、Publishable Key、管理員信箱
3. 執行 Supabase SQL：`supabase/schema.sql`
4. 執行：

```powershell
npm.cmd install
npm.cmd run dev
```

## Vercel 環境變數

部署到 Vercel 時，Project Settings → Environment Variables 加入：

```env
NEXT_PUBLIC_SUPABASE_URL=https://你的專案.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_xxx
NEXT_PUBLIC_ADMIN_EMAIL=你的管理員信箱
```

## 正式政策頁

已內建：

- `/terms` 服務條款
- `/privacy` 隱私權政策
- `/refund` 退款政策
- `/disclaimer` 免責聲明
- `/contact` 聯絡我們

上線前請修改 `/contact` 頁面的客服信箱。

## Supabase Auth 設定

正式網域完成後，請到 Supabase：

Authentication → URL Configuration

設定：

- Site URL：正式網域，例如 `https://www.example.com`
- Redirect URLs：加入正式網域與本機網址，例如：
  - `https://www.example.com/**`
  - `http://localhost:3000/**`

## 注意事項

- `.env.local` 不要上傳到 GitHub。
- 不要使用 `sb_secret_` 放到前端。
- 後台 `/admin` 只允許 `.env.local` 的 `NEXT_PUBLIC_ADMIN_EMAIL` 進入。
