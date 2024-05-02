import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);  // Initialize based on the current browser status

    useEffect(() => {
        const goOnline = () => setOnlineStatus(true);
        const goOffline = () => setOnlineStatus(false);

        window.addEventListener("online", goOnline);
        window.addEventListener("offline", goOffline);

        // Cleanup function to remove the event listeners
        return () => {
            window.removeEventListener("online", goOnline);
            window.removeEventListener("offline", goOffline);
        };
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;