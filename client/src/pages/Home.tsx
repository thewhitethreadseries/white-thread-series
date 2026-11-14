/* Nocturne Archive, revised to use the author’s own wording and requested labels only. Image and link destinations stay centralized and editable. */
import { ArrowDownRight, ArrowUpRight, ChevronRight, ExternalLink, Instagram, Music2 } from "lucide-react";

const LINKS = {
  preOrder: "https://forms.gle/MiXsLkfcWqpneYrq5",
  amazonEbook: "https://www.amazon.com/dp/B0HRL6DSDW",
  amazonPaperback: "#amazon-paperback",
  tiktok: "https://www.tiktok.com/@...pahadina",
  instagram: "#instagram",
  bookCover: "#book-cover-image",
  xalArt: "#xal-character-art",
  kianArt: "#kian-character-art",
  authorPhoto: "/pahadina-author.jpg",
};

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`evidence-window ${className}`} aria-label={`${label} placeholder`}><div className="evidence-crosshair" /><span className="evidence-label">{label}</span><span className="evidence-note">Image slot — replace later</span></div>;
}

function ActionLink({ href, children, filled = false }: { href: string; children: React.ReactNode; filled?: boolean }) {
  const isPlaceholder = href.startsWith("#");
  return <a className={`action-link ${filled ? "action-link-filled" : ""}`} href={href} onClick={(event) => isPlaceholder && event.preventDefault()}><span>{children}</span>{isPlaceholder ? <ChevronRight size={16} strokeWidth={1.5} /> : <ExternalLink size={15} strokeWidth={1.5} />}</a>;
}

export default function Home() {
  return <main className="site-shell">
    <nav className="topbar container" aria-label="Primary navigation">
      <a className="brand-lockup" href="#top" aria-label="The White Thread Series home"><span className="brand-wordmark">The White Thread <em>Series</em></span></a>
      <div className="nav-links">   <a href="#the-book">The book</a>   <a href="#characters">Characters</a>   <a href="#author">Author</a>   <a className="nav-ebook" href={LINKS.amazonEbook} target="_blank" rel="noreferrer">     Purchase eBook <ArrowUpRight size={14} />   </a>   <a className="nav-arc" href={LINKS.preOrder} target="_blank" rel="noreferrer">     Pre-Order Sign-Up <ArrowUpRight size={14} />   </a> </div>
    </nav>

    <section id="top" className="hero-section">
      <div className="hero-atmosphere" /><div className="thread-orbit thread-orbit-one" /><div className="thread-orbit thread-orbit-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal reveal-one"><p className="eyebrow">Urban fantasy · dark psychology · supernatural mystery</p><h2>The White<br /><i>Thread</i> Series</h2></div>
        <div className="hero-side reveal reveal-two"><p className="hero-blurb">Those who could see the Spirit Dimension could see the Threads between people.<br /><br />Those who carried Eshkai blood could wield the abilities of the keepers of balance.</p><a className="scroll-cue" href="#the-book"><span>Read the story</span><ArrowDownRight size={17} /></a></div>
      </div>
      <div className="hero-bottom container"><span>Mekhsul - A City with another side</span></div>
    </section>

    <section id="the-book" className="book-section section-pad"><div className="container">
      <div className="section-kicker"><span>Book 1</span><span>Till the Day We Can (A Death. A Thread. A Pledge)</span></div>
      <div className="book-intro-grid">
        <div className="book-cover-column reveal reveal-one">
  <img
  src="/front-cover.png"
  alt="Front cover of Till the Day We Can"
  className="book-cover-placeholder book-cover-image"
/>
 <div className="cover-caption"><span>Front cover image</span><span>Book 1</span></div></div>
        <div className="book-copy reveal reveal-two"><p className="eyebrow mint">The White Thread Series - Book 1</p><h3>Till the Day We Can<br /><i>(A Death. A Thread. A Pledge)</i></h3><p className="seo-sentence">An Urban Fantasy where a mundane bodyguard, whose job is to make sure no one ends up dead on his watch gets hired by a healer whose job is to make sure what's dead stays dead. But there's an entity out there spreading the deadly spirit illness, making both of their jobs nearly impossible to fulfil.</p><div className="book-actions"><ActionLink href={LINKS.preOrder} filled>Pre-Order PR Box or Paperbacks</ActionLink><ActionLink href={LINKS.amazonEbook}>Purchase eBook</ActionLink><ActionLink href={LINKS.amazonPaperback}>Purchase paperback · Amazon</ActionLink></div></div>
      </div>
    </div></section>

    <section className="blurb-section section-pad"><div className="container blurb-grid"><div className="blurb-aside"><span className="vertical-label">Mekhsul</span></div><div className="blurb-copy"><p className="eyebrow violet">Mekhsul - A city where access to the spirit dimension is fading.</p><h3>Some things<br /><i>are not as they seem.</i></h3><div className="blurb-text"><p className="blurb-opening">Those who could see the Spirit Dimension could see the 'Threads' between people.<br /><br />Those who carried Eshkai blood could wield the abilities to be the keepers of balance.</p><p>Xal Renharth was neither until he met Kian Vaeloren, who felt like a fraction of nostalgia and a bane in full.</p><p>Kian was the last healer, a magnet for angry ghosts and grieving families, a perfect enigma who ensured what was dead stayed dead. Xal, meanwhile, was a mundane bodyguard with no patience, a stranger to the supernatural and its rules, an unyielding protector who prioritized his family’s safety at any cost.</p><p>When a rare incident occurred, Xal agreed to partner up with Kian to help spirits and the living, only under the condition to hunt down the entity that had been spreading a deadly spirit-illness through Mekhsul City for over a decade, undetected by even the strongest lenses. He insisted on killing it to stop the rising deaths, as revenge plagued his mind, while Kian refused to let another death to fall under his name, guilt threatening his sanity.</p><p>Can they stop the entity before more lives are lost, or will they break under the weight of unraveling secrets darker than death itself?</p></div></div></div></section>

    <section className="meta-section"><div className="container meta-layout"><div><p className="eyebrow mint">The White Thread Series</p><h4>Urban fantasy<br /><i>with Dark Psychology and Supernatural Mystery.</i></h4></div><div className="tag-list"><span>Urban Fantasy</span><span>Dark Psychology</span><span>Supernatural Mystery</span><span>Spirit Dimension Thriller</span><span>Slow-burn Brotherhood</span><span>Found Family Trope</span><span>Unique World Building</span><span>Threads symbolizing strongest Bonds</span><span>False History with Extinct Clan Lore</span><span>Bromance Book</span></div></div></section>

    <section id="characters" className="characters-section section-pad"><div className="container"><div className="section-kicker"><span>Character art</span><span>Xal Renharth · Kian Vaeloren</span></div><div className="characters-heading"><p className="eyebrow">Character art reveal</p><h3>Two strangers<br /><i>bound by a Thread.</i></h3></div><div className="character-grid"><a className="character-card character-xal" href={LINKS.xalArt} onClick={(e) => e.preventDefault()}><Placeholder label="XAL RENHARTH · 25" className="character-placeholder" /><div className="character-caption"><span>THE BODYGUARD</span><strong>Impatient, Sentinel, Bold</strong></div></a><a className="character-card character-kian" href={LINKS.kianArt} onClick={(e) => e.preventDefault()}><Placeholder label="Kian Vaeloren · 22" className="character-placeholder" /><div className="character-caption"><span>THE HEALER</span><strong>Enigmatic, Kind, Empathic</strong></div></a></div></div></section>

    <section className="follow-section section-pad"><div className="container follow-grid"><div><p className="eyebrow mint">Author journey</p><h2>Follow the<br /><i>journey.</i></h2></div><div className="follow-copy"><p>Witness my not-so-famous author journey as The White Thread Series comes to life.</p><ActionLink href={LINKS.tiktok} filled><Music2 size={16} /> Follow on TikTok</ActionLink></div></div></section>

    <section id="author" className="author-section section-pad"><div className="container author-grid"><img src={LINKS.authorPhoto} alt="Pahadina by the sea" className="author-placeholder author-photo" /><div className="author-copy"><p className="eyebrow violet">Pahadina · Author bio and journey</p><h3>Writing for<br /><i>the humane.</i></h3><p>I’m a Sri Lankan author, and this is my debut novel. I’m writing for those who choose kindness every day, even after being hurt; for those who treasure their friends and family, and for those who make sacrifices to protect the bonds they have with their loved ones.</p><p>This book is my appreciation for my Soul Friends who love me as my awkward, loser self, support the things I love, and understand me, and for my loving family who has always trusted me. Influenced by the culture I come from, written for people around the world without boundaries, The White Thread Series is a story about learning to feel again despite the pain, caring without limits, and remembering that the world becomes beautiful when its people choose kindness over jealousy, hatred, and greed.</p><a className="text-link" href={LINKS.instagram} onClick={(e) => e.preventDefault()}><Instagram size={16} /> More author notes <ArrowUpRight size={14} /></a></div></div></section>

    <footer className="footer"><div className="container footer-grid"><a className="brand-lockup" href="#top"><span className="brand-wordmark">The White Thread <em>Series</em></span></a><p>One city. Two strangers. A Thread between worlds.</p><span className="footer-date">© 2026 · The White Thread Series</span></div></footer>
  </main>;
}
