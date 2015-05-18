# declaration-colon-space-after

Require or disallow a space after the colon of declarations.

```css
    a { color: pink }
/**          ↑
 * The space after this colon */
```

## Options

`string`: `"always"|"never"`

### `"always"`

There *must always* be a single space after the colon.

The following patterns are considered warnings:

```css
a { color :pink }
```

```css
a { color:pink }
```

The following patterns are *not* considered warnings:

```css
a { color : pink }
```

```css
a { color: pink }
```

### `"never"`

There *must never* be whitespace after the colon.

The following patterns are considered warnings:

```css
a { color:pink }
```

```css
a { color :pink }
```

The following patterns are *not* considered warnings:

```css
a { color :pink }
```

```css
a { color:pink }
```
