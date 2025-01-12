import { useLayoutEffect } from "react";

const usePageTitle = (title: string): void => {
  useLayoutEffect(() => {
    document.title = title;
  }, []);
};

export default usePageTitle;
