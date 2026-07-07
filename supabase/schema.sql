create table if not exists members (
  id uuid primary key,
  email text unique not null,
  name text,
  phone text,
  status text default 'active',
  role text default 'user',
  created_at timestamptz default now()
);

create table if not exists plans (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  price integer not null,
  duration_days integer not null,
  description text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete cascade,
  plan_id uuid references plans(id),
  start_at timestamptz not null,
  end_at timestamptz not null,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists payment_orders (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete cascade,
  plan_id uuid references plans(id),
  amount integer not null,
  payment_method text default 'bank_transfer',
  bank_last5 text,
  note text,
  status text default 'pending',
  approved_at timestamptz,
  approved_by uuid,
  created_at timestamptz default now()
);

create table if not exists content_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  content text,
  is_vip_only boolean default true,
  created_at timestamptz default now()
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.members
    where id = auth.uid()
      and role = 'admin'
      and status = 'active'
  );
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.members (id, email, name, phone, status, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', ''),
    coalesce(new.raw_user_meta_data->>'phone', ''),
    'active',
    'user'
  )
  on conflict (id) do update set
    email = excluded.email,
    name = excluded.name,
    phone = excluded.phone;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

update plans set is_active = false where name not in ('足球賽事7天','足球賽事30天','藍球賽事7天','藍球賽事30天','棒球賽事7天','棒球賽事30天','綜合賽事30天');

insert into plans (name, price, duration_days, description) values
('足球賽事7天',4000,7,'7 天足球賽事資訊觀看權限。'),
('足球賽事30天',10000,30,'30 天足球賽事資訊觀看權限。'),
('藍球賽事7天',4000,7,'7 天藍球賽事資訊觀看權限。'),
('藍球賽事30天',10000,30,'30 天藍球賽事資訊觀看權限。'),
('棒球賽事7天',4000,7,'7 天棒球賽事資訊觀看權限。'),
('棒球賽事30天',10000,30,'30 天棒球賽事資訊觀看權限。'),
('綜合賽事30天',15000,30,'30 天足球、藍球、棒球綜合賽事資訊觀看權限。')
on conflict (name) do update set
  price = excluded.price,
  duration_days = excluded.duration_days,
  description = excluded.description,
  is_active = true;

insert into content_posts (title, category, content, is_vip_only) values
('今日足球賽事資訊整理','足球','此區可放置足球賽程、隊伍資料、近期比分與會員專屬內容。',true),
('今日藍球賽事資訊整理','藍球','此區可放置 NBA、藍球賽程、球隊資料、球員資訊與會員專屬內容。',true),
('今日棒球賽事資訊整理','棒球','此區可放置職棒賽程、球隊資料、近期比分與會員專屬內容。',true)
on conflict do nothing;

alter table members enable row level security;
alter table plans enable row level security;
alter table subscriptions enable row level security;
alter table payment_orders enable row level security;
alter table content_posts enable row level security;

drop policy if exists "members self select" on members;
create policy "members self select" on members for select using (auth.uid() = id or public.is_admin());
drop policy if exists "members self update" on members;
create policy "members self update" on members for update using (auth.uid() = id or public.is_admin());

drop policy if exists "plans public select" on plans;
create policy "plans public select" on plans for select using (is_active = true);
drop policy if exists "plans admin all" on plans;
create policy "plans admin all" on plans for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "subscriptions self select" on subscriptions;
create policy "subscriptions self select" on subscriptions for select using (auth.uid() = member_id or public.is_admin());
drop policy if exists "subscriptions admin insert" on subscriptions;
create policy "subscriptions admin insert" on subscriptions for insert with check (public.is_admin());
drop policy if exists "subscriptions admin update" on subscriptions;
create policy "subscriptions admin update" on subscriptions for update using (public.is_admin());

drop policy if exists "orders self select" on payment_orders;
create policy "orders self select" on payment_orders for select using (auth.uid() = member_id or public.is_admin());
drop policy if exists "orders self insert" on payment_orders;
create policy "orders self insert" on payment_orders for insert with check (auth.uid() = member_id);
drop policy if exists "orders admin update" on payment_orders;
create policy "orders admin update" on payment_orders for update using (public.is_admin());

drop policy if exists "content authenticated select" on content_posts;
create policy "content authenticated select" on content_posts for select using (auth.role() = 'authenticated');
drop policy if exists "content admin all" on content_posts;
create policy "content admin all" on content_posts for all using (public.is_admin()) with check (public.is_admin());
