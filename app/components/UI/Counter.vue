<template>
  <span ref="el">{{ display }}</span>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";

/**
 * Props
 * - end: final number to count to
 * - duration: how long the animation runs (ms)
 * - format: whether to use Intl.NumberFormat style (true/false)
 * - decimals: number of decimal places
 */
const props = defineProps({
  end: { type: Number, required: true },
  duration: { type: Number, default: 1500 },
  format: { type: Boolean, default: true },
  decimals: { type: Number, default: 0 },
  start: { type: Number, default: 0 }, // optional start value
  once: { type: Boolean, default: true }, // run only once when visible
});

const el = ref<HTMLElement | null>(null);
const display = ref<string | number>(props.start);
let rafId: number | null = null;
let io: IntersectionObserver | null = null;
let started = false;

const numberFormatter = computed(() => {
  if (!props.format) return null;
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: props.decimals,
    maximumFractionDigits: props.decimals,
  });
});

function formatNumber(n: number) {
  if (numberFormatter.value) return numberFormatter.value.format(n);
  return n.toFixed(props.decimals);
}

function easeOutCubic(t: number) {
  // t in [0,1]
  return 1 - Math.pow(1 - t, 3);
}

function animateCount(from: number, to: number, duration: number) {
  const startTime = performance.now();
  const diff = to - from;

  function step(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(t);
    const current = from + diff * eased;

    // update display (formatted)
    display.value = formatNumber(current);

    if (t < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      // ensure final value exact
      display.value = formatNumber(to);
      rafId = null;
    }
  }

  rafId = requestAnimationFrame(step);
}

onMounted(() => {
  // If element not found (unlikely with template ref), bail
  if (!el.value) return;

  // IntersectionObserver to start when visible
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          animateCount(props.start, props.end, props.duration);
          if (props.once && io) {
            io.disconnect();
            io = null;
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  io.observe(el.value);
});

onBeforeUnmount(() => {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (io) {
    io.disconnect();
    io = null;
  }
});
</script>
