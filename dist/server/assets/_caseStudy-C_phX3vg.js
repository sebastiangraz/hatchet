import { jsx } from "react/jsx-runtime";
const PostErrorComponent = () => {
  return /* @__PURE__ */ jsx("p", { children: "Post not found" });
};
const SplitErrorComponent = PostErrorComponent;
export {
  SplitErrorComponent as errorComponent
};
