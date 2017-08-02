define({ "api": [
  {
    "type": "get",
    "url": "/tasks/:_id",
    "title": "Find a task",
    "group": "Tasks",
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
            "field": "day",
            "description": "<p>Task day</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "academyHour",
            "description": "<p>Task academyHour</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>Task assignedTo</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks",
            "description": "<p>Task tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks._id",
            "description": "<p>Task _id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.sequence",
            "description": "<p>Task sequence</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.data",
            "description": "<p>Task data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.period",
            "description": "<p>Task period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.language",
            "description": "<p>Task language</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.data.group",
            "description": "<p>Task group</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.data.room",
            "description": "<p>Task room</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.data.room.building",
            "description": "<p>Task building</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.room.barcode",
            "description": "<p>Task barcode</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.data.room.room",
            "description": "<p>Task room</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.data.room.area",
            "description": "<p>Task area</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.data.assigment",
            "description": "<p>Task assigment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.assigment.rawName",
            "description": "<p>Task rawName</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.data.assigment.code",
            "description": "<p>Task code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.assigment.name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.data.assigment.plan",
            "description": "<p>Task plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "task.data.owner",
            "description": "<p>Task assigment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.owner.rawName",
            "description": "<p>Task rawName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.owner.userType",
            "description": "<p>Task userType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.owner.name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.owner.title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.owner.lastName",
            "description": "<p>Task lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.owner.employeeNumber",
            "description": "<p>Task employeeNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.data.modality",
            "description": "<p>Task modality</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.checkout",
            "description": "<p>Task checkout</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.finishedAt",
            "description": "<p>Task finishedAt</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.signedAt",
            "description": "<p>Task signedAt</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.visitAt",
            "description": "<p>Task visitAt</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.startedAt",
            "description": "<p>Task startedAt</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.statusCode",
            "description": "<p>Task statusCode</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasksCounts",
            "description": "<p>Task tasksCounts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"596d90a07aa0706e9c5879ab\",\n    \"day\": \"Lunes\",\n    \"academyHour\": \"M1\",\n    \"assignedTo\": \"Prefecto 1\",\n    \"tasks\": [\n          {\n            \"_id\": \"596d90a07aa0706e9c5879ac\",  \n            \"sequence\": 0,  \n            \"data\": {\n                \"period\": \"ENERO-JUNIO 2017\",\n                \"language\": \"ESPAÑOL\",\n                \"group\": \"4\",\n                \"room\": {\n                    \"building\": \"1\",\n                    \"barcode\": \"4202\",\n                    \"room\": \"4202\",\n                    \"area\": \"1\"\n                  },\n                \"assigment\": {\n                    \"rawName\": \"ADMON DE PROYECTOS DE SOFTWARE (401)\",\n                    \"code\": \"831\",\n                    \"name\": \"ADMON DE PROYECTOS DE SOFTWARE \",\n                    \"plan\": \"401\"\n                  },\n                \"owner\": {\n                    \"rawName\": \"VALLEJO SALINAS JAIME CESAR M.C.\",\n                    \"userType\": \"Professor\",\n                    \"name\": \"Jaime\",\n                    \"title\": \"M.C.\",\n                    \"lastName\": \"Vallejo Salinas\",\n                    \"fingerPrint\": \"\",\n                    \"employeeNumber\": \"\"\n                  },\n                \"modality\": \"Presencial\"\n              },\n            \"checkout\": {\n                \"finishedAt\": null,\n                \"signedAt\": null,\n                \"visitAt\": null,\n                \"startedAt\": null,\n                \"statusCode\": 34\n              }\n          },\n      ],\n    \"tasksCounts\": 1\n}",
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
    "groupTitle": "Tasks",
    "name": "GetTasks_id"
  }
] });
