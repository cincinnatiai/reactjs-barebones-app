import { lazy } from "react";

const withDelay = (importFunction: () => Promise<T>, delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunction()), delay);
  });
};

export const LazyFeaturedPage = lazy(() =>
  withDelay(() => import("../pages/FeaturedPage"), 3000)
);
