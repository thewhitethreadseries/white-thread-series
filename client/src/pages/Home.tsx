/* Nocturne Archive, revised to use the author’s own wording and requested labels only. Image and link destinations stay centralized and editable. */
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronRight, ExternalLink, Instagram, Music2 } from "lucide-react";

const LINKS = {
  arc: "https://forms.gle/wbXdDMtinqxcgEbb9",
  amazonEbook: "#amazon-ebook",
  amazonPaperback: "#amazon-paperback",
  signedPaperback: "#signed-paperback",
  tiktok: "https://www.tiktok.com/@...pahadina",
  instagram: "#instagram",
  bookCover: "#book-cover-image",
  xalArt: "#xal-character-art",
  kianArt: "#kian-character-art",
  authorPhoto: "/manus-storage/pahadina-author-upper-half_4d1e01b6.png",
};

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`evidence-window ${className}`} aria-label={`${label} placeholder`}><div className="evidence-crosshair" /><span className="evidence-label">{label}</span><span className="evidence-note">Image slot — replace later</span></div>;
}

function Countdown() {
  const launchTime = new Date("2026-11-13T06:30:00+05:30").getTime();
  const [remaining, setRemaining] = useState(() => Math.max(0, launchTime - Date.now()));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(Math.max(0, launchTime - Date.now())), 1000);
    return () => window.clearInterval(timer);
  }, [launchTime]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const units = [[days, "Days"], [hours, "Hours"], [minutes, "Minutes"], [seconds, "Seconds"]] as const;

  return <div className="countdown" aria-live="polite" aria-label={remaining > 0 ? `Launch countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds` : "The book has launched"}>
    <p className="countdown-label">Until launch</p>
    {remaining > 0 ? <div className="countdown-units">{units.map(([value, label]) => <div className="countdown-unit" key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>)}</div> : <p className="countdown-live">Now available</p>}
  </div>;
}

function ActionLink({ href, children, filled = false }: { href: string; children: React.ReactNode; filled?: boolean }) {
  const isPlaceholder = href.startsWith("#");
  return <a className={`action-link ${filled ? "action-link-filled" : ""}`} href={href} onClick={(event) => isPlaceholder && event.preventDefault()}><span>{children}</span>{isPlaceholder ? <ChevronRight size={16} strokeWidth={1.5} /> : <ExternalLink size={15} strokeWidth={1.5} />}</a>;
}

export default function Home() {
  return <main className="site-shell">
    <nav className="topbar container" aria-label="Primary navigation">
      <a className="brand-lockup" href="#top" aria-label="The White Thread Series home"><span className="brand-wordmark">The White Thread <em>Series</em></span></a>
      <div className="nav-links"><a href="#the-book">The book</a><a href="#characters">Characters</a><a href="#author">Author</a><a className="nav-arc" href={LINKS.arc} target="_blank" rel="noreferrer">ARC sign-up <ArrowUpRight size={14} /></a></div>
    </nav>

    <section id="top" className="hero-section">
      <div className="hero-atmosphere" /><div className="thread-orbit thread-orbit-one" /><div className="thread-orbit thread-orbit-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal reveal-one"><p className="eyebrow">Urban fantasy · dark psychology · supernatural mystery</p><h1>The White<br /><i>Thread</i> Series</h1><p className="hero-line">Launching<br /><strong>November 13th 2026</strong><small>6.30AM IST · 1 AM GST</small></p></div>
        <div className="hero-side reveal reveal-two"><p className="hero-blurb">Those who could see the Spirit Dimension could see the Threads between people.<br /><br />Those who carried Eshkai blood could wield the abilities of the keepers of balance.</p><a className="scroll-cue" href="#the-book"><span>Read the story</span><ArrowDownRight size={17} /></a></div>
      </div>
      <div className="hero-bottom container"><span>Mekhsul - A City with another side</span><span>13.11.26</span></div>
    </section>

    <section id="the-book" className="book-section section-pad"><div className="container">
      <div className="section-kicker"><span>Book 1</span><span>Till the Day We Can (A Death. A Thread. A Pledge)</span></div>
      <div className="book-intro-grid">
        <div className="book-cover-column reveal reveal-one"><Placeholder label="FRONT COVER" className="book-cover-placeholder" /><div className="cover-caption"><span>Front cover image</span><span>Book 1</span></div></div>
        <div className="book-copy reveal reveal-two"><p className="eyebrow mint">The White Thread Series - Book 1</p><h2>Till the Day We Can<br /><i>(A Death. A Thread. A Pledge)</i></h2><Countdown /><div className="release-line"><span>Launching</span><strong>November 13th 2026</strong></div><p className="seo-sentence">An Urban Fantasy where a former bodyguard learns that the entity responsible for his sister’s death is still out there, spreading a deadly spirit illness, and ends up becoming the reluctant protector of a self-proclaimed last healer, the only person who can help him to hunt it.</p><div className="book-actions"><ActionLink href={LINKS.arc} filled>Join the ARC reader list</ActionLink><ActionLink href={LINKS.amazonEbook}>Pre order/ Purchase ebook · Amazon</ActionLink><ActionLink href={LINKS.amazonPaperback}>Pre Order/ Purchase paperback · Amazon</ActionLink><ActionLink href={LINKS.signedPaperback}>Pre-order paperback with signature</ActionLink></div><p className="placeholder-hint">Purchase links will be attached here when live.</p></div>
      </div>
    </div></section>

    <section className="blurb-section section-pad"><div className="container blurb-grid"><div className="blurb-aside"><span className="vertical-label">Mekhsul</span></div><div className="blurb-copy"><p className="eyebrow violet">Mekhsul - A city where access to the spirit dimension is fading.</p><h2>Some illnesses<br /><i>are not of the body.</i></h2><div className="blurb-text"><p className="blurb-opening"><p>Those who could see the Spirit Dimension could see the 'Threads' between people.<br /><br />Those who carried Eshkai blood could wield the abilities to be the keepers of balance.</p><br /><br /><p>Xal Renharth was neither until he met Kian Vaeloren, who felt like a fraction of nostalgia and a bane in full.</p><p>Kian was the last healer, a magnet for angry ghosts and grieving families, a perfect enigma who ensured what was dead stayed dead. Xal, meanwhile, was a mundane bodyguard with no patience, a stranger to the supernatural and its rules, an unyielding protector who prioritized his family’s safety at any cost.</p><p>When a rare incident occurred, Xal agreed to partner up with Kian to help spirits and the living, only under the condition to hunt down the entity that had been spreading a deadly spirit-illness through Mekhsul City for over a decade, undetected by even the strongest lenses. He insisted on killing it to stop the rising deaths, as revenge plagued his mind, while Kian refused to let another death to fall under his name, guilt threatening his sanity.</p><p>Can they stop the entity before more lives are lost, or will they break under the weight of unraveling secrets darker than death itself?</p></div></div></div></section>

    <section className="meta-section"><div className="container meta-layout"><div><p className="eyebrow mint">The White Thread Series</p><h3>Urban fantasy<br /><i>with feeling.</i></h3></div><div className="tag-list"><span>Urban Fantasy</span><span>Dark Psychology</span><span>Supernatural Mystery</span><span>Spirit Dimension Thriller</span><span>Soul Friend Bond</span><span>Extinct Clan Lore</span><span>Bromance Book</span></div></div></section>

    <section id="characters" className="characters-section section-pad"><div className="container"><div className="section-kicker"><span>Character art</span><span>Xal Renharth · Kian Vaeloren</span></div><div className="characters-heading"><p className="eyebrow">Character art reveal</p><h2>Two strangers<br /><i>bound by a Thread.</i></h2><p>Their character art will be added here.</p></div><div className="character-grid"><a className="character-card character-xal" href={LINKS.xalArt} onClick={(e) => e.preventDefault()}><Placeholder label="XAL RENHARTH · 25" className="character-placeholder" /><div className="character-caption"><span>THE BODYGUARD</span><strong>Impatient, Sentinel, Bold</strong></div></a><a className="character-card character-kian" href={LINKS.kianArt} onClick={(e) => e.preventDefault()}><Placeholder label="Kian Vaeloren · 22" className="character-placeholder" /><div className="character-caption"><span>THE HEALER</span><strong>Enigmatic, Kind, Empathic</strong></div></a></div></div></section>

    <section className="follow-section section-pad"><div className="container follow-grid"><div><p className="eyebrow mint">Author journey</p><h2>Follow the<br /><i>journey.</i></h2></div><div className="follow-copy"><p>Follow my not-so-famous author journey as The White Thread Series comes to life.</p><ActionLink href={LINKS.tiktok} filled><Music2 size={16} /> Follow on TikTok</ActionLink></div></div></section>

    <section id="author" className="author-section section-pad"><div className="container author-grid"><img src={LINKS.authorPhoto} alt="Pahadina by the sea" className="author-placeholder author-photo" /><div className="author-copy"><p className="eyebrow violet">Pahadina · Author bio and journey</p><h2>Writing for<br /><i>the humane.</i></h2><p>I’m an Asian, Sri Lankan author, and this is my debut novel. I’m writing for people who choose kindness every day, even after being hurt; for those who treasure their friends and family, and for those who have a Soul Friend beside them.</p><p>This book is my appreciation for the friends who love me as my awkward, loser self, support the things I love, and understand me, and for the family who has always trusted me. Influenced by the cultures I come from and written for people around the world without boundaries or labels, it is a story about feeling again, caring without limits, and remembering that the world becomes beautiful when its people choose kindness over jealousy, hatred, and greed.</p><a className="text-link" href={LINKS.instagram} onClick={(e) => e.preventDefault()}><Instagram size={16} /> More author notes <ArrowUpRight size={14} /></a></div></div></section>

    <footer className="footer"><div className="container footer-grid"><a className="brand-lockup" href="#top"><span className="brand-wordmark">The White Thread <em>Series</em></span></a><p>One city. Two strangers. A Thread between worlds.</p><span className="footer-date">© 2026 · Book 1 launches 13.11.26</span></div></footer>
  </main>;
}
