import * as Colors from "./color-token";
import { Alias, AliasScale, RadixScale, SemanticScale } from "./types";

export const scaleToSemanticScaleMap: Record<RadixScale, SemanticScale> = {
    "1": "Base",
    "2": "BgSubtle",
    "3": "Bg",
    "4": "BgHover",
    "5": "BgActive",
    "6": "Line",
    "7": "Border",
    "8": "BorderHover",
    "9": "Solid",
    "10": "SolidHover",
    "11": "Text",
    "12": "TextContrast",
    "13": "SolidContrast",
};

export const brightRadixColors = ["sky", "mint", "lime", "yellow", "amber"];

export const semanticScaleFactory =
    <TColors extends typeof Colors, TName extends keyof TColors>(
        colors: TColors
    ) =>
        <TAlias extends Alias>(
            alias: TAlias,
            name: TName extends string ? keyof typeof Colors : never,
            isBright = brightRadixColors.includes(name.replace("Dark", ""))
        ) => {
            const isDark = name.includes("Dark");
            const colorName = isDark ? name.replace("Dark", "") : name;

            const semanticScale = Object.entries(colors[name]).map(
                ([scaledName, color]) => {
                    const scale = scaledName.replace(colorName, "") as RadixScale;
                    const semanticScale = scaleToSemanticScaleMap[scale];

                    return [`${alias}${semanticScale}`, color as string];
                }
            );

            const solidContrast = isBright
                ? isDark
                    ? `$${colorName}1`
                    : `$${colorName}12`
                : isDark
                    ? `$${colorName}12`
                    : `$${colorName}1`;

            const solidContrastScale = [`${alias}SolidContrast`, solidContrast];

            return Object.fromEntries(
                semanticScale
                    .concat([solidContrastScale])
                    .concat(Object.entries(colors[name]))
            ) as AliasScale<TAlias>;
        };

export const createSemanticScale = semanticScaleFactory(Colors);
