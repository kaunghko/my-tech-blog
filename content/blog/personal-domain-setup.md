+++
date = '2025-09-07T22:27:12+09:00'
draft = false
title = 'Personal Domain Setup'
+++

I recently set up a custom domain for this site. It used to live at `kaunghko.github.io`; now it’s available at `kaunghtetko.com`. Here’s the process I followed using Namecheap and GitHub Pages.

### Overview
- **Domain registrar**: Namecheap (`https://namecheap.com`)
- **Host**: GitHub Pages
- **Result**: `kaunghtetko.com` with HTTPS and `www` redirect

### Prerequisites
- A working GitHub Pages site (either `username.github.io` or a repo with Pages enabled).
- Access to your domain’s DNS settings in Namecheap.

### Step 1 — Purchase your domain (Namecheap)
1. Search for your desired domain on Namecheap and add it to cart.
2. Complete checkout and create/sign in to your account.
3. Verify your email if prompted.

### Step 2 — Confirm your GitHub Pages site
1. Ensure your site builds and is publicly accessible.
2. If using a user/organization site, it should be at `https://username.github.io`.
3. If using a project site, verify its current Pages URL loads correctly.

### Step 3 — Set the custom domain in GitHub
1. Open your repository → `Settings` → `Pages`.
2. Under “Custom domain,” enter `kaunghtetko.com` (replace with your domain).
3. Click `Save` and enable “Enforce HTTPS” once available.

### Step 4 — Configure DNS in Namecheap
Open `Domain List` → `Manage` → `Advanced DNS`, then add:

For the apex domain (`kaunghtetko.com`):

```text
Type: A Record   Host: @   Value: 185.199.108.153
Type: A Record   Host: @   Value: 185.199.109.153
Type: A Record   Host: @   Value: 185.199.110.153
Type: A Record   Host: @   Value: 185.199.111.153
```

For the `www` subdomain:

```text
Type: CNAME Record   Host: www   Value: kaunghko.github.io
```

Remove conflicting old A/CNAME records, then click “Save All Changes.”

### Step 5 — Propagation and verification
1. DNS may take up to 24–48 hours to propagate (often much faster).
2. Test both `https://kaunghtetko.com` and `https://www.kaunghtetko.com`.
3. Confirm the lock icon (HTTPS) appears once certificates finish provisioning.

### Troubleshooting
- **No site yet?** Wait longer for DNS propagation and TLS issuance.
- **Pages disabled/private?** Ensure the repo is public and Pages is enabled.
- **Wrong DNS?** Use a DNS checker to confirm the A records and CNAME values.

All set—your custom domain should now point to your GitHub Pages site.