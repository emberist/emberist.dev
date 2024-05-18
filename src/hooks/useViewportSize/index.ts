import { useDimentionsStore } from "../../components/DimentionsProvider";

const isLarge = (windowWidth: number) => windowWidth >= 1024;
const isMedium = (windowWidth: number) => windowWidth >= 480;
const isMediumOnly = (windowWidth: number) =>
  isMedium(windowWidth) && !isLarge(windowWidth);
const isSmall = (windowWidth: number) => windowWidth >= 0;
const isSmallOnly = (windowWidth: number) =>
  isSmall(windowWidth) && !isMedium(windowWidth);

export const useViewportSize = () => {
  const { windowWidth } = useDimentionsStore();

  return {
    viewportIsLarge: isLarge(windowWidth),
    viewportIsMedium: isMedium(windowWidth),
    viewportIsMediumOnly: isMediumOnly(windowWidth),
    viewportIsSmall: isSmall(windowWidth),
    viewportIsSmallOnly: isSmallOnly(windowWidth),
  };
};

export type ViewportSize = ReturnType<typeof useViewportSize>;
