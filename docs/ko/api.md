# API 레퍼런스

## 목차

-   [ChipTabs Props](#chiptab-props)
    -   [필수 Props](#필수-props)
    -   [선택적 Props](#선택적-props)
-   [이벤트 핸들러](#이벤트-핸들러)
-   [타입 정의](#타입-정의)
-   [쿠키 동작 방식](#쿠키-동작-방식)
-   [브라우저 호환성](#브라우저-호환성)

---

## ChipTabs Props

### Props 목록

| Prop                                        | 타입                                           | 기본값  | 필수 | 설명                                 |
| ------------------------------------------- | ---------------------------------------------- | ------- | ---- | ------------------------------------ |
| [`tabs`](#tabs--필수)                       | `ChipTabProps[]`                                   | -       | ✅   | 표시할 탭 목록                       |
| [`selectedKey`](#selectedkey)               | `string`                                       | -       | -    | 현재 선택된 탭의 key (제어 컴포넌트) |
| [`defaultSelected`](#defaultselected)       | `string`                                       | -       | -    | 초기 선택 탭 (비제어 컴포넌트)       |
| [`wrap`](#wrap)                             | `boolean`                                      | `true`  | -    | 여러 줄 줄바꿈 여부                  |
| [`showCloseButton`](#showclosebutton)       | `boolean`                                      | `false` | -    | 닫기 버튼 표시 여부                  |
| [`showArrows`](#showarrows)                 | `boolean`                                      | `true`  | -    | 스크롤 화살표 활성화 여부            |
| [`draggable`](#draggable)                   | `boolean`                                      | `false` | -    | 드래그 앤 드롭 활성화 여부           |
| [`keyboardNavigation`](#keyboardnavigation) | `boolean`                                      | `true`  | -    | 방향키로 탭 이동 활성화 여부         |
| [`selectedCookieName`](#selectedcookiename) | `string`                                       | -       | -    | 선택된 탭 쿠키 저장 이름             |
| [`tabsCookieName`](#tabscookiename)         | `string`                                       | -       | -    | 탭 목록 쿠키 저장 이름               |
| [`className`](#classname)                   | `string`                                       | -       | -    | 최상위 컨테이너 CSS 클래스           |
| [`styles`](#styles)                         | `ChipTabsStyles`                                | -       | -    | 커스텀 스타일 객체                   |
| [`onChange`](#onchange)                     | `(event: ChangeEvent) => void`                 | -       | -    | 탭 선택 변경 핸들러                  |
| [`onClose`](#onclose)                       | `(key: string) => boolean \| Promise<boolean>` | -       | -    | 닫기 버튼 클릭 핸들러                |
| [`onReorder`](#onreorder)                   | `(event: ReorderEvent) => void`                | -       | -    | 탭 순서 변경 핸들러                  |

### 상세 설명

#### `tabs` ✅ 필수

표시할 탭 목록입니다.

```tsx
interface ChipTabProps {
    key: string; // 탭의 고유 식별자
    label: string; // 탭에 표시될 텍스트
    icon?: ReactNode; // 선택적 아이콘
    hideCloseButton?: boolean; // 이 탭의 닫기 버튼 숨김 여부
}
```

#### `selectedKey`

현재 선택된 탭의 key입니다. 제어 컴포넌트로 사용할 때 필요합니다.

```tsx
const [selected, setSelected] = useState("tab1");

<ChipTabs
    tabs={tabs}
    selectedKey={selected}
    onChange={(event) => setSelected(tabs[event.selectedIndex].key)}
/>;
```

#### `defaultSelected`

초기 선택 탭입니다. 비제어 컴포넌트로 사용할 때 필요합니다.

```tsx
<ChipTabs tabs={tabs} defaultSelected="tab1" />
```

#### `wrap`

`true`이면 탭들이 여러 줄로 줄바꿈되고, `false`이면 가로 스크롤이 가능합니다.

```tsx
<ChipTabs tabs={tabs} wrap={false} />
```

#### `showCloseButton`

모든 탭에 닫기 버튼을 표시할지 여부입니다.

```tsx
<ChipTabs tabs={tabs} showCloseButton={true} />
```

#### `showArrows`

스크롤 화살표 활성화 여부입니다. `false`이면 비활성화 시 희미하게 표시됩니다.

```tsx
<ChipTabs tabs={tabs} wrap={false} showArrows={true} />
```

#### `draggable`

드래그 앤 드롭으로 탭 순서를 변경할 수 있는지 여부입니다.

```tsx
<ChipTabs tabs={tabs} draggable={true} />
```

#### `keyboardNavigation`

방향키(← →)로 탭을 이동할 수 있는지 여부입니다. 활성화 시 컨테이너에 포커스가 가능하며, 선택된 탭이 화면을 벗어나면 자동으로 스크롤됩니다.

```tsx
// 기본값: 활성화
<ChipTabs tabs={tabs} />

// 비활성화
<ChipTabs tabs={tabs} keyboardNavigation={false} />
```

#### `selectedCookieName`

설정 시 선택된 탭의 key를 쿠키에 자동으로 저장/불러오기합니다.

```tsx
<ChipTabs tabs={tabs} selectedCookieName="my-app-selected-tab" />
```

> **중요**: 쿠키가 존재하면 `selectedKey`와 `defaultSelected` props는 무시됩니다.

#### `tabsCookieName`

설정 시 tabs 배열을 쿠키에 자동으로 저장/불러오기합니다.

```tsx
<ChipTabs tabs={tabs} tabsCookieName="my-app-tabs" showCloseButton={true} />
```

> **중요**: 쿠키가 존재하면 `tabs` prop은 무시됩니다. 사용자가 닫거나 재정렬한 탭 목록이 유지됩니다.

#### `className`

최상위 컨테이너에 적용할 CSS 클래스명입니다.

```tsx
<ChipTabs tabs={tabs} className="my-custom-tabs" />
```

#### `styles`

탭 스타일을 커스터마이징하는 객체입니다.

```tsx
interface ChipTabsStyles {
    // 기본 스타일
    height?: string | number;
    fontSize?: string | number;
    borderRadius?: string | number;
    borderWidth?: string | number;
    paddingX?: string | number;
    paddingY?: string | number;
    gap?: string | number;

    // 탭 상태별 스타일
    defaultTab?: ChipTabStateStyles;
    selectedTab?: ChipTabStateStyles;
    hoverTab?: Omit<ChipTabStateStyles, "fontWeight">;

    // 닫기 버튼 스타일
    closeButton?: CloseButtonStyles;
    closeButtonSelected?: CloseButtonStyles;

    // 추가 커스텀 스타일
    customStyles?: CSSProperties;
}

interface ChipTabStateStyles {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
    fontWeight?: string | number;
}

interface CloseButtonStyles {
    size?: string | number;
    hoverBgColor?: string;
}
```

예제:

```tsx
<ChipTabs
    tabs={tabs}
    styles={{
        height: "48px",
        fontSize: "16px",
        borderRadius: "24px",
        paddingX: "20px",
        gap: "8px",
        selectedTab: {
            backgroundColor: "#3b82f6",
            textColor: "#ffffff",
            borderColor: "#3b82f6",
            fontWeight: 600,
        },
        defaultTab: {
            backgroundColor: "#f9fafb",
            textColor: "#374151",
            borderColor: "#e5e7eb",
        },
        hoverTab: {
            backgroundColor: "#f3f4f6",
            borderColor: "#d1d5db",
        },
        closeButton: {
            size: "16px",
            hoverBgColor: "#fee2e2",
        },
    }}
/>
```

## 이벤트 핸들러

### `onChange`

-   **타입**: `(event: ChangeEvent) => void`
-   **설명**: 탭 선택이 변경될 때 호출

```tsx
interface ChangeEvent {
    selectedIndex: number; // 새로 선택된 탭의 인덱스
    previousIndex: number; // 이전에 선택되었던 탭의 인덱스
}
```

예제:

```tsx
<ChipTabs
    tabs={tabs}
    onChange={(event) => {
        const selectedTab = tabs[event.selectedIndex];
        console.log(
            `${tabs[event.previousIndex].label} → ${selectedTab.label}`
        );
    }}
/>
```

### `onClose`

-   **타입**: `(key: string) => boolean | Promise<boolean>`
-   **설명**: 닫기 버튼 클릭 시 호출. `true`를 반환하면 탭이 제거됨

```tsx
<ChipTabs
  tabs={tabs}
  showCloseButton={true}
  onClose={(key) => {
    // 동기
    return window.confirm(`${key} 탭을 닫으시겠습니까?`);
  }}
/>

// 또는 비동기
<ChipTabs
  tabs={tabs}
  showCloseButton={true}
  onClose={async (key) => {
    const confirmed = await showCustomDialog();
    return confirmed;
  }}
/>
```

### `onReorder`

-   **타입**: `(event: ReorderEvent) => void`
-   **설명**: 드래그 앤 드롭으로 탭 순서가 변경될 때 호출

```tsx
interface ReorderEvent {
    fromIndex: number; // 이동 전 인덱스
    toIndex: number; // 이동 후 인덱스
}
```

예제:

```tsx
const [tabs, setTabs] = useState(initialTabs);

<ChipTabs
    tabs={tabs}
    draggable={true}
    onReorder={(event) => {
        const newTabs = [...tabs];
        const [movedTab] = newTabs.splice(event.fromIndex, 1);
        newTabs.splice(event.toIndex, 0, movedTab);
        setTabs(newTabs);
    }}
/>;

### `onLoaded`

- **타입**: `(tabs: ChipTabProps[], selectedKey: string) => void`
- **설명**: 컴포넌트가 마운트될 때(최초 로드) 쿠키(`tabsCookieName` 또는 `selectedCookieName`)에서 초기 상태를 읽은 직후 한 번 호출됩니다. 콜백은 컴포넌트가 내부 상태 초기화에 사용한 탭 배열과 선택된 키를 인자로 받습니다. 쿠키가 props를 덮어쓸 때 상위 컴포넌트의 상태를 동기화하거나, 쿠키 로딩으로 인한 UI 깜빡임을 방지하기 위해 사용하세요.

예제:

```tsx
<ChipTabs
    tabs={initialTabs}
    tabsCookieName="my-app-tabs"
    selectedCookieName="my-app-selected-tab"
    onLoaded={(cookieTabs, cookieSelectedKey) => {
        // cookieTabs: 컴포넌트가 쿠키 로드 후 사용하게 될 탭 배열
        // cookieSelectedKey: 컴포넌트가 사용하게 될 선택된 키
        setTabs(cookieTabs);
        setSelected(cookieSelectedKey);
    }}
/>
```

> **참고**: `tabsCookieName`을 사용하면 컴포넌트가 쿠키를 읽는 동안 내부 `tabs` 상태가 빈 배열로 시작할 수 있습니다. 이 때 `onLoaded`로 부모 상태를 갱신하면 레이아웃 깜빡임을 방지할 수 있습니다.
```

## 타입 정의

모든 타입은 패키지에서 export되어 있습니다:

```tsx
import type {
    ChipTabsProps,
    ChipTabProps,
    ChipTabsStyles,
    ChipTabStateStyles,
    CloseButtonStyles,
    ChangeEvent,
    ReorderEvent,
} from "@ehfuse/chip-tabs";
```

## 쿠키 동작 방식

### `selectedCookieName`

1. **초기 로드 시**:

    - 쿠키에 값이 있으면 → 쿠키의 값 사용
    - 쿠키가 없으면 → `selectedKey` 또는 `defaultSelected` 사용

2. **탭 선택 변경 시**:

    - 새로운 선택을 쿠키에 자동 저장

3. **이후 로드 시**:
    - 쿠키 값이 우선, `selectedKey`와 `defaultSelected`는 무시됨

### `tabsCookieName`

1. **초기 로드 시**:

    - 쿠키에 값이 있으면 → 쿠키의 tabs 배열 사용
    - 쿠키가 없으면 → `tabs` prop 사용

2. **탭 추가/제거/재정렬 시**:

    - 변경된 tabs 배열을 쿠키에 자동 저장

3. **이후 로드 시**:
    - 쿠키의 tabs가 우선, `tabs` prop은 무시됨

> ⚠️ **주의**: `tabsCookieName`을 사용할 때는 사용자가 탭을 모두 닫아버릴 수 있으므로, 최소 하나의 탭은 `hideCloseButton: true`로 설정하는 것을 권장합니다.

## 브라우저 호환성

-   React 18+
-   모던 브라우저 (Chrome, Firefox, Safari, Edge)
-   CSS Flexbox 지원 필요
-   Cookie 지원 필요 (쿠키 기능 사용 시)

---

## 관련 문서

| 📚 문서                          | 설명                     |
| -------------------------------- | ------------------------ |
| [시작하기](./getting-started.md) | 설치 및 기본 사용법      |
| **API 레퍼런스**                 | Props, 이벤트, 타입 정의 |
| [예제](./example.md)             | 실전 예제 모음           |
