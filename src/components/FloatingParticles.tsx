import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadLinksPreset } from "tsparticles-preset-links";

export const FloatingParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: "transparent"
        },
        fullScreen: { enable: false },
        style: { position: "absolute", inset: "0", zIndex: "-1", pointerEvents: "none" },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800
            }
          },
          shape: {
            type: ["circle", "square", "triangle", "polygon", "star"]
          }
        }
      }}
    />
  );
};