export const getValueAndUnit = (value) => {
    const units = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
    let unit_level = 0
    while (value > 1024 && unit_level < units.length - 1) {
        unit_level += 1
        value /= 1024
    }
    return [value, units[unit_level]]
}

export const formatBytes = (value) => {
    const [v, unit] = getValueAndUnit(value)
    return `${v.toFixed(2)} ${unit}`
}

