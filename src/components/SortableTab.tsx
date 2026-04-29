import React, { CSSProperties } from "react";
import type { ChipTabProps } from "../types";
import { CloseIcon, EditIcon } from "../icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableTabProps {
    tag: ChipTabProps;
    isSelected: boolean;
    isTabHovered: boolean;
    isCloseHovered: boolean;
    showCloseButton: boolean;
    tabTrailingAction: "close" | "edit";
    tabStyle: CSSProperties;
    closeButtonStyle: CSSProperties;
    onTabClick: () => void;
    onTabMouseEnter: () => void;
    onTabMouseLeave: () => void;
    onCloseClick: (e: React.MouseEvent) => void;
    onEditClick: (e: React.SyntheticEvent) => void;
    onCloseMouseEnter: () => void;
    onCloseMouseLeave: () => void;
    setButtonRef: (el: HTMLDivElement | null, key: string) => void;
    draggable?: boolean;
}

export function SortableTab({
    tag,
    isSelected,
    showCloseButton,
    tabTrailingAction,
    tabStyle,
    closeButtonStyle,
    onTabClick,
    onTabMouseEnter,
    onTabMouseLeave,
    onCloseClick,
    onEditClick,
    onCloseMouseEnter,
    onCloseMouseLeave,
    setButtonRef,
    draggable = false,
}: SortableTabProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: tag.key, disabled: !draggable });

    const style: CSSProperties = {
        ...tabStyle,
        transform: CSS.Transform.toString(transform),
        transition: transition,
        opacity: isDragging ? 0.5 : 1,
        cursor: draggable ? "grab" : tabStyle.cursor,
    };

    return (
        <div
            ref={(el) => {
                setNodeRef(el);
                setButtonRef(el, tag.key);
            }}
            style={style}
            onClick={onTabClick}
            onMouseEnter={onTabMouseEnter}
            onMouseLeave={onTabMouseLeave}
            data-selected={isSelected ? "true" : "false"}
            {...(draggable ? { ...attributes, ...listeners } : {})}
        >
            {tag.icon && (
                <span style={{ marginRight: "0.25rem" }}>{tag.icon}</span>
            )}
            <span>{tag.label}</span>
            {showCloseButton && !tag.hideCloseButton && (
                <span
                    role="button"
                    tabIndex={0}
                    aria-label={
                        tabTrailingAction === "edit"
                            ? `편집: ${tag.label}`
                            : `닫기: ${tag.label}`
                    }
                    style={closeButtonStyle}
                    onClick={
                        tabTrailingAction === "edit"
                            ? onEditClick
                            : onCloseClick
                    }
                    onKeyDown={(e) => {
                        if (e.key !== "Enter" && e.key !== " ") return;
                        e.preventDefault();
                        if (tabTrailingAction === "edit") {
                            onEditClick(e);
                        } else {
                            onCloseClick(
                                e as unknown as React.MouseEvent<HTMLSpanElement>,
                            );
                        }
                    }}
                    onMouseEnter={onCloseMouseEnter}
                    onMouseLeave={onCloseMouseLeave}
                >
                    {tabTrailingAction === "edit" ? (
                        <EditIcon />
                    ) : (
                        <CloseIcon />
                    )}
                </span>
            )}
        </div>
    );
}
