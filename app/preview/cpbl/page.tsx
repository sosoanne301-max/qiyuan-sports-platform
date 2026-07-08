import Link from 'next/link';

export default function PreviewPage() {
  return (
    <>
      <section className="preview-hero" style={{ backgroundImage: "linear-gradient(rgba(10,24,45,.62),rgba(10,24,45,.62)),url('https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="hero-inner">
          <span className="eyebrow">Free Preview</span>
          <h1>台灣職棒資訊免費預覽</h1>
          <p className="muted hero-copy">提供中華職棒公開賽事的近期比分、投打數據與賽前觀察摘要。</p>
          <div className="hero-actions">
            <a className="btn" href="https://www.cpbl.com.tw/" target="_blank" rel="noopener noreferrer">前往官方網站</a>
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
                <span className="badge">CPBL</span>
                <span className="score-note">免費預覽</span>
              </div>
              <h2>兄弟 vs 統一</h2>
              <p className="preview-score">5 - 3</p>
              <p><strong>基礎數據：</strong>安打 9 - 7 / 失誤 1 - 2 / 牛棚失分 1</p>
              <p><strong>賽前觀察：</strong>兄弟中後段攻勢掌握度較佳，統一若要反制需提高得點圈打擊效率。</p>
            </article>,
            <article className="preview-game-card">
              <div className="score-top">
                <span className="badge">CPBL</span>
                <span className="score-note">免費預覽</span>
              </div>
              <h2>樂天 vs 富邦</h2>
              <p className="preview-score">4 - 4</p>
              <p><strong>基礎數據：</strong>長打 3 / 保送 6 / 殘壘 8</p>
              <p><strong>賽前觀察：</strong>雙方投手控球穩定性會影響比賽走向，後段牛棚調度是觀察重點。</p>
            </article>
        </div>
      </section>
    </>
  );
}
