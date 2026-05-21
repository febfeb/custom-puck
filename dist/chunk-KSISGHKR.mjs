import {
  EditorInner,
  LoadedRichTextMenu
} from "./chunk-NNV6SLHC.mjs";
import {
  RichTextRenderFallback,
  SlotRender,
  SlotRenderPure,
  buildMappers,
  getSlotTransform,
  useRichtextProps,
  useSlots
} from "./chunk-GVXNB4OV.mjs";
import {
  ActionBar,
  IconButton,
  LoadedRichTextMenuInner,
  Loader
} from "./chunk-KBKAMTFH.mjs";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheckBig,
  Copy,
  CornerLeftUp,
  EllipsisVertical,
  Expand,
  Globe,
  Hammer,
  Hash,
  Layers,
  LayoutGrid,
  Link,
  List,
  Lock,
  LockOpen,
  Maximize2,
  Minimize2,
  Monitor,
  PanelLeft,
  PanelRight,
  Plus,
  RectangleEllipsis,
  Redo2,
  Search,
  SlidersHorizontal,
  Smartphone,
  Tablet,
  ToyBrick,
  Trash,
  Type,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
  appStoreContext,
  createAppStore,
  getBox,
  monitorHotkeys,
  reorder,
  replace,
  useAppStore,
  useAppStoreApi,
  useHotkey,
  useMonitorHotkeys,
  useRegisterFieldsSlice,
  useRegisterHistorySlice,
  useRegisterPermissionsSlice,
  useResetAutoZoom
} from "./chunk-S6AGYWVT.mjs";
import {
  generateId,
  getItem,
  insert,
  insertAction,
  makeStatePublic,
  populateIds
} from "./chunk-557N7CA3.mjs";
import {
  defaultAppState,
  defaultViewports
} from "./chunk-UKSQYAI5.mjs";
import {
  get_class_name_factory_default
} from "./chunk-VO7WVXDY.mjs";
import {
  defaultSlots,
  expandNode,
  mapFields,
  rootAreaId,
  rootDroppableId,
  rootZone,
  setupZone,
  toComponent,
  walkAppState,
  walkField
} from "./chunk-4R5NEFP6.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-TQYUO2VD.mjs";

// types/API/Overrides.ts
var overrideKeys = [
  "header",
  "headerActions",
  "fields",
  "fieldLabel",
  "drawer",
  "drawerItem",
  "componentOverlay",
  "outline",
  "puck",
  "preview"
];

// lib/data/set-deep.ts
function setDeep(node, path, newVal) {
  const parts = path.split(".");
  const newNode = __spreadValues({}, node);
  let cur = newNode;
  for (let i = 0; i < parts.length; i++) {
    const [prop, idxStr] = parts[i].replace("]", "").split("[");
    const isLast = i === parts.length - 1;
    if (idxStr !== void 0) {
      if (!Array.isArray(cur[prop])) {
        cur[prop] = [];
      }
      const idx = Number(idxStr);
      if (isLast) {
        cur[prop][idx] = newVal;
        continue;
      }
      if (cur[prop][idx] === void 0) cur[prop][idx] = {};
      cur = cur[prop][idx];
      continue;
    }
    if (isLast) {
      cur[prop] = newVal;
      continue;
    }
    if (cur[prop] === void 0) {
      cur[prop] = {};
    }
    cur = cur[prop];
  }
  return __spreadValues(__spreadValues({}, node), newNode);
}

// components/Button/Button.tsx
import { useEffect, useState } from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/Button/Button.module.css#css-module
var Button_module_default = { "Button": "_Button_10byl_1", "Button--medium": "_Button--medium_10byl_29", "Button--large": "_Button--large_10byl_37", "Button-icon": "_Button-icon_10byl_44", "Button--primary": "_Button--primary_10byl_48", "Button--secondary": "_Button--secondary_10byl_67", "Button--flush": "_Button--flush_10byl_84", "Button--disabled": "_Button--disabled_10byl_88", "Button--fullWidth": "_Button--fullWidth_10byl_95", "Button-spinner": "_Button-spinner_10byl_100" };

// lib/filter-data-attrs.ts
var dataAttrRe = /^(data-.*)$/;
var filterDataAttrs = (props) => {
  let filteredProps = {};
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && dataAttrRe.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
};

// components/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("Button", Button_module_default);
var Button = (_a) => {
  var _b = _a, {
    children,
    href,
    onClick,
    variant = "primary",
    type,
    disabled,
    tabIndex,
    newTab,
    fullWidth,
    icon,
    size = "medium",
    loading: loadingProp = false
  } = _b, props = __objRest(_b, [
    "children",
    "href",
    "onClick",
    "variant",
    "type",
    "disabled",
    "tabIndex",
    "newTab",
    "fullWidth",
    "icon",
    "size",
    "loading"
  ]);
  const [loading, setLoading] = useState(loadingProp);
  useEffect(() => setLoading(loadingProp), [loadingProp]);
  const ElementType = href ? "a" : type ? "button" : "span";
  const dataAttrs = filterDataAttrs(props);
  const el = /* @__PURE__ */ jsxs(
    ElementType,
    __spreadProps(__spreadValues({
      className: getClassName({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth,
        [size]: true
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href
    }, dataAttrs), {
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: getClassName("icon"), children: icon }),
        children,
        loading && /* @__PURE__ */ jsx("div", { className: getClassName("spinner"), children: /* @__PURE__ */ jsx(Loader, { size: 14 }) })
      ]
    })
  );
  return el;
};

// css-module:/Users/feb/HTDocs/custom-puck/components/AutoField/styles.module.css#css-module
var styles_module_default = { "InputWrapper": "_InputWrapper_bsxfo_1", "Input-label": "_Input-label_bsxfo_5", "Input-labelIcon": "_Input-labelIcon_bsxfo_14", "Input-disabledIcon": "_Input-disabledIcon_bsxfo_21", "Input-input": "_Input-input_bsxfo_26", "Input": "_Input_bsxfo_1", "Input--readOnly": "_Input--readOnly_bsxfo_82", "Input-radioGroupItems": "_Input-radioGroupItems_bsxfo_93", "Input-radio": "_Input-radio_bsxfo_93", "Input-radioInner": "_Input-radioInner_bsxfo_110", "Input-radioInput": "_Input-radioInput_bsxfo_155" };

// components/AutoField/FieldLabel.tsx
import { useMemo } from "react";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var getClassName2 = get_class_name_factory_default("Input", styles_module_default);
var FieldLabel = ({
  children,
  icon,
  label,
  el = "label",
  readOnly,
  className
}) => {
  const El = el;
  return /* @__PURE__ */ jsxs2(El, { className, children: [
    /* @__PURE__ */ jsxs2("div", { className: getClassName2("label"), children: [
      icon ? /* @__PURE__ */ jsx2("div", { className: getClassName2("labelIcon"), children: icon }) : /* @__PURE__ */ jsx2(Fragment, {}),
      label,
      readOnly && /* @__PURE__ */ jsx2("div", { className: getClassName2("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ jsx2(Lock, { size: "12" }) })
    ] }),
    children
  ] });
};
var FieldLabelInternal = ({
  children,
  icon,
  label,
  el = "label",
  readOnly
}) => {
  const overrides = useAppStore((s) => s.overrides);
  const Wrapper = useMemo(
    () => overrides.fieldLabel || FieldLabel,
    [overrides]
  );
  if (!label) {
    return /* @__PURE__ */ jsx2(Fragment, { children });
  }
  return /* @__PURE__ */ jsx2(
    Wrapper,
    {
      label,
      icon,
      className: getClassName2({ readOnly }),
      readOnly,
      el,
      children
    }
  );
};

// components/AutoField/index.tsx
import {
  useCallback as useCallback4,
  useContext as useContext4,
  useEffect as useEffect7,
  useMemo as useMemo5
} from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/AutoField/fields/ArrayField/styles.module.css#css-module
var styles_module_default2 = { "ArrayField": "_ArrayField_1vaho_5", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_1vaho_13", "ArrayField-addButton": "_ArrayField-addButton_1vaho_18", "ArrayField--hasItems": "_ArrayField--hasItems_1vaho_33", "ArrayField-inner": "_ArrayField-inner_1vaho_59", "ArrayFieldItem": "_ArrayFieldItem_1vaho_67", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_1vaho_78", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_1vaho_82", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_1vaho_97", "ArrayFieldItem--noFields": "_ArrayFieldItem--noFields_1vaho_122", "ArrayField--addDisabled": "_ArrayField--addDisabled_1vaho_131", "ArrayFieldItem-body": "_ArrayFieldItem-body_1vaho_170", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_1vaho_179", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_1vaho_187", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_1vaho_193" };

// components/AutoField/store.ts
import { useContext as useContext2 } from "react";
import { useShallow as useShallow2 } from "zustand/react/shallow";

// lib/use-context-store.tsx
import { createContext, useContext, useState as useState2 } from "react";
import { createStore, useStore } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import { jsx as jsx3 } from "react/jsx-runtime";
function useContextStore(context, selector) {
  const store = useContext(context);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return useStore(store, useShallow(selector));
}
function createStoreProvider(ContextComponent) {
  const StoreProvider = ({
    children,
    value
  }) => {
    const [store] = useState2(() => createStore(() => value));
    return /* @__PURE__ */ jsx3(ContextComponent.Provider, { value: store, children });
  };
  return StoreProvider;
}
function createContextStore(defaultValue) {
  const ctx = createContext(
    createStore(subscribeWithSelector(() => defaultValue))
  );
  return {
    ctx,
    Provider: createStoreProvider(ctx)
  };
}

// components/AutoField/store.ts
import { useStore as useStore2 } from "zustand";
var fieldContextStore = createContextStore({});
var useFieldStoreApi = () => useContext2(fieldContextStore.ctx);
function useFieldStore(selector) {
  const store = useContext2(fieldContextStore.ctx);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return useStore2(store, useShallow2(selector));
}

// components/AutoField/fields/ArrayField/index.tsx
import {
  memo as memo2,
  useCallback,
  useEffect as useEffect2,
  useMemo as useMemo3,
  useRef,
  useState as useState4
} from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/DragIcon/styles.module.css#css-module
var styles_module_default3 = { "DragIcon": "_DragIcon_17p8x_1", "DragIcon--disabled": "_DragIcon--disabled_17p8x_8" };

// components/DragIcon/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var getClassName3 = get_class_name_factory_default("DragIcon", styles_module_default3);
var DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ jsx4("div", { className: getClassName3({ disabled: isDragDisabled }), children: /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 20 20", width: "12", fill: "currentColor", children: /* @__PURE__ */ jsx4("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }) }) });

// components/Sortable/index.tsx
import { DragDropProvider } from "@dnd-kit/react";

// lib/dnd/use-sensors.ts
import { useState as useState3 } from "react";
import { PointerSensor } from "@dnd-kit/react";
import { PointerActivationConstraints } from "@dnd-kit/dom";
import { isElement } from "@dnd-kit/dom/utilities";
var { Delay, Distance } = PointerActivationConstraints;
var touchDefault = [
  new Delay({ value: 200, tolerance: 10 })
];
var otherDefault = [
  new Delay({ value: 200, tolerance: 10 }),
  new Distance({ value: 5 })
];
var useSensors = ({
  other = otherDefault,
  mouse,
  touch = touchDefault
} = {
  touch: touchDefault,
  other: otherDefault
}) => {
  const [sensors] = useState3(() => [
    PointerSensor.configure({
      activationConstraints(event, source) {
        var _a;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && isElement(target) && (source.handle === target || ((_a = source.handle) == null ? void 0 : _a.contains(target)))) {
          return mouse;
        }
        if (pointerType === "touch") {
          return touch;
        }
        return other;
      }
    })
  ]);
  return sensors;
};

// lib/dnd/collision/dynamic/index.ts
import {
  CollisionPriority as CollisionPriority7,
  CollisionType as CollisionType7
} from "@dnd-kit/abstract";

// lib/dnd/collision/directional/index.ts
import { CollisionType } from "@dnd-kit/abstract";

// lib/dnd/collision/collision-debug.ts
var DEBUG = false;
var debugElements = {};
var timeout;
var collisionDebug = (a, b, id, color, label) => {
  if (!DEBUG) return;
  const debugId = `${id}-debug`;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    Object.entries(debugElements).forEach(([id2, { svg }]) => {
      svg.remove();
      delete debugElements[id2];
    });
  }, 1e3);
  requestAnimationFrame(() => {
    var _a, _b;
    const existingEl = debugElements[debugId];
    let line = (_a = debugElements[debugId]) == null ? void 0 : _a.line;
    let text = (_b = debugElements[debugId]) == null ? void 0 : _b.text;
    if (!existingEl) {
      const svgNs = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNs, "svg");
      line = document.createElementNS(svgNs, "line");
      text = document.createElementNS(svgNs, "text");
      svg.setAttribute("id", debugId);
      svg.setAttribute(
        "style",
        "position: fixed; height: 100%; width: 100%; pointer-events: none; top: 0px; left: 0px;"
      );
      svg.appendChild(line);
      svg.appendChild(text);
      text.setAttribute("fill", `black`);
      document.body.appendChild(svg);
      debugElements[debugId] = { svg, line, text };
    }
    line.setAttribute("x1", a.x.toString());
    line.setAttribute("x2", b.x.toString());
    line.setAttribute("y1", a.y.toString());
    line.setAttribute("y2", b.y.toString());
    line.setAttribute("style", `stroke:${color};stroke-width:2`);
    text.setAttribute("x", (a.x - (a.x - b.x) / 2).toString());
    text.setAttribute("y", (a.y - (a.y - b.y) / 2).toString());
    if (label) {
      text.innerHTML = label;
    }
  });
};

// lib/dnd/collision/directional/index.ts
var distanceChange = "increasing";
var directionalCollision = (input, previous) => {
  var _a;
  const { dragOperation, droppable } = input;
  const { shape: dropShape } = droppable;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  if (!dragShape || !dropShape) return null;
  const dropCenter = dropShape.center;
  const distanceToPrevious = Math.sqrt(
    Math.pow(dropCenter.x - previous.x, 2) + Math.pow(dropCenter.y - previous.y, 2)
  );
  const distanceToCurrent = Math.sqrt(
    Math.pow(dropCenter.x - position.current.x, 2) + Math.pow(dropCenter.y - position.current.y, 2)
  );
  distanceChange = distanceToCurrent === distanceToPrevious ? distanceChange : distanceToCurrent < distanceToPrevious ? "decreasing" : "increasing";
  collisionDebug(
    dragShape.center,
    dropCenter,
    droppable.id.toString(),
    "rebeccapurple"
  );
  if (distanceChange === "decreasing") {
    return {
      id: droppable.id,
      value: 1,
      type: CollisionType.Collision
    };
  }
  return null;
};

// lib/dnd/collision/dynamic/get-direction.ts
var getDirection = (dragAxis, delta) => {
  if (dragAxis === "dynamic") {
    if (Math.abs(delta.y) > Math.abs(delta.x)) {
      return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
    } else {
      return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
    }
  } else if (dragAxis === "x") {
    return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
  }
  return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
};

// lib/dnd/collision/dynamic/get-midpoint-impact.ts
var getMidpointImpact = (dragShape, dropShape, direction, offsetMultiplier = 0) => {
  const dragRect = dragShape.boundingRectangle;
  const dropCenter = dropShape.center;
  if (direction === "down") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.bottom >= dropCenter.y + offset2;
  } else if (direction === "up") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.top < dropCenter.y - offset2;
  } else if (direction === "left") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.width;
    return dropCenter.x - offset2 >= dragRect.left;
  }
  const offset = offsetMultiplier * dropShape.boundingRectangle.width;
  return dragRect.right - offset >= dropCenter.x;
};

// lib/dnd/collision/dynamic/track-movement-interval.ts
import { Point } from "@dnd-kit/geometry";
var INTERVAL_SENSITIVITY = 10;
var intervalCache = {
  current: { x: 0, y: 0 },
  delta: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  direction: null
};
var trackMovementInterval = (point, dragAxis = "dynamic") => {
  intervalCache.current = point;
  intervalCache.delta = {
    x: point.x - intervalCache.previous.x,
    y: point.y - intervalCache.previous.y
  };
  intervalCache.direction = getDirection(dragAxis, intervalCache.delta) || intervalCache.direction;
  if (Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY || Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY) {
    intervalCache.previous = Point.from(point);
  }
  return intervalCache;
};

// node_modules/@dnd-kit/collision/dist/index.js
import { CollisionPriority, CollisionType as CollisionType2 } from "@dnd-kit/abstract";
import { Point as Point2 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority2, CollisionType as CollisionType22 } from "@dnd-kit/abstract";
import { Point as Point22 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority3, CollisionType as CollisionType3 } from "@dnd-kit/abstract";
import { Point as Point3, Rectangle } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority4, CollisionType as CollisionType4 } from "@dnd-kit/abstract";
import { Point as Point4 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority5, CollisionType as CollisionType5 } from "@dnd-kit/abstract";
import { Point as Point5 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority6, CollisionType as CollisionType6 } from "@dnd-kit/abstract";
import { Point as Point6 } from "@dnd-kit/geometry";
var pointerIntersection = ({
  dragOperation,
  droppable
}) => {
  const pointerCoordinates = dragOperation.position.current;
  if (!pointerCoordinates) {
    return null;
  }
  const { id } = droppable;
  if (!droppable.shape) {
    return null;
  }
  if (droppable.shape.containsPoint(pointerCoordinates)) {
    const distance = Point2.distance(droppable.shape.center, pointerCoordinates);
    return {
      id,
      value: 1 / distance,
      type: CollisionType2.PointerIntersection,
      priority: CollisionPriority.High
    };
  }
  return null;
};
var closestCorners = (input) => {
  const { dragOperation, droppable } = input;
  const { shape, position } = dragOperation;
  if (!droppable.shape) {
    return null;
  }
  const shapeCorners = shape ? Rectangle.from(shape.current.boundingRectangle).corners : void 0;
  const distance = Rectangle.from(
    droppable.shape.boundingRectangle
  ).corners.reduce(
    (acc, corner, index) => {
      var _a;
      return acc + Point3.distance(
        Point3.from(corner),
        (_a = shapeCorners == null ? void 0 : shapeCorners[index]) != null ? _a : position.current
      );
    },
    0
  );
  const value = distance / 4;
  return {
    id: droppable.id,
    value: 1 / value,
    type: CollisionType3.Collision,
    priority: CollisionPriority3.Normal
  };
};

// lib/dnd/collision/dynamic/store.ts
import { createStore as createStore2 } from "zustand/vanilla";
var collisionStore = createStore2(() => ({
  fallbackEnabled: false
}));

// lib/dnd/collision/dynamic/index.ts
var flushNext = "";
var createDynamicCollisionDetector = (dragAxis, midpointOffset = 0.05) => ((input) => {
  var _a, _b, _c, _d, _e;
  const { dragOperation, droppable } = input;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  const { shape: dropShape } = droppable;
  if (!dragShape || !dropShape) {
    return null;
  }
  const { center: dragCenter } = dragShape;
  const { fallbackEnabled } = collisionStore.getState();
  const interval = trackMovementInterval(position.current, dragAxis);
  const data = {
    direction: interval.direction
  };
  const { center: dropCenter } = dropShape;
  const overMidpoint = getMidpointImpact(
    dragShape,
    dropShape,
    interval.direction,
    midpointOffset
  );
  if (((_b = dragOperation.source) == null ? void 0 : _b.id) === droppable.id) {
    const collision = directionalCollision(input, interval.previous);
    collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "yellow");
    if (collision) {
      return __spreadProps(__spreadValues({}, collision), {
        priority: CollisionPriority7.Highest,
        data
      });
    }
  }
  const intersectionArea = dragShape.intersectionArea(dropShape);
  const intersectionRatio = intersectionArea / dropShape.area;
  if (intersectionArea && overMidpoint) {
    collisionDebug(
      dragCenter,
      dropCenter,
      droppable.id.toString(),
      "green",
      interval.direction
    );
    const collision = {
      id: droppable.id,
      value: intersectionRatio,
      priority: CollisionPriority7.High,
      type: CollisionType7.Collision
    };
    const shouldFlushId = flushNext === droppable.id;
    flushNext = "";
    return __spreadProps(__spreadValues({}, collision), { id: shouldFlushId ? "flush" : collision.id, data });
  }
  if (fallbackEnabled && ((_c = dragOperation.source) == null ? void 0 : _c.id) !== droppable.id) {
    const xAxisIntersection = dropShape.boundingRectangle.right > dragShape.boundingRectangle.left && dropShape.boundingRectangle.left < dragShape.boundingRectangle.right;
    const yAxisIntersection = dropShape.boundingRectangle.bottom > dragShape.boundingRectangle.top && dropShape.boundingRectangle.top < dragShape.boundingRectangle.bottom;
    if (dragAxis === "y" && xAxisIntersection || yAxisIntersection) {
      const fallbackCollision = closestCorners(input);
      if (fallbackCollision) {
        const direction = getDirection(dragAxis, {
          x: dragShape.center.x - (((_d = droppable.shape) == null ? void 0 : _d.center.x) || 0),
          y: dragShape.center.y - (((_e = droppable.shape) == null ? void 0 : _e.center.y) || 0)
        });
        data.direction = direction;
        if (intersectionArea) {
          collisionDebug(
            dragCenter,
            dropCenter,
            droppable.id.toString(),
            "red",
            direction || ""
          );
          flushNext = droppable.id;
          return __spreadProps(__spreadValues({}, fallbackCollision), {
            priority: CollisionPriority7.Low,
            data
          });
        }
        collisionDebug(
          dragCenter,
          dropCenter,
          droppable.id.toString(),
          "orange",
          direction || ""
        );
        return __spreadProps(__spreadValues({}, fallbackCollision), {
          priority: CollisionPriority7.Lowest,
          data
        });
      }
    }
  }
  collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "hotpink");
  return null;
});

// components/Sortable/index.tsx
import { useSortable } from "@dnd-kit/react/sortable";
import { PointerActivationConstraints as PointerActivationConstraints2 } from "@dnd-kit/dom";
import { jsx as jsx5 } from "react/jsx-runtime";
var SortableProvider = ({
  children,
  onDragStart,
  onDragEnd,
  onMove
}) => {
  const sensors = useSensors({
    mouse: [new PointerActivationConstraints2.Distance({ value: 5 })]
  });
  return /* @__PURE__ */ jsx5(
    DragDropProvider,
    {
      sensors,
      onDragStart: (event) => {
        var _a, _b;
        return onDragStart((_b = (_a = event.operation.source) == null ? void 0 : _a.id.toString()) != null ? _b : "");
      },
      onDragOver: (event, manager) => {
        var _a;
        event.preventDefault();
        const { operation } = event;
        const { source, target } = operation;
        if (!source || !target) return;
        let sourceIndex = source.data.index;
        let targetIndex = target.data.index;
        const collisionData = (_a = manager.collisionObserver.collisions[0]) == null ? void 0 : _a.data;
        if (sourceIndex !== targetIndex && source.id !== target.id) {
          const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" ? "before" : "after";
          if (targetIndex >= sourceIndex) {
            targetIndex = targetIndex - 1;
          }
          if (collisionPosition === "after") {
            targetIndex = targetIndex + 1;
          }
          onMove({
            source: sourceIndex,
            target: targetIndex
          });
        }
      },
      onDragEnd: () => {
        setTimeout(() => {
          onDragEnd();
        }, 250);
      },
      children
    }
  );
};
var Sortable = ({
  id,
  index,
  disabled,
  children,
  type = "item"
}) => {
  const {
    ref: sortableRef,
    isDragging,
    isDropping,
    handleRef
  } = useSortable({
    id,
    type,
    index,
    disabled,
    data: { index },
    collisionDetector: createDynamicCollisionDetector("y")
  });
  return children({ isDragging, isDropping, ref: sortableRef, handleRef });
};

// components/AutoField/context.tsx
import { createContext as createContext2, useContext as useContext3, useMemo as useMemo2 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var NestedFieldContext = createContext2({});
var useNestedFieldContext = () => {
  const context = useContext3(NestedFieldContext);
  return __spreadProps(__spreadValues({}, context), {
    readOnlyFields: context.readOnlyFields || {}
  });
};
var NestedFieldProvider = ({
  children,
  name,
  subName,
  wildcardName = name,
  readOnlyFields
}) => {
  const subPath = `${name}.${subName}`;
  const wildcardSubPath = `${wildcardName}.${subName}`;
  const subReadOnlyFields = useMemo2(
    () => Object.keys(readOnlyFields).reduce((acc, readOnlyKey) => {
      const isLocal = readOnlyKey.indexOf(subPath) > -1 || readOnlyKey.indexOf(wildcardSubPath) > -1;
      if (isLocal) {
        const subPathPattern = new RegExp(
          `^(${name}|${wildcardName}).`.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\./g, "\\.").replace(/\*/g, "\\*")
        );
        const localName = readOnlyKey.replace(subPathPattern, "");
        return __spreadProps(__spreadValues({}, acc), {
          [localName]: readOnlyFields[readOnlyKey]
        });
      }
      return acc;
    }, {}),
    [name, subName, wildcardName, readOnlyFields]
  );
  return /* @__PURE__ */ jsx6(
    NestedFieldContext.Provider,
    {
      value: { readOnlyFields: subReadOnlyFields, localName: subName },
      children
    }
  );
};

// lib/data/get-deep.ts
var getDeep = (node, path) => {
  const pathParts = path.split(".");
  return pathParts.reduce((acc, item) => {
    if (!acc) return;
    const [prop, indexStr] = item.replace("]", "").split("[");
    const val = acc[prop];
    if (indexStr && val) {
      return val[parseInt(indexStr)];
    }
    return val;
  }, node);
};

// components/AutoField/subfield.tsx
import { memo } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var SubFieldInternal = ({
  field,
  id,
  index,
  name,
  subName,
  localName,
  onChange,
  forceReadOnly
}) => {
  const indexName = typeof index !== "undefined" ? `${name}[${index}]` : name;
  const subPath = name ? `${indexName}.${subName}` : subName;
  const localIndexName = typeof index !== "undefined" ? `${localName}[${index}]` : localName != null ? localName : subName;
  const localWildcardName = typeof index !== "undefined" ? `${localName}[*]` : localName;
  const localSubPath = `${localIndexName}.${subName}`;
  const localWildcardSubPath = `${localWildcardName}.${subName}`;
  const { readOnlyFields } = useNestedFieldContext();
  const subReadOnly = forceReadOnly ? forceReadOnly : typeof readOnlyFields[subPath] !== "undefined" ? readOnlyFields[localSubPath] : readOnlyFields[localWildcardSubPath];
  const label = field.label || subName;
  return /* @__PURE__ */ jsx7(
    NestedFieldProvider,
    {
      name: localIndexName,
      wildcardName: localWildcardName,
      subName,
      readOnlyFields,
      children: /* @__PURE__ */ jsx7(
        AutoFieldPrivate,
        {
          name: subPath,
          label,
          id,
          readOnly: subReadOnly,
          field: __spreadProps(__spreadValues({}, field), {
            label
            // May be used by custom fields
          }),
          onChange: (val, ui) => {
            onChange(val, ui, subName);
          }
        }
      )
    }
  );
};
var SubField = memo(SubFieldInternal);

// components/AutoField/fields/ArrayField/index.tsx
import { Fragment as Fragment2, jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var getClassName4 = get_class_name_factory_default("ArrayField", styles_module_default2);
var getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default2);
var ItemSummaryInner = ({
  index,
  originalIndex,
  field,
  name
}) => {
  const data = useFieldStore((s) => {
    const path = `${[name]}[${index}]`;
    return getDeep(s, path);
  });
  const itemSummary = useMemo3(() => {
    if (data && field.getItemSummary) {
      return field.getItemSummary(data, index);
    }
    return `Item #${originalIndex}`;
  }, [data, field, originalIndex, index]);
  return itemSummary;
};
var ItemSummary = memo2(ItemSummaryInner);
var ArrayFieldItemInternal = ({
  id,
  arrayId,
  index,
  dragIndex,
  originalIndex,
  field,
  onChange,
  onToggleExpand,
  readOnly,
  actions,
  name,
  localName
}) => {
  const isExpanded = useAppStore((s) => {
    var _a;
    return ((_a = s.state.ui.arrayState[arrayId]) == null ? void 0 : _a.openId) === id;
  });
  const canEdit = useAppStore(
    (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
  );
  const hasVisibleFields = useMemo3(() => {
    if (!field.arrayFields) {
      return false;
    }
    return Object.values(field.arrayFields).some(
      (subField) => subField.type !== "slot" && subField.visible !== false
    );
  }, [field.arrayFields]);
  return /* @__PURE__ */ jsx8(Sortable, { id, index: dragIndex, disabled: readOnly, children: ({ isDragging, ref, handleRef }) => /* @__PURE__ */ jsxs3(
    "div",
    {
      ref,
      className: getClassNameItem({
        isExpanded: isExpanded && hasVisibleFields,
        isDragging,
        noFields: !hasVisibleFields
      }),
      children: [
        /* @__PURE__ */ jsxs3(
          "div",
          {
            ref: handleRef,
            onClick: (e) => {
              if (isDragging) return;
              e.preventDefault();
              e.stopPropagation();
              if (!hasVisibleFields) return;
              onToggleExpand(id, isExpanded);
            },
            className: getClassNameItem("summary"),
            children: [
              /* @__PURE__ */ jsx8(
                ItemSummary,
                {
                  index,
                  originalIndex,
                  field,
                  name
                }
              ),
              /* @__PURE__ */ jsxs3("div", { className: getClassNameItem("rhs"), children: [
                !readOnly && /* @__PURE__ */ jsx8("div", { className: getClassNameItem("actions"), children: actions }),
                /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsx8(DragIcon, {}) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx8("div", { className: getClassNameItem("body"), children: isExpanded && hasVisibleFields && /* @__PURE__ */ jsx8("fieldset", { className: getClassNameItem("fieldset"), children: Object.keys(field.arrayFields).map((subName) => {
          const subField = field.arrayFields[subName];
          return /* @__PURE__ */ jsx8(
            SubField,
            {
              id: `${id}_${subName}`,
              name,
              index,
              subName,
              localName,
              field: subField,
              onChange,
              forceReadOnly: !canEdit
            },
            `${id}_${subName}_${index}`
          );
        }) }) })
      ]
    }
  ) });
};
var ArrayFieldItem = memo2(ArrayFieldItemInternal);
var ArrayField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  readOnly,
  Label = (props) => /* @__PURE__ */ jsx8("div", __spreadValues({}, props))
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const appStoreApi = useAppStoreApi();
  const fieldStore = useFieldStoreApi();
  const { localName = name } = useNestedFieldContext();
  const getValue = () => {
    var _a;
    return (_a = getDeep(fieldStore.getState(), name)) != null ? _a : [];
  };
  const getArrayState = useCallback(() => {
    var _a;
    const { state } = appStoreApi.getState();
    const thisState = state.ui.arrayState[id];
    if ((_a = thisState == null ? void 0 : thisState.items) == null ? void 0 : _a.length) return thisState;
    const value = getValue();
    return {
      items: Array.from(value || []).map((item, idx) => {
        return {
          _originalIndex: idx,
          _currentIndex: idx,
          _arrayId: `${id}-${idx}`
        };
      }),
      openId: ""
    };
  }, [appStoreApi, id, getValue, name]);
  const numItems = useFieldStore(() => {
    return getValue().length;
  });
  const defaultArrayState = useMemo3(getArrayState, [getArrayState]);
  const mirror = useAppStore((s) => {
    const thisArrayState = s.state.ui.arrayState[id];
    return thisArrayState != null ? thisArrayState : defaultArrayState;
  });
  const appStore = useAppStoreApi();
  const mapArrayStateToUi = useCallback(
    (partialArrayState) => {
      const state = appStore.getState().state;
      return {
        arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
          [id]: __spreadValues(__spreadValues({}, getArrayState()), partialArrayState)
        })
      };
    },
    [appStore]
  );
  const getHighestIndex = useCallback(() => {
    return getArrayState().items.reduce(
      (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
      -1
    );
  }, []);
  const regenerateArrayState = useCallback((value) => {
    let highestIndex = getHighestIndex();
    const arrayState = getArrayState();
    const newItems = Array.from(value || []).map((item, idx) => {
      var _a, _b, _c;
      const arrayStateItem = arrayState.items[idx];
      const newItem = {
        _originalIndex: (_a = arrayStateItem == null ? void 0 : arrayStateItem._originalIndex) != null ? _a : highestIndex + 1,
        _currentIndex: (_b = arrayStateItem == null ? void 0 : arrayStateItem._currentIndex) != null ? _b : idx,
        _arrayId: ((_c = arrayState.items[idx]) == null ? void 0 : _c._arrayId) || `${id}-${highestIndex + 1}`
      };
      if (newItem._originalIndex > highestIndex) {
        highestIndex = newItem._originalIndex;
      }
      return newItem;
    });
    return __spreadProps(__spreadValues({}, arrayState), { items: newItems });
  }, []);
  const [draggedItem, setDraggedItem] = useState4("");
  const isDraggingAny = !!draggedItem;
  const valueRef = useRef([]);
  useEffect2(() => {
    valueRef.current = getValue();
  }, []);
  const uniqifyItem = useCallback(
    (val) => {
      if (field.type !== "array" || !field.arrayFields) return;
      const config = appStore.getState().config;
      return walkField({
        value: val,
        fields: field.arrayFields,
        mappers: {
          slot: ({ value }) => {
            const content = value;
            return content.map((item) => populateIds(item, config, true));
          }
        },
        config
      });
    },
    [appStore, field]
  );
  const syncCurrentIndexes = useCallback(() => {
    const arrayState = getArrayState();
    const newArrayStateItems = arrayState.items.map((item, index) => __spreadProps(__spreadValues({}, item), {
      _currentIndex: index
    }));
    const state = appStore.getState().state;
    const newUi = {
      arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
        [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
      })
    };
    setUi(newUi, false);
  }, []);
  const updateValue = useCallback(
    (newValue) => {
      const newArrayState = regenerateArrayState(newValue);
      setUi(mapArrayStateToUi(newArrayState), false);
      onChange(newValue);
    },
    [regenerateArrayState, setUi, mapArrayStateToUi, onChange]
  );
  useEffect2(() => {
    const newArrayState = regenerateArrayState(getValue());
    setUi(mapArrayStateToUi(newArrayState), false);
  }, [numItems]);
  if (field.type !== "array" || !field.arrayFields) {
    return null;
  }
  const addDisabled = field.max !== void 0 && (mirror == null ? void 0 : mirror.items.length) >= field.max || readOnly;
  return /* @__PURE__ */ jsx8(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx8(List, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsx8(
        SortableProvider,
        {
          onDragStart: (id2) => {
            valueRef.current = getValue();
            setDraggedItem(id2);
            syncCurrentIndexes();
          },
          onDragEnd: () => {
            setDraggedItem("");
            onChange(valueRef.current);
            const currentFieldVal = fieldStore.getState();
            fieldStore.setState(setDeep(currentFieldVal, name, valueRef.current));
            syncCurrentIndexes();
          },
          onMove: (move) => {
            const arrayState = getArrayState();
            if (arrayState.items[move.source]._arrayId !== draggedItem) {
              return;
            }
            const newValue = reorder(valueRef.current, move.source, move.target);
            const newArrayStateItems = reorder(
              arrayState.items,
              move.source,
              move.target
            );
            const state = appStore.getState().state;
            const newUi = {
              arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
                [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
              })
            };
            setUi(newUi, false);
            valueRef.current = newValue;
          },
          children: /* @__PURE__ */ jsxs3(
            "div",
            {
              className: getClassName4({
                hasItems: numItems > 0,
                addDisabled
              }),
              children: [
                mirror.items.length > 0 && /* @__PURE__ */ jsx8("div", { className: getClassName4("inner"), "data-dnd-container": true, children: mirror.items.map((item, index) => {
                  const {
                    _arrayId = `${id}-${index}`,
                    _originalIndex = index,
                    _currentIndex = index
                  } = item;
                  return /* @__PURE__ */ jsx8(
                    ArrayFieldItem,
                    {
                      index: _currentIndex,
                      dragIndex: index,
                      originalIndex: _originalIndex,
                      arrayId: id,
                      id: _arrayId,
                      readOnly,
                      field,
                      name,
                      localName,
                      onChange: (val, ui, subName) => {
                        const value = getValue();
                        const data = Array.from(value || [])[index] || {};
                        onChange(
                          replace(value, index, __spreadProps(__spreadValues({}, data), {
                            [subName]: val
                          })),
                          ui
                        );
                      },
                      onToggleExpand: (id2, isExpanded) => {
                        if (isExpanded) {
                          setUi(
                            mapArrayStateToUi({
                              openId: ""
                            })
                          );
                        } else {
                          setUi(
                            mapArrayStateToUi({
                              openId: id2
                            })
                          );
                        }
                      },
                      actions: /* @__PURE__ */ jsxs3(Fragment2, { children: [
                        /* @__PURE__ */ jsx8("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsx8(
                          IconButton,
                          {
                            type: "button",
                            disabled: !!addDisabled,
                            onClick: (e) => {
                              e.stopPropagation();
                              const value = getValue();
                              const existingValue = [...value || []];
                              const newItem = uniqifyItem(existingValue[index]);
                              existingValue.splice(index, 0, newItem);
                              updateValue(existingValue);
                            },
                            title: "Duplicate",
                            children: /* @__PURE__ */ jsx8(Copy, { size: 16 })
                          }
                        ) }),
                        /* @__PURE__ */ jsx8("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsx8(
                          IconButton,
                          {
                            type: "button",
                            disabled: field.min !== void 0 && field.min >= mirror.items.length,
                            onClick: (e) => {
                              e.stopPropagation();
                              const value = getValue();
                              const existingValue = [...value || []];
                              existingValue.splice(index, 1);
                              updateValue(existingValue);
                            },
                            title: "Delete",
                            children: /* @__PURE__ */ jsx8(Trash, { size: 16 })
                          }
                        ) })
                      ] })
                    },
                    _arrayId
                  );
                }) }),
                !addDisabled && /* @__PURE__ */ jsx8(
                  "button",
                  {
                    type: "button",
                    className: getClassName4("addButton"),
                    onClick: () => {
                      var _a;
                      if (isDraggingAny) return;
                      const value = getValue();
                      const existingValue = value || [];
                      const defaultProps = typeof field.defaultItemProps === "function" ? field.defaultItemProps(existingValue.length) : (_a = field.defaultItemProps) != null ? _a : {};
                      const newItem = defaultSlots(
                        uniqifyItem(defaultProps),
                        field.arrayFields
                      );
                      const newValue = [...existingValue, newItem];
                      updateValue(newValue);
                    },
                    children: /* @__PURE__ */ jsx8(Plus, { size: 21 })
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};

// components/AutoField/lib/use-local-value.ts
import { useCallback as useCallback2, useEffect as useEffect3, useState as useState5 } from "react";

// components/AutoField/lib/use-deep-field.ts
var useDeepField = (path) => {
  return useFieldStore((s) => getDeep(s, path));
};

// components/AutoField/lib/use-is-focused.ts
var useIsFocused = (path) => {
  return useAppStore((s) => s.state.ui.field.focus === path);
};

// components/AutoField/lib/use-local-value.ts
var useLocalValue = (path, onChange) => {
  const value = useDeepField(path);
  const isFocused = useIsFocused(path);
  const [localValue, setLocalValue] = useState5(value == null ? void 0 : value.toString());
  const onChangeLocal = useCallback2(
    (val) => {
      setLocalValue(val);
      onChange(val);
    },
    [onChange]
  );
  useEffect3(() => {
    if (!isFocused) {
      setLocalValue(value);
    }
  }, [isFocused, value]);
  return [localValue != null ? localValue : "", onChangeLocal];
};

// components/AutoField/fields/DefaultField/index.tsx
import { Fragment as Fragment3, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var getClassName5 = get_class_name_factory_default("Input", styles_module_default);
var DefaultField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const [localValue, onChangeLocal] = useLocalValue(name, onChange);
  return /* @__PURE__ */ jsx9(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsxs4(Fragment3, { children: [
        field.type === "text" && /* @__PURE__ */ jsx9(Type, { size: 16 }),
        field.type === "number" && /* @__PURE__ */ jsx9(Hash, { size: 16 })
      ] }),
      readOnly,
      children: /* @__PURE__ */ jsx9(
        "input",
        {
          className: getClassName5("input"),
          autoComplete: "off",
          type: field.type,
          title: label || name,
          name,
          value: localValue,
          onChange: (e) => {
            if (field.type === "number") {
              const numberValue = Number(e.currentTarget.value);
              if (typeof field.min !== "undefined" && numberValue < field.min) {
                return;
              }
              if (typeof field.max !== "undefined" && numberValue > field.max) {
                return;
              }
              onChangeLocal(numberValue);
            } else {
              onChangeLocal(e.currentTarget.value);
            }
          },
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          id,
          min: field.type === "number" ? field.min : void 0,
          max: field.type === "number" ? field.max : void 0,
          placeholder: field.type === "text" || field.type === "number" ? field.placeholder : void 0,
          step: field.type === "number" ? field.step : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
import { useEffect as useEffect6 } from "react";

// components/ExternalInput/index.tsx
import {
  useMemo as useMemo4,
  useEffect as useEffect5,
  useState as useState7,
  useCallback as useCallback3,
  isValidElement
} from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/ExternalInput/styles.module.css#css-module
var styles_module_default4 = { "ExternalInput-actions": "_ExternalInput-actions_91ls0_1", "ExternalInput-button": "_ExternalInput-button_91ls0_5", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_91ls0_24", "ExternalInput--readOnly": "_ExternalInput--readOnly_91ls0_31", "ExternalInput-detachButton": "_ExternalInput-detachButton_91ls0_35", "ExternalInput": "_ExternalInput_91ls0_1", "ExternalInputModal": "_ExternalInputModal_91ls0_79", "ExternalInputModal-grid": "_ExternalInputModal-grid_91ls0_89", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_91ls0_100", "ExternalInputModal-filters": "_ExternalInputModal-filters_91ls0_105", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_91ls0_124", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_91ls0_133", "ExternalInputModal-table": "_ExternalInputModal-table_91ls0_133", "ExternalInputModal-thead": "_ExternalInputModal-thead_91ls0_149", "ExternalInputModal-th": "_ExternalInputModal-th_91ls0_149", "ExternalInputModal-td": "_ExternalInputModal-td_91ls0_164", "ExternalInputModal-tr": "_ExternalInputModal-tr_91ls0_169", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_91ls0_176", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_91ls0_202", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_91ls0_206", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_91ls0_223", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_91ls0_227", "ExternalInputModal-search": "_ExternalInputModal-search_91ls0_227", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_91ls0_264", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_91ls0_289", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_91ls0_299", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_91ls0_313", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_91ls0_326", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_91ls0_330", "ExternalInputModal-footer": "_ExternalInputModal-footer_91ls0_330", "ExternalInputModal-field": "_ExternalInputModal-field_91ls0_343" };

// components/Modal/index.tsx
import { useEffect as useEffect4, useState as useState6 } from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/Modal/styles.module.css#css-module
var styles_module_default5 = { "Modal": "_Modal_ikbaj_1", "Modal--isOpen": "_Modal--isOpen_ikbaj_15", "Modal-inner": "_Modal-inner_ikbaj_19" };

// components/Modal/index.tsx
import { createPortal } from "react-dom";
import { jsx as jsx10 } from "react/jsx-runtime";
var getClassName6 = get_class_name_factory_default("Modal", styles_module_default5);
var Modal = ({
  children,
  onClose,
  isOpen
}) => {
  const [rootEl, setRootEl] = useState6(null);
  useEffect4(() => {
    setRootEl(document.getElementById("puck-portal-root"));
  }, []);
  if (!rootEl) {
    return /* @__PURE__ */ jsx10("div", {});
  }
  return createPortal(
    /* @__PURE__ */ jsx10("div", { className: getClassName6({ isOpen }), onClick: onClose, children: /* @__PURE__ */ jsx10(
      "div",
      {
        className: getClassName6("inner"),
        onClick: (e) => e.stopPropagation(),
        children
      }
    ) }),
    rootEl
  );
};

// css-module:/Users/feb/HTDocs/custom-puck/components/Heading/styles.module.css#css-module
var styles_module_default6 = { "Heading": "_Heading_qxrry_1", "Heading--xxxxl": "_Heading--xxxxl_qxrry_12", "Heading--xxxl": "_Heading--xxxl_qxrry_18", "Heading--xxl": "_Heading--xxl_qxrry_22", "Heading--xl": "_Heading--xl_qxrry_26", "Heading--l": "_Heading--l_qxrry_30", "Heading--m": "_Heading--m_qxrry_34", "Heading--s": "_Heading--s_qxrry_38", "Heading--xs": "_Heading--xs_qxrry_42" };

// components/Heading/index.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var getClassName7 = get_class_name_factory_default("Heading", styles_module_default6);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ jsx11(
    Tag,
    {
      className: getClassName7({
        [size]: true
      }),
      children
    }
  );
};

// components/ExternalInput/index.tsx
import { Fragment as Fragment4, jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var getClassName8 = get_class_name_factory_default("ExternalInput", styles_module_default4);
var getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default4);
var dataCache = {};
var ExternalInput = ({
  field,
  onChange,
  value = null,
  name,
  id,
  readOnly
}) => {
  var _a;
  const {
    mapProp = (val) => val,
    mapRow = (val) => val,
    filterFields
  } = field || {};
  const { enabled: shouldCacheData } = (_a = field.cache) != null ? _a : { enabled: true };
  const [data, setData] = useState7([]);
  const [isOpen, setOpen] = useState7(false);
  const [isLoading, setIsLoading] = useState7(true);
  const hasFilterFields = !!filterFields;
  const [filters, setFilters] = useState7(field.initialFilters || {});
  const [filtersToggled, setFiltersToggled] = useState7(hasFilterFields);
  const mappedData = useMemo4(() => {
    return data.map(mapRow);
  }, [data]);
  const keys = useMemo4(() => {
    const validKeys = /* @__PURE__ */ new Set();
    for (const item of mappedData) {
      for (const key of Object.keys(item)) {
        if (typeof item[key] === "string" || typeof item[key] === "number" || isValidElement(item[key])) {
          validKeys.add(key);
        }
      }
    }
    return Array.from(validKeys);
  }, [mappedData]);
  const [searchQuery, setSearchQuery] = useState7(field.initialQuery || "");
  const search = useCallback3(
    (query, filters2) => __async(null, null, function* () {
      setIsLoading(true);
      const cacheKey = `${id}-${query}-${JSON.stringify(filters2)}`;
      let listData;
      if (shouldCacheData && dataCache[cacheKey]) {
        listData = dataCache[cacheKey];
      } else {
        listData = yield field.fetchList({ query, filters: filters2 });
      }
      if (listData) {
        setData(listData);
        setIsLoading(false);
        if (shouldCacheData) {
          dataCache[cacheKey] = listData;
        }
      }
    }),
    [id, field]
  );
  const Footer = useCallback3(
    (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ jsxs5("span", { className: getClassNameModal("footer"), children: [
      props.items.length,
      " result",
      props.items.length === 1 ? "" : "s"
    ] }),
    [field.renderFooter]
  );
  useEffect5(() => {
    search(searchQuery, filters);
  }, []);
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: getClassName8({
        dataSelected: !!value,
        modalVisible: isOpen,
        readOnly
      }),
      id,
      children: [
        /* @__PURE__ */ jsxs5("div", { className: getClassName8("actions"), children: [
          /* @__PURE__ */ jsx12(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: getClassName8("button"),
              disabled: readOnly,
              children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ jsxs5(Fragment4, { children: [
                /* @__PURE__ */ jsx12(Link, { size: "16" }),
                /* @__PURE__ */ jsx12("span", { children: field.placeholder })
              ] })
            }
          ),
          value && /* @__PURE__ */ jsx12(
            "button",
            {
              type: "button",
              className: getClassName8("detachButton"),
              onClick: () => {
                onChange(null);
              },
              disabled: readOnly,
              children: /* @__PURE__ */ jsx12(LockOpen, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx12(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ jsxs5(
          "form",
          {
            className: getClassNameModal({
              isLoading,
              loaded: !isLoading,
              hasData: mappedData.length > 0,
              filtersToggled
            }),
            onSubmit: (e) => {
              e.preventDefault();
              e.stopPropagation();
              search(searchQuery, filters);
            },
            children: [
              /* @__PURE__ */ jsx12("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ jsxs5("div", { className: getClassNameModal("searchForm"), children: [
                /* @__PURE__ */ jsxs5("label", { className: getClassNameModal("search"), children: [
                  /* @__PURE__ */ jsx12("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                  /* @__PURE__ */ jsx12("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ jsx12(Search, { size: "18" }) }),
                  /* @__PURE__ */ jsx12(
                    "input",
                    {
                      className: getClassNameModal("searchInput"),
                      name: "q",
                      type: "search",
                      placeholder: field.placeholder,
                      onChange: (e) => {
                        setSearchQuery(e.currentTarget.value);
                      },
                      autoComplete: "off",
                      value: searchQuery
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs5("div", { className: getClassNameModal("searchActions"), children: [
                  /* @__PURE__ */ jsx12(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                  hasFilterFields && /* @__PURE__ */ jsx12("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ jsx12(
                    IconButton,
                    {
                      type: "button",
                      title: "Toggle filters",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiltersToggled(!filtersToggled);
                      },
                      children: /* @__PURE__ */ jsx12(SlidersHorizontal, { size: 20 })
                    }
                  ) })
                ] })
              ] }) : /* @__PURE__ */ jsx12(Heading, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
              /* @__PURE__ */ jsxs5("div", { className: getClassNameModal("grid"), children: [
                hasFilterFields && /* @__PURE__ */ jsx12("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                  const filterField = filterFields[fieldName];
                  return /* @__PURE__ */ jsx12(
                    "div",
                    {
                      className: getClassNameModal("field"),
                      children: /* @__PURE__ */ jsx12(FieldLabel, { label: filterField.label || fieldName, children: /* @__PURE__ */ jsx12(
                        AutoField,
                        {
                          field: filterField,
                          id: `external_field_${fieldName}_filter`,
                          value: filters[fieldName],
                          onChange: (value2) => {
                            setFilters((filters2) => {
                              const newFilters = __spreadProps(__spreadValues({}, filters2), {
                                [fieldName]: value2
                              });
                              search(searchQuery, newFilters);
                              return newFilters;
                            });
                          }
                        }
                      ) })
                    },
                    fieldName
                  );
                }) }),
                /* @__PURE__ */ jsxs5("div", { className: getClassNameModal("tableWrapper"), children: [
                  /* @__PURE__ */ jsxs5("table", { className: getClassNameModal("table"), children: [
                    /* @__PURE__ */ jsx12("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ jsx12("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ jsx12(
                      "th",
                      {
                        className: getClassNameModal("th"),
                        style: { textAlign: "left" },
                        children: key
                      },
                      key
                    )) }) }),
                    /* @__PURE__ */ jsx12("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                      return /* @__PURE__ */ jsx12(
                        "tr",
                        {
                          style: { whiteSpace: "nowrap" },
                          className: getClassNameModal("tr"),
                          onClick: () => {
                            onChange(mapProp(data[i]));
                            setOpen(false);
                          },
                          children: keys.map((key) => /* @__PURE__ */ jsx12("td", { className: getClassNameModal("td"), children: item[key] }, key))
                        },
                        i
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsx12("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ jsx12(Loader, { size: 24 }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx12("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ jsx12(Footer, { items: mappedData }) })
            ]
          }
        ) })
      ]
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var ExternalField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label,
  readOnly
}) => {
  var _a, _b, _c;
  const value = useDeepField(name);
  const validField = field;
  const deprecatedField = field;
  useEffect6(() => {
    if (deprecatedField.adaptor) {
      console.error(
        "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
      );
    }
  }, []);
  if (field.type !== "external") {
    return null;
  }
  return /* @__PURE__ */ jsx13(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx13(Link, { size: 16 }),
      el: "div",
      children: /* @__PURE__ */ jsx13(
        ExternalInput,
        {
          name,
          field: __spreadProps(__spreadValues({}, validField), {
            // DEPRECATED
            placeholder: ((_a = deprecatedField.adaptor) == null ? void 0 : _a.name) ? `Select from ${deprecatedField.adaptor.name}` : validField.placeholder || "Select data",
            mapProp: ((_b = deprecatedField.adaptor) == null ? void 0 : _b.mapProp) || validField.mapProp,
            mapRow: validField.mapRow,
            fetchList: ((_c = deprecatedField.adaptor) == null ? void 0 : _c.fetchList) ? () => __async(null, null, function* () {
              return yield deprecatedField.adaptor.fetchList(
                deprecatedField.adaptorParams
              );
            }) : validField.fetchList
          }),
          onChange,
          value,
          id,
          readOnly
        }
      )
    }
  );
};

// components/AutoField/fields/RadioField/index.tsx
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var getClassName9 = get_class_name_factory_default("Input", styles_module_default);
var RadioField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const value = useDeepField(name);
  if (field.type !== "radio" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsx14(
    Label,
    {
      icon: labelIcon || /* @__PURE__ */ jsx14(CircleCheckBig, { size: 16 }),
      label: label || name,
      readOnly,
      el: "div",
      children: /* @__PURE__ */ jsx14("div", { className: getClassName9("radioGroupItems"), id, children: field.options.map((option) => {
        var _a;
        return /* @__PURE__ */ jsxs6(
          "label",
          {
            className: getClassName9("radio"),
            children: [
              /* @__PURE__ */ jsx14(
                "input",
                {
                  type: "radio",
                  className: getClassName9("radioInput"),
                  value: JSON.stringify({ value: option.value }),
                  name,
                  onChange: (e) => {
                    onChange(JSON.parse(e.target.value).value);
                  },
                  disabled: readOnly,
                  checked: value === option.value
                }
              ),
              /* @__PURE__ */ jsx14("div", { className: getClassName9("radioInner"), children: option.label || ((_a = option.value) == null ? void 0 : _a.toString()) })
            ]
          },
          option.label + option.value
        );
      }) })
    }
  );
};

// components/AutoField/fields/SelectField/index.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var getClassName10 = get_class_name_factory_default("Input", styles_module_default);
var SelectField = ({
  field,
  onChange,
  label,
  labelIcon,
  Label,
  id,
  name = id,
  readOnly
}) => {
  const value = useDeepField(name);
  if (field.type !== "select" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsx15(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx15(ChevronDown, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ jsx15(
        "select",
        {
          id,
          title: label || name,
          className: getClassName10("input"),
          disabled: readOnly,
          onChange: (e) => {
            onChange(JSON.parse(e.target.value).value);
          },
          value: JSON.stringify({ value }),
          children: field.options.map((option) => /* @__PURE__ */ jsx15(
            "option",
            {
              label: option.label,
              value: JSON.stringify({ value: option.value })
            },
            option.label + JSON.stringify(option.value)
          ))
        }
      )
    }
  );
};

// components/AutoField/fields/TextareaField/index.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var getClassName11 = get_class_name_factory_default("Input", styles_module_default);
var TextareaField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const [localValue, onChangeLocal] = useLocalValue(name, onChange);
  return /* @__PURE__ */ jsx16(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx16(Type, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ jsx16(
        "textarea",
        {
          id,
          className: getClassName11("input"),
          autoComplete: "off",
          name,
          value: typeof localValue === "undefined" ? "" : localValue,
          onChange: (e) => onChangeLocal(e.currentTarget.value),
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          rows: 5,
          placeholder: field.type === "textarea" ? field.placeholder : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/RichtextField/index.tsx
import { lazy, Suspense } from "react";

// components/RichTextEditor/components/EditorFallback.tsx
import { memo as memo3 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var EditorFallback = memo3((props) => {
  var _a;
  return /* @__PURE__ */ jsx17(
    EditorInner,
    __spreadProps(__spreadValues({}, props), {
      editor: null,
      menu: /* @__PURE__ */ jsx17(
        LoadedRichTextMenuInner,
        {
          field: props.field,
          editor: null,
          editorState: null,
          readOnly: (_a = props.readOnly) != null ? _a : false
        }
      ),
      children: /* @__PURE__ */ jsx17(
        "div",
        {
          className: "rich-text",
          dangerouslySetInnerHTML: { __html: props.content },
          contentEditable: true
        }
      )
    })
  );
});
EditorFallback.displayName = "EditorFallback";

// components/AutoField/fields/RichtextField/index.tsx
import { Fragment as Fragment5, jsx as jsx18 } from "react/jsx-runtime";
var Editor = lazy(
  () => import("./Editor-SMVWGBZC.mjs").then((m) => ({
    default: m.Editor
  }))
);
var RichtextField = ({
  onChange,
  readOnly = false,
  id,
  name = id,
  label,
  labelIcon,
  Label,
  field
}) => {
  const content = useDeepField(name);
  const editorProps = {
    onChange,
    content,
    readOnly,
    field,
    id,
    name
  };
  return /* @__PURE__ */ jsx18(Fragment5, { children: /* @__PURE__ */ jsx18(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx18(Type, { size: 16 }),
      readOnly,
      el: "div",
      children: /* @__PURE__ */ jsx18(Suspense, { fallback: /* @__PURE__ */ jsx18(EditorFallback, __spreadValues({}, editorProps)), children: /* @__PURE__ */ jsx18(Editor, __spreadValues({}, editorProps)) })
    }
  ) });
};

// css-module:/Users/feb/HTDocs/custom-puck/components/AutoField/fields/ObjectField/styles.module.css#css-module
var styles_module_default7 = { "ObjectField": "_ObjectField_1ua3y_5", "ObjectField-fieldset": "_ObjectField-fieldset_1ua3y_13" };

// components/AutoField/fields/ObjectField/index.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var getClassName12 = get_class_name_factory_default("ObjectField", styles_module_default7);
var ObjectField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label,
  readOnly
}) => {
  const { localName = name } = useNestedFieldContext();
  const fieldStore = useFieldStoreApi();
  const canEdit = useAppStore(
    (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
  );
  const getValue = () => {
    var _a;
    return (_a = getDeep(fieldStore.getState(), name)) != null ? _a : {};
  };
  if (field.type !== "object" || !field.objectFields) {
    return null;
  }
  return /* @__PURE__ */ jsx19(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx19(EllipsisVertical, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsx19("div", { className: getClassName12(), children: /* @__PURE__ */ jsx19("fieldset", { className: getClassName12("fieldset"), children: Object.keys(field.objectFields).map((subName) => {
        const subField = field.objectFields[subName];
        const subPath = `${localName}.${subName}`;
        return /* @__PURE__ */ jsx19(
          SubField,
          {
            id: `${id}_${subName}`,
            name,
            subName,
            localName,
            field: subField,
            forceReadOnly: !canEdit,
            onChange: (subValue, ui, subName2) => {
              const value = getValue();
              if (value[subName2] === subValue) {
                return;
              }
              onChange(__spreadProps(__spreadValues({}, value), { [subName2]: subValue }), ui);
            }
          },
          subPath
        );
      }) }) })
    }
  );
};

// lib/use-safe-id.ts
import React2, { useState as useState8 } from "react";
var useSafeId = () => {
  if (typeof React2.useId !== "undefined") {
    return React2.useId();
  }
  const [id] = useState8(generateId());
  return id;
};

// components/AutoField/index.tsx
import { useShallow as useShallow3 } from "zustand/react/shallow";
import { jsx as jsx20 } from "react/jsx-runtime";
var getClassName13 = get_class_name_factory_default("Input", styles_module_default);
var getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default);
var defaultFields = {
  array: ArrayField,
  external: ExternalField,
  object: ObjectField,
  select: SelectField,
  textarea: TextareaField,
  radio: RadioField,
  text: DefaultField,
  number: DefaultField,
  richtext: RichtextField
};
function AutoFieldInternal(props) {
  var _a;
  const dispatch = useAppStore((s) => s.dispatch);
  const overrides = useAppStore((s) => s.overrides);
  const readOnly = useAppStore(useShallow3((s) => {
    var _a2;
    return (_a2 = s.selectedItem) == null ? void 0 : _a2.readOnly;
  }));
  const nestedFieldContext = useContext4(NestedFieldContext);
  const { id, Label = FieldLabelInternal } = props;
  const field = props.field;
  const label = field.label;
  const labelIcon = field.labelIcon;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const render = useMemo5(
    () => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      return __spreadProps(__spreadValues({}, overrides.fieldTypes), {
        custom: (_a2 = overrides.fieldTypes) == null ? void 0 : _a2.custom,
        array: ((_b = overrides.fieldTypes) == null ? void 0 : _b.array) || defaultFields.array,
        external: ((_c = overrides.fieldTypes) == null ? void 0 : _c.external) || defaultFields.external,
        object: ((_d = overrides.fieldTypes) == null ? void 0 : _d.object) || defaultFields.object,
        select: ((_e = overrides.fieldTypes) == null ? void 0 : _e.select) || defaultFields.select,
        textarea: ((_f = overrides.fieldTypes) == null ? void 0 : _f.textarea) || defaultFields.textarea,
        radio: ((_g = overrides.fieldTypes) == null ? void 0 : _g.radio) || defaultFields.radio,
        text: ((_h = overrides.fieldTypes) == null ? void 0 : _h.text) || defaultFields.text,
        number: ((_i = overrides.fieldTypes) == null ? void 0 : _i.number) || defaultFields.number,
        richtext: ((_j = overrides.fieldTypes) == null ? void 0 : _j.richtext) || defaultFields.richtext
      });
    },
    [overrides]
  );
  const fieldValue = useFieldStore((s) => {
    var _a2, _b;
    if (field.type === "custom" || ((_a2 = overrides.fieldTypes) == null ? void 0 : _a2[field.type])) {
      return getDeep(s, (_b = props.name) != null ? _b : resolvedId);
    }
  });
  const mergedProps = useMemo5(
    () => __spreadProps(__spreadValues({}, props), {
      field,
      label,
      labelIcon,
      Label,
      id: resolvedId,
      value: fieldValue
    }),
    [props, field, label, labelIcon, Label, resolvedId, fieldValue]
  );
  const onFocus = useCallback4(
    (e) => {
      if (mergedProps.name && (e.target.nodeName === "INPUT" || e.target.nodeName === "TEXTAREA")) {
        e.stopPropagation();
        dispatch({
          type: "setUi",
          ui: {
            field: { focus: mergedProps.name }
          }
        });
      }
    },
    [mergedProps.name]
  );
  const onBlur = useCallback4((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, []);
  let Children = useMemo5(() => {
    if (field.type !== "custom" && field.type !== "slot") {
      return defaultFields[field.type];
    }
    return (_props) => null;
  }, [field.type]);
  const fieldKey = field.type === "custom" ? field.key : void 0;
  let FieldComponent = useMemo5(() => {
    if (field.type === "custom" && !render[field.type]) {
      if (!field.render) {
        return null;
      }
      return field.render;
    } else if (field.type !== "slot") {
      return render[field.type];
    }
  }, [field.type, fieldKey, render]);
  const { visible = true } = props.field;
  if (!visible) {
    return null;
  }
  if (field.type === "slot") {
    return null;
  }
  if (!FieldComponent) {
    throw new Error(`Field type for ${field.type} did not exist.`);
  }
  return /* @__PURE__ */ jsx20(
    NestedFieldContext.Provider,
    {
      value: {
        readOnlyFields: nestedFieldContext.readOnlyFields || readOnly || {},
        localName: (_a = nestedFieldContext.localName) != null ? _a : mergedProps.name
      },
      children: /* @__PURE__ */ jsx20(
        "div",
        {
          className: getClassNameWrapper(),
          onFocus,
          onBlur,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ jsx20(FieldComponent, __spreadProps(__spreadValues({}, mergedProps), { children: /* @__PURE__ */ jsx20(Children, __spreadValues({}, mergedProps)) }))
        }
      )
    }
  );
}
function AutoFieldPrivate(props) {
  return /* @__PURE__ */ jsx20(AutoFieldInternal, __spreadValues({}, props));
}
function AutoFieldPublicInternal(_a) {
  var _b = _a, { value } = _b, props = __objRest(_b, ["value"]);
  const DefaultLabel = useMemo5(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ jsx20(
      "div",
      __spreadProps(__spreadValues({}, labelProps), {
        className: getClassName13({ readOnly: props.readOnly })
      })
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  const fieldStore = useFieldStoreApi();
  const onChange = useCallback4(
    (value2) => {
      if (!props.id) return;
      fieldStore.setState({ [props.id]: value2 });
      props.onChange(value2);
    },
    [fieldStore, props.onChange, props.id]
  );
  useEffect7(() => {
    if (!props.id) return;
    fieldStore.setState({ [props.id]: value });
  }, [props.id, value, fieldStore]);
  return /* @__PURE__ */ jsx20(
    AutoFieldInternal,
    __spreadProps(__spreadValues({}, props), {
      onChange,
      Label: DefaultLabel
    })
  );
}
function AutoField(props) {
  const id = useSafeId();
  if (props.field.type === "slot") {
    return null;
  }
  return /* @__PURE__ */ jsx20(fieldContextStore.Provider, { value: { [id]: props.value }, children: /* @__PURE__ */ jsx20(AutoFieldPublicInternal, __spreadProps(__spreadValues({}, props), { id })) });
}

// components/DropZone/index.tsx
import {
  forwardRef,
  memo as memo7,
  useCallback as useCallback13,
  useContext as useContext9,
  useEffect as useEffect16,
  useMemo as useMemo12,
  useRef as useRef9
} from "react";

// components/DraggableComponent/index.tsx
import {
  useCallback as useCallback7,
  useContext as useContext5,
  useEffect as useEffect8,
  useLayoutEffect,
  useMemo as useMemo7,
  useRef as useRef2,
  useState as useState9,
  useTransition
} from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/DraggableComponent/styles.module.css#css-module
var styles_module_default8 = { "DraggableComponent": "_DraggableComponent_1vaqy_1", "DraggableComponent-overlayWrapper": "_DraggableComponent-overlayWrapper_1vaqy_12", "DraggableComponent-overlay": "_DraggableComponent-overlay_1vaqy_12", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_1vaqy_34", "DraggableComponent--hover": "_DraggableComponent--hover_1vaqy_50", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_1vaqy_57", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_1vaqy_71", "DraggableComponent-actions": "_DraggableComponent-actions_1vaqy_71" };

// components/DraggableComponent/index.tsx
import { createPortal as createPortal2 } from "react-dom";
import { Feedback } from "@dnd-kit/dom";

// lib/get-deep-scroll-position.ts
function getDeepScrollPosition(element) {
  let totalScroll = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== document.documentElement) {
    const parent = current.parentElement;
    if (parent) {
      totalScroll.x += parent.scrollLeft;
      totalScroll.y += parent.scrollTop;
    }
    current = parent;
  }
  return totalScroll;
}

// components/DropZone/context.tsx
import {
  createContext as createContext3,
  useCallback as useCallback5,
  useMemo as useMemo6
} from "react";
import { createStore as createStore3 } from "zustand";
import { Fragment as Fragment6, jsx as jsx21 } from "react/jsx-runtime";
var dropZoneContext = createContext3(null);
var ZoneStoreContext = createContext3(
  createStore3(() => ({
    zoneDepthIndex: {},
    nextZoneDepthIndex: {},
    areaDepthIndex: {},
    nextAreaDepthIndex: {},
    draggedItem: null,
    previewIndex: {},
    enabledIndex: {},
    hoveringComponent: null,
    registerRootVirtualizer: () => {
    },
    unregisterRootVirtualizer: () => {
    },
    scrollToComponent: () => false
  }))
);
var ZoneStoreProvider = ({
  children,
  store
}) => {
  return /* @__PURE__ */ jsx21(ZoneStoreContext.Provider, { value: store, children });
};
var DropZoneProvider = ({
  children,
  value
}) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const registerZone = useCallback5(
    (zoneCompound) => {
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
    },
    [dispatch]
  );
  const memoValue = useMemo6(
    () => __spreadValues({
      registerZone
    }, value),
    [value]
  );
  return /* @__PURE__ */ jsx21(Fragment6, { children: memoValue && /* @__PURE__ */ jsx21(dropZoneContext.Provider, { value: memoValue, children }) });
};

// components/DraggableComponent/index.tsx
import { useShallow as useShallow4 } from "zustand/react/shallow";
import { useSortable as useSortable2 } from "@dnd-kit/react/sortable";

// lib/dnd/use-on-drag-finished.ts
import { useCallback as useCallback6 } from "react";
var useOnDragFinished = (cb, deps = []) => {
  const appStore = useAppStoreApi();
  return useCallback6(() => {
    let dispose = () => {
    };
    const processDragging = (isDragging2) => {
      if (isDragging2) {
        cb(false);
      } else {
        setTimeout(() => {
          cb(true);
        }, 0);
        if (dispose) dispose();
      }
    };
    const isDragging = appStore.getState().state.ui.isDragging;
    processDragging(isDragging);
    if (isDragging) {
      dispose = appStore.subscribe(
        (s) => s.state.ui.isDragging,
        (isDragging2) => {
          processDragging(isDragging2);
        }
      );
    }
    return dispose;
  }, [appStore, ...deps]);
};

// lib/assign-refs.ts
function assignRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else if (ref && typeof ref === "object" && "current" in ref) {
    ref.current = node;
  }
}
function assignRefs(refs, node) {
  refs.forEach((ref) => {
    assignRef(ref, node);
  });
}

// components/DraggableComponent/index.tsx
import { Fragment as Fragment7, jsx as jsx22, jsxs as jsxs7 } from "react/jsx-runtime";
var getClassName14 = get_class_name_factory_default("DraggableComponent", styles_module_default8);
var DEBUG2 = false;
var MEASURE_EVERY_MS = 100;
var space = 8;
var actionsOverlayTop = space * 6.5;
var actionsTop = -(actionsOverlayTop - 8);
var actionsSide = space;
var DefaultActionBar = ({
  label,
  children,
  parentAction
}) => /* @__PURE__ */ jsxs7(ActionBar, { children: [
  /* @__PURE__ */ jsxs7(ActionBar.Group, { children: [
    parentAction,
    label && /* @__PURE__ */ jsx22(ActionBar.Label, { label })
  ] }),
  /* @__PURE__ */ jsx22(ActionBar.Group, { children })
] });
var DefaultOverlay = ({
  children
}) => /* @__PURE__ */ jsx22(Fragment7, { children });
var DraggableComponent = ({
  children,
  depth,
  componentType,
  id,
  index,
  zoneCompound,
  isLoading = false,
  isSelected = false,
  debug,
  label,
  autoDragAxis,
  userDragAxis,
  inDroppableZone = true,
  itemRef
}) => {
  const zoom = useAppStore(
    (s) => {
      var _a;
      return ((_a = s.selectedItem) == null ? void 0 : _a.props.id) === id ? s.zoomConfig.zoom : 1;
    }
  );
  const _experimentalFullScreenCanvas = useAppStore(
    (s) => s._experimentalFullScreenCanvas
  );
  const overrides = useAppStore((s) => s.overrides);
  const dispatch = useAppStore((s) => s.dispatch);
  const iframe = useAppStore((s) => s.iframe);
  const lastMeasureRef = useRef2(0);
  const ctx = useContext5(dropZoneContext);
  const [localZones, setLocalZones] = useState9({});
  const registerLocalZone = useCallback7(
    (zoneCompound2, active) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.registerLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2, active);
      setLocalZones((obj) => __spreadProps(__spreadValues({}, obj), {
        [zoneCompound2]: active
      }));
    },
    [setLocalZones]
  );
  const unregisterLocalZone = useCallback7(
    (zoneCompound2) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.unregisterLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2);
      setLocalZones((obj) => {
        const newLocalZones = __spreadValues({}, obj);
        delete newLocalZones[zoneCompound2];
        return newLocalZones;
      });
    },
    [setLocalZones]
  );
  const containsActiveZone = Object.values(localZones).filter(Boolean).length > 0;
  const path = useAppStore(useShallow4((s) => {
    var _a;
    return (_a = s.state.indexes.nodes[id]) == null ? void 0 : _a.path;
  }));
  const permissions = useAppStore(
    useShallow4((s) => {
      const item = getItem({ index, zone: zoneCompound }, s.state);
      return s.permissions.getPermissions({ item });
    })
  );
  const zoneStore = useContext5(ZoneStoreContext);
  const [dragAxis, setDragAxis] = useState9(userDragAxis || autoDragAxis);
  const dynamicCollisionDetector = useMemo7(
    () => createDynamicCollisionDetector(dragAxis),
    [dragAxis]
  );
  const {
    ref: sortableRef,
    isDragging: thisIsDragging,
    sortable
  } = useSortable2({
    id,
    index,
    group: zoneCompound,
    type: "component",
    data: {
      areaId: ctx == null ? void 0 : ctx.areaId,
      zone: zoneCompound,
      index,
      componentType,
      containsActiveZone,
      depth,
      path: path || [],
      inDroppableZone
    },
    collisionPriority: depth,
    collisionDetector: dynamicCollisionDetector,
    // "Out of the way" transition from react-beautiful-dnd
    transition: {
      duration: 200,
      easing: "cubic-bezier(0.2, 0, 0, 1)"
    },
    plugins: (defaults) => [
      ...defaults,
      Feedback.configure({ feedback: "clone" })
    ]
  });
  useEffect8(() => {
    const isEnabled = zoneStore.getState().enabledIndex[zoneCompound];
    sortable.droppable.disabled = !isEnabled;
    sortable.draggable.disabled = !permissions.drag;
    const cleanup = zoneStore.subscribe((s) => {
      sortable.droppable.disabled = !s.enabledIndex[zoneCompound];
    });
    if (ref.current && !permissions.drag) {
      ref.current.setAttribute("data-puck-disabled", "");
      return () => {
        var _a;
        (_a = ref.current) == null ? void 0 : _a.removeAttribute("data-puck-disabled");
        cleanup();
      };
    }
    return cleanup;
  }, [permissions.drag, zoneCompound]);
  const [, setRerender] = useState9(0);
  const ref = useRef2(null);
  const refSetter = useCallback7(
    (el) => {
      sortableRef(el);
      if (ref.current !== el) {
        ref.current = el;
        setRerender((update) => update + 1);
        if (itemRef) {
          assignRefs([itemRef], el);
        }
      }
    },
    [itemRef, sortableRef]
  );
  const [portalEl, setPortalEl] = useState9();
  useEffect8(() => {
    var _a, _b, _c;
    setPortalEl(
      iframe.enabled ? (_a = ref.current) == null ? void 0 : _a.ownerDocument.body : (_c = (_b = ref.current) == null ? void 0 : _b.closest("[data-puck-preview]")) != null ? _c : document.body
    );
  }, [iframe.enabled]);
  const getStyle = useCallback7(() => {
    var _a, _b;
    if (!ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const portalContainerEl = iframe.enabled ? null : el.closest("[data-puck-preview]");
    const targetIsFixed = (() => {
      let node = el;
      while (node && node !== document.documentElement) {
        if (getComputedStyle(node).position === "fixed") {
          return true;
        }
        node = node.parentElement;
      }
      return false;
    })();
    const portalContainerRect = portalContainerEl == null ? void 0 : portalContainerEl.getBoundingClientRect();
    const portalScroll = portalContainerEl ? getDeepScrollPosition(portalContainerEl) : { x: 0, y: 0 };
    const deepScrollPosition = targetIsFixed ? { x: 0, y: 0 } : getDeepScrollPosition(el);
    const scroll = targetIsFixed ? { x: 0, y: 0 } : {
      x: deepScrollPosition.x - portalScroll.x - ((_a = portalContainerRect == null ? void 0 : portalContainerRect.left) != null ? _a : 0),
      y: deepScrollPosition.y - portalScroll.y - ((_b = portalContainerRect == null ? void 0 : portalContainerRect.top) != null ? _b : 0)
    };
    const style2 = {
      left: `${rect.left + scroll.x}px`,
      top: `${rect.top + scroll.y}px`,
      height: `${rect.height}px`,
      width: `${rect.width}px`,
      position: targetIsFixed ? "fixed" : void 0
    };
    return style2;
  }, [iframe.enabled]);
  const [style, setStyle] = useState9();
  const lastRectRef = useRef2(null);
  const syncRafRef = useRef2(null);
  const sync = useCallback7(() => {
    setStyle(getStyle());
    if (itemRef) {
      assignRefs([itemRef], ref.current);
    }
  }, [getStyle, itemRef]);
  const scheduleSync = useCallback7(() => {
    if (syncRafRef.current != null) return;
    syncRafRef.current = requestAnimationFrame(() => {
      syncRafRef.current = null;
      sync();
    });
  }, [sync]);
  useEffect8(() => {
    return () => {
      if (syncRafRef.current != null) {
        cancelAnimationFrame(syncRafRef.current);
        syncRafRef.current = null;
      }
    };
  }, []);
  useEffect8(() => {
    if (ref.current) {
      const observer = new ResizeObserver(() => {
        scheduleSync();
      });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [scheduleSync, itemRef]);
  const registerNode = useAppStore((s) => s.nodes.registerNode);
  const unregisterNode = useAppStore((s) => s.nodes.unregisterNode);
  const hideOverlay = useCallback7(() => {
    setIsVisible(false);
  }, []);
  const showOverlay = useCallback7(() => {
    setIsVisible(true);
  }, []);
  const nodeHandleRef = useRef2({
    sync: () => null,
    hideOverlay: () => null,
    showOverlay: () => null
  });
  useLayoutEffect(() => {
    nodeHandleRef.current.sync = sync;
    nodeHandleRef.current.hideOverlay = hideOverlay;
    nodeHandleRef.current.showOverlay = showOverlay;
  }, [hideOverlay, showOverlay, sync]);
  useEffect8(() => {
    registerNode(id, nodeHandleRef.current);
    return () => {
      unregisterNode(id);
    };
  }, [id, registerNode, unregisterNode]);
  const CustomActionBar = useMemo7(
    () => overrides.actionBar || DefaultActionBar,
    [overrides.actionBar]
  );
  const CustomOverlay = useMemo7(
    () => overrides.componentOverlay || DefaultOverlay,
    [overrides.componentOverlay]
  );
  const onClick = useCallback7(
    (e) => {
      const userIsDragging = !!zoneStore.getState().draggedItem;
      if (userIsDragging) {
        return;
      }
      const el = e.target;
      if (!el.closest("[data-puck-overlay-portal]")) {
        e.stopPropagation();
      }
      if (_experimentalFullScreenCanvas) {
        dispatch({
          type: "setUi",
          ui: {
            itemSelector: isSelected ? null : { index, zone: zoneCompound }
          }
        });
      } else {
        dispatch({
          type: "setUi",
          ui: {
            itemSelector: { index, zone: zoneCompound }
          }
        });
      }
    },
    [index, zoneCompound, id, isSelected, _experimentalFullScreenCanvas]
  );
  const appStore = useAppStoreApi();
  const onSelectParent = useCallback7(() => {
    const { nodes, zones } = appStore.getState().state.indexes;
    const node = nodes[id];
    const parentNode = (node == null ? void 0 : node.parentId) ? nodes[node == null ? void 0 : node.parentId] : null;
    if (!parentNode || !node.parentId) {
      return;
    }
    const parentZoneCompound = `${parentNode.parentId}:${parentNode.zone}`;
    const parentIndex = zones[parentZoneCompound].contentIds.indexOf(
      node.parentId
    );
    dispatch({
      type: "setUi",
      ui: {
        itemSelector: {
          zone: parentZoneCompound,
          index: parentIndex
        }
      }
    });
  }, [ctx, path]);
  const onDuplicate = useCallback7(() => {
    dispatch({
      type: "duplicate",
      sourceIndex: index,
      sourceZone: zoneCompound
    });
  }, [index, zoneCompound]);
  const onDelete = useCallback7(() => {
    dispatch({
      type: "remove",
      index,
      zone: zoneCompound
    });
  }, [index, zoneCompound]);
  const [hover, setHover] = useState9(false);
  const indicativeHover = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === id
  );
  useEffect8(() => {
    if (!ref.current) {
      return;
    }
    const el = ref.current;
    const _onMouseOver = (e) => {
      const userIsDragging = !!zoneStore.getState().draggedItem;
      if (userIsDragging) {
        if (thisIsDragging) {
          setHover(true);
        } else {
          setHover(false);
        }
      } else {
        setHover(true);
      }
      e.stopPropagation();
    };
    const _onMouseOut = (e) => {
      e.stopPropagation();
      setHover(false);
    };
    el.setAttribute("data-puck-component", id);
    el.setAttribute("data-puck-dnd", id);
    el.style.position = "relative";
    el.addEventListener("click", onClick);
    el.addEventListener("mouseover", _onMouseOver);
    el.addEventListener("mouseout", _onMouseOut);
    return () => {
      el.removeAttribute("data-puck-component");
      el.removeAttribute("data-puck-dnd");
      el.removeEventListener("click", onClick);
      el.removeEventListener("mouseover", _onMouseOver);
      el.removeEventListener("mouseout", _onMouseOut);
    };
  }, [
    ref.current,
    // Remount attributes if the element changes
    onClick,
    containsActiveZone,
    zoneCompound,
    id,
    thisIsDragging,
    inDroppableZone
  ]);
  const [isVisible, setIsVisible] = useState9(false);
  const [dragFinished, setDragFinished] = useState9(true);
  const [_, startTransition] = useTransition();
  useEffect8(() => {
    startTransition(() => {
      if (hover || indicativeHover || isSelected) {
        scheduleSync();
        setIsVisible(true);
        setThisWasDragging(false);
      } else {
        setIsVisible(false);
      }
    });
  }, [hover, indicativeHover, isSelected, iframe]);
  const [thisWasDragging, setThisWasDragging] = useState9(false);
  const onDragFinished = useOnDragFinished((finished) => {
    if (finished) {
      startTransition(() => {
        sync();
        setDragFinished(true);
      });
    } else {
      setDragFinished(false);
    }
  });
  useEffect8(() => {
    if (thisIsDragging) {
      setThisWasDragging(true);
    }
  }, [thisIsDragging]);
  useEffect8(() => {
    if (thisWasDragging) return onDragFinished();
  }, [thisWasDragging, onDragFinished]);
  useEffect8(() => {
    if (!dragFinished || !(isSelected || thisIsDragging)) return;
    const el = ref.current;
    if (!el) return;
    const doc = el.ownerDocument;
    const view = doc.defaultView;
    if (!view) return;
    lastMeasureRef.current = 0;
    scheduleSync();
    const onScroll = () => scheduleSync();
    const onResize = () => scheduleSync();
    doc.addEventListener("scroll", onScroll, true);
    view.addEventListener("resize", onResize);
    let frame = 0;
    const tick = (t) => {
      if (t - lastMeasureRef.current >= MEASURE_EVERY_MS) {
        lastMeasureRef.current = t;
        const node = ref.current;
        if (node) {
          const rect = node.getBoundingClientRect();
          const prev = lastRectRef.current;
          const changed = !prev || Math.abs(rect.x - prev.x) > 0.5 || Math.abs(rect.y - prev.y) > 0.5 || Math.abs(rect.width - prev.width) > 0.5 || Math.abs(rect.height - prev.height) > 0.5;
          if (changed) {
            lastRectRef.current = rect;
            scheduleSync();
          }
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      doc.removeEventListener("scroll", onScroll, true);
      view.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, [dragFinished, isSelected, thisIsDragging, scheduleSync]);
  const syncActionsPosition = useCallback7(
    (el) => {
      if (el) {
        const view = el.ownerDocument.defaultView;
        if (view) {
          const rect = el.getBoundingClientRect();
          const diffLeft = rect.x;
          const exceedsBoundsLeft = diffLeft < 0;
          const diffTop = rect.y;
          const exceedsBoundsTop = diffTop < 0;
          if (exceedsBoundsLeft) {
            el.style.transformOrigin = "left top";
            el.style.left = "0px";
          }
          if (exceedsBoundsTop) {
            el.style.top = "12px";
            if (!exceedsBoundsLeft) {
              el.style.transformOrigin = "right top";
            }
          }
        }
      }
    },
    [zoom]
  );
  const actionBarRef = useRef2(null);
  useEffect8(() => {
    syncActionsPosition(actionBarRef.current);
  }, [actionBarRef.current, syncActionsPosition]);
  useEffect8(() => {
    if (userDragAxis) {
      setDragAxis(userDragAxis);
      return;
    }
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "inline" || computedStyle.display === "inline-block") {
        setDragAxis("x");
        return;
      }
    }
    setDragAxis(autoDragAxis);
  }, [ref, userDragAxis, autoDragAxis]);
  const parentAction = useMemo7(
    () => (ctx == null ? void 0 : ctx.areaId) && (ctx == null ? void 0 : ctx.areaId) !== "root" && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onSelectParent, label: "Select parent", children: /* @__PURE__ */ jsx22(CornerLeftUp, { size: 16 }) }),
    [ctx == null ? void 0 : ctx.areaId]
  );
  const nextContextValue = useMemo7(
    () => __spreadProps(__spreadValues({}, ctx), {
      areaId: id,
      zoneCompound,
      index,
      depth: depth + 1,
      registerLocalZone,
      unregisterLocalZone
    }),
    [
      ctx,
      id,
      zoneCompound,
      index,
      depth,
      registerLocalZone,
      unregisterLocalZone
    ]
  );
  const richText = useAppStore(
    (s) => {
      var _a;
      return ((_a = s.currentRichText) == null ? void 0 : _a.inlineComponentId) === id ? s.currentRichText : null;
    }
  );
  const hasNormalActions = permissions.duplicate || permissions.delete;
  return /* @__PURE__ */ jsxs7(DropZoneProvider, { value: nextContextValue, children: [
    dragFinished && isVisible && createPortal2(
      /* @__PURE__ */ jsxs7(
        "div",
        {
          className: getClassName14({
            isSelected,
            isDragging: thisIsDragging,
            hover: hover || indicativeHover
          }),
          style: __spreadValues({}, style),
          "data-puck-overlay": true,
          children: [
            debug,
            isLoading && /* @__PURE__ */ jsx22("div", { className: getClassName14("loadingOverlay"), children: /* @__PURE__ */ jsx22(Loader, {}) }),
            /* @__PURE__ */ jsx22(
              "div",
              {
                className: getClassName14("actionsOverlay"),
                style: {
                  top: actionsOverlayTop / zoom
                },
                children: /* @__PURE__ */ jsx22(
                  "div",
                  {
                    className: getClassName14("actions"),
                    style: {
                      transform: `scale(${1 / zoom}`,
                      top: actionsTop / zoom,
                      right: 0,
                      paddingLeft: actionsSide,
                      paddingRight: actionsSide
                    },
                    ref: actionBarRef,
                    children: /* @__PURE__ */ jsxs7(
                      CustomActionBar,
                      {
                        parentAction,
                        label: DEBUG2 ? id : label,
                        children: [
                          richText && /* @__PURE__ */ jsxs7(Fragment7, { children: [
                            /* @__PURE__ */ jsx22(
                              LoadedRichTextMenu,
                              {
                                editor: richText.editor,
                                field: richText.field,
                                inline: true,
                                readOnly: false
                              }
                            ),
                            hasNormalActions && /* @__PURE__ */ jsx22(ActionBar.Separator, {})
                          ] }),
                          permissions.duplicate && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onDuplicate, label: "Duplicate", children: /* @__PURE__ */ jsx22(Copy, { size: 16 }) }),
                          permissions.delete && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onDelete, label: "Delete", children: /* @__PURE__ */ jsx22(Trash, { size: 16 }) })
                        ]
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx22("div", { className: getClassName14("overlayWrapper"), children: /* @__PURE__ */ jsx22(
              CustomOverlay,
              {
                componentId: id,
                componentType,
                hover,
                isSelected,
                children: /* @__PURE__ */ jsx22("div", { className: getClassName14("overlay") })
              }
            ) })
          ]
        }
      ),
      portalEl || document.body
    ),
    children(refSetter)
  ] });
};

// css-module:/Users/feb/HTDocs/custom-puck/components/DropZone/styles.module.css#css-module
var styles_module_default9 = { "DropZone": "_DropZone_1i2sv_1", "DropZone--hasChildren": "_DropZone--hasChildren_1i2sv_11", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_1i2sv_24", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_1i2sv_25", "DropZone--isRootZone": "_DropZone--isRootZone_1i2sv_25", "DropZone--isDestination": "_DropZone--isDestination_1i2sv_35", "DropZone-item": "_DropZone-item_1i2sv_47", "DropZone-hitbox": "_DropZone-hitbox_1i2sv_51", "DropZone--isEnabled": "_DropZone--isEnabled_1i2sv_59", "DropZone--isAnimating": "_DropZone--isAnimating_1i2sv_68" };

// components/DropZone/index.tsx
import { useDroppable as useDroppable2 } from "@dnd-kit/react";

// css-module:/Users/feb/HTDocs/custom-puck/components/Drawer/styles.module.css#css-module
var styles_module_default10 = { "Drawer": "_Drawer_pl7z0_1", "Drawer-draggable": "_Drawer-draggable_pl7z0_8", "Drawer-draggableBg": "_Drawer-draggableBg_pl7z0_12", "DrawerItem-draggable": "_DrawerItem-draggable_pl7z0_22", "DrawerItem--disabled": "_DrawerItem--disabled_pl7z0_35", "DrawerItem": "_DrawerItem_pl7z0_22", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_pl7z0_45", "DrawerItem-name": "_DrawerItem-name_pl7z0_63" };

// components/Drawer/index.tsx
import { useMemo as useMemo9, useState as useState11 } from "react";

// components/DragDropContext/index.tsx
import { DragDropProvider as DragDropProvider2 } from "@dnd-kit/react";
import {
  createContext as createContext4,
  useCallback as useCallback8,
  useContext as useContext6,
  useEffect as useEffect9,
  useMemo as useMemo8,
  useRef as useRef3,
  useState as useState10
} from "react";
import {
  AutoScroller,
  defaultPreset
} from "@dnd-kit/dom";

// lib/dnd/NestedDroppablePlugin.ts
import { Plugin } from "@dnd-kit/abstract";

// lib/throttle.ts
function timeout2(callback, duration) {
  const id = setTimeout(callback, duration);
  return () => clearTimeout(id);
}
function throttle(func, limit) {
  const time = () => performance.now();
  let cancel;
  let lastRan = 0;
  return function(...args) {
    const now = time();
    const context = this;
    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      cancel == null ? void 0 : cancel();
      cancel = timeout2(() => {
        func.apply(context, args);
        lastRan = time();
      }, limit - (now - lastRan));
    }
  };
}

// lib/get-frame.ts
var getFrame = () => {
  if (typeof window === "undefined") return;
  let frameEl = document.querySelector("#preview-frame");
  if ((frameEl == null ? void 0 : frameEl.tagName) === "IFRAME") {
    return frameEl.contentDocument || document;
  }
  return (frameEl == null ? void 0 : frameEl.ownerDocument) || document;
};

// lib/global-position.ts
var GlobalPosition = class {
  constructor(target, original) {
    this.scaleFactor = 1;
    this.frameEl = null;
    this.frameRect = null;
    var _a;
    this.target = target;
    this.original = original;
    this.frameEl = document.querySelector("iframe#preview-frame");
    if (this.frameEl) {
      this.frameRect = this.frameEl.getBoundingClientRect();
      this.scaleFactor = this.frameRect.width / (((_a = this.frameEl.contentWindow) == null ? void 0 : _a.innerWidth) || 1);
    }
  }
  get x() {
    return this.original.x;
  }
  get y() {
    return this.original.y;
  }
  get global() {
    if (document !== this.target.ownerDocument && this.frameRect) {
      return {
        x: this.x * this.scaleFactor + this.frameRect.left,
        y: this.y * this.scaleFactor + this.frameRect.top
      };
    }
    return this.original;
  }
  get frame() {
    if (document === this.target.ownerDocument && this.frameRect) {
      return {
        x: (this.x - this.frameRect.left) / this.scaleFactor,
        y: (this.y - this.frameRect.top) / this.scaleFactor
      };
    }
    return this.original;
  }
};

// lib/bubble-pointer-event.ts
var BaseEvent = typeof PointerEvent !== "undefined" ? PointerEvent : Event;
var BubbledPointerEvent = class extends BaseEvent {
  constructor(type, data) {
    super(type, data);
    this._originalTarget = null;
    this.originalTarget = data.originalTarget;
  }
  // Necessary for Firefox
  set originalTarget(target) {
    this._originalTarget = target;
  }
  // Necessary for Firefox
  get originalTarget() {
    return this._originalTarget;
  }
};

// lib/dnd/NestedDroppablePlugin.ts
var depthSort = (candidates) => {
  return candidates.sort((a, b) => {
    const aData = a.data;
    const bData = b.data;
    if (aData.depth > bData.depth) {
      return 1;
    }
    if (bData.depth > aData.depth) {
      return -1;
    }
    return 0;
  });
};
var getZoneId = (candidate) => {
  let id = candidate == null ? void 0 : candidate.id;
  if (!candidate) return null;
  if (candidate.type === "component") {
    const data = candidate.data;
    if (data.containsActiveZone) {
      id = null;
    } else {
      id = data.zone;
    }
  } else if (candidate.type === "void") {
    return "void";
  }
  return id;
};
var BUFFER = 6;
var getPointerCollisions = (position, manager) => {
  const candidates = [];
  let elements = position.target.ownerDocument.elementsFromPoint(
    position.x,
    position.y
  );
  const previewFrame = elements.find(
    (el) => el.getAttribute("data-puck-preview")
  );
  const drawer = elements.find((el) => el.getAttribute("data-puck-drawer"));
  if (drawer) {
    elements = [drawer];
  }
  if (previewFrame) {
    const frame = getFrame();
    if (frame) {
      elements = frame.elementsFromPoint(position.frame.x, position.frame.y);
    }
  }
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const dropzoneId = element.getAttribute("data-puck-dropzone");
      const id = element.getAttribute("data-puck-dnd");
      const isVoid = element.hasAttribute("data-puck-dnd-void");
      if (BUFFER && (dropzoneId || id) && !isVoid) {
        const box = element.getBoundingClientRect();
        const contractedBox = {
          left: box.left + BUFFER,
          right: box.right - BUFFER,
          top: box.top + BUFFER,
          bottom: box.bottom - BUFFER
        };
        if (position.frame.x < contractedBox.left || position.frame.x > contractedBox.right || position.frame.y > contractedBox.bottom || position.frame.y < contractedBox.top) {
          continue;
        }
      }
      if (dropzoneId) {
        const droppable = manager.registry.droppables.get(dropzoneId);
        if (droppable) {
          candidates.push(droppable);
        }
      }
      if (id) {
        const droppable = manager.registry.droppables.get(id);
        if (droppable) {
          candidates.push(droppable);
        }
      }
    }
  }
  return candidates;
};
var findDeepestCandidate = (position, manager) => {
  var _a;
  const candidates = getPointerCollisions(position, manager);
  if (candidates.length > 0) {
    const sortedCandidates = depthSort(candidates);
    const draggable = manager.dragOperation.source;
    const draggedCandidateIndex = sortedCandidates.findIndex(
      (candidate) => candidate.id === (draggable == null ? void 0 : draggable.id)
    );
    const draggedCandidateId = draggable == null ? void 0 : draggable.id;
    let filteredCandidates = [...sortedCandidates];
    if (draggedCandidateId && draggedCandidateIndex > -1) {
      filteredCandidates.splice(draggedCandidateIndex, 1);
    }
    filteredCandidates = filteredCandidates.filter((candidate) => {
      const candidateData = candidate.data;
      if (draggedCandidateId && draggedCandidateIndex > -1) {
        if (candidateData.path.indexOf(draggedCandidateId) > -1) {
          return false;
        }
      }
      if (candidate.type === "dropzone") {
        const candidateData2 = candidate.data;
        if (!candidateData2.isDroppableTarget) {
          return false;
        }
        if (candidateData2.areaId === draggedCandidateId) {
          return false;
        }
      } else if (candidate.type === "component") {
        const candidateData2 = candidate.data;
        if (!candidateData2.inDroppableZone) {
          return false;
        }
      }
      return true;
    });
    filteredCandidates.reverse();
    const primaryCandidate = filteredCandidates[0];
    if (!primaryCandidate) return { zone: null, area: null };
    const primaryCandidateData = primaryCandidate.data;
    const primaryCandidateIsComponent = "containsActiveZone" in primaryCandidateData;
    const zone = getZoneId(primaryCandidate);
    const area = primaryCandidateIsComponent && primaryCandidateData.containsActiveZone ? filteredCandidates[0].id : (_a = filteredCandidates[0]) == null ? void 0 : _a.data.areaId;
    return { zone, area };
  }
  return {
    zone: rootDroppableId,
    area: rootAreaId
  };
};
var createNestedDroppablePlugin = ({ onChange }, id) => class NestedDroppablePlugin extends Plugin {
  constructor(manager, options) {
    super(manager);
    if (typeof window === "undefined") {
      return;
    }
    this.registerEffect(() => {
      const handleMove = (event) => {
        const target = event instanceof BubbledPointerEvent ? event.originalTarget || event.target : event.target;
        const position = new GlobalPosition(target, {
          x: event.clientX,
          y: event.clientY
        });
        const elements = document.elementsFromPoint(
          position.global.x,
          position.global.y
        );
        const overEl = elements.some((el) => el.id === id);
        if (overEl) {
          onChange(findDeepestCandidate(position, manager), manager);
        }
      };
      const handleMoveThrottled = throttle(handleMove, 50);
      const handlePointerMove = (event) => {
        handleMoveThrottled(event);
      };
      document.body.addEventListener("pointermove", handlePointerMove, {
        capture: true
        // dndkit's PointerSensor prevents propagation during drag
      });
      const cleanup = () => {
        document.body.removeEventListener("pointermove", handlePointerMove, {
          capture: true
        });
      };
      return cleanup;
    });
  }
};

// lib/get-selector-for-id.ts
var getSelectorForId = (state, id) => {
  const node = state.indexes.nodes[id];
  if (!node) return;
  const zoneCompound = `${node.parentId}:${node.zone}`;
  const index = state.indexes.zones[zoneCompound].contentIds.indexOf(id);
  return { zone: zoneCompound, index };
};

// lib/insert-component.ts
var insertComponent = (componentType, zone, index, appStore) => __async(null, null, function* () {
  const { getState } = appStore;
  const id = generateId(componentType);
  const insertActionData = {
    type: "insert",
    componentType,
    destinationIndex: index,
    destinationZone: zone,
    id
  };
  const stateBefore = getState().state;
  const insertedState = insertAction(stateBefore, insertActionData, getState());
  const dispatch = getState().dispatch;
  dispatch(__spreadProps(__spreadValues({}, insertActionData), {
    // Dispatch insert rather set, as user's may rely on this via onAction
    // We must always record history here so the insert is added to user history
    // If the user has defined a resolveData method, they will end up with 2 history
    // entries on insert - one for the initial insert, and one when the data resolves
    recordHistory: true
  }));
  const itemSelector = { index, zone };
  dispatch({ type: "setUi", ui: { itemSelector } });
  const itemData = getItem(itemSelector, insertedState);
  if (!itemData) return;
  const resolveComponentData = getState().resolveComponentData;
  const resolved = yield resolveComponentData(itemData, "insert");
  if (!resolved.didChange) return;
  const latestItemSelector = getSelectorForId(getState().state, id);
  if (!latestItemSelector) return;
  dispatch({
    type: "replace",
    destinationZone: latestItemSelector.zone,
    destinationIndex: latestItemSelector.index,
    data: resolved.node
  });
});

// lib/move-component.ts
var moveComponent = (id, sourceSelector, destinationSelector, appStore) => __async(null, null, function* () {
  var _a, _b, _c, _d;
  const dispatch = appStore.getState().dispatch;
  dispatch({
    type: "move",
    sourceIndex: sourceSelector.index,
    sourceZone: (_a = sourceSelector.zone) != null ? _a : rootDroppableId,
    destinationIndex: destinationSelector.index,
    destinationZone: (_b = destinationSelector.zone) != null ? _b : rootDroppableId,
    recordHistory: false
  });
  const componentData = (_c = appStore.getState().state.indexes.nodes[id]) == null ? void 0 : _c.data;
  if (!componentData) return;
  const resolveComponentData = appStore.getState().resolveComponentData;
  const resolvedData = yield resolveComponentData(componentData, "move");
  const latestItemSelector = getSelectorForId(
    appStore.getState().state,
    componentData.props.id
  );
  if (!latestItemSelector) return;
  if (resolvedData.didChange)
    dispatch({
      type: "replace",
      data: resolvedData.node,
      destinationIndex: latestItemSelector.index,
      destinationZone: (_d = latestItemSelector.zone) != null ? _d : rootDroppableId
    });
});

// components/DragDropContext/index.tsx
import { useDebouncedCallback } from "use-debounce";
import { createStore as createStore4 } from "zustand";

// lib/get-deep-dir.ts
function getDeepDir(el) {
  function findDir(node) {
    if (!node) return "ltr";
    const d = node.getAttribute("dir");
    return d || findDir(node.parentElement);
  }
  return el ? findDir(el) : "ltr";
}

// components/DragDropContext/index.tsx
import { effect } from "@dnd-kit/state";
import { jsx as jsx23 } from "react/jsx-runtime";
var DEBUG3 = false;
var dragListenerContext = createContext4({
  dragListeners: {}
});
function useDragListener(type, fn, deps = []) {
  const { setDragListeners } = useContext6(dragListenerContext);
  useEffect9(() => {
    if (setDragListeners) {
      setDragListeners((old) => __spreadProps(__spreadValues({}, old), {
        [type]: [...old[type] || [], fn]
      }));
    }
  }, deps);
}
var AREA_CHANGE_DEBOUNCE_MS = 100;
var useTempDisableFallback = (timeout3) => {
  const lastFallbackDisable = useRef3(null);
  return useCallback8((manager) => {
    collisionStore.setState({ fallbackEnabled: false });
    const fallbackId = generateId();
    lastFallbackDisable.current = fallbackId;
    setTimeout(() => {
      if (lastFallbackDisable.current === fallbackId) {
        collisionStore.setState({ fallbackEnabled: true });
        manager.collisionObserver.forceUpdate(true);
      }
    }, timeout3);
  }, []);
};
var DragDropContextClient = ({
  children,
  disableAutoScroll
}) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const instanceId = useAppStore((s) => s.instanceId);
  const appStore = useAppStoreApi();
  const debouncedParamsRef = useRef3(null);
  const tempDisableFallback = useTempDisableFallback(100);
  const [zoneStore] = useState10(() => {
    const rootVirtualizers = /* @__PURE__ */ new Map();
    return createStore4(() => ({
      zoneDepthIndex: {},
      nextZoneDepthIndex: {},
      areaDepthIndex: {},
      nextAreaDepthIndex: {},
      draggedItem: null,
      previewIndex: {},
      enabledIndex: {},
      hoveringComponent: null,
      registerRootVirtualizer: (zoneCompound, handle) => {
        rootVirtualizers.set(zoneCompound, handle);
      },
      unregisterRootVirtualizer: (zoneCompound) => {
        rootVirtualizers.delete(zoneCompound);
      },
      scrollToComponent: (id) => {
        const virtualizers = Array.from(rootVirtualizers.values());
        if (virtualizers.length > 0) {
          for (const handle of virtualizers) {
            const index = handle.resolveIndex(id);
            if (index < 0) {
              continue;
            }
            handle.virtualizer.scrollToIndex(index, {
              behavior: "auto",
              // We avoid smooth scroll as this triggers virtualizer renders
              align: "auto"
            });
          }
        } else {
          const frame = getFrame();
          const el = frame == null ? void 0 : frame.querySelector(`[data-puck-component="${id}"]`);
          el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }));
  });
  const getChanged = useCallback8(
    (params) => {
      const { zoneDepthIndex = {}, areaDepthIndex = {} } = zoneStore.getState() || {};
      const stateHasZone = Object.keys(zoneDepthIndex).length > 0;
      const stateHasArea = Object.keys(areaDepthIndex).length > 0;
      let zoneChanged = false;
      let areaChanged = false;
      if (params.zone && !zoneDepthIndex[params.zone]) {
        zoneChanged = true;
      } else if (!params.zone && stateHasZone) {
        zoneChanged = true;
      }
      if (params.area && !areaDepthIndex[params.area]) {
        areaChanged = true;
      } else if (!params.area && stateHasArea) {
        areaChanged = true;
      }
      return { zoneChanged, areaChanged };
    },
    [zoneStore]
  );
  const setDeepestAndCollide = useCallback8(
    (params, manager) => {
      const { zoneChanged, areaChanged } = getChanged(params);
      if (!zoneChanged && !areaChanged) return;
      zoneStore.setState({
        zoneDepthIndex: params.zone ? { [params.zone]: true } : {},
        areaDepthIndex: params.area ? { [params.area]: true } : {}
      });
      tempDisableFallback(manager);
      setTimeout(() => {
        manager.collisionObserver.forceUpdate(true);
      }, 50);
      debouncedParamsRef.current = null;
    },
    [zoneStore]
  );
  const setDeepestDb = useDebouncedCallback(
    setDeepestAndCollide,
    AREA_CHANGE_DEBOUNCE_MS
  );
  const cancelDb = () => {
    setDeepestDb.cancel();
    debouncedParamsRef.current = null;
  };
  useEffect9(() => {
    if (DEBUG3) {
      zoneStore.subscribe(
        (s) => {
          var _a, _b;
          return console.log(
            s.previewIndex,
            (_a = Object.entries(s.zoneDepthIndex || {})[0]) == null ? void 0 : _a[0],
            (_b = Object.entries(s.areaDepthIndex || {})[0]) == null ? void 0 : _b[0]
          );
        }
      );
    }
  }, []);
  const [plugins] = useState10(() => [
    ...disableAutoScroll ? defaultPreset.plugins.filter((plugin) => plugin !== AutoScroller) : defaultPreset.plugins,
    createNestedDroppablePlugin(
      {
        onChange: (params, manager) => {
          const state = zoneStore.getState();
          const { zoneChanged, areaChanged } = getChanged(params);
          const isDragging = manager.dragOperation.status.dragging;
          if (areaChanged || zoneChanged) {
            let nextZoneDepthIndex = {};
            let nextAreaDepthIndex = {};
            if (params.zone) {
              nextZoneDepthIndex = { [params.zone]: true };
            }
            if (params.area) {
              nextAreaDepthIndex = { [params.area]: true };
            }
            zoneStore.setState({ nextZoneDepthIndex, nextAreaDepthIndex });
          }
          if (params.zone !== "void" && (state == null ? void 0 : state.zoneDepthIndex["void"])) {
            setDeepestAndCollide(params, manager);
            return;
          }
          if (areaChanged) {
            if (isDragging) {
              const debouncedParams = debouncedParamsRef.current;
              const isSameParams = debouncedParams && debouncedParams.area === params.area && debouncedParams.zone === params.zone;
              if (!isSameParams) {
                cancelDb();
                setDeepestDb(params, manager);
                debouncedParamsRef.current = params;
              }
            } else {
              cancelDb();
              setDeepestAndCollide(params, manager);
            }
            return;
          }
          if (zoneChanged) {
            setDeepestAndCollide(params, manager);
          }
          cancelDb();
        }
      },
      instanceId
    )
  ]);
  const sensors = useSensors();
  const [dragListeners, setDragListeners] = useState10({});
  const dragMode = useRef3(null);
  const initialSelector = useRef3(void 0);
  const nextContextValue = useMemo8(
    () => ({
      mode: "edit",
      areaId: "root",
      depth: 0
    }),
    []
  );
  return /* @__PURE__ */ jsx23(
    dragListenerContext.Provider,
    {
      value: {
        dragListeners,
        setDragListeners
      },
      children: /* @__PURE__ */ jsx23(
        DragDropProvider2,
        {
          plugins,
          sensors,
          onDragEnd: (event, manager) => {
            var _a, _b;
            const entryEl = (_a = getFrame()) == null ? void 0 : _a.querySelector("[data-puck-entry]");
            entryEl == null ? void 0 : entryEl.removeAttribute("data-puck-dragging");
            const { source, target } = event.operation;
            if (!source) {
              zoneStore.setState({ draggedItem: null });
              return;
            }
            const { zone, index } = source.data;
            const { previewIndex = {} } = zoneStore.getState() || {};
            const thisPreview = ((_b = previewIndex[zone]) == null ? void 0 : _b.props.id) === source.id ? previewIndex[zone] : null;
            const onAnimationEnd = () => {
              var _a2, _b2, _c, _d;
              zoneStore.setState({ draggedItem: null });
              if (event.canceled || (target == null ? void 0 : target.type) === "void") {
                zoneStore.setState({ previewIndex: {} });
                (_a2 = dragListeners.dragend) == null ? void 0 : _a2.forEach((fn) => {
                  fn(event, manager);
                });
                dispatch({
                  type: "setUi",
                  ui: {
                    itemSelector: null,
                    isDragging: false
                  }
                });
                return;
              }
              if (thisPreview) {
                zoneStore.setState({ previewIndex: {} });
                if (thisPreview.type === "insert") {
                  insertComponent(
                    thisPreview.componentType,
                    thisPreview.zone,
                    thisPreview.index,
                    appStore
                  );
                } else if (initialSelector.current) {
                  moveComponent(
                    thisPreview.props.id,
                    initialSelector.current,
                    thisPreview,
                    appStore
                  );
                }
              }
              const movedToNewPosition = ((_b2 = initialSelector.current) == null ? void 0 : _b2.zone) !== (thisPreview == null ? void 0 : thisPreview.zone) || ((_c = initialSelector.current) == null ? void 0 : _c.index) !== (thisPreview == null ? void 0 : thisPreview.index);
              dispatch({
                type: "setUi",
                ui: {
                  itemSelector: { index, zone },
                  isDragging: false
                },
                recordHistory: movedToNewPosition
              });
              (_d = dragListeners.dragend) == null ? void 0 : _d.forEach((fn) => {
                fn(event, manager);
              });
            };
            let dispose;
            dispose = effect(() => {
              if (source.status === "idle") {
                onAnimationEnd();
                dispose == null ? void 0 : dispose();
              }
            });
          },
          onDragOver: (event, manager) => {
            var _a, _b, _c, _d;
            event.preventDefault();
            const draggedItem = (_a = zoneStore.getState()) == null ? void 0 : _a.draggedItem;
            if (!draggedItem) return;
            cancelDb();
            const { source, target } = event.operation;
            if (!target || !source || target.type === "void") return;
            const [sourceId] = source.id.split(":");
            const [targetId] = target.id.split(":");
            const sourceData = source.data;
            let sourceZone = sourceData.zone;
            let sourceIndex = sourceData.index;
            let targetZone = "";
            let targetIndex = 0;
            if (target.type === "component") {
              const targetData = target.data;
              targetZone = targetData.zone;
              targetIndex = targetData.index;
              const collisionData = (_b = manager.collisionObserver.collisions[0]) == null ? void 0 : _b.data;
              const dir = getDeepDir(target.element);
              const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" || dir === "ltr" && (collisionData == null ? void 0 : collisionData.direction) === "left" || dir === "rtl" && (collisionData == null ? void 0 : collisionData.direction) === "right" ? "before" : "after";
              if (targetIndex >= sourceIndex && sourceZone === targetZone) {
                targetIndex = targetIndex - 1;
              }
              if (collisionPosition === "after") {
                targetIndex = targetIndex + 1;
              }
            } else {
              targetZone = target.id.toString();
              targetIndex = 0;
            }
            const path = ((_c = appStore.getState().state.indexes.nodes[target.id]) == null ? void 0 : _c.path) || [];
            if (targetId === sourceId || path.find((path2) => {
              const [pathId] = path2.split(":");
              return pathId === sourceId;
            })) {
              return;
            }
            if (dragMode.current === "new") {
              zoneStore.setState({
                previewIndex: {
                  [targetZone]: {
                    componentType: sourceData.componentType,
                    type: "insert",
                    index: targetIndex,
                    zone: targetZone,
                    element: source.element,
                    props: {
                      id: source.id.toString()
                    }
                  }
                }
              });
            } else {
              if (!initialSelector.current) {
                initialSelector.current = {
                  zone: sourceData.zone,
                  index: sourceData.index
                };
              }
              const item = getItem(
                initialSelector.current,
                appStore.getState().state
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [targetZone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: targetIndex,
                      zone: targetZone,
                      props: item.props,
                      element: source.element
                    }
                  }
                });
              }
            }
            (_d = dragListeners.dragover) == null ? void 0 : _d.forEach((fn) => {
              fn(event, manager);
            });
          },
          onDragStart: (event, manager) => {
            var _a;
            const { source } = event.operation;
            if (source && source.type !== "void") {
              const sourceData = source.data;
              const item = getItem(
                {
                  zone: sourceData.zone,
                  index: sourceData.index
                },
                appStore.getState().state
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [sourceData.zone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: sourceData.index,
                      zone: sourceData.zone,
                      props: item.props,
                      element: source.element
                    }
                  }
                });
              }
            }
            (_a = dragListeners.dragstart) == null ? void 0 : _a.forEach((fn) => {
              fn(event, manager);
            });
          },
          onBeforeDragStart: (event) => {
            var _a, _b, _c, _d;
            const isNewComponent = ((_a = event.operation.source) == null ? void 0 : _a.type) === "drawer";
            dragMode.current = isNewComponent ? "new" : "existing";
            initialSelector.current = void 0;
            zoneStore.setState({ draggedItem: event.operation.source });
            if (((_b = appStore.getState().selectedItem) == null ? void 0 : _b.props.id) !== ((_c = event.operation.source) == null ? void 0 : _c.id)) {
              dispatch({
                type: "setUi",
                ui: {
                  itemSelector: null,
                  isDragging: true
                },
                recordHistory: false
              });
            } else {
              dispatch({
                type: "setUi",
                ui: {
                  isDragging: true
                },
                recordHistory: false
              });
            }
            const entryEl = (_d = getFrame()) == null ? void 0 : _d.querySelector("[data-puck-entry]");
            entryEl == null ? void 0 : entryEl.setAttribute("data-puck-dragging", "true");
          },
          children: /* @__PURE__ */ jsx23(ZoneStoreProvider, { store: zoneStore, children: /* @__PURE__ */ jsx23(DropZoneProvider, { value: nextContextValue, children }) })
        }
      )
    }
  );
};
var DragDropContext = ({
  children,
  disableAutoScroll
}) => {
  const status = useAppStore((s) => s.status);
  if (status === "LOADING") {
    return children;
  }
  return /* @__PURE__ */ jsx23(DragDropContextClient, { disableAutoScroll, children });
};

// components/Drawer/index.tsx
import { useDraggable, useDroppable } from "@dnd-kit/react";
import { jsx as jsx24, jsxs as jsxs8 } from "react/jsx-runtime";
var getClassName15 = get_class_name_factory_default("Drawer", styles_module_default10);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default10);
var DrawerItemInner = ({
  children,
  name,
  label,
  dragRef,
  isDragDisabled
}) => {
  const CustomInner = useMemo9(
    () => children || (({ children: children2 }) => /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: getClassNameItem2({ disabled: isDragDisabled }),
      ref: dragRef,
      onMouseDown: (e) => e.preventDefault(),
      "data-testid": dragRef ? `drawer-item:${name}` : "",
      "data-puck-drawer-item": true,
      children: /* @__PURE__ */ jsx24(CustomInner, { name, children: /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ jsxs8("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("name"), children: label != null ? label : name }),
        /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ jsx24(DragIcon, {}) })
      ] }) }) })
    }
  );
};
var DrawerItemDraggable = ({
  children,
  name,
  label,
  id,
  isDragDisabled
}) => {
  const { ref } = useDraggable({
    id,
    data: { componentType: name },
    disabled: isDragDisabled,
    type: "drawer"
  });
  return /* @__PURE__ */ jsxs8("div", { className: getClassName15("draggable"), children: [
    /* @__PURE__ */ jsx24("div", { className: getClassName15("draggableBg"), children: /* @__PURE__ */ jsx24(DrawerItemInner, { name, label, children }) }),
    /* @__PURE__ */ jsx24("div", { className: getClassName15("draggableFg"), children: /* @__PURE__ */ jsx24(
      DrawerItemInner,
      {
        name,
        label,
        dragRef: ref,
        isDragDisabled,
        children
      }
    ) })
  ] });
};
var DrawerItem = ({
  name,
  children,
  id,
  label,
  index,
  isDragDisabled
}) => {
  const resolvedId = id || name;
  const [dynamicId, setDynamicId] = useState11(generateId(resolvedId));
  if (typeof index !== "undefined") {
    console.error(
      "Warning: The `index` prop on Drawer.Item is deprecated and no longer required."
    );
  }
  useDragListener(
    "dragend",
    () => {
      setDynamicId(generateId(resolvedId));
    },
    [resolvedId]
  );
  return /* @__PURE__ */ jsx24("div", { children: /* @__PURE__ */ jsx24(
    DrawerItemDraggable,
    {
      name,
      label,
      id: dynamicId,
      isDragDisabled,
      children
    }
  ) }, dynamicId);
};
var Drawer = ({
  children,
  droppableId,
  direction
}) => {
  if (droppableId) {
    console.error(
      "Warning: The `droppableId` prop on Drawer is deprecated and no longer required."
    );
  }
  if (direction) {
    console.error(
      "Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging."
    );
  }
  const id = useSafeId();
  const { ref } = useDroppable({
    id,
    type: "void",
    collisionPriority: 0
    // Never collide with this, but we use it so NestedDroppablePlugin respects the Drawer
  });
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: getClassName15(),
      ref,
      "data-puck-dnd": id,
      "data-puck-drawer": true,
      "data-puck-dnd-void": true,
      children
    }
  );
};
Drawer.Item = DrawerItem;

// components/DropZone/lib/use-min-empty-height.ts
import { useEffect as useEffect10, useRef as useRef4, useState as useState12 } from "react";
var getNumItems = (appStore, zoneCompound) => appStore.getState().state.indexes.zones[zoneCompound].contentIds.length;
var useMinEmptyHeight = ({
  zoneCompound,
  userMinEmptyHeight,
  ref
}) => {
  const appStore = useAppStoreApi();
  const [prevHeight, setPrevHeight] = useState12(0);
  const [isAnimating, setIsAnimating] = useState12(false);
  const { draggedItem, isZone } = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    return {
      draggedItem: ((_a = s.draggedItem) == null ? void 0 : _a.data.zone) === zoneCompound ? s.draggedItem : null,
      isZone: ((_b = s.draggedItem) == null ? void 0 : _b.data.zone) === zoneCompound
    };
  });
  const numItems = useRef4(0);
  const onDragFinished = useOnDragFinished(
    (finished) => {
      if (finished) {
        const newNumItems = getNumItems(appStore, zoneCompound);
        setPrevHeight(0);
        if (newNumItems || numItems.current === 0) {
          setIsAnimating(false);
          return;
        }
        const selectedItem = appStore.getState().selectedItem;
        const zones = appStore.getState().state.indexes.zones;
        const nodes = appStore.getState().nodes;
        nodes.setOverlayVisible(selectedItem == null ? void 0 : selectedItem.props.id, false);
        setTimeout(() => {
          var _a;
          const contentIds = ((_a = zones[zoneCompound]) == null ? void 0 : _a.contentIds) || [];
          nodes.syncNodes(contentIds);
          if (selectedItem) {
            setTimeout(() => {
              nodes.syncNode(selectedItem.props.id);
              nodes.setOverlayVisible(selectedItem.props.id, true);
            }, 200);
          }
          setIsAnimating(false);
        }, 100);
      }
    },
    [appStore, prevHeight, zoneCompound]
  );
  useEffect10(() => {
    if (draggedItem && ref.current) {
      if (isZone) {
        const rect = ref.current.getBoundingClientRect();
        numItems.current = getNumItems(appStore, zoneCompound);
        setPrevHeight(rect.height);
        setIsAnimating(true);
        return onDragFinished();
      }
    }
  }, [ref.current, draggedItem, onDragFinished]);
  const returnedMinHeight = isNaN(Number(userMinEmptyHeight)) ? userMinEmptyHeight : `${userMinEmptyHeight}px`;
  return [prevHeight ? `${prevHeight}px` : returnedMinHeight, isAnimating];
};

// components/DropZone/lib/use-content-with-preview.ts
import { useContext as useContext7, useEffect as useEffect11, useState as useState13 } from "react";

// lib/dnd/use-rendered-callback.ts
import { useDragDropManager } from "@dnd-kit/react";
import { useCallback as useCallback9 } from "react";
function useRenderedCallback(callback, deps) {
  const manager = useDragDropManager();
  return useCallback9(
    (...args) => __async(null, null, function* () {
      yield manager == null ? void 0 : manager.renderer.rendering;
      return callback(...args);
    }),
    [...deps, manager]
  );
}

// components/DropZone/lib/use-content-with-preview.ts
var useContentIdsWithPreview = (contentIds, zoneCompound) => {
  const zoneStore = useContext7(ZoneStoreContext);
  const preview = useContextStore(
    ZoneStoreContext,
    (s) => s.previewIndex[zoneCompound]
  );
  const isDragging = useAppStore((s) => s.state.ui.isDragging);
  const [contentIdsWithPreview, setContentIdsWithPreview] = useState13(contentIds);
  const [localPreview, setLocalPreview] = useState13(
    preview
  );
  const updateContent = useRenderedCallback(
    (contentIds2, preview2, isDragging2, draggedItemId, previewExists) => {
      if (isDragging2 && !previewExists) {
        return;
      }
      if (preview2) {
        if (preview2.type === "insert") {
          setContentIdsWithPreview(
            insert(
              contentIds2.filter((id) => id !== preview2.props.id),
              preview2.index,
              preview2.props.id
            )
          );
        } else {
          setContentIdsWithPreview(
            insert(
              contentIds2.filter((id) => id !== preview2.props.id),
              preview2.index,
              preview2.props.id
            )
          );
        }
      } else {
        setContentIdsWithPreview(
          previewExists ? contentIds2.filter((id) => id !== draggedItemId) : contentIds2
        );
      }
      setLocalPreview(preview2);
    },
    []
  );
  useEffect11(() => {
    var _a;
    const s = zoneStore.getState();
    const draggedItemId = (_a = s.draggedItem) == null ? void 0 : _a.id;
    const previewExists = Object.keys(s.previewIndex || {}).length > 0;
    updateContent(
      contentIds,
      preview,
      isDragging,
      draggedItemId,
      previewExists
    );
  }, [contentIds, preview, isDragging]);
  return [contentIdsWithPreview, localPreview];
};

// components/DropZone/lib/use-drag-axis.ts
import { useCallback as useCallback10, useEffect as useEffect12, useState as useState14 } from "react";
var GRID_DRAG_AXIS = "dynamic";
var FLEX_ROW_DRAG_AXIS = "x";
var DEFAULT_DRAG_AXIS = "y";
var useDragAxis = (ref, collisionAxis) => {
  const status = useAppStore((s) => s.status);
  const [dragAxis, setDragAxis] = useState14(
    collisionAxis || DEFAULT_DRAG_AXIS
  );
  const calculateDragAxis = useCallback10(() => {
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "grid") {
        setDragAxis(GRID_DRAG_AXIS);
      } else if (computedStyle.display === "flex" && computedStyle.flexDirection === "row") {
        setDragAxis(FLEX_ROW_DRAG_AXIS);
      } else {
        setDragAxis(DEFAULT_DRAG_AXIS);
      }
    }
  }, [ref.current]);
  useEffect12(() => {
    const onViewportChange = () => {
      calculateDragAxis();
    };
    window.addEventListener("viewportchange", onViewportChange);
    return () => {
      window.removeEventListener("viewportchange", onViewportChange);
    };
  }, []);
  useEffect12(calculateDragAxis, [status, collisionAxis]);
  return [dragAxis, calculateDragAxis];
};

// components/DropZone/index.tsx
import { useShallow as useShallow6 } from "zustand/react/shallow";

// components/SlotRender/index.tsx
import { useShallow as useShallow5 } from "zustand/react/shallow";
import { jsx as jsx25 } from "react/jsx-runtime";
var ContextSlotRender = ({
  componentId,
  zone
}) => {
  const config = useAppStore((s) => s.config);
  const metadata = useAppStore((s) => s.metadata);
  const slotContent = useAppStore(
    useShallow5((s) => {
      var _a, _b;
      const indexes = s.state.indexes;
      const contentIds = (_b = (_a = indexes.zones[`${componentId}:${zone}`]) == null ? void 0 : _a.contentIds) != null ? _b : [];
      return contentIds.map((contentId) => indexes.nodes[contentId].flatData);
    })
  );
  return /* @__PURE__ */ jsx25(
    SlotRenderPure,
    {
      content: slotContent,
      zone,
      config,
      metadata
    }
  );
};

// lib/field-transforms/use-field-transforms-tracked.tsx
import { useMemo as useMemo10, useRef as useRef5 } from "react";
function useFieldTransformsTracked(config, item, transforms, readOnly, forceReadOnly) {
  const prevProps = useRef5(null);
  const prevResult = useRef5(item.props);
  const mappers = useMemo10(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = useMemo10(() => {
    var _a, _b, _c;
    const changedProps = {};
    const componentConfig = item.type === "root" ? config.root : (_a = config.components) == null ? void 0 : _a[item.type];
    let changeIncludesSlot = false;
    for (const fieldName in item.props) {
      const fieldType = (_c = (_b = componentConfig == null ? void 0 : componentConfig.fields) == null ? void 0 : _b[fieldName]) == null ? void 0 : _c.type;
      if (!prevProps.current || item.props[fieldName] !== prevProps.current[fieldName]) {
        changedProps[fieldName] = item.props[fieldName];
        if (fieldType === "slot") {
          changeIncludesSlot = true;
        }
      }
    }
    changedProps.id = item.props.id;
    prevProps.current = item.props;
    const mapped = mapFields(
      __spreadProps(__spreadValues({}, item), { props: changedProps }),
      mappers,
      config,
      false,
      changeIncludesSlot
    ).props;
    prevResult.current = __spreadValues(__spreadValues({}, prevResult.current), mapped);
    return prevResult.current;
  }, [config, item, mappers]);
  const mergedProps = useMemo10(
    () => __spreadValues(__spreadValues({}, item.props), transformedProps),
    [item.props, transformedProps]
  );
  return mergedProps;
}

// components/InlineTextField/index.tsx
import { memo as memo4, useEffect as useEffect13, useRef as useRef6, useState as useState15 } from "react";

// lib/overlay-portal/index.tsx
var registerOverlayPortal = (el, opts = {}) => {
  if (!el) return;
  const { disableDrag = false, disableDragOnFocus = true } = opts;
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  el.addEventListener("mouseover", stopPropagation, {
    capture: true
  });
  const onFocus = () => {
    setTimeout(() => {
      el.addEventListener("pointerdown", stopPropagation, {
        capture: true
      });
    }, 200);
  };
  const onBlur = () => {
    el.removeEventListener("pointerdown", stopPropagation, {
      capture: true
    });
  };
  if (disableDrag) {
    el.addEventListener("pointerdown", stopPropagation, {
      capture: true
    });
  } else if (disableDragOnFocus) {
    el.addEventListener("focus", onFocus, { capture: true });
    el.addEventListener("blur", onBlur, { capture: true });
  }
  el.setAttribute("data-puck-overlay-portal", "true");
  return () => {
    el.removeEventListener("mouseover", stopPropagation, {
      capture: true
    });
    if (disableDrag) {
      el.removeEventListener("pointerdown", stopPropagation, {
        capture: true
      });
    } else if (disableDragOnFocus) {
      el.removeEventListener("focus", onFocus, { capture: true });
      el.removeEventListener("blur", onBlur, { capture: true });
    }
    el.removeAttribute("data-puck-overlay-portal");
  };
};

// css-module:/Users/feb/HTDocs/custom-puck/components/InlineTextField/styles.module.css#css-module
var styles_module_default11 = { "InlineTextField": "_InlineTextField_104qp_1" };

// components/InlineTextField/index.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
var getClassName16 = get_class_name_factory_default("InlineTextField", styles_module_default11);
var InlineTextFieldInternal = ({
  propPath,
  componentId,
  value,
  isReadOnly,
  opts = {}
}) => {
  var _a;
  const ref = useRef6(null);
  const appStoreApi = useAppStoreApi();
  const disableLineBreaks = (_a = opts.disableLineBreaks) != null ? _a : false;
  useEffect13(() => {
    const appStore = appStoreApi.getState();
    const data = appStore.state.indexes.nodes[componentId].data;
    const componentConfig = appStore.getComponentConfig(data.type);
    if (!componentConfig) {
      throw new Error(
        `InlineTextField Error: No config defined for ${data.type}`
      );
    }
    if (ref.current) {
      if (value !== ref.current.innerText) {
        ref.current.replaceChildren(value);
      }
      const cleanupPortal = registerOverlayPortal(ref.current);
      const handleInput = (e) => __async(null, null, function* () {
        var _a2;
        const appStore2 = appStoreApi.getState();
        const node = appStore2.state.indexes.nodes[componentId];
        const zoneCompound = `${node.parentId}:${node.zone}`;
        const index = (_a2 = appStore2.state.indexes.zones[zoneCompound]) == null ? void 0 : _a2.contentIds.indexOf(
          componentId
        );
        let value2 = e.target.innerText;
        if (disableLineBreaks) {
          value2 = value2.replaceAll(/\n/gm, "");
        }
        const newProps = setDeep(node.data.props, propPath, value2);
        const resolvedData = yield appStore2.resolveComponentData(
          __spreadProps(__spreadValues({}, node.data), { props: newProps }),
          "replace"
        );
        appStore2.dispatch({
          type: "replace",
          data: resolvedData.node,
          destinationIndex: index,
          destinationZone: zoneCompound
        });
      });
      ref.current.addEventListener("input", handleInput);
      return () => {
        var _a2;
        (_a2 = ref.current) == null ? void 0 : _a2.removeEventListener("input", handleInput);
        cleanupPortal == null ? void 0 : cleanupPortal();
      };
    }
  }, [appStoreApi, ref.current, value, disableLineBreaks]);
  const [isHovering, setIsHovering] = useState15(false);
  const [isFocused, setIsFocused] = useState15(false);
  return /* @__PURE__ */ jsx26(
    "span",
    {
      className: getClassName16(),
      ref,
      contentEditable: isHovering || isFocused ? "plaintext-only" : "false",
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      onClickCapture: (e) => {
        e.preventDefault();
        e.stopPropagation();
        const itemSelector = getSelectorForId(
          appStoreApi.getState().state,
          componentId
        );
        appStoreApi.getState().setUi({ itemSelector });
      },
      onKeyDown: (e) => {
        e.stopPropagation();
        if (disableLineBreaks && e.key === "Enter" || isReadOnly) {
          e.preventDefault();
        }
      },
      onKeyUp: (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      onMouseOverCapture: () => setIsHovering(true),
      onMouseOutCapture: () => setIsHovering(false),
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false)
    }
  );
};
var InlineTextField = memo4(InlineTextFieldInternal);

// lib/field-transforms/default-transforms/inline-text-transform.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var getInlineTextTransform = () => ({
  text: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable) {
      return /* @__PURE__ */ jsx27(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          opts: { disableLineBreaks: true },
          isReadOnly
        }
      );
    }
    return value;
  },
  textarea: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable) {
      return /* @__PURE__ */ jsx27(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          isReadOnly
        }
      );
    }
    return value;
  },
  custom: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable && typeof value === "string") {
      return /* @__PURE__ */ jsx27(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          isReadOnly
        }
      );
    }
    return value;
  }
});

// lib/field-transforms/default-transforms/rich-text-transform.tsx
import {
  useEffect as useEffect14,
  useRef as useRef7,
  useCallback as useCallback11,
  memo as memo5,
  lazy as lazy2,
  Suspense as Suspense2
} from "react";
import { jsx as jsx28 } from "react/jsx-runtime";
var Editor2 = lazy2(
  () => import("./Editor-SMVWGBZC.mjs").then((m) => ({
    default: m.Editor
  }))
);
var RichTextRender = lazy2(
  () => import("./Render-Z5ACUEYX.mjs").then((m) => ({
    default: m.RichTextRender
  }))
);
var InlineEditorWrapper = memo5(
  ({
    value,
    componentId,
    propPath,
    field,
    id
  }) => {
    const portalRef = useRef7(null);
    const appStoreApi = useAppStoreApi();
    const onClickHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const onClickCaptureHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const itemSelector = getSelectorForId(
        appStoreApi.getState().state,
        componentId
      );
      appStoreApi.getState().setUi({ itemSelector });
    };
    useEffect14(() => {
      if (!portalRef.current) return;
      const cleanup = registerOverlayPortal(portalRef.current, {
        disableDragOnFocus: true
      });
      return () => cleanup == null ? void 0 : cleanup();
    }, [portalRef.current]);
    const handleChange = useCallback11(
      (content, ui) => __async(null, null, function* () {
        var _a;
        const appStore = appStoreApi.getState();
        const node = appStore.state.indexes.nodes[componentId];
        const zoneCompound = `${node.parentId}:${node.zone}`;
        const index = (_a = appStore.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds.indexOf(
          componentId
        );
        const newProps = setDeep(node.data.props, propPath, content);
        const resolvedData = yield appStore.resolveComponentData(
          __spreadProps(__spreadValues({}, node.data), { props: newProps }),
          "replace"
        );
        appStore.dispatch({
          type: "replace",
          data: resolvedData.node,
          destinationIndex: index,
          destinationZone: zoneCompound,
          ui
        });
      }),
      [appStoreApi, componentId, propPath]
    );
    const handleFocus = useCallback11(
      (editor) => {
        appStoreApi.setState({
          currentRichText: {
            inlineComponentId: componentId,
            inline: true,
            field,
            editor,
            id
          }
        });
      },
      [field, componentId]
    );
    if (!field.contentEditable)
      return /* @__PURE__ */ jsx28(Suspense2, { fallback: /* @__PURE__ */ jsx28(RichTextRenderFallback, { content: value }), children: /* @__PURE__ */ jsx28(RichTextRender, { content: value, field }) });
    const editorProps = {
      content: value,
      onChange: handleChange,
      field,
      inline: true,
      onFocus: handleFocus,
      id,
      name: propPath
    };
    return /* @__PURE__ */ jsx28(
      "div",
      {
        ref: portalRef,
        onClick: onClickHandler,
        onClickCapture: onClickCaptureHandler,
        children: /* @__PURE__ */ jsx28(Suspense2, { fallback: /* @__PURE__ */ jsx28(EditorFallback, __spreadValues({}, editorProps)), children: /* @__PURE__ */ jsx28(Editor2, __spreadValues({}, editorProps)) })
      }
    );
  }
);
InlineEditorWrapper.displayName = "InlineEditorWrapper";
var getRichTextTransform = () => ({
  richtext: ({ value, componentId, field, propPath, isReadOnly }) => {
    const { contentEditable = true, tiptap } = field;
    if (contentEditable === false || isReadOnly) {
      return /* @__PURE__ */ jsx28(RichTextRender, { content: value, field });
    }
    const id = `${componentId}_${field.type}_${propPath}`;
    return /* @__PURE__ */ jsx28(
      InlineEditorWrapper,
      {
        value,
        componentId,
        propPath,
        field,
        id
      },
      id
    );
  }
});

// components/MemoizeComponent/index.tsx
import { deepEqual } from "fast-equals";
import { memo as memo6 } from "react";

// lib/shallow-equal.ts
function shallowEqual(obj1, obj2, keysToIgnore = []) {
  if (Object.is(obj1, obj2)) return true;
  if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
    return false;
  }
  if (Object.getPrototypeOf(obj1) !== Object.getPrototypeOf(obj2)) {
    return false;
  }
  const ignore = new Set(keysToIgnore);
  const keys1 = Object.keys(obj1).filter((k) => !ignore.has(k));
  const keys2 = Object.keys(obj2).filter((k) => !ignore.has(k));
  if (keys1.length !== keys2.length) return false;
  for (let i = 0; i < keys1.length; i++) {
    const currKey = keys1[i];
    if (!Object.prototype.hasOwnProperty.call(obj2, currKey)) return false;
    const val1 = obj1[currKey];
    const val2 = obj2[currKey];
    if (!Object.is(val1, val2)) return false;
  }
  return true;
}

// components/MemoizeComponent/index.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
var RenderComponent = ({
  Component,
  componentProps: renderProps
}) => {
  return /* @__PURE__ */ jsx29(Component, __spreadValues({}, renderProps));
};
var MemoizeComponent = memo6(RenderComponent, (prev, next) => {
  let puckEquals = true;
  if ("puck" in prev.componentProps && "puck" in next.componentProps) {
    puckEquals = deepEqual(prev.componentProps.puck, next.componentProps.puck);
  }
  return prev.Component === next.Component && shallowEqual(prev.componentProps, next.componentProps, ["puck"]) && puckEquals;
});

// components/DropZone/VirtualizedDropZone.tsx
import {
  useCallback as useCallback12,
  useContext as useContext8,
  useEffect as useEffect15,
  useMemo as useMemo11,
  useRef as useRef8
} from "react";
import {
  defaultRangeExtractor,
  elementScroll,
  observeElementOffset,
  observeElementRect,
  observeWindowOffset,
  observeWindowRect,
  useVirtualizer,
  windowScroll
} from "@tanstack/react-virtual";
import { Fragment as Fragment8, jsx as jsx30 } from "react/jsx-runtime";
var ROOT_ZONE_VIRTUALIZATION_OVERSCAN = 5;
var DEFAULT_VIRTUALIZED_ITEM_HEIGHT = 320;
var measuredItemHeights = /* @__PURE__ */ new Map();
var getEstimatedItemHeight = (componentId) => {
  var _a;
  return (_a = measuredItemHeights.get(componentId)) != null ? _a : DEFAULT_VIRTUALIZED_ITEM_HEIGHT;
};
var cacheMeasuredItemHeight = (componentId, height) => {
  if (height <= 0) {
    return;
  }
  measuredItemHeights.set(componentId, height);
};
var VirtualizedDropZone = ({
  contentIds,
  zoneCompound,
  renderItem
}) => {
  const selectedId = useAppStore((s) => {
    var _a, _b;
    return (_b = (_a = s.selectedItem) == null ? void 0 : _a.props.id) != null ? _b : null;
  });
  const frame = getFrame();
  const zoneStore = useContext8(ZoneStoreContext);
  const draggedItemId = useContextStore(ZoneStoreContext, (s) => {
    var _a;
    const draggedId = (_a = s.draggedItem) == null ? void 0 : _a.id;
    return draggedId ? String(draggedId) : null;
  });
  const dragTargetParentId = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    if ((_a = s.draggedItem) == null ? void 0 : _a.id) {
      const parentZone = Object.keys((_b = s.previewIndex) != null ? _b : {})[0];
      return parentZone == null ? void 0 : parentZone.split(":")[0];
    }
    return null;
  });
  const iframeWindow = frame == null ? void 0 : frame.defaultView;
  const measureRefsRef = useRef8(/* @__PURE__ */ new Map());
  const appStoreApi = useAppStoreApi();
  const resolveIndex = useCallback12(
    (targetId) => {
      var _a, _b, _c, _d;
      if (!targetId || targetId === "root") {
        return -1;
      }
      const directIndex = contentIds.indexOf(targetId);
      if (directIndex > -1) {
        return directIndex;
      }
      const path = (_c = (_b = (_a = appStoreApi.getState().state.indexes.nodes) == null ? void 0 : _a[targetId]) == null ? void 0 : _b.path) != null ? _c : [];
      for (let i = path.length - 1; i >= 0; i -= 1) {
        const candidateId = (_d = path[i]) == null ? void 0 : _d.split(":")[0];
        if (!candidateId || candidateId === "root") {
          continue;
        }
        const index = contentIds.indexOf(candidateId);
        if (index > -1) {
          return index;
        }
      }
      return -1;
    },
    [appStoreApi, contentIds]
  );
  const pinnedIndexes = useMemo11(() => {
    const nextPinnedIndexes = /* @__PURE__ */ new Set();
    [selectedId, draggedItemId, dragTargetParentId].forEach((targetId) => {
      const currentIndex = resolveIndex(targetId);
      if (currentIndex > -1) {
        nextPinnedIndexes.add(currentIndex);
      }
    });
    return Array.from(nextPinnedIndexes).sort((a, b) => a - b);
  }, [dragTargetParentId, draggedItemId, resolveIndex, selectedId]);
  const rangeExtractor = useCallback12(
    (range) => {
      const indexes = defaultRangeExtractor(range);
      pinnedIndexes.forEach((index) => {
        if (!indexes.includes(index)) {
          indexes.push(index);
        }
      });
      indexes.sort((a, b) => a - b);
      return indexes;
    },
    [pinnedIndexes]
  );
  const virtualizer = useVirtualizer({
    count: contentIds.length,
    getItemKey: (index) => contentIds[index],
    estimateSize: (index) => getEstimatedItemHeight(contentIds[index]),
    getScrollElement: () => iframeWindow != null ? iframeWindow : null,
    overscan: ROOT_ZONE_VIRTUALIZATION_OVERSCAN,
    observeElementRect: (instance, cb) => iframeWindow ? observeWindowRect(instance, cb) : observeElementRect(instance, cb),
    observeElementOffset: (instance, cb) => iframeWindow ? observeWindowOffset(instance, cb) : observeElementOffset(instance, cb),
    scrollToFn: (offset, options, instance) => iframeWindow ? windowScroll(offset, options, instance) : elementScroll(offset, options, instance),
    rangeExtractor,
    initialOffset: () => iframeWindow ? iframeWindow.scrollY : 0
  });
  useEffect15(() => {
    zoneStore.getState().registerRootVirtualizer(zoneCompound, {
      resolveIndex: (targetId) => resolveIndex(targetId),
      virtualizer
    });
    return () => {
      zoneStore.getState().unregisterRootVirtualizer(zoneCompound);
    };
  }, [resolveIndex, virtualizer, zoneCompound, zoneStore]);
  const getMeasureRef = useCallback12((componentId) => {
    const cachedRef = measureRefsRef.current.get(componentId);
    if (cachedRef) {
      return cachedRef;
    }
    const measureRef = (element) => {
      if (!element) {
        return;
      }
      const height = Math.ceil(element.getBoundingClientRect().height) || DEFAULT_VIRTUALIZED_ITEM_HEIGHT;
      if (typeof height === "number" && height > 0) {
        cacheMeasuredItemHeight(componentId, height);
      }
    };
    measureRefsRef.current.set(componentId, measureRef);
    return measureRef;
  }, []);
  useEffect15(() => {
    const validIds = new Set(contentIds);
    Array.from(measureRefsRef.current.keys()).forEach((componentId) => {
      if (!validIds.has(componentId)) {
        measureRefsRef.current.delete(componentId);
      }
    });
  }, [contentIds]);
  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const renderedItems = useMemo11(() => {
    const items = [];
    let previousEnd = 0;
    let previousIndex = -1;
    virtualItems.forEach((virtualItem) => {
      if (!virtualItem) return;
      const componentId = contentIds[virtualItem.index];
      const gapSize = Math.max(virtualItem.start - previousEnd, 0);
      if (gapSize > 0) {
        items.push(
          /* @__PURE__ */ jsx30(
            "div",
            {
              style: { height: `${gapSize}px` }
            },
            `gap:${previousIndex}:${virtualItem.index}`
          )
        );
      }
      items.push(
        renderItem({
          componentId,
          index: virtualItem.index,
          measureRef: getMeasureRef(componentId)
        })
      );
      previousEnd = virtualItem.end;
      previousIndex = virtualItem.index;
    });
    const trailingGap = Math.max(totalSize - previousEnd, 0);
    if (trailingGap > 0) {
      items.push(
        /* @__PURE__ */ jsx30(
          "div",
          {
            style: { height: `${trailingGap}px` }
          },
          `gap:${previousIndex}:end`
        )
      );
    }
    return items;
  }, [totalSize, virtualItems, getMeasureRef]);
  return /* @__PURE__ */ jsx30(Fragment8, { children: renderedItems });
};

// components/DropZone/index.tsx
import { Fragment as Fragment9, jsx as jsx31, jsxs as jsxs9 } from "react/jsx-runtime";
var getClassName17 = get_class_name_factory_default("DropZone", styles_module_default9);
var getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
var RENDER_DEBUG = false;
var InsertPreview = ({
  element,
  label,
  override
}) => {
  if (element) {
    return (
      // Safe to use this since the HTML is set by the user
      /* @__PURE__ */ jsx31("div", { dangerouslySetInnerHTML: { __html: element.outerHTML } })
    );
  }
  return /* @__PURE__ */ jsx31(DrawerItemInner, { name: label, children: override });
};
var DropZoneEditPure = (props) => /* @__PURE__ */ jsx31(DropZoneEdit, __spreadValues({}, props));
var DropZoneChild = ({
  zoneCompound,
  componentId,
  index,
  dragAxis,
  collisionAxis,
  inDroppableZone,
  itemRef
}) => {
  var _a, _b;
  const metadata = useAppStore((s) => s.metadata);
  const ctx = useContext9(dropZoneContext);
  const { depth = 1 } = ctx != null ? ctx : {};
  const zoneStore = useContext9(ZoneStoreContext);
  const nodeProps = useAppStore(
    useShallow6((s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.flatData.props;
    })
  );
  const nodeType = useAppStore(
    (s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.data.type;
    }
  );
  const nodeReadOnly = useAppStore(
    useShallow6((s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.data.readOnly;
    })
  );
  const appStore = useAppStoreApi();
  const item = useMemo12(() => {
    if (nodeProps) {
      const expanded = expandNode({
        type: nodeType,
        props: nodeProps
      });
      return expanded;
    }
    const preview = zoneStore.getState().previewIndex[zoneCompound];
    if (componentId === (preview == null ? void 0 : preview.props.id)) {
      return {
        type: preview.componentType,
        props: preview.props,
        previewType: preview.type,
        element: preview.element
      };
    }
    return null;
  }, [appStore, componentId, zoneCompound, nodeType, nodeProps]);
  const componentConfig = useAppStore(
    (s) => (item == null ? void 0 : item.type) ? s.config.components[item.type] : null
  );
  const puckProps = useMemo12(
    () => ({
      renderDropZone: DropZoneEditPure,
      isEditing: true,
      dragRef: null,
      metadata: __spreadValues(__spreadValues({}, metadata), componentConfig == null ? void 0 : componentConfig.metadata)
    }),
    [metadata, componentConfig == null ? void 0 : componentConfig.metadata]
  );
  const overrides = useAppStore((s) => s.overrides);
  const isLoading = useAppStore(
    (s) => {
      var _a2;
      return ((_a2 = s.componentState[componentId]) == null ? void 0 : _a2.loadingCount) > 0;
    }
  );
  const isSelected = useAppStore(
    (s) => {
      var _a2;
      return ((_a2 = s.selectedItem) == null ? void 0 : _a2.props.id) === componentId || false;
    }
  );
  let label = (_b = (_a = componentConfig == null ? void 0 : componentConfig.label) != null ? _a : item == null ? void 0 : item.type.toString()) != null ? _b : "Component";
  const defaultsProps = useMemo12(
    () => __spreadProps(__spreadValues(__spreadValues({}, componentConfig == null ? void 0 : componentConfig.defaultProps), item == null ? void 0 : item.props), {
      puck: puckProps,
      editMode: true
      // DEPRECATED
    }),
    [componentConfig == null ? void 0 : componentConfig.defaultProps, item == null ? void 0 : item.props, puckProps]
  );
  const defaultedNode = useMemo12(
    () => {
      var _a2;
      return { type: (_a2 = item == null ? void 0 : item.type) != null ? _a2 : nodeType, props: defaultsProps };
    },
    [item == null ? void 0 : item.type, nodeType, defaultsProps]
  );
  const config = useAppStore((s) => s.config);
  const plugins = useAppStore((s) => s.plugins);
  const userFieldTransforms = useAppStore((s) => s.fieldTransforms);
  const combinedFieldTransforms = useMemo12(
    () => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getSlotTransform(DropZoneEditPure, (slotProps) => /* @__PURE__ */ jsx31(ContextSlotRender, { componentId, zone: slotProps.zone }))), getInlineTextTransform()), getRichTextTransform()), plugins.reduce(
      (acc, plugin) => __spreadValues(__spreadValues({}, acc), plugin.fieldTransforms),
      {}
    )), userFieldTransforms),
    [plugins, userFieldTransforms]
  );
  const transformedProps = useFieldTransformsTracked(
    config,
    defaultedNode,
    combinedFieldTransforms,
    nodeReadOnly,
    isLoading
  );
  if (!item) return;
  const Render2 = componentConfig ? componentConfig.render : () => /* @__PURE__ */ jsxs9("div", { style: { padding: 48, textAlign: "center" }, children: [
    "No configuration for ",
    item.type
  ] });
  let componentType = item.type;
  const isInserting = "previewType" in item ? item.previewType === "insert" : false;
  return /* @__PURE__ */ jsx31(
    DraggableComponent,
    {
      id: componentId,
      componentType,
      zoneCompound,
      depth: depth + 1,
      index,
      isLoading,
      isSelected,
      label,
      autoDragAxis: dragAxis,
      userDragAxis: collisionAxis,
      inDroppableZone,
      itemRef,
      children: (dragRef) => {
        var _a2;
        if ((componentConfig == null ? void 0 : componentConfig.inline) && !isInserting) {
          return /* @__PURE__ */ jsx31(
            MemoizeComponent,
            {
              Component: Render2,
              componentProps: __spreadProps(__spreadValues({}, transformedProps), {
                puck: __spreadProps(__spreadValues({}, transformedProps.puck), { dragRef })
              })
            }
          );
        }
        return /* @__PURE__ */ jsx31("div", { ref: dragRef, children: isInserting ? /* @__PURE__ */ jsx31(
          InsertPreview,
          {
            label,
            override: (_a2 = overrides.componentItem) != null ? _a2 : overrides.drawerItem,
            element: "element" in item && item.element ? item.element : void 0
          }
        ) : /* @__PURE__ */ jsx31(
          MemoizeComponent,
          {
            Component: Render2,
            componentProps: transformedProps
          }
        ) });
      }
    }
  );
};
var DropZoneChildMemo = memo7(DropZoneChild);
var DropZoneEdit = forwardRef(
  function DropZoneEditInternal({
    zone,
    allow,
    disallow,
    style,
    className,
    minEmptyHeight: userMinEmptyHeight = "128px",
    collisionAxis,
    as
  }, userRef) {
    const ctx = useContext9(dropZoneContext);
    const appStoreApi = useAppStoreApi();
    const {
      // These all need setting via context
      areaId,
      depth = 0,
      registerLocalZone,
      unregisterLocalZone
    } = ctx != null ? ctx : {};
    const path = useAppStore(
      useShallow6((s) => {
        var _a;
        return areaId ? (_a = s.state.indexes.nodes[areaId]) == null ? void 0 : _a.path : null;
      })
    );
    let zoneCompound = rootDroppableId;
    if (areaId) {
      if (zone !== rootDroppableId) {
        zoneCompound = `${areaId}:${zone}`;
      }
    }
    const isRootZone = zoneCompound === rootDroppableId || zone === rootDroppableId || areaId === "root";
    const inNextDeepestArea = useContextStore(
      ZoneStoreContext,
      (s) => s.nextAreaDepthIndex[areaId || ""]
    );
    const zoneContentIds = useAppStore(
      useShallow6((s) => {
        var _a;
        return (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds;
      })
    );
    const zoneType = useAppStore(
      useShallow6((s) => {
        var _a;
        return (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.type;
      })
    );
    useEffect16(() => {
      if (!zoneType || zoneType === "dropzone") {
        if (ctx == null ? void 0 : ctx.registerZone) {
          ctx == null ? void 0 : ctx.registerZone(zoneCompound);
        }
      }
    }, [zoneType, appStoreApi]);
    useEffect16(() => {
      if (zoneType === "dropzone") {
        if (zoneCompound !== rootDroppableId) {
          console.warn(
            "DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots"
          );
        }
      }
    }, [zoneType]);
    const contentIds = useMemo12(() => {
      return zoneContentIds || [];
    }, [zoneContentIds]);
    const ref = useRef9(null);
    const acceptsTarget = useCallback13(
      (componentType) => {
        if (!componentType) {
          return true;
        }
        if (disallow) {
          const defaultedAllow = allow || [];
          const filteredDisallow = (disallow || []).filter(
            (item) => defaultedAllow.indexOf(item) === -1
          );
          if (filteredDisallow.indexOf(componentType) !== -1) {
            return false;
          }
        } else if (allow) {
          if (allow.indexOf(componentType) === -1) {
            return false;
          }
        }
        return true;
      },
      [allow, disallow]
    );
    const targetAccepted = useContextStore(ZoneStoreContext, (s) => {
      var _a;
      const draggedComponentType = (_a = s.draggedItem) == null ? void 0 : _a.data.componentType;
      return acceptsTarget(draggedComponentType);
    });
    const hoveringOverArea = inNextDeepestArea || isRootZone;
    const isEnabled = useContextStore(ZoneStoreContext, (s) => {
      var _a;
      let _isEnabled = true;
      const isDeepestZone = (_a = s.zoneDepthIndex[zoneCompound]) != null ? _a : false;
      _isEnabled = isDeepestZone;
      if (_isEnabled) {
        _isEnabled = targetAccepted;
      }
      return _isEnabled;
    });
    useEffect16(() => {
      if (registerLocalZone) {
        registerLocalZone(zoneCompound, targetAccepted || isEnabled);
      }
      return () => {
        if (unregisterLocalZone) {
          unregisterLocalZone(zoneCompound);
        }
      };
    }, [targetAccepted, isEnabled, zoneCompound]);
    const [contentIdsWithPreview, preview] = useContentIdsWithPreview(
      contentIds,
      zoneCompound
    );
    const isDropEnabled = isEnabled && (preview ? contentIdsWithPreview.length === 1 : contentIdsWithPreview.length === 0);
    const zoneStore = useContext9(ZoneStoreContext);
    useEffect16(() => {
      const { enabledIndex } = zoneStore.getState();
      zoneStore.setState({
        enabledIndex: __spreadProps(__spreadValues({}, enabledIndex), { [zoneCompound]: isEnabled })
      });
    }, [isEnabled, zoneStore, zoneCompound]);
    const droppableConfig = {
      id: zoneCompound,
      collisionPriority: isEnabled ? depth : 0,
      disabled: !isDropEnabled,
      collisionDetector: pointerIntersection,
      type: "dropzone",
      data: {
        areaId,
        depth,
        isDroppableTarget: targetAccepted,
        path: path || []
      }
    };
    const { ref: dropRef } = useDroppable2(droppableConfig);
    const isAreaSelected = useAppStore(
      (s) => (s == null ? void 0 : s.selectedItem) && areaId === (s == null ? void 0 : s.selectedItem.props.id)
    );
    const [dragAxis] = useDragAxis(ref, collisionAxis);
    const [minEmptyHeight, isAnimating] = useMinEmptyHeight({
      zoneCompound,
      userMinEmptyHeight,
      ref
    });
    const setRefs = useCallback13(
      (node) => {
        assignRefs([ref, dropRef, userRef], node);
      },
      [dropRef]
    );
    const _experimentalVirtualization = useAppStore(
      (s) => s._experimentalVirtualization
    );
    const El = as != null ? as : "div";
    const isRootAreaZone = (areaId != null ? areaId : rootAreaId) === rootAreaId && depth === 0;
    const shouldVirtualizeItems = _experimentalVirtualization && isRootAreaZone;
    return /* @__PURE__ */ jsx31(
      El,
      {
        className: `${getClassName17({
          isRootZone,
          hoveringOverArea,
          isEnabled,
          isAreaSelected,
          hasChildren: contentIds.length > 0,
          isAnimating
        })}${className ? ` ${className}` : ""}`,
        ref: setRefs,
        "data-testid": `dropzone:${zoneCompound}`,
        "data-puck-dropzone": zoneCompound,
        style: __spreadProps(__spreadValues({}, style), {
          "--min-empty-height": minEmptyHeight,
          backgroundColor: RENDER_DEBUG ? getRandomColor() : style == null ? void 0 : style.backgroundColor
        }),
        children: shouldVirtualizeItems ? /* @__PURE__ */ jsx31(
          VirtualizedDropZone,
          {
            contentIds: contentIdsWithPreview,
            zoneCompound,
            renderItem: (props) => /* @__PURE__ */ jsx31(
              DropZoneChildMemo,
              {
                zoneCompound,
                componentId: props.componentId,
                dragAxis,
                index: props.index,
                collisionAxis,
                inDroppableZone: targetAccepted,
                itemRef: props.measureRef
              },
              props.componentId
            )
          }
        ) : contentIdsWithPreview.map((componentId, i) => /* @__PURE__ */ jsx31(
          DropZoneChildMemo,
          {
            zoneCompound,
            componentId,
            dragAxis,
            index: i,
            collisionAxis,
            inDroppableZone: targetAccepted
          },
          componentId
        ))
      }
    );
  }
);
var DropZoneRenderItem = ({
  config,
  item,
  metadata
}) => {
  const Component = config.components[item.type];
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ jsx31(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const nextContextValue = useMemo12(
    () => ({
      areaId: props.id,
      depth: 1
    }),
    [props]
  );
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ jsx31(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx31(
    Component.render,
    __spreadProps(__spreadValues(__spreadValues({}, props), richtextProps), {
      puck: __spreadProps(__spreadValues({}, props.puck), {
        renderDropZone: DropZoneRenderPure,
        metadata: __spreadValues(__spreadValues({}, metadata), Component.metadata)
      })
    })
  ) }, props.id);
};
var DropZoneRenderPure = (props) => /* @__PURE__ */ jsx31(DropZoneRender, __spreadValues({}, props));
var DropZoneRender = forwardRef(
  function DropZoneRenderInternal({ className, style, zone, as }, ref) {
    const ctx = useContext9(dropZoneContext);
    const { areaId = "root" } = ctx || {};
    const { config, data, metadata } = useContext9(renderContext);
    let zoneCompound = `${areaId}:${zone}`;
    let content = (data == null ? void 0 : data.content) || [];
    useEffect16(() => {
      if (!content) {
        if (ctx == null ? void 0 : ctx.registerZone) {
          ctx == null ? void 0 : ctx.registerZone(zoneCompound);
        }
      }
    }, [content]);
    const El = as != null ? as : "div";
    if (!data || !config) {
      return null;
    }
    if (zoneCompound !== rootDroppableId) {
      content = setupZone(data, zoneCompound).zones[zoneCompound];
    }
    return /* @__PURE__ */ jsx31(El, { className, style, ref, children: content.map((item) => {
      const Component = config.components[item.type];
      if (Component) {
        return /* @__PURE__ */ jsx31(
          DropZoneRenderItem,
          {
            config,
            item,
            metadata
          },
          item.props.id
        );
      }
      return null;
    }) });
  }
);
var DropZonePure = (props) => /* @__PURE__ */ jsx31(DropZone, __spreadValues({}, props));
var DropZone = forwardRef(
  function DropZone2(props, ref) {
    const ctx = useContext9(dropZoneContext);
    if ((ctx == null ? void 0 : ctx.mode) === "edit") {
      return /* @__PURE__ */ jsx31(Fragment9, { children: /* @__PURE__ */ jsx31(DropZoneEdit, __spreadProps(__spreadValues({}, props), { ref })) });
    }
    return /* @__PURE__ */ jsx31(Fragment9, { children: /* @__PURE__ */ jsx31(DropZoneRender, __spreadProps(__spreadValues({}, props), { ref })) });
  }
);

// components/Render/index.tsx
import React3, { useMemo as useMemo13 } from "react";
import { jsx as jsx32 } from "react/jsx-runtime";
var renderContext = React3.createContext({
  config: { components: {} },
  data: { root: {}, content: [] },
  metadata: {}
});
function Render({
  config,
  data,
  metadata = {}
}) {
  var _a, _b;
  const defaultedData = __spreadProps(__spreadValues({}, data), {
    root: data.root || {},
    content: data.content || []
  });
  const rootProps = "props" in defaultedData.root ? defaultedData.root.props : defaultedData.root;
  const title = (rootProps == null ? void 0 : rootProps.title) || "";
  const pageProps = __spreadProps(__spreadValues({}, rootProps), {
    puck: {
      renderDropZone: DropZonePure,
      isEditing: false,
      dragRef: null,
      metadata
    },
    title,
    editMode: false,
    id: "puck-root"
  });
  const propsWithSlots = useSlots(
    config,
    { type: "root", props: pageProps },
    (props) => /* @__PURE__ */ jsx32(SlotRender, __spreadProps(__spreadValues({}, props), { config, metadata }))
  );
  const richtextProps = useRichtextProps((_a = config.root) == null ? void 0 : _a.fields, pageProps);
  const nextContextValue = useMemo13(
    () => ({
      mode: "render",
      depth: 0
    }),
    []
  );
  if ((_b = config.root) == null ? void 0 : _b.render) {
    return /* @__PURE__ */ jsx32(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ jsx32(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx32(config.root.render, __spreadProps(__spreadValues(__spreadValues({}, propsWithSlots), richtextProps), { children: /* @__PURE__ */ jsx32(DropZoneRenderPure, { zone: rootZone }) })) }) });
  }
  return /* @__PURE__ */ jsx32(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ jsx32(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx32(DropZoneRenderPure, { zone: rootZone }) }) });
}

// lib/use-puck.ts
import { createContext as createContext5, useContext as useContext10, useEffect as useEffect17, useState as useState16 } from "react";
import { createStore as createStore5, useStore as useStore3 } from "zustand";

// lib/data/resolve-and-replace-data.ts
function resolveAndReplaceData(currentData, getState, trigger = "force") {
  return __async(this, null, function* () {
    const resolvedResult = yield getState().resolveComponentData(
      currentData,
      trigger
    );
    if (!resolvedResult.didChange) return;
    const itemSelector = getSelectorForId(
      getState().state,
      resolvedResult.node.props.id
    );
    if (!itemSelector) {
      console.warn(
        `Warning: Could not find component with id "${currentData.props.id}" to resolve its data. Component may have been removed or the id is invalid.`
      );
      return;
    }
    getState().dispatch({
      type: "replace",
      data: toComponent(resolvedResult.node),
      destinationIndex: itemSelector.index,
      destinationZone: itemSelector.zone
    });
  });
}

// lib/data/resolve-data-by-id.ts
function resolveDataById(id, getState, trigger) {
  return __async(this, null, function* () {
    const node = getState().state.indexes.nodes[id];
    if (!node) {
      console.warn(
        `Warning: Could not find component with id "${id}" to resolve its data. Component may have been removed or the id is invalid.`
      );
      return;
    }
    yield resolveAndReplaceData(node.data, getState, trigger);
  });
}

// lib/data/resolve-data-by-selector.ts
function resolveDataBySelector(selector, getState, trigger) {
  return __async(this, null, function* () {
    const item = getItem(selector, getState().state);
    if (!item) {
      console.warn(
        `Warning: Could not find component for selector "${JSON.stringify(
          selector
        )}" to resolve its data. Component may have been removed or the selector is invalid.`
      );
      return;
    }
    const itemAsComponent = toComponent(item);
    yield resolveAndReplaceData(itemAsComponent, getState, trigger);
  });
}

// lib/use-puck.ts
var generateUsePuck = (store, getState) => {
  const history = {
    back: store.history.back,
    forward: store.history.forward,
    setHistories: store.history.setHistories,
    setHistoryIndex: store.history.setHistoryIndex,
    hasPast: store.history.hasPast(),
    hasFuture: store.history.hasFuture(),
    histories: store.history.histories,
    index: store.history.index
  };
  const storeData = {
    appState: makeStatePublic(store.state),
    config: store.config,
    dispatch: store.dispatch,
    getPermissions: store.permissions.getPermissions,
    refreshPermissions: store.permissions.refreshPermissions,
    resolveDataById: (id, trigger) => resolveDataById(id, getState, trigger),
    resolveDataBySelector: (selector, trigger) => resolveDataBySelector(selector, getState, trigger),
    history,
    selectedItem: store.selectedItem || null,
    getItemBySelector: (selector) => getItem(selector, store.state),
    getItemById: (id) => store.state.indexes.nodes[id].data,
    getSelectorForId: (id) => getSelectorForId(store.state, id),
    getParentById: (id) => {
      const node = store.state.indexes.nodes[id];
      const parentId = node.parentId;
      if (parentId === null) return;
      const parentNode = store.state.indexes.nodes[parentId];
      if (!parentNode) return;
      return parentNode.data;
    }
  };
  storeData.__private = {
    appState: store.state
  };
  return storeData;
};
var UsePuckStoreContext = createContext5(
  null
);
var convertToPickedStore = (store) => {
  return {
    state: store.state,
    config: store.config,
    dispatch: store.dispatch,
    permissions: store.permissions,
    history: store.history,
    selectedItem: store.selectedItem
  };
};
var useRegisterUsePuckStore = (appStore) => {
  const [usePuckStore] = useState16(
    () => createStore5(
      () => generateUsePuck(
        convertToPickedStore(appStore.getState()),
        appStore.getState
      )
    )
  );
  useEffect17(() => {
    return appStore.subscribe(
      (store) => convertToPickedStore(store),
      (pickedStore) => {
        usePuckStore.setState(generateUsePuck(pickedStore, appStore.getState));
      }
    );
  }, []);
  return usePuckStore;
};
function createUsePuck() {
  return function usePuck2(selector) {
    const usePuckApi = useContext10(UsePuckStoreContext);
    if (!usePuckApi) {
      throw new Error("usePuck must be used inside <Puck>.");
    }
    const result = useStore3(
      usePuckApi,
      selector != null ? selector : ((s) => s)
    );
    return result;
  };
}
function usePuck() {
  useEffect17(() => {
    console.warn(
      "You're using the `usePuck` method without a selector, which may cause unnecessary re-renders. Replace with `createUsePuck` and provide a selector for improved performance."
    );
  }, []);
  return createUsePuck()((s) => s);
}
function useGetPuck() {
  const usePuckApi = useContext10(UsePuckStoreContext);
  if (!usePuckApi) {
    throw new Error("usePuckGet must be used inside <Puck>.");
  }
  return usePuckApi.getState;
}

// lib/use-component-list.tsx
import { useEffect as useEffect19, useState as useState17 } from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/ComponentList/styles.module.css#css-module
var styles_module_default12 = { "ComponentList": "_ComponentList_1rrlt_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_1rrlt_5", "ComponentList-content": "_ComponentList-content_1rrlt_9", "ComponentList-title": "_ComponentList-title_1rrlt_17", "ComponentList-titleIcon": "_ComponentList-titleIcon_1rrlt_53" };

// components/ComponentList/index.tsx
import { useEffect as useEffect18 } from "react";
import { jsx as jsx33, jsxs as jsxs10 } from "react/jsx-runtime";
var getClassName18 = get_class_name_factory_default("ComponentList", styles_module_default12);
var ComponentListItem = ({
  name,
  label
}) => {
  var _a;
  const overrides = useAppStore((s) => s.overrides);
  const canInsert = useAppStore(
    (s) => s.permissions.getPermissions({
      type: name
    }).insert
  );
  useEffect18(() => {
    if (overrides.componentItem) {
      console.warn(
        "The `componentItem` override has been deprecated and renamed to `drawerItem`"
      );
    }
  }, [overrides]);
  return /* @__PURE__ */ jsx33(Drawer.Item, { label, name, isDragDisabled: !canInsert, children: (_a = overrides.componentItem) != null ? _a : overrides.drawerItem });
};
var ComponentList = ({
  children,
  title,
  id,
  searchQuery = ""
}) => {
  const config = useAppStore((s) => s.config);
  const setUi = useAppStore((s) => s.setUi);
  const componentList = useAppStore((s) => s.state.ui.componentList);
  const { expanded = true } = componentList[id] || {};
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const defaultKeys = Object.keys(config.components).filter((componentKey) => {
    var _a;
    if (!trimmedQuery) return true;
    const label = ((_a = config.components[componentKey]["label"]) != null ? _a : componentKey).toLowerCase();
    return label.includes(trimmedQuery) || componentKey.toLowerCase().includes(trimmedQuery);
  });
  return /* @__PURE__ */ jsxs10("div", { className: getClassName18({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ jsxs10(
      "button",
      {
        type: "button",
        className: getClassName18("title"),
        onClick: () => setUi({
          componentList: __spreadProps(__spreadValues({}, componentList), {
            [id]: __spreadProps(__spreadValues({}, componentList[id]), {
              expanded: !expanded
            })
          })
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ jsx33("div", { children: title }),
          /* @__PURE__ */ jsx33("div", { className: getClassName18("titleIcon"), children: expanded ? /* @__PURE__ */ jsx33(ChevronUp, { size: 12 }) : /* @__PURE__ */ jsx33(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx33("div", { className: getClassName18("content"), children: /* @__PURE__ */ jsx33(Drawer, { children: children || defaultKeys.map((componentKey) => {
      var _a;
      return /* @__PURE__ */ jsx33(
        ComponentListItem,
        {
          label: (_a = config.components[componentKey]["label"]) != null ? _a : componentKey,
          name: componentKey
        },
        componentKey
      );
    }) }) })
  ] });
};
ComponentList.Item = ComponentListItem;

// lib/use-component-list.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
var matchesSearch = (haystack, needle) => haystack.toLowerCase().includes(needle.toLowerCase());
var useComponentList = (searchQuery = "") => {
  const [componentList, setComponentList] = useState17();
  const config = useAppStore((s) => s.config);
  const uiComponentList = useAppStore((s) => s.state.ui.componentList);
  useEffect19(() => {
    var _a, _b, _c;
    if (Object.keys(uiComponentList).length > 0) {
      const matchedComponents = [];
      const trimmedQuery = searchQuery.trim();
      let _componentList;
      _componentList = Object.entries(uiComponentList).map(
        ([categoryKey, category]) => {
          if (!category.components) {
            return null;
          }
          category.components.forEach((componentName) => {
            matchedComponents.push(componentName);
          });
          if (category.visible === false) {
            return null;
          }
          const filteredComponents = category.components.filter(
            (componentName) => {
              var _a2;
              if (!trimmedQuery) return true;
              const componentConf = config.components[componentName] || {};
              const label = (_a2 = componentConf["label"]) != null ? _a2 : componentName;
              return matchesSearch(label, trimmedQuery) || matchesSearch(componentName, trimmedQuery);
            }
          );
          if (trimmedQuery && filteredComponents.length === 0) {
            return null;
          }
          return /* @__PURE__ */ jsx34(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: filteredComponents.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsx34(
                  ComponentList.Item,
                  {
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    name: componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            categoryKey
          );
        }
      );
      const remainingComponents = Object.keys(config.components).filter(
        (component) => matchedComponents.indexOf(component) === -1
      );
      const filteredRemaining = remainingComponents.filter((componentName) => {
        var _a2;
        if (!trimmedQuery) return true;
        const componentConf = config.components[componentName] || {};
        const label = (_a2 = componentConf["label"]) != null ? _a2 : componentName;
        return matchesSearch(label, trimmedQuery) || matchesSearch(componentName, trimmedQuery);
      });
      if (filteredRemaining.length > 0 && !((_a = uiComponentList.other) == null ? void 0 : _a.components) && ((_b = uiComponentList.other) == null ? void 0 : _b.visible) !== false) {
        _componentList.push(
          /* @__PURE__ */ jsx34(
            ComponentList,
            {
              id: "other",
              title: ((_c = uiComponentList.other) == null ? void 0 : _c.title) || "Other",
              children: filteredRemaining.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsx34(
                  ComponentList.Item,
                  {
                    name: componentName,
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            "other"
          )
        );
      }
      setComponentList(_componentList);
    }
  }, [config.categories, config.components, uiComponentList, searchQuery]);
  return componentList;
};

// components/Puck/components/Components/index.tsx
import { useMemo as useMemo14, useState as useState18 } from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Components/styles.module.css#css-module
var styles_module_default13 = { "Components": "_Components_has53_1", "Components-search": "_Components-search_has53_8", "Components-searchIcon": "_Components-searchIcon_has53_19", "Components-searchInput": "_Components-searchInput_has53_28", "Components-searchClear": "_Components-searchClear_has53_50", "Components-list": "_Components-list_has53_67", "Components-empty": "_Components-empty_has53_72" };

// components/Puck/components/Components/index.tsx
import { jsx as jsx35, jsxs as jsxs11 } from "react/jsx-runtime";
var getClassName19 = get_class_name_factory_default("Components", styles_module_default13);
var Components = () => {
  const overrides = useAppStore((s) => s.overrides);
  const [searchQuery, setSearchQuery] = useState18("");
  const componentList = useComponentList(searchQuery);
  const Wrapper = useMemo14(() => {
    if (overrides.components) {
      console.warn(
        "The `components` override has been deprecated and renamed to `drawer`"
      );
    }
    return overrides.components || overrides.drawer || "div";
  }, [overrides]);
  return /* @__PURE__ */ jsxs11("div", { className: getClassName19(), children: [
    /* @__PURE__ */ jsxs11("div", { className: getClassName19("search"), children: [
      /* @__PURE__ */ jsx35("span", { className: getClassName19("searchIcon"), children: /* @__PURE__ */ jsx35(Search, { size: 14 }) }),
      /* @__PURE__ */ jsx35(
        "input",
        {
          className: getClassName19("searchInput"),
          type: "search",
          placeholder: "Search components",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.currentTarget.value),
          "aria-label": "Search components"
        }
      ),
      searchQuery && /* @__PURE__ */ jsx35(
        "button",
        {
          type: "button",
          className: getClassName19("searchClear"),
          onClick: () => setSearchQuery(""),
          "aria-label": "Clear search",
          title: "Clear search",
          children: /* @__PURE__ */ jsx35(X, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ jsx35("div", { className: getClassName19("list"), children: /* @__PURE__ */ jsx35(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ jsx35(ComponentList, { id: "all", searchQuery }) }) })
  ] });
};

// css-module:/Users/feb/HTDocs/custom-puck/plugins/blocks/styles.module.css#css-module
var styles_module_default14 = { "BlocksPlugin": "_BlocksPlugin_1ey1i_1" };

// plugins/blocks/index.tsx
import { jsx as jsx36 } from "react/jsx-runtime";
var getClassName20 = get_class_name_factory_default("BlocksPlugin", styles_module_default14);
var blocksPlugin = () => ({
  name: "blocks",
  label: "Blocks",
  render: () => /* @__PURE__ */ jsx36("div", { className: getClassName20(), children: /* @__PURE__ */ jsx36(Components, {}) }),
  icon: /* @__PURE__ */ jsx36(Hammer, {})
});

// css-module:/Users/feb/HTDocs/custom-puck/components/LayerTree/styles.module.css#css-module
var styles_module_default15 = { "LayerTree": "_LayerTree_7rx04_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_7rx04_11", "LayerTree-helper": "_LayerTree-helper_7rx04_17", "Layer": "_Layer_7rx04_1", "Layer-inner": "_Layer-inner_7rx04_29", "Layer--containsZone": "_Layer--containsZone_7rx04_35", "Layer-clickable": "_Layer-clickable_7rx04_39", "Layer--isSelected": "_Layer--isSelected_7rx04_61", "Layer-chevron": "_Layer-chevron_7rx04_77", "Layer--childIsSelected": "_Layer--childIsSelected_7rx04_78", "Layer-zones": "_Layer-zones_7rx04_82", "Layer-title": "_Layer-title_7rx04_96", "Layer-name": "_Layer-name_7rx04_105", "Layer-icon": "_Layer-icon_7rx04_111", "Layer-zoneIcon": "_Layer-zoneIcon_7rx04_116" };

// components/LayerTree/index.tsx
import {
  forwardRef as forwardRef2,
  useCallback as useCallback14,
  useContext as useContext11,
  useRef as useRef10
} from "react";
import { useVirtualizer as useVirtualizer2 } from "@tanstack/react-virtual";
import { Fragment as Fragment10, jsx as jsx37, jsxs as jsxs12 } from "react/jsx-runtime";
var getClassName21 = get_class_name_factory_default("LayerTree", styles_module_default15);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default15);
var DEFAULT_LAYER_ROW_HEIGHT = 32;
var LAYER_TREE_VIRTUALIZATION_OVERSCAN = 8;
var MIN_VIRTUALIZED_LAYER_COUNT = 25;
var measuredRowHeights = /* @__PURE__ */ new Map();
var getZonesByParent = (zones) => {
  return Object.keys(zones).reduce((acc, zone) => {
    const [parentId] = zone.split(":");
    acc[parentId] = [...acc[parentId] || [], zone];
    return acc;
  }, {});
};
var getZoneLabel = (zoneCompound, nodes, config, label) => {
  var _a, _b, _c, _d;
  if (label !== void 0) {
    return label;
  }
  const [componentId, slotId] = zoneCompound.split(":");
  if (!slotId) {
    return;
  }
  const componentType = (_a = nodes[componentId]) == null ? void 0 : _a.data.type;
  const configForComponent = componentType && componentType !== rootAreaId ? config.components[componentType] : config.root;
  return (_d = (_c = (_b = configForComponent == null ? void 0 : configForComponent.fields) == null ? void 0 : _b[slotId]) == null ? void 0 : _c.label) != null ? _d : slotId;
};
var buildLayerNode = ({
  config,
  itemId,
  index,
  nodes,
  zoneCompound,
  zones,
  zonesByParent
}) => {
  var _a, _b, _c;
  const nodeData = nodes[itemId];
  const componentType = ((_a = nodeData == null ? void 0 : nodeData.data.type) == null ? void 0 : _a.toString()) || "Component";
  const label = (_c = (_b = config.components[componentType]) == null ? void 0 : _b.label) != null ? _c : componentType;
  const childZoneCompounds = zonesByParent[itemId] || [];
  return {
    childZones: childZoneCompounds.map(
      (childZoneCompound) => buildLayerTree({
        config,
        nodes,
        zoneCompound: childZoneCompound,
        zones,
        zonesByParent
      })
    ),
    componentType,
    index,
    itemId,
    label,
    zoneCompound
  };
};
var buildLayerTree = ({
  config,
  label,
  nodes,
  zoneCompound,
  zones,
  zonesByParent = getZonesByParent(zones)
}) => {
  var _a, _b;
  const contentIds = (_b = (_a = zones[zoneCompound]) == null ? void 0 : _a.contentIds) != null ? _b : [];
  return {
    items: contentIds.map(
      (itemId, index) => buildLayerNode({
        config,
        itemId,
        index,
        nodes,
        zoneCompound,
        zones,
        zonesByParent
      })
    ),
    label: getZoneLabel(zoneCompound, nodes, config, label),
    zoneCompound
  };
};
var getEstimatedRowHeight = (itemId) => {
  var _a;
  return (_a = measuredRowHeights.get(itemId)) != null ? _a : DEFAULT_LAYER_ROW_HEIGHT;
};
var cacheMeasuredRowHeight = (itemId, height) => {
  if (height <= 0) {
    return;
  }
  measuredRowHeights.set(itemId, height);
};
var getScrollParent = (el) => {
  var _a;
  let current = (_a = el == null ? void 0 : el.parentElement) != null ? _a : null;
  while (current) {
    const { overflow, overflowY } = getComputedStyle(current);
    if ([overflow, overflowY].some((value) => /auto|scroll/.test(value))) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
};
var Layer = forwardRef2(function Layer2({
  childIsSelected,
  dataIndex,
  depth,
  isSelected,
  node,
  selectedId,
  selectedPathIds
}, ref) {
  const dispatch = useAppStore((s) => s.dispatch);
  const zoneStore = useContext11(ZoneStoreContext);
  const isHovering = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === node.itemId
  );
  const containsZone = node.childZones.length > 0;
  const setItemSelector = useCallback14(
    (itemSelector) => {
      dispatch({ type: "setUi", ui: { itemSelector } });
    },
    [dispatch]
  );
  const shouldRenderChildren = isSelected || childIsSelected;
  return /* @__PURE__ */ jsxs12(
    "li",
    {
      ref,
      className: getClassNameLayer({
        childIsSelected,
        containsZone,
        isHovering,
        isSelected
      }),
      "data-index": dataIndex,
      "data-puck-layer-tree-id": node.itemId,
      children: [
        /* @__PURE__ */ jsx37("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ jsxs12(
          "button",
          {
            type: "button",
            className: getClassNameLayer("clickable"),
            onClick: () => {
              if (isSelected) {
                setItemSelector(null);
                return;
              }
              setItemSelector({
                index: node.index,
                zone: node.zoneCompound
              });
              zoneStore.getState().scrollToComponent(node.itemId);
            },
            onMouseEnter: (e) => {
              e.stopPropagation();
              zoneStore.setState({ hoveringComponent: node.itemId });
            },
            onMouseLeave: (e) => {
              e.stopPropagation();
              zoneStore.setState({ hoveringComponent: null });
            },
            children: [
              containsZone && /* @__PURE__ */ jsx37(
                "div",
                {
                  className: getClassNameLayer("chevron"),
                  title: isSelected ? "Collapse" : "Expand",
                  children: /* @__PURE__ */ jsx37(ChevronDown, { size: "12" })
                }
              ),
              /* @__PURE__ */ jsxs12("div", { className: getClassNameLayer("title"), children: [
                /* @__PURE__ */ jsx37("div", { className: getClassNameLayer("icon"), children: node.componentType === "Text" || node.componentType === "Heading" ? /* @__PURE__ */ jsx37(Type, { size: "16" }) : /* @__PURE__ */ jsx37(LayoutGrid, { size: "16" }) }),
                /* @__PURE__ */ jsx37("div", { className: getClassNameLayer("name"), children: node.label })
              ] })
            ]
          }
        ) }),
        containsZone && shouldRenderChildren && node.childZones.map((childZone) => /* @__PURE__ */ jsx37(
          "div",
          {
            className: getClassNameLayer("zones"),
            children: /* @__PURE__ */ jsx37(
              LayerTreeZone,
              {
                depth: depth + 1,
                selectedId,
                selectedPathIds,
                tree: childZone
              }
            )
          },
          childZone.zoneCompound
        ))
      ]
    }
  );
});
var LayerTreeZone = ({
  depth,
  selectedId,
  selectedPathIds,
  tree
}) => {
  const shouldVirtualize = depth === 0 && tree.items.length >= MIN_VIRTUALIZED_LAYER_COUNT;
  return /* @__PURE__ */ jsxs12(Fragment10, { children: [
    tree.label && /* @__PURE__ */ jsxs12("div", { className: getClassName21("zoneTitle"), children: [
      /* @__PURE__ */ jsx37("div", { className: getClassName21("zoneIcon"), children: /* @__PURE__ */ jsx37(Layers, { size: "16" }) }),
      tree.label
    ] }),
    shouldVirtualize ? /* @__PURE__ */ jsx37(
      VirtualizedLayerTreeItems,
      {
        depth,
        selectedId,
        selectedPathIds,
        tree
      }
    ) : /* @__PURE__ */ jsx37(
      StaticLayerTreeItems,
      {
        depth,
        selectedId,
        selectedPathIds,
        tree
      }
    )
  ] });
};
var StaticLayerTreeItems = ({
  depth,
  selectedId,
  selectedPathIds,
  tree
}) => {
  return /* @__PURE__ */ jsxs12("ul", { className: getClassName21(), children: [
    tree.items.length === 0 && /* @__PURE__ */ jsx37("div", { className: getClassName21("helper"), children: "No items" }),
    tree.items.map((node) => /* @__PURE__ */ jsx37(
      Layer,
      {
        childIsSelected: selectedPathIds.has(node.itemId),
        depth,
        isSelected: selectedId === node.itemId,
        node,
        selectedId,
        selectedPathIds
      },
      node.itemId
    ))
  ] });
};
var VirtualizedLayerTreeItems = ({
  depth,
  selectedId,
  selectedPathIds,
  tree
}) => {
  const listRef = useRef10(null);
  const virtualizer = useVirtualizer2({
    count: tree.items.length,
    estimateSize: (index) => getEstimatedRowHeight(tree.items[index].itemId),
    getItemKey: (index) => tree.items[index].itemId,
    getScrollElement: () => getScrollParent(listRef.current),
    overscan: LAYER_TREE_VIRTUALIZATION_OVERSCAN,
    measureElement: (element) => {
      const height = Math.ceil(element.getBoundingClientRect().height);
      const itemId = element.dataset.puckLayerTreeId;
      if (itemId) {
        cacheMeasuredRowHeight(itemId, height);
      }
      return height || DEFAULT_LAYER_ROW_HEIGHT;
    }
  });
  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const renderedItems = [];
  let previousEnd = 0;
  let previousIndex = -1;
  virtualItems.forEach((virtualItem) => {
    const node = tree.items[virtualItem.index];
    const gapSize = Math.max(virtualItem.start - previousEnd, 0);
    if (gapSize > 0) {
      renderedItems.push(
        /* @__PURE__ */ jsx37(
          "li",
          {
            "aria-hidden": "true",
            style: { height: `${gapSize}px` }
          },
          `gap:${tree.zoneCompound}:${previousIndex}:${virtualItem.index}`
        )
      );
    }
    renderedItems.push(
      /* @__PURE__ */ jsx37(
        Layer,
        {
          childIsSelected: selectedPathIds.has(node.itemId),
          dataIndex: virtualItem.index,
          depth,
          isSelected: selectedId === node.itemId,
          node,
          ref: virtualizer.measureElement,
          selectedId,
          selectedPathIds
        },
        node.itemId
      )
    );
    previousEnd = virtualItem.end;
    previousIndex = virtualItem.index;
  });
  const trailingGap = Math.max(totalSize - previousEnd, 0);
  if (trailingGap > 0) {
    renderedItems.push(
      /* @__PURE__ */ jsx37(
        "li",
        {
          "aria-hidden": "true",
          style: { height: `${trailingGap}px` }
        },
        `gap:${tree.zoneCompound}:${previousIndex}:end`
      )
    );
  }
  return /* @__PURE__ */ jsxs12("ul", { className: getClassName21(), ref: listRef, children: [
    tree.items.length === 0 && /* @__PURE__ */ jsx37("div", { className: getClassName21("helper"), children: "No items" }),
    renderedItems
  ] });
};
var LayerTree = ({
  selectedId,
  selectedPathIds,
  trees
}) => {
  return /* @__PURE__ */ jsx37(Fragment10, { children: trees.map((tree) => /* @__PURE__ */ jsx37(
    LayerTreeZone,
    {
      depth: 0,
      selectedId,
      selectedPathIds,
      tree
    },
    tree.zoneCompound
  )) });
};

// components/Puck/components/Outline/index.tsx
import { useMemo as useMemo15 } from "react";

// lib/data/find-zones-for-area.ts
var findZonesForArea = (state, area) => {
  return Object.keys(state.indexes.zones).filter(
    (zone) => zone.split(":")[0] === area
  );
};

// components/Puck/components/Outline/index.tsx
import { useShallow as useShallow7 } from "zustand/react/shallow";
import { jsx as jsx38 } from "react/jsx-runtime";
var Outline = () => {
  const outlineOverride = useAppStore((s) => s.overrides.outline);
  const config = useAppStore((s) => s.config);
  const nodes = useAppStore((s) => s.state.indexes.nodes);
  const zones = useAppStore((s) => s.state.indexes.zones);
  const selectedId = useAppStore((s) => {
    var _a;
    return ((_a = s.selectedItem) == null ? void 0 : _a.props.id) || null;
  });
  const rootZones = useAppStore(
    useShallow7((s) => findZonesForArea(s.state, "root"))
  );
  const selectedPathIds = useMemo15(() => {
    var _a;
    const selectedPath = selectedId ? (_a = nodes[selectedId]) == null ? void 0 : _a.path : null;
    return new Set(
      (selectedPath == null ? void 0 : selectedPath.map((candidate) => candidate.split(":")[0]).filter(Boolean)) || []
    );
  }, [nodes, selectedId]);
  const trees = useMemo15(
    () => rootZones.map(
      (zoneCompound) => buildLayerTree({
        config,
        label: rootZones.length === 1 ? "" : zoneCompound.split(":")[1],
        nodes,
        zoneCompound,
        zones
      })
    ),
    [config, nodes, rootZones, zones]
  );
  const Wrapper = useMemo15(() => outlineOverride || "div", [outlineOverride]);
  return /* @__PURE__ */ jsx38(Wrapper, { children: /* @__PURE__ */ jsx38(
    LayerTree,
    {
      selectedId,
      selectedPathIds,
      trees
    }
  ) });
};

// css-module:/Users/feb/HTDocs/custom-puck/plugins/outline/styles.module.css#css-module
var styles_module_default16 = { "OutlinePlugin": "_OutlinePlugin_q92j6_1" };

// plugins/outline/index.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
var getClassName22 = get_class_name_factory_default("OutlinePlugin", styles_module_default16);
var outlinePlugin = () => ({
  name: "outline",
  label: "Outline",
  render: () => /* @__PURE__ */ jsx39("div", { className: getClassName22(), children: /* @__PURE__ */ jsx39(Outline, {}) }),
  icon: /* @__PURE__ */ jsx39(Layers, {})
});

// css-module:/Users/feb/HTDocs/custom-puck/components/Breadcrumbs/styles.module.css#css-module
var styles_module_default17 = { "Breadcrumbs": "_Breadcrumbs_1c9yh_1", "Breadcrumbs-breadcrumbLabel": "_Breadcrumbs-breadcrumbLabel_1c9yh_7", "Breadcrumbs-breadcrumb": "_Breadcrumbs-breadcrumb_1c9yh_7" };

// lib/use-breadcrumbs.ts
import { useMemo as useMemo16 } from "react";
var useBreadcrumbs = (renderCount) => {
  const selectedId = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const config = useAppStore((s) => s.config);
  const path = useAppStore((s) => {
    var _a;
    return (_a = s.state.indexes.nodes[selectedId]) == null ? void 0 : _a.path;
  });
  const appStore = useAppStoreApi();
  return useMemo16(() => {
    const breadcrumbs = (path == null ? void 0 : path.map((zoneCompound) => {
      var _a, _b, _c, _d;
      const [componentId] = zoneCompound.split(":");
      if (componentId === "root") {
        return {
          label: ((_a = config == null ? void 0 : config.root) == null ? void 0 : _a.label) || "Page",
          selector: null
        };
      }
      const node = appStore.getState().state.indexes.nodes[componentId];
      const parentId = node.path[node.path.length - 1];
      const contentIds = ((_b = appStore.getState().state.indexes.zones[parentId]) == null ? void 0 : _b.contentIds) || [];
      const index = contentIds.indexOf(componentId);
      const label = node ? (_d = (_c = config.components[node.data.type]) == null ? void 0 : _c.label) != null ? _d : node.data.type : "Component";
      return {
        label,
        selector: node ? {
          index,
          zone: node.path[node.path.length - 1]
        } : null
      };
    })) || [];
    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
    return breadcrumbs;
  }, [path, renderCount]);
};

// components/Breadcrumbs/index.tsx
import { jsx as jsx40, jsxs as jsxs13 } from "react/jsx-runtime";
var getClassName23 = get_class_name_factory_default("Breadcrumbs", styles_module_default17);
var Breadcrumbs = ({
  children,
  numParents = 1
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const breadcrumbs = useBreadcrumbs(numParents);
  return /* @__PURE__ */ jsxs13("div", { className: getClassName23(), children: [
    breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ jsxs13("div", { className: getClassName23("breadcrumb"), children: [
      /* @__PURE__ */ jsx40(
        "button",
        {
          type: "button",
          className: getClassName23("breadcrumbLabel"),
          onClick: () => setUi({ itemSelector: breadcrumb.selector }),
          children: breadcrumb.label
        }
      ),
      /* @__PURE__ */ jsx40(ChevronRight, { size: 16 })
    ] }, i)),
    children
  ] });
};

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Fields/styles.module.css#css-module
var styles_module_default18 = { "PuckFields": "_PuckFields_10bh7_1", "PuckFields--isLoading": "_PuckFields--isLoading_10bh7_6", "PuckFields-loadingOverlay": "_PuckFields-loadingOverlay_10bh7_10", "PuckFields-loadingOverlayInner": "_PuckFields-loadingOverlayInner_10bh7_25", "PuckFields-field": "_PuckFields-field_10bh7_32", "PuckFields--wrapFields": "_PuckFields--wrapFields_10bh7_36" };

// components/Puck/components/Fields/index.tsx
import {
  memo as memo8,
  useCallback as useCallback15,
  useContext as useContext12,
  useEffect as useEffect20,
  useMemo as useMemo17
} from "react";
import { useShallow as useShallow8 } from "zustand/react/shallow";
import { Fragment as Fragment11, jsx as jsx41, jsxs as jsxs14 } from "react/jsx-runtime";
var getClassName24 = get_class_name_factory_default("PuckFields", styles_module_default18);
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ jsx41(Fragment11, { children });
};
var createOnChange = (fieldName, appStore) => (value, updatedUi) => __async(null, null, function* () {
  const { dispatch, state, selectedItem, resolveComponentData } = appStore.getState();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const rootProps = data.root.props || data.root;
  const currentProps = selectedItem ? selectedItem.props : rootProps;
  const newProps = __spreadProps(__spreadValues({}, currentProps), { [fieldName]: value });
  if (selectedItem && itemSelector) {
    const resolved = yield resolveComponentData(
      __spreadProps(__spreadValues({}, selectedItem), { props: newProps }),
      "replace"
    );
    const latestSelector = getSelectorForId(
      appStore.getState().state,
      selectedItem.props.id
    );
    if (!latestSelector) return;
    dispatch({
      type: "replace",
      destinationIndex: latestSelector.index,
      destinationZone: latestSelector.zone || rootDroppableId,
      data: resolved.node,
      ui: updatedUi
    });
    return;
  }
  if (data.root.props) {
    dispatch({
      type: "replaceRoot",
      root: (yield resolveComponentData(
        __spreadProps(__spreadValues({}, data.root), { props: newProps }),
        "replace"
      )).node,
      ui: __spreadValues(__spreadValues({}, ui), updatedUi),
      recordHistory: true
    });
    return;
  }
  dispatch({
    type: "setData",
    data: { root: newProps }
  });
});
var FieldsChildInner = ({ fieldName }) => {
  const field = useAppStore((s) => s.fields.fields[fieldName]);
  const isReadOnly = useAppStore(
    (s) => ((s.selectedItem ? s.selectedItem.readOnly : s.state.data.root.readOnly) || {})[fieldName]
  );
  const id = useAppStore((s) => {
    if (!field) return null;
    return s.selectedItem ? `${s.selectedItem.props.id}_${field.type}_${fieldName}` : `root_${field.type}_${fieldName}`;
  });
  const permissions = useAppStore(
    useShallow8((s) => {
      const { selectedItem, permissions: permissions2 } = s;
      return selectedItem ? permissions2.getPermissions({ item: selectedItem }) : permissions2.getPermissions({ root: true });
    })
  );
  const appStore = useAppStoreApi();
  const onChange = useCallback15(createOnChange(fieldName, appStore), [
    fieldName
  ]);
  const { visible = true } = field != null ? field : {};
  const fieldStore = useContext12(fieldContextStore.ctx);
  useEffect20(() => {
    return appStore.subscribe(
      (s) => {
        var _a;
        const data = s.getCurrentData();
        return (_a = data.props) == null ? void 0 : _a[fieldName];
      },
      (value) => {
        fieldStore.setState({ [fieldName]: value });
      }
    );
  }, [appStore, fieldStore]);
  if (!field || !id || !visible) return null;
  if (field.type === "slot") return null;
  return /* @__PURE__ */ jsx41("div", { className: getClassName24("field"), children: /* @__PURE__ */ jsx41(
    AutoFieldPrivate,
    {
      field,
      name: fieldName,
      id,
      readOnly: !permissions.edit || isReadOnly,
      onChange
    }
  ) }, id);
};
var FieldsChild = ({ fieldName }) => {
  const appStore = useAppStoreApi();
  const initialValue = useMemo17(() => {
    var _a;
    const value = (_a = appStore.getState().getCurrentData().props) == null ? void 0 : _a[fieldName];
    return { [fieldName]: value };
  }, []);
  return /* @__PURE__ */ jsx41(fieldContextStore.Provider, { value: initialValue, children: /* @__PURE__ */ jsx41(FieldsChildInner, { fieldName }) });
};
var FieldsChildMemo = memo8(FieldsChild);
var FieldsInternal = ({ wrapFields = true }) => {
  const overrides = useAppStore((s) => s.overrides);
  const componentResolving = useAppStore((s) => {
    var _a, _b;
    const loadingCount = s.selectedItem ? (_a = s.componentState[s.selectedItem.props.id]) == null ? void 0 : _a.loadingCount : (_b = s.componentState["root"]) == null ? void 0 : _b.loadingCount;
    return (loadingCount != null ? loadingCount : 0) > 0;
  });
  const itemSelector = useAppStore(useShallow8((s) => s.state.ui.itemSelector));
  const id = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const appStore = useAppStoreApi();
  useRegisterFieldsSlice(appStore, id);
  const fieldsLoading = useAppStore((s) => s.fields.loading);
  const fieldNames = useAppStore(
    useShallow8((s) => {
      if (s.fields.id === id) {
        return Object.keys(s.fields.fields);
      }
      return [];
    })
  );
  const isLoading = fieldsLoading || componentResolving;
  const Wrapper = useMemo17(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ jsxs14(
    "form",
    {
      className: getClassName24({ wrapFields }),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ jsx41(Wrapper, { isLoading, itemSelector, children: fieldNames.map((fieldName) => /* @__PURE__ */ jsx41(FieldsChildMemo, { fieldName }, fieldName)) }),
        isLoading && /* @__PURE__ */ jsx41("div", { className: getClassName24("loadingOverlay"), children: /* @__PURE__ */ jsx41("div", { className: getClassName24("loadingOverlayInner"), children: /* @__PURE__ */ jsx41(Loader, { size: 16 }) }) })
      ]
    }
  );
};
var Fields = memo8(FieldsInternal);

// css-module:/Users/feb/HTDocs/custom-puck/plugins/fields/styles.module.css#css-module
var styles_module_default19 = { "FieldsPlugin": "_FieldsPlugin_nd930_1", "FieldsPlugin-header": "_FieldsPlugin-header_nd930_7" };

// plugins/fields/index.tsx
import { jsx as jsx42, jsxs as jsxs15 } from "react/jsx-runtime";
var getClassName25 = get_class_name_factory_default("FieldsPlugin", styles_module_default19);
var CurrentTitle = () => {
  const label = useAppStore((s) => {
    var _a, _b;
    const selectedItem = s.selectedItem;
    return selectedItem ? (_b = (_a = s.config.components[selectedItem.type]) == null ? void 0 : _a.label) != null ? _b : selectedItem.type : "Page";
  });
  return label;
};
var fieldsPlugin = ({ desktopSideBar = "right" } = {}) => ({
  name: "fields",
  label: "Fields",
  render: () => /* @__PURE__ */ jsxs15("div", { className: getClassName25(), children: [
    /* @__PURE__ */ jsx42("div", { className: getClassName25("header"), children: /* @__PURE__ */ jsx42(Breadcrumbs, { numParents: 2, children: /* @__PURE__ */ jsx42(CurrentTitle, {}) }) }),
    /* @__PURE__ */ jsx42(Fields, {})
  ] }),
  icon: /* @__PURE__ */ jsx42(RectangleEllipsis, {}),
  mobileOnly: desktopSideBar === "right"
});

// components/Puck/index.tsx
import {
  createContext as createContext8,
  useCallback as useCallback23,
  useContext as useContext15,
  useEffect as useEffect29,
  useMemo as useMemo25,
  useRef as useRef16,
  useState as useState25
} from "react";

// components/Puck/components/Preview/index.tsx
import { useCallback as useCallback16, useEffect as useEffect23, useRef as useRef11, useMemo as useMemo18 } from "react";

// components/AutoFrame/index.tsx
import {
  createContext as createContext6,
  useContext as useContext13,
  useEffect as useEffect22,
  useState as useState19
} from "react";
import hash from "object-hash";
import { createPortal as createPortal3 } from "react-dom";

// lib/use-inject-css.ts
import { useEffect as useEffect21, useInsertionEffect } from "react";

// puck-runtime-css:puck-runtime-css
var defaultUiStyles = `@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
:root {
  --puck-color-rose-01: #4a001c;
  --puck-color-rose-02: #670833;
  --puck-color-rose-03: #87114c;
  --puck-color-rose-04: #a81a66;
  --puck-color-rose-05: #bc5089;
  --puck-color-rose-06: #cc7ca5;
  --puck-color-rose-07: #d89aba;
  --puck-color-rose-08: #e3b8cf;
  --puck-color-rose-09: #efd6e3;
  --puck-color-rose-10: #f6eaf1;
  --puck-color-rose-11: #faf4f8;
  --puck-color-rose-12: #fef8fc;
  --puck-color-azure-01: #00175d;
  --puck-color-azure-02: #002c77;
  --puck-color-azure-03: #014292;
  --puck-color-azure-04: #0158ad;
  --puck-color-azure-05: #3479be;
  --puck-color-azure-06: #6499cf;
  --puck-color-azure-07: #88b0da;
  --puck-color-azure-08: #abc7e5;
  --puck-color-azure-09: #cfdff0;
  --puck-color-azure-10: #e7eef7;
  --puck-color-azure-11: #f3f6fb;
  --puck-color-azure-12: #f7faff;
  --puck-color-green-01: #002000;
  --puck-color-green-02: #043604;
  --puck-color-green-03: #084e08;
  --puck-color-green-04: #0c680c;
  --puck-color-green-05: #1d882f;
  --puck-color-green-06: #2faa53;
  --puck-color-green-07: #56c16f;
  --puck-color-green-08: #7dd78b;
  --puck-color-green-09: #b8e8bf;
  --puck-color-green-10: #ddf3e0;
  --puck-color-green-11: #eff8f0;
  --puck-color-green-12: #f3fcf4;
  --puck-color-yellow-01: #211000;
  --puck-color-yellow-02: #362700;
  --puck-color-yellow-03: #4c4000;
  --puck-color-yellow-04: #645a00;
  --puck-color-yellow-05: #877614;
  --puck-color-yellow-06: #ab9429;
  --puck-color-yellow-07: #bfac4e;
  --puck-color-yellow-08: #d4c474;
  --puck-color-yellow-09: #e6deb1;
  --puck-color-yellow-10: #f3efd9;
  --puck-color-yellow-11: #f9f7ed;
  --puck-color-yellow-12: #fcfaf0;
  --puck-color-red-01: #4c0000;
  --puck-color-red-02: #6a0a10;
  --puck-color-red-03: #8a1422;
  --puck-color-red-04: #ac1f35;
  --puck-color-red-05: #bf5366;
  --puck-color-red-06: #ce7e8e;
  --puck-color-red-07: #d99ca8;
  --puck-color-red-08: #e4b9c2;
  --puck-color-red-09: #efd7db;
  --puck-color-red-10: #f6eaec;
  --puck-color-red-11: #faf4f5;
  --puck-color-red-12: #fff9fa;
  --puck-color-grey-01: #181818;
  --puck-color-grey-02: #292929;
  --puck-color-grey-03: #404040;
  --puck-color-grey-04: #5a5a5a;
  --puck-color-grey-05: #767676;
  --puck-color-grey-06: #949494;
  --puck-color-grey-07: #ababab;
  --puck-color-grey-08: #c3c3c3;
  --puck-color-grey-09: #dcdcdc;
  --puck-color-grey-10: #efefef;
  --puck-color-grey-11: #f5f5f5;
  --puck-color-grey-12: #fafafa;
  --puck-color-black: #000000;
  --puck-color-white: #ffffff;
}

/* styles/typography.css */
:root {
  --puck-font-size-scale-base-unitless: 12;
  --puck-font-size-xxxs-unitless: 12;
  --puck-font-size-xxs-unitless: 14;
  --puck-font-size-xs-unitless: 16;
  --puck-font-size-s-unitless: 18;
  --puck-font-size-m-unitless: 21;
  --puck-font-size-l-unitless: 24;
  --puck-font-size-xl-unitless: 28;
  --puck-font-size-xxl-unitless: 36;
  --puck-font-size-xxxl-unitless: 48;
  --puck-font-size-xxxxl-unitless: 56;
  --puck-font-size-xxxs: calc(1rem * var(--puck-font-size-xxxs-unitless) / 16);
  --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
  --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
  --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
  --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
  --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
  --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
  --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
  --puck-font-size-xxxl: calc(1rem * var(--puck-font-size-xxxl-unitless) / 16);
  --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
  --puck-font-size-base: var(--puck-font-size-xs);
  --line-height-reset: 1;
  --line-height-xs: calc( var(--space-m-unitless) / var(--puck-font-size-m-unitless) );
  --line-height-s: calc( var(--space-m-unitless) / var(--puck-font-size-s-unitless) );
  --line-height-m: calc( var(--space-m-unitless) / var(--puck-font-size-xs-unitless) );
  --line-height-l: calc( var(--space-m-unitless) / var(--puck-font-size-xxs-unitless) );
  --line-height-xl: calc( var(--space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
  --line-height-base: var(--line-height-m);
  --fallback-font-stack:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Helvetica Neue,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
  --puck-font-family: Inter, var(--fallback-font-stack);
  --puck-font-family-monospaced:
    ui-monospace,
    "Cascadia Code",
    "Source Code Pro",
    Menlo,
    Consolas,
    "DejaVu Sans Mono",
    monospace;
}
@supports (font-variation-settings: normal) {
  :root {
    --puck-font-family: InterVariable, var(--fallback-font-stack);
  }
}

/* bundle/core.css */
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/Users/feb/HTDocs/custom-puck/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_1nmyk_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding: 4px;
  padding-inline-start: 0;
  padding-inline-end: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-radius: 8px;
  background: var(--puck-color-grey-01);
  color: var(--puck-color-white);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_1nmyk_18 {
  color: var(--puck-color-grey-08);
  font-size: var(--puck-font-size-xxxs);
  font-weight: 500;
  padding-inline-start: 8px;
  padding-inline-end: 8px;
  margin-inline-start: 4px;
  margin-inline-end: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_1nmyk_30 + ._ActionBar-label_1nmyk_18 {
  padding-inline-start: 0;
}
._ActionBar-label_1nmyk_18 + ._ActionBarAction_1nmyk_30 {
  margin-inline-start: -4px;
}
._ActionBar-group_1nmyk_38 {
  align-items: center;
  border-inline-start: 0.5px solid var(--puck-color-grey-05);
  display: flex;
  height: 100%;
  padding-inline-start: 4px;
  padding-inline-end: 4px;
}
._ActionBar-group_1nmyk_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_1nmyk_38:empty {
  display: none;
}
._ActionBarAction_1nmyk_30 {
  background: transparent;
  border: none;
  color: var(--puck-color-grey-08);
  cursor: pointer;
  padding: 6px;
  margin-inline-start: 4px;
  margin-inline-end: 4px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 50ms ease-in;
}
._ActionBarAction--disabled_1nmyk_71 {
  cursor: auto;
  color: var(--puck-color-grey-06);
}
._ActionBarAction_1nmyk_30 svg {
  max-width: none !important;
}
._ActionBarAction_1nmyk_30:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: -2px;
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_1nmyk_30:hover:not(._ActionBarAction--disabled_1nmyk_71) {
    color: var(--puck-color-azure-06);
    transition: none;
  }
}
._ActionBarAction_1nmyk_30:active:not(._ActionBarAction--disabled_1nmyk_71),
._ActionBarAction--active_1nmyk_93 {
  color: var(--puck-color-azure-07);
  transition: none;
}
._ActionBar-group_1nmyk_38 * {
  margin: 0;
}
._ActionBar-separator_1nmyk_102 {
  background: var(--puck-color-grey-05);
  margin-inline: 4px;
  width: 0.5px;
  height: 100%;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_bsxfo_1 + ._InputWrapper_bsxfo_1 {
  margin-top: 12px;
}
._Input-label_bsxfo_5 {
  align-items: center;
  color: var(--puck-color-grey-04);
  display: flex;
  padding-bottom: 12px;
  font-size: var(--puck-font-size-xxs);
  font-weight: 600;
}
._Input-labelIcon_bsxfo_14 {
  color: var(--puck-color-grey-07);
  display: flex;
  margin-inline-end: 4px;
  padding-inline-start: 4px;
}
._Input-disabledIcon_bsxfo_21 {
  color: var(--puck-color-grey-05);
  margin-inline-start: auto;
}
._Input-input_bsxfo_26 {
  background: var(--puck-color-white);
  border-width: 1px;
  border-style: solid;
  border-color: var(--puck-color-grey-09);
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 16px;
  padding: 12px 15px;
  transition: border-color 50ms ease-in;
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_bsxfo_26 {
    font-size: 14px;
  }
}
select._Input-input_bsxfo_26 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 12px;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  background-color: var(--puck-color-white);
  cursor: pointer;
}
select._Input-input_bsxfo_26:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
@media (hover: hover) and (pointer: fine) {
  ._Input_bsxfo_1:has(> input):hover ._Input-input_bsxfo_26:not([readonly]),
  ._Input_bsxfo_1:has(> textarea):hover ._Input-input_bsxfo_26:not([readonly]) {
    border-color: var(--puck-color-grey-05);
    transition: none;
  }
  ._Input_bsxfo_1:has(> select):hover ._Input-input_bsxfo_26:not([disabled]) {
    background-color: var(--puck-color-azure-12);
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%235a5a5a'><polygon points='0,0 100,0 50,50'/></svg>");
    border-color: var(--puck-color-grey-05);
    transition: none;
  }
}
._Input-input_bsxfo_26:focus {
  border-color: var(--puck-color-grey-05);
  outline: 2px solid var(--puck-color-azure-05);
  transition: none;
}
._Input--readOnly_bsxfo_82 > ._Input-input_bsxfo_26,
._Input--readOnly_bsxfo_82 > select._Input-input_bsxfo_26 {
  background-color: var(--puck-color-grey-11);
  border-color: var(--puck-color-grey-09);
  color: var(--puck-color-grey-04);
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input-radioGroupItems_bsxfo_93 {
  display: flex;
  border: 1px solid var(--puck-color-grey-09);
  border-radius: 4px;
  flex-wrap: wrap;
}
._Input-radio_bsxfo_93 {
  border-inline-end: 1px solid var(--puck-color-grey-09);
  flex-grow: 1;
}
._Input-radio_bsxfo_93:first-of-type {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
._Input-radio_bsxfo_93:first-of-type ._Input-radioInner_bsxfo_110 {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
._Input-radio_bsxfo_93:last-of-type {
  border-bottom-right-radius: 4px;
  border-inline-end: 0;
  border-top-right-radius: 4px;
}
._Input-radio_bsxfo_93:last-of-type ._Input-radioInner_bsxfo_110 {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
._Input-radioInner_bsxfo_110 {
  background-color: var(--puck-color-white);
  color: var(--puck-color-grey-04);
  cursor: pointer;
  font-size: var(--puck-font-size-xxxs);
  padding: 8px 12px;
  text-align: center;
  transition: background-color 50ms ease-in;
}
._Input-radio_bsxfo_93:has(:focus-visible) {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_bsxfo_110:hover {
    background-color: var(--puck-color-azure-12);
    transition: none;
  }
}
._Input--readOnly_bsxfo_82 ._Input-radioInner_bsxfo_110 {
  background-color: var(--puck-color-white);
  color: var(--puck-color-grey-04);
  cursor: default;
}
._Input-radio_bsxfo_93 ._Input-radioInput_bsxfo_155:checked ~ ._Input-radioInner_bsxfo_110 {
  background-color: var(--puck-color-azure-11);
  color: var(--puck-color-azure-04);
  font-weight: 500;
}
._Input--readOnly_bsxfo_82 ._Input-radioInput_bsxfo_155:checked ~ ._Input-radioInner_bsxfo_110 {
  background-color: var(--puck-color-grey-11);
  color: var(--puck-color-grey-04);
}
._Input-radio_bsxfo_93 ._Input-radioInput_bsxfo_155 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
textarea._Input-input_bsxfo_26 {
  margin-bottom: -4px;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_1vaho_5 {
  display: flex;
  flex-direction: column;
  background: var(--puck-color-azure-11);
  border: 1px solid var(--puck-color-grey-09);
  border-radius: 4px;
}
._ArrayField--isDraggingFrom_1vaho_13 {
  background-color: var(--puck-color-azure-11);
  overflow: hidden;
}
._ArrayField-addButton_1vaho_18 {
  background-color: var(--puck-color-white);
  border: none;
  border-radius: 3px;
  display: flex;
  color: var(--puck-color-azure-05);
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: 14px;
  text-align: left;
  transition: background-color 50ms ease-in;
}
._ArrayField--hasItems_1vaho_33 > ._ArrayField-addButton_1vaho_18 {
  border-top: 1px solid var(--puck-color-grey-09);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_1vaho_18:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_1vaho_5:not(._ArrayField--isDraggingFrom_1vaho_13) > ._ArrayField-addButton_1vaho_18:hover {
    background: var(--puck-color-azure-12);
    color: var(--puck-color-azure-04);
    transition: none;
  }
}
._ArrayField_1vaho_5:not(._ArrayField--isDraggingFrom_1vaho_13) > ._ArrayField-addButton_1vaho_18:active {
  background: var(--puck-color-azure-11);
  color: var(--puck-color-azure-04);
  transition: none;
}
._ArrayField-inner_1vaho_59 {
  margin-top: -1px;
}
._ArrayFieldItem_1vaho_67 {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: block;
  position: relative;
}
._ArrayFieldItem_1vaho_67 {
  border-top: 1px solid var(--puck-color-grey-09);
}
._ArrayFieldItem--isDragging_1vaho_78 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_1vaho_82::before {
  display: none;
}
._ArrayFieldItem--isExpanded_1vaho_82 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: 1px solid var(--puck-color-azure-07) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_1vaho_78 {
  outline: 2px var(--puck-color-azure-09) solid !important;
}
._ArrayFieldItem--isDragging_1vaho_78 ._ArrayFieldItem-summary_1vaho_97:active {
  background-color: var(--puck-color-white);
}
._ArrayFieldItem_1vaho_67 + ._ArrayFieldItem_1vaho_67 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_1vaho_97 {
  background: var(--puck-color-white);
  color: var(--puck-color-grey-04);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-font-size-xxs);
  list-style: none;
  padding: 12px 15px;
  position: relative;
  overflow: hidden;
  transition: background-color 50ms ease-in;
}
._ArrayFieldItem--noFields_1vaho_122 > ._ArrayFieldItem-summary_1vaho_97 {
  cursor: grab;
}
._ArrayFieldItem_1vaho_67:first-of-type > ._ArrayFieldItem-summary_1vaho_97 {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
._ArrayField--addDisabled_1vaho_131 > ._ArrayField-inner_1vaho_59 > ._ArrayFieldItem_1vaho_67:last-of-type:not(._ArrayFieldItem--isExpanded_1vaho_82) > ._ArrayFieldItem-summary_1vaho_97 {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
._ArrayField--addDisabled_1vaho_131 > ._ArrayField-inner_1vaho_59 > ._ArrayFieldItem--isExpanded_1vaho_82:last-of-type {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
._ArrayFieldItem-summary_1vaho_97:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_1vaho_97:hover {
    background-color: var(--puck-color-azure-12);
    transition: none;
  }
}
._ArrayFieldItem-summary_1vaho_97:active {
  background-color: var(--puck-color-azure-11);
  transition: none;
}
._ArrayFieldItem--isExpanded_1vaho_82 > ._ArrayFieldItem-summary_1vaho_97 {
  background: var(--puck-color-azure-11);
  color: var(--puck-color-azure-04);
  font-weight: 600;
  transition: none;
}
._ArrayFieldItem-body_1vaho_170 {
  background: var(--puck-color-white);
  display: none;
}
._ArrayFieldItem--isExpanded_1vaho_82 > ._ArrayFieldItem-body_1vaho_170 {
  display: block;
}
._ArrayFieldItem-fieldset_1vaho_179 {
  border: none;
  border-top: 1px solid var(--puck-color-grey-09);
  margin: 0;
  min-width: 0;
  padding: 16px 15px;
}
._ArrayFieldItem-rhs_1vaho_187 {
  display: flex;
  gap: 4px;
  align-items: center;
}
._ArrayFieldItem-actions_1vaho_193 {
  color: var(--puck-color-grey-04);
  display: flex;
  gap: 4px;
  opacity: 0;
}
._ArrayFieldItem-summary_1vaho_97:focus-within > ._ArrayFieldItem-rhs_1vaho_187 > ._ArrayFieldItem-actions_1vaho_193,
._ArrayFieldItem-summary_1vaho_97:hover > ._ArrayFieldItem-rhs_1vaho_187 > ._ArrayFieldItem-actions_1vaho_193 {
  opacity: 1;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_ffob9_1 {
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: currentColor;
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: 4px;
  transition: background-color 50ms ease-in, color 50ms ease-in;
}
._IconButton--active_ffob9_14 {
  color: var(--puck-color-azure-04);
}
._IconButton_ffob9_1:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: -2px;
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_ffob9_1:hover:not(._IconButton--disabled_ffob9_24) {
    background: var(--puck-color-grey-10);
    color: var(--puck-color-azure-04);
    cursor: pointer;
    transition: none;
  }
}
._IconButton_ffob9_1:active {
  background: var(--puck-color-azure-11);
  transition: none;
}
._IconButton-title_ffob9_37 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._IconButton--disabled_ffob9_24 {
  color: var(--puck-color-grey-07);
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_nacdm_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_nacdm_13 {
  background: transparent;
  border-radius: 100%;
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_nacdm_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_17p8x_1 {
  color: var(--puck-color-grey-05);
  cursor: grab;
  padding: 4px;
  border-radius: 4px;
}
._DragIcon--disabled_17p8x_8 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_17p8x_1:not(._DragIcon--disabled_17p8x_8):hover {
    color: var(--puck-color-azure-05);
    background-color: var(--puck-color-azure-12);
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder] * {
  opacity: 0 !important;
}
[data-dnd-placeholder] {
  background: var(--puck-color-azure-09) !important;
  border: none !important;
  color: #00000000 !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_91ls0_1 {
  display: flex;
}
._ExternalInput-button_91ls0_5 {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: var(--puck-color-white);
  border: 1px solid var(--puck-color-grey-09);
  border-radius: 4px;
  color: var(--puck-color-azure-04);
  padding: 12px 16px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color 50ms ease-in;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
}
._ExternalInput--dataSelected_91ls0_24 ._ExternalInput-button_91ls0_5 {
  color: var(--puck-color-grey-03);
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_91ls0_31 ._ExternalInput-button_91ls0_5 {
  background-color: var(--puck-color-grey-11);
}
._ExternalInput-detachButton_91ls0_35 {
  border: 1px solid var(--puck-color-grey-09);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: var(--puck-color-grey-12);
  color: var(--puck-color-grey-05);
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  position: relative;
  transition: background-color 50ms ease-in, color 50ms ease-in;
  margin-inline-start: -1px;
}
._ExternalInput-button_91ls0_5:focus-visible,
._ExternalInput-detachButton_91ls0_35:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_91ls0_1:not(._ExternalInput--readOnly_91ls0_31) ._ExternalInput-button_91ls0_5:hover,
  ._ExternalInput_91ls0_1:not(._ExternalInput--readOnly_91ls0_31) ._ExternalInput-detachButton_91ls0_35:hover {
    background: var(--puck-color-azure-12);
    transition: none;
  }
  ._ExternalInput_91ls0_1:not(._ExternalInput--readOnly_91ls0_31) ._ExternalInput-detachButton_91ls0_35:hover {
    color: var(--puck-color-azure-04);
  }
}
._ExternalInput_91ls0_1:not(._ExternalInput--readOnly_91ls0_31) ._ExternalInput-button_91ls0_5:active,
._ExternalInput_91ls0_1:not(._ExternalInput--readOnly_91ls0_31) ._ExternalInput-detachButton_91ls0_35:active {
  background: var(--puck-color-azure-11);
  transition: none;
}
._ExternalInputModal_91ls0_79 {
  color: var(--puck-color-black);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_91ls0_89 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_91ls0_89 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_91ls0_100 ._ExternalInputModal-grid_91ls0_89 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_91ls0_105 {
  border-bottom: 1px solid var(--puck-color-grey-09);
}
._ExternalInputModal--filtersToggled_91ls0_100 ._ExternalInputModal-filters_91ls0_105 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_91ls0_105 {
    border-inline-end: 1px solid var(--puck-color-grey-09);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_91ls0_100 ._ExternalInputModal-filters_91ls0_105 {
    display: block;
  }
}
._ExternalInputModal-masthead_91ls0_124 {
  background-color: var(--puck-color-grey-12);
  border-bottom: 1px solid var(--puck-color-grey-09);
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
}
._ExternalInputModal-tableWrapper_91ls0_133 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_91ls0_133 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-grey-02);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_91ls0_149 {
  background-color: var(--puck-color-white);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_91ls0_149 {
  border-bottom: 1px solid var(--puck-color-grey-09);
  color: var(--puck-color-grey-04);
  font-weight: 500;
  font-size: 14px;
  padding: 16px 24px;
}
._ExternalInputModal-td_91ls0_164 {
  border-bottom: 1px solid var(--puck-color-grey-10);
  padding: 16px 24px;
}
._ExternalInputModal-tr_91ls0_169 ._ExternalInputModal-td_91ls0_164:first-of-type {
  font-weight: 500;
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_91ls0_176 ._ExternalInputModal-tr_91ls0_169:hover {
    background: var(--puck-color-azure-12);
    color: var(--puck-color-azure-04);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_91ls0_176 ._ExternalInputModal-tr_91ls0_169:hover ._ExternalInputModal-td_91ls0_164:first-of-type {
    border-inline-start: 4px solid var(--puck-color-azure-04);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_91ls0_176 ._ExternalInputModal-tr_91ls0_169:last-of-type ._ExternalInputModal-td_91ls0_164 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_91ls0_133 {
  display: none;
}
._ExternalInputModal--hasData_91ls0_202 ._ExternalInputModal-tableWrapper_91ls0_133 {
  display: block;
}
._ExternalInputModal-loadingBanner_91ls0_206 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-white) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_91ls0_223 ._ExternalInputModal-loadingBanner_91ls0_206 {
  display: flex;
}
._ExternalInputModal-searchForm_91ls0_227 {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_91ls0_227 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_91ls0_227 {
  display: flex;
  background: var(--puck-color-white);
  border-width: 1px;
  border-style: solid;
  border-color: var(--puck-color-grey-09);
  border-radius: 4px;
  flex-grow: 1;
  transition: border-color 50ms ease-in;
}
._ExternalInputModal-search_91ls0_227:focus-within {
  border-color: var(--puck-color-grey-05);
  outline: 2px solid var(--puck-color-azure-05);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_91ls0_227:hover {
    border-color: var(--puck-color-grey-05);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_91ls0_264 {
  align-items: center;
  background: var(--puck-color-grey-12);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-inline-end: 1px solid var(--puck-color-grey-09);
  color: var(--puck-color-grey-07);
  display: flex;
  justify-content: center;
  padding: 12px 15px;
  transition: color 50ms ease-in;
}
._ExternalInputModal-search_91ls0_227:focus-within ._ExternalInputModal-searchIcon_91ls0_264 {
  color: var(--puck-color-grey-04);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_91ls0_227:hover ._ExternalInputModal-searchIcon_91ls0_264 {
    color: var(--puck-color-grey-04);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_91ls0_289 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_91ls0_299 {
  border: none;
  border-radius: 4px;
  background: var(--puck-color-white);
  font-family: inherit;
  font-size: 14px;
  padding: 12px 15px;
  width: 100%;
}
._ExternalInputModal-searchInput_91ls0_299:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_91ls0_313 {
  display: flex;
  gap: 8px;
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_91ls0_313 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_91ls0_326 {
  align-self: center;
}
._ExternalInputModal-footerContainer_91ls0_330 {
  background-color: var(--puck-color-grey-12);
  border-top: 1px solid var(--puck-color-grey-09);
  color: var(--puck-color-grey-04);
  padding: 16px;
}
._ExternalInputModal-footer_91ls0_330 {
  font-weight: 500;
  font-size: 14px;
  text-align: right;
}
._ExternalInputModal-field_91ls0_343 {
  color: var(--puck-color-grey-04);
  margin: 16px;
  margin-bottom: 12px;
  display: block;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Modal/styles.module.css/#css-module-data */
._Modal_ikbaj_1 {
  background: color-mix(in srgb, var(--puck-color-black) 75%, transparent);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_ikbaj_15 {
  display: flex;
}
._Modal-inner_ikbaj_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--puck-color-white);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Heading/styles.module.css/#css-module-data */
._Heading_qxrry_1 {
  display: block;
  color: var(--puck-color-black);
  font-weight: 700;
  margin: 0;
}
._Heading_qxrry_1 b {
  font-weight: 700;
}
._Heading--xxxxl_qxrry_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: 0.08ch;
  font-weight: 800;
}
._Heading--xxxl_qxrry_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_qxrry_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_qxrry_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_qxrry_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_qxrry_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_qxrry_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_qxrry_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Button/Button.module.css/#css-module-data */
._Button_10byl_1 {
  appearance: none;
  background: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--puck-color-white);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.05ch;
  font-family: var(--puck-font-family);
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color 50ms ease-in;
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_10byl_1:hover,
._Button_10byl_1:active {
  transition: none;
}
._Button--medium_10byl_29 {
  min-height: 34px;
  padding-bottom: 7px;
  padding-inline-start: 19px;
  padding-inline-end: 19px;
  padding-top: 7px;
}
._Button--large_10byl_37 {
  padding-bottom: 11px;
  padding-inline-start: 19px;
  padding-inline-end: 19px;
  padding-top: 11px;
}
._Button-icon_10byl_44 {
  margin-top: 2px;
}
._Button--primary_10byl_48 {
  background: var(--puck-color-azure-04);
}
._Button_10byl_1:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_10byl_48:hover {
    background-color: var(--puck-color-azure-03);
  }
}
._Button--primary_10byl_48:active {
  background-color: var(--puck-color-azure-02);
}
._Button--secondary_10byl_67 {
  border: 1px solid currentColor;
  color: currentColor;
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_10byl_67:hover {
    background-color: var(--puck-color-azure-12);
    color: var(--puck-color-black);
  }
}
._Button--secondary_10byl_67:active {
  background-color: var(--puck-color-azure-11);
  color: var(--puck-color-black);
}
._Button--flush_10byl_84 {
  border-radius: 0;
}
._Button--disabled_10byl_88,
._Button--disabled_10byl_88:hover {
  background-color: var(--puck-color-grey-07);
  color: var(--puck-color-grey-03);
  cursor: not-allowed;
}
._Button--fullWidth_10byl_95 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_10byl_100 {
  padding-inline-start: 8px;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_k97eh_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_k97eh_7 {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 6px 6px;
  background-color: var(--puck-color-grey-12);
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_k97eh_17 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_k97eh_17:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_k97eh_17:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_k97eh_35 ._RichTextMenu-group_k97eh_17 {
  color: var(--puck-color-grey-08);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_k97eh_17 + ._RichTextMenu-group_k97eh_17 {
  border-left: 1px solid var(--puck-color-grey-10);
}
._RichTextMenu--inline_k97eh_35 ._RichTextMenu-group_k97eh_17 + ._RichTextMenu-group_k97eh_17 {
  border-left: 0.5px solid var(--puck-color-grey-05);
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_1aveu_1 .lucide {
  height: 18px;
  width: 18px;
}
._Control--inline_1aveu_6 .lucide {
  height: 16px;
  width: 16px;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Select/styles.module.css/#css-module-data */
._Select_xjbef_1 {
  position: relative;
  z-index: 1;
}
._Select-button_xjbef_6 {
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  gap: 0px;
  height: 100%;
  padding: 4px;
  padding-right: 2px;
}
._Select--hasOptions_xjbef_19 ._Select-button_xjbef_6 {
  color: currentColor;
}
._Select--hasOptions_xjbef_19:not(._Select--disabled_xjbef_23) ._Select-button_xjbef_6 {
  cursor: pointer;
}
._Select-buttonIcon_xjbef_27 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_xjbef_33 ._Select-buttonIcon_xjbef_27 .lucide {
  height: 18px;
  width: 18px;
}
._Select--actionBar_xjbef_38 ._Select-buttonIcon_xjbef_27 .lucide {
  height: 16px;
  width: 16px;
}
._Select--hasOptions_xjbef_19:not(._Select--disabled_xjbef_23) ._Select-button_xjbef_6:hover,
._Select--hasValue_xjbef_44 ._Select-button_xjbef_6 {
  background: var(--puck-color-grey-10);
  color: var(--puck-color-azure-04);
}
._Select--disabled_xjbef_23 ._Select-button_xjbef_6 {
  color: var(--puck-color-grey-07);
}
._Select--actionBar_xjbef_38 {
  &._Select--hasOptions_xjbef_19 ._Select-button_xjbef_6:hover,
  &._Select--hasValue_xjbef_44 ._Select-button_xjbef_6 {
    background: none;
    color: var(--puck-color-azure-07);
  }
}
._Select-items_xjbef_61 {
  background: white;
  border: 1px solid var(--puck-color-grey-09);
  border-radius: 8px;
  margin: 10px 8px;
  margin-left: 0;
  padding: 4px;
  z-index: 2;
  list-style: none;
}
._SelectItem_xjbef_72 {
  background: transparent;
  border-radius: 4px;
  border: none;
  color: var(--puck-color-grey-04);
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: 8px 12px;
  width: 100%;
}
._SelectItem--isSelected_xjbef_87 {
  background: var(--puck-color-azure-11);
  color: var(--puck-color-azure-04);
  font-weight: 500;
}
._SelectItem--isSelected_xjbef_87 ._SelectItem-icon_xjbef_93 {
  color: var(--puck-color-azure-04);
}
._SelectItem_xjbef_72:hover {
  background: var(--puck-color-azure-11);
  color: var(--puck-color-azure-04);
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_z25h4_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_z25h4_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_z25h4_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: 4px solid var(--puck-color-grey-09);
}
._RichTextEditor_z25h4_1 .rich-text code {
  background-color: var(--puck-color-grey-11);
  padding: 4px 8px;
  border-radius: 4px;
}
._RichTextEditor_z25h4_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_z25h4_1 .rich-text pre code {
  display: block;
  padding: 8px 12px;
}
._RichTextEditor_z25h4_1 .rich-text > *:first-child,
._RichTextEditor_z25h4_1 .ProseMirror > *:first-child,
._RichTextEditor_z25h4_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_z25h4_1 .rich-text > *:last-child,
._RichTextEditor_z25h4_1 .ProseMirror > *:last-child,
._RichTextEditor_z25h4_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_z25h4_50 {
  background: var(--puck-color-white);
  border-width: 1px;
  border-style: solid;
  border-color: var(--puck-color-grey-09);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  resize: vertical;
  text-align: initial;
  transition: border-color 50ms ease-in;
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_z25h4_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_z25h4_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_z25h4_50 .rich-text .ProseMirror {
  height: 100%;
  padding: 12px 15px;
}
._RichTextEditor--editor_z25h4_50 .rich-text ul,
._RichTextEditor--editor_z25h4_50 .rich-text ol {
  padding-left: 24px;
}
._RichTextEditor--editor_z25h4_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_z25h4_50 .rich-text p {
  margin-block: 12px;
}
._RichTextEditor--editor_z25h4_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_z25h4_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_z25h4_50:focus-within {
  border-color: var(--puck-color-grey-05);
  outline: 2px solid var(--puck-color-azure-05);
  transition: none;
}
._RichTextEditor--editor_z25h4_50._RichTextEditor--disabled_z25h4_107 {
  background: var(--puck-color-grey-11);
}
._RichTextEditor_z25h4_1:not(:focus-within):not(._RichTextEditor--isActive_z25h4_111) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_z25h4_117 {
  border-bottom: 1px solid var(--puck-color-grey-10);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_z25h4_107 ._RichTextEditor-menu_z25h4_117 {
  border-bottom: 1px solid var(--puck-color-grey-09);
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data */
._ObjectField_1ua3y_5 {
  display: flex;
  flex-direction: column;
  background-color: var(--puck-color-white);
  border: 1px solid var(--puck-color-grey-09);
  border-radius: 4px;
}
._ObjectField-fieldset_1ua3y_13 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: 16px 15px;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Drawer/styles.module.css/#css-module-data */
._Drawer_pl7z0_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: 12px;
}
._Drawer-draggable_pl7z0_8 {
  position: relative;
}
._Drawer-draggableBg_pl7z0_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_pl7z0_22 {
  background: var(--puck-color-white);
  cursor: grab;
  padding: 12px;
  display: flex;
  border: 1px var(--puck-color-grey-09) solid;
  border-radius: 4px;
  font-size: var(--puck-font-size-xxs);
  justify-content: space-between;
  align-items: center;
  transition: background-color 50ms ease-in, color 50ms ease-in;
}
._DrawerItem--disabled_pl7z0_35 ._DrawerItem-draggable_pl7z0_22 {
  background: var(--puck-color-grey-11);
  color: var(--puck-color-grey-05);
  cursor: not-allowed;
}
._DrawerItem_pl7z0_22:focus-visible {
  outline: 0;
}
._Drawer_pl7z0_1:not(._Drawer--isDraggingFrom_pl7z0_45) ._DrawerItem_pl7z0_22:focus-visible ._DrawerItem-draggable_pl7z0_22 {
  border-radius: 4px;
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_pl7z0_1:not(._Drawer--isDraggingFrom_pl7z0_45) ._DrawerItem_pl7z0_22:not(._DrawerItem--disabled_pl7z0_35) ._DrawerItem-draggable_pl7z0_22:hover {
    background-color: var(--puck-color-azure-12);
    color: var(--puck-color-azure-04);
    transition: none;
  }
}
._DrawerItem-name_pl7z0_63 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1vaqy_1 {
  position: absolute;
  pointer-events: none;
  --overlay-background: color-mix( in srgb, var(--puck-color-azure-08) 30%, transparent );
}
._DraggableComponent-overlayWrapper_1vaqy_12 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1vaqy_12 {
  cursor: pointer;
  height: 100%;
  outline: 2px var(--puck-color-azure-09) solid;
  outline-offset: -2px;
  width: 100%;
}
._DraggableComponent_1vaqy_1:focus-visible > ._DraggableComponent-overlayWrapper_1vaqy_12 {
  outline: 1px solid var(--puck-color-azure-05);
}
._DraggableComponent-loadingOverlay_1vaqy_34 {
  background: var(--puck-color-white);
  color: var(--puck-color-grey-03);
  border-radius: 4px;
  display: flex;
  padding: 8px;
  top: 8px;
  right: 8px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1vaqy_50 > ._DraggableComponent-overlayWrapper_1vaqy_12 > ._DraggableComponent-overlay_1vaqy_12 {
  background: var(--overlay-background);
  outline: 2px var(--puck-color-azure-09) solid;
}
._DraggableComponent--isSelected_1vaqy_57 > ._DraggableComponent-overlayWrapper_1vaqy_12 > ._DraggableComponent-overlay_1vaqy_12 {
  outline-color: var(--puck-color-azure-07);
}
._DraggableComponent_1vaqy_1:has(._DraggableComponent--hover_1vaqy_50 > ._DraggableComponent-overlayWrapper_1vaqy_12) > ._DraggableComponent-overlayWrapper_1vaqy_12 {
  display: none;
}
._DraggableComponent-actionsOverlay_1vaqy_71 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1vaqy_57 ._DraggableComponent-actionsOverlay_1vaqy_71 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1vaqy_71 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder] {
  background: var(--puck-color-azure-06, #6499cf) !important;
  border: none !important;
  color: #00000000 !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder] *,
[data-dnd-placeholder]::after,
[data-dnd-placeholder]::before {
  opacity: 0 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: 2px var(--puck-color-azure-09, #cfdff0) solid !important;
  outline-offset: -2px !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/DropZone/styles.module.css/#css-module-data */
._DropZone_1i2sv_1 {
  --resize-animation-ms: 150ms;
  position: relative;
  height: 100%;
  min-height: var(--min-empty-height);
  outline-offset: -2px;
  width: 100%;
}
._DropZone--hasChildren_1i2sv_11 {
  min-height: 0;
}
._DropZone_1i2sv_1:empty {
  min-height: var(--min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_1i2sv_1 {
  transition: min-height var(--resize-animation-ms) ease-in;
}
._DropZone--isAreaSelected_1i2sv_24,
._DropZone--hoveringOverArea_1i2sv_25:not(._DropZone--isRootZone_1i2sv_25) {
  background: color-mix(in srgb, var(--puck-color-azure-09) 30%, transparent);
  outline: 2px dashed var(--puck-color-azure-08);
}
._DropZone_1i2sv_1:empty {
  background: color-mix(in srgb, var(--puck-color-azure-09) 30%, transparent);
  outline: 2px dashed var(--puck-color-azure-08);
}
._DropZone--isDestination_1i2sv_35 {
  outline: 2px dashed var(--puck-color-azure-04) !important;
}
._DropZone--isDestination_1i2sv_35:not(._DropZone--isRootZone_1i2sv_25) {
  background: color-mix(in srgb, var(--puck-color-azure-09) 30%, transparent) !important;
}
._DropZone-item_1i2sv_47 {
  position: relative;
}
._DropZone-hitbox_1i2sv_51 {
  position: absolute;
  bottom: -12px;
  height: 24px;
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_1i2sv_59 {
  outline: 2px dashed var(--puck-color-azure-06);
}
._DropZone_1i2sv_1 > *:not([data-puck-component]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_1i2sv_68:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_10bh7_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_10bh7_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_10bh7_10 {
  background: var(--puck-color-white);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_10bh7_25 {
  display: flex;
  padding: 16px;
  position: sticky;
  top: 0;
}
._PuckFields-field_10bh7_32 * {
  box-sizing: border-box;
}
._PuckFields--wrapFields_10bh7_36 ._PuckFields-field_10bh7_32 {
  color: var(--puck-color-grey-04);
  padding: 16px;
  padding-bottom: 12px;
  display: block;
}
._PuckFields--wrapFields_10bh7_36 ._PuckFields-field_10bh7_32 + ._PuckFields-field_10bh7_32 {
  border-top: 1px solid var(--puck-color-grey-09);
  margin-top: 8px;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_1rrlt_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_1rrlt_5 + ._ComponentList_1rrlt_1 {
  margin-top: 12px;
}
._ComponentList-content_1rrlt_9 {
  display: none;
}
._ComponentList--isExpanded_1rrlt_5 > ._ComponentList-content_1rrlt_9 {
  display: block;
}
._ComponentList-title_1rrlt_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-color-grey-05);
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-font-size-xxxs);
  list-style: none;
  margin-bottom: 6px;
  padding: 8px;
  text-transform: uppercase;
  transition: background-color 50ms ease-in, color 50ms ease-in;
  gap: 4px;
  border-radius: 4px;
  width: 100%;
}
._ComponentList-title_1rrlt_17:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_1rrlt_17:hover {
    background-color: var(--puck-color-azure-11);
    color: var(--puck-color-azure-04);
    transition: none;
  }
}
._ComponentList-title_1rrlt_17:active {
  background-color: var(--puck-color-azure-10);
  transition: none;
}
._ComponentList-titleIcon_1rrlt_53 {
  margin-inline-start: auto;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Components/styles.module.css/#css-module-data */
._Components_has53_1 {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
}
._Components-search_has53_8 {
  position: sticky;
  top: -16px;
  margin: -16px -16px 0;
  padding: 16px;
  background-color: var(--puck-color-white);
  z-index: 1;
  display: flex;
  align-items: center;
}
._Components-searchIcon_has53_19 {
  position: absolute;
  inset-inline-start: 24px;
  color: var(--puck-color-grey-05);
  display: flex;
  align-items: center;
  pointer-events: none;
}
._Components-searchInput_has53_28 {
  appearance: none;
  background-color: var(--puck-color-white);
  border: 1px solid var(--puck-color-grey-09);
  border-radius: 4px;
  color: var(--puck-color-black);
  font: inherit;
  font-size: var(--puck-font-size-xs);
  padding: 8px 28px 8px 30px;
  width: 100%;
  box-sizing: border-box;
}
._Components-searchInput_has53_28:focus {
  border-color: var(--puck-color-azure-05);
  outline: none;
}
._Components-searchInput_has53_28::-webkit-search-cancel-button {
  display: none;
}
._Components-searchClear_has53_50 {
  position: absolute;
  inset-inline-end: 22px;
  background: transparent;
  border: 0;
  color: var(--puck-color-grey-05);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 4px;
}
._Components-searchClear_has53_50:hover {
  color: var(--puck-color-azure-04);
}
._Components-list_has53_67 {
  flex: 1;
  min-height: 0;
}
._Components-empty_has53_72 {
  color: var(--puck-color-grey-05);
  font-size: var(--puck-font-size-xs);
  padding: 8px;
  text-align: center;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_z2rgu_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_z2rgu_6 {
  border: none;
  height: 100%;
  width: 100%;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/LayerTree/styles.module.css/#css-module-data */
._LayerTree_7rx04_1 {
  color: var(--puck-color-grey-03);
  font-family: var(--puck-font-family);
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree-zoneTitle_7rx04_11 {
  color: var(--puck-color-grey-05);
  font-size: var(--puck-font-size-xxxs);
  text-transform: uppercase;
}
._LayerTree-helper_7rx04_17 {
  text-align: center;
  color: var(--puck-color-grey-07);
  margin: 8px 4px;
}
._Layer_7rx04_1 {
  position: relative;
  border: 1px solid transparent;
  border-radius: 4px;
}
._Layer-inner_7rx04_29 {
  border: 1px solid transparent;
  border-radius: 4px;
  transition: color 50ms ease-in;
}
._Layer--containsZone_7rx04_35 > ._Layer-inner_7rx04_29 {
  padding-inline-start: 0;
}
._Layer-clickable_7rx04_39 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: 4px;
  color: inherit;
  cursor: pointer;
  display: flex;
  font: inherit;
  padding-inline-start: 12px;
  padding-inline-end: 4px;
  width: 100%;
}
._Layer-clickable_7rx04_39:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
  position: relative;
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_7rx04_1:not(._Layer--isSelected_7rx04_61) > ._Layer-inner_7rx04_29:hover {
    border-color: var(--puck-color-azure-10);
    background: var(--puck-color-azure-11);
    color: var(--puck-color-azure-04);
    transition: none;
  }
}
._Layer--isSelected_7rx04_61 {
  border-color: var(--puck-color-azure-08);
}
._Layer--isSelected_7rx04_61 > ._Layer-inner_7rx04_29 {
  background: var(--puck-color-azure-10);
}
._Layer--isSelected_7rx04_61 > ._Layer-inner_7rx04_29 > ._Layer-clickable_7rx04_39 > ._Layer-chevron_7rx04_77,
._Layer--childIsSelected_7rx04_78 > ._Layer-inner_7rx04_29 > ._Layer-clickable_7rx04_39 > ._Layer-chevron_7rx04_77 {
  transform: scaleY(-1);
}
._Layer-zones_7rx04_82 {
  display: none;
  margin-inline-start: 12px;
}
._Layer--isSelected_7rx04_61 > ._Layer-zones_7rx04_82,
._Layer--childIsSelected_7rx04_78 > ._Layer-zones_7rx04_82 {
  display: block;
}
._Layer-zones_7rx04_82 > ._LayerTree_7rx04_1 {
  margin-inline-start: 12px;
}
._Layer-title_7rx04_96,
._LayerTree-zoneTitle_7rx04_11 {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 8px 4px;
  overflow-x: hidden;
}
._Layer-name_7rx04_105 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_7rx04_111 {
  color: var(--puck-color-rose-07);
  margin-top: 4px;
}
._Layer-zoneIcon_7rx04_116 {
  color: var(--puck-color-grey-08);
  margin-top: 4px;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_cgc86_19 {
  --puck-space-px: 16px;
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_cgc86_19 {
    overflow-x: auto;
  }
}
._Puck-portal_cgc86_32 {
  position: relative;
  z-index: 2;
}
._PuckLayout_cgc86_37 {
  height: 100dvh;
}
._PuckLayout-inner_cgc86_41 {
  --puck-frame-width: auto;
  --puck-side-nav-width: min-content;
  --puck-side-bar-width: 0px;
  --puck-left-side-bar-width: var( --puck-user-left-side-bar-width, var(--puck-side-bar-width) );
  --puck-right-side-bar-width: var( --puck-user-right-side-bar-width, var(--puck-side-bar-width) );
  background-color: var(--puck-color-grey-12);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-side-nav-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows 150ms ease-in;
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_cgc86_41 {
    --puck-side-nav-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-side-nav-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_cgc86_73 ._PuckLayout-inner_cgc86_41 {
    --puck-side-nav-width: 0;
  }
}
._PuckLayout--mounted_cgc86_78 ._PuckLayout-inner_cgc86_41 {
  --puck-side-bar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_cgc86_82._PuckLayout--leftSideBarVisible_cgc86_82 ._PuckLayout-inner_cgc86_41 {
  grid-template-rows: 0 auto 30% 0 var(--puck-side-nav-width);
}
._PuckLayout--mobilePanelHeightToggle_cgc86_82._PuckLayout--leftSideBarVisible_cgc86_82._PuckLayout--isExpanded_cgc86_88 ._PuckLayout-inner_cgc86_41 {
  grid-template-rows: 0 auto 55% 0 var(--puck-side-nav-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_cgc86_82._PuckLayout--leftSideBarVisible_cgc86_82 ._PuckLayout-inner_cgc86_41 {
    grid-template-columns: var(--puck-side-nav-width) var(--puck-left-side-bar-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_cgc86_106._PuckLayout--leftSideBarVisible_cgc86_82 ._PuckLayout-inner_cgc86_41,
._PuckLayout--mobilePanelHeightMinContent_cgc86_106._PuckLayout--leftSideBarVisible_cgc86_82._PuckLayout--isExpanded_cgc86_88 ._PuckLayout-inner_cgc86_41 {
  grid-template-rows: 0 auto min-content 0 var(--puck-side-nav-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_cgc86_82._PuckLayout--leftSideBarVisible_cgc86_82 ._PuckLayout-inner_cgc86_41,
  ._PuckLayout--mobilePanelHeightToggle_cgc86_82._PuckLayout--leftSideBarVisible_cgc86_82._PuckLayout--isExpanded_cgc86_88 ._PuckLayout-inner_cgc86_41,
  ._PuckLayout--mobilePanelHeightMinContent_cgc86_106._PuckLayout--leftSideBarVisible_cgc86_82 ._PuckLayout-inner_cgc86_41,
  ._PuckLayout--mobilePanelHeightMinContent_cgc86_106._PuckLayout--leftSideBarVisible_cgc86_82._PuckLayout--isExpanded_cgc86_88 ._PuckLayout-inner_cgc86_41 {
    grid-template-columns: var(--puck-side-nav-width) var(--puck-left-side-bar-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_cgc86_133 ._PuckLayout-inner_cgc86_41 {
    grid-template-columns: var(--puck-side-nav-width) 0 var(--puck-frame-width) var(--puck-right-side-bar-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_cgc86_82._PuckLayout--rightSideBarVisible_cgc86_133 ._PuckLayout-inner_cgc86_41 {
    grid-template-columns: var(--puck-side-nav-width) var(--puck-left-side-bar-width) var( --puck-frame-width ) var(--puck-right-side-bar-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_cgc86_152 ._PuckLayout-inner_cgc86_41 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_cgc86_37 ._PuckLayout-inner_cgc86_41 {
    --puck-side-bar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_cgc86_37 ._PuckLayout-inner_cgc86_41 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_cgc86_37 ._PuckLayout-inner_cgc86_41 {
    --puck-side-bar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_cgc86_37 ._PuckLayout-inner_cgc86_41 {
    --puck-side-bar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_cgc86_37 ._PuckLayout-inner_cgc86_41 {
    --puck-side-bar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_cgc86_37 ._PuckLayout-inner_cgc86_41 {
    --puck-side-bar-width: 320px;
  }
}
._PuckLayout-nav_cgc86_193 {
  border-top: 1px solid var(--puck-color-grey-09);
  background-color: var(--puck-color-grey-12);
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_cgc86_193 {
    border-top: 0;
    border-right: 1px solid var(--puck-color-grey-09);
    box-sizing: border-box;
  }
}
._PuckLayout-header_cgc86_209 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_cgc86_82 ._PuckLayout-header_cgc86_209 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_cgc86_82 ._PuckLayout-header_cgc86_209 {
    overflow: auto;
  }
}
._PuckPluginTab_cgc86_223 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_cgc86_229 {
  display: flex;
  flex-direction: column;
}
._PuckPluginTab-body_cgc86_234 {
  flex-grow: 1;
  max-height: 100%;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_8pf8c_1 {
  background-color: var(--puck-color-white);
  border-bottom: 1px solid var(--puck-color-grey-09);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: 8px 16px;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_8pf8c_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_8pf8c_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_8pf8c_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_8pf8c_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_8pf8c_45 {
  display: flex;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_63pti_1 {
  background: var(--puck-color-white);
  border-bottom: 1px solid var(--puck-color-grey-09);
  color: var(--puck-color-black);
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_63pti_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_63pti_15 {
    padding-left: 0;
  }
}
._PuckHeader-inner_63pti_20 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-px);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-px);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_63pti_20 {
    border-left: 1px solid var(--puck-color-grey-09);
  }
  ._PuckHeader--hidePlugins_63pti_15 ._PuckHeader-inner_63pti_20 {
    border-left: none;
  }
}
._PuckHeader-toggle_63pti_40 {
  color: var(--puck-color-grey-05);
  display: flex;
  margin-inline-start: -4px;
  padding-top: 2px;
}
._PuckHeader--rightSideBarVisible_63pti_47 ._PuckHeader-rightSideBarToggle_63pti_47,
._PuckHeader--leftSideBarVisible_63pti_48 ._PuckHeader-leftSideBarToggle_63pti_48 {
  color: var(--puck-color-black);
}
._PuckHeader-rightSideBarToggle_63pti_47,
._PuckHeader-leftSideBarToggle_63pti_48 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_63pti_47,
  ._PuckHeader-leftSideBarToggle_63pti_48 {
    display: block;
  }
}
._PuckHeader-title_63pti_64 {
  align-self: center;
}
._PuckHeader-path_63pti_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_63pti_75 {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
}
._PuckHeader-menuButton_63pti_81 {
  color: var(--puck-color-grey-05);
  margin-inline-start: -4px;
}
._PuckHeader--menuOpen_63pti_86 ._PuckHeader-menuButton_63pti_81 {
  color: var(--puck-color-black);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_63pti_81 {
    display: none;
  }
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_5otpt_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-black);
}
._SidebarSection_5otpt_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_5otpt_12 {
  background: var(--puck-color-white);
  padding: 16px;
  border-bottom: 1px solid var(--puck-color-grey-09);
  border-top: 1px solid var(--puck-color-grey-09);
  overflow-x: auto;
}
._SidebarSection--noBorderTop_5otpt_20 > ._SidebarSection-title_5otpt_12 {
  border-top: 0px;
}
._SidebarSection-content_5otpt_24:last-child {
  padding-bottom: 4px;
}
._SidebarSection_5otpt_1:last-of-type ._SidebarSection-content_5otpt_24 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_5otpt_33 {
  background: none;
  border: 0;
  border-radius: 2px;
  color: var(--puck-color-azure-04);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color 50ms ease-in;
}
._SidebarSection-breadcrumbLabel_5otpt_33:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_5otpt_33:hover {
    color: var(--puck-color-azure-03);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_5otpt_33:active {
  color: var(--puck-color-azure-02);
  transition: none;
}
._SidebarSection-breadcrumbs_5otpt_62 {
  align-items: center;
  display: flex;
  gap: 4px;
}
._SidebarSection-breadcrumb_5otpt_33 {
  align-items: center;
  display: flex;
  gap: 4px;
}
._SidebarSection-heading_5otpt_74 {
  padding-inline-end: 16px;
}
._SidebarSection-loadingOverlay_5otpt_78 {
  background: var(--puck-color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_1c9yh_1 {
  align-items: center;
  display: flex;
  gap: 4px;
}
._Breadcrumbs-breadcrumbLabel_1c9yh_7 {
  background: none;
  border: 0;
  border-radius: 2px;
  color: var(--puck-color-azure-04);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color 50ms ease-in;
}
._Breadcrumbs-breadcrumbLabel_1c9yh_7:focus-visible {
  outline: 2px solid var(--puck-color-azure-05);
  outline-offset: 2px;
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_1c9yh_7:hover {
    color: var(--puck-color-azure-03);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_1c9yh_7:active {
  color: var(--puck-color-azure-02);
  transition: none;
}
._Breadcrumbs-breadcrumb_1c9yh_7 {
  align-items: center;
  display: flex;
  gap: 4px;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_e3unb_1 {
  position: relative;
}
._ViewportControls--fullScreen_e3unb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: 12px;
  right: 12px;
  overflow: hidden;
}
._ViewportControls-toggleButton_e3unb_14 {
  display: none;
}
._ViewportControls--fullScreen_e3unb_5 ._ViewportControls-toggleButton_e3unb_14 {
  align-items: center;
  background-color: var(--puck-color-grey-02);
  border: 1px solid var(--puck-color-grey-04);
  border-radius: 30px;
  cursor: pointer;
  color: var(--puck-color-grey-11);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_e3unb_5 ._ViewportControls-toggleButton_e3unb_14:hover {
  background-color: var(--puck-color-grey-02);
  border: 1px solid var(--puck-color-azure-04);
  color: var(--puck-color-azure-07);
}
._ViewportControls--isExpanded_e3unb_38 ._ViewportControls-toggleButton_e3unb_14 {
  background-color: var(--puck-color-grey-03);
}
._ViewportControls-actions_e3unb_42 {
  display: flex;
}
._ViewportControls-actionsInner_e3unb_46 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_e3unb_5 ._ViewportControls-actionsInner_e3unb_46 {
  background: var(--puck-color-grey-11);
  border: 1px solid var(--puck-color-grey-09);
  border-radius: 30px;
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_e3unb_5 ._ViewportControls-actionsInner_e3unb_46 {
  transform: translateX(100%);
  transition: transform 150ms ease-in-out;
}
._ViewportControls--fullScreen_e3unb_5._ViewportControls--isExpanded_e3unb_38 ._ViewportControls-actionsInner_e3unb_46 {
  transform: translateX(42px);
}
._ViewportControls-divider_e3unb_75 {
  border-inline-end: 1px solid var(--puck-color-grey-09);
  margin-bottom: 8px;
  margin-top: 8px;
}
._ViewportControls-zoomSelect_e3unb_81 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: 8px;
  width: 96px;
}
._ViewportControls--fullScreen_e3unb_5 ._ViewportControls-zoom_e3unb_81 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_e3unb_81,
  ._ViewportControls--fullScreen_e3unb_5 ._ViewportControls-zoom_e3unb_81 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_e3unb_81:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_e3unb_111 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_e3unb_119 ._ViewportButton-inner_e3unb_111 {
  color: var(--puck-color-azure-04);
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_t6s9b_1 {
  background: var(--puck-color-grey-11);
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-px);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_t6s9b_1 {
    padding: calc(var(--puck-space-px) * 1.5);
    padding-top: calc(var(--puck-space-px) * 0.5);
  }
  ._PuckCanvas_t6s9b_1:not(._PuckCanvas_t6s9b_1:has(._PuckCanvas-controls_t6s9b_17)) {
    padding-top: calc(var(--puck-space-px) * 1.5);
  }
}
._PuckCanvas--fullScreen_t6s9b_22 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_t6s9b_22 {
    padding: 0;
  }
}
._PuckCanvas-inner_t6s9b_33 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_t6s9b_42 {
  background: white;
  outline: 1px solid var(--puck-color-grey-09);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_t6s9b_42 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_t6s9b_42 {
    transition: none !important;
  }
}
._PuckCanvas--ready_t6s9b_67 ._PuckCanvas-root_t6s9b_42 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_t6s9b_72 {
  align-items: center;
  color: var(--puck-color-grey-06);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity 250ms ease-out;
  opacity: 0;
}
._PuckCanvas--showLoader_t6s9b_82 ._PuckCanvas-loader_t6s9b_72 {
  opacity: 1;
}
._PuckCanvas--showLoader_t6s9b_82._PuckCanvas--ready_t6s9b_67 ._PuckCanvas-loader_t6s9b_72 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_t6s9b_17 {
  padding-bottom: calc(var(--puck-space-px) * 0.5);
}
._PuckCanvas--fullScreen_t6s9b_22 ._PuckCanvas-controls_t6s9b_17 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_o396p_1 {
  border-block-start: 1px solid var(--puck-color-grey-09);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_o396p_9 {
  display: flex;
}
._Sidebar--left_o396p_13 {
  background: var(--puck-color-grey-12);
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_o396p_13 {
    border-block-start: 0;
    border-inline-end: 1px solid var(--puck-color-grey-09);
  }
}
._Sidebar--right_o396p_25 {
  background: var(--puck-color-white);
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_o396p_25 {
    border-block-start: 0;
    border-inline-start: 1px solid var(--puck-color-grey-09);
  }
}
._Sidebar-resizeHandle_o396p_37 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_o396p_13 + ._Sidebar-resizeHandle_o396p_37 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_o396p_25 + ._Sidebar-resizeHandle_o396p_37 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_1tvxq_1 {
  display: flex;
}
._Nav-list_1tvxq_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: 8px;
}
@media (min-width: 638px) {
  ._Nav-list_1tvxq_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
}
._Nav-mobileActions_1tvxq_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: 4px 16px;
  border-inline-start: 1px solid var(--puck-color-grey-09);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_1tvxq_23 {
    display: none;
  }
}
._NavItem-link_1tvxq_38 {
  text-align: center;
  align-items: center;
  color: var(--puck-color-grey-03);
  display: flex;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 4px;
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_1tvxq_38 {
    width: auto;
  }
}
._NavItem_1tvxq_38:first-of-type {
  padding-left: 16px;
}
._NavItem_1tvxq_38:last-of-type {
  padding-right: 16px;
}
@media (min-width: 638px) {
  ._NavItem_1tvxq_38:first-of-type,
  ._NavItem_1tvxq_38:last-of-type {
    padding: 0;
  }
}
._NavItem-link_1tvxq_38 {
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 0;
  flex-direction: column;
  font-size: var(--puck-font-size-xxxs);
}
@media (min-width: 638px) {
  ._NavItem-link_1tvxq_38 {
    border: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
}
._NavItem-linkIcon_1tvxq_89 {
  height: 24px;
  width: 24px;
}
._NavItem--active_1tvxq_94 > ._NavItem-link_1tvxq_38 {
  background-color: var(--puck-color-azure-10);
  color: var(--puck-color-azure-04);
  font-weight: 600;
}
._NavItem--active_1tvxq_94 > ._NavItem-link_1tvxq_38 {
  background-color: transparent;
  border-top-color: var(--puck-color-azure-04);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: 600;
}
@media (min-width: 638px) {
  ._NavItem--active_1tvxq_94 > ._NavItem-link_1tvxq_38 {
    border-top-color: transparent;
    border-right-color: var(--puck-color-azure-04);
  }
}
._NavItem_1tvxq_38:not(._NavItem--active_1tvxq_94) > ._NavItem-link_1tvxq_38:hover {
  background-color: var(--puck-color-azure-11);
  color: var(--puck-color-azure-04);
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_1tvxq_121 {
    display: none;
  }
}
._NavItem--desktopOnly_1tvxq_126 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_1tvxq_126 {
    display: block;
  }
}

/* css-module:/Users/feb/HTDocs/custom-puck/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_1ey1i_1 {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/Users/feb/HTDocs/custom-puck/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_q92j6_1 {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/Users/feb/HTDocs/custom-puck/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_nd930_1 {
  background: white;
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_nd930_7 {
  border-bottom: 1px solid var(--puck-color-grey-09);
  font-weight: 600;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_nd930_7 {
    padding: 16px;
  }
}`;
var iframeInteractionStyles = '/* styles/color.css */\n:root {\n  --puck-color-rose-01: #4a001c;\n  --puck-color-rose-02: #670833;\n  --puck-color-rose-03: #87114c;\n  --puck-color-rose-04: #a81a66;\n  --puck-color-rose-05: #bc5089;\n  --puck-color-rose-06: #cc7ca5;\n  --puck-color-rose-07: #d89aba;\n  --puck-color-rose-08: #e3b8cf;\n  --puck-color-rose-09: #efd6e3;\n  --puck-color-rose-10: #f6eaf1;\n  --puck-color-rose-11: #faf4f8;\n  --puck-color-rose-12: #fef8fc;\n  --puck-color-azure-01: #00175d;\n  --puck-color-azure-02: #002c77;\n  --puck-color-azure-03: #014292;\n  --puck-color-azure-04: #0158ad;\n  --puck-color-azure-05: #3479be;\n  --puck-color-azure-06: #6499cf;\n  --puck-color-azure-07: #88b0da;\n  --puck-color-azure-08: #abc7e5;\n  --puck-color-azure-09: #cfdff0;\n  --puck-color-azure-10: #e7eef7;\n  --puck-color-azure-11: #f3f6fb;\n  --puck-color-azure-12: #f7faff;\n  --puck-color-green-01: #002000;\n  --puck-color-green-02: #043604;\n  --puck-color-green-03: #084e08;\n  --puck-color-green-04: #0c680c;\n  --puck-color-green-05: #1d882f;\n  --puck-color-green-06: #2faa53;\n  --puck-color-green-07: #56c16f;\n  --puck-color-green-08: #7dd78b;\n  --puck-color-green-09: #b8e8bf;\n  --puck-color-green-10: #ddf3e0;\n  --puck-color-green-11: #eff8f0;\n  --puck-color-green-12: #f3fcf4;\n  --puck-color-yellow-01: #211000;\n  --puck-color-yellow-02: #362700;\n  --puck-color-yellow-03: #4c4000;\n  --puck-color-yellow-04: #645a00;\n  --puck-color-yellow-05: #877614;\n  --puck-color-yellow-06: #ab9429;\n  --puck-color-yellow-07: #bfac4e;\n  --puck-color-yellow-08: #d4c474;\n  --puck-color-yellow-09: #e6deb1;\n  --puck-color-yellow-10: #f3efd9;\n  --puck-color-yellow-11: #f9f7ed;\n  --puck-color-yellow-12: #fcfaf0;\n  --puck-color-red-01: #4c0000;\n  --puck-color-red-02: #6a0a10;\n  --puck-color-red-03: #8a1422;\n  --puck-color-red-04: #ac1f35;\n  --puck-color-red-05: #bf5366;\n  --puck-color-red-06: #ce7e8e;\n  --puck-color-red-07: #d99ca8;\n  --puck-color-red-08: #e4b9c2;\n  --puck-color-red-09: #efd7db;\n  --puck-color-red-10: #f6eaec;\n  --puck-color-red-11: #faf4f5;\n  --puck-color-red-12: #fff9fa;\n  --puck-color-grey-01: #181818;\n  --puck-color-grey-02: #292929;\n  --puck-color-grey-03: #404040;\n  --puck-color-grey-04: #5a5a5a;\n  --puck-color-grey-05: #767676;\n  --puck-color-grey-06: #949494;\n  --puck-color-grey-07: #ababab;\n  --puck-color-grey-08: #c3c3c3;\n  --puck-color-grey-09: #dcdcdc;\n  --puck-color-grey-10: #efefef;\n  --puck-color-grey-11: #f5f5f5;\n  --puck-color-grey-12: #fafafa;\n  --puck-color-black: #000000;\n  --puck-color-white: #ffffff;\n}\n\n/* styles/typography.css */\n:root {\n  --puck-font-size-scale-base-unitless: 12;\n  --puck-font-size-xxxs-unitless: 12;\n  --puck-font-size-xxs-unitless: 14;\n  --puck-font-size-xs-unitless: 16;\n  --puck-font-size-s-unitless: 18;\n  --puck-font-size-m-unitless: 21;\n  --puck-font-size-l-unitless: 24;\n  --puck-font-size-xl-unitless: 28;\n  --puck-font-size-xxl-unitless: 36;\n  --puck-font-size-xxxl-unitless: 48;\n  --puck-font-size-xxxxl-unitless: 56;\n  --puck-font-size-xxxs: calc(1rem * var(--puck-font-size-xxxs-unitless) / 16);\n  --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);\n  --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);\n  --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);\n  --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);\n  --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);\n  --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);\n  --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);\n  --puck-font-size-xxxl: calc(1rem * var(--puck-font-size-xxxl-unitless) / 16);\n  --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );\n  --puck-font-size-base: var(--puck-font-size-xs);\n  --line-height-reset: 1;\n  --line-height-xs: calc( var(--space-m-unitless) / var(--puck-font-size-m-unitless) );\n  --line-height-s: calc( var(--space-m-unitless) / var(--puck-font-size-s-unitless) );\n  --line-height-m: calc( var(--space-m-unitless) / var(--puck-font-size-xs-unitless) );\n  --line-height-l: calc( var(--space-m-unitless) / var(--puck-font-size-xxs-unitless) );\n  --line-height-xl: calc( var(--space-m-unitless) / var(--puck-font-size-scale-base-unitless) );\n  --line-height-base: var(--line-height-m);\n  --fallback-font-stack:\n    -apple-system,\n    BlinkMacSystemFont,\n    Segoe UI,\n    Helvetica Neue,\n    sans-serif,\n    Apple Color Emoji,\n    Segoe UI Emoji,\n    Segoe UI Symbol;\n  --puck-font-family: Inter, var(--fallback-font-stack);\n  --puck-font-family-monospaced:\n    ui-monospace,\n    "Cascadia Code",\n    "Source Code Pro",\n    Menlo,\n    Consolas,\n    "DejaVu Sans Mono",\n    monospace;\n}\n@supports (font-variation-settings: normal) {\n  :root {\n    --puck-font-family: InterVariable, var(--fallback-font-stack);\n  }\n}\n\n/* bundle/core.css */\n#frame-root {\n  height: 1px;\n  min-height: 100vh;\n}\n[data-puck-entry] {\n  position: relative;\n  z-index: 0;\n}\n\n/* css-module:/Users/feb/HTDocs/custom-puck/components/ActionBar/styles.module.css/#css-module-data */\n._ActionBar_1nmyk_1 {\n  align-items: center;\n  cursor: default;\n  display: flex;\n  width: auto;\n  padding: 4px;\n  padding-inline-start: 0;\n  padding-inline-end: 0;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-radius: 8px;\n  background: var(--puck-color-grey-01);\n  color: var(--puck-color-white);\n  font-family: var(--puck-font-family);\n  min-height: 26px;\n}\n._ActionBar-label_1nmyk_18 {\n  color: var(--puck-color-grey-08);\n  font-size: var(--puck-font-size-xxxs);\n  font-weight: 500;\n  padding-inline-start: 8px;\n  padding-inline-end: 8px;\n  margin-inline-start: 4px;\n  margin-inline-end: 4px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._ActionBarAction_1nmyk_30 + ._ActionBar-label_1nmyk_18 {\n  padding-inline-start: 0;\n}\n._ActionBar-label_1nmyk_18 + ._ActionBarAction_1nmyk_30 {\n  margin-inline-start: -4px;\n}\n._ActionBar-group_1nmyk_38 {\n  align-items: center;\n  border-inline-start: 0.5px solid var(--puck-color-grey-05);\n  display: flex;\n  height: 100%;\n  padding-inline-start: 4px;\n  padding-inline-end: 4px;\n}\n._ActionBar-group_1nmyk_38:first-of-type {\n  border-inline-start: 0;\n}\n._ActionBar-group_1nmyk_38:empty {\n  display: none;\n}\n._ActionBarAction_1nmyk_30 {\n  background: transparent;\n  border: none;\n  color: var(--puck-color-grey-08);\n  cursor: pointer;\n  padding: 6px;\n  margin-inline-start: 4px;\n  margin-inline-end: 4px;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 50ms ease-in;\n}\n._ActionBarAction--disabled_1nmyk_71 {\n  cursor: auto;\n  color: var(--puck-color-grey-06);\n}\n._ActionBarAction_1nmyk_30 svg {\n  max-width: none !important;\n}\n._ActionBarAction_1nmyk_30:focus-visible {\n  outline: 2px solid var(--puck-color-azure-05);\n  outline-offset: -2px;\n}\n@media (hover: hover) and (pointer: fine) {\n  ._ActionBarAction_1nmyk_30:hover:not(._ActionBarAction--disabled_1nmyk_71) {\n    color: var(--puck-color-azure-06);\n    transition: none;\n  }\n}\n._ActionBarAction_1nmyk_30:active:not(._ActionBarAction--disabled_1nmyk_71),\n._ActionBarAction--active_1nmyk_93 {\n  color: var(--puck-color-azure-07);\n  transition: none;\n}\n._ActionBar-group_1nmyk_38 * {\n  margin: 0;\n}\n._ActionBar-separator_1nmyk_102 {\n  background: var(--puck-color-grey-05);\n  margin-inline: 4px;\n  width: 0.5px;\n  height: 100%;\n}\n\n/* css-module:/Users/feb/HTDocs/custom-puck/components/DraggableComponent/styles.module.css/#css-module-data */\n._DraggableComponent_1vaqy_1 {\n  position: absolute;\n  pointer-events: none;\n  --overlay-background: color-mix( in srgb, var(--puck-color-azure-08) 30%, transparent );\n}\n._DraggableComponent-overlayWrapper_1vaqy_12 {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n  z-index: 1;\n}\n._DraggableComponent-overlay_1vaqy_12 {\n  cursor: pointer;\n  height: 100%;\n  outline: 2px var(--puck-color-azure-09) solid;\n  outline-offset: -2px;\n  width: 100%;\n}\n._DraggableComponent_1vaqy_1:focus-visible > ._DraggableComponent-overlayWrapper_1vaqy_12 {\n  outline: 1px solid var(--puck-color-azure-05);\n}\n._DraggableComponent-loadingOverlay_1vaqy_34 {\n  background: var(--puck-color-white);\n  color: var(--puck-color-grey-03);\n  border-radius: 4px;\n  display: flex;\n  padding: 8px;\n  top: 8px;\n  right: 8px;\n  position: absolute;\n  z-index: 1;\n  pointer-events: all;\n  box-sizing: border-box;\n  opacity: 0.8;\n  z-index: 1;\n}\n._DraggableComponent--hover_1vaqy_50 > ._DraggableComponent-overlayWrapper_1vaqy_12 > ._DraggableComponent-overlay_1vaqy_12 {\n  background: var(--overlay-background);\n  outline: 2px var(--puck-color-azure-09) solid;\n}\n._DraggableComponent--isSelected_1vaqy_57 > ._DraggableComponent-overlayWrapper_1vaqy_12 > ._DraggableComponent-overlay_1vaqy_12 {\n  outline-color: var(--puck-color-azure-07);\n}\n._DraggableComponent_1vaqy_1:has(._DraggableComponent--hover_1vaqy_50 > ._DraggableComponent-overlayWrapper_1vaqy_12) > ._DraggableComponent-overlayWrapper_1vaqy_12 {\n  display: none;\n}\n._DraggableComponent-actionsOverlay_1vaqy_71 {\n  position: sticky;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n._DraggableComponent--isSelected_1vaqy_57 ._DraggableComponent-actionsOverlay_1vaqy_71 {\n  opacity: 1;\n  pointer-events: auto;\n}\n._DraggableComponent-actions_1vaqy_71 {\n  position: absolute;\n  width: auto;\n  cursor: grab;\n  display: flex;\n  box-sizing: border-box;\n  transform-origin: right top;\n  min-height: 36px;\n}\n\n/* css-module:/Users/feb/HTDocs/custom-puck/components/Drawer/styles.module.css/#css-module-data */\n._Drawer_pl7z0_1 {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--puck-font-family);\n  gap: 12px;\n}\n._Drawer-draggable_pl7z0_8 {\n  position: relative;\n}\n._Drawer-draggableBg_pl7z0_12 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n._DrawerItem-draggable_pl7z0_22 {\n  background: var(--puck-color-white);\n  cursor: grab;\n  padding: 12px;\n  display: flex;\n  border: 1px var(--puck-color-grey-09) solid;\n  border-radius: 4px;\n  font-size: var(--puck-font-size-xxs);\n  justify-content: space-between;\n  align-items: center;\n  transition: background-color 50ms ease-in, color 50ms ease-in;\n}\n._DrawerItem--disabled_pl7z0_35 ._DrawerItem-draggable_pl7z0_22 {\n  background: var(--puck-color-grey-11);\n  color: var(--puck-color-grey-05);\n  cursor: not-allowed;\n}\n._DrawerItem_pl7z0_22:focus-visible {\n  outline: 0;\n}\n._Drawer_pl7z0_1:not(._Drawer--isDraggingFrom_pl7z0_45) ._DrawerItem_pl7z0_22:focus-visible ._DrawerItem-draggable_pl7z0_22 {\n  border-radius: 4px;\n  outline: 2px solid var(--puck-color-azure-05);\n  outline-offset: 2px;\n}\n@media (hover: hover) and (pointer: fine) {\n  ._Drawer_pl7z0_1:not(._Drawer--isDraggingFrom_pl7z0_45) ._DrawerItem_pl7z0_22:not(._DrawerItem--disabled_pl7z0_35) ._DrawerItem-draggable_pl7z0_22:hover {\n    background-color: var(--puck-color-azure-12);\n    color: var(--puck-color-azure-04);\n    transition: none;\n  }\n}\n._DrawerItem-name_pl7z0_63 {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* css-module:/Users/feb/HTDocs/custom-puck/components/DropZone/styles.module.css/#css-module-data */\n._DropZone_1i2sv_1 {\n  --resize-animation-ms: 150ms;\n  position: relative;\n  height: 100%;\n  min-height: var(--min-empty-height);\n  outline-offset: -2px;\n  width: 100%;\n}\n._DropZone--hasChildren_1i2sv_11 {\n  min-height: 0;\n}\n._DropZone_1i2sv_1:empty {\n  min-height: var(--min-empty-height);\n}\n[data-puck-entry]:not([data-puck-dragging]) ._DropZone_1i2sv_1 {\n  transition: min-height var(--resize-animation-ms) ease-in;\n}\n._DropZone--isAreaSelected_1i2sv_24,\n._DropZone--hoveringOverArea_1i2sv_25:not(._DropZone--isRootZone_1i2sv_25) {\n  background: color-mix(in srgb, var(--puck-color-azure-09) 30%, transparent);\n  outline: 2px dashed var(--puck-color-azure-08);\n}\n._DropZone_1i2sv_1:empty {\n  background: color-mix(in srgb, var(--puck-color-azure-09) 30%, transparent);\n  outline: 2px dashed var(--puck-color-azure-08);\n}\n._DropZone--isDestination_1i2sv_35 {\n  outline: 2px dashed var(--puck-color-azure-04) !important;\n}\n._DropZone--isDestination_1i2sv_35:not(._DropZone--isRootZone_1i2sv_25) {\n  background: color-mix(in srgb, var(--puck-color-azure-09) 30%, transparent) !important;\n}\n._DropZone-item_1i2sv_47 {\n  position: relative;\n}\n._DropZone-hitbox_1i2sv_51 {\n  position: absolute;\n  bottom: -12px;\n  height: 24px;\n  width: 100%;\n  z-index: 1;\n}\n[data-puck-dragging] ._DropZone--isEnabled_1i2sv_59 {\n  outline: 2px dashed var(--puck-color-azure-06);\n}\n._DropZone_1i2sv_1 > *:not([data-puck-component]) {\n  opacity: 0;\n}\nbody:has(._DropZone--isAnimating_1i2sv_68:empty) [data-puck-overlay] {\n  opacity: 0 !important;\n}\n\n/* css-module:/Users/feb/HTDocs/custom-puck/components/InlineTextField/styles.module.css/#css-module-data */\n._InlineTextField_104qp_1 {\n  cursor: text;\n  display: inline-block;\n  white-space: pre-wrap;\n  text-decoration: inherit;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1 {\n  cursor: none;\n  caret-color: transparent;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1::selection {\n  display: none;\n}\n\n/* css-module:/Users/feb/HTDocs/custom-puck/components/Loader/styles.module.css/#css-module-data */\n@keyframes _loader-animation_nacdm_1 {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(0.8);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n._Loader_nacdm_13 {\n  background: transparent;\n  border-radius: 100%;\n  border: 2px solid currentColor;\n  border-bottom-color: transparent;\n  display: inline-block;\n  animation: _loader-animation_nacdm_1 1s 0s infinite linear;\n  animation-fill-mode: both;\n}\n\n/* css-module:/Users/feb/HTDocs/custom-puck/components/RichTextMenu/styles.module.css/#css-module-data */\n._RichTextMenu_k97eh_1 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n._RichTextMenu--form_k97eh_7 {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  padding: 6px 6px;\n  background-color: var(--puck-color-grey-12);\n  position: relative;\n  scrollbar-width: none;\n  overflow-x: auto;\n}\n._RichTextMenu-group_k97eh_17 {\n  display: flex;\n  align-items: space-between;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding-inline: 6px;\n  gap: 2px;\n  position: relative;\n}\n._RichTextMenu-group_k97eh_17:first-of-type {\n  padding-left: 0;\n}\n._RichTextMenu-group_k97eh_17:last-of-type {\n  padding-right: 0;\n}\n._RichTextMenu--inline_k97eh_35 ._RichTextMenu-group_k97eh_17 {\n  color: var(--puck-color-grey-08);\n  gap: 0px;\n  flex-wrap: nowrap;\n}\n._RichTextMenu-group_k97eh_17 + ._RichTextMenu-group_k97eh_17 {\n  border-left: 1px solid var(--puck-color-grey-10);\n}\n._RichTextMenu--inline_k97eh_35 ._RichTextMenu-group_k97eh_17 + ._RichTextMenu-group_k97eh_17 {\n  border-left: 0.5px solid var(--puck-color-grey-05);\n}\n\n/* css-module:/Users/feb/HTDocs/custom-puck/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */\n._Control_1aveu_1 .lucide {\n  height: 18px;\n  width: 18px;\n}\n._Control--inline_1aveu_6 .lucide {\n  height: 16px;\n  width: 16px;\n}\n\n/* components/DraggableComponent/styles.css */\n[data-puck-component] * {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-component] {\n  cursor: grab;\n  pointer-events: auto !important;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-dropzone] {\n  pointer-events: auto !important;\n}\n[data-puck-disabled] {\n  cursor: pointer;\n}\n[data-dnd-placeholder] {\n  background: var(--puck-color-azure-06, #6499cf) !important;\n  border: none !important;\n  color: #00000000 !important;\n  opacity: 0.3 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-dnd-placeholder] *,\n[data-dnd-placeholder]::after,\n[data-dnd-placeholder]::before {\n  opacity: 0 !important;\n}\n[data-dnd-dragging][data-puck-component] {\n  pointer-events: none !important;\n  outline: 2px var(--puck-color-azure-09, #cfdff0) solid !important;\n  outline-offset: -2px !important;\n}\n[data-dnd-dragging][data-puck-component] > :first-child {\n  margin-top: 0 !important;\n}\n[data-dnd-dragging][data-puck-component] > :last-child {\n  margin-bottom: 0 !important;\n}\n\n/* lib/overlay-portal/styles.css */\n[data-puck-overlay-portal],\n[data-puck-overlay-portal] * {\n  pointer-events: auto !important;\n}\n[data-puck-overlay-portal]:hover {\n  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;\n  outline-offset: 2px;\n}\n[data-puck-overlay-portal]:focus-within {\n  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;\n  outline-offset: 2px;\n}';

// lib/use-inject-css.ts
var PUCK_STYLE_SOURCE_ATTRIBUTE = "data-puck-style-source";
var PUCK_STYLE_SOURCE_VALUE = "puck";
var PUCK_STYLE_ID_ATTRIBUTE = "data-puck-style-id";
var PUCK_STYLE_IDS = {
  uiDefault: "ui-default",
  iframeInteractions: "iframe-styles"
};
var styleRegistry = /* @__PURE__ */ new WeakMap();
var getTargetDocument = (target) => {
  if (target) {
    return target;
  }
  if (typeof document === "undefined") {
    return void 0;
  }
  return document;
};
var getStyleMap = (target) => {
  const existing = styleRegistry.get(target);
  if (existing) {
    return existing;
  }
  const created = /* @__PURE__ */ new Map();
  styleRegistry.set(target, created);
  return created;
};
var attachStyleElement = (target, el, prepend = false) => {
  const head = target.head;
  if (!head) {
    return;
  }
  if (el.parentElement !== head) {
    if (prepend) {
      head.prepend(el);
    } else {
      head.append(el);
    }
    return;
  }
  if (prepend && head.firstChild !== el) {
    head.prepend(el);
  }
  if (!prepend && head.lastChild !== el) {
    head.append(el);
  }
};
var createStyleElement = (target, id, cssText, prepend = false) => {
  const el = target.createElement("style");
  el.setAttribute(PUCK_STYLE_SOURCE_ATTRIBUTE, PUCK_STYLE_SOURCE_VALUE);
  el.setAttribute(PUCK_STYLE_ID_ATTRIBUTE, id);
  el.textContent = cssText;
  attachStyleElement(target, el, prepend);
  return el;
};
var isPuckStyleElement = (el) => (el == null ? void 0 : el.getAttribute(PUCK_STYLE_SOURCE_ATTRIBUTE)) === PUCK_STYLE_SOURCE_VALUE;
var useInjectStyleSheet = (options) => {
  const targetDocument = getTargetDocument(options == null ? void 0 : options.document);
  useInsertionEffect(() => {
    if (!options || !targetDocument) {
      return;
    }
    const registry = getStyleMap(targetDocument);
    const existing = registry.get(options.id);
    if (existing) {
      existing.count = existing.count + 1;
      if (existing.el.textContent !== options.cssText) {
        existing.el.textContent = options.cssText;
      }
      attachStyleElement(targetDocument, existing.el, options.prepend);
    } else {
      const el = createStyleElement(
        targetDocument,
        options.id,
        options.cssText,
        options.prepend
      );
      registry.set(options.id, {
        count: 1,
        el
      });
    }
    return () => {
      const current = registry.get(options.id);
      if (!current) {
        return;
      }
      current.count = current.count - 1;
      if (current.count <= 0) {
        current.el.remove();
        registry.delete(options.id);
      }
    };
  }, [
    options == null ? void 0 : options.cssText,
    options == null ? void 0 : options.id,
    options == null ? void 0 : options.prepend,
    options == null ? void 0 : options.document,
    targetDocument
  ]);
};
var staticCssDetected = null;
var hasStaticPuckCss = () => {
  if (staticCssDetected !== null) return staticCssDetected;
  if (typeof document === "undefined") return false;
  staticCssDetected = getComputedStyle(document.documentElement).getPropertyValue("--puck-color-azure-05").trim() !== "";
  return staticCssDetected;
};
var useInjectUiCss = () => {
  const skip = hasStaticPuckCss();
  useInjectStyleSheet(
    skip ? null : {
      cssText: defaultUiStyles,
      id: PUCK_STYLE_IDS.uiDefault,
      prepend: true
    }
  );
  useEffect21(() => {
    if (skip && process.env.NODE_ENV !== "production") {
      console.info(
        "Puck: Skipped runtime style injection as Puck styles are already loaded. As of Puck 0.22, you can safely remove CSS imports, or ignore this message."
      );
    }
  }, []);
};
var useInjectIframeCss = (targetDocument) => {
  useInjectStyleSheet(
    targetDocument ? {
      cssText: iframeInteractionStyles,
      document: targetDocument,
      id: PUCK_STYLE_IDS.iframeInteractions
    } : null
  );
};

// components/AutoFrame/index.tsx
import { Fragment as Fragment12, jsx as jsx43 } from "react/jsx-runtime";
var styleSelector = 'style, link[rel="stylesheet"]';
var mirroredStyleAttribute = "data-puck-style-mirror";
var shouldMirrorStyleElement = (style) => {
  if (!style.matches(styleSelector) || isPuckStyleElement(style)) {
    return false;
  }
  if (style.tagName === "STYLE") {
    return !!style.innerHTML.trim();
  }
  return true;
};
var collectStyles = (doc) => {
  const collected = [];
  doc.querySelectorAll(styleSelector).forEach((style) => {
    if (shouldMirrorStyleElement(style)) {
      collected.push(style);
    }
  });
  return collected;
};
var getStyleSheet = (el) => {
  return Array.from(document.styleSheets).find((ss) => {
    const ownerNode = ss.ownerNode;
    return ownerNode.href === el.href;
  });
};
var getStyles = (styleSheet) => {
  if (styleSheet) {
    try {
      return Array.from(styleSheet.cssRules).map((rule) => rule.cssText).join("");
    } catch (e) {
      console.warn(
        "Access to stylesheet %s is denied. Ignoring\u2026",
        styleSheet.href
      );
    }
  }
  return "";
};
var syncAttributes = (sourceElement, targetElement) => {
  const attributes = sourceElement.attributes;
  if ((attributes == null ? void 0 : attributes.length) > 0) {
    Array.from(attributes).forEach((attribute) => {
      targetElement.setAttribute(attribute.name, attribute.value);
    });
  }
};
var defer = (fn) => setTimeout(fn, 0);
var CopyHostStyles = ({
  children,
  debug = false,
  onStylesLoaded = () => null,
  syncHostStyles = true
}) => {
  const { document: doc, window: win } = useFrame();
  useInjectIframeCss(doc);
  useEffect22(() => {
    if (!win || !doc) {
      return () => {
      };
    }
    let elements = [];
    const hashes = {};
    const removeAllMirrors = () => {
      elements.forEach(({ mirror }) => {
        mirror.remove();
      });
      elements = [];
      Array.from(
        doc.head.querySelectorAll(`[${mirroredStyleAttribute}="true"]`)
      ).forEach((mirror) => {
        mirror.remove();
      });
      Object.keys(hashes).forEach((key) => {
        delete hashes[key];
      });
    };
    const lookupEl = (el) => elements.findIndex((elementMap) => elementMap.original === el);
    const mirrorEl = (el, inlineStyles = false) => __async(null, null, function* () {
      let mirror;
      if (el.nodeName === "LINK" && inlineStyles) {
        mirror = document.createElement("style");
        mirror.type = "text/css";
        let styleSheet = getStyleSheet(el);
        if (!styleSheet) {
          yield new Promise((resolve) => {
            const fn = () => {
              resolve();
              el.removeEventListener("load", fn);
            };
            el.addEventListener("load", fn);
          });
          styleSheet = getStyleSheet(el);
        }
        const styles = getStyles(styleSheet);
        if (!styles) {
          if (debug) {
            console.warn(
              `Tried to load styles for link element, but couldn't find them. Skipping...`
            );
          }
          return;
        }
        mirror.innerHTML = styles;
        mirror.setAttribute("data-href", el.getAttribute("href"));
      } else {
        mirror = el.cloneNode(true);
      }
      mirror.setAttribute(mirroredStyleAttribute, "true");
      return mirror;
    });
    const addEl = (el) => __async(null, null, function* () {
      const index = lookupEl(el);
      if (index > -1) {
        if (debug)
          console.log(
            `Tried to add an element that was already mirrored. Updating instead...`
          );
        elements[index].mirror.innerText = el.innerText;
        return;
      }
      const mirror = yield mirrorEl(el);
      if (!mirror) {
        return;
      }
      const elHash = hash(mirror.outerHTML);
      if (hashes[elHash]) {
        if (debug)
          console.log(
            `iframe already contains element that is being mirrored. Skipping...`
          );
        return;
      }
      hashes[elHash] = true;
      doc.head.append(mirror);
      elements.push({ original: el, mirror });
      if (debug) console.log(`Added style node ${el.outerHTML}`);
    });
    const removeEl = (el) => {
      var _a, _b;
      const index = lookupEl(el);
      if (index === -1) {
        if (debug)
          console.log(
            `Tried to remove an element that did not exist. Skipping...`
          );
        return;
      }
      const elHash = hash(el.outerHTML);
      (_b = (_a = elements[index]) == null ? void 0 : _a.mirror) == null ? void 0 : _b.remove();
      delete hashes[elHash];
      if (debug) console.log(`Removed style node ${el.outerHTML}`);
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && shouldMirrorStyleElement(el)) {
                defer(() => addEl(el));
              }
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector) && !isPuckStyleElement(el)) {
                defer(() => removeEl(el));
              }
            }
          });
        }
      });
    });
    if (!syncHostStyles) {
      onStylesLoaded();
      return () => {
        observer.disconnect();
        removeAllMirrors();
      };
    }
    const parentDocument = win.parent.document;
    const collectedStyles = collectStyles(parentDocument);
    const hrefs = [];
    let stylesLoaded = 0;
    const parentHtml = parentDocument.getElementsByTagName("html")[0];
    syncAttributes(parentHtml, doc.documentElement);
    const parentBody = parentDocument.getElementsByTagName("body")[0];
    syncAttributes(parentBody, doc.body);
    Promise.all(
      collectedStyles.map((styleNode, i) => __async(null, null, function* () {
        if (styleNode.nodeName === "LINK") {
          const linkHref = styleNode.href;
          if (hrefs.indexOf(linkHref) > -1) {
            return;
          }
          hrefs.push(linkHref);
        }
        const mirror = yield mirrorEl(styleNode);
        if (!mirror) return;
        elements.push({ original: styleNode, mirror });
        return mirror;
      }))
    ).then((mirrorStyles) => {
      const filtered = mirrorStyles.filter(
        (el) => typeof el !== "undefined"
      );
      filtered.forEach((mirror) => {
        mirror.onload = () => {
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= filtered.length) {
            onStylesLoaded();
          }
        };
        mirror.onerror = () => {
          console.warn(`AutoFrame couldn't load a stylesheet`);
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= filtered.length) {
            onStylesLoaded();
          }
        };
      });
      doc.head.querySelectorAll(`[${mirroredStyleAttribute}="true"]`).forEach((el) => {
        el.remove();
      });
      doc.head.append(...filtered);
      filtered.forEach((mirror) => {
        if (mirror.nodeName === "STYLE") {
          stylesLoaded = stylesLoaded + 1;
        }
      });
      if (stylesLoaded >= filtered.length) {
        onStylesLoaded();
      }
      observer.observe(parentDocument.head, { childList: true, subtree: true });
      filtered.forEach((el) => {
        const elHash = hash(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
      removeAllMirrors();
    };
  }, [syncHostStyles]);
  return /* @__PURE__ */ jsx43(Fragment12, { children });
};
var autoFrameContext = createContext6({});
var useFrame = () => useContext13(autoFrameContext);
function AutoFrame(_a) {
  var _b = _a, {
    children,
    className,
    debug,
    id,
    onReady = () => {
    },
    onNotReady = () => {
    },
    frameRef,
    syncHostStyles = true
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "debug",
    "id",
    "onReady",
    "onNotReady",
    "frameRef",
    "syncHostStyles"
  ]);
  const [loaded, setLoaded] = useState19(false);
  const [ctx, setCtx] = useState19({});
  const [mountTarget, setMountTarget] = useState19();
  const [stylesLoaded, setStylesLoaded] = useState19(false);
  useEffect22(() => {
    if (loaded) {
      setStylesLoaded(!syncHostStyles);
    }
  }, [loaded, syncHostStyles]);
  useEffect22(() => {
    var _a2;
    if (frameRef.current) {
      const doc = frameRef.current.contentDocument;
      const win = frameRef.current.contentWindow;
      setCtx({
        document: doc || void 0,
        window: win || void 0
      });
      setMountTarget(
        (_a2 = frameRef.current.contentDocument) == null ? void 0 : _a2.getElementById("frame-root")
      );
      if (doc && win && stylesLoaded) {
        onReady();
      } else {
        onNotReady();
      }
    }
  }, [frameRef, loaded, stylesLoaded]);
  return /* @__PURE__ */ jsx43(
    "iframe",
    __spreadProps(__spreadValues({}, props), {
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',
      ref: frameRef,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ jsx43(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ jsx43(
        CopyHostStyles,
        {
          debug,
          onStylesLoaded: () => setStylesLoaded(true),
          syncHostStyles,
          children: createPortal3(children, mountTarget)
        }
      ) })
    })
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Preview/styles.module.css#css-module
var styles_module_default20 = { "PuckPreview": "_PuckPreview_z2rgu_1", "PuckPreview-frame": "_PuckPreview-frame_z2rgu_6" };

// components/Puck/components/Preview/index.tsx
import { Fragment as Fragment13, jsx as jsx44 } from "react/jsx-runtime";
var getClassName26 = get_class_name_factory_default("PuckPreview", styles_module_default20);
var useBubbleIframeEvents = (ref) => {
  const status = useAppStore((s) => s.status);
  useEffect23(() => {
    if (ref.current && status === "READY") {
      const iframe = ref.current;
      const handlePointerMove = (event) => {
        const evt = new BubbledPointerEvent("pointermove", __spreadProps(__spreadValues({}, event), {
          bubbles: true,
          cancelable: false,
          clientX: event.clientX,
          clientY: event.clientY,
          pointerId: event.pointerId,
          pointerType: event.pointerType,
          isPrimary: event.isPrimary,
          originalTarget: event.target
        }));
        iframe.dispatchEvent(evt);
      };
      const register = () => {
        var _a;
        unregister();
        (_a = iframe.contentDocument) == null ? void 0 : _a.addEventListener(
          "pointermove",
          handlePointerMove,
          {
            capture: true
          }
        );
      };
      const unregister = () => {
        var _a;
        (_a = iframe.contentDocument) == null ? void 0 : _a.removeEventListener(
          "pointermove",
          handlePointerMove
        );
      };
      register();
      return () => {
        unregister();
      };
    }
  }, [status]);
};
var Preview2 = ({ id = "puck-preview" }) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const root = useAppStore((s) => s.state.data.root);
  const config = useAppStore((s) => s.config);
  const setStatus = useAppStore((s) => s.setStatus);
  const iframe = useAppStore((s) => s.iframe);
  const overrides = useAppStore((s) => s.overrides);
  const metadata = useAppStore((s) => s.metadata);
  const renderData = useAppStore(
    (s) => s.state.ui.previewMode === "edit" ? null : s.state.data
  );
  const Page = useCallback16(
    (pageProps) => {
      var _a, _b, _c, _d;
      const propsWithSlots = useSlots(
        config,
        { type: "root", props: pageProps },
        DropZoneEditPure
      );
      const richtextProps = useRichtextProps(
        (_b = (_a = config.root) == null ? void 0 : _a.fields) != null ? _b : {},
        pageProps
      );
      return ((_c = config.root) == null ? void 0 : _c.render) ? (_d = config.root) == null ? void 0 : _d.render(__spreadValues(__spreadValues({
        id: "puck-root"
      }, propsWithSlots), richtextProps)) : /* @__PURE__ */ jsx44(Fragment13, { children: propsWithSlots.children });
    },
    [config]
  );
  const Frame = useMemo18(() => overrides.iframe, [overrides]);
  const rootProps = root.props || root;
  const ref = useRef11(null);
  useBubbleIframeEvents(ref);
  const inner = !renderData ? /* @__PURE__ */ jsx44(
    Page,
    __spreadProps(__spreadValues({}, rootProps), {
      puck: {
        renderDropZone: DropZonePure,
        isEditing: true,
        dragRef: null,
        metadata
      },
      editMode: true,
      children: /* @__PURE__ */ jsx44(DropZonePure, { zone: rootDroppableId })
    })
  ) : /* @__PURE__ */ jsx44(Render, { data: renderData, config, metadata });
  useEffect23(() => {
    if (!iframe.enabled) {
      setStatus("READY");
    }
  }, [iframe.enabled]);
  return /* @__PURE__ */ jsx44(
    "div",
    {
      className: getClassName26(),
      id,
      "data-puck-preview": true,
      onClick: (e) => {
        const el = e.target;
        if (!el.hasAttribute("data-puck-component") && !el.hasAttribute("data-puck-dropzone")) {
          dispatch({ type: "setUi", ui: { itemSelector: null } });
        }
      },
      children: iframe.enabled ? /* @__PURE__ */ jsx44(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName26("frame"),
          "data-rfd-iframe": true,
          syncHostStyles: iframe.syncHostStyles,
          onReady: () => {
            setStatus("READY");
          },
          onNotReady: () => {
            setStatus("MOUNTED");
          },
          frameRef: ref,
          children: /* @__PURE__ */ jsx44(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            if (Frame) {
              return /* @__PURE__ */ jsx44(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ jsx44(
        "div",
        {
          id: "preview-frame",
          className: getClassName26("frame"),
          ref,
          "data-puck-entry": true,
          children: inner
        }
      )
    }
  );
};

// lib/use-loaded-overrides.ts
import { useMemo as useMemo19 } from "react";

// lib/load-overrides.ts
var loadOverrides = ({
  overrides,
  plugins
}) => {
  const collected = __spreadValues({}, overrides);
  plugins == null ? void 0 : plugins.forEach((plugin) => {
    if (!plugin.overrides) return;
    Object.keys(plugin.overrides).forEach((_overridesType) => {
      var _a;
      const overridesType = _overridesType;
      if (!((_a = plugin.overrides) == null ? void 0 : _a[overridesType])) return;
      if (overridesType === "fieldTypes") {
        const fieldTypes = plugin.overrides.fieldTypes;
        Object.keys(fieldTypes).forEach((fieldType) => {
          collected.fieldTypes = collected.fieldTypes || {};
          const childNode2 = collected.fieldTypes[fieldType];
          const Comp2 = (props) => fieldTypes[fieldType](__spreadProps(__spreadValues({}, props), {
            children: childNode2 ? childNode2(props) : props.children
          }));
          collected.fieldTypes[fieldType] = Comp2;
        });
        return;
      }
      const childNode = collected[overridesType];
      const Comp = (props) => plugin.overrides[overridesType](__spreadProps(__spreadValues({}, props), {
        children: childNode ? childNode(props) : props.children
      }));
      collected[overridesType] = Comp;
    });
  });
  return collected;
};

// lib/use-loaded-overrides.ts
var useLoadedOverrides = ({
  overrides,
  plugins
}) => {
  return useMemo19(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};

// components/Puck/index.tsx
import { deepEqual as deepEqual2 } from "fast-equals";

// components/Puck/components/Layout/index.tsx
import {
  useEffect as useEffect28,
  useLayoutEffect as useLayoutEffect2,
  useMemo as useMemo24,
  useState as useState24
} from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Layout/styles.module.css#css-module
var styles_module_default21 = { "Puck": "_Puck_cgc86_19", "Puck-portal": "_Puck-portal_cgc86_32", "PuckLayout": "_PuckLayout_cgc86_37", "PuckLayout-inner": "_PuckLayout-inner_cgc86_41", "Puck--hidePlugins": "_Puck--hidePlugins_cgc86_73", "PuckLayout--mounted": "_PuckLayout--mounted_cgc86_78", "PuckLayout--mobilePanelHeightToggle": "_PuckLayout--mobilePanelHeightToggle_cgc86_82", "PuckLayout--leftSideBarVisible": "_PuckLayout--leftSideBarVisible_cgc86_82", "PuckLayout--isExpanded": "_PuckLayout--isExpanded_cgc86_88", "PuckLayout--mobilePanelHeightMinContent": "_PuckLayout--mobilePanelHeightMinContent_cgc86_106", "PuckLayout--rightSideBarVisible": "_PuckLayout--rightSideBarVisible_cgc86_133", "PuckLayout-mounted": "_PuckLayout-mounted_cgc86_152", "PuckLayout-nav": "_PuckLayout-nav_cgc86_193", "PuckLayout-header": "_PuckLayout-header_cgc86_209", "PuckPluginTab": "_PuckPluginTab_cgc86_223", "PuckPluginTab--visible": "_PuckPluginTab--visible_cgc86_229", "PuckPluginTab-body": "_PuckPluginTab-body_cgc86_234" };

// components/DefaultOverride/index.tsx
import { Fragment as Fragment14, jsx as jsx45 } from "react/jsx-runtime";
var DefaultOverride = ({ children }) => /* @__PURE__ */ jsx45(Fragment14, { children });

// lib/use-preview-mode-hotkeys.ts
import { useCallback as useCallback17 } from "react";
var usePreviewModeHotkeys = () => {
  const appStore = useAppStoreApi();
  const toggleInteractive = useCallback17(() => {
    const dispatch = appStore.getState().dispatch;
    dispatch({
      type: "setUi",
      ui: (ui) => ({
        previewMode: ui.previewMode === "edit" ? "interactive" : "edit"
      })
    });
  }, [appStore]);
  useHotkey({ meta: true, i: true }, toggleInteractive);
  useHotkey({ ctrl: true, i: true }, toggleInteractive);
};

// components/Puck/components/Header/index.tsx
import { memo as memo9, useCallback as useCallback18, useMemo as useMemo20, useState as useState20 } from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/MenuBar/styles.module.css#css-module
var styles_module_default22 = { "MenuBar": "_MenuBar_8pf8c_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_8pf8c_14", "MenuBar-inner": "_MenuBar-inner_8pf8c_29", "MenuBar-history": "_MenuBar-history_8pf8c_45" };

// components/MenuBar/index.tsx
import { Fragment as Fragment15, jsx as jsx46, jsxs as jsxs16 } from "react/jsx-runtime";
var getClassName27 = get_class_name_factory_default("MenuBar", styles_module_default22);
function MenuBar({
  menuOpen = false,
  renderHeaderActions,
  setMenuOpen
}) {
  const back = useAppStore((s) => s.history.back);
  const forward = useAppStore((s) => s.history.forward);
  const hasFuture = useAppStore((s) => s.history.hasFuture());
  const hasPast = useAppStore((s) => s.history.hasPast());
  return /* @__PURE__ */ jsx46(
    "div",
    {
      className: getClassName27({ menuOpen }),
      onClick: (event) => {
        var _a;
        const element = event.target;
        if (window.matchMedia("(min-width: 638px)").matches) {
          return;
        }
        if (element.tagName === "A" && ((_a = element.getAttribute("href")) == null ? void 0 : _a.startsWith("#"))) {
          setMenuOpen(false);
        }
      },
      children: /* @__PURE__ */ jsxs16("div", { className: getClassName27("inner"), children: [
        /* @__PURE__ */ jsxs16("div", { className: getClassName27("history"), children: [
          /* @__PURE__ */ jsx46(
            IconButton,
            {
              type: "button",
              title: "undo",
              disabled: !hasPast,
              onClick: back,
              children: /* @__PURE__ */ jsx46(Undo2, { size: 21 })
            }
          ),
          /* @__PURE__ */ jsx46(
            IconButton,
            {
              type: "button",
              title: "redo",
              disabled: !hasFuture,
              onClick: forward,
              children: /* @__PURE__ */ jsx46(Redo2, { size: 21 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx46(Fragment15, { children: renderHeaderActions && renderHeaderActions() })
      ] })
    }
  );
}

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Header/styles.module.css#css-module
var styles_module_default23 = { "PuckHeader": "_PuckHeader_63pti_1", "PuckHeader--hidePlugins": "_PuckHeader--hidePlugins_63pti_15", "PuckHeader-inner": "_PuckHeader-inner_63pti_20", "PuckHeader-toggle": "_PuckHeader-toggle_63pti_40", "PuckHeader--rightSideBarVisible": "_PuckHeader--rightSideBarVisible_63pti_47", "PuckHeader-rightSideBarToggle": "_PuckHeader-rightSideBarToggle_63pti_47", "PuckHeader--leftSideBarVisible": "_PuckHeader--leftSideBarVisible_63pti_48", "PuckHeader-leftSideBarToggle": "_PuckHeader-leftSideBarToggle_63pti_48", "PuckHeader-title": "_PuckHeader-title_63pti_64", "PuckHeader-path": "_PuckHeader-path_63pti_68", "PuckHeader-tools": "_PuckHeader-tools_63pti_75", "PuckHeader-menuButton": "_PuckHeader-menuButton_63pti_81", "PuckHeader--menuOpen": "_PuckHeader--menuOpen_63pti_86" };

// components/Puck/components/Header/index.tsx
import { Fragment as Fragment16, jsx as jsx47, jsxs as jsxs17 } from "react/jsx-runtime";
var getClassName28 = get_class_name_factory_default("PuckHeader", styles_module_default23);
var HeaderInner = ({
  hidePlugins
}) => {
  const {
    onPublish,
    renderHeader,
    renderHeaderActions,
    headerTitle,
    headerPath,
    iframe: _iframe
  } = usePropsContext();
  const dispatch = useAppStore((s) => s.dispatch);
  const appStore = useAppStoreApi();
  const defaultHeaderRender = useMemo20(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"
      );
      const RenderHeader = (_a) => {
        var _b = _a, { actions } = _b, props = __objRest(_b, ["actions"]);
        const Comp = renderHeader;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ jsx47(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState, children: actions }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const defaultHeaderActionsRender = useMemo20(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ jsx47(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeaderActions]);
  const CustomHeader = useAppStore(
    (s) => s.overrides.header || defaultHeaderRender
  );
  const CustomHeaderActions = useAppStore(
    (s) => s.overrides.headerActions || defaultHeaderActionsRender
  );
  const [menuOpen, setMenuOpen] = useState20(false);
  const rootTitle = useAppStore((s) => {
    var _a, _b;
    const rootData = (_a = s.state.indexes.nodes["root"]) == null ? void 0 : _a.data;
    return (_b = rootData.props.title) != null ? _b : "";
  });
  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );
  const toggleSidebars = useCallback18(
    (sidebar) => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible = sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar = sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
      dispatch({
        type: "setUi",
        ui: __spreadValues({
          [`${sidebar}SideBarVisible`]: !sideBarVisible
        }, !widerViewport ? { [oppositeSideBar]: false } : {})
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );
  return /* @__PURE__ */ jsx47(
    CustomHeader,
    {
      actions: /* @__PURE__ */ jsx47(Fragment16, { children: /* @__PURE__ */ jsx47(CustomHeaderActions, { children: /* @__PURE__ */ jsx47(
        Button,
        {
          onClick: () => {
            const data = appStore.getState().state.data;
            onPublish && onPublish(data);
          },
          icon: /* @__PURE__ */ jsx47(Globe, { size: "14px" }),
          children: "Publish"
        }
      ) }) }),
      children: /* @__PURE__ */ jsx47(
        "header",
        {
          className: getClassName28({
            leftSideBarVisible,
            rightSideBarVisible,
            hidePlugins
          }),
          children: /* @__PURE__ */ jsxs17("div", { className: getClassName28("inner"), children: [
            /* @__PURE__ */ jsxs17("div", { className: getClassName28("toggle"), children: [
              /* @__PURE__ */ jsx47("div", { className: getClassName28("leftSideBarToggle"), children: /* @__PURE__ */ jsx47(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    toggleSidebars("left");
                  },
                  title: "Toggle left sidebar",
                  children: /* @__PURE__ */ jsx47(PanelLeft, { focusable: "false" })
                }
              ) }),
              /* @__PURE__ */ jsx47("div", { className: getClassName28("rightSideBarToggle"), children: /* @__PURE__ */ jsx47(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    toggleSidebars("right");
                  },
                  title: "Toggle right sidebar",
                  children: /* @__PURE__ */ jsx47(PanelRight, { focusable: "false" })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx47("div", { className: getClassName28("title"), children: /* @__PURE__ */ jsxs17(Heading, { rank: "2", size: "xs", children: [
              headerTitle || rootTitle || "Page",
              headerPath && /* @__PURE__ */ jsxs17(Fragment16, { children: [
                " ",
                /* @__PURE__ */ jsx47("code", { className: getClassName28("path"), children: headerPath })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs17("div", { className: getClassName28("tools"), children: [
              /* @__PURE__ */ jsx47("div", { className: getClassName28("menuButton"), children: /* @__PURE__ */ jsx47(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    return setMenuOpen(!menuOpen);
                  },
                  title: "Toggle menu bar",
                  children: menuOpen ? /* @__PURE__ */ jsx47(ChevronUp, { focusable: "false" }) : /* @__PURE__ */ jsx47(ChevronDown, { focusable: "false" })
                }
              ) }),
              /* @__PURE__ */ jsx47(
                MenuBar,
                {
                  dispatch,
                  onPublish,
                  menuOpen,
                  renderHeaderActions: () => /* @__PURE__ */ jsx47(CustomHeaderActions, { children: /* @__PURE__ */ jsx47(
                    Button,
                    {
                      onClick: () => {
                        const data = appStore.getState().state.data;
                        onPublish && onPublish(data);
                      },
                      icon: /* @__PURE__ */ jsx47(Globe, { size: "14px" }),
                      children: "Publish"
                    }
                  ) }),
                  setMenuOpen
                }
              )
            ] })
          ] })
        }
      )
    }
  );
};
var Header = memo9(HeaderInner);

// css-module:/Users/feb/HTDocs/custom-puck/components/SidebarSection/styles.module.css#css-module
var styles_module_default24 = { "SidebarSection": "_SidebarSection_5otpt_1", "SidebarSection-title": "_SidebarSection-title_5otpt_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_5otpt_20", "SidebarSection-content": "_SidebarSection-content_5otpt_24", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_5otpt_33", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_5otpt_62", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_5otpt_33", "SidebarSection-heading": "_SidebarSection-heading_5otpt_74", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_5otpt_78" };

// components/SidebarSection/index.tsx
import { jsx as jsx48, jsxs as jsxs18 } from "react/jsx-runtime";
var getClassName29 = get_class_name_factory_default("SidebarSection", styles_module_default24);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  isLoading
}) => {
  return /* @__PURE__ */ jsxs18("div", { className: getClassName29({ noBorderTop }), style: { background }, children: [
    /* @__PURE__ */ jsx48("div", { className: getClassName29("title"), children: /* @__PURE__ */ jsxs18("div", { className: getClassName29("breadcrumbs"), children: [
      showBreadcrumbs && /* @__PURE__ */ jsx48(Breadcrumbs, {}),
      /* @__PURE__ */ jsx48("div", { className: getClassName29("heading"), children: /* @__PURE__ */ jsx48(Heading, { rank: "2", size: "xs", children: title }) })
    ] }) }),
    /* @__PURE__ */ jsx48("div", { className: getClassName29("content"), children }),
    isLoading && /* @__PURE__ */ jsx48("div", { className: getClassName29("loadingOverlay"), children: /* @__PURE__ */ jsx48(Loader, { size: 32 }) })
  ] });
};

// components/Puck/components/Canvas/index.tsx
import {
  useCallback as useCallback19,
  useEffect as useEffect25,
  useMemo as useMemo23,
  useRef as useRef13,
  useState as useState22
} from "react";

// components/ViewportControls/index.tsx
import { useEffect as useEffect24, useMemo as useMemo21, useState as useState21 } from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/ViewportControls/styles.module.css#css-module
var styles_module_default25 = { "ViewportControls": "_ViewportControls_e3unb_1", "ViewportControls--fullScreen": "_ViewportControls--fullScreen_e3unb_5", "ViewportControls-toggleButton": "_ViewportControls-toggleButton_e3unb_14", "ViewportControls--isExpanded": "_ViewportControls--isExpanded_e3unb_38", "ViewportControls-actions": "_ViewportControls-actions_e3unb_42", "ViewportControls-actionsInner": "_ViewportControls-actionsInner_e3unb_46", "ViewportControls-divider": "_ViewportControls-divider_e3unb_75", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_e3unb_81", "ViewportControls-zoom": "_ViewportControls-zoom_e3unb_81", "ViewportButton-inner": "_ViewportButton-inner_e3unb_111", "ViewportButton--isActive": "_ViewportButton--isActive_e3unb_119" };

// components/ViewportControls/index.tsx
import { jsx as jsx49, jsxs as jsxs19 } from "react/jsx-runtime";
var icons = {
  Smartphone: /* @__PURE__ */ jsx49(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ jsx49(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ jsx49(Monitor, { size: 16 }),
  FullWidth: /* @__PURE__ */ jsx49(Expand, { size: 16 })
};
var getClassName30 = get_class_name_factory_default("ViewportControls", styles_module_default25);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default25);
var ActionButton = ({
  children,
  title,
  onClick,
  isActive,
  disabled
}) => {
  return /* @__PURE__ */ jsx49("span", { className: getClassNameButton({ isActive }), suppressHydrationWarning: true, children: /* @__PURE__ */ jsx49(
    IconButton,
    {
      type: "button",
      title,
      disabled: disabled || isActive,
      onClick,
      suppressHydrationWarning: true,
      children: /* @__PURE__ */ jsx49("span", { className: getClassNameButton("inner"), children })
    }
  ) });
};
var defaultZoomOptions = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
  { label: "125%", value: 1.25 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2 }
];
var ViewportControls = ({
  autoZoom,
  zoom,
  onViewportChange,
  onZoom,
  fullScreen
}) => {
  var _a, _b;
  const viewports = useAppStore((s) => s.viewports);
  const uiViewports = useAppStore((s) => s.state.ui.viewports);
  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );
  const zoomOptions = useMemo21(
    () => [
      ...defaultZoomOptions,
      ...defaultsContainAutoZoom ? [] : [
        {
          value: autoZoom,
          label: `${(autoZoom * 100).toFixed(0)}% (Auto)`
        }
      ]
    ].filter((a) => a.value <= autoZoom).sort((a, b) => a.value > b.value ? 1 : -1),
    [autoZoom]
  );
  const [activeViewport, setActiveViewport] = useState21(
    uiViewports.current.width
  );
  useEffect24(() => {
    setActiveViewport(uiViewports.current.width);
  }, [uiViewports.current]);
  const [isExpanded, setIsExpanded] = useState21(false);
  return /* @__PURE__ */ jsxs19(
    "div",
    {
      className: getClassName30({ isExpanded, fullScreen }),
      suppressHydrationWarning: true,
      children: [
        /* @__PURE__ */ jsx49("div", { className: getClassName30("actions"), children: /* @__PURE__ */ jsxs19("div", { className: getClassName30("actionsInner"), children: [
          viewports.map((viewport, i) => /* @__PURE__ */ jsx49(
            ActionButton,
            {
              title: viewport.label ? `Switch to ${viewport.label} viewport` : "Switch viewport",
              onClick: () => {
                setActiveViewport(viewport.width);
                onViewportChange(viewport);
              },
              isActive: activeViewport === viewport.width,
              children: typeof viewport.icon === "string" ? icons[viewport.icon] || viewport.icon : viewport.icon || icons.Smartphone
            },
            i
          )),
          /* @__PURE__ */ jsx49("div", { className: getClassName30("divider") }),
          /* @__PURE__ */ jsx49(
            ActionButton,
            {
              title: "Zoom viewport out",
              disabled: zoom <= ((_a = zoomOptions[0]) == null ? void 0 : _a.value),
              onClick: (e) => {
                e.stopPropagation();
                onZoom(
                  zoomOptions[Math.max(
                    zoomOptions.findIndex((option) => option.value === zoom) - 1,
                    0
                  )].value
                );
              },
              children: /* @__PURE__ */ jsx49(ZoomOut, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsx49(
            ActionButton,
            {
              title: "Zoom viewport in",
              disabled: zoom >= ((_b = zoomOptions[zoomOptions.length - 1]) == null ? void 0 : _b.value),
              onClick: (e) => {
                e.stopPropagation();
                onZoom(
                  zoomOptions[Math.min(
                    zoomOptions.findIndex((option) => option.value === zoom) + 1,
                    zoomOptions.length - 1
                  )].value
                );
              },
              children: /* @__PURE__ */ jsx49(ZoomIn, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsxs19("div", { className: getClassName30("zoom"), children: [
            /* @__PURE__ */ jsx49("div", { className: getClassName30("divider") }),
            /* @__PURE__ */ jsx49(
              "select",
              {
                className: getClassName30("zoomSelect"),
                value: zoom.toString(),
                onClick: (e) => {
                  e.stopPropagation();
                },
                onChange: (e) => {
                  onZoom(parseFloat(e.currentTarget.value));
                },
                children: zoomOptions.map((option) => /* @__PURE__ */ jsx49(
                  "option",
                  {
                    value: option.value,
                    label: option.label
                  },
                  option.label
                ))
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx49(
          "button",
          {
            className: getClassName30("toggleButton"),
            title: "Toggle viewport menu",
            onClick: () => setIsExpanded((s) => !s),
            children: isExpanded ? /* @__PURE__ */ jsx49(X, { size: 16 }) : /* @__PURE__ */ jsx49(Monitor, { size: 16 })
          }
        )
      ]
    }
  );
};

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Canvas/styles.module.css#css-module
var styles_module_default26 = { "PuckCanvas": "_PuckCanvas_t6s9b_1", "PuckCanvas-controls": "_PuckCanvas-controls_t6s9b_17", "PuckCanvas--fullScreen": "_PuckCanvas--fullScreen_t6s9b_22", "PuckCanvas-inner": "_PuckCanvas-inner_t6s9b_33", "PuckCanvas-root": "_PuckCanvas-root_t6s9b_42", "PuckCanvas--ready": "_PuckCanvas--ready_t6s9b_67", "PuckCanvas-loader": "_PuckCanvas-loader_t6s9b_72", "PuckCanvas--showLoader": "_PuckCanvas--showLoader_t6s9b_82" };

// components/Puck/components/Canvas/index.tsx
import { useShallow as useShallow9 } from "zustand/react/shallow";

// lib/frame-context.tsx
import {
  createContext as createContext7,
  useContext as useContext14,
  useRef as useRef12,
  useMemo as useMemo22
} from "react";
import { jsx as jsx50 } from "react/jsx-runtime";
var FrameContext = createContext7(null);
var FrameProvider = ({
  children
}) => {
  const frameRef = useRef12(null);
  const value = useMemo22(
    () => ({
      frameRef
    }),
    []
  );
  return /* @__PURE__ */ jsx50(FrameContext.Provider, { value, children });
};
var useCanvasFrame = () => {
  const context = useContext14(FrameContext);
  if (context === null) {
    throw new Error("useCanvasFrame must be used within a FrameProvider");
  }
  return context;
};

// components/Puck/components/Canvas/index.tsx
import { Fragment as Fragment17, jsx as jsx51, jsxs as jsxs20 } from "react/jsx-runtime";
var getClassName31 = get_class_name_factory_default("PuckCanvas", styles_module_default26);
var ZOOM_ON_CHANGE = true;
var TRANSITION_DURATION = 150;
var Canvas = () => {
  var _a;
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const { viewports: viewportOptions = defaultViewports, ui: uiProp } = usePropsContext();
  const {
    dispatch,
    overrides,
    setUi,
    zoomConfig,
    setZoomConfig,
    status,
    iframe,
    _experimentalFullScreenCanvas
  } = useAppStore(
    useShallow9((s) => ({
      dispatch: s.dispatch,
      overrides: s.overrides,
      setUi: s.setUi,
      zoomConfig: s.zoomConfig,
      setZoomConfig: s.setZoomConfig,
      status: s.status,
      iframe: s.iframe,
      _experimentalFullScreenCanvas: s._experimentalFullScreenCanvas
    }))
  );
  const {
    leftSideBarVisible,
    rightSideBarVisible,
    leftSideBarWidth,
    rightSideBarWidth,
    viewports
  } = useAppStore(
    useShallow9((s) => ({
      leftSideBarVisible: s.state.ui.leftSideBarVisible,
      rightSideBarVisible: s.state.ui.rightSideBarVisible,
      leftSideBarWidth: s.state.ui.leftSideBarWidth,
      rightSideBarWidth: s.state.ui.rightSideBarWidth,
      viewports: s.state.ui.viewports
    }))
  );
  const [showTransition, setShowTransition] = useState22(false);
  const isResizingRef = useRef13(false);
  const defaultRender = useMemo23(() => {
    const PuckDefault = ({ children }) => /* @__PURE__ */ jsx51(Fragment17, { children });
    return PuckDefault;
  }, []);
  const CustomPreview = useMemo23(
    () => overrides.preview || defaultRender,
    [overrides]
  );
  const getFrameDimensions = useCallback19(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  useEffect25(() => {
    resetAutoZoom();
  }, [
    frameRef,
    leftSideBarVisible,
    rightSideBarVisible,
    leftSideBarWidth,
    rightSideBarWidth,
    viewports
  ]);
  useEffect25(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (viewports.current.height === "auto") {
      setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), {
        rootHeight: frameHeight / zoomConfig.zoom
      }));
    }
  }, [zoomConfig.zoom, getFrameDimensions, setZoomConfig]);
  useEffect25(() => {
    if (ZOOM_ON_CHANGE) {
      resetAutoZoom();
    }
  }, [viewports.current.width, viewports]);
  useEffect25(() => {
    if (!frameRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (!isResizingRef.current) {
        resetAutoZoom();
      }
    });
    resizeObserver.observe(frameRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [frameRef.current]);
  const [showLoader, setShowLoader] = useState22(false);
  useEffect25(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  const appStoreApi = useAppStoreApi();
  useEffect25(() => {
    var _a2, _b;
    if (typeof window === "undefined") return;
    if ((_a2 = uiProp == null ? void 0 : uiProp.viewports) == null ? void 0 : _a2.current) return;
    const viewportWidth = window.innerWidth;
    const frameWidth = (_b = frameRef.current) == null ? void 0 : _b.getBoundingClientRect().width;
    if (!viewportWidth) return;
    if (!frameWidth) return;
    if (viewportOptions.length === 0) return;
    const fullWidthViewport = Object.values(viewportOptions).find(
      (v) => v.width === "100%"
    );
    const containsFullWidthViewport = !!fullWidthViewport;
    const viewportDifferences = Object.entries(viewportOptions).filter(([_, value]) => value.width !== "100%").map(([key, value]) => ({
      key,
      diff: Math.abs(
        viewportWidth - (typeof value.width === "string" ? viewportWidth : value.width)
      ),
      value
    })).sort((a, b) => a.diff > b.diff ? 1 : -1);
    let closestViewport = viewportDifferences[0].value;
    if (closestViewport.width < frameWidth && containsFullWidthViewport) {
      closestViewport = fullWidthViewport;
    }
    if (iframe.enabled) {
      const s = appStoreApi.getState();
      const appState = {
        state: __spreadProps(__spreadValues({}, s.state), {
          ui: __spreadProps(__spreadValues({}, s.state.ui), {
            viewports: __spreadProps(__spreadValues({}, s.state.ui.viewports), {
              current: __spreadProps(__spreadValues({}, s.state.ui.viewports.current), {
                height: (closestViewport == null ? void 0 : closestViewport.height) || "auto",
                width: closestViewport == null ? void 0 : closestViewport.width
              })
            })
          })
        })
      };
      let history = s.history;
      if (s.history.histories.length === 1) {
        history = __spreadProps(__spreadValues({}, history), { histories: [appState] });
      }
      appStoreApi.setState(__spreadProps(__spreadValues({}, appState), { history }));
    }
  }, [
    viewportOptions,
    frameRef.current,
    iframe,
    appStoreApi,
    (_a = uiProp == null ? void 0 : uiProp.viewports) == null ? void 0 : _a.current
  ]);
  return /* @__PURE__ */ jsxs20(
    "div",
    {
      className: getClassName31({
        ready: status === "READY" || !iframe.enabled || !iframe.waitForStyles,
        showLoader,
        fullScreen: _experimentalFullScreenCanvas
      }),
      onClick: (e) => {
        const el = e.target;
        if (!el.hasAttribute("data-puck-component") && !el.hasAttribute("data-puck-dropzone")) {
          dispatch({
            type: "setUi",
            ui: { itemSelector: null },
            recordHistory: false
          });
        }
      },
      children: [
        viewports.controlsVisible && iframe.enabled && /* @__PURE__ */ jsx51("div", { className: getClassName31("controls"), children: /* @__PURE__ */ jsx51(
          ViewportControls,
          {
            fullScreen: _experimentalFullScreenCanvas,
            autoZoom: zoomConfig.autoZoom,
            zoom: zoomConfig.zoom,
            onViewportChange: (viewport) => {
              setShowTransition(true);
              isResizingRef.current = true;
              const uiViewport = __spreadProps(__spreadValues({}, viewport), {
                height: viewport.height || "auto",
                zoom: zoomConfig.zoom
              });
              const newUi = {
                viewports: __spreadProps(__spreadValues({}, viewports), { current: uiViewport })
              };
              setUi(newUi);
              if (ZOOM_ON_CHANGE) {
                resetAutoZoom({
                  viewports: __spreadProps(__spreadValues({}, viewports), { current: uiViewport })
                });
              }
            },
            onZoom: (zoom) => {
              setShowTransition(true);
              isResizingRef.current = true;
              setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), { zoom }));
            }
          }
        ) }),
        /* @__PURE__ */ jsxs20("div", { className: getClassName31("inner"), ref: frameRef, children: [
          /* @__PURE__ */ jsx51(
            "div",
            {
              className: getClassName31("root"),
              style: {
                width: iframe.enabled ? viewports.current.width : "100%",
                height: zoomConfig.rootHeight,
                transform: iframe.enabled ? `scale(${zoomConfig.zoom})` : void 0,
                transition: showTransition ? `width ${TRANSITION_DURATION}ms ease-out, height ${TRANSITION_DURATION}ms ease-out, transform ${TRANSITION_DURATION}ms ease-out` : "",
                overflow: iframe.enabled ? void 0 : "auto"
              },
              suppressHydrationWarning: true,
              id: "puck-canvas-root",
              onTransitionEnd: () => {
                setShowTransition(false);
                isResizingRef.current = false;
              },
              children: /* @__PURE__ */ jsx51(CustomPreview, { children: /* @__PURE__ */ jsx51(Preview2, {}) })
            }
          ),
          /* @__PURE__ */ jsx51("div", { className: getClassName31("loader"), children: /* @__PURE__ */ jsx51(Loader, { size: 24 }) })
        ] })
      ]
    }
  );
};

// lib/use-sidebar-resize.ts
import { useCallback as useCallback20, useEffect as useEffect26, useRef as useRef14, useState as useState23 } from "react";
function useSidebarResize(position, dispatch) {
  const [width, setWidth] = useState23(null);
  const sidebarRef = useRef14(null);
  const storeWidth = useAppStore(
    (s) => position === "left" ? s.state.ui.leftSideBarWidth : s.state.ui.rightSideBarWidth
  );
  useEffect26(() => {
    if (typeof window !== "undefined" && !storeWidth) {
      try {
        const savedWidths = localStorage.getItem("puck-sidebar-widths");
        if (savedWidths) {
          const widths = JSON.parse(savedWidths);
          const savedWidth = widths[position];
          const key = position === "left" ? "leftSideBarWidth" : "rightSideBarWidth";
          if (savedWidth) {
            dispatch({
              type: "setUi",
              ui: {
                [key]: savedWidth
              }
            });
          }
        }
      } catch (error) {
        console.error(
          `Failed to load ${position} sidebar width from localStorage`,
          error
        );
      }
    }
  }, [dispatch, position, storeWidth]);
  useEffect26(() => {
    if (storeWidth !== void 0) {
      setWidth(storeWidth);
    }
  }, [storeWidth]);
  const handleResizeEnd = useCallback20(
    (width2) => {
      dispatch({
        type: "setUi",
        ui: {
          [position === "left" ? "leftSideBarWidth" : "rightSideBarWidth"]: width2
        }
      });
      let widths = {};
      try {
        const savedWidths = localStorage.getItem("puck-sidebar-widths");
        widths = savedWidths ? JSON.parse(savedWidths) : {};
      } catch (error) {
        console.error(
          `Failed to save ${position} sidebar width to localStorage`,
          error
        );
      } finally {
        localStorage.setItem(
          "puck-sidebar-widths",
          JSON.stringify(__spreadProps(__spreadValues({}, widths), {
            [position]: width2
          }))
        );
      }
      window.dispatchEvent(
        new CustomEvent("viewportchange", {
          bubbles: true,
          cancelable: false
        })
      );
    },
    [dispatch, position]
  );
  return {
    width,
    setWidth,
    sidebarRef,
    handleResizeEnd
  };
}

// components/Puck/components/ResizeHandle/index.tsx
import { useCallback as useCallback21, useRef as useRef15 } from "react";

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/ResizeHandle/styles.module.css#css-module
var styles_module_default27 = { "ResizeHandle": "_ResizeHandle_144bf_2", "ResizeHandle--left": "_ResizeHandle--left_144bf_16", "ResizeHandle--right": "_ResizeHandle--right_144bf_20" };

// components/Puck/components/ResizeHandle/index.tsx
import { jsx as jsx52 } from "react/jsx-runtime";
var getClassName32 = get_class_name_factory_default("ResizeHandle", styles_module_default27);
var ResizeHandle = ({
  position,
  sidebarRef,
  onResize,
  onResizeEnd
}) => {
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const handleRef = useRef15(null);
  const isDragging = useRef15(false);
  const startX = useRef15(0);
  const startWidth = useRef15(0);
  const handleMouseMove = useCallback21(
    (e) => {
      if (!isDragging.current) return;
      const delta = e.clientX - startX.current;
      const newWidth = position === "left" ? startWidth.current + delta : startWidth.current - delta;
      const width = Math.max(192, newWidth);
      onResize(width);
      e.preventDefault();
    },
    [onResize, position]
  );
  const handleMouseUp = useCallback21(() => {
    var _a;
    if (!isDragging.current) return;
    isDragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    const overlay = document.getElementById("resize-overlay");
    if (overlay) {
      document.body.removeChild(overlay);
    }
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    const finalWidth = ((_a = sidebarRef.current) == null ? void 0 : _a.getBoundingClientRect().width) || 0;
    onResizeEnd(finalWidth);
    resetAutoZoom();
  }, [onResizeEnd]);
  const handleMouseDown = useCallback21(
    (e) => {
      var _a;
      isDragging.current = true;
      startX.current = e.clientX;
      startWidth.current = ((_a = sidebarRef.current) == null ? void 0 : _a.getBoundingClientRect().width) || 0;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      const overlay = document.createElement("div");
      overlay.id = "resize-overlay";
      overlay.setAttribute("data-resize-overlay", "");
      document.body.appendChild(overlay);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      e.preventDefault();
    },
    [position, handleMouseMove, handleMouseUp]
  );
  return /* @__PURE__ */ jsx52(
    "div",
    {
      ref: handleRef,
      className: getClassName32({ [position]: true }),
      onMouseDown: handleMouseDown
    }
  );
};

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Sidebar/styles.module.css#css-module
var styles_module_default28 = { "Sidebar": "_Sidebar_o396p_1", "Sidebar--isVisible": "_Sidebar--isVisible_o396p_9", "Sidebar--left": "_Sidebar--left_o396p_13", "Sidebar--right": "_Sidebar--right_o396p_25", "Sidebar-resizeHandle": "_Sidebar-resizeHandle_o396p_37" };

// components/Puck/components/Sidebar/index.tsx
import { Fragment as Fragment18, jsx as jsx53, jsxs as jsxs21 } from "react/jsx-runtime";
var getClassName33 = get_class_name_factory_default("Sidebar", styles_module_default28);
var Sidebar = ({
  position,
  sidebarRef,
  isVisible,
  onResize,
  onResizeEnd,
  children
}) => {
  return /* @__PURE__ */ jsxs21(Fragment18, { children: [
    /* @__PURE__ */ jsx53(
      "div",
      {
        ref: sidebarRef,
        className: getClassName33({ [position]: true, isVisible }),
        children
      }
    ),
    /* @__PURE__ */ jsx53("div", { className: `${getClassName33("resizeHandle")}`, children: /* @__PURE__ */ jsx53(
      ResizeHandle,
      {
        position,
        sidebarRef,
        onResize,
        onResizeEnd
      }
    ) })
  ] });
};

// lib/use-delete-hotkeys.ts
import { useCallback as useCallback22 } from "react";
var isElementVisible = (element) => {
  let current = element;
  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0" || current.getAttribute("aria-hidden") === "true" || current.hasAttribute("hidden")) {
      return false;
    }
    current = current.parentElement;
  }
  return true;
};
var shouldBlockDeleteHotkey = (e) => {
  var _a;
  if (e == null ? void 0 : e.defaultPrevented) return true;
  const origin = ((_a = e == null ? void 0 : e.composedPath) == null ? void 0 : _a.call(e)[0]) || (e == null ? void 0 : e.target) || document.activeElement;
  if (origin instanceof HTMLElement) {
    const tag = origin.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return true;
    if (origin.isContentEditable) return true;
    const role = origin.getAttribute("role");
    if (role === "textbox" || role === "combobox" || role === "searchbox" || role === "listbox" || role === "grid") {
      return true;
    }
  }
  const modal = document.querySelector(
    'dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]'
  );
  if (modal && isElementVisible(modal)) {
    return true;
  }
  return false;
};
var useDeleteHotkeys = () => {
  const appStore = useAppStoreApi();
  const deleteSelectedComponent = useCallback22(
    (e) => {
      var _a;
      if (shouldBlockDeleteHotkey(e)) {
        return false;
      }
      const { state, dispatch, permissions, selectedItem } = appStore.getState();
      const sel = (_a = state.ui) == null ? void 0 : _a.itemSelector;
      if (!(sel == null ? void 0 : sel.zone) || !selectedItem) return true;
      if (!permissions.getPermissions({ item: selectedItem }).delete)
        return true;
      dispatch({
        type: "remove",
        index: sel.index,
        zone: sel.zone
      });
      return true;
    },
    [appStore]
  );
  useHotkey({ delete: true }, deleteSelectedComponent);
  useHotkey({ backspace: true }, deleteSelectedComponent);
};

// css-module:/Users/feb/HTDocs/custom-puck/components/Puck/components/Nav/styles.module.css#css-module
var styles_module_default29 = { "Nav": "_Nav_1tvxq_1", "Nav-list": "_Nav-list_1tvxq_5", "Nav-mobileActions": "_Nav-mobileActions_1tvxq_23", "NavItem-link": "_NavItem-link_1tvxq_38", "NavItem": "_NavItem_1tvxq_38", "NavItem-linkIcon": "_NavItem-linkIcon_1tvxq_89", "NavItem--active": "_NavItem--active_1tvxq_94", "NavItem--mobileOnly": "_NavItem--mobileOnly_1tvxq_121", "NavItem--desktopOnly": "_NavItem--desktopOnly_1tvxq_126" };

// components/Puck/components/Nav/index.tsx
import { jsx as jsx54, jsxs as jsxs22 } from "react/jsx-runtime";
var getClassName34 = get_class_name_factory_default("Nav", styles_module_default29);
var getClassNameItem3 = get_class_name_factory_default("NavItem", styles_module_default29);
var MenuItem = ({
  label,
  icon,
  onClick,
  isActive,
  mobileOnly,
  desktopOnly
}) => {
  return /* @__PURE__ */ jsx54(
    "li",
    {
      className: getClassNameItem3({
        active: isActive,
        mobileOnly,
        desktopOnly
      }),
      children: onClick && /* @__PURE__ */ jsxs22("div", { className: getClassNameItem3("link"), onClick, children: [
        icon && /* @__PURE__ */ jsx54("span", { className: getClassNameItem3("linkIcon"), children: icon }),
        /* @__PURE__ */ jsx54("span", { className: getClassNameItem3("linkLabel"), children: label })
      ] })
    }
  );
};
var Nav = ({
  items,
  mobileActions
}) => {
  return /* @__PURE__ */ jsxs22("nav", { className: getClassName34(), children: [
    /* @__PURE__ */ jsx54("ul", { className: getClassName34("list"), children: Object.entries(items).map(([key, item]) => /* @__PURE__ */ jsx54(MenuItem, __spreadValues({}, item), key)) }),
    mobileActions && /* @__PURE__ */ jsx54("div", { className: getClassName34("mobileActions"), children: mobileActions })
  ] });
};

// lib/style-config.ts
var normalizeIframeConfig = (iframe) => __spreadValues({
  enabled: true,
  waitForStyles: true,
  syncHostStyles: true
}, iframe);

// components/Puck/components/Layout/index.tsx
import { jsx as jsx55, jsxs as jsxs23 } from "react/jsx-runtime";
var getClassName35 = get_class_name_factory_default("Puck", styles_module_default21);
var getLayoutClassName = get_class_name_factory_default("PuckLayout", styles_module_default21);
var getPluginTabClassName = get_class_name_factory_default("PuckPluginTab", styles_module_default21);
var useBrowserLayoutEffect = typeof window === "undefined" ? useEffect28 : useLayoutEffect2;
var FieldSideBar = () => {
  const title = useAppStore(
    (s) => {
      var _a, _b, _c;
      return s.selectedItem ? (_b = (_a = s.config.components[s.selectedItem.type]) == null ? void 0 : _a["label"]) != null ? _b : s.selectedItem.type.toString() : ((_c = s.config.root) == null ? void 0 : _c.label) || "Page";
    }
  );
  return /* @__PURE__ */ jsx55(SidebarSection, { noBorderTop: true, showBreadcrumbs: true, title, children: /* @__PURE__ */ jsx55(Fields, {}) });
};
var PluginTab = ({
  children,
  visible,
  mobileOnly
}) => {
  return /* @__PURE__ */ jsx55("div", { className: getPluginTabClassName({ visible, mobileOnly }), children: /* @__PURE__ */ jsx55("div", { className: getPluginTabClassName("body"), children }) });
};
var Layout = ({ children }) => {
  const {
    iframe: _iframe,
    dnd,
    initialHistory: _initialHistory,
    plugins,
    height
  } = usePropsContext();
  const iframe = useMemo24(
    () => normalizeIframeConfig(_iframe),
    [_iframe]
  );
  useInjectUiCss();
  const dispatch = useAppStore((s) => s.dispatch);
  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );
  const instanceId = useAppStore((s) => s.instanceId);
  const {
    width: leftWidth,
    setWidth: setLeftWidth,
    sidebarRef: leftSidebarRef,
    handleResizeEnd: handleLeftSidebarResizeEnd
  } = useSidebarResize("left", dispatch);
  const {
    width: rightWidth,
    setWidth: setRightWidth,
    sidebarRef: rightSidebarRef,
    handleResizeEnd: handleRightSidebarResizeEnd
  } = useSidebarResize("right", dispatch);
  useEffect28(() => {
    if (!window.matchMedia("(min-width: 638px)").matches) {
      dispatch({
        type: "setUi",
        ui: {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        }
      });
    }
    const handleResize = () => {
      if (!window.matchMedia("(min-width: 638px)").matches) {
        dispatch({
          type: "setUi",
          ui: (ui) => __spreadValues(__spreadValues({}, ui), ui.rightSideBarVisible ? { leftSideBarVisible: false } : {})
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const overrides = useAppStore((s) => s.overrides);
  const CustomPuck = useMemo24(
    () => overrides.puck || DefaultOverride,
    [overrides]
  );
  const [mounted, setMounted] = useState24(false);
  useBrowserLayoutEffect(() => {
    setMounted(true);
  }, []);
  const ready = useAppStore((s) => s.status === "READY");
  useMonitorHotkeys();
  useEffect28(() => {
    if (ready && iframe.enabled) {
      const frameDoc = getFrame();
      if (frameDoc) {
        return monitorHotkeys(frameDoc);
      }
    }
  }, [ready, iframe.enabled]);
  usePreviewModeHotkeys();
  useDeleteHotkeys();
  const layoutOptions = {};
  if (leftWidth) {
    layoutOptions["--puck-user-left-side-bar-width"] = `${leftWidth}px`;
  }
  if (rightWidth) {
    layoutOptions["--puck-user-right-side-bar-width"] = `${rightWidth}px`;
  }
  const setUi = useAppStore((s) => s.setUi);
  const currentPlugin = useAppStore((s) => {
    var _a;
    return (_a = s.state.ui.plugin) == null ? void 0 : _a.current;
  });
  const appStoreApi = useAppStoreApi();
  const [mobilePanelHeightMode, setMobilePanelHeightMode] = useState24("toggle");
  const hasLegacySideBarPlugin = useMemo24(
    () => !!(plugins == null ? void 0 : plugins.find((p) => p.name === "legacy-side-bar")),
    [plugins]
  );
  const pluginItems = useMemo24(() => {
    const details = {};
    const defaultPlugins = [blocksPlugin(), outlinePlugin()];
    const isLegacy = (plugin) => plugin.name === "legacy-side-bar" ? -1 : 0;
    const combinedPlugins = [
      ...defaultPlugins,
      ...plugins != null ? plugins : []
    ].sort((a, b) => isLegacy(a) - isLegacy(b));
    if (!(plugins == null ? void 0 : plugins.some((p) => p.name === "fields"))) {
      combinedPlugins.push(fieldsPlugin());
    }
    combinedPlugins == null ? void 0 : combinedPlugins.forEach((plugin) => {
      var _a, _b;
      if (plugin.name && plugin.render) {
        if (details[plugin.name]) {
          delete details[plugin.name];
        }
        details[plugin.name] = {
          label: (_a = plugin.label) != null ? _a : plugin.name,
          icon: (_b = plugin.icon) != null ? _b : /* @__PURE__ */ jsx55(ToyBrick, {}),
          onClick: () => {
            var _a2;
            setMobilePanelHeightMode((_a2 = plugin.mobilePanelHeight) != null ? _a2 : "toggle");
            if (plugin.name === currentPlugin) {
              if (leftSideBarVisible) {
                setUi({ leftSideBarVisible: false });
              } else {
                setUi({ leftSideBarVisible: true });
              }
            } else {
              if (plugin.name) {
                setUi({
                  plugin: { current: plugin.name },
                  leftSideBarVisible: true
                });
              }
            }
          },
          isActive: leftSideBarVisible && currentPlugin === plugin.name,
          render: plugin.render,
          mobileOnly: hasLegacySideBarPlugin || plugin.mobileOnly,
          desktopOnly: plugin.name === "legacy-side-bar" || plugin.desktopOnly
        };
      }
    });
    return details;
  }, [plugins, currentPlugin, appStoreApi, leftSideBarVisible]);
  useEffect28(() => {
    if (!currentPlugin) {
      const names = Object.keys(pluginItems);
      setUi({ plugin: { current: names[0] } });
    }
  }, [pluginItems, currentPlugin]);
  const hasDesktopFieldsPlugin = pluginItems["fields"] && pluginItems["fields"].mobileOnly === false;
  const mobilePanelExpanded = useAppStore(
    (s) => {
      var _a;
      return (_a = s.state.ui.mobilePanelExpanded) != null ? _a : false;
    }
  );
  return /* @__PURE__ */ jsxs23(
    "div",
    {
      className: `Puck ${getClassName35({
        hidePlugins: hasLegacySideBarPlugin
      })}`,
      id: instanceId,
      style: { height, visibility: "hidden" },
      children: [
        /* @__PURE__ */ jsx55(DragDropContext, { disableAutoScroll: dnd == null ? void 0 : dnd.disableAutoScroll, children: /* @__PURE__ */ jsx55(CustomPuck, { children: children || /* @__PURE__ */ jsx55(FrameProvider, { children: /* @__PURE__ */ jsx55(
          "div",
          {
            className: getLayoutClassName({
              leftSideBarVisible,
              mounted,
              rightSideBarVisible: !hasDesktopFieldsPlugin && rightSideBarVisible,
              isExpanded: mobilePanelExpanded,
              mobilePanelHeightToggle: mobilePanelHeightMode === "toggle",
              mobilePanelHeightMinContent: mobilePanelHeightMode === "min-content"
            }),
            style: { height },
            children: /* @__PURE__ */ jsxs23(
              "div",
              {
                className: getLayoutClassName("inner"),
                style: layoutOptions,
                children: [
                  /* @__PURE__ */ jsx55("div", { className: getLayoutClassName("header"), children: /* @__PURE__ */ jsx55(Header, { hidePlugins: hasLegacySideBarPlugin }) }),
                  /* @__PURE__ */ jsx55("div", { className: getLayoutClassName("nav"), children: /* @__PURE__ */ jsx55(
                    Nav,
                    {
                      items: pluginItems,
                      mobileActions: leftSideBarVisible && mobilePanelHeightMode === "toggle" && /* @__PURE__ */ jsx55(
                        IconButton,
                        {
                          type: "button",
                          title: "maximize",
                          onClick: () => {
                            setUi({
                              mobilePanelExpanded: !mobilePanelExpanded
                            });
                          },
                          children: mobilePanelExpanded ? /* @__PURE__ */ jsx55(Minimize2, { size: 21 }) : /* @__PURE__ */ jsx55(Maximize2, { size: 21 })
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx55(
                    Sidebar,
                    {
                      position: "left",
                      sidebarRef: leftSidebarRef,
                      isVisible: leftSideBarVisible,
                      onResize: setLeftWidth,
                      onResizeEnd: handleLeftSidebarResizeEnd,
                      children: Object.entries(pluginItems).map(
                        ([id, { mobileOnly, render: Render2, label }]) => /* @__PURE__ */ jsx55(
                          PluginTab,
                          {
                            visible: currentPlugin === id,
                            mobileOnly,
                            children: /* @__PURE__ */ jsx55(Render2, {})
                          },
                          id
                        )
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx55(Canvas, {}),
                  !hasDesktopFieldsPlugin && /* @__PURE__ */ jsx55(
                    Sidebar,
                    {
                      position: "right",
                      sidebarRef: rightSidebarRef,
                      isVisible: rightSideBarVisible,
                      onResize: setRightWidth,
                      onResizeEnd: handleRightSidebarResizeEnd,
                      children: /* @__PURE__ */ jsx55(FieldSideBar, {})
                    }
                  )
                ]
              }
            )
          }
        ) }) }) }),
        /* @__PURE__ */ jsx55("div", { id: "puck-portal-root", className: getClassName35("portal") })
      ]
    }
  );
};

// components/Puck/index.tsx
import { jsx as jsx56 } from "react/jsx-runtime";
var propsContext = createContext8({});
function PropsProvider(props) {
  return /* @__PURE__ */ jsx56(propsContext.Provider, { value: props, children: props.children });
}
var usePropsContext = () => useContext15(propsContext);
function PuckProvider({ children }) {
  const {
    config,
    data: initialData,
    ui: initialUi,
    onChange,
    permissions = {},
    plugins,
    overrides,
    viewports = defaultViewports,
    iframe: _iframe,
    initialHistory: _initialHistory,
    metadata,
    onAction,
    fieldTransforms,
    _experimentalFullScreenCanvas,
    _experimentalVirtualization
  } = usePropsContext();
  const iframe = useMemo25(
    () => normalizeIframeConfig(_iframe),
    [_iframe]
  );
  const [generatedAppState] = useState25(() => {
    var _a, _b, _c;
    const initial = __spreadValues(__spreadValues({}, defaultAppState.ui), initialUi);
    let clientUiState = {};
    if (Object.keys((initialData == null ? void 0 : initialData.root) || {}).length > 0 && !((_a = initialData == null ? void 0 : initialData.root) == null ? void 0 : _a.props)) {
      console.warn(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }
    const rootProps = ((_b = initialData == null ? void 0 : initialData.root) == null ? void 0 : _b.props) || (initialData == null ? void 0 : initialData.root) || {};
    const defaultedRootProps = __spreadValues(__spreadValues({}, (_c = config.root) == null ? void 0 : _c.defaultProps), rootProps);
    const root = populateIds(
      toComponent(__spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: defaultedRootProps })),
      config
    );
    const newAppState = __spreadProps(__spreadValues({}, defaultAppState), {
      data: __spreadProps(__spreadValues({}, initialData), {
        root: __spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: root.props }),
        content: initialData.content || []
      }),
      ui: __spreadProps(__spreadValues(__spreadValues({}, initial), clientUiState), {
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories ? Object.entries(config.categories).reduce(
          (acc, [categoryName, category]) => {
            return __spreadProps(__spreadValues({}, acc), {
              [categoryName]: {
                title: category.title,
                components: category.components,
                expanded: category.defaultExpanded,
                visible: category.visible
              }
            });
          },
          {}
        ) : {}
      })
    });
    return walkAppState(newAppState, config);
  });
  const { appendData = true } = _initialHistory || {};
  const [blendedHistories] = useState25(
    [
      ...(_initialHistory == null ? void 0 : _initialHistory.histories) || [],
      ...appendData ? [{ state: generatedAppState }] : []
    ].map((history) => {
      let newState = __spreadValues(__spreadValues({}, generatedAppState), history.state);
      if (!history.state.indexes) {
        newState = walkAppState(newState, config);
      }
      return __spreadProps(__spreadValues({}, history), {
        state: newState
      });
    })
  );
  const initialHistoryIndex = useMemo25(() => {
    if ((_initialHistory == null ? void 0 : _initialHistory.index) !== void 0 && (_initialHistory == null ? void 0 : _initialHistory.index) >= 0 && (_initialHistory == null ? void 0 : _initialHistory.index) < blendedHistories.length) {
      return _initialHistory == null ? void 0 : _initialHistory.index;
    }
    return blendedHistories.length - 1;
  }, []);
  const initialAppState = blendedHistories[initialHistoryIndex].state;
  const loadedOverrides = useLoadedOverrides({
    overrides,
    plugins
  });
  const loadedFieldTransforms = useMemo25(() => {
    const _plugins = plugins || [];
    const pluginFieldTransforms = _plugins.reduce(
      (acc, plugin) => __spreadValues(__spreadValues({}, acc), plugin.fieldTransforms),
      {}
    );
    return __spreadValues(__spreadValues({}, pluginFieldTransforms), fieldTransforms);
  }, [fieldTransforms, plugins]);
  const instanceId = useSafeId();
  const generateAppStore = useCallback23(
    (state) => {
      return {
        instanceId,
        state,
        config,
        plugins: plugins || [],
        overrides: loadedOverrides,
        viewports,
        iframe,
        _experimentalFullScreenCanvas: !!_experimentalFullScreenCanvas,
        _experimentalVirtualization: !!_experimentalVirtualization,
        onAction,
        metadata,
        fieldTransforms: loadedFieldTransforms
      };
    },
    [
      instanceId,
      initialAppState,
      config,
      plugins,
      loadedOverrides,
      viewports,
      iframe,
      _experimentalFullScreenCanvas,
      _experimentalVirtualization,
      onAction,
      metadata,
      loadedFieldTransforms
    ]
  );
  const [appStore] = useState25(
    () => createAppStore(generateAppStore(initialAppState))
  );
  useEffect29(() => {
    if (process.env.NODE_ENV !== "production") {
      window.__PUCK_INTERNAL_DO_NOT_USE = { appStore };
    }
  }, [appStore]);
  useEffect29(() => {
    const state = appStore.getState().state;
    appStore.setState(__spreadValues({}, generateAppStore(state)));
  }, [generateAppStore]);
  useRegisterHistorySlice(appStore, {
    histories: blendedHistories,
    index: initialHistoryIndex,
    initialAppState
  });
  const previousData = useRef16(null);
  useEffect29(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      (data) => {
        if (onChange) {
          if (deepEqual2(data, previousData.current)) return;
          onChange(data);
          previousData.current = data;
        }
      }
    );
  }, [onChange]);
  useRegisterPermissionsSlice(appStore, permissions);
  const uPuckStore = useRegisterUsePuckStore(appStore);
  useEffect29(() => {
    const { resolveAndCommitData } = appStore.getState();
    setTimeout(() => {
      resolveAndCommitData();
    }, 0);
  }, []);
  return /* @__PURE__ */ jsx56(appStoreContext.Provider, { value: appStore, children: /* @__PURE__ */ jsx56(UsePuckStoreContext.Provider, { value: uPuckStore, children }) });
}
function Puck(props) {
  return /* @__PURE__ */ jsx56(PropsProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx56(PuckProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx56(Layout, { children: props.children }) })) }));
}
Puck.Components = Components;
Puck.Fields = Fields;
Puck.Layout = Layout;
Puck.Outline = Outline;
Puck.Preview = Preview2;

// plugins/legacy-side-bar/index.tsx
import { jsx as jsx57, jsxs as jsxs24 } from "react/jsx-runtime";
var legacySideBarPlugin = () => ({
  name: "legacy-side-bar",
  render: () => /* @__PURE__ */ jsxs24("div", { style: { overflowY: "auto" }, children: [
    /* @__PURE__ */ jsx57(SidebarSection, { title: "Components", noBorderTop: true, children: /* @__PURE__ */ jsx57(Components, {}) }),
    /* @__PURE__ */ jsx57(SidebarSection, { title: "Outline", children: /* @__PURE__ */ jsx57(Outline, {}) })
  ] })
});

export {
  overrideKeys,
  setDeep,
  Button,
  FieldLabel,
  AutoField,
  renderContext,
  Render,
  registerOverlayPortal,
  DropZone,
  Drawer,
  createUsePuck,
  usePuck,
  useGetPuck,
  blocksPlugin,
  outlinePlugin,
  fieldsPlugin,
  Puck,
  legacySideBarPlugin
};
