# 시작하기

## 설치

```bash
npm install @ehfuse/chip-tab
```

### Peer Dependencies

ChipTab은 드래그 앤 드롭 기능을 위해 `@dnd-kit` 라이브러리를 사용합니다. 다음 패키지들을 함께 설치해야 합니다:

```bash
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities @dnd-kit/modifiers
```

## 기본 사용법

```tsx
import { ChipTab } from "@ehfuse/chip-tab";

function App() {
    const tabs = [
        { key: "home", label: "홈" },
        { key: "about", label: "소개" },
        { key: "contact", label: "연락처" },
    ];

    return (
        <ChipTab
            tabs={tabs}
            defaultSelected="home"
            onChange={(event) => {
                console.log("선택된 탭:", event.selectedIndex);
            }}
        />
    );
}
```

## 주요 기능

### 1. Wrap 모드 (기본값)

기본적으로 탭들은 여러 줄로 자동 줄바꿈됩니다:

```tsx
<ChipTab tabs={tabs} wrap={true} />
```

### 2. Scroll 모드

`wrap={false}`로 설정하면 좌우 스크롤이 가능한 한 줄 탭이 됩니다:

```tsx
<ChipTab tabs={tabs} wrap={false} />
```

스크롤 화살표가 자동으로 표시되며, 클릭 시 정확히 한 탭씩 이동합니다.

### 3. Close 버튼

탭에 닫기 버튼을 추가할 수 있습니다:

```tsx
<ChipTab
    tabs={tabs}
    showCloseButton={true}
    onClose={(key) => {
        // true를 반환하면 탭이 제거됩니다
        return window.confirm(`${key} 탭을 닫으시겠습니까?`);
    }}
/>
```

특정 탭만 닫기 버튼을 숨길 수도 있습니다:

```tsx
const tabs = [
    { key: "home", label: "홈", hideCloseButton: true },
    { key: "about", label: "소개" },
];
```

### 4. 드래그 앤 드롭

`draggable={true}`로 설정하면 탭 순서를 드래그로 변경할 수 있습니다:

```tsx
<ChipTab
    tabs={tabs}
    draggable={true}
    onReorder={(event) => {
        console.log(`${event.fromIndex} → ${event.toIndex}`);
        // 탭 순서를 업데이트하는 로직
    }}
/>
```

### 5. 쿠키 저장

선택된 탭이나 탭 목록을 쿠키에 자동으로 저장할 수 있습니다:

```tsx
// 선택된 탭만 저장
<ChipTab
  tabs={tabs}
  selectedCookieName="my-selected-tab"
/>

// 탭 목록과 선택 모두 저장
<ChipTab
  tabs={tabs}
  selectedCookieName="my-selected-tab"
  tabsCookieName="my-tabs"
  showCloseButton={true}
/>
```

페이지를 새로고침해도 사용자가 선택/편집한 탭 상태가 유지됩니다.

### 6. 아이콘 추가

각 탭에 아이콘을 추가할 수 있습니다:

```tsx
import { HomeIcon, UserIcon } from "./icons";

const tabs = [
    { key: "home", label: "홈", icon: <HomeIcon /> },
    { key: "profile", label: "프로필", icon: <UserIcon /> },
];

<ChipTab tabs={tabs} />;
```

### 7. 커스텀 스타일

탭의 스타일을 세밀하게 커스터마이징할 수 있습니다:

```tsx
<ChipTab
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

## 다음 단계

-   [API 레퍼런스](./api.md)에서 모든 props와 이벤트를 확인하세요
-   [예제](./example.md)에서 더 많은 사용 사례를 살펴보세요

---

## 관련 문서

| 📚 문서                  | 설명                     |
| ------------------------ | ------------------------ |
| **시작하기**             | 설치 및 기본 사용법      |
| [API 레퍼런스](./api.md) | Props, 이벤트, 타입 정의 |
| [예제](./example.md)     | 실전 예제 모음           |
