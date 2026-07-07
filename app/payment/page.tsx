'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

function PaymentForm() {
  const params = useSearchParams();
  const [plan, setPlan] = useState('');
  const [amount, setAmount] = useState('');
  const [last5, setLast5] = useState('');
  const [note, setNote] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setPlan(params.get('plan') || '');
    setAmount(params.get('amount') || '');
  }, [params]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('送出中...');

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setMsg('請先登入會員。');
      return;
    }

    const { data: planRow, error: planError } = await supabase
      .from('plans')
      .select('*')
      .eq('name', plan)
      .maybeSingle();

    if (planError) {
      setMsg(planError.message);
      return;
    }

    if (!planRow) {
      setMsg('找不到方案，請回到會員方案頁重新選擇。');
      return;
    }

    const { error } = await supabase.from('payment_orders').insert({
      member_id: user.id,
      plan_id: planRow.id,
      amount: Number(amount),
      payment_method: 'bank_transfer',
      bank_last5: last5,
      note,
      status: 'pending',
    });

    if (error) {
      setMsg(error.message);
      return;
    }

    setMsg('已送出付款回填，請等待管理員審核。');
  }

  return (
    <div className="card form-card">
      <h1>付款回填</h1>
      <div className="notice">
        <p>付款方式：銀行轉帳</p>
        <p>銀行：第一銀行</p>
        <p>帳號：23357055369</p>
        <p>戶名：王O東</p>
        <p className="muted">完成轉帳後，請填寫方案、金額與匯款帳號後五碼，管理員確認入帳後將開通會員權限。</p>
      </div>
      <form onSubmit={submit}>
        <label>方案名稱</label>
        <input className="input" value={plan} onChange={(e) => setPlan(e.target.value)} required />
        <label>金額</label>
        <input className="input" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <label>匯款後五碼</label>
        <input className="input" value={last5} onChange={(e) => setLast5(e.target.value)} required maxLength={5} />
        <label>備註</label>
        <textarea className="input" value={note} onChange={(e) => setNote(e.target.value)} />
        <button className="btn full" type="submit">送出審核</button>
      </form>
      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}

export default function Payment() {
  return (
    <section className="section form-section">
      <Suspense fallback={<div className="card form-card"><p className="msg">載入中...</p></div>}>
        <PaymentForm />
      </Suspense>
    </section>
  );
}
