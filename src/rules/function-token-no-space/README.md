# function-token-no-space

Disallow a space between function tokens and their parameters.

```css
    a { transform: translate (1, 1); }
/**                         ↑ 
 *                 This space */
```

The following patterns are considered warnings:

```css
a { transform: translate (1, 1); }
```

```css
a { color: color (rgb (0, 0, 0) lightness (50%)); }
```

The following patterns are *not* considered warnings:

```css
a { transform: translate(1, 1); }
```

```css
a { color: color(rgb(0, 0, 0) lightness(50%)); }
```
