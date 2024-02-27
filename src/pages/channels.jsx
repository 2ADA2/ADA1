    // импортируемый JSON файл (деструктурированный в 2 объекта)
    const channel1 = {
        channelNumber: 1,
        gatewayNumber: 'GW001 (example)',
        signalLevel: -70  // Example signal level
    };

    const channel2 = {
        channelNumber: 2,
        gatewayNumber: 'GW002 (example)',
        signalLevel: -75 // Example signal level
    };

export const Channels = () => {
    return (
        <div className = "container">
            <h2>RF K8 channels<span>Information about two channels</span></h2>
            <h3>Information about the channels:</h3>
            <div className = "channels">
                <div className="channel">
                    <h4>Channel Number: <span>{channel1.channelNumber}</span></h4>
                    <h4>Gateway Number: <span>{channel1.gatewayNumber}</span></h4>
                    <h4>Signal Level: <span>{channel1.signalLevel} dBm (example)</span></h4>
                </div>
                <div className="channel">
                    <h4>Channel Number: <span>{channel2.channelNumber}</span></h4>
                    <h4>Gateway Number: <span>{channel2.gatewayNumber}</span></h4>
                    <h4>Signal Level: <span>{channel2.signalLevel} dBm (example)</span></h4>
                </div>
            </div>  
        </div>
    )
}