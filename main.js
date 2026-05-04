/**
 * Fully Loaded Websites — Main JavaScript
 * Performance-optimized with proper event delegation
 */

// Configuration constants
const ANIMATION_CONFIG = {
  COUNTER_DURATION: 1200,
  COUNTER_THRESHOLD: 0.5,
  REVEAL_THRESHOLD: 0.1,
  NAVBAR_SCROLL_THRESHOLD: 60
};

// ═══════════════════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ═══════════════════════════════════════════════════════
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > ANIMATION_CONFIG.NAVBAR_SCROLL_THRESHOLD);
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════
// MOBILE DRAWER
// ═══════════════════════════════════════════════════════
const mobileDrawer = document.getElementById('mobileDrawer');
const hamburger = document.getElementById('hamburger');
const drawerClose = document.getElementById('drawerClose');
const drawerBackdrop = document.querySelector('.drawer-backdrop');

function openDrawer() {
  if (mobileDrawer) {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDrawer() {
  if (mobileDrawer) {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Event listeners for mobile drawer
if (hamburger) {
  hamburger.addEventListener('click', openDrawer);
}

if (drawerClose) {
  drawerClose.addEventListener('click', closeDrawer);
}

if (drawerBackdrop) {
  drawerBackdrop.addEventListener('click', closeDrawer);
}

// Close drawer when clicking any drawer link
const drawerLinks = document.querySelectorAll('.drawer-link');
drawerLinks.forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// Close drawer on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
    closeDrawer();
  }
});

// ═══════════════════════════════════════════════════════
// SCROLL REVEAL ANIMATION
// ═══════════════════════════════════════════════════════
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0 && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: ANIMATION_CONFIG.REVEAL_THRESHOLD });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ═══════════════════════════════════════════════════════
// STATS COUNTER ANIMATION
// ═══════════════════════════════════════════════════════
const counters = document.querySelectorAll('.counter');
if (counters.length > 0 && 'IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const element = entry.target;
      const targetValue = parseInt(element.dataset.target, 10);
      
      // Validate target value
      if (isNaN(targetValue)) {
        console.warn('Invalid counter target value:', element.dataset.target);
        counterObserver.unobserve(element);
        return;
      }
      
      const startTime = performance.now();
      
      function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / ANIMATION_CONFIG.COUNTER_DURATION, 1);
        
        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(easeOut * targetValue);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
      
      requestAnimationFrame(animate);
      counterObserver.unobserve(element);
    });
  }, { threshold: ANIMATION_CONFIG.COUNTER_THRESHOLD });

  counters.forEach(counter => counterObserver.observe(counter));
}

// ═══════════════════════════════════════════════════════
// WEB MATRIX INTERACTIVE
// ═══════════════════════════════════════════════════════
const matrixNodes = document.querySelectorAll('.matrix-node');
const outerRing = document.getElementById('outer-ring');
const matrixInfo = document.getElementById('matrixInfo');
const matrixTitle = document.getElementById('matrixTitle');
const matrixDesc = document.getElementById('matrixDesc');
const lineIds = ['line-0', 'line-1', 'line-2', 'line-3', 'line-4', 'line-5', 'line-6', 'line-7'];

// Store original colors
const originalLineColors = lineIds.map(id => {
  const element = document.getElementById(id);
  return element ? element.getAttribute('stroke') : '';
});

const originalNodeData = Array.from(matrixNodes).map(node => {
  const circle = node.querySelector('circle');
  return circle ? {
    fill: circle.getAttribute('fill'),
    stroke: circle.getAttribute('stroke')
  } : null;
});

const centerCircles = document.querySelectorAll('#matrix-svg > circle:not(#outer-ring)');

// Default matrix info text
const DEFAULT_MATRIX_TEXT = {
  title: 'HOVER A NODE TO EXPLORE',
  desc: 'Your business website is the mothership. Each spoke drives traffic back to it — blog posts, reviews, social content, press releases. Everything works together.'
};

matrixNodes.forEach((node, nodeIndex) => {
  node.style.cursor = 'pointer';

  node.addEventListener('mouseenter', () => {
    const color = node.dataset.color;
    if (!color) return;

    // Update all spoke lines
    lineIds.forEach(id => {
      const line = document.getElementById(id);
      if (line) {
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-opacity', '0.9');
        line.setAttribute('stroke-width', '2');
      }
    });

    // Update outer ring
    if (outerRing) {
      outerRing.setAttribute('stroke', color);
      outerRing.setAttribute('stroke-opacity', '0.9');
    }

    // Update all nodes (dim others, highlight current)
    matrixNodes.forEach((n, idx) => {
      const circle = n.querySelector('circle');
      if (!circle) return;
      
      if (idx === nodeIndex) {
        circle.setAttribute('stroke', color);
        circle.setAttribute('stroke-width', '3');
      } else {
        circle.setAttribute('stroke', color);
        circle.setAttribute('stroke-opacity', '0.4');
      }
    });

    // Update center node
    centerCircles.forEach(circle => {
      circle.setAttribute('stroke', color);
    });

    // Update info panel
    if (matrixInfo) matrixInfo.style.borderLeftColor = color;
    if (matrixTitle) matrixTitle.textContent = (node.dataset.title || '').toUpperCase();
    if (matrixDesc) matrixDesc.textContent = node.dataset.desc || '';
  });

  node.addEventListener('mouseleave', () => {
    // Restore all spoke lines
    lineIds.forEach((id, idx) => {
      const line = document.getElementById(id);
      if (line && originalLineColors[idx]) {
        line.setAttribute('stroke', originalLineColors[idx]);
        line.setAttribute('stroke-opacity', '1');
        line.setAttribute('stroke-width', '1.5');
      }
    });

    // Restore outer ring
    if (outerRing) {
      outerRing.setAttribute('stroke', 'rgba(218,165,32,.28)');
      outerRing.setAttribute('stroke-opacity', '1');
    }

    // Restore all node strokes
    matrixNodes.forEach((n, idx) => {
      const circle = n.querySelector('circle');
      if (circle && originalNodeData[idx]) {
        circle.setAttribute('stroke', originalNodeData[idx].stroke);
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('stroke-opacity', '1');
      }
    });

    // Restore center node
    centerCircles.forEach(circle => {
      circle.setAttribute('stroke', '#B01C1C');
    });

    // Reset info panel
    if (matrixInfo) matrixInfo.style.borderLeftColor = 'var(--gold)';
    if (matrixTitle) matrixTitle.textContent = DEFAULT_MATRIX_TEXT.title;
    if (matrixDesc) matrixDesc.textContent = DEFAULT_MATRIX_TEXT.desc;
  });
});

// ═══════════════════════════════════════════════════════
// ACCESSIBILITY: TRAP FOCUS IN MOBILE DRAWER WHEN OPEN
// ═══════════════════════════════════════════════════════
if (mobileDrawer) {
  const focusableElements = mobileDrawer.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  mobileDrawer.addEventListener('keydown', (e) => {
    if (!mobileDrawer.classList.contains('open')) return;
    
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  });
}

// ═══════════════════════════════════════════════════════
// PERFORMANCE: Log when JS is loaded
// ═══════════════════════════════════════════════════════
console.log('✓ FLW scripts loaded successfully');
