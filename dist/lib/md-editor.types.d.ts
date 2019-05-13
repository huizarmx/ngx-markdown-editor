export interface MdEditorOption {
    showBorder?: boolean;
    icons?: {
        [id: string]: IconOptions;
    };
    scrollPastEnd?: number;
    enablePreviewContentClick?: boolean;
    resizable?: boolean;
    markedjsOpt?: MarkedjsOption;
    listFilesUrl?: string;
    uploadFileUrl?: string;
    getToken?: () => Promise<string>;
    parametersToAdd?: Map<string, string>;
}
export interface UploadResult {
    isImg: boolean;
    name: string;
    url: string;
}
export interface IconOptions {
    id: string;
    hidden: boolean;
    iconClass: string;
    iconClassToggle?: string;
    activeClass?: string;
    title: string;
    titleToggle?: string;
}
export interface MarkedjsOption {
    baseUrl?: string;
    breaks?: boolean;
    gfm?: boolean;
    headerIds?: boolean;
    headerPrefix?: string;
    langPrefix?: string;
    mangle?: boolean;
    pedantic?: boolean;
    sanitize?: boolean;
    sanitizer?: Function;
    silent?: boolean;
    smartLists?: boolean;
    smartypants?: boolean;
    tables?: boolean;
    xhtml?: boolean;
}
export interface DefaultIconOptions {
    readonly BOLD_ID: string;
    readonly ITALIC_ID: string;
    readonly HEADING_ID: string;
    readonly REFRENCE_ID: string;
    readonly LINK_ID: string;
    readonly IMAGE_ID: string;
    readonly UL_ID: string;
    readonly OL_ID: string;
    readonly CODE_ID: string;
    readonly TABLE_ID: string;
    readonly TOGGLE_PREVIEW_ID: string;
    readonly FULLSCREEN_ID: string;
    readonly BOLD: IconOptions;
    readonly ITALIC: IconOptions;
    readonly HEADING: IconOptions;
    readonly REFRENCE: IconOptions;
    readonly LINK: IconOptions;
    readonly IMAGE: IconOptions;
    readonly UL: IconOptions;
    readonly OL: IconOptions;
    readonly CODE: IconOptions;
    readonly TABLE: IconOptions;
    readonly TOGGLE_PREVIEW: IconOptions;
    readonly FULLSCREEN: IconOptions;
    readonly ALL_ICONS: {
        [id: string]: IconOptions;
    };
    readonly ALL_ICON_IDS: Array<string>;
}
