import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./demo";
import { ConfigProvider, theme } from "antd";

createRoot(document.getElementById("container")).render(
  <ConfigProvider
    theme={{
      algorithm: theme.compactAlgorithm
      // components: {
      //   Layout: {
      //     siderBg: "red"
      //   }
      // }
    }}
  >
    <Demo />
  </ConfigProvider>
);
