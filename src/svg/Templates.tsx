import { SVGProps } from "react"

const Templates: React.FC<SVGProps<SVGSVGElement>> = ({ stroke }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 3.29419V15.5295C8 16.5691 8.84276 17.4118 9.88235 17.4118H22.1176"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.4118 22.1176V9.88235C17.4118 8.84276 16.5691 8 15.5295 8H3.29419"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Templates
