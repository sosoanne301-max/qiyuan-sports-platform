import Link from 'next/link';

const scoreCards = [
  { sport: '世足', league: 'World Cup 2026', game: 'Portugal 0 - 1 Spain', status: 'Round of 16 / Final', note: '近期賽事比分' },
  { sport: '世足', league: 'World Cup 2026', game: 'United States 1 - 4 Belgium', status: 'Round of 16 / Final', note: '近期賽事比分' },
  { sport: '職棒', league: 'MLB', game: 'Brewers @ Cardinals', status: '07/07 11:15 PDT', note: '近期賽程' },
  { sport: '職棒', league: 'MLB', game: 'Cubs @ Orioles', status: '07/07 15:35 PDT', note: '近期賽程' },
  { sport: 'NBA', league: 'NBA', game: '近期無例行賽場次', status: 'Offseason', note: '可於後台更新資料' },
];

const sportCards = [
  {
    title: 'NBA 籃球資訊',
    text: '整理球隊狀態、近期賽程、比分摘要與會員內容。',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '世足足球資訊',
    text: '提供足球賽事、盃賽重點、隊伍資訊與近期比分整理。',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '職棒賽事資訊',
    text: '彙整棒球賽程、球隊資訊、比分摘要與會員專區內容。',
    image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero simple-hero">
        <div className="hero-inner">
          <span className="eyebrow">Sports Information Membership</span>
          <h1>齊元賽事資訊平台</h1>
          <p className="muted hero-copy">
            專注提供 NBA、世足、職棒等公開賽事資訊整理，包含近期比分、賽程摘要、球隊資訊與會員專區內容，協助會員快速掌握每日重點賽事動態。
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/register">加入會員</Link>
            <Link className="btn btn2" href="/plans">查看方案</Link>
          </div>
        </div>
      </section>

      <section className="wrap section-block">
        <div className="section-title">
          <h2>近期場次比分 / 賽程</h2>
          <p className="muted">提供近期賽事比分與賽程摘要，方便會員快速瀏覽每日重點賽事資訊。</p>
        </div>
        <div className="score-grid">
          {scoreCards.map((item) => (
            <div className="score-card" key={`${item.sport}-${item.game}`}>
              <div className="score-top">
                <span className="badge">{item.sport}</span>
                <span className="score-note">{item.note}</span>
              </div>
              <p className="league">{item.league}</p>
              <h3>{item.game}</h3>
              <p className="muted">{item.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section-block">
        <div className="section-title">
          <h2>賽事資訊分類</h2>
          <p className="muted">以簡潔圖片卡片呈現 NBA、世足與職棒資訊分類，瀏覽更直覺。</p>
        </div>
        <div className="sports-grid">
          {sportCards.map((item) => (
            <article className="image-card" key={item.title}>
              <div className="image-thumb" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="image-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section-block grid three">
        <div className="card light-card">
          <h3>會員觀看權限</h3>
          <p>會員可依方案期限進入會員專區，查看對應類型的賽事資訊內容。</p>
        </div>
        <div className="card light-card">
          <h3>銀行轉帳回填</h3>
          <p>支援人工付款回填，管理員確認後即可開通會員期限。</p>
        </div>
        <div className="card light-card">
          <h3>簡易後台管理</h3>
          <p>可審核訂單、開通會員，後續可再擴充比分與內容管理。</p>
        </div>
      </section>
    </>
  );
}
