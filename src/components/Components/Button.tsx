import React from "react"

interface Props {
    border?: string
    color?: string
    backgroundColor?: string
    children?: React.ReactNode
    height?: string
    onClick: () => void
    radius?: string
    width?: string
    padding?: string
}

const Button: React.FC<Props> = ({
    border,
    color,
    backgroundColor,
    children,
    height,
    onClick,
    radius,
    width,
    padding,
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor,
                color,
                border,
                borderRadius: radius,
                height,
                width,
                padding,
            }}>
            {children}
        </button>
    )
}

export default Button
