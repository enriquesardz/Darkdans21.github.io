define({ "api": [
  {
    "type": "post",
    "url": "/auth/loginByID",
    "title": "AUTH Authentification routes",
    "group": "AUTH",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User of the api</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the api</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n   \"user\": \"Enrique\",\n   \"password\": \"123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>It is the status of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>It is the access key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Used to request a new token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"status\": \"success\",\n\"token\":\"JWTeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk3MmE5MzU0MjkxYjMyNGI0ZWUzZGY3Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsibWF0cmljdWxhIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsInVzZXIiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsibWF0cmljdWxhIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwidXNlciI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwicGF0aHNUb1Njb3BlcyI6e30sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJtYXRyaWN1bGEiOiIxNTE0NDgiLCJwYXNzd29yZCI6IjEyMyIsInVzZXIiOiJFbnJpcXVlIiwiX2lkIjoiNTk3MmE5MzU0MjkxYjMyNGI0ZWUzZGY3In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE1MDE4Njc1MzEsImV4cCI6MTUwMTg3MTEzMX0.EIQEaKnDXjlOJSda6FOOgxOS6DFhcYMTvEhhS4f422Y\",\n                \"refreshToken\": \"dnYgcr1Sx5laviAVKJMaxxFbFsRcFMLLXjEKtHrCYuLKdeC9jFoV3vQBE9QVyUX5JEmhXZ3LrAMOfHrKYa0UQ9lVuu1RNFzNs3qGOP0FjAwicSMdxUfguKpFGaLBcCNrCnIqPiGXRxK6A9HjrNFYCYW6vzvoV7uKfQc69jNpCGDYPHXTIAnMSnS6OkeTesQvZ8UT7bx12PHQDC2zI55UlTRLwEQqfT9Tzc50fjEnS9vQYRVQhCBrEtpAfQuQ5aAX\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "AUTH",
    "name": "PostAuthLoginbyid"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_doc_main_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_doc_main_js",
    "name": ""
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_content_disposition_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_cookie_signature_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_cookie_signature_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_node_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/etag/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_etag_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/express.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_express_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_express_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/init.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_middleware_init_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_middleware_init_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/query.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_middleware_query_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_middleware_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_router_layer_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_router_layer_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_router_layer_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_router_route_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_router_route_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/forwarded/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_forwarded_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_forwarded_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_ms_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_ms_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_ms_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_ms_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/parseurl/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_parseurl_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_parseurl_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/parseurl/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_parseurl_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_parseurl_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/parseurl/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_parseurl_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_parseurl_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/parseurl/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_parseurl_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_parseurl_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/path-to-regexp/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_path_to_regexp_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_path_to_regexp_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/utils-merge/index.js",
    "group": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_utils_merge_index_js",
    "groupTitle": "C__Users_dans1_000_Desktop_api_documentacion_task_api_node_modules_utils_merge_index_js",
    "name": "Public"
  },
  {
    "type": "get",
    "url": "/professor",
    "title": "Returns a collection of professors assigned to a user (assignedTo).",
    "group": "Professor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fingerPrint",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "employeeNumber",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rawName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "assigned_hours",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n    [\n        {\n                \"fingerPrint\": \"\",\n                \"title\": \"DR.\",\n                \"lastName\": \"González González\",\n                \"userType\": \"Professor\",\n                \"name\": \"Virgilio\",\n                \"employeeNumber\": \"\",\n                \"rawName\": \"GONZÁLEZ GONZÁLEZ VIRGILIO ÁNGEL DR.\",\n                 \"assigned_hours\": \n                                    [\n                                        \"597ac07abebc581d80ca0d5e\",\n                                        \"597ac07abebc581d80ca0d5f\",\n                                        \"597ac07bbebc581d80ca0d60\"\n                                    ]\n\n\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Professor",
    "name": "GetProfessor"
  },
  {
    "type": "get",
    "url": "/professor/:id",
    "title": "Returns a collection of professors assigned to a user (assignedTo).",
    "group": "Professor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fingerPrint",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "employeeNumber",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rawName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "assigned_hours",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n    [\n        {\n                \"fingerPrint\": \"\",\n                \"title\": \"DR.\",\n                \"lastName\": \"González González\",\n                \"userType\": \"Professor\",\n                \"name\": \"Virgilio\",\n                \"employeeNumber\": \"\",\n                \"rawName\": \"GONZÁLEZ GONZÁLEZ VIRGILIO ÁNGEL DR.\",\n                 \"assigned_hours\": \n                                    [\n                                        \"597ac07abebc581d80ca0d5e\",\n                                        \"597ac07abebc581d80ca0d5f\",\n                                        \"597ac07bbebc581d80ca0d60\"\n                                    ]\n\n\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Professor",
    "name": "GetProfessorId"
  },
  {
    "type": "put",
    "url": "/professor/create",
    "title": "Insert Professor",
    "group": "Professor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n [\n     {\n             \"fingerPrint\": \"\",\n             \"title\": \"DR.\",\n             \"lastName\": \"González González\",\n             \"userType\": \"Professor\",\n             \"name\": \"Virgilio\",\n             \"employeeNumber\": \"\",\n             \"rawName\": \"GONZÁLEZ GONZÁLEZ VIRGILIO ÁNGEL DR.\",\n              \"assigned_hours\": \n                                 [\n                                     \"597ac07abebc581d80ca0d5e\",\n                                     \"597ac07abebc581d80ca0d5f\",\n                                     \"597ac07bbebc581d80ca0d60\"\n                                 ]\n\n\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n     \"status\": \"success\",\n     \"message\": \"hehe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Professor",
    "name": "PutProfessorCreate"
  },
  {
    "type": "get",
    "url": "/routes",
    "title": "Returns a collection of Routes assigned to a user (assignedTo).",
    "group": "Routes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "_id",
            "description": "<p>Task _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Defined this is correct.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>This is a colecction where that contains all the routes information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Define the code of the route</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>Explain the day of the week</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "academyHour",
            "description": "<p>Define the hour in FIME</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>Prefect of the FIME</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "taskCounts",
            "description": "<p>Number of task asigned to route</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"data\": \n    [\n        {\n            \"_id\": \"597e4d2e7f77b61c9079efb1\",\n              \"day\": \"Viernes\",\n             \"academyHour\": \"M6\",\n             \"assignedTo\": \"Enrique\",\n             \"createdAt\": \"2017-07-30T21:18:38.283Z\",\n             \"tasksCounts\": 1\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Routes",
    "name": "GetRoutes"
  },
  {
    "type": "get",
    "url": "/routes/:routeid",
    "title": "Returns a collection of Routes assigned to a user (assignedTo).",
    "group": "Routes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "_id",
            "description": "<p>Task _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Defined this is correct.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>This is a colecction where that contains all the routes information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Define the code of the route</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>Explain the day of the week</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "academyHour",
            "description": "<p>Define the hour in FIME</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>Prefect of the FIME</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "taskCounts",
            "description": "<p>Number of task asigned to route</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"data\": \n    [\n        {\n            \"_id\": \"597e4d2e7f77b61c9079efb1\",\n              \"day\": \"Viernes\",\n             \"academyHour\": \"M6\",\n             \"assignedTo\": \"Enrique\",\n             \"createdAt\": \"2017-07-30T21:18:38.283Z\",\n             \"tasksCounts\": 1\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Routes",
    "name": "GetRoutesRouteid"
  },
  {
    "type": "post",
    "url": "/upload/checkouts",
    "title": "Uploads finished routes",
    "group": "Uploads",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Here in this field loads the data, from id, checkout (When I finish, when it is signed, when I start and the date of the visit).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "  {\n    \"data\":\n               {\n                   \"checkouts\": \n                   [\n                       {\n                           \"_id\": \"597e4d2e7f77b61c9079efa7\",\n                           \"checkout\": \n                           {\n                               \"finishedAt\": \"1501653899874\",\n                               \"signedAt\": \"1501653899872\",\n                               \"startedAt\": \"1501653892941\",\n                               \"visitAt\": \"1501653897547\"\n                           }\n                       }\n                   ],\n               \"id\": \"597e4d2e7f77b61c9079efa6\"\n               }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Aqui se pondra el mensaje 200 cuando sea positivo el request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messages",
            "description": "<p>Aqui se pondra el mensaje cuando es exitoso el request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"messages\": \"checkouts received\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Uploads",
    "name": "PostUploadCheckouts"
  }
] });
