import React from "react";
import EaseTabs from "./EaseTabs";
import "./EaseTabs.css";

const demoTabs = [
  { label: "Overview", content: <p>This is the overview panel.</p> },
  { label: "Features", content: <p>This is the features panel.</p> },
  { label: "Pricing", content: <p>This is the pricing panel.</p> },
];

export default function EaseTabsDemo() {
  return (
    <EaseTabs
      tabs={demoTabs}
      defaultIndex={0}
      onChange={(i) => console.log("Active tab:", i)}
    />
  );
}
