# Getting Started

| 📚 Documentation          | Description                     |
| ------------------------- | ------------------------------- |
| **Getting Started**       | Installation and basic usage    |
| [API Reference](./api.md) | Props, events, type definitions |
| [Examples](./example.md)  | Practical examples              |

---

## Installation

```bash
npm install @ehfuse/chip-tabs
```

### Peer Dependencies

ChipTabs uses `@dnd-kit` libraries for drag-and-drop functionality. Install these packages together:

```bash
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @dnd-kit/modifiers
```

## Basic Usage

```tsx
import { ChipTabs } from "@ehfuse/chip-tabs";

function App() {
    const tabs = [
        { key: "home", label: "Home" },
        { key: "about", label: "About" },
        { key: "contact", label: "Contact" },
    ];

    return (
        <ChipTabs
            tabs={tabs}
            defaultSelected="home"
            onChange={(event) => {
                console.log("Selected tab:", event.selectedIndex);
            }}
        />
    );
}
```

## Key Features

### 1. Wrap Mode (Default)

By default, tabs wrap to multiple lines:

```tsx
<ChipTabs tabs={tabs} wrap={true} />
```

### 2. Scroll Mode

Set `wrap={false}` for horizontal scrolling tabs:

```tsx
<ChipTabs tabs={tabs} wrap={false} />
```

Scroll arrows appear automatically and scroll by exactly one tab width when clicked.

### 3. Close Button

Add close buttons to tabs:

```tsx
<ChipTabs
    tabs={tabs}
    showCloseButton={true}
    onClose={(key) => {
        // Return true to remove the tab
        return window.confirm(`Close ${key} tab?`);
    }}
/>
```

Hide close button for specific tabs:

```tsx
const tabs = [
    { key: "home", label: "Home", hideCloseButton: true },
    { key: "about", label: "About" },
];
```

### 4. Drag and Drop

Enable drag-and-drop with `draggable={true}`:

```tsx
<ChipTabs
    tabs={tabs}
    draggable={true}
    onReorder={(event) => {
        console.log(`${event.fromIndex} → ${event.toIndex}`);
        // Update tab order logic
    }}
/>
```

### 5. Cookie Persistence

Automatically save selected tab or tab list to cookies:

```tsx
// Save selected tab only
<ChipTabs
  tabs={tabs}
  selectedCookieName="my-selected-tab"
/>

// Save both tabs and selection
<ChipTabs
  tabs={tabs}
  selectedCookieName="my-selected-tab"
  tabsCookieName="my-tabs"
  showCloseButton={true}
/>
```

User's tab state persists across page refreshes.

### 6. Icons

Add icons to each tab:

```tsx
import { HomeIcon, UserIcon } from "./icons";

const tabs = [
    { key: "home", label: "Home", icon: <HomeIcon /> },
    { key: "profile", label: "Profile", icon: <UserIcon /> },
];

<ChipTabs tabs={tabs} />;
```

### 7. Custom Styling

Fully customize tab styles:

```tsx
<ChipTabs
    tabs={tabs}
    styles={{
        height: "40px",
        fontSize: "14px",
        borderRadius: "20px",
        gap: "12px",
        selectedTab: {
            backgroundColor: "#8b5cf6",
            textColor: "#ffffff",
            borderColor: "#8b5cf6",
        },
        hoverTab: {
            backgroundColor: "#f3f4f6",
        },
    }}
/>
```

## Next Steps

-   Check [API Reference](./api.md) for all props and events
-   Explore [Examples](./example.md) for more use cases

---

## Related Documentation

| 📚 Documentation          | Description                     |
| ------------------------- | ------------------------------- |
| **Getting Started**       | Installation and basic usage    |
| [API Reference](./api.md) | Props, events, type definitions |
| [Examples](./example.md)  | Practical examples              |
