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


