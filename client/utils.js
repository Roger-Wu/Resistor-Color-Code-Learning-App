const colorCodeToColorNameDict = {
    0: "black",
    1: "brown",
    2: "red",
    3: "orange",
    4: "yellow",
    5: "green",
    6: "blue",
    7: "violet",
    8: "gray",
    9: "white",
    10: "gold",
    11: "silver",
}

export function codeToName(code) {
    return colorCodeToColorNameDict[code]
}

export function codeToBgcolorClass(code) {
    return "resistor-background-color-" + colorCodeToColorNameDict[code]
}
