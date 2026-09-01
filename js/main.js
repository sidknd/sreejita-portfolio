/* 
  Sreejita Bhowmik — Personal Brand Portfolio Website
  Interactive JavaScript (Filtering, Case Study Modals, Navigation & Interactions)
*/

document.addEventListener('DOMContentLoaded', () => {
  // Navigation Scroll Effect & Active Link Highlight
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Navigation Toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Project Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Detailed Modal Data for Case Studies
  const caseStudyData = {
    mysore_sandal: {
      client: "MYSORE SANDAL SOAP / KSDL",
      title: "Ansoff-Driven Growth Strategy & Brand Repositioning",
      category: "Strategic Brand Positioning",
      content: `
        <h3>Mysore Sandal Soap — Repositioning & Growth Strategy</h3>
        <p><strong>Context:</strong> KSDL's Mysore Sandal Soap holds a legacy heritage position in India's ₹30,000+ Crore soap market. However, maintaining growth against aggressive FMCG conglomerates requires expanding beyond its traditional consumer base without diluting its iconic sandalwood equity.</p>
        
        <h4>The Challenge</h4>
        <p>Repositioning a legacy brand for younger urban demographics while expanding product lines across market penetration and market development quadrants.</p>
        
        <h4>My Role & Contribution</h4>
        <p>Researched industry dynamics, evaluated consumer perception data, applied the <strong>Ansoff Growth Matrix</strong>, and formulated a comprehensive 3-stage MarCom roadmap and brand repositioning strategy.</p>
        
        <div class="insight-flow-box">
          <strong>Strategic Approach:</strong><br>
          Market Research → Ansoff Matrix Analysis → Segment Identification → Repositioning Framework → Integrated MarCom Roadmap
        </div>

        <h4>Key Insights</h4>
        <ul>
          <li><strong>Heritage vs. Modernity:</strong> Consumers perceive Mysore Sandal as pure and high-quality, but associate it primarily with festive or older demographic usage.</li>
          <li><strong>Product Line Extension Opportunity:</strong> High brand trust enables expansion into premium organic skincare and daily wellness formats.</li>
        </ul>

        <h4>Strategic Recommendations</h4>
        <ul>
          <li><strong>Market Penetration:</strong> Launch targeted digital campaigns highlighting year-round skin nutrition to break seasonal usage patterns.</li>
          <li><strong>Product Development:</strong> Introduce contemporary aromatherapy and liquid body-wash extensions for Gen Z and millennial urban professionals.</li>
          <li><strong>MarCom Roadmap:</strong> Combine heritage visual storytelling with influencer-led micro-moments focusing on natural wellness.</li>
        </ul>
      `
    },
    habit_brand: {
      client: "D2C LIFESTYLE VENTURE",
      title: "Habit — AI-Enabled D2C Lifestyle Brand & GTM Strategy",
      category: "Strategic Brand Positioning",
      content: `
        <h3>Building 'Habit' from Scratch — D2C Business & GTM Strategy</h3>
        <p><strong>Context:</strong> The Indian urban lifestyle and wellness market is valued at ₹4,200 Crore, yet fragmented between high-end luxury and commodity products.</p>
        
        <div style="margin: 1.5rem 0; text-align: center;">
          <a href="https://the-habits-wheat.vercel.app/" target="_blank" rel="noopener" class="btn btn-accent" style="font-size: 1rem; padding: 0.8rem 1.8rem;">
            🌐 Visit Live Website: https://the-habits-wheat.vercel.app/
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <h4>The Approach</h4>
        <p>Conceptualized and built <strong>Habit</strong>, an AI-enabled D2C lifestyle brand positioned around life-stage needs and habit formation.</p>

        <div class="insight-flow-box">
          <strong>GTM Strategy Framework:</strong><br>
          Market Gap Identification → Customer Persona Mapping → Product Architecture → AI Personalization Engine → D2C Launch Campaign
        </div>

        <h4>Key Deliverables & Strategy</h4>
        <ul>
          <li>Defined business model, unit economics, customer lifetime value (LTV) projection, and retention loops.</li>
          <li>Created customer journey maps integrating AI recommendation algorithms for personalized wellness subscription bundles.</li>
          <li>Formulated a multi-channel digital launch plan targeting urban professionals seeking structured daily wellness routines.</li>
        </ul>
      `
    },
    fudge_lab: {
      client: "FIELD EXPERIMENT / PRICING RESEARCH",
      title: "The Fudge Lab — FMCG Pricing Elasticity & Demand Experiment",
      category: "AI & Experimental",
      content: `
        <h3>FMCG Pricing Elasticity Field Experiment</h3>
        <p><strong>Context:</strong> Testing real consumer price sensitivity and demand elasticity in a live FMCG sales environment.</p>

        <h4>Execution & Methodology</h4>
        <p>Designed and ran a live retail sales experiment, selling <strong>290+ FMCG units</strong> across multiple price points and bundling scenarios.</p>

        <div class="insight-flow-box">
          <strong>Experimental Metrics:</strong><br>
          290+ Units Sold | ~6.4% Profit Margin Achieved | Price Elasticity of Demand (PED) Mapped
        </div>

        <h4>Key Insights & Results</h4>
        <ul>
          <li>Mapped empirical price elasticity curves, identifying the exact price threshold where purchase intent dropped significantly.</li>
          <li>Bundled promotional pricing increased total transaction basket size by 34% while maintaining gross margins.</li>
        </ul>
      `
    },
    packaging_study: {
      client: "EXPERIMENTAL PSYCHOLOGY LAB",
      title: "Packaging Attractiveness & Perception — Paired Sample T-Test Study",
      category: "Consumer Research",
      content: `
        <h3>Statistically Validating Packaging Design Impact</h3>
        <p><strong>Context:</strong> Applied experimental psychological design to quantify how subtle visual packaging cues alter perceived product value and attractiveness.</p>

        <h4>Research Design</h4>
        <p>Administered a controlled experimental setup with <strong>56 respondents</strong>, evaluating identical product formulas wrapped in varied aesthetic packaging treatments.</p>

        <div class="insight-flow-box">
          <strong>Statistical Output:</strong><br>
          Paired Sample T-Test Analysis → Statistically Significant Attractiveness Boost (p < 0.001)
        </div>

        <h4>Key Findings</h4>
        <ul>
          <li>Statistically proved that visual structure and tactile packaging attributes significantly increase perceived product quality and willingness to pay.</li>
          <li>Reinforced the psychological basis of aesthetic design in FMCG brand perception.</li>
        </ul>
      `
    },
    ai_crm: {
      client: "AUTOMATION & TECH LAB",
      title: "AI-Powered CRM Automation Workflow for Lead Qualification",
      category: "AI & Experimental",
      content: `
        <h3>Automating B2B Lead Enrichment & Routing</h3>
        <p><strong>Context:</strong> Manual lead data cleaning and qualification creates significant delays in sales routing and inconsistent lead prioritization.</p>

        <h4>Demonstration Video</h4>
        <div style="margin: 1.5rem 0; border-radius: 12px; overflow: hidden; border: 1px solid #E6E4DD; box-shadow: 0 4px 16px rgba(0,0,0,0.1);">
          <video controls style="width: 100%; max-height: 420px; background-color: #000; display: block;">
            <source src="assets/videos/crm_workflow.mov" type="video/mp4">
            <source src="assets/videos/crm_workflow.mov" type="video/quicktime">
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        <h4>Solution Architecture</h4>
        <p>Built an end-to-end AI-powered CRM workflow that automatically ingests raw leads, cleans contact data, enriches company profiles, and assigns lead qualification scores.</p>

        <div class="insight-flow-box">
          <strong>Efficiency Impact:</strong><br>
          Automated ~80% of repetitive manual data cleaning & qualification tasks → Accelerating lead response time.
        </div>

        <h4>Key Features</h4>
        <ul>
          <li>Integrated automated lead scoring algorithms based on company size, engagement level, and intent signals.</li>
          <li>Created seamless CRM routing rules ensuring high-priority leads reach account managers instantly.</li>
        </ul>
      `
    },
    article_full: {
      client: "PUBLISHED STRATEGIC ANALYSIS",
      title: "The Rise of Invisible Marketing: When Ads Disappear",
      category: "Thought Leadership",
      content: `
        <h3>The Rise of Invisible Marketing: When Ads Disappear</h3>
        <p><em>By Sreejita Bhowmik</em></p>

        <div class="insight-flow-box" style="margin: 1.5rem 0;">
          A college student waits for the Delhi Metro, scrolling through Instagram. She pauses at a creator styling a linen co-ord set, taps the tagged product, checks out through Instagram Shop, and boards her train. At no point does she feel she has watched an advertisement. Yet every interaction was carefully designed. Advertising did not interrupt her experience; it became the experience.
        </div>

        <h4>1. From Interruption to Integration</h4>
        <p>For decades, marketing competed for attention. Commercials interrupted movies, banners crowded websites, and popups demanded clicks. However, consumers have become increasingly better at sidelining these interruptions through banner blindness, ad blockers, and endless scrolling. As Seth Godin argued in <em>'Permission Marketing'</em>, the future belongs not to marketers who interrupt, but to those who earn attention. Invisible marketing replaces interruption with integration.</p>

        <p>The psychological difference is profound. Traditional ads invade cognitive space. Invisible marketing enters when the consumer is already receptive. The <strong>Persuasion Knowledge Model (Friestad & Wright)</strong> suggests consumers activate skepticism once they recognize persuasive intent. By blending seamlessly into everyday experiences, invisible marketing delays this resistance.</p>

        <h4>2. Invisible Marketing in Play: Global & Indian Examples</h4>
        <ul>
          <li><strong>Zomato & Swiggy:</strong> Zomato's push notifications read like casual conversations ("Your favourite biryani place misses you"). Swiggy Instamart leverages contextual triggers—rainy evenings push Maggi or pakoras rather than generic discounts. Blinkit pushes snacks moments before an IPL match begins.</li>
          <li><strong>Social Commerce & Micro-Creators:</strong> Nykaa collaborates with beauty creators whose tutorials educate before they sell. Minimalist built credibility through dermatologist educators rather than celebrity endorsements. Internationally, Rhode Skin by Hailey Bieber transformed 'GRWM' videos into a frictionless sales engine.</li>
          <li><strong>Ecosystems Over Campaigns:</strong> Nike rarely pushes shoes inside the Nike Run Club app; it motivates users to become better runners. Once consumers identify as runners, buying Nike products becomes a natural extension. Apple builds an interconnected ecosystem where each device reinforces another, placing customers in a sticky 'loyalty loop'.</li>
          <li><strong>Cultural Marketing:</strong> CRED transformed credit card payment marketing into entertainment through viral campaigns. Amul has practiced invisible marketing for decades through topical creatives that consumers actively search for and share.</li>
          <li><strong>Recommendation Algorithms:</strong> Spotify's Discover Weekly, Amazon's 'often bought together' engine, and Netflix's strategic product placements (Eggo waffles in <em>Stranger Things</em>, luxury fashion in <em>Emily in Paris</em>) revive consumer demand organically.</li>
        </ul>

        <h4>3. The Thin Line Between Relevance and Manipulation</h4>
        <p>If consumers no longer recognize advertising, can they make fully informed choices? Micro-influencers feel like trusted friends, but affiliate links introduce commercial incentives audiences do not always recognize. As marketing becomes increasingly invisible, transparency becomes paramount. Clear disclosures, responsible data practices, and authentic creator collaborations are competitive advantages in an era where trust is the scarcest marketing asset.</p>

        <h4>4. Conclusion</h4>
        <p>Moving forward, AI will make invisible marketing even more seamless. Hyper-personalized recommendations, voice assistants, and predictive commerce will reduce the distance between desire and purchase. The brands that succeed will not necessarily be those with the biggest advertising budgets, but those which integrate themselves most organically into consumers' daily lives.</p>

        <div style="margin-top: 2rem; text-align: center;">
          <a href="assets/documents/When_Ads_Disappear_Sreejita_Bhowmik.docx" download class="btn btn-primary">
            📥 Download Full Document (.docx)
          </a>
        </div>
      `
    }
  };

  // Modal Functionality
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalBody = document.querySelector('.modal-body-content');
  const modalClose = document.querySelector('.modal-close-btn');

  function openModal(htmlContent) {
    if (modalBody) {
      modalBody.innerHTML = htmlContent;
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      // Pause any playing videos inside modal upon closing
      const video = modalBody.querySelector('video');
      if (video) {
        video.pause();
      }
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Trigger Case Study & Article Modals
  document.querySelectorAll('[data-case-study]').forEach(card => {
    card.addEventListener('click', () => {
      const studyKey = card.getAttribute('data-case-study');
      if (caseStudyData[studyKey]) {
        openModal(caseStudyData[studyKey].content);
      }
    });
  });

  // Resume Preview Modal
  const previewResumeBtn = document.querySelector('#btn-preview-resume');
  if (previewResumeBtn) {
    previewResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const resumeContent = `
        <h3>Sreejita Bhowmik — Professional Resume Preview</h3>
        <p>Below is a preview of the official resume. You can also download the full PDF version directly.</p>
        <div style="margin: 1.5rem 0; text-align: center;">
          <img src="assets/images/resume_preview.png" alt="Resume Preview" style="max-width: 100%; height: auto; border: 1px solid #E6E4DD; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        </div>
        <div style="text-align: center; margin-top: 1.5rem;">
          <a href="assets/documents/Resume.pdf" download class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF Resume
          </a>
        </div>
      `;
      openModal(resumeContent);
    });
  }

  // Toast Functionality
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Copy Email Helper
  const copyEmailBtn = document.querySelector('#btn-copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'sreejitabhowmik993@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('sreejitabhowmik993@gmail.com');
      });
    });
  }
});
