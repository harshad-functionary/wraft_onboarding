import { SVGProps } from "react"

const Variants: React.FC<SVGProps<SVGSVGElement>> = ({ stroke }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.7648 4.23535H5.17653C4.65673 4.23535 4.23535 4.65673 4.23535 5.17653V11.7648C4.23535 12.2846 4.65673 12.7059 5.17653 12.7059H11.7648C12.2846 12.7059 12.7059 12.2846 12.7059 11.7648V5.17653C12.7059 4.65673 12.2846 4.23535 11.7648 4.23535Z"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.706 16.4707H16.9413C16.6814 16.4707 16.4707 16.6814 16.4707 16.9413V20.706C16.4707 20.9659 16.6814 21.1766 16.9413 21.1766H20.706C20.9659 21.1766 21.1766 20.9659 21.1766 20.706V16.9413C21.1766 16.6814 20.9659 16.4707 20.706 16.4707Z"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.706 8H16.9413C16.6814 8 16.4707 8.21069 16.4707 8.47059V12.2353C16.4707 12.4952 16.6814 12.7059 16.9413 12.7059H20.706C20.9659 12.7059 21.1766 12.4952 21.1766 12.2353V8.47059C21.1766 8.21069 20.9659 8 20.706 8Z"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.2353 16.4707H8.47059C8.21069 16.4707 8 16.6814 8 16.9413V20.706C8 20.9659 8.21069 21.1766 8.47059 21.1766H12.2353C12.4952 21.1766 12.7059 20.9659 12.7059 20.706V16.9413C12.7059 16.6814 12.4952 16.4707 12.2353 16.4707Z"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Variants
