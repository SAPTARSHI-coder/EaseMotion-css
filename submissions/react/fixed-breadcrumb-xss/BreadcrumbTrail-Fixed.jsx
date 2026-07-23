import React from "react";
import DOMPurify from "dompurify";

const BreadcrumbTrailFixed = ({ styles, children, ...props }) => {
    const sanitizedStyles = styles ? DOMPurify.sanitize(styles) : "";

    return (
        <div {...props}>
            <style dangerouslySetInnerHTML={{ __html: sanitizedStyles }} />
            {children}
        </div>
    );
};

export default BreadcrumbTrailFixed;
