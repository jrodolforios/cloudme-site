/**
 * Camada de aprimoramento progressivo do site.
 *
 * Este script é opcional: toda a experiência (navegação, abas, conteúdo)
 * já funciona sem JavaScript graças a marcação semântica e estados HTML
 * padrão. Aqui apenas adicionamos:
 *   1. Revelação suave de blocos ao rolar a página;
 *   2. Comportamento de abas acessível para o explorador de desafios;
 *   3. Progresso visual do método (linha do tempo).
 *
 * Tudo respeita `prefers-reduced-motion` (ver `global.css`, que já
 * desativa a transição de `.reveal` nesse caso).
 */

function setupScrollReveal(): void {
  const items = document.querySelectorAll<HTMLElement>('.reveal');
  if (items.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
  );

  items.forEach((item) => observer.observe(item));
}

function setupTabs(): void {
  const tabLists = document.querySelectorAll<HTMLElement>('[data-tabs]');

  tabLists.forEach((tabList) => {
    const tabs = Array.from(tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const panels = Array.from(
      tabList.parentElement?.querySelectorAll<HTMLElement>('[role="tabpanel"]') ?? [],
    );

    function activate(index: number, moveFocus = true): void {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.setAttribute('tabindex', selected ? '0' : '-1');
        panels[i]?.toggleAttribute('hidden', !selected);
      });
      if (moveFocus) tabs[index]?.focus();
    }

    // Estado inicial: sem JS todos os painéis ficam visíveis (lista simples e
    // acessível). Com JS, aplicamos o comportamento de abas reais.
    activate(0, false);

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(index));
      tab.addEventListener('keydown', (event) => {
        const key = event.key;
        let nextIndex: number | null = null;
        if (key === 'ArrowRight' || key === 'ArrowDown') {
          nextIndex = (index + 1) % tabs.length;
        } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (key === 'Home') {
          nextIndex = 0;
        } else if (key === 'End') {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex !== null) {
          event.preventDefault();
          activate(nextIndex);
        }
      });
    });
  });
}

function setupMethodProgress(): void {
  const track = document.querySelector<HTMLElement>('[data-method-track]');
  if (!track) return;

  const steps = Array.from(track.querySelectorAll<HTMLElement>('[data-method-step]'));
  const progressBar = track.querySelector<HTMLElement>('[data-method-progress]');
  if (steps.length === 0 || !progressBar) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    steps.forEach((step) => step.classList.add('is-active'));
    progressBar.style.setProperty('--progress', '1');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const step = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          step.classList.add('is-active');
          const activeCount = steps.filter((s) => s.classList.contains('is-active')).length;
          progressBar.style.setProperty('--progress', String(activeCount / steps.length));
        }
      });
    },
    { threshold: 0.5 },
  );

  steps.forEach((step) => observer.observe(step));
}

setupScrollReveal();
setupTabs();
setupMethodProgress();
