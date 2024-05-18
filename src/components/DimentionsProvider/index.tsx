import { throttle } from "lodash-es";
import { ReactNode, useEffect } from "react";
import { create } from "zustand";

type DimensionsContext = {
  measured: boolean;
  screenHeight: number;
  screenWidth: number;
  windowHeight: number;
  windowWidth: number;
};

const defaultWidth = 375;
const defaultHeight = 650;

type Props = {
  children: ReactNode;
};

export const useDimentionsStore = create<DimensionsContext>(() => ({
  measured: false,
  screenHeight: defaultHeight,
  screenWidth: defaultWidth,
  windowHeight: defaultHeight,
  windowWidth: defaultWidth,
}));

export const DimensionsProvider = ({ children }: Props) => {
  useEffect(() => {
    useDimentionsStore.setState({
      measured: true,
      screenHeight: window.screen.height,
      screenWidth: window.screen.width,
      windowHeight: document.documentElement.clientHeight,
      windowWidth: document.documentElement.clientWidth,
    });

    const handleChange = throttle(
      () =>
        useDimentionsStore.setState({
          measured: true,
          screenHeight: window.screen.height,
          screenWidth: window.screen.width,
          windowHeight: document.documentElement.clientHeight,
          windowWidth: document.documentElement.clientWidth,
        }),
      300,
      {
        trailing: true,
      }
    );

    window.addEventListener("resize", handleChange);

    return () => {
      handleChange.cancel();
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return <>{children}</>;
};
