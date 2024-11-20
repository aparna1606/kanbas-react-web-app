import React from "react";

// Declare `removeServer` as an environment variable
const removeServer = process.env.REACT_APP_REMOTE_SERVER;

const QueryParameters: React.FC = () => {
    return (
        <div>
            <h2>Query Parameters Test</h2>
            <ul>
                <li>
                    <a href={`${removeServer}/lab5/calculator?operation=add&a=34&b=23`}>
                        Add: 34 + 23
                    </a>
                </li>
                <li>
                    <a href={`${removeServer}/lab5/calculator?operation=subtract&a=34&b=23`}>
                        Subtract: 34 - 23
                    </a>
                </li>
                <li>
                    <a href={`${removeServer}/lab5/calculator?operation=multiply&a=34&b=23`}>
                        Multiply: 34 * 23
                    </a>
                </li>
                <li>
                    <a href={`${removeServer}/lab5/calculator?operation=divide&a=34&b=23`}>
                        Divide: 34 / 23
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default QueryParameters;
