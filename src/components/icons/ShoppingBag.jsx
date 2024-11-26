export default function ShoppingBag({ w = 40, h = 40, attributes }) {
    return (
        <>
            <svg
                {...attributes}
                width={w}
                height={h}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect 
                id="shopping-bag" 
                rx="0.000000" 
                width="39.000000" 
                height="39.000000" 
                transform="translate(0.500000 0.500000)" 
                fill="currentColor" 
                fillOpacity="0" />
                <g clipPath="url(#clip570_125864)">
                    <path 
                    id="Vector" 
                    d="M35.98 34.66L33.67 8.72C33.63 8.21 33.2 7.82 32.68 7.82L27.83 7.82C27.82 3.51 24.31 0 19.99 0C15.68 0 12.17 3.51 12.16 7.82L7.31 7.82C6.8 7.82 6.37 8.21 6.32 8.72L4.01 34.66C4.01 34.7 4.01 34.72 4.01 34.75C4.01 37.64 6.67 40 9.93 40L30.05 40C33.32 40 35.98 37.64 35.98 34.75C35.98 34.72 35.98 34.7 35.98 34.66ZM19.99 1.98C23.22 1.98 25.83 4.6 25.84 7.82L14.15 7.82C14.16 4.6 16.77 1.98 19.99 1.98ZM30.05 38L9.93 38C7.78 38 6.03 36.57 6 34.79L8.22 9.81L12.16 9.81L12.16 13.29C12.16 13.84 12.61 14.29 13.16 14.29C13.7 14.29 14.15 13.84 14.15 13.29L14.15 9.81L25.84 9.81L25.84 13.29C25.84 13.84 26.29 14.29 26.83 14.29C27.38 14.29 27.83 13.84 27.83 13.29L27.83 9.81L31.77 9.81L33.99 34.8C33.96 36.57 32.21 38 30.05 38Z" 
                    fill="currentColor" 
                    fillOpacity="1.000000" 
                    fillRule="nonzero" />
                    <path 
                    id="Vector" 
                    d="M24.13 20.68L18.26 26.54L15.87 24.15C15.48 23.76 14.85 23.76 14.46 24.15C14.08 24.54 14.08 25.17 14.46 25.55L17.56 28.65C17.75 28.84 18.01 28.94 18.26 28.94C18.52 28.94 18.77 28.84 18.97 28.65L25.53 22.09C25.92 21.7 25.92 21.07 25.53 20.68C25.14 20.3 24.52 20.3 24.13 20.68Z" 
                    fill="currentColor" 
                    fillOpacity="1.000000" 
                    fillRule="nonzero" />
                </g>
            </svg>

        </>
    )
}