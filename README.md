# Voltra — Next.js project

This is your landing page rebuilt as a real Next.js 14 app (App Router + TypeScript),
with working forms and a mock backend you can swap for Supabase later.

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's wired up already

- **Live product grid** (`/api/products`) — filter by category, add to cart
- **Cart** (`components/CartContext.tsx`) — client-side state, checkout modal
- **Checkout** (`POST /api/orders`) — creates an order and returns a reference number
- **Repair booking form** (`POST /api/repairs`) — creates a repair request and returns a reference number
- All data currently lives in memory in `lib/db.ts` — it resets whenever the server restarts.
  This is intentional: it lets you test every flow end-to-end with zero setup before
  connecting a real database.

## Project structure

```
app/
  layout.tsx        → fonts + global providers
  page.tsx           → assembles all sections
  globals.css        → design tokens + all styling
  api/
    products/route.ts → GET products (optionally ?category=)
    repairs/route.ts  → POST a repair request, GET by ?phone=
    orders/route.ts   → POST an order, GET by ?phone=
components/
  Navbar, Hero, SocialProof, Features, Showcase, Benefits,
  Testimonials, Pricing, RepairForm, FAQ, CTA, Footer, CartModal
  CartContext.tsx     → shared cart state
  Reveal.tsx          → scroll-reveal / staggered-entrance wrapper
lib/
  types.ts            → Product / RepairRequest / Order types
  db.ts                → mock "database" — swap this file for Supabase later
```

## Changing the frontend

Everything is componentized by section, matching the original page:
`Hero.tsx`, `Features.tsx`, `Showcase.tsx`, `Benefits.tsx`, `Testimonials.tsx`,
`Pricing.tsx`, `FAQ.tsx`, `CTA.tsx`, `Footer.tsx`.

- **Copy changes** — edit the text directly inside each component.
- **Colors / type / spacing** — all design tokens live at the top of `app/globals.css`
  under `:root`. Change `--copper`, `--teal`, `--ink`, etc. and it updates everywhere.
- **Adding a product** — edit the `products` array in `lib/db.ts` (until Supabase is connected).
- **Adding a new section** — create a new component in `components/`, then add it to
  `app/page.tsx` in the order you want it to appear.

## Swapping the mock backend for Supabase

1. Create a project at supabase.com and grab your project URL + anon key.
2. `npm install @supabase/supabase-js`
3. Create the tables from the original plan:
   `products`, `orders`, `order_items`, `repairs`, `payments`, `users`.
4. Create `lib/supabase.ts`:
   ```ts
   import { createClient } from "@supabase/supabase-js";
   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   );
   ```
5. In `lib/db.ts`, replace each function body with a Supabase call, keeping the same
   function name and return shape — nothing in `components/` or `app/api/` needs to change.
   Example:
   ```ts
   export async function getProducts(category?: string) {
     let query = supabase.from("products").select("*");
     if (category && category !== "all") query = query.eq("category", category);
     const { data } = await query;
     return data ?? [];
   }
   ```
6. Add `.env.local` with your Supabase keys (never commit this file).

## Adding M-Pesa payments

The `/api/orders` and `/api/repairs` routes already have a comment marking exactly
where to trigger the Safaricom Daraja STK Push once you're ready:

1. Register on the Safaricom Daraja portal, get sandbox credentials.
2. Create `lib/mpesa.ts` with a function that calls the STK Push endpoint using the
   order/repair total and the customer's phone number.
3. Call it from `app/api/orders/route.ts` right after `createOrder(...)`.
4. Add a `app/api/mpesa/callback/route.ts` endpoint — Safaricom will POST to this URL
   to confirm payment. Update the order/repair status to `"paid"` there.
5. Switch from sandbox to production credentials once Safaricom approves your go-live application.

## Deploying

The easiest path is **Vercel** (built by the makers of Next.js):

1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Add any environment variables (Supabase keys, M-Pesa keys) in the Vercel dashboard.
4. Deploy — you'll get a live URL, and every future `git push` auto-deploys.
