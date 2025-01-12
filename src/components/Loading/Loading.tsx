import React from "react";
import styles from "./loading.module.scss";

const Loading = (): React.ReactNode => {
  return (
    <div className="w-screen h-screen absolute flex justify-center items-center top-0 left-0 z-10 backdrop-blur-sm bg-[#0000004a] pointer-events-auto">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
