# @ehfuse/chip-tab

A lightweight, customizable React tab component with drag-and-drop, scroll navigation, and cookie persistence.

## Features

-   🎨 Fully customizable styles
-   🖱️ Drag-and-drop reordering
-   ⬅️➡️ Smart scroll navigation
-   🍪 Cookie persistence for tabs and selection
-   ⚡ Lightweight (~9KB minified)
-   📦 Zero CSS dependencies
-   ♿ Accessible and keyboard-friendly

## Installation

```bash
npm install @ehfuse/chip-tab
```

Required peer dependencies:

```bash
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @dnd-kit/modifiers
```

## Quick Start

```tsx
import { ChipTab } from "@ehfuse/chip-tab";

function App() {
    const tabs = [
        { key: "tab1", label: "Tab 1" },
        { key: "tab2", label: "Tab 2" },
        { key: "tab3", label: "Tab 3" },
    ];

    return (
        <ChipTab
            tabs={tabs}
            defaultSelected="tab1"
            onChange={(event) => console.log("Selected:", event.selectedIndex)}
        />
    );
}
```

## Documentation

-   🇰🇷 **한글 문서 (Korean)**

    -   [시작하기](./docs/ko/getting-started.md)
    -   [API 레퍼런스](./docs/ko/api.md)
    -   [예제](./docs/ko/example.md)

-   🇺🇸 **English Documentation**
    -   [Getting Started](./docs/en/getting-started.md)
    -   [API Reference](./docs/en/api.md)
    -   [Examples](./docs/en/example.md)

## License

MIT © [ehfuse](https://github.com/ehfuse)
