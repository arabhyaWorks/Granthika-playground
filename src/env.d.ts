/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EXCALIDRAW_ASSET_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
