

const Logo = () => {
    const handleClick = () => {
        window.location.reload();
    };

    return (
        <div className="flex items-center justify-start pl-2 h-full cursor-pointer" onClick={handleClick}>
            {/* Content */}
            <div className="relative z-11 text-center">
                <h1>IB</h1>
            </div>
        </div>
    );
};

export default Logo;
