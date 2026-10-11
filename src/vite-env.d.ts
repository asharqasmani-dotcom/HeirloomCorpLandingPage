/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom/vitest" />

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
