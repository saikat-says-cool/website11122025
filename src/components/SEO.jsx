import React, { useEffect } from 'react';

const SEO = ({ title, description }) => {
    useEffect(() => {
        document.title = `${title} | Artificialyze`;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [title, description]);

    return null;
};

export default SEO;
