import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { Options } from "./quartz/components/Explorer"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer(),
}

const filesFirst: Options["sortFn"] = (a, b) => {
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
    // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }
  // Files over folders
  if (!a.isFolder && b.isFolder) {
    return -1
  } else {
    return 1
  }
}

const filterFn: Options["filterFn"] = (node) => node.slugSegment !== "tags" && node.slugSegment !== "__Media" && node.slugSegment !== "__Draft"

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({sortFn: filesFirst, filterFn: filterFn}),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 1,
        fontSize: 1,
        linkDistance: 40,
        focusOnHover: false,
        removeTags: ["excalidraw"]
      },
      globalGraph: {
        scale: 0.7,
        linkDistance: 100,
        removeTags: ["excalidraw"],
        enableRadial: false
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({sortFn: filesFirst, filterFn: filterFn}),
  ],
  right: [],
}
