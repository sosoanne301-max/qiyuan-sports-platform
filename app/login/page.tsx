'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
export default function Login(){const router=useRouter();const[email,setEmail]=useState('');const[password,setPassword]=useState('');const[msg,setMsg]=useState('');async function submit(e:React.FormEvent){e.preventDefault();setMsg('登入中...');const{error}=await supabase.auth.signInWithPassword({email,password});if(error){setMsg(error.message);return}router.push('/member')}return <section className="section"><div className="card form-card"><h1>會員登入</h1><form onSubmit={submit}><label>Email</label><input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/><label>密碼</label><input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/><button className="btn" type="submit">登入</button></form>{msg&&<p className="msg">{msg}</p>}</div></section>}
