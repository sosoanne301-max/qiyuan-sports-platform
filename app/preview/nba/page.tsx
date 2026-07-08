import Link from 'next/link';

export default function PreviewPage() {
  return (
    <>
      <section className="preview-hero" style={{ backgroundImage: "linear-gradient(rgba(10,24,45,.62),rgba(10,24,45,.62)),url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="hero-inner">
          <span className="eyebrow">Free Preview</span>
          <h1>NBA 籃球資訊免費預覽</h1>
          <p className="muted hero-copy">提供 NBA 公開賽事的近期比分、球隊狀態、基礎數據與賽前觀察摘要。</p>
          <div className="hero-actions">
            <a className="btn" href="https://www.nba.com/" target="_blank" rel="noopener noreferrer">前往官方網站</a>
            <Link className="btn btn2" href="/plans">查看會員方案</Link>
          </div>
        </div>
      </section>

      <section className="wrap section-block">
        <div className="notice">
          本頁內容為非會員可瀏覽的公開資訊示例與賽事觀察摘要，僅供資訊參考，不涉及投注、下注、博弈、代操或保證獲利。
        </div>
        <div className="preview-grid">
            <article className="preview-game-card">
              <div className="score-top">
                <span className="badge">NBA</span>
                <span className="score-note">免費預覽</span>
              </div>
              <h2>Celtics vs Lakers</h2>
              <p className="preview-score">112 - 105</p>
              <p><strong>基礎數據：</strong>命中率 48% / 籃板 44 / 助攻 27</p>
              <p><strong>賽前觀察：</strong>主隊外線穩定度較佳，節奏控制能力較強；客隊若能降低失誤，仍具備追分空間。</p>
            </article>,
            <article className="preview-game-card">
              <div className="score-top">
                <span className="badge">NBA</span>
                <span className="score-note">免費預覽</span>
              </div>
              <h2>Warriors vs Suns</h2>
              <p className="preview-score">118 - 121</p>
              <p><strong>基礎數據：</strong>三分命中 16 / 罰球 22 / 失誤 12</p>
              <p><strong>賽前觀察：</strong>雙方進攻效率接近，關鍵在第四節防守輪轉與替補火力延續。</p>
            </article>
        </div>
      </section>
    </>
  );
}
