import {
  useAlignOptions
} from "./chunk-PSWGZZF5.mjs";
import {
  AlignLeft,
  SelectControl,
  useControlContext
} from "./chunk-S6AGYWVT.mjs";
import "./chunk-557N7CA3.mjs";
import "./chunk-UKSQYAI5.mjs";
import "./chunk-VO7WVXDY.mjs";
import "./chunk-4R5NEFP6.mjs";
import "./chunk-TQYUO2VD.mjs";

// components/RichTextMenu/controls/AlignSelect/loaded.tsx
import { useEditorState } from "@tiptap/react";
import { jsx } from "react/jsx-runtime";
function AlignSelectLoaded() {
  var _a;
  const { options } = useControlContext();
  const alignOptions = useAlignOptions(options);
  const { editor } = useControlContext();
  const currentValue = (_a = useEditorState({
    editor,
    selector: (ctx) => {
      var _a2, _b, _c, _d;
      if ((_a2 = ctx.editor) == null ? void 0 : _a2.isActive({ textAlign: "center" })) {
        return "center";
      } else if ((_b = ctx.editor) == null ? void 0 : _b.isActive({ textAlign: "right" })) {
        return "right";
      } else if ((_c = ctx.editor) == null ? void 0 : _c.isActive({ textAlign: "justify" })) {
        return "justify";
      }
      return (options == null ? void 0 : options.textAlign) ? (_d = options.textAlign.defaultAlignment) != null ? _d : "left" : "left";
    }
  })) != null ? _a : "left";
  const handleChange = (val) => {
    const chain = editor == null ? void 0 : editor.chain();
    chain == null ? void 0 : chain.focus().setTextAlign(val).run();
  };
  return /* @__PURE__ */ jsx(
    SelectControl,
    {
      options: alignOptions,
      onChange: handleChange,
      value: currentValue,
      defaultValue: "left",
      renderDefaultIcon: AlignLeft
    }
  );
}
export {
  AlignSelectLoaded
};
