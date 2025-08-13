Alright — let’s make this a **frontend interview survival kit** with:

1. **Closures, `this`, Promise, useRef, useCallback** ✅
2. **Debounce & Throttle**
3. **Video buffering / background loading concepts**

I’ll go **concept → why it’s asked → example** style.

---

## **6. Debounce**

**What:**
Debounce ensures a function is called **only after a pause** in calls.
Good for: search boxes, window resize, preventing spammy API calls.

**Why they ask:**

- TikTok search bar or infinite scroll performance.
- A common real-world frontend pattern.

**Example:**

```js
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

const onSearch = debounce((query) => {
  console.log("Searching for", query);
}, 300);

onSearch("a");
onSearch("ab");
onSearch("abc"); // Only runs once after 300ms pause
```

---

## **7. Throttle**

**What:**
Throttle ensures a function runs **at most once every X ms**.
Good for: scroll events, video progress tracking.

**Why they ask:**

- Performance optimization.
- TikTok feed scrolling events.

**Example:**

```js
function throttle(fn, limit) {
  let lastRun = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastRun >= limit) {
      fn.apply(this, args);
      lastRun = now;
    }
  };
}

const logScroll = throttle(() => {
  console.log("Scroll event");
}, 500);

window.addEventListener("scroll", logScroll);
```

---

## **8. Buffering & Preloading Video**

**What:**
TikTok optimizes feed experience by **loading the next video in background** while you watch the current one.

**Why they ask:**

- Shows you understand **media performance** and **user experience**.

**Concepts:**

- **`<video preload="auto">`** — load metadata & some data before play.
- **IntersectionObserver** — detect when the next video is about to be visible and start buffering it.
- **MediaSource API** — advanced buffering control.

**Basic Example:**

```html
<video id="myVideo" preload="auto" muted playsinline>
  <source src="video1.mp4" type="video/mp4" />
</video>
```

**Preload next video in JS:**

```js
function preloadVideo(url) {
  const video = document.createElement("video");
  video.src = url;
  video.preload = "auto";
  // Not appended to DOM, just caches in browser
}

preloadVideo("nextVideo.mp4");
```

**IntersectionObserver for background buffering:**

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("video").forEach((video) => observer.observe(video));
```

---

## How TikTok Could Combine These in a Test

They could ask you to:

- Implement a **search box** that:

  - Uses **debounce** to delay API calls.
  - Uses **Promises** to fetch results.
  - Uses **useCallback** to prevent unnecessary re-renders.

- Build a **video feed** that:

  - Uses **IntersectionObserver** to autoplay videos in view.
  - Preloads the next video while current is playing.

---

If you want, I can now **give you a TikTok-style practice challenge** where you have to combine **debounce + Promise + preload video** into one functional piece of code.
That would mimic what you’d get in a CodeSignal + interview setting.

Do you want me to set that up for you right now?
