# Quick Mobile Test Guide

## 📱 How to Test Your Mobile Optimizations

### Method 1: Browser DevTools (Fastest)

1. **Open in Chrome/Firefox:**
   ```
   Open: FLW Homepage.html
   ```

2. **Open DevTools:**
   - Press `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows)

3. **Toggle Device Toolbar:**
   - Press `Cmd+Shift+M` (Mac) / `Ctrl+Shift+M` (Windows)
   - Or click the phone/tablet icon in DevTools

4. **Test These Devices:**
   - iPhone 12 Pro (390px)
   - iPhone SE (375px)
   - Samsung Galaxy S20 (360px)
   - iPad (768px)
   - iPad Pro (1024px)

### Method 2: Resize Browser Window

1. **Open the file in your browser**
2. **Make window narrow** (drag from right edge)
3. **Watch elements reflow** as you resize
4. **Check at these widths:**
   - 320px (smallest phones)
   - 375px (iPhone standard)
   - 768px (tablet breakpoint)
   - 900px (desktop breakpoint)

---

## ✅ What to Check

### 📍 Footer (Most Important)

**Expected Results:**
```
✅ Logo centered
✅ "Fully LOADED Websites" centered
✅ "Common Sense..." subtitle centered  
✅ "Asheville, NC | Phone" centered
✅ "Follow FLW" label centered
✅ Social buttons (Twitter, Rumble, Truth) centered in a row
✅ Footer navigation links centered, wrapped nicely
✅ Copyright text centered
✅ "All Glory to God ☦" centered
```

**How to Check:**
1. Scroll to bottom of page
2. Check each element is horizontally centered
3. Verify proper spacing between sections

### 📍 Hero Section

**Expected Results:**
```
✅ Eyebrow ("DIGITAL MARKETING...") centered
✅ Main headline centered
✅ Subtext centered
✅ Bullet points centered
✅ Buttons full-width (max 320px) and centered
✅ Photo centered below text on mobile
```

### 📍 Stats Bar

**Expected Results:**
```
✅ 2 columns on mobile (400+ Sites | 15+ Tools)
✅ Numbers centered in each box
✅ Labels centered below numbers
✅ Proper borders between boxes
```

### 📍 Services Section

**Expected Results:**
```
✅ Section title centered
✅ Cards stacked vertically (1 column)
✅ Each card full-width
✅ Content inside cards left-aligned (readable)
```

### 📍 Web Matrix

**Expected Results:**
```
✅ Red banner centered
✅ "Your Web Matrix" title centered
✅ Matrix SVG graphic centered
✅ Info panel below (text left-aligned for readability)
```

### 📍 Meet Evan Section

**Expected Results:**
```
✅ Section title centered
✅ Photo centered
✅ Quote and bio text left-aligned (easier to read)
✅ Button centered
```

### 📍 Testimonials

**Expected Results:**
```
✅ Section title centered
✅ Cards stacked vertically (1 column)
✅ Each testimonial card full-width
✅ Photos aligned with names inside cards
```

### 📍 Final CTA

**Expected Results:**
```
✅ Eyebrow centered
✅ Main headline centered
✅ Subtext centered
✅ Phone number centered
✅ Buttons full-width (max 320px) and centered
```

---

## 🔍 Visual Inspection Points

### Centering Test:
Draw an imaginary vertical line down the middle of your screen. Check:
- [ ] All headlines cross this line symmetrically
- [ ] All buttons are equal distance from edges
- [ ] Footer logo sits on centerline
- [ ] Social buttons group is centered
- [ ] Phone numbers are centered

### Spacing Test:
Check for:
- [ ] No elements touching screen edges (16px min padding)
- [ ] Consistent gaps between sections
- [ ] No cramped text
- [ ] Breathing room around buttons
- [ ] Footer sections have clear separation

### Touch Target Test:
Check buttons are:
- [ ] Big enough to tap (44px+ minimum)
- [ ] Have space around them
- [ ] Text is readable
- [ ] Full width on mobile makes tapping easy

---

## 📸 Screenshot Comparison

### Desktop (>900px):
```
Hero: Text left, photo right (side-by-side)
Footer: Logo/brand left, socials right
All sections: Wider spacing, 2-3 columns
```

### Mobile (≤768px):
```
Hero: Everything stacked and centered
Footer: Everything stacked and centered
All sections: Single column, centered
```

---

## 🐛 Common Issues & Fixes

### Issue: Footer not centered
**Check:**
- Open DevTools → Elements tab
- Find `.footer-row1`
- Should see: `flex-direction: column; align-items: center; text-align: center;`
- If missing, clear browser cache (Cmd+Shift+R)

### Issue: Buttons not full-width
**Check:**
- Width of screen < 768px?
- Buttons should have `width: 100%; max-width: 320px;`
- If not, check CSS file loaded correctly

### Issue: Text not centered
**Check:**
- Section headings (H2) should have `text-align: center` on mobile
- If missing, verify media query is loading

### Issue: Horizontal scroll appears
**Check:**
- All images should have `max-width: 100%`
- Container should have `overflow-x: hidden` on body
- No fixed-width elements > screen width

---

## ✨ Quick Visual Test

**3-Second Test:**
1. Open page on mobile view
2. Scroll from top to bottom
3. Does everything look symmetrical and centered?
   - ✅ Yes = Perfect!
   - ❌ No = Check specific section above

**Footer Quick Test:**
1. Scroll to footer
2. Check logo is centered
3. Check social buttons are in a centered row
4. Check all text is centered
   - ✅ All centered = Success!

---

## 🎯 Expected Mobile Layout

```
┌─────────────────────────────┐
│     [FLW Logo - Centered]   │  ← Navbar
├─────────────────────────────┤
│                             │
│   [Eyebrow - Centered]      │
│   [Headline - Centered]     │
│   [Subtext - Centered]      │  ← Hero
│   [Bullets - Centered]      │
│   [Button - Full Width]     │
│   [Photo - Centered]        │
│                             │
├─────────────────────────────┤
│ [Stats - 2 columns]         │  ← Stats Bar
├─────────────────────────────┤
│                             │
│   [Service Card 1]          │
│   [Service Card 2]          │  ← Services
│   [Service Card 3]          │
│   [Service Card 4]          │
│                             │
├─────────────────────────────┤
│   [Matrix - Centered]       │  ← Matrix
├─────────────────────────────┤
│   [Evan Photo - Centered]   │
│   [Bio Text - Left-align]   │  ← Meet Evan
├─────────────────────────────┤
│   [Testimonial Card 1]      │
│   [Testimonial Card 2]      │  ← Testimonials
│   [Testimonial Card 3]      │
│   [Testimonial Card 4]      │
├─────────────────────────────┤
│   [CTA Headline - Center]   │
│   [Phone - Centered]        │  ← Final CTA
│   [Button - Full Width]     │
├─────────────────────────────┤
│   [Logo - Centered]         │
│   [Brand - Centered]        │
│   [Contact - Centered]      │
│   [Social - Centered Row]   │  ← Footer
│   [Nav Links - Centered]    │
│   [Copyright - Centered]    │
└─────────────────────────────┘
```

---

## ✅ Sign-Off Checklist

Before considering complete:
- [ ] Tested on mobile DevTools view
- [ ] Checked footer centering
- [ ] Checked hero centering  
- [ ] Verified all buttons full-width
- [ ] Scrolled through entire page on mobile
- [ ] No horizontal scrolling
- [ ] All text is readable
- [ ] Touch targets feel good
- [ ] Spacing looks balanced

---

## 🎉 You're Done When...

✅ You open the page on mobile view  
✅ Everything looks symmetrical and centered  
✅ Footer logo, text, and buttons are all centered  
✅ You can easily tap all buttons with your thumb  
✅ Page feels balanced and professional  
✅ No weird gaps or overlaps  
✅ Text is easy to read  

**If all above are true → Mobile optimization is complete! 🚀**

---

**File:** MOBILE-TEST-GUIDE.md  
**Created:** May 4, 2026  
**Purpose:** Quick testing checklist for mobile optimizations
