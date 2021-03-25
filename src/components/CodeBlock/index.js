import React from "react";
import "./style.css";

const CodeBlock = ({code}) => (
    <pre className="code-block">
        <code>
            {code}
        </code>
    </pre>
);

export default CodeBlock;
