import {
  onMounted, onUnmounted, isRef, unref, watch,
} from 'vue';
import type { Ref } from 'vue';

export default function useEventListener(
  // the target could be reactive ref which adds flexibility
  target : Ref<EventTarget | null> | EventTarget,
  event : string,
  // eslint-disable-next-line no-unused-vars
  handler : (e : Event) => any,
) {
  // if its a reactive ref, use a watcher
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    });
  } else {
    // otherwise use the mounted hook
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }
  // clean it up
  onUnmounted(() => {
    unref(target)?.removeEventListener(event, handler);
  });
}
