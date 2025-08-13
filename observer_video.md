Perfect! Here’s a **video feed example** with `useRef` for timers and `IntersectionObserver`, so it’s optimized like TikTok:

---

### **Video Feed — Autoplay & Preload Next**

```jsx
import React, { useRef, useEffect, useState } from "react";

const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];

export default function VideoFeed() {
  const containerRef = useRef(null); // container for IntersectionObserver
  const observerRef = useRef(null); // store observer instance
  const videoRefs = useRef([]); // store video DOM nodes
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
            setCurrentIndex(video.dataset.index);
            // preload next video
            const nextIdx = Number(video.dataset.index) + 1;
            if (videoRefs.current[nextIdx]) {
              videoRefs.current[nextIdx].preload = "auto";
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 } // play when 60% visible
    );

    videoRefs.current.forEach((video) => observerRef.current.observe(video));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "100vh", overflowY: "scroll" }}>
      {videos.map((src, idx) => (
        <video
          key={idx}
          src={src}
          ref={(el) => (videoRefs.current[idx] = el)}
          data-index={idx}
          style={{ display: "block", width: "100%", marginBottom: "20px" }}
          muted
          playsInline
        />
      ))}
    </div>
  );
}
```

---

### **Key Points**

1. **`videoRefs`** keeps a reference to each video element, so we can play/pause or preload the next one.
2. **`observerRef`** holds the `IntersectionObserver` instance so we don’t recreate it on every render.
3. **Autoplay only when visible**: Threshold `0.6` → video plays when 60% visible.
4. **Preload next video** for smooth scrolling experience (like TikTok).
5. **`useRef` instead of useCallback** for persistent references like timer or observer.

---

If you want, I can **combine the search box with this video feed** into a single mini TikTok-style app, showing **debounce + promises + video autoplay + preload**, so you can practice everything together for your frontend interview.

Do you want me to do that?
