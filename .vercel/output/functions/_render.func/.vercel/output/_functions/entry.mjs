import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_6JxW61Pr.mjs';
import { manifest } from './manifest_BTGw6YKl.mjs';

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
    "middlewareSecret": "87f76477-b0cd-4f33-8b89-6d450b84278d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
