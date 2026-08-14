# House of Ifzy, landing page

Four files, no build step, no server. Open `index.html` in a browser to see it.

```
index.html    structure
styles.css    all styling
app.js        shop details and the product list
logo.svg      the hallmark mark, also used as the favicon
images/       drop product photos in here
```

## Adding photos

Every product in `app.js` has an `images` list. The first photo is the one
shown on the card, the rest appear when someone taps it.

```js
images: [
  "images/steel-bracelet-1.jpg",
  "images/steel-bracelet-2.jpg"
]
```

Name files in lowercase with hyphens and no spaces. Spaces break links on
some hosts.

If a photo is missing or a filename is wrong, the card falls back to a
coloured tile with the product initial rather than a broken image icon. So
the page always looks finished, even before every photo is in.

## Prices

`price: null` shows "Message for price". To show a real price, put a plain
number with no commas or currency sign:

```js
price: 15000     // renders as N15,000
```

## Categories

Five categories, each with its own colour taken from the material:

| Category | Colour |
|---|---|
| Jewellery | gold |
| Watches | brushed steel |
| Eyewear | tortoiseshell |
| Hair | cognac |
| Footwear | dark leather |

To add one, add it to `CATEGORIES` in `app.js` and add a matching
`[data-cat="yourkey"]{--tone:#xxxxxx}` line near the top of `styles.css`.

## Still to confirm with the client

1. **The Facebook link.** `SHOP.facebook` in `app.js` is a guess based on the
   page name. Open it once and check it lands on her actual page.
2. **Product names.** "Scottie female watch boxed" and similar were her
   shorthand. The names on the page have been tidied, but she should approve
   them since customers will read them.
3. **The wig and the shoes** have placeholder descriptions. They need real
   details: length, texture, lace and cap size for the wig, and style plus
   available sizes for the shoes.
4. **Delivery wording.** The page currently reads: within Lagos, five days or
   less, other states allow up to seven days processing, delivery cost depends
   on location. Confirm that matches what she meant.
5. **Prices**, if she wants them shown at all.

## Publishing

Drag this whole folder onto https://app.netlify.com/drop and it goes live in
about ten seconds, free, on a `something.netlify.app` address. A real domain
can be pointed at it later with no rebuild.
