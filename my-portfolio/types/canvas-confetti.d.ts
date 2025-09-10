// my-portfolio/types/canvas-confetti.d.ts
declare module "canvas-confetti" {
  type ConfettiOptions = Record<string, unknown>;
  const confetti: (opts?: ConfettiOptions) => void;
  export default confetti;
}
