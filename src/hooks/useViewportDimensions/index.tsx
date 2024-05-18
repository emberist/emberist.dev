import { useDimentionsStore } from "../../components/DimentionsProvider";

export const useViewportDimensions = () => {
  const dimensions = useDimentionsStore();

  return dimensions;
};
