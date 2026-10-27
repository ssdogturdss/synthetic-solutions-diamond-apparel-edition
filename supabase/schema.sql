-- Run in Supabase SQL editor
create table products (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  theme text,
  title text,
  description text,
  images jsonb,
  selected_image int,
  retail_price int,
  cost int,
  profit int,
  printify_id text,
  stripe_link text,
  status text,
  sales_count int default 0
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products,
  stripe_id text,
  printify_order_id text,
  customer_email text,
  amount int,
  profit int,
  status text,
  tracking text
);

create table agent_logs (
  id uuid primary key default gen_random_uuid(),
  agent_name text,
  action text,
  input jsonb,
  output jsonb,
  created_at timestamptz default now()
);