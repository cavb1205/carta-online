import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_6JxW61Pr.mjs';
import { manifest } from './manifest_DylFWq4S.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/index.astro", _page0]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7aab4cc4-3b75-472d-a6c7-95182539090b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
