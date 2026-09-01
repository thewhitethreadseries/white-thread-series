# The White Thread Series — Design Direction

## Three possible directions

### Theme Name: Nocturne Archive
Very dark editorial mystique with a literary, archival feel: ink, vellum, thin rules, and restrained supernatural color. Designed to make the series feel collectible and intelligent.

**Probability:** 0.06

### Theme Name: Neon Veil
A sharper urban-fantasy direction built from black asphalt, electric mint, and ultraviolet signals. It treats the spirit dimension like a hidden layer of the city.

**Probability:** 0.03

### Theme Name: Moonlit Concrete
A cinematic, monochrome city language with luminous thread-lines and occasional color-coded character accents. It feels contemporary, quiet, and emotionally tense rather than overtly gothic.

**Probability:** 0.08

## Chosen approach: Nocturne Archive

### Design Movement
Contemporary literary editorial design fused with dark urban fantasy: the visual language of a rare-book archive translated into a night city.

### Core Principles
1. **Black as atmosphere, not emptiness.** Use layered charcoal surfaces, grain, hairline borders, and soft shadows to create depth without clutter.
2. **Asymmetry creates intrigue.** Let the page move between offset columns, narrow annotations, and generous negative space instead of defaulting to centered blocks.
3. **Color is narrative.** Pale mint belongs to Xal and signals guarded life; muted violet belongs to Kian and signals memory, healing, and the unseen. Use both sparingly against black so they feel like supernatural evidence.
4. **Typography carries the mood.** High-contrast serif display type should feel like a book jacket; clean sans-serif utility type should feel like a case file.

### Color Philosophy
The base is ink-black and blue-charcoal, creating a nocturnal field for the story’s tension. Pale mint is a living filament: precise, rare, and protective. Muted violet is a spectral afterimage: softer, stranger, and tied to Kian’s healing presence. Neither accent should become a gradient or decoration; each appears as a narrative cue.

### Layout Paradigm
A vertical “case file” scroll. The hero opens with a left-aligned title and a right-side launch note, then the book section shifts into an offset two-column reading spread. Metadata, character notes, and the author section alternate alignment so the page feels discovered rather than templated.

### Signature Elements
- A fine, looping thread line that appears as a divider and small corner detail.
- Archive-style labels in tracked uppercase: `SERIES / BOOK 01`, `CASE FILE`, `CHARACTER REVEAL`.
- Image placeholders framed as “evidence windows,” clearly ready for future cover, character, and author images.

### Interaction Philosophy
Interactions should feel like handling a precious archive: buttons brighten and lift slightly, links reveal a thin thread-line, and placeholder actions explain their status instead of pretending unfinished destinations are live.

### Animation
Use short, restrained reveals under 300ms: text fades upward a few pixels, thread lines draw in from left to right, and cards shift only a few pixels on hover. Avoid looping spectacle. Respect reduced-motion preferences.

### Typography System
Use **Cormorant Garamond** for display titles and book-name moments, with italic emphasis for supernatural or emotional phrases. Use **DM Sans** for body copy, navigation, metadata, and buttons. Headings should be generous and tight; body text should stay around 1.7 line-height for blurb readability.

### Brand Essence
A dark, character-led portal into an urban fantasy series for readers who want supernatural mystery with emotional consequence — not disposable magic wallpaper.

**Personality:** mysterious, exacting, intimate.

### Brand Voice
Headlines are evocative but controlled. CTAs are direct, never salesy. Microcopy reads like a quiet note left in a case file.

- “Some threads are meant to be followed.”
- “Enter Mekhsul City before the dead grow louder.”

### Wordmark & Logo
Use the series title as a refined serif wordmark, paired with a separate abstract symbol: one white thread looping through an angular keeper’s sigil. Never render the symbol as a generic sparkle or default text icon.

### Signature Brand Color
**Keeper Mint — `#B8F2D0`**. It is luminous enough to feel supernatural but softened enough to remain literary and premium.

## Editable content decisions

All future image destinations are represented by clearly labeled visual placeholders. Amazon ebook, Amazon paperback, signed paperback, TikTok, and author-image links are centralized near the top of `client/src/pages/Home.tsx` so they can be replaced without hunting through layout markup. The ARC form link is live and points to the URL supplied by the author.
