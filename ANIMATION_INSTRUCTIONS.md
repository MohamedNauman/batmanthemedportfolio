# Animation Removal Instructions

The portfolio currently has "refreshing/booting" effects because every element has `initial`, `animate`, and transition delays.

## What needs to be done:

### Remove from ALL components:
1. Remove `initial={{ opacity: 0, y/x: ... }}` props from motion.div elements
2. Remove `animate={isInView ? { opacity: 1, y/x: 0 } : {}}` props
3. Remove transition `delay` properties
4. Keep `whileHover` and `whileTap` props (these are good!)
5. Keep CSS `transition-all duration-300` classes (these are smooth!)

### Components that need fixes:
- ProjectsSection.tsx - Remove initial animations from ALL motion elements inside
- SkillsSection.tsx - Remove initial animations from ALL motion elements inside
- CertificationsSection.tsx - Remove initial animations from ALL motion elements inside
- ContactSection.tsx - Remove initial animations from ALL motion elements inside

### Example of what to change:

**BEFORE (causes refreshing):**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
  className="glass-strong"
>
```

**AFTER (appears instantly):**
```tsx
<div className="glass-strong">
```

**Keep hover effects:**
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
  className="glass-strong transition-all duration-300"
>
```

## Result:
- Content appears instantly (no refreshing effect)
- Hover effects still work smoothly
- CSS transitions handle color/border changes
