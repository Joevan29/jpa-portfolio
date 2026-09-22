'use client';

import { useEffect, useRef } from 'react';

export interface AntiGravityCursorScrubProps {
  videoFile?: string;
  axis?: 'Vertical' | 'Horizontal' | 'DistanceToCenter';
  tracking?: 'Window' | 'Component';
  smoothing?: number;
  reverse?: boolean;
  fit?: 'cover' | 'contain';
  className?: string;
}

/**
 * AntiGravityCursorScrub
 * High-performance cursor-scrubbed video component simulating weightless floating inertia.
 * Designed specifically for clean anti-gravity plates and zero-latency frame navigation.
 */
export function AntiGravityCursorScrub({
  videoFile = '/joy_smooth.mp4',
  axis = 'Vertical',
  tracking = 'Window',
  smoothing = 0.22,
  reverse = false,
  fit = 'cover',
  className = '',
}: AntiGravityCursorScrubProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let currentTime = 0;
    let rafId = 0;
    let disposed = false;

    // Preload buffer and metadata
    video.preload = 'auto';
    video.muted = true;
    video.load();

    const handlePointer = (clientX: number, clientY: number) => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      let progress = 0;

      if (tracking === 'Window') {
        if (axis === 'DistanceToCenter') {
          const cx = window.innerWidth / 2;
          const cy = window.innerHeight / 2;
          const dist = Math.hypot(clientX - cx, clientY - cy);
          const maxDist = Math.hypot(cx, cy);
          progress = Math.min(Math.max(0, dist / maxDist), 1);
        } else if (axis === 'Horizontal') {
          progress = Math.min(Math.max(0, clientX / window.innerWidth), 1);
        } else {
          // Vertical (Default)
          progress = Math.min(Math.max(0, clientY / window.innerHeight), 1);
        }
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (axis === 'DistanceToCenter') {
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dist = Math.hypot(clientX - cx, clientY - cy);
          const maxDist = Math.hypot(rect.width / 2, rect.height / 2);
          progress = Math.min(Math.max(0, dist / maxDist), 1);
        } else if (axis === 'Horizontal') {
          progress = Math.min(Math.max(0, (clientX - rect.left) / rect.width), 1);
        } else {
          progress = Math.min(Math.max(0, (clientY - rect.top) / rect.height), 1);
        }
      }

      if (reverse) {
        progress = 1 - progress;
      }

      const maxDuration = Math.max(0, video.duration - 0.04);
      targetTime = progress * maxDuration;
    };

    // Smooth Lerp loop using requestAnimationFrame with floating anti-gravity inertia
    const updateLoop = () => {
      if (disposed) return;

      if (video.readyState >= 2) {
        const diff = targetTime - currentTime;
        if (Math.abs(diff) > 0.001) {
          currentTime += diff * smoothing;
          video.currentTime = Math.min(Math.max(0, currentTime), video.duration || 5.0);
        }
      }

      rafId = requestAnimationFrame(updateLoop);
    };

    const onPointerMove = (e: PointerEvent) => {
      handlePointer(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onScroll = () => {
      if (window.innerWidth <= 700 && video.duration) {
        const scrollY = window.scrollY;
        const progress = Math.min(Math.max(0, scrollY / (window.innerHeight * 0.7)), 1);
        targetTime = (reverse ? 1 - progress : progress) * Math.max(0, video.duration - 0.04);
      }
    };

    const onLoadedMetadata = () => {
      video.currentTime = reverse ? Math.max(0, video.duration - 0.04) : 0;
      currentTime = video.currentTime;
      targetTime = video.currentTime;
      video.pause();
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    rafId = requestAnimationFrame(updateLoop);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [axis, tracking, smoothing, reverse]);

  return (
    <div
      ref={containerRef}
      className={`footer-background pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src={videoFile}
        className="character-video block pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          objectFit: fit,
          objectPosition: 'center',
        }}
      />
    </div>
  );
}

// Default export alias for seamless integration with Home page
export default AntiGravityCursorScrub;
