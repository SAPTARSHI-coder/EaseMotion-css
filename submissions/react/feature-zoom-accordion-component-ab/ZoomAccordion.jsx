import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import "./style.css";

/**
 * ZoomAccordion — React accordion with a smooth zoom attention effect on expand.
 * Issue #50774 · submissions/react/feature-zoom-accordion-component-ab
 *
 * Supports:
 * 1) Simple single panel: <ZoomAccordion title="FAQ">Hello</ZoomAccordion>
 * 2) Multi panel via `items` prop
 *
 * @param {object} props
 * @param {React.ReactNode} [props.children] - Panel body (single-item mode)
 * @param {string} [props.title='Details'] - Header label (single-item mode)
 * @param {Array<{id?: string, title: string, content: React.ReactNode, defaultOpen?: boolean}>} [props.items]
 * @param {boolean} [props.allowMultiple=false] - Allow multiple panels open
 * @param {'soft'|'medium'|'strong'} [props.intensity='medium'] - Zoom intensity
 * @param {boolean} [props.defaultOpen=false] - Open the first/single panel by default
 * @param {string} [props.className=''] - Extra class names
 * @param {string} [props.label] - Accessible name for the accordion region
 */
export default function ZoomAccordion({
  children = "Hello",
  title = "Details",
  items,
  allowMultiple = false,
  intensity = "medium",
  defaultOpen = false,
  className = "",
  label = "Zoom accordion",
  ...rest
}) {
  const reactId = useId();
  const [reducedMotion, setReducedMotion] = useState(false);

  const panels = useMemo(() => {
    if (Array.isArray(items) && items.length > 0) {
      return items.map((item, index) => ({
        id: String(item.id ?? `${reactId}-item-${index}`),
        title: item.title,
        content: item.content,
        defaultOpen: Boolean(item.defaultOpen),
      }));
    }

    return [
      {
        id: `${reactId}-single`,
        title,
        content: children,
        defaultOpen,
      },
    ];
  }, [items, children, title, defaultOpen, reactId]);

  const initialOpen = useMemo(() => {
    const openIds = panels.filter((panel) => panel.defaultOpen).map((p) => p.id);
    if (openIds.length > 0) return openIds;
    if (defaultOpen && panels[0]) return [panels[0].id];
    return [];
  }, [panels, defaultOpen]);

  const [openIds, setOpenIds] = useState(initialOpen);
  const [zoomingIds, setZoomingIds] = useState(initialOpen);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }

    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) setZoomingIds([]);
  }, [reducedMotion]);

  const isOpen = useCallback(
    (id) => openIds.includes(id),
    [openIds]
  );

  const toggle = useCallback(
    (id) => {
      const alreadyOpen = openIds.includes(id);

      if (allowMultiple) {
        if (alreadyOpen) {
          setOpenIds((current) => current.filter((value) => value !== id));
          setZoomingIds((current) => current.filter((value) => value !== id));
          return;
        }

        setOpenIds((current) => [...current, id]);
        if (!reducedMotion) {
          setZoomingIds((current) => [
            ...current.filter((value) => value !== id),
            id,
          ]);
        }
        return;
      }

      if (alreadyOpen) {
        setOpenIds([]);
        setZoomingIds([]);
        return;
      }

      setOpenIds([id]);
      if (!reducedMotion) setZoomingIds([id]);
    },
    [allowMultiple, openIds, reducedMotion]
  );

  const clearZoom = useCallback((id) => {
    setZoomingIds((current) => current.filter((value) => value !== id));
  }, []);

  const onHeaderKeyDown = useCallback(
    (event, id) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle(id);
      }
    },
    [toggle]
  );

  const rootClass = [
    "zoom-accordion-ab",
    `zoom-accordion-intensity-${intensity}-ab`,
    reducedMotion ? "is-reduced-motion-ab" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      role="region"
      aria-label={label}
      {...rest}
    >
      {panels.map((panel) => {
        const open = isOpen(panel.id);
        const headerId = `${panel.id}-header`;
        const panelId = `${panel.id}-panel`;

        const zooming = zoomingIds.includes(panel.id);

        return (
          <div
            key={panel.id}
            className={[
              "zoom-accordion-item-ab",
              open ? "is-open-ab" : "",
              zooming ? "is-zooming-ab" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onAnimationEnd={(event) => {
              if (event.target !== event.currentTarget) return;
              if (event.animationName.indexOf("zoom-accordion-shell-ab") === -1) {
                return;
              }
              clearZoom(panel.id);
            }}
          >
            <h3 className="zoom-accordion-heading-ab">
              <button
                type="button"
                id={headerId}
                className="zoom-accordion-trigger-ab"
                aria-expanded={open ? "true" : "false"}
                aria-controls={panelId}
                onClick={() => toggle(panel.id)}
                onKeyDown={(event) => onHeaderKeyDown(event, panel.id)}
              >
                <span className="zoom-accordion-title-ab">{panel.title}</span>
                <span className="zoom-accordion-icon-ab" aria-hidden="true">
                  {open ? "−" : "+"}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!open}
              className="zoom-accordion-panel-ab"
            >
              <div className="zoom-accordion-panel-inner-ab">
                {panel.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Optional demo helper with sample FAQ items.
 */
export function ZoomAccordionDemoAb() {
  return (
    <div className="zoom-accordion-demo-ab">
      <ZoomAccordion
        allowMultiple={false}
        intensity="medium"
        label="EaseMotion FAQ"
        items={[
          {
            id: "what",
            title: "What is EaseMotion CSS?",
            content:
              "A zero-dependency, animation-first CSS framework with human-readable class names.",
            defaultOpen: true,
          },
          {
            id: "zoom",
            title: "Why a zoom accordion?",
            content:
              "The zoom attention cue highlights the opened panel without needing a loud looping animation.",
          },
          {
            id: "a11y",
            title: "Is it accessible?",
            content:
              "Yes — real buttons, aria-expanded / aria-controls, and reduced-motion support.",
          },
        ]}
      />
    </div>
  );
}
