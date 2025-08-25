# Domain Setup Guide: GoDaddy → Vercel

## Overview
This guide walks you through configuring your GoDaddy domain `arcane-foundry.com` to work with Vercel hosting.

---

## Prerequisites
- [ ] GoDaddy account with `arcane-foundry.com` domain
- [ ] Vercel account (free tier works)
- [ ] Next.js project deployed to Vercel

---

## Step 1: Deploy to Vercel

### 1.1 Connect Repository
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

### 1.2 Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Note your Vercel URL (e.g., `arcane-foundry-abc123.vercel.app`)

---

## Step 2: Configure Custom Domain in Vercel

### 2.1 Add Domain
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Click "Add Domain"
3. Enter: `arcane-foundry.com`
4. Click "Add"

### 2.2 Vercel Will Show Required DNS Records
Vercel will display the DNS records you need to configure in GoDaddy:
- **Type**: A
- **Name**: @
- **Value**: 76.76.19.19

---

## Step 3: Configure GoDaddy DNS

### 3.1 Access DNS Management
1. Log into your GoDaddy account
2. Go to "My Products" → "Domains"
3. Find `arcane-foundry.com` and click "DNS"

### 3.2 Update DNS Records
1. **Remove existing A record** (if any) pointing to GoDaddy hosting
2. **Add new A record**:
   - **Type**: A
   - **Name**: @
   - **Value**: 76.76.19.19
   - **TTL**: 600 (or default)
3. **Click "Save"**

### 3.3 Optional: Add www Subdomain
If you want `www.arcane-foundry.com` to work:
1. **Add CNAME record**:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com
   - **TTL**: 600 (or default)
2. **Click "Save"**

---

## Step 4: Verify Configuration

### 4.1 Check DNS Propagation
DNS changes can take up to 48 hours, but usually propagate within 1-2 hours.

**Check propagation:**
```bash
# Check A record
nslookup arcane-foundry.com

# Check CNAME record (if added)
nslookup www.arcane-foundry.com
```

### 4.2 Verify in Vercel
1. Go back to Vercel dashboard
2. Check "Settings" → "Domains"
3. Status should show "Valid Configuration" or similar
4. SSL certificate will be automatically provisioned

---

## Step 5: Test Your Site

### 5.1 Basic Functionality
- [ ] Site loads at `arcane-foundry.com`
- [ ] HTTPS redirects work correctly
- [ ] All pages load without errors
- [ ] Forms submit successfully

### 5.2 Performance Check
- [ ] Run Lighthouse audit
- [ ] Verify Core Web Vitals
- [ ] Check mobile responsiveness

---

## Troubleshooting

### Common Issues

#### DNS Not Propagated
**Problem**: Site still shows GoDaddy page
**Solution**: Wait 1-2 hours, DNS changes take time

#### SSL Certificate Issues
**Problem**: HTTPS shows security warning
**Solution**: Wait for Vercel to provision SSL (usually 5-10 minutes)

#### Mixed Content Errors
**Problem**: Some resources load over HTTP
**Solution**: Ensure all internal links use relative paths or HTTPS

#### www Subdomain Not Working
**Problem**: `www.arcane-foundry.com` doesn't load
**Solution**: Verify CNAME record is correctly configured

---

## Security Considerations

### HTTPS Enforcement
- Vercel automatically redirects HTTP → HTTPS
- SSL certificate is automatically renewed
- HSTS headers are configured by default

### DNS Security
- Consider enabling DNSSEC in GoDaddy (optional)
- Monitor DNS records for unauthorized changes
- Use strong GoDaddy account security

---

## Post-Launch Checklist

### Day 1
- [ ] Domain resolves correctly
- [ ] HTTPS works without warnings
- [ ] Site loads in under 2 seconds
- [ ] All pages accessible

### Week 1
- [ ] Monitor Vercel analytics
- [ ] Check error logs
- [ ] Verify form submissions
- [ ] Test on multiple devices

### Month 1
- [ ] Review performance metrics
- [ ] Check SSL certificate renewal
- [ ] Monitor DNS propagation
- [ ] Backup DNS configuration

---

## Support Resources

### GoDaddy Support
- [GoDaddy Help Center](https://www.godaddy.com/help)
- Phone: 1-866-938-1119
- Live chat available 24/7

### Vercel Support
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- Email support for paid plans

---

## Notes
- **DNS changes are not instant** - plan for 1-2 hour propagation time
- **Vercel handles SSL automatically** - no manual certificate management needed
- **Keep GoDaddy credentials secure** - DNS access is critical
- **Monitor Vercel dashboard** - it will show domain status and any issues

This setup gives you a professional, fast-loading website with automatic SSL and global CDN distribution through Vercel.
