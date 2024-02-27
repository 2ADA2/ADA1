    // импортируемый JSON файл (деструктурированный в объект)
    const gatewayStats = {
        ipAddress: '192.168.1.1 (example)',
        subnetMask: '255.255.255.0 (example)',
        dns: '8.8.8.8 (example)'
    };

export const Statistics = () => {
    return (
        <div className="container">
            <h2>Statistics <span>Statistics of the gateway</span></h2>
            <h3>Information about the gateway:</h3>
            <div className = "statistics">
                <div className="stat-info">
                    <h3>IP address:</h3>
                    <span>{gatewayStats.ipAddress}</span>
                </div>
                <div className="stat-info">
                    <h3>Subnet mask:</h3>
                    <span>{gatewayStats.subnetMask}</span>
                </div>
                <div className="stat-info">
                    <h3>DNS:</h3>
                    <span>{gatewayStats.dns}</span>
                </div>
            </div>            
        </div>

    )
}