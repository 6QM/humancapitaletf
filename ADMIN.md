# Admin Guide — Human Capital ETF

This guide tells you exactly what to do for each common update task. No coding knowledge assumed.

---

## Before anything: how to publish changes

Every update follows the same 3-step flow after you edit a file:

```bash
git add .
git commit -m "describe what you changed"
git push origin main
```

Vercel will automatically redeploy the site. It takes ~2 minutes. You can watch progress at vercel.com/dashboard.

---

## Task 1 — Add a new field note

Field notes are the articles under `/notes`. Each note is two things: an MDX file (the content) and a metadata entry (the listing info).

### Step 1: Create the MDX file

Create a new file in `app/notes/` named by date and topic:

```
app/notes/2026-05-your-topic.mdx
```

Paste this template and fill it in:

```mdx
<article className="section-shell">
<div className="container-inner max-w-2xl">

<div className="mb-8">
  <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50">Field Note · May 2026</p>
  <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-textPrimary">Your Note Title Here</h1>
  <p className="mt-3 text-sm text-textSecondary/60">Note 05 · 3 min read</p>
</div>

<div className="note-prose">

Your first paragraph goes here. Write in plain text.

## A subheading

More content here. You can use:
- Bullet points like this
- **Bold text** with double asterisks
- *Italic text* with single asterisks

Another paragraph.

</div>

<div className="mt-10 pt-6 border-t border-borderSubtle flex items-center justify-between">
  <a href="/notes" className="text-xs text-textSecondary hover:text-textPrimary transition-colors">← All notes</a>
  <a href="/framework" className="text-xs text-accent hover:underline underline-offset-4">Read the Framework →</a>
</div>

</div>
</article>
```

**Things to update in the template:**
- `Field Note · May 2026` → change to the correct month/year
- `Your Note Title Here` → your actual title
- `Note 05` → increment the note number
- `3 min read` → rough estimate (250 words ≈ 1 min)
- Replace all the body content with your writing

### Step 2: Add metadata to the notes list

Open `content/notes.ts` and add your new note at the **top** of the array (newest first):

```ts
{
  slug: '2026-05-your-topic',        // must match your filename (without .mdx)
  title: 'Your Note Title Here',
  date: '2026-05-01',               // ISO format: YYYY-MM-DD
  summary: 'One or two sentences that appear on the notes listing page and homepage preview.',
},
```

### Step 3: Publish

```bash
git add .
git commit -m "add note: your topic"
git push origin main
```

---

## Task 2 — Edit existing page text

All page copy lives in one file: **`content/copy.ts`**

Open it and find the section you want to change by searching for the text. Edit directly.

| What you want to change | Where to find it in copy.ts |
|---|---|
| Hero title / subtitle | `home.hero.title` / `home.hero.subtitle` |
| Hero explanation paragraph | `home.hero.explanation` |
| Problem bullets | `home.problem.bullets` array |
| Framework bucket descriptions | `home.framework.buckets` array |
| About page text | `aboutPage` section |
| Framework page sections | `frameworkPage.sections` array |
| Footer quote / tagline | `meta.quote` / `meta.tagline` |

After editing, publish with git (see top of this guide).

---

## Task 3 — Update links and contact info

Open **`config/siteConfig.ts`** and update the values:

```ts
export const siteConfig = {
  name: 'Human Capital ETF',
  canonicalUrl: 'https://humancapitaletf.com',
  personalSiteUrl: 'https://69mike.com',     // your personal site
  youtubeUrl: 'https://youtube.com/...',     // your YouTube channel
  xUrl: 'https://x.com/...',                // your X/Twitter
  email: 'contact@humancapitaletf.com',     // contact email
  experimentUrl: 'https://...',             // "Follow Experiment" button link
};
```

These values are used automatically everywhere: Navbar, Footer, SEO metadata, and JSON-LD.

---

## Task 4 — Set up email capture (one-time)

The email signup form on the homepage sends subscribers to **Buttondown** (free newsletter tool).

1. Go to [buttondown.email](https://buttondown.email) and create a free account
2. In Buttondown settings, go to **API** and copy your API key
3. Go to [vercel.com/dashboard](https://vercel.com/dashboard) → your project → **Settings** → **Environment Variables**
4. Add a new variable:
   - Name: `BUTTONDOWN_API_KEY`
   - Value: your key from step 2
5. Click **Save**, then go to **Deployments** and click **Redeploy** on the latest deployment

After this, everyone who submits the form will appear in your Buttondown subscriber list where you can send them newsletters.

---

## Task 5 — Edit an existing field note

1. Find the file in `app/notes/` (named by date, e.g. `2026-03-micro-rebalance.mdx`)
2. Open it and edit the text between `<div className="note-prose">` and the closing `</div>`
3. Don't touch any of the JSX wrapper code (the `<article>`, `<div>`, `className=` parts)
4. Publish with git

---

## Task 6 — Check if deployment succeeded

1. Push your changes (see top of guide)
2. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
3. Click your project → **Deployments** tab
4. The top entry should show a green **Ready** status within ~2 minutes
5. If it shows **Error**, click the deployment to read the build log

---

## Quick reference: file map

```
content/copy.ts          ← all page text
content/notes.ts         ← notes listing metadata
config/siteConfig.ts     ← URLs, email, social links
app/notes/               ← individual note MDX files (one per article)
```
