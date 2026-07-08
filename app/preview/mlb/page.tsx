import Link from 'next/link';

export default function PreviewPage() {
  return (
    <>
      <section className="preview-hero" style={{ backgroundImage: "linear-gradient(rgba(10,24,45,.62),rgba(10,24,45,.62)),url('https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="hero-inner">
          <span className="eyebrow">Free Preview</span>
          <h1>MLB 棒球資訊免費預覽</h1>
          <p className="muted hero-copy">提供 MLB 公開賽事的近期比分、投打表現、賽程摘要與觀察重點。</p>
          <div className="hero-actions">
            <a className="btn" href="https://www.mlb.com/" target="_blank" rel="noopener noreferrer">前往官方網站</a>
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
                <span className="badge">MLB</span>
                <span className="score-note">免費預覽</span>
              </div>
              <h2>Dodgers vs Giants</h2>
              <p className="preview-score">6 - 4</p>
              <p><strong>基礎數據：</strong>全壘打 2 / 安打 10 / 三振 8</p>
              <p><strong>賽前觀察：</strong>道奇長打火力具優勢，但巨人後段反攻能力不可忽視，牛棚穩定度是關鍵。</p>
            </article>,
            <article className="preview-game-card">
              <div className="score-top">
                <span className="badge">MLB</span>
                <span className="score-note">免費預覽</span>
              </div>
              <h2>Yankees vs Red Sox</h2>
              <p className="preview-score">3 - 5</p>
              <p><strong>基礎數據：</strong>上壘率 .342 / 得點圈 3-9 / 失誤 0</p>
              <p><strong>賽前觀察：</strong>紅襪打線串聯較佳，洋基需提高得點圈把握度，避免早局落後。</p>
            </article>
        </div>
      </section>
    </>
  );
}
