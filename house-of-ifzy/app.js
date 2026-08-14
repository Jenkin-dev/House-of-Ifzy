/* ============================================================
   HOUSE OF IFZY

   Everything you edit lives in the two blocks below: SHOP and
   PRODUCTS. Nothing further down needs touching.
   ============================================================ */

const SHOP = {
  name: "House of Ifzy",
  tagline: "Dare to shine flawlessly",
  city: "Lagos",
  currency: "\u20A6",

  // country code first, no plus sign, no spaces
  whatsapp: "2349023767611",
  phone: "+234 902 376 7611",
  email: "olusiblessing96@gmail.com",

  instagram: "house_of_ifzy",

  // TODO: paste the real Facebook page link here. This one is a guess
  // from the page name, so open it once and check it lands correctly.
  facebook: "https://www.facebook.com/houseofifzy",
  facebookName: "House of Ifzy",

  // the lines that scroll across the dark strip. Keep them true.
  notices: [
    "Delivery within Lagos in 5 days or less",
    "Nationwide shipping",
    "See your item before it ships",
    "Payment by bank transfer",
  ],
};

/* Categories are the materials she actually sells. The colour of each
   one shows on its product cards and filter underline. */
const CATEGORIES = [
  { key: "jewellery", label: "Jewellery" },
  { key: "watches", label: "Watches" },
  { key: "eyewear", label: "Eyewear" },
  { key: "hair", label: "Hair" },
  { key: "footwear", label: "Footwear" },
];

/* ------------------------------------------------------------
   PRODUCTS

   images: put your photo files in the images folder next to this
   one, then list them here. The first photo is the one shown on
   the card. The rest appear when someone taps it.

   Use lowercase filenames with hyphens and no spaces.

   price: a number like 15000, or null to show "Message for price".
   ------------------------------------------------------------ */
const PRODUCTS = [
  {
    name: "Chrome Eyeglass Set",
    category: "eyewear",
    price: null,
    note: "Unisex frames, boxed",
    description:
      "A chrome frame set that suits most face shapes, finished with a clean metal bridge. Comes boxed and ready to gift.",
    images: [
      "images/chrome-eyeglass-set-1.jpeg",
      "images/chrome-eyeglass-set-2.jpeg",
      "images/chrome-eyeglass-set-3.jpeg",
      "images/chrome-eyeglass-set-4.jpeg",
      "images/chrome-eyeglass-set-5.jpeg",
      "images/chrome-eyeglass-set-6.jpeg",
      "images/chrome-eyeglass-set-7.jpeg",
    ],
    inStock: true,
  },
  {
    name: "Scottie Watch for Her",
    category: "watches",
    price: null,
    note: "Boxed, ready to gift",
    description:
      "A slim dress watch made for everyday wear, presented in its own box.",
    images: [
      "images/scottie-watch-1.jpeg",
      "images/scottie-watch-2.jpeg",
      "images/scottie-watch-3.jpeg",
      "images/scottie-watch-4.jpeg",
      "images/scottie-watch-5.jpeg",
      "images/scottie-watch-6.jpeg",
      "images/scottie-watch-7.jpeg",
    ],
    inStock: true,
  },
  {
    name: "Stainless Steel Bracelet",
    category: "jewellery",
    price: null,
    note: "Unisex, does not tarnish",
    description:
      "Solid stainless steel that keeps its shine and holds up to daily wear.",
    images: [
      "images/steel-bracelet-1.jpeg",
      "images/steel-bracelet-2.jpeg",
      "images/steel-bracelet-3.jpeg",
      "images/steel-bracelet-4.jpeg",
      "images/steel-bracelet-5.jpeg",
    ],
    inStock: true,
  },
  {
    name: "Leather and Steel Bracelet",
    category: "jewellery",
    price: null,
    note: "Leather band with a steel clasp",
    description:
      "Soft leather paired with a brushed steel clasp. Understated enough for work, warm enough for evenings.",
    images: [
      "images/leather-steel-bracelet-1.jpeg",
      "images/leather-steel-bracelet-2.jpeg",
      "images/leather-steel-bracelet-3.jpeg",
    ],
    inStock: true,
  },
  {
    name: "Necklace without Pendant",
    category: "jewellery",
    price: null,
    note: "Elegance in Every Petal",
    description:
      "Make an unforgettable entrance with this breathtaking necklace and matching drop earrings designed to perfectly complement your dress and add an instant touch of high-utility sparkle.",
    images: ["images/standalone necklace.jpeg"],
    inStock: true,
  },
  {
    name: "3 Ball Stainless Steel Necklace and Earrings Set",
    category: "jewellery",
    price: null,
    note: "Effortless Triple-Layer Elegance",
    description:
      "Make a clean statement with a tarnish-resistant, layered stainless steel chain that effortlessly shifts from casual daywear to high-fashion evening glam.",
    images: ["images/Stainless-Steel-Necklace.jpeg"],
    inStock: true,
  },
  {
    name: "Swiss Lace",
    category: "hair",
    price: null,
    note: "Flawless Melt, Effortless Glam",
    description:
      "Achieve the ultimate seamless look with this premium, bone-straight HD lace front wig, expertly crafted with a pre-plucked hairline and rich chocolate-brown strands that mimic natural hair movement perfectly.",
    images: ["images/Swiss-Lace.jpeg"],
    inStock: true,
  },
  {
    name: "Wig",
    category: "hair",
    price: null,
    note: "Flawless Realism, Effortless Style",
    description:
      "Turn heads with a show-stopping wig engineered for exceptional fullness, rich dimension, and versatile heat styling to match your every mood.",
    images: ["images/Cajun.jpeg"],
    inStock: true,
  },
  {
    name: "Vietnam Bone Straight Wig",
    category: "hair",
    price: null,
    note: "Flawless Realism, Effortless Style",
    description:
      "Turn heads instantly with the razor-sharp alignment of our Vietnamese bone straight hair, featuring ultra-dense cuticles that retain a flawless, silky texture without requiring constant heat styling.",
    images: ["images/Vietnam-Bone.jpeg"],
    inStock: true,
  },
  {
    name: "Louis Vuitton Shoes",
    category: "footwear",
    price: null,
    note: "Size: 40-46",
    description: null,
    images: ["images/LV-shoes.jpeg"],
    inStock: true,
  },
];

/* ============================================================
   Below this line is the machinery. You should not need to
   change any of it.
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[ch],
  );

const digits = (value) => String(value ?? "").replace(/[^0-9]/g, "");

const priceText = (price) =>
  price === null || price === undefined || price === ""
    ? "Message for price"
    : SHOP.currency + Number(price).toLocaleString("en-NG");

const labelFor = (key) =>
  (CATEGORIES.find((c) => c.key === key) || { label: key }).label;

const waLink = (message) =>
  "https://wa.me/" +
  digits(SHOP.whatsapp) +
  "?text=" +
  encodeURIComponent(message);

const orderLink = (product) =>
  waLink(
    "Hello " +
      SHOP.name +
      ", I would like to order the " +
      product.name +
      (product.price ? " (" + priceText(product.price) + ")" : "") +
      ". Is it available?",
  );

/* give every product a stable id so the viewer can find it again */
PRODUCTS.forEach((product, index) => {
  product.id = "p" + index;
  if (!Array.isArray(product.images)) product.images = [];
});

/* -------------------------------------------------- shop details */

function applyShopDetails() {
  const set = (sel, value) =>
    $$(sel).forEach((el) => {
      el.textContent = value;
    });

  set("[data-phone]", SHOP.phone);
  set("[data-mail]", SHOP.email);
  set("[data-ig]", "@" + SHOP.instagram);
  set("[data-fb]", SHOP.facebookName);

  const destinations = {
    wa: "https://wa.me/" + digits(SHOP.whatsapp),
    ig: "https://instagram.com/" + SHOP.instagram,
    fb: SHOP.facebook,
    mail: "mailto:" + SHOP.email,
    tel: "tel:+" + digits(SHOP.whatsapp),
  };

  $$("[data-reach]").forEach((el) => {
    const href = destinations[el.dataset.reach];
    if (!href) {
      el.remove();
      return;
    }
    el.href = href;
    if (["wa", "ig", "fb"].includes(el.dataset.reach)) {
      el.target = "_blank";
      el.rel = "noopener";
    }
  });

  $$("[data-wa]").forEach((el) => {
    el.href = waLink(el.dataset.wa);
    el.target = "_blank";
    el.rel = "noopener";
  });

  $("#year").textContent = new Date().getFullYear();

  // the strip is doubled so the loop has no visible seam
  const notices = SHOP.notices.length ? SHOP.notices : ["Order on WhatsApp"];
  $("#strip").innerHTML = [...notices, ...notices]
    .map((line) => "<span>" + esc(line) + "</span>")
    .join("");

  $("#f-cat").innerHTML =
    CATEGORIES.map(
      (c) =>
        '<option value="' + esc(c.label) + '">' + esc(c.label) + "</option>",
    ).join("") + '<option value="Something else">Something else</option>';
}

/* ------------------------------------------------------ the rack */

const rack = $("#rack");
const filters = $("#filters");
const tally = $("#tally");

let activeCategory = "all";

function buildFilters() {
  const all = [{ key: "all", label: "Everything" }, ...CATEGORIES];
  filters.innerHTML = all
    .map((c, i) => {
      const attr = c.key === "all" ? "" : ' data-cat="' + esc(c.key) + '"';
      return (
        '<button type="button" class="chip" data-filter="' +
        esc(c.key) +
        '"' +
        attr +
        ' aria-pressed="' +
        (i === 0) +
        '">' +
        esc(c.label) +
        "</button>"
      );
    })
    .join("");
}

/* The branded tile always sits underneath the photo. If a filename is wrong
   or the photo has not been added yet, the tile shows through instead of a
   broken image icon. */
const blankTile = (product) =>
  '<span class="piece-blank"><span>' +
  esc(product.name.charAt(0)) +
  "</span></span>";

/* Hide any photo that fails to load, revealing whatever sits behind it. */
function guardPhotos(root) {
  $$("img", root).forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        img.style.display = "none";
      },
      { once: true },
    );
  });
}

function cardFor(product) {
  const cover = product.images[0];

  const media =
    blankTile(product) +
    (cover
      ? '<img src="' +
        esc(cover) +
        '" alt="' +
        esc(product.name) +
        '" loading="lazy">'
      : "");

  const count =
    product.images.length > 1
      ? '<span class="piece-count">' + product.images.length + " photos</span>"
      : "";

  const gone =
    product.inStock === false ? '<span class="piece-gone">Sold out</span>' : "";

  const price = product.price
    ? '<p class="piece-price">' + esc(priceText(product.price)) + "</p>"
    : '<p class="piece-price ask">Message for price</p>';

  // The card is an article with a transparent button laid over it, rather
  // than a button wrapping a heading, which is invalid HTML and confuses
  // screen readers. The whole card stays clickable and keyboard reachable.
  const card = document.createElement("article");
  card.className = "piece";
  card.dataset.cat = product.category;
  card.dataset.id = product.id;
  card.innerHTML =
    '<div class="piece-shot">' +
    media +
    count +
    gone +
    "</div>" +
    '<div class="piece-body">' +
    '<p class="piece-cat">' +
    esc(labelFor(product.category)) +
    "</p>" +
    '<h3 class="piece-name">' +
    esc(product.name) +
    "</h3>" +
    '<p class="piece-note">' +
    esc(product.note) +
    "</p>" +
    price +
    "</div>" +
    '<button type="button" class="piece-open" aria-label="View ' +
    esc(product.name) +
    '"></button>';

  guardPhotos(card);
  return card;
}

function drawRack() {
  const shown =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  rack.innerHTML = "";

  if (!shown.length) {
    rack.innerHTML =
      '<p class="blank-state">Nothing in this category yet. Message us and we will source it for you.</p>';
  } else {
    shown.forEach((product) => rack.appendChild(cardFor(product)));
  }

  $$(".chip", filters).forEach((chip) =>
    chip.setAttribute(
      "aria-pressed",
      String(chip.dataset.filter === activeCategory),
    ),
  );

  tally.textContent =
    shown.length + (shown.length === 1 ? " piece" : " pieces");
}

filters.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  activeCategory = chip.dataset.filter;
  drawRack();
});

rack.addEventListener("click", (event) => {
  const card = event.target.closest(".piece");
  if (!card) return;
  const product = PRODUCTS.find((p) => p.id === card.dataset.id);
  if (product) openViewer(product);
});

/* --------------------------------------------------- the viewer */

const viewer = $("#viewer");
let viewing = null;
let frame = 0;

function openViewer(product) {
  viewing = product;
  frame = 0;
  viewer.dataset.cat = product.category;
  paintViewer();
  viewer.showModal();
}

function paintViewer() {
  const product = viewing;
  const shots = product.images;
  const many = shots.length > 1;

  const stage =
    blankTile(product) +
    (shots.length
      ? '<img id="stage-img" src="' +
        esc(shots[frame]) +
        '" alt="' +
        esc(product.name) +
        ", photo " +
        (frame + 1) +
        " of " +
        shots.length +
        '">'
      : "");

  const arrows = many
    ? '<button type="button" class="viewer-arrow prev" data-step="-1" aria-label="Previous photo">&#8249;</button>' +
      '<button type="button" class="viewer-arrow next" data-step="1" aria-label="Next photo">&#8250;</button>'
    : "";

  const thumbs = many
    ? '<div class="viewer-thumbs">' +
      shots
        .map(
          (src, i) =>
            '<button type="button" data-frame="' +
            i +
            '" aria-current="' +
            (i === frame) +
            '" aria-label="Photo ' +
            (i + 1) +
            '"><img src="' +
            esc(src) +
            '" alt=""></button>',
        )
        .join("") +
      "</div>"
    : "";

  const action =
    product.inStock === false
      ? '<button type="button" class="btn btn-fill" disabled>Sold out</button>'
      : '<a class="btn btn-fill" target="_blank" rel="noopener" href="' +
        esc(orderLink(product)) +
        '">Order on WhatsApp</a>';

  viewer.innerHTML =
    '<button type="button" class="viewer-close" data-close aria-label="Close">&times;</button>' +
    '<div class="viewer-in">' +
    '<div class="viewer-media">' +
    '<div class="viewer-stage">' +
    stage +
    arrows +
    "</div>" +
    thumbs +
    "</div>" +
    '<div class="viewer-body">' +
    '<p class="viewer-cat">' +
    esc(labelFor(product.category)) +
    "</p>" +
    "<h2>" +
    esc(product.name) +
    "</h2>" +
    '<p class="viewer-price' +
    (product.price ? "" : " ask") +
    '">' +
    esc(priceText(product.price)) +
    "</p>" +
    '<p class="viewer-desc">' +
    esc(product.description || product.note || "") +
    "</p>" +
    '<div class="viewer-acts">' +
    action +
    '<button type="button" class="btn btn-line" data-close>Keep looking</button>' +
    "</div>" +
    "</div>" +
    "</div>";

  guardPhotos(viewer);
}

/* Swap the photo in place rather than rebuilding the panel, so the arrow
   you just pressed keeps keyboard focus. */
function showFrame(next) {
  if (!viewing || viewing.images.length < 2) return;

  const total = viewing.images.length;
  frame = (next + total) % total;

  const stage = $("#stage-img", viewer);
  if (stage) {
    stage.style.display = "";
    stage.src = viewing.images[frame];
    stage.alt = viewing.name + ", photo " + (frame + 1) + " of " + total;
    stage.addEventListener(
      "error",
      () => {
        stage.style.display = "none";
      },
      { once: true },
    );
  }

  $$("[data-frame]", viewer).forEach((thumb) =>
    thumb.setAttribute(
      "aria-current",
      String(Number(thumb.dataset.frame) === frame),
    ),
  );
}

const stepFrame = (delta) => showFrame(frame + delta);

viewer.addEventListener("click", (event) => {
  if (event.target === viewer || event.target.closest("[data-close]")) {
    viewer.close();
    return;
  }

  const arrow = event.target.closest("[data-step]");
  if (arrow) {
    stepFrame(Number(arrow.dataset.step));
    return;
  }

  const thumb = event.target.closest("[data-frame]");
  if (thumb) showFrame(Number(thumb.dataset.frame));
});

viewer.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    stepFrame(1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    stepFrame(-1);
  }
});

/* swipe between photos on a phone */
let touchX = null;
viewer.addEventListener(
  "touchstart",
  (e) => {
    touchX = e.changedTouches[0].clientX;
  },
  { passive: true },
);
viewer.addEventListener(
  "touchend",
  (e) => {
    if (touchX === null) return;
    const shift = e.changedTouches[0].clientX - touchX;
    if (Math.abs(shift) > 48) stepFrame(shift < 0 ? 1 : -1);
    touchX = null;
  },
  { passive: true },
);

viewer.addEventListener("close", () => {
  viewing = null;
});

/* ---------------------------------------------------- the form */

$("#enquiry").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = $("#f-name").value.trim();
  const want = $("#f-cat").value;
  const note = $("#f-msg").value.trim();
  const error = $("#f-error");

  if (!name || !note) {
    error.textContent =
      "Add your name and a short message so we know how to help.";
    error.hidden = false;
    (name ? $("#f-msg") : $("#f-name")).focus();
    return;
  }

  error.hidden = true;
  window.open(
    waLink(
      "Hello " +
        SHOP.name +
        ", my name is " +
        name +
        "." +
        "\nI am looking at: " +
        want +
        "\n\n" +
        note,
    ),
    "_blank",
    "noopener",
  );
});

/* ----------------------------------------------------------- go */

applyShopDetails();
buildFilters();
drawRack();
