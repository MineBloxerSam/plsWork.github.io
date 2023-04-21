var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/tracks/$trackId.tsx
var trackId_exports = {};
__export(trackId_exports, {
  default: () => TrackRoute,
  loader: () => loader
});
var import_core = require("@mantine/core"), import_hooks = require("@mantine/hooks"), import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client");
function getDb() {
  return new import_client.PrismaClient();
}
var db = getDb();

// app/routes/tracks/$trackId.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
console.log("made it to $trackId.tsx");
var loader = async ({ params }) => {
  let track = await db.track.findUnique({
    where: { trackId: params.trackId },
    select: {
      trackId: !0,
      Clicks: {
        orderBy: [{
          createdAt: "desc"
        }]
      }
    }
  });
  if (!track)
    throw new Error("track $(params.trackId) does not exist");
  return (0, import_node2.json)({ track });
};
function TrackRoute() {
  let data = (0, import_react3.useLoaderData)(), clipboard = (0, import_hooks.useClipboard)({ timeout: 500 });
  console.log("http://localhost:3000/" + data.track.trackId);
  let rows = data.track.Clicks.map((click) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: new Date(click.createdAt).toLocaleDateString(
      [],
      { hour12: !0 }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: click.createdAt }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: click.ip })
  ] }, click.id));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_core.Button,
      {
        color: clipboard.copied ? "teal" : "blue",
        onClick: () => clipboard.copy(window.location.origin + "/" + data.track.trackId),
        children: clipboard.copied ? "copied" : "Copy"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_core.Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: "Data" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: "User Agent" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: "Ip" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { children: rows })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "/" + data.track.trackId, target: "new", children: "TEST" })
  ] });
}

// app/routes/$trackId.tsx
var trackId_exports2 = {};
__export(trackId_exports2, {
  action: () => action,
  default: () => TrackRoute2
});
var import_core2 = require("@mantine/core"), import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_react5 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime"), action = async ({ request, params }) => {
  let track = await db.track.findUnique({
    where: { trackId: params.trackId },
    select: {
      redirectUrl: !0,
      id: !0
    }
  });
  if (!track)
    throw new Error("Track $(params.trackId) does not exits");
  let ip = (await request.formData()).get("ip");
  if (typeof ip != "string")
    throw new Error("Missing user data");
  let userAgent = request.headers.get("user-agent");
  if (typeof userAgent != "string")
    throw new Error("Missing user data");
  let fields = { userAgent, ip, trackId: track.id };
  return await db.click.create({ data: fields }), (0, import_node3.redirect)(track.redirectUrl);
};
function TrackRoute2() {
  let [ip, setIp] = (0, import_react5.useState)(), formRef = (0, import_react5.useRef)(null);
  return (0, import_react5.useEffect)(() => {
    fetch("https://api.ipify.org?format=json").then((res) => res.json()).then((res) => {
      setIp(res.ip);
    });
  }, []), (0, import_react5.useEffect)(() => {
    var _a;
    ip && ((_a = formRef.current) == null || _a.submit());
  }, [ip]), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_core2.Loader, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react4.Form, { ref: formRef, method: "post", hidden: !0, children: [
      "ip: ",
      ip,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { name: "ip", defaultValue: ip })
    ] })
  ] });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index
});
var import_core3 = require("@mantine/core"), import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_jsx_runtime5 = require("react/jsx-runtime"), randomstring = require("randomstring"), random = randomstring.generate({
  length: 12,
  charset: "abcdefghijklmnopqrstuvwxyz1234567890"
}), action2 = async ({ request }) => {
  let redirectUrl = (await request.formData()).get("redirectUrl");
  if (typeof redirectUrl != "string")
    throw new Error("Invalid redirectUrl");
  let fields = { redirectUrl, trackId: random }, track = await db.track.create({
    data: fields
  });
  return console.log("*******" + redirectUrl + "*******"), (0, import_node4.redirect)(`/tracks/${track.trackId}`);
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_core3.Container, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react6.Form, { method: "post", style: { display: "flex", alignItems: "flex-end" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_core3.TextInput,
      {
        size: "xl",
        placeholder: "https://google.com",
        label: "Redirect URl",
        required: !0,
        name: "redirectUrl",
        style: { flex: 1 },
        type: "url"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_core3.Button, { ml: "md", size: "xl", type: "submit", children: "Create tracker" })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "dfd20e79", entry: { module: "/build/entry.client-2FENJJKO.js", imports: ["/build/_shared/chunk-Z6ABINEY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RXHQ6VS2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$trackId": { id: "routes/$trackId", parentId: "root", path: ":trackId", index: void 0, caseSensitive: void 0, module: "/build/routes/$trackId-ZPZLL5ID.js", imports: ["/build/_shared/chunk-4XELYLCC.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-MMEHN62Y.js", imports: ["/build/_shared/chunk-4XELYLCC.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tracks/$trackId": { id: "routes/tracks/$trackId", parentId: "root", path: "tracks/:trackId", index: void 0, caseSensitive: void 0, module: "/build/routes/tracks/$trackId-RXEXVDRV.js", imports: ["/build/_shared/chunk-4XELYLCC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-DFD20E79.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tracks/$trackId": {
    id: "routes/tracks/$trackId",
    parentId: "root",
    path: "tracks/:trackId",
    index: void 0,
    caseSensitive: void 0,
    module: trackId_exports
  },
  "routes/$trackId": {
    id: "routes/$trackId",
    parentId: "root",
    path: ":trackId",
    index: void 0,
    caseSensitive: void 0,
    module: trackId_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
