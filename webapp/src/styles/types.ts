export type RadixScale =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13";

// prettier-ignore
export type SemanticScale =
    | "Base"                   // 1
    | "BgSubtle"               // 2
    | "Bg"                     // 3
    | "BgHover"                // 4
    | "BgActive"               // 5
    | "Line"                   // 6
    | "Border"                 // 7
    | "BorderHover"            // 8
    | "Solid"                  // 9
    | "SolidHover"             // 10
    | "Text"                   // 11
    | "TextContrast"           // 12
    | "SolidContrast"; // 13
export type AliasSolid =
    | "neutral"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";

export type AliasAlpha = `${AliasSolid}A`;

export type Alias = AliasAlpha | AliasSolid;

export type AliasScale<TAlias extends Alias = Alias> = Record<
    `${TAlias}${SemanticScale}`,
    string
>;
