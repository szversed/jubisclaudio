function Display({ message, type }) {
    const displayStyles = {
        love: {
            className: "text-3xl font-bold text-pink-600 animate-pulse",
            icon: "fas fa-heart"
        },
        special: {
            className: "text-2xl font-semibold text-purple-600 animate-bounce",
            icon: "fas fa-star"
        },
        normal: {
            className: "text-xl text-gray-800",
            icon: "fas fa-comment"
        }
    };

    const style = displayStyles[type] || displayStyles.normal;

    try {
        return (
            <div 
                data-name="message-display"
                className="relative p-6 rounded-lg shadow-lg bg-white/90 backdrop-blur-sm max-w-2xl mx-auto my-4 transform transition-all hover:scale-105"
            >
                <i className={`${style.icon} absolute -top-3 -left-3 text-2xl text-pink-500 animate-spin-slow`}></i>
                <p className={`${style.className} mb-4`}>
                    {message}
                </p>
                <div className="absolute -bottom-2 -right-2">
                    <i className="fas fa-heart text-pink-500 animate-bounce"></i>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return (
            <div 
                data-name="error-display"
                className="p-4 bg-red-100 text-red-600 rounded-lg"
            >
                Failed to display message
            </div>
        );
    }
}
