import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '齊元賽事資訊平台',
  description: '會員制運動賽事資訊觀看系統',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">齊元賽事資訊平台</Link>
          <nav className="navlinks">
            <Link href="/plans">會員方案</Link>
            <Link href="/preview/nba">免費預覽</Link>
            <Link href="/content">會員內容</Link>
            <Link href="/member">會員中心</Link>
            <Link href="/payment">付款回填</Link>
            <Link href="/login">登入</Link>
            <Link href="/register" className="nav-cta">加入會員</Link>
            <Link href="/admin">後台</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-links">
            <Link href="/terms">服務條款</Link>
            <Link href="/privacy">隱私權政策</Link>
            <Link href="/refund">退款政策</Link>
            <Link href="/disclaimer">免責聲明</Link>
            <Link href="/contact">聯絡我們</Link>
          </div>
          <p>齊元賽事資訊平台僅提供運動賽事資訊瀏覽、賽程資料整理與會員內容服務，不涉及投注、下注、博弈、代操或保證獲利。</p>
        </footer>
      </body>
    </html>
  );
}
