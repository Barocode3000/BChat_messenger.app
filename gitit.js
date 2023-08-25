import { useState, useEffect } from "react";
import {
    Provider,
    useContext,
    createContext,
} from "react-redux";
import { AudioProvider } from "./providers/audio_provider";

const AudioContext = createContext(null);

const App = () => {
    const [audioProvider, setAudioProvider] = useState(null);

    useEffect(() => {
        const audioProvider = new AudioProvider();
        setAudioProvider(audioProvider);
    }, []);

    return (
        <AudioContext.Provider value={audioProvider}>
            <App />
        </AudioContext.Provider>
    );
};

export default App;
