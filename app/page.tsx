import Link from 'next/link';

const scoreCards = [
  { sport: 'NBA', league: 'NBA', game: 'Celtics 112 - 105 Lakers', status: '近期比分示例', note: '非會員預覽' },
  { sport: 'FIFA', league: 'World Cup / 國際足球', game: 'Spain 1 - 0 Portugal', status: '近期比分示例', note: '非會員預覽' },
  { sport: 'CPBL', league: '中華職棒', game: '兄弟 5 - 3 統一', status: '近期比分示例', note: '非會員預覽' },
  { sport: 'MLB', league: 'Major League Baseball', game: 'Dodgers 6 - 4 Giants', status: '近期比分示例', note: '非會員預覽' },
];

const sportCards = [
  {
    title: 'NBA 籃球資訊',
    text: '非會員可先查看近期比分、基礎數據與賽前觀察摘要。',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
    href: '/preview/nba',
  },
  {
    title: 'FIFA 足球資訊',
    text: '提供國際足球賽事、隊伍近況、比分摘要與觀察重點。',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=900&q=80',
    href: '/preview/fifa',
  },
  {
    title: '台灣職棒資訊',
    text: '整理中華職棒近期比分、投打數據與賽前重點。',
    image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=900&q=80',
    href: '/preview/cpbl',
  },
  {
    title: 'MLB 棒球資訊',
    text: '提供美國職棒賽程摘要、近期比分與球隊表現趨勢。',
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=900&q=80',
    href: '/preview/mlb',
  },
];

const officialLinks = [
  { name: 'NBA 官網', href: 'https://www.nba.com/' },
  { name: 'FIFA 官網', href: 'https://www.fifa.com/' },
  { name: '台灣棒球官網', href: 'https://www.cpbl.com.tw/' },
  { name: 'MLB 官網', href: 'https://www.mlb.com/' },
];

export default function Home() {
  return (
    <>
      <section className="hero simple-hero">
        <div className="hero-inner">
          <span className="eyebrow">Sports Information Membership</span>
          <h1>齊元賽事資訊平台</h1>
          <p className="muted hero-copy">
            專注提供 NBA、FIFA、台灣職棒、MLB 等公開賽事資訊整理，包含近期比分、賽程摘要、球隊資訊與會員專區內容，協助會員快速掌握每日重點賽事動態。
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
          <p className="muted">提供近期賽事比分與賽程摘要，完整數據與會員觀察內容開通後可查看。</p>
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
          <p className="muted">點擊下方分類，可查看非會員搶先看的比分、基礎數據與賽前觀察摘要。</p>
        </div>
        <div className="sports-grid">
          {sportCards.map((item) => (
            <Link className="image-card clickable-card" href={item.href} key={item.title}>
              <div className="image-thumb" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="image-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="card-link">查看免費預覽 →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section-block">
        <div className="section-title">
          <h2>官方賽事連結</h2>
          <p className="muted">以下為各賽事官方網站連結，方便會員查閱公開賽事資訊。</p>
        </div>
        <div className="official-link-grid">
          {officialLinks.map((item) => (
            <a className="official-link-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.name}>
              <span>{item.name}</span>
              <strong>前往官網</strong>
            </a>
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
          <h3>公開資訊整理</h3>
          <p>平台以公開賽事資料整理與內容摘要為主，不提供投注、下注或保證獲利服務。</p>
        </div>
      </section>
    </>
  );
}
