import { SVGProps } from "react"

const Documents: React.FC<SVGProps<SVGSVGElement>> = ({ stroke }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.71595 20.5714H17.3647C18.3449 20.5714 19.1395 19.7768 19.1395 18.7966V9.7704C19.1395 9.29969 18.9525 8.84827 18.6196 8.51542L13.4476 3.34331C13.1147 3.01047 12.6633 2.82349 12.1926 2.82349H6.71595C5.73576 2.82349 4.94116 3.61809 4.94116 4.59828V18.7966C4.94116 19.7768 5.73576 20.5714 6.71595 20.5714Z"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.9277 3.26123V9.0293H18.2521"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Documents
