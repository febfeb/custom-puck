import { useComponentList } from "../../../../lib/use-component-list";
import { useAppStore } from "../../../../store";
import { ComponentList } from "../../../ComponentList";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import styles from "./styles.module.css";
import getClassNameFactory from "../../../../lib/get-class-name-factory";

const getClassName = getClassNameFactory("Components", styles);

export const Components = () => {
  const overrides = useAppStore((s) => s.overrides);

  const [searchQuery, setSearchQuery] = useState("");

  const componentList = useComponentList(searchQuery);

  const Wrapper = useMemo(() => {
    // DEPRECATED
    if (overrides.components) {
      console.warn(
        "The `components` override has been deprecated and renamed to `drawer`"
      );
    }
    return overrides.components || overrides.drawer || "div";
  }, [overrides]);

  return (
    <div className={getClassName()}>
      <div className={getClassName("search")}>
        <span className={getClassName("searchIcon")}>
          <Search size={14} />
        </span>
        <input
          className={getClassName("searchInput")}
          type="search"
          placeholder="Search components"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          aria-label="Search components"
        />
        {searchQuery && (
          <button
            type="button"
            className={getClassName("searchClear")}
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
            title="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>
      <div className={getClassName("list")}>
        <Wrapper>
          {componentList ? (
            componentList
          ) : (
            <ComponentList id="all" searchQuery={searchQuery} />
          )}
        </Wrapper>
      </div>
    </div>
  );
};
