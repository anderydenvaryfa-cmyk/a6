// ELASTANE PAIR • BIOMECHANICAL COMPRESSION CALCULATOR & DRAWER
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('drawer-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !toggle.contains(e.target) && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '&#9776;';
      }
    });
  }

  // Interactive Graduated Compression & Needle Gauge Calculator
  const calcBtn = document.getElementById('calc-compression-btn');
  const calcResult = document.getElementById('calc-compression-result');
  if (calcBtn && calcResult) {
    calcBtn.addEventListener('click', () => {
      const activity = document.getElementById('activity-select').value;
      const denier = document.getElementById('denier-select').value;

      const data = {
        'endurance': { mmHg: '20-25 mmHg (Class II Medical/Athletic)', recovery: 'Accelerated Venous Return', needles: '200-Needle Superfine Cylinder' },
        'recovery': { mmHg: '15-20 mmHg (Class I Travel & Rest)', recovery: 'Zero Pooling Fluid Clearance', needles: '168-Needle Cushion Looped Cylinder' },
        'daily': { mmHg: '12-15 mmHg (Mild Arch & Ankle Stabilization)', recovery: 'All-Day Non-Binding Comfort', needles: '240-Needle Ultra-Dense Dress Cylinder' }
      };

      const sel = data[activity];

      calcResult.innerHTML = `
        <div style="margin-top:1.25rem; padding:1.35rem; background:var(--bg-card); border:1px solid var(--border-glow); border-radius:4px;">
          <h4 style="color:var(--accent-cyan); margin-bottom:0.5rem; font-family:var(--font-heading);">Biomechanical Gauge Telemetry</h4>
          <p style="font-size:0.95rem; margin-bottom:0.25rem;"><strong>Graduated Pressure Profile:</strong> ${sel.mmHg}</p>
          <p style="font-size:0.95rem; margin-bottom:0.25rem;"><strong>Elastane Core Denier:</strong> ${denier} Covered Polyurethane Filament</p>
          <p style="font-size:0.95rem; margin-bottom:0.25rem;"><strong>Knitting Cylinder Geometry:</strong> ${sel.needles}</p>
          <p style="font-size:0.95rem; margin-top:0.5rem; color:var(--accent-volt); font-family:var(--font-mono);">
            Kinetic Recovery Index: ${sel.recovery}
          </p>
        </div>
      `;
    });
  }
});
