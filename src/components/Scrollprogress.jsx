import { useEffect, useState } from 'react';

const Scrollprogress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const progressStyle = {
        width: `${scrollProgress}%`,
        backgroundColor: 'rgb(0,255,0,0.9)',
        height: '15px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
    };

    return (
        <div id="scroll-progress" style={progressStyle}></div>
    );
};

export default Scrollprogress;
