"use client";

import k from "./kit.module.css";

export default function PrintButton() {
  return (
    <button type="button" className={k.printBtn} onClick={() => window.print()}>
      Print the kit ↓
    </button>
  );
}
