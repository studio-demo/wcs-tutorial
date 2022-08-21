import React from "react";
import { Fireworks } from "fireworks-js/dist/react";
import { fireworksFxOptions } from "./fireworks-fx-options";
import styles from "./fireworks-fx.module.scss";

export interface FireworksFxProps {
  show?: boolean;
}

export const FireworksFx: React.FC<FireworksFxProps> = ({ show = false }) => {
  return (
    <Fireworks
      className={styles.root}
      enabled={show}
      options={fireworksFxOptions}
    />
  );
};
