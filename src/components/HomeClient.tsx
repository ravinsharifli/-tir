"use client";
import Link from 'next/link'

export default function HomeClient() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 60px 0' }} className="hero-section">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 75% 50%, rgba(201,169,110,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201,169,110,0.04) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, var(--gold) 80px, var(--gold) 80.5px)' }} />

        <div style={{ position: 'relative', maxWidth: '640px', zIndex: 2 }}>
          <div className="animate-fadeUp" style={{ animationDelay: '0.3s', opacity: 0, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'block', width: '40px', height: '0.5px', background: 'var(--gold)' }} />
            Lüks Ətir Brendi· Bakı
          </div>

          <h1 className="animate-fadeUp" style={{ animationDelay: '0.5s', opacity: 0, fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 300, lineHeight: 1.0, marginBottom: '32px' }}>
            Ətirin<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>ilə hekayə</em><br />
            yaz.
          </h1>

          <p className="animate-fadeUp" style={{ animationDelay: '0.7s', opacity: 0, fontSize: '13px', lineHeight: 1.9, color: 'var(--text-mid)', maxWidth: '420px', marginBottom: '52px' }}>
            Premium ətirlərin incə sehrində qalın. Hər qoxu, gecələrin şahzadəsi kimi cazibədar. Sifarişlə başlayın, ətirinizlə iz qoyun.
          </p>

          <div className="animate-fadeUp" style={{ animationDelay: '0.9s', opacity: 0, display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/kolleksiya" className="btn-gold">Kolleksiyaya Bax</Link>
            <Link href="/haqqimizda" className="btn-ghost">
              Haqqımızda
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>

        {/* Hero bottle — yalnız desktop */}
        <div className="hero-bottle animate-float" style={{ position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)' }} />
            <svg width="200" height="340" viewBox="0 0 200 340" fill="none">
              <rect x="40" y="100" width="120" height="215" rx="8" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
              <rect x="50" y="110" width="28" height="195" rx="4" fill="white" opacity="0.03" />
              <rect x="72" y="60" width="56" height="44" rx="4" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
              <rect x="64" y="30" width="72" height="34" rx="4" fill="#c9a96e" />
              <rect x="72" y="38" width="56" height="18" rx="2" fill="#b8935a" />
              <rect x="52" y="150" width="96" height="120" rx="2" fill="rgba(201,169,110,0.04)" stroke="rgba(201,169,110,0.25)" strokeWidth="0.5" />
              <text x="100" y="196" fontFamily="Georgia,serif" fontSize="11" fill="#c9a96e" textAnchor="middle" letterSpacing="4">RAVION</text>
              <line x1="62" y1="203" x2="138" y2="203" stroke="#c9a96e" strokeWidth="0.3" opacity="0.5" />
              <text x="100" y="220" fontFamily="Georgia,serif" fontSize="7" fill="rgba(201,169,110,0.6)" textAnchor="middle" letterSpacing="2">BAKU</text>
              <text x="100" y="240" fontFamily="Georgia,serif" fontSize="8" fill="rgba(201,169,110,0.35)" textAnchor="middle" fontStyle="italic">Eau de Parfum</text>
              <rect x="42" y="215" width="116" height="98" fill="rgba(201,169,110,0.05)" />
            </svg>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '60px', left: '60px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          <div style={{ width: '40px', height: '0.5px', background: 'var(--gold-dim)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--gold)', animation: 'marquee 2s ease-in-out infinite' }} />
          </div>
          Aşağı Sürüş
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', padding: '16px 0', overflow: 'hidden', background: 'var(--deep)' }}>
        <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {['Tom Ford', 'Creed', 'Maison Margiela', 'Parfums de Marly', 'Xerjoff', 'Amouage', 'Memo Paris', 'Initio', 'Kilian', 'Baccarat Rouge', 'Tom Ford', 'Creed', 'Maison Margiela', 'Parfums de Marly', 'Xerjoff', 'Amouage', 'Memo Paris', 'Initio', 'Kilian', 'Baccarat Rouge'].map((brand, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '15px', fontStyle: 'italic', color: 'var(--text-muted)', padding: '0 32px', display: 'inline-flex', alignItems: 'center', gap: '32px' }}>
              {brand}
              <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-dim)' }} />
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section style={{ padding: '120px 60px', background: 'var(--deep)' }} className="section-pad">
        <div style={{ marginBottom: '64px' }}>
          <span className="section-tag">Kateqoriyalar</span>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.1 }}>
            Özünü<br /><em style={{ fontStyle: 'italic' }}>kəşf et</em>
          </h2>
        </div>

        <div className="cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
          {[
            { href: '/kisi', label: 'Kişi', count: '40+ ətir', desc: 'Güclü, dərin, yaddaqalan', color: 'rgba(201,169,110,0.04)' },
            { href: '/xanim', label: 'Xanım', count: '45+ ətir', desc: 'Zərif, çiçəkli, füsunkar', color: 'rgba(201,169,110,0.03)' },
            { href: '/unisex', label: 'Unisex', count: '30+ ətir', desc: 'Cinsiyyətsiz, azad, müasir', color: 'rgba(201,169,110,0.05)' },
            { href: '/hediyye', label: 'Hədiyyə Qutuları', count: '12 set', desc: 'Xüsusi anlar üçün', color: 'rgba(201,169,110,0.06)' },
          ].map((cat) => (
            <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none', display: 'block', aspectRatio: '3/4', background: cat.color, border: '0.5px solid var(--border)', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,6,0.95) 0%, transparent 60%)', zIndex: 1 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px', zIndex: 2 }}>
                <span className="section-tag" style={{ marginBottom: '8px' }}>{cat.count}</span>
                <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 300, color: 'var(--cream)', marginBottom: '8px' }}>{cat.label}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{cat.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PACKAGING */}
      <section style={{ padding: '120px 60px', background: 'var(--black)' }} className="section-pad">
        <div className="pkg-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', alignItems: 'stretch' }}>
          <div style={{ background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '520px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)' }} />
            <svg className="animate-float" width="160" height="280" viewBox="0 0 160 280" fill="none">
              <rect x="25" y="70" width="110" height="190" rx="8" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
              <rect x="54" y="30" width="52" height="44" rx="4" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
              <rect x="46" y="12" width="68" height="22" rx="4" fill="#c9a96e" />
              <rect x="35" y="120" width="90" height="110" rx="2" fill="rgba(201,169,110,0.04)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
              <text x="80" y="168" fontFamily="Georgia,serif" fontSize="9" fill="#c9a96e" textAnchor="middle" letterSpacing="3">RAVION</text>
              <line x1="42" y1="175" x2="118" y2="175" stroke="#c9a96e" strokeWidth="0.3" opacity="0.4" />
              <text x="80" y="190" fontFamily="Georgia,serif" fontSize="6" fill="rgba(201,169,110,0.5)" textAnchor="middle" letterSpacing="2" fontStyle="italic">Limited Edition</text>
            </svg>
          </div>

          <div style={{ background: 'var(--card)', padding: '64px' }} className="pkg-text">
            <span className="section-tag">Qablaşdırma</span>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '42px', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
              Necə<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>çatdırılsın?</em>
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '40px' }}>
              Hər sifariş zamanı qablaşdırma növünü seçə bilərsən. Hədiyyə üçün xüsusi paket — sevdiklərinə unutulmaz an yaşat.
            </p>
            {[
              { tier: 'Standart', price: 'Pulsuz', items: ['Şəffaf şüşə flakon', 'Sadə qutu', 'Kraft paket'], active: false },
              { tier: 'Premium', price: '+9.99 ₼', items: ['Zərli şüşə flakon', 'Hədiyyəlik qutu', 'Gözəl karton paket'], active: true },
              { tier: 'Luxury', price: '+19.99 ₼', items: ['Zərli şüşə flakon', 'Lazer yazı', 'Bantik + Hədiyyə kartı', 'Kiçik 5ml hədiyyə ətir'], active: false },
            ].map((pkg) => (
              <div key={pkg.tier} style={{ padding: '20px 24px', border: `0.5px solid ${pkg.active ? 'var(--gold)' : 'var(--border)'}`, background: pkg.active ? 'rgba(201,169,110,0.05)' : 'transparent', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px' }}>{pkg.tier}</span>
                    {pkg.active && <span style={{ fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--black)', padding: '3px 8px' }}>Populyar</span>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {pkg.items.map((item) => (
                      <span key={item} style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-dim)', flexShrink: 0 }} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px', color: 'var(--gold)', whiteSpace: 'nowrap', marginLeft: '16px' }}>{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '120px 60px', background: 'var(--deep)' }} className="section-pad">
        <div style={{ marginBottom: '64px' }}>
          <span className="section-tag">Proses</span>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 300 }}>
            Necə <em style={{ fontStyle: 'italic' }}>işləyir</em>
          </h2>
        </div>
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '0.5px solid var(--border)' }}>
          {[
            { num: '01', title: 'Ətrini seç', text: '100-dən çox lüks ətir arasından seçim et. Hər ətir haqqında ətraflı nota məlumatı, geyim tövsiyəsi və müştəri rəyləri mövcuddur.' },
            { num: '02', title: 'Həcmini seç', text: 'Az miqdarda sınamaq istəyirsən? Daha çox almaq istəyirsən? Seçim sənindir — öz zövqünə uyğun həcmi müəyyən et.' },
            { num: '03', title: 'Qapına çatdırılır', text: 'Sifarişin seçdiyin qablaşdırma ilə zərifcə hazırlanır. Bütün Azərbaycana kuryer ilə çatdırılır.' },
          ].map((step, i) => (
            <div key={i} style={{ padding: '52px 44px', borderRight: i < 2 ? '0.5px solid var(--border)' : 'none' }}>
              <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '80px', fontWeight: 300, color: 'rgba(201,169,110,0.08)', lineHeight: 1, display: 'block', marginBottom: '-16px' }}>{step.num}</span>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 300, marginBottom: '16px', position: 'relative' }}>{step.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--text-muted)' }}>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 0', background: 'var(--surface)', overflow: 'hidden' }}>
        <div style={{ padding: '0 60px', marginBottom: '52px' }} className="section-pad-inner">
          <span className="section-tag">Müştəri Rəyləri</span>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 300 }}>
            Onlar nə <em style={{ fontStyle: 'italic' }}>deyir</em>
          </h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div className="animate-marquee-slow" style={{ display: 'flex', gap: '24px', width: 'max-content' }}>
            {[
              { text: 'Creed Aventus-u buradan aldım. Keyfiyyət əladır, çatdırılma çox sürətli oldu.', author: 'Elnur M.', city: 'Bakı' },
              { text: 'Hədiyyəlik qutu dizaynı inanılmaz gözəldir. Sevgilimin doğum günündə 3 fərqli ətirdən ibarət set göndərdim.', author: 'Aytən H.', city: 'Gəncə' },
              { text: 'Tom Ford Black Orchid-i uzun axtarırdım. Nəhayət Bakıda keyfiyyətli satan yer tapdım.', author: 'Sevinc K.', city: 'Bakı' },
              { text: 'Xerjoff Naxos — bu ətirin hər qramı sizi başqa dünyaya aparır. Ravion.az sayəsində kəşf etdim.', author: 'Rauf Ə.', city: 'Sumqayıt' },
              { text: 'Creed Aventus-u buradan aldım. Keyfiyyət əladır, çatdırılma çox sürətli oldu.', author: 'Elnur M.', city: 'Bakı' },
              { text: 'Hədiyyəlik qutu dizaynı inanılmaz gözəldir. Sevgilimin doğum günündə 3 fərqli ətirdən ibarət set göndərdim.', author: 'Aytən H.', city: 'Gəncə' },
              { text: 'Tom Ford Black Orchid-i uzun axtarırdım. Nəhayət Bakıda keyfiyyətli satan yer tapdım.', author: 'Sevinc K.', city: 'Bakı' },
              { text: 'Xerjoff Naxos — bu ətirin hər qramı sizi başqa dünyaya aparır. Ravion.az sayəsində kəşf etdim.', author: 'Rauf Ə.', city: 'Sumqayıt' },
            ].map((t, i) => (
              <div key={i} style={{ minWidth: '380px', padding: '40px 44px', border: '0.5px solid var(--border)', background: 'var(--card)', flexShrink: 0 }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: 'var(--gold)', fontSize: '12px' }}>★</span>)}
                </div>
                <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '17px', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, color: 'var(--text-mid)', marginBottom: '24px' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {t.author} — {t.city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARITY */}
      <section style={{ padding: '100px 60px', background: 'var(--black)', borderTop: '0.5px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Sosial Məsuliyyət</span>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, marginBottom: '24px', lineHeight: 1.2 }}>
            Hər sifarişin <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>5%-i</em><br />xeyriyyəyə gedir
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '48px' }}>
            Küçə heyvanlarının qorunması, tələbələrin təhsil haqqının ödənilməsi və ehtiyac sahiblərinin dəstəklənməsi — gəlirimizin 5%-i bu məqsədlərə ayrılır.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {['🐾 Küçə Heyvanları', '📚 Tələbə Təhsili', '🤝 Ehtiyac Sahibləri'].map((item) => (
              <div key={item} style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--black)', borderTop: '0.5px solid var(--border)', padding: '80px 60px 40px' }} className="footer-pad">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 300, letterSpacing: '0.1em', marginBottom: '16px' }}>
              RAVI<span style={{ color: 'var(--gold)' }}>O</span>N
            </div>
            <p style={{ fontSize: '12px', lineHeight: 1.9, color: 'var(--text-muted)', maxWidth: '280px' }}>
              Bakıda lüks ətir mağazası. Dünyanın ən seçkin evlərinin ətirlərini — sənin qiymətinə. Gəlirimizin 5%-i xeyriyyəyə ayrılır.
            </p>
          </div>
          {[
            { title: 'Mağaza', links: [{ href: '/kisi', label: 'Kişi Ətrirləri' }, { href: '/xanim', label: 'Xanım Ətrirləri' }, { href: '/unisex', label: 'Unisex' }, { href: '/hediyye', label: 'Hədiyyə Qutuları' }] },
            { title: 'Şirkət', links: [{ href: '/haqqimizda', label: 'Haqqımızda' }, { href: '/haqqimizda#xeyriyye', label: 'Xeyriyyə' }, { href: '#', label: 'Bloq' }, { href: '#', label: 'Əlaqə' }] },
            { title: 'Kömək', links: [{ href: '#', label: 'Çatdırılma' }, { href: '#', label: 'Qaytarma' }, { href: '#', label: 'FAQ' }, { href: '#', label: 'Gizlilik' }] },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>{col.title}</div>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map((l) => (
                  <li key={l.label} style={{ marginBottom: '12px' }}>
                    <Link href={l.href} style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>© 2025 Ravion.az. Bütün hüquqlar qorunur.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Instagram', href: 'https://instagram.com/ravion.az' },
              { label: 'TikTok', href: 'https://tiktok.com/@ravion.az' },
              { label: 'WhatsApp', href: 'https://wa.me/994558603040' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}