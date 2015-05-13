# declaration-block-trailing-semicolon

Require or disallow a trailing semicolon with a declaration block.

## Options

* `string`: `"always"|"never"`

### `"always"`

There *must always* be a trailing semicolon.

The following patterns are considered warnings:

```css
a { color: pink }
```

```css
a { background: orange; color: pink }
```

The following patterns are *not* considered warnings:

```css
a { color: pink; }
```

```css
a { background: orange; color: pink; }
```

### `"never"`

There *must never* be a trailing semicolon.

The following patterns are considered warnings:

```css
a { color: pink; }
```

```css
a { background: orange; color: pink; }
```

The following patterns are *not* considered warnings:

```css
a { color: pink }
```

```css
a { background: orange; color: pink }
```
