import {
  useListOptions
} from "./chunk-J262JJJC.mjs";
import {
  List,
  SelectControl,
  useControlContext
} from "./chunk-S6AGYWVT.mjs";
import "./chunk-557N7CA3.mjs";
import "./chunk-UKSQYAI5.mjs";
import "./chunk-VO7WVXDY.mjs";
import "./chunk-4R5NEFP6.mjs";
import "./chunk-TQYUO2VD.mjs";

// components/RichTextMenu/controls/ListSelect/loaded.tsx
import { useEditorState } from "@tiptap/react";
import { jsx } from "react/jsx-runtime";
function ListSelectLoaded() {
  const { options } = useControlContext();
  const listOptions = useListOptions(options);
  const { editor } = useControlContext();
  const currentValue = useEditorState({
    editor,
    selector: (ctx) => {
      var _a, _b;
      if ((_a = ctx.editor) == null ? void 0 : _a.isActive("bulletList")) return "ul";
      if ((_b = ctx.editor) == null ? void 0 : _b.isActive("orderedList")) return "ol";
      return "p";
    }
  });
  const handleChange = (val) => {
    const chain = editor == null ? void 0 : editor.chain();
    if (val === "p") {
      chain == null ? void 0 : chain.focus().setParagraph().run();
    } else if (val === "ol") {
      chain == null ? void 0 : chain.focus().toggleOrderedList().run();
    } else if (val === "ul") {
      chain == null ? void 0 : chain.focus().toggleBulletList().run();
    }
  };
  return /* @__PURE__ */ jsx(
    SelectControl,
    {
      options: listOptions,
      onChange: handleChange,
      value: currentValue != null ? currentValue : "p",
      defaultValue: "p",
      renderDefaultIcon: List
    }
  );
}
export {
  ListSelectLoaded
};
