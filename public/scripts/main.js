// doms{{{
//==============================================================================
//                              Select Dom
//==============================================================================
const doms = (selector) => document.querySelectorAll(selector);
/*}}}*/
// observer dom{{{
//==============================================================================
//                              Observer Dom
//==============================================================================
const observer_dom = (dom, action_is_intersecting, action_not_intersecting) => {
  const io = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        action_is_intersecting(entry.target);
        if (!action_not_intersecting) io.disconnect();
      } else if (action_not_intersecting) {
        action_not_intersecting(entry.target);
      }
    });
  });
  io.observe(dom);
};
/*}}}*/
// add class on focus{{{
//==============================================================================
//                              Add Class on Focus
//==============================================================================
const add_class_on_focus = (list) => {
  for (const key in list) {
    list[key].forEach((dom_string) => {
      doms(dom_string).forEach((d) => {
        observer_dom(d, (dom) => dom.classList.add(key));
      });
    });
  }
}; //
/*}}}*/
// toggle navigation on_scroll{{{
//==============================================================================
//                       Toggle Navigation on Scroll
//==============================================================================
const toggle_navigation_on_scroll = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.position_old) {
      if (!window.nav_hidden) {
        doms('nav')[0].style.transform = 'translateY(-200%)';
        window.nav_hidden = true;
      }
    } else if (window.nav_hidden) {
      doms('nav')[0].style.transform = 'translateY(0)';
      window.nav_hidden = false;
    }
    window.position_old = window.scrollY;
  });
};
/*}}}*/

add_class_on_focus({
  move_back: ['.moved_right', '.moved_left', '.moved_down', '.moved_up'],
  fade_in: ['.faded_out'],
});

const lightbox = new FsLightbox();
lightbox.props.sources = [
  '/images/news_4.jpg',
  '/videos/bbc.mp4',
  '/images/news_13.webp',
  '/images/news_8.jpg',
  '/images/news_6.jpg',
  '/images/news_5.jpg',
  '/images/news_9.jpg',
  '/images/news_10.jpg',
  '/images/news_11.jpg',
  '/images/news_12.jpg',
  '/images/news_1.jpg',
  '/images/news_2.jpg',
  '/images/news_3.jpg',
  '/images/news_7.jpg'
];

doms('#news .grid *').forEach((dom) => {
  dom.onclick = (event) => {
    const index = Array.prototype.indexOf.call(
      event.target.parentElement.children,
      event.target
    );
    lightbox.open(index);
  };
});

toggle_navigation_on_scroll();

// add_class_on_focus({
//   'move_back': ['.moved_right', '.moved_left', '.moved_down'],
//   'fade_in': ['.faded_out'],
// });

window.onload = () => {
  const preloader = doms('#preloader')[0];
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.remove();
  }, 2000);
};

//  try {
//  doms(`nav a[href="${location.pathname}"] p`)[0].classList.add('active_link');
//  } catch {
//  doms('nav .menu a:first-of-type p')[0].classList.add('active_link');
//  }
