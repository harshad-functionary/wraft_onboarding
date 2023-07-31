import { SVGProps } from "react"

const Approvals: React.FC<SVGProps<SVGSVGElement>> = ({ stroke }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.183 10.9618L10.7106 5.19745C11.0605 4.39935 12 3.98697 12.7619 4.39499C13.9475 5.02999 13.7097 5.6252 13.7097 9.36128H18.1854C19.1532 9.36128 19.8932 10.2357 19.7461 11.2052L18.6529 18.4076C18.5344 19.1884 17.8716 19.7648 17.0922 19.7648H8.183M8.183 10.9618V19.7648M8.183 10.9618H5.81441C4.94232 10.9618 4.23535 11.6784 4.23535 12.5624V18.1642C4.23535 19.0482 4.94232 19.7648 5.81441 19.7648H8.183"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Approvals
