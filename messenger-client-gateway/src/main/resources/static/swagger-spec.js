window.swaggerSpec={
  "openapi" : "3.0.0",
  "servers" : [ {
    "url" : "http://localhost:8000",
    "description" : "Local"
  } ],
  "info" : {
    "version" : "0.0.1",
    "title" : "api",
    "description" : "api"
  },
  "tags" : [ {
    "name" : "common",
    "description" : "Общее назначение"
  } ],
  "paths" : {
    "/version" : {
      "get" : {
        "tags" : [ "common" ],
        "operationId" : "getVersion",
        "summary" : "Запрос версии API",
        "x-auth-type" : "None",
        "responses" : {
          "200" : {
            "description" : "OK",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/Version"
                }
              }
            }
          }
        }
      }
    }
  },
  "components" : {
    "schemas" : {
      "Version" : {
        "type" : "object",
        "description" : "Версия протокола",
        "properties" : {
          "version" : {
            "type" : "string"
          }
        }
      }
    }
  }
}