# value-list-comma-newline-before

Require or disallow a newline before the commas of value lists.

```css
    a { background-size: 0
      , 0; }
/**   ↑  
 * The newline before these commas */
```

## Options

`string`: `"always"|"never"|"always-multi-line"|"never-multi-line"`

### `"always"`

There *must always* be a single newline before the comma.

The following patterns are considered warnings:

```css
a { background-size: 0,0; }
```

```css
a { background-size: 0, 
      0; }
```

The following patterns are *not* considered warnings:

```css
a { background-size: 0
      , 0; }
```

### `"never"`

There *must never* be whitespace before the comma.

The following patterns are considered warnings:

```css
a { background-size: 0, 0; }
```

```css
a { background-size: 0
      , 0; }
```

The following patterns are *not* considered warnings:

```css
a { background-size: 0,0; }
```

```css
a { background-size: 0,
      0; }
```

### `"always-multi-line"`

There *must always* be a single newline before the comma in multi-line value lists.

The following patterns are considered warnings:

```css
a { background-size: 0, 
      0; }
```

The following patterns are *not* considered warnings:

```css
a { background-size: 0, 0; }
```

```css
a { background-size: 0,0; }
```

```css
a { background-size: 0
      , 0; }
```

### `"never-multi-line"`

There *must never* be whitespace before the comma in multi-line value lists.

The following patterns are considered warnings:

```css
a { background-size: 0 
      , 0; }
```

The following patterns are *not* considered warnings:

```css
a { background-size: 0,0; }
```

```css
a { background-size: 0, 0; }
```

```css
a { background-size: 0,
      0; }
```
