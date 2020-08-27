import React from "react"
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return(
        <ContentLoader
            speed={2}
            width={279}
            height={460}
            viewBox="0 0 279 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="-1" y="276" rx="3" ry="3" width="280" height="24" />
            <rect x="0" y="322" rx="3" ry="3" width="279" height="76" />
            <circle cx="129" cy="136" r="118" />
            <rect x="0" y="420" rx="0" ry="0" width="67" height="23" />
            <rect x="141" y="421" rx="24" ry="24" width="134" height="44" />
        </ContentLoader>
    )
}

export default LoadingBlock