import { ReactNode, useEffect, useState } from "react";
import { ComponentList } from "../components/ComponentList";
import { useAppStore } from "../store";

const matchesSearch = (haystack: string, needle: string) =>
  haystack.toLowerCase().includes(needle.toLowerCase());

export const useComponentList = (searchQuery: string = "") => {
  const [componentList, setComponentList] = useState<ReactNode[]>();
  const config = useAppStore((s) => s.config);
  const uiComponentList = useAppStore((s) => s.state.ui.componentList);

  useEffect(() => {
    if (Object.keys(uiComponentList).length > 0) {
      const matchedComponents: string[] = [];
      const trimmedQuery = searchQuery.trim();

      let _componentList: ReactNode[];

      _componentList = Object.entries(uiComponentList).map(
        ([categoryKey, category]) => {
          if (!category.components) {
            return null;
          }

          category.components.forEach((componentName) => {
            matchedComponents.push(componentName as string);
          });

          if (category.visible === false) {
            return null;
          }

          const filteredComponents = category.components.filter(
            (componentName) => {
              if (!trimmedQuery) return true;
              const componentConf = config.components[componentName] || {};
              const label = (componentConf["label"] ??
                componentName) as string;
              return (
                matchesSearch(label, trimmedQuery) ||
                matchesSearch(componentName as string, trimmedQuery)
              );
            }
          );

          if (trimmedQuery && filteredComponents.length === 0) {
            return null;
          }

          return (
            <ComponentList
              id={categoryKey}
              key={categoryKey}
              title={category.title || categoryKey}
            >
              {filteredComponents.map((componentName, i) => {
                const componentConf = config.components[componentName] || {};

                return (
                  <ComponentList.Item
                    key={componentName}
                    label={(componentConf["label"] ?? componentName) as string}
                    name={componentName as string}
                    index={i}
                  />
                );
              })}
            </ComponentList>
          );
        }
      );

      const remainingComponents = Object.keys(config.components).filter(
        (component) => matchedComponents.indexOf(component) === -1
      );

      const filteredRemaining = remainingComponents.filter((componentName) => {
        if (!trimmedQuery) return true;
        const componentConf = config.components[componentName] || {};
        const label = (componentConf["label"] ?? componentName) as string;
        return (
          matchesSearch(label, trimmedQuery) ||
          matchesSearch(componentName, trimmedQuery)
        );
      });

      if (
        filteredRemaining.length > 0 &&
        !uiComponentList.other?.components &&
        uiComponentList.other?.visible !== false
      ) {
        _componentList.push(
          <ComponentList
            id="other"
            key="other"
            title={uiComponentList.other?.title || "Other"}
          >
            {filteredRemaining.map((componentName, i) => {
              const componentConf = config.components[componentName] || {};

              return (
                <ComponentList.Item
                  key={componentName}
                  name={componentName as string}
                  label={(componentConf["label"] ?? componentName) as string}
                  index={i}
                />
              );
            })}
          </ComponentList>
        );
      }

      setComponentList(_componentList);
    }
  }, [config.categories, config.components, uiComponentList, searchQuery]);

  return componentList;
};
