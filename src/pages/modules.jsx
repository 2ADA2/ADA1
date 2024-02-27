import {Link, Outlet} from "react-router-dom";
import store from "../store/store"
//импортируемый JSON файл (деструктурированный в массив модулей)
const modules = [
    {
      "mac": "00:11:22:33:44:55 (example)",
      "serial_number": "SN123456 (example)",
      "model": "Model A ",
      "version": "1.0.0 ",
      "manufacturer": "Manufacturer X (example)",
      "features": ["Et harum quidem rerum facilis est et expedita distinctio, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque...", "Et harum quidem rerum facilis est et expedita distinctio, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque...", "feature3"],
      "specifications": {
        "size": "10x10x5 cm (example)",
        "weight": "100g (example)",
        "power": "5W (example)",
        "temperature_range": "-20°C to 70°C (example)"
      },
      "battery_level": "90% (example)",
      "firmware_version": "1.0.0 (example)",
      "signal_strength": "-55dBm (example)",
      "temperature": "25°C (example)",
      "date": "2024-02-25 (example)"
    },
    {
      "mac": "AA:BB:CC:DD:EE:FF (example)",
      "serial_number": "SN789012 (example)",
      "model": "Model B",
      "version": "2.0.0",
      "manufacturer": "Manufacturer Y (example)",
      "features": ["Et harum quidem rerum facilis est et expedita distinctio, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque...", "Et harum quidem rerum facilis est et expedita distinctio, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque...", "feature3"],
      "specifications": {
        "size": "8x8x4 cm (example)",
        "weight": "80g (example)",
        "power": "3W (example)",
        "temperature_range": "-10°C to 60°C (example)"
      },
      "battery_level": "85% (example)",
      "firmware_version": "2.0.0 (example)",
      "signal_strength": "-60dBm (example)",
      "temperature": "30°C (example)",
      "date": "2024-02-25 (example)"
    }
  ]
  

function createModules(modules) {
   return modules.map(module => {
    return (
        <tr>
            <td>
            <Link to = "info" onClick = {() => store.setModule(module)}>{module.mac}</Link>
            </td>
            <td>{module.date}</td>
            <td>{module.signal_strength}</td>
            <td>{module.battery_level}</td>
            <td>{module.temperature}</td>
            <td>{module.firmware_version}</td>
        </tr>
    )
   })
}

export const ModuleList = () => {

    return (
        <div className="container">
            <h2>Module List <span>All modules</span></h2>
            <h3>List of connected modules:</h3>
            <div className = "modules">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>MAC Module</th>
                                <th>Date</th>
                                <th>Signal level</th>
                                <th>Battery level</th>
                                <th>Electronic unit temperature</th>
                                <th>Firmware version</th>
                            </tr>
                        </thead>
                        <tbody>
                            {createModules(modules)}
                        </tbody>
                    </table>
                </div>

            </div>            
        </div>
    )
}