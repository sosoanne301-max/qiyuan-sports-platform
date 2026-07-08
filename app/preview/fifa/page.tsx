import Link from 'next/link';

export default function PreviewPage() {
  return (
    <>
      <section className="preview-hero" style={{ backgroundImage: "linear-gradient(rgba(10,24,45,.62),rgba(10,24,45,.62)),url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="hero-inner">
          <span className="eyebrow">Free Preview</span>
          <h1>FIFA 足球資訊免費預覽</h1>
          <p className="muted hero-copy">提供 FIFA 與國際足球公開賽事的比分、控球、射門與賽前觀察摘要。</p>
          <div className="hero-actions">
            <a className="btn" href="https://www.fifa.com/" target="_blank" rel="noopener noreferrer">前往官方網站</a>
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
                <span className="badge">FIFA</span>
                <span className="score-note">免費預覽</span>
              </div>
              <h2>Spain vs Portugal</h2>
              <p className="preview-score">1 - 0</p>
              <p><strong>基礎數據：</strong>控球率 56% / 射門 11 / 射正 5</p>
              <p><strong>賽前觀察：</strong>西班牙中場控球穩定，葡萄牙反擊速度仍有威脅，後續需觀察邊路壓迫效果。</p>
            </article>,
            <article className="preview-game-card">
              <div className="score-top">
                <span className="badge">FIFA</span>
                <span className="score-note">免費預覽</span>
              </div>
              <h2>France vs Morocco</h2>
              <p className="preview-score">賽前預覽</p>
              <p><strong>基礎數據：</strong>近況：法國進攻火力佳，摩洛哥防守組織完整</p>
              <p><strong>賽前觀察：</strong>法國若能提早取得進球會提高控場機會；摩洛哥適合以防守反擊尋找空檔。</p>
            </article>
        </div>
      </section>
    </>
  );
}
