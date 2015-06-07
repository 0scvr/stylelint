# rule-semicolon-space-after

Require or disallow a space after the semicolons of rules.

```css
    a { color: pink; top: 0; }
/**                ↑  
 * The space after this semicolon */
```

## Options

`string`: `"always"|"never"|"always-single-line"|"never-single-line"`

### `"always"`

There *must always* be a single space after the semicolon.

The following patterns are considered warnings:

```css
a { color: pink;top: 0; }
```

```css
a { 
  color: pink;
  top: 0;
}
```

The following patterns are *not* considered warnings:

```css
a { color: pink;}
```

```css
a { color: pink; }
```

```css
a { color: pink; top: 0; }
```

### `"never"`

There *must never* be whitespace after the semicolon.

The following patterns are considered warnings:

```css
a { color: pink; top: 0; }
```

```css
a { 
  color: pink;
  top: 0;
}
```

The following patterns are *not* considered warnings:

```css
a { color: pink;}
```

```css
a { color: pink; }
```

```css
a { color: pink;top: 0; }
```

### `"always-single-line"`

There *must always* be a single space after the semicolon in single-line rules.

The following patterns are considered warnings:

```css
a { color: pink;top: 0; }
```

The following patterns are *not* considered warnings:

```css
a { color: pink; top: 0; }
```

```css
a { 
  color: pink;
  top: 0;
}
```

### `"never-single-line"`

There *must never* be whitespace after the semicolon in single-line rules.

The following patterns are considered warnings:

```css
a { color: pink; top: 0; }
```

The following patterns are *not* considered warnings:

```css
a { color: pink;top: 0; }
```

```css
a { 
  color: pink;
  top: 0;
}
```
