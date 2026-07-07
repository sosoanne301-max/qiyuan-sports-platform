'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('註冊中...');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, phone },
      },
    });

    if (error) {
      setMsg(error.message);
      return;
    }

    if (data.session) {
      setMsg('註冊成功，正在前往會員中心。');
      setTimeout(() => router.push('/member'), 700);
    } else {
      setMsg('註冊成功。若 Supabase 有開啟 Email 驗證，請先到信箱完成驗證後再登入。');
      setTimeout(() => router.push('/login'), 1600);
    }
  }

  return (
    <section className="section form-section sport-bg">
      <div className="card form-card">
        <h1>加入會員</h1>
        <p className="muted">註冊後即可選擇會員方案並回填付款資料。</p>
        <form onSubmit={submit}>
          <label>姓名</label>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>手機</label>
          <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label>密碼</label>
          <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
          <button className="btn full" type="submit">註冊</button>
        </form>
        {msg && <p className="msg">{msg}</p>}
      </div>
    </section>
  );
}
