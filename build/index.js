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
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
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
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/$trackId.tsx
var trackId_exports = {};
__export(trackId_exports, {
  action: () => action,
  default: () => TrackRoute
});
var import_core = require("@mantine/core"), import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/utils/db.server.ts
var import_client = require("@prisma/client");
function getDb() {
  return global.__db || (global.__db = new import_client.PrismaClient()), global.__db;
}
var db = getDb();

// app/routes/$trackId.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), action = async ({ request, params }) => {
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
  return await db.click.create({ data: fields }), (0, import_node2.redirect)(track.redirectUrl);
};
function TrackRoute() {
  let [ip, setIp] = (0, import_react4.useState)(), formRef = (0, import_react4.useRef)(null);
  return (0, import_react4.useEffect)(() => {
    fetch("https://api.ipify.org?format=json").then((res) => res.json()).then((res) => {
      setIp(res.ip);
    });
  }, []), (0, import_react4.useEffect)(() => {
    var _a;
    ip && ((_a = formRef.current) == null || _a.submit());
  }, [ip]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_core.Loader, {}, void 0, !1, {
      fileName: "app/routes/$trackId.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, { ref: formRef, method: "post", hidden: !0, children: [
      "ip: ",
      ip,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "ip", defaultValue: ip }, void 0, !1, {
        fileName: "app/routes/$trackId.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$trackId.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$trackId.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index
});
var import_core2 = require("@mantine/core"), import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), randomstring = require("randomstring"), random = randomstring.generate({
  length: 12,
  charset: "abcdefghijklmnopqrstuvwxyz1234567890"
}), action2 = async ({ request }) => {
  let redirectUrl = (await request.formData()).get("redirectUrl");
  if (typeof redirectUrl != "string")
    throw new Error("Invalid redirectUrl");
  let fields = { redirectUrl, trackId: random }, track = await db.track.create({
    data: fields
  });
  return console.log("*******" + redirectUrl + "*******"), console.log(track.trackId), (0, import_node3.redirect)(`/tracks/${track.trackId}`);
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core2.Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { method: "post", style: { display: "flex", alignItems: "flex-end" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_core2.TextInput,
      {
        size: "xl",
        placeholder: "https://google.com",
        label: "Redirect URl",
        required: !0,
        name: "redirectUrl",
        style: { flex: 1 },
        type: "url"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_core2.Button, { ml: "md", size: "xl", type: "submit", children: "Create tracker" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 35,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "6f35751e", entry: { module: "/build/entry.client-Q47HWJPO.js", imports: ["/build/_shared/chunk-EHDMPI5L.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RJ2SI3D3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$trackId": { id: "routes/$trackId", parentId: "root", path: ":trackId", index: void 0, caseSensitive: void 0, module: "/build/routes/$trackId-XNAYRHUQ.js", imports: ["/build/_shared/chunk-MX6EQOEZ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-I2ZYXYQ6.js", imports: ["/build/_shared/chunk-MX6EQOEZ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-6F35751E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$trackId": {
    id: "routes/$trackId",
    parentId: "root",
    path: ":trackId",
    index: void 0,
    caseSensitive: void 0,
    module: trackId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
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
//# sourceMappingURL=index.js.map
