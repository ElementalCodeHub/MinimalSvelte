// src/components/MyComponent.lite.tsx
import { useStore } from '@builder.io/mitosis';

export default function MyBasicComponent(props) {
  const state = useStore({
    name: 'Foo',
  });

  return (
    <div>
      {props.message || 'Hello'} {state.name}! I am Minimal Svelte
    </div>
  );
}