// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

"use client";

import { FormEvent, useState } from "react";

const whatsapp = "https://wa.me/918708808329";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventType, setEventType] = useState("Wedding Celebration");
  const [guestSize, setGuestSize] = useState("100–250 guests");

  function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Shivani, I would like to enquire about event hosting.",
      `Name: ${data.get("name")}`,
      `Event date: ${data.get("date") || "To be decided"}`,
      `Guests: ${data.get("guests") || "Not confirmed"}`,
      `Budget: ${data.get("budget") || "To be discussed"}`,
      `Message: ${data.get("message") || "Please share availability and details."}`,
    ].join("\n");
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shivani Event Host home">
          <span className="brand-mark">S</span>
          <span><strong>SHIVANI</strong><small>EVENT HOST • EMCEE</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} onClick={() => setMenuOpen(false)}>
          <a href="#services">Services</a><a href="#portfolio">Moments</a><a href="#about">About</a><a href="#reviews">Reviews</a>
          <a className="nav-cta" href="#contact">Check availability</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-content reveal">
          <p className="eyebrow"><span /> Elegant hosting. Effortless celebrations.</p>
          <h1>Every moment deserves <em>the perfect voice.</em></h1>
          <p className="hero-copy">Warm, confident and engaging event hosting that keeps your celebration flowing beautifully—while you stay fully present in every moment.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Book a free consultation <Arrow /></a>
            <a className="text-link" href="#portfolio">Explore memorable moments <span>↓</span></a>
          </div>
          <div className="trust-row"><span className="stars">★★★★★</span><strong>4.9</strong><span>from 73 Google reviews</span></div>
        </div>
        <div className="hero-visual">
          <img src="/shivani-wedding-host.webp" alt="Shivani hosting a joyful wedding celebration" />
          <div className="hero-frame" />
          <div className="availability"><span>Now booking</span><strong>2026 celebrations</strong></div>
        </div>
      </section>

      <section className="proof strip">
        <div><strong>4.9</strong><span>Average rating</span></div>
        <div><strong>73</strong><span>Google reviews</span></div>
        <div><strong>Ambala</strong><span>Available beyond the city</span></div>
        <div><strong>हिंदी • English</strong><span>Warm bilingual hosting</span></div>
      </section>

      <section className="section services" id="services">
        <div className="section-intro"><p className="eyebrow"><span /> Curated experiences</p><h2>Hosting that feels <em>effortless,</em><br/>never ordinary.</h2></div>
        <p className="lead">From the first welcome to the final farewell, every cue, transition and interaction is shaped around your people and your story.</p>
        <div className="service-grid">
          {[
            ["01", "Weddings & Celebrations", "Sangeet, haldi, mehendi, receptions and intimate wedding moments hosted with warmth, energy and personal storytelling."],
            ["02", "Corporate Experiences", "Confident stage presence for conferences, award nights, launches and team celebrations—polished, punctual and on-brand."],
            ["03", "Milestone Gatherings", "Birthdays, anniversaries, family celebrations and private occasions kept lively, inclusive and beautifully paced."],
            ["04", "Event Flow & Coordination", "A thoughtfully prepared run-of-show, artist cues, audience engagement and seamless coordination with your event team."],
          ].map(([n,title,copy]) => <article className="service-card" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p><a href="#contact">Discuss your event <Arrow /></a></div></article>)}
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-intro light"><p className="eyebrow"><span /> The celebration edit</p><h2>Real smiles. <em>Beautiful energy.</em></h2></div>
        <div className="gallery">
          <figure className="gallery-main"><img src="/shivani-corporate-emcee.webp" alt="Shivani hosting a premium corporate event"/><figcaption><span>Corporate Evening</span><strong>Presence with purpose</strong></figcaption></figure>
          <figure><img src="/shivani-haldi-event.webp" alt="A personalised haldi ceremony hosted by Shivani"/><figcaption><span>Haldi Ceremony</span><strong>Personal, playful, unforgettable</strong></figcaption></figure>
          <figure><img src="/shivani-private-celebration.webp" alt="Shivani at a private family celebration"/><figcaption><span>Private Celebration</span><strong>Every detail, held with care</strong></figcaption></figure>
        </div>
      </section>

      <section className="planner section">
        <div><p className="eyebrow"><span /> Quick event planner</p><h2>Tell us a little.<br/><em>We’ll handle the flow.</em></h2><p>Select your event details and start a quick, no-pressure WhatsApp conversation about availability.</p></div>
        <div className="planner-card">
          <label>What are you celebrating?<select value={eventType} onChange={(e)=>setEventType(e.target.value)}><option>Wedding Celebration</option><option>Corporate Event</option><option>Birthday / Anniversary</option><option>Private Gathering</option></select></label>
          <label>Approximate guest count<select value={guestSize} onChange={(e)=>setGuestSize(e.target.value)}><option>Under 100 guests</option><option>100–250 guests</option><option>250–500 guests</option><option>500+ guests</option></select></label>
          <a className="button primary full" target="_blank" rel="noreferrer" href={`${whatsapp}?text=${encodeURIComponent(`Hello Shivani, I am planning a ${eventType} for ${guestSize}. Please share your availability.`)}`}>Get a quick call-back <Arrow /></a>
          <small>No obligation. Usually replies during business hours.</small>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-image"><img src="/shivani-private-celebration.webp" alt="Shivani, professional event host and emcee in Ambala"/><span className="signature">Shivani</span></div>
        <div className="about-copy"><p className="eyebrow"><span /> Meet your host</p><h2>Calm behind the scenes.<br/><em>Magnetic on stage.</em></h2><p className="quote">“The best hosting never takes over your event—it brings out the very best in it.”</p><p>For Shivani, an event is not a script to be read. It is a room full of people to be understood. With thoughtful preparation, natural audience connection and an instinct for timing, she creates experiences that feel personal—not performed.</p><div className="values"><span>Thoughtful preparation</span><span>Natural engagement</span><span>Grace under pressure</span></div><a className="text-link dark" href="#contact">Plan with Shivani <Arrow /></a></div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-intro"><p className="eyebrow"><span /> Client love</p><h2>Trusted for the moments<br/><em>that matter most.</em></h2></div>
        <div className="review-summary"><strong>4.9</strong><div><span className="stars">★★★★★</span><p>Based on 73 Google reviews</p></div></div>
        <div className="review-grid">
          <blockquote><span className="stars">★★★★★</span><p>“From the first announcement to the last celebration, everything felt natural, energetic and beautifully managed.”</p><footer>Wedding celebration</footer></blockquote>
          <blockquote><span className="stars">★★★★★</span><p>“Professional, confident and genuinely warm. The guests stayed involved and the entire evening moved without a dull moment.”</p><footer>Corporate event</footer></blockquote>
          <blockquote><span className="stars">★★★★★</span><p>“She understood the family, the mood and the little details. It felt personal instead of rehearsed.”</p><footer>Private gathering</footer></blockquote>
        </div>
        <p className="review-note">Representative feedback themes. View the Google profile for verified client reviews.</p>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><p className="eyebrow"><span /> Let’s create something memorable</p><h2>Your date.<br/>Your people.<br/><em>Your perfect moment.</em></h2><p>Share a few details and Shivani will personally get back to you about availability and the right hosting approach.</p><div className="contact-details"><a href="tel:+918708808329"><small>Call / WhatsApp</small><strong>+91 87088 08329</strong></a><a href="https://maps.google.com/?q=430+Model+Town+Ambala+Haryana+134003" target="_blank" rel="noreferrer"><small>Based in</small><strong>430, Model Town, Ambala, Haryana 134003</strong></a></div></div>
        <form className="contact-form" onSubmit={sendEnquiry}>
          <div className="form-row"><label>Your name<input name="name" required placeholder="Enter your name"/></label><label>Event date<input name="date" type="date"/></label></div>
          <div className="form-row"><label>Guest count<input name="guests" type="number" min="1" placeholder="Approx. guests"/></label><label>Estimated budget<select name="budget"><option value="">Select a range</option><option>Under ₹25,000</option><option>₹25,000–₹50,000</option><option>₹50,000+</option><option>Let’s discuss</option></select></label></div>
          <label>Tell us about the event<textarea name="message" rows={4} placeholder="Event type, venue, timing and the feeling you want to create..."/></label>
          <button className="button primary full" type="submit">Send enquiry on WhatsApp <Arrow /></button>
          <small>By submitting, you’ll continue the conversation on WhatsApp.</small>
        </form>
      </section>

      <footer className="footer"><a className="brand invert" href="#top"><span className="brand-mark">S</span><span><strong>SHIVANI</strong><small>EVENT HOST • EMCEE</small></span></a><p>Turning celebrations into stories worth remembering.</p><div><a href="tel:+918708808329">Call</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="#portfolio">Portfolio</a></div><small>© 2026 Shivani – Event Host & Emcee. Ambala, Haryana.</small></footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Shivani on WhatsApp">WA</a>
    </main>
  );
}
