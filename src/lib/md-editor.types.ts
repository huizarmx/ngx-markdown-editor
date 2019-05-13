export interface MdEditorOption {
  showBorder?: boolean          // Show editor component's border
  icons?: {[id: string]: IconOptions}  // Default is empty, show all icons, default labels and icons
  scrollPastEnd?: number        // The option for ace editor
  enablePreviewContentClick?: boolean  // Allow user fire the click event on the preview panel, like href etc.
  resizable?: boolean           // Allow resize the editor
  markedjsOpt?: MarkedjsOption  // The markedjs option, see https://marked.js.org/#/USING_ADVANCED.md#options
  listFilesUrl?: string;
  uploadFileUrl?: string;
  getToken?: () => Promise<string>;
  parametersToAdd?: Map<string, string>;
}

export interface UploadResult {
  isImg: boolean
  name: string
  url: string
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
  baseUrl?: string             // Default null
  breaks?: boolean             // Default false
  gfm?: boolean                // Default true
  headerIds?: boolean          // Default true
  headerPrefix?: string        // Default ''
  langPrefix?: string          // Default 'language-'
  mangle?: boolean             // Default true
  pedantic?: boolean           // Default false
  sanitize?: boolean           // Default false
  sanitizer?: Function         // Default null
  silent?: boolean             // Default false
  smartLists?: boolean         // Default false
  smartypants?: boolean        // Default false
  tables?: boolean             // Default true
  xhtml?: boolean              // Default false
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
