import Link from 'next/link';

const plans = [
  ['足球賽事7天', '4000', '7 天足球賽事資訊觀看權限，適合短期查看足球賽程與資料整理。'],
  ['足球賽事30天', '10000', '30 天足球賽事資訊觀看權限，包含足球賽程、隊伍資料與會員內容。'],
  ['藍球賽事7天', '4000', '7 天藍球賽事資訊觀看權限，適合短期查看 NBA 與籃球資料整理。'],
  ['藍球賽事30天', '10000', '30 天藍球賽事資訊觀看權限，包含 NBA、籃球賽程與會員內容。'],
  ['棒球賽事7天', '4000', '7 天棒球賽事資訊觀看權限，適合短期查看職棒賽程與資料整理。'],
  ['棒球賽事30天', '10000', '30 天棒球賽事資訊觀看權限，包含職棒賽程、球隊資料與會員內容。'],
  ['綜合賽事30天', '15000', '30 天綜合賽事資訊觀看權限，包含足球、藍球、棒球分類內容。'],
];

export default function Plans() {
  return (
    <section className="wrap section-block">
      <div className="section-title">
        <h1>會員方案</h1>
        <p className="muted">選擇方案後，請至付款回填頁提交匯款資料，由管理員審核後開通。</p>
      </div>
      <div className="plan-grid">
        {plans.map((p) => (
          <div className="plan-card" key={p[0]}>
            <span className="badge">會員方案</span>
            <h2>{p[0]}</h2>
            <p className="muted">{p[2]}</p>
            <div className="price">NT$ {Number(p[1]).toLocaleString()}</div>
            <Link className="btn full" href={`/payment?plan=${encodeURIComponent(p[0])}&amount=${p[1]}`}>
              選擇此方案
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
