import React from 'react';
import "./style.css";

const ColourSwatch = ({hex}) => (
    <div className="colour-swatch">
        <div className="colour-swatch__colour" style={{backgroundColor: `#${hex}`}}></div>
        <span className="colour-swatch__hex">{`#${hex}`}</span>
    </div>
)

export default ColourSwatch;