var connectServiceJSON = {
  "version": "2.0",
  "metadata": {
    "apiVersion": "2017-08-08",
    "endpointPrefix": "connect",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "Amazon Connect",
    "serviceFullName": "Amazon Connect Service",
    "serviceId": "Connect",
    "signatureVersion": "v4",
    "signingName": "connect",
    "uid": "connect-2017-08-08"
  },
  "operations": {
    "AssociateApprovedOrigin": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance/{InstanceId}/approved-origin"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Origin"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Origin": {}
        }
      }
    },
    "AssociateBot": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance/{InstanceId}/bot"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "LexBot": {
            "shape": "S5"
          },
          "LexV2Bot": {
            "shape": "S8"
          }
        }
      }
    },
    "AssociateInstanceStorageConfig": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance/{InstanceId}/storage-config"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ResourceType",
          "StorageConfig"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ResourceType": {},
          "StorageConfig": {
            "shape": "Sc"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "AssociationId": {}
        }
      }
    },
    "AssociateLambdaFunction": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance/{InstanceId}/lambda-function"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "FunctionArn"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "FunctionArn": {}
        }
      }
    },
    "AssociateLexBot": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance/{InstanceId}/lex-bot"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "LexBot"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "LexBot": {
            "shape": "S5"
          }
        }
      }
    },
    "AssociateQueueQuickConnects": {
      "http": {
        "requestUri": "/queues/{InstanceId}/{QueueId}/associate-quick-connects"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId",
          "QuickConnectIds"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          },
          "QuickConnectIds": {
            "shape": "Sw"
          }
        }
      }
    },
    "AssociateRoutingProfileQueues": {
      "http": {
        "requestUri": "/routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "RoutingProfileId",
          "QueueConfigs"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "RoutingProfileId": {
            "location": "uri",
            "locationName": "RoutingProfileId"
          },
          "QueueConfigs": {
            "shape": "S10"
          }
        }
      }
    },
    "AssociateSecurityKey": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance/{InstanceId}/security-key"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Key"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Key": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "AssociationId": {}
        }
      }
    },
    "CreateAgentStatus": {
      "http": {
        "method": "PUT",
        "requestUri": "/agent-status/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Name",
          "State"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Name": {},
          "Description": {},
          "State": {},
          "DisplayOrder": {
            "type": "integer"
          },
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "AgentStatusARN": {},
          "AgentStatusId": {}
        }
      }
    },
    "CreateContactFlow": {
      "http": {
        "method": "PUT",
        "requestUri": "/contact-flows/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Name",
          "Type",
          "Content"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Name": {},
          "Type": {},
          "Description": {},
          "Content": {},
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContactFlowId": {},
          "ContactFlowArn": {}
        }
      }
    },
    "CreateContactFlowModule": {
      "http": {
        "method": "PUT",
        "requestUri": "/contact-flow-modules/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Name",
          "Content"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Name": {},
          "Description": {},
          "Content": {},
          "Tags": {
            "shape": "S1e"
          },
          "ClientToken": {
            "idempotencyToken": true
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Id": {},
          "Arn": {}
        }
      }
    },
    "CreateHoursOfOperation": {
      "http": {
        "method": "PUT",
        "requestUri": "/hours-of-operations/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Name",
          "TimeZone",
          "Config"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Name": {},
          "Description": {},
          "TimeZone": {},
          "Config": {
            "shape": "S21"
          },
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "HoursOfOperationId": {},
          "HoursOfOperationArn": {}
        }
      }
    },
    "CreateInstance": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance"
      },
      "input": {
        "type": "structure",
        "required": [
          "IdentityManagementType",
          "InboundCallsEnabled",
          "OutboundCallsEnabled"
        ],
        "members": {
          "ClientToken": {},
          "IdentityManagementType": {},
          "InstanceAlias": {
            "shape": "S2b"
          },
          "DirectoryId": {},
          "InboundCallsEnabled": {
            "type": "boolean"
          },
          "OutboundCallsEnabled": {
            "type": "boolean"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Id": {},
          "Arn": {}
        }
      }
    },
    "CreateIntegrationAssociation": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance/{InstanceId}/integration-associations"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "IntegrationType",
          "IntegrationArn"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "IntegrationType": {},
          "IntegrationArn": {},
          "SourceApplicationUrl": {},
          "SourceApplicationName": {},
          "SourceType": {},
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IntegrationAssociationId": {},
          "IntegrationAssociationArn": {}
        }
      }
    },
    "CreateQueue": {
      "http": {
        "method": "PUT",
        "requestUri": "/queues/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Name",
          "HoursOfOperationId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Name": {},
          "Description": {},
          "OutboundCallerConfig": {
            "shape": "S2p"
          },
          "HoursOfOperationId": {},
          "MaxContacts": {
            "type": "integer"
          },
          "QuickConnectIds": {
            "shape": "Sw"
          },
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "QueueArn": {},
          "QueueId": {}
        }
      }
    },
    "CreateQuickConnect": {
      "http": {
        "method": "PUT",
        "requestUri": "/quick-connects/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Name",
          "QuickConnectConfig"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Name": {},
          "Description": {},
          "QuickConnectConfig": {
            "shape": "S2x"
          },
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "QuickConnectARN": {},
          "QuickConnectId": {}
        }
      }
    },
    "CreateRoutingProfile": {
      "http": {
        "method": "PUT",
        "requestUri": "/routing-profiles/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Name",
          "Description",
          "DefaultOutboundQueueId",
          "MediaConcurrencies"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Name": {},
          "Description": {},
          "DefaultOutboundQueueId": {},
          "QueueConfigs": {
            "shape": "S10"
          },
          "MediaConcurrencies": {
            "shape": "S38"
          },
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "RoutingProfileArn": {},
          "RoutingProfileId": {}
        }
      }
    },
    "CreateSecurityProfile": {
      "http": {
        "method": "PUT",
        "requestUri": "/security-profiles/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "SecurityProfileName",
          "InstanceId"
        ],
        "members": {
          "SecurityProfileName": {},
          "Description": {},
          "Permissions": {
            "shape": "S3f"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "SecurityProfileId": {},
          "SecurityProfileArn": {}
        }
      }
    },
    "CreateUseCase": {
      "http": {
        "method": "PUT",
        "requestUri": "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "IntegrationAssociationId",
          "UseCaseType"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "IntegrationAssociationId": {
            "location": "uri",
            "locationName": "IntegrationAssociationId"
          },
          "UseCaseType": {},
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "UseCaseId": {},
          "UseCaseArn": {}
        }
      }
    },
    "CreateUser": {
      "http": {
        "method": "PUT",
        "requestUri": "/users/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Username",
          "PhoneConfig",
          "SecurityProfileIds",
          "RoutingProfileId",
          "InstanceId"
        ],
        "members": {
          "Username": {},
          "Password": {},
          "IdentityInfo": {
            "shape": "S3q"
          },
          "PhoneConfig": {
            "shape": "S3u"
          },
          "DirectoryUserId": {},
          "SecurityProfileIds": {
            "shape": "S3z"
          },
          "RoutingProfileId": {},
          "HierarchyGroupId": {},
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Tags": {
            "shape": "S1e"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "UserId": {},
          "UserArn": {}
        }
      }
    },
    "CreateUserHierarchyGroup": {
      "http": {
        "method": "PUT",
        "requestUri": "/user-hierarchy-groups/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "Name",
          "InstanceId"
        ],
        "members": {
          "Name": {},
          "ParentGroupId": {},
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "HierarchyGroupId": {},
          "HierarchyGroupArn": {}
        }
      }
    },
    "DeleteContactFlow": {
      "http": {
        "method": "DELETE",
        "requestUri": "/contact-flows/{InstanceId}/{ContactFlowId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowId": {
            "location": "uri",
            "locationName": "ContactFlowId"
          }
        }
      }
    },
    "DeleteContactFlowModule": {
      "http": {
        "method": "DELETE",
        "requestUri": "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowModuleId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowModuleId": {
            "location": "uri",
            "locationName": "ContactFlowModuleId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "DeleteHoursOfOperation": {
      "http": {
        "method": "DELETE",
        "requestUri": "/hours-of-operations/{InstanceId}/{HoursOfOperationId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "HoursOfOperationId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "HoursOfOperationId": {
            "location": "uri",
            "locationName": "HoursOfOperationId"
          }
        }
      }
    },
    "DeleteInstance": {
      "http": {
        "method": "DELETE",
        "requestUri": "/instance/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "DeleteIntegrationAssociation": {
      "http": {
        "method": "DELETE",
        "requestUri": "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "IntegrationAssociationId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "IntegrationAssociationId": {
            "location": "uri",
            "locationName": "IntegrationAssociationId"
          }
        }
      }
    },
    "DeleteQuickConnect": {
      "http": {
        "method": "DELETE",
        "requestUri": "/quick-connects/{InstanceId}/{QuickConnectId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QuickConnectId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QuickConnectId": {
            "location": "uri",
            "locationName": "QuickConnectId"
          }
        }
      }
    },
    "DeleteSecurityProfile": {
      "http": {
        "method": "DELETE",
        "requestUri": "/security-profiles/{InstanceId}/{SecurityProfileId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "SecurityProfileId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "SecurityProfileId": {
            "location": "uri",
            "locationName": "SecurityProfileId"
          }
        }
      }
    },
    "DeleteUseCase": {
      "http": {
        "method": "DELETE",
        "requestUri": "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "IntegrationAssociationId",
          "UseCaseId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "IntegrationAssociationId": {
            "location": "uri",
            "locationName": "IntegrationAssociationId"
          },
          "UseCaseId": {
            "location": "uri",
            "locationName": "UseCaseId"
          }
        }
      }
    },
    "DeleteUser": {
      "http": {
        "method": "DELETE",
        "requestUri": "/users/{InstanceId}/{UserId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "UserId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "UserId": {
            "location": "uri",
            "locationName": "UserId"
          }
        }
      }
    },
    "DeleteUserHierarchyGroup": {
      "http": {
        "method": "DELETE",
        "requestUri": "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "HierarchyGroupId",
          "InstanceId"
        ],
        "members": {
          "HierarchyGroupId": {
            "location": "uri",
            "locationName": "HierarchyGroupId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "DescribeAgentStatus": {
      "http": {
        "method": "GET",
        "requestUri": "/agent-status/{InstanceId}/{AgentStatusId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "AgentStatusId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "AgentStatusId": {
            "location": "uri",
            "locationName": "AgentStatusId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "AgentStatus": {
            "type": "structure",
            "members": {
              "AgentStatusARN": {},
              "AgentStatusId": {},
              "Name": {},
              "Description": {},
              "Type": {},
              "DisplayOrder": {
                "type": "integer"
              },
              "State": {},
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeContact": {
      "http": {
        "method": "GET",
        "requestUri": "/contacts/{InstanceId}/{ContactId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactId": {
            "location": "uri",
            "locationName": "ContactId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Contact": {
            "type": "structure",
            "members": {
              "Arn": {},
              "Id": {},
              "InitialContactId": {},
              "PreviousContactId": {},
              "InitiationMethod": {},
              "Name": {},
              "Description": {},
              "Channel": {},
              "QueueInfo": {
                "type": "structure",
                "members": {
                  "Id": {},
                  "EnqueueTimestamp": {
                    "type": "timestamp"
                  }
                }
              },
              "AgentInfo": {
                "type": "structure",
                "members": {
                  "Id": {},
                  "ConnectedToAgentTimestamp": {
                    "type": "timestamp"
                  }
                }
              },
              "InitiationTimestamp": {
                "type": "timestamp"
              },
              "DisconnectTimestamp": {
                "type": "timestamp"
              },
              "LastUpdateTimestamp": {
                "type": "timestamp"
              },
              "ScheduledTimestamp": {
                "type": "timestamp"
              }
            }
          }
        }
      }
    },
    "DescribeContactFlow": {
      "http": {
        "method": "GET",
        "requestUri": "/contact-flows/{InstanceId}/{ContactFlowId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowId": {
            "location": "uri",
            "locationName": "ContactFlowId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContactFlow": {
            "type": "structure",
            "members": {
              "Arn": {},
              "Id": {},
              "Name": {},
              "Type": {},
              "State": {},
              "Description": {},
              "Content": {},
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeContactFlowModule": {
      "http": {
        "method": "GET",
        "requestUri": "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowModuleId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowModuleId": {
            "location": "uri",
            "locationName": "ContactFlowModuleId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContactFlowModule": {
            "type": "structure",
            "members": {
              "Arn": {},
              "Id": {},
              "Name": {},
              "Content": {},
              "Description": {},
              "State": {},
              "Status": {},
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeHoursOfOperation": {
      "http": {
        "method": "GET",
        "requestUri": "/hours-of-operations/{InstanceId}/{HoursOfOperationId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "HoursOfOperationId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "HoursOfOperationId": {
            "location": "uri",
            "locationName": "HoursOfOperationId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "HoursOfOperation": {
            "type": "structure",
            "members": {
              "HoursOfOperationId": {},
              "HoursOfOperationArn": {},
              "Name": {},
              "Description": {},
              "TimeZone": {},
              "Config": {
                "shape": "S21"
              },
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeInstance": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Instance": {
            "type": "structure",
            "members": {
              "Id": {},
              "Arn": {},
              "IdentityManagementType": {},
              "InstanceAlias": {
                "shape": "S2b"
              },
              "CreatedTime": {
                "type": "timestamp"
              },
              "ServiceRole": {},
              "InstanceStatus": {},
              "StatusReason": {
                "type": "structure",
                "members": {
                  "Message": {}
                }
              },
              "InboundCallsEnabled": {
                "type": "boolean"
              },
              "OutboundCallsEnabled": {
                "type": "boolean"
              }
            }
          }
        }
      }
    },
    "DescribeInstanceAttribute": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/attribute/{AttributeType}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "AttributeType"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "AttributeType": {
            "location": "uri",
            "locationName": "AttributeType"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attribute": {
            "shape": "S5h"
          }
        }
      }
    },
    "DescribeInstanceStorageConfig": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/storage-config/{AssociationId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "AssociationId",
          "ResourceType"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "AssociationId": {
            "location": "uri",
            "locationName": "AssociationId"
          },
          "ResourceType": {
            "location": "querystring",
            "locationName": "resourceType"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "StorageConfig": {
            "shape": "Sc"
          }
        }
      }
    },
    "DescribeQueue": {
      "http": {
        "method": "GET",
        "requestUri": "/queues/{InstanceId}/{QueueId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Queue": {
            "type": "structure",
            "members": {
              "Name": {},
              "QueueArn": {},
              "QueueId": {},
              "Description": {},
              "OutboundCallerConfig": {
                "shape": "S2p"
              },
              "HoursOfOperationId": {},
              "MaxContacts": {
                "type": "integer"
              },
              "Status": {},
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeQuickConnect": {
      "http": {
        "method": "GET",
        "requestUri": "/quick-connects/{InstanceId}/{QuickConnectId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QuickConnectId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QuickConnectId": {
            "location": "uri",
            "locationName": "QuickConnectId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "QuickConnect": {
            "type": "structure",
            "members": {
              "QuickConnectARN": {},
              "QuickConnectId": {},
              "Name": {},
              "Description": {},
              "QuickConnectConfig": {
                "shape": "S2x"
              },
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeRoutingProfile": {
      "http": {
        "method": "GET",
        "requestUri": "/routing-profiles/{InstanceId}/{RoutingProfileId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "RoutingProfileId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "RoutingProfileId": {
            "location": "uri",
            "locationName": "RoutingProfileId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "RoutingProfile": {
            "type": "structure",
            "members": {
              "InstanceId": {},
              "Name": {},
              "RoutingProfileArn": {},
              "RoutingProfileId": {},
              "Description": {},
              "MediaConcurrencies": {
                "shape": "S38"
              },
              "DefaultOutboundQueueId": {},
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeSecurityProfile": {
      "http": {
        "method": "GET",
        "requestUri": "/security-profiles/{InstanceId}/{SecurityProfileId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "SecurityProfileId",
          "InstanceId"
        ],
        "members": {
          "SecurityProfileId": {
            "location": "uri",
            "locationName": "SecurityProfileId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "SecurityProfile": {
            "type": "structure",
            "members": {
              "Id": {},
              "OrganizationResourceId": {},
              "Arn": {},
              "SecurityProfileName": {},
              "Description": {},
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeUser": {
      "http": {
        "method": "GET",
        "requestUri": "/users/{InstanceId}/{UserId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "UserId",
          "InstanceId"
        ],
        "members": {
          "UserId": {
            "location": "uri",
            "locationName": "UserId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "User": {
            "type": "structure",
            "members": {
              "Id": {},
              "Arn": {},
              "Username": {},
              "IdentityInfo": {
                "shape": "S3q"
              },
              "PhoneConfig": {
                "shape": "S3u"
              },
              "DirectoryUserId": {},
              "SecurityProfileIds": {
                "shape": "S3z"
              },
              "RoutingProfileId": {},
              "HierarchyGroupId": {},
              "Tags": {
                "shape": "S1e"
              }
            }
          }
        }
      }
    },
    "DescribeUserHierarchyGroup": {
      "http": {
        "method": "GET",
        "requestUri": "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "HierarchyGroupId",
          "InstanceId"
        ],
        "members": {
          "HierarchyGroupId": {
            "location": "uri",
            "locationName": "HierarchyGroupId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "HierarchyGroup": {
            "type": "structure",
            "members": {
              "Id": {},
              "Arn": {},
              "Name": {},
              "LevelId": {},
              "HierarchyPath": {
                "type": "structure",
                "members": {
                  "LevelOne": {
                    "shape": "S66"
                  },
                  "LevelTwo": {
                    "shape": "S66"
                  },
                  "LevelThree": {
                    "shape": "S66"
                  },
                  "LevelFour": {
                    "shape": "S66"
                  },
                  "LevelFive": {
                    "shape": "S66"
                  }
                }
              }
            }
          }
        }
      }
    },
    "DescribeUserHierarchyStructure": {
      "http": {
        "method": "GET",
        "requestUri": "/user-hierarchy-structure/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "HierarchyStructure": {
            "type": "structure",
            "members": {
              "LevelOne": {
                "shape": "S6a"
              },
              "LevelTwo": {
                "shape": "S6a"
              },
              "LevelThree": {
                "shape": "S6a"
              },
              "LevelFour": {
                "shape": "S6a"
              },
              "LevelFive": {
                "shape": "S6a"
              }
            }
          }
        }
      }
    },
    "DisassociateApprovedOrigin": {
      "http": {
        "method": "DELETE",
        "requestUri": "/instance/{InstanceId}/approved-origin"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Origin"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Origin": {
            "location": "querystring",
            "locationName": "origin"
          }
        }
      }
    },
    "DisassociateBot": {
      "http": {
        "requestUri": "/instance/{InstanceId}/bot"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "LexBot": {
            "shape": "S5"
          },
          "LexV2Bot": {
            "shape": "S8"
          }
        }
      }
    },
    "DisassociateInstanceStorageConfig": {
      "http": {
        "method": "DELETE",
        "requestUri": "/instance/{InstanceId}/storage-config/{AssociationId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "AssociationId",
          "ResourceType"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "AssociationId": {
            "location": "uri",
            "locationName": "AssociationId"
          },
          "ResourceType": {
            "location": "querystring",
            "locationName": "resourceType"
          }
        }
      }
    },
    "DisassociateLambdaFunction": {
      "http": {
        "method": "DELETE",
        "requestUri": "/instance/{InstanceId}/lambda-function"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "FunctionArn"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "FunctionArn": {
            "location": "querystring",
            "locationName": "functionArn"
          }
        }
      }
    },
    "DisassociateLexBot": {
      "http": {
        "method": "DELETE",
        "requestUri": "/instance/{InstanceId}/lex-bot"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "BotName",
          "LexRegion"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "BotName": {
            "location": "querystring",
            "locationName": "botName"
          },
          "LexRegion": {
            "location": "querystring",
            "locationName": "lexRegion"
          }
        }
      }
    },
    "DisassociateQueueQuickConnects": {
      "http": {
        "requestUri": "/queues/{InstanceId}/{QueueId}/disassociate-quick-connects"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId",
          "QuickConnectIds"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          },
          "QuickConnectIds": {
            "shape": "Sw"
          }
        }
      }
    },
    "DisassociateRoutingProfileQueues": {
      "http": {
        "requestUri": "/routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "RoutingProfileId",
          "QueueReferences"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "RoutingProfileId": {
            "location": "uri",
            "locationName": "RoutingProfileId"
          },
          "QueueReferences": {
            "type": "list",
            "member": {
              "shape": "S12"
            }
          }
        }
      }
    },
    "DisassociateSecurityKey": {
      "http": {
        "method": "DELETE",
        "requestUri": "/instance/{InstanceId}/security-key/{AssociationId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "AssociationId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "AssociationId": {
            "location": "uri",
            "locationName": "AssociationId"
          }
        }
      }
    },
    "GetContactAttributes": {
      "http": {
        "method": "GET",
        "requestUri": "/contact/attributes/{InstanceId}/{InitialContactId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "InitialContactId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "InitialContactId": {
            "location": "uri",
            "locationName": "InitialContactId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "S6n"
          }
        }
      }
    },
    "GetCurrentMetricData": {
      "http": {
        "requestUri": "/metrics/current/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "Filters",
          "CurrentMetrics"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "Filters": {
            "shape": "S6r"
          },
          "Groupings": {
            "shape": "S6u"
          },
          "CurrentMetrics": {
            "type": "list",
            "member": {
              "shape": "S6x"
            }
          },
          "NextToken": {},
          "MaxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "NextToken": {},
          "MetricResults": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Dimensions": {
                  "shape": "S75"
                },
                "Collections": {
                  "type": "list",
                  "member": {
                    "type": "structure",
                    "members": {
                      "Metric": {
                        "shape": "S6x"
                      },
                      "Value": {
                        "type": "double"
                      }
                    }
                  }
                }
              }
            }
          },
          "DataSnapshotTime": {
            "type": "timestamp"
          }
        }
      }
    },
    "GetFederationToken": {
      "http": {
        "method": "GET",
        "requestUri": "/user/federate/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Credentials": {
            "type": "structure",
            "members": {
              "AccessToken": {
                "shape": "S7d"
              },
              "AccessTokenExpiration": {
                "type": "timestamp"
              },
              "RefreshToken": {
                "shape": "S7d"
              },
              "RefreshTokenExpiration": {
                "type": "timestamp"
              }
            }
          }
        }
      }
    },
    "GetMetricData": {
      "http": {
        "requestUri": "/metrics/historical/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "StartTime",
          "EndTime",
          "Filters",
          "HistoricalMetrics"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "StartTime": {
            "type": "timestamp"
          },
          "EndTime": {
            "type": "timestamp"
          },
          "Filters": {
            "shape": "S6r"
          },
          "Groupings": {
            "shape": "S6u"
          },
          "HistoricalMetrics": {
            "type": "list",
            "member": {
              "shape": "S7g"
            }
          },
          "NextToken": {},
          "MaxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "NextToken": {},
          "MetricResults": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Dimensions": {
                  "shape": "S75"
                },
                "Collections": {
                  "type": "list",
                  "member": {
                    "type": "structure",
                    "members": {
                      "Metric": {
                        "shape": "S7g"
                      },
                      "Value": {
                        "type": "double"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "ListAgentStatuses": {
      "http": {
        "method": "GET",
        "requestUri": "/agent-status/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          },
          "AgentStatusTypes": {
            "location": "querystring",
            "locationName": "AgentStatusTypes",
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "NextToken": {},
          "AgentStatusSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Name": {},
                "Type": {}
              }
            }
          }
        }
      }
    },
    "ListApprovedOrigins": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/approved-origins"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Origins": {
            "type": "list",
            "member": {}
          },
          "NextToken": {}
        }
      }
    },
    "ListBots": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/bots"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "LexVersion"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          },
          "LexVersion": {
            "location": "querystring",
            "locationName": "lexVersion"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "LexBots": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "LexBot": {
                  "shape": "S5"
                },
                "LexV2Bot": {
                  "shape": "S8"
                }
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListContactFlowModules": {
      "http": {
        "method": "GET",
        "requestUri": "/contact-flow-modules-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          },
          "ContactFlowModuleState": {
            "location": "querystring",
            "locationName": "state"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContactFlowModulesSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Name": {},
                "State": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListContactFlows": {
      "http": {
        "method": "GET",
        "requestUri": "/contact-flows-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowTypes": {
            "location": "querystring",
            "locationName": "contactFlowTypes",
            "type": "list",
            "member": {}
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContactFlowSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Name": {},
                "ContactFlowType": {},
                "ContactFlowState": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListContactReferences": {
      "http": {
        "method": "GET",
        "requestUri": "/contact/references/{InstanceId}/{ContactId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId",
          "ReferenceTypes"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactId": {
            "location": "uri",
            "locationName": "ContactId"
          },
          "ReferenceTypes": {
            "location": "querystring",
            "locationName": "referenceTypes",
            "type": "list",
            "member": {}
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ReferenceSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Url": {
                  "type": "structure",
                  "members": {
                    "Name": {},
                    "Value": {}
                  }
                },
                "Attachment": {
                  "type": "structure",
                  "members": {
                    "Name": {},
                    "Value": {},
                    "Status": {}
                  }
                }
              },
              "union": true
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListHoursOfOperations": {
      "http": {
        "method": "GET",
        "requestUri": "/hours-of-operations-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "HoursOfOperationSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Name": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListInstanceAttributes": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/attributes"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Attributes": {
            "type": "list",
            "member": {
              "shape": "S5h"
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListInstanceStorageConfigs": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/storage-configs"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ResourceType"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ResourceType": {
            "location": "querystring",
            "locationName": "resourceType"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "StorageConfigs": {
            "type": "list",
            "member": {
              "shape": "Sc"
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListInstances": {
      "http": {
        "method": "GET",
        "requestUri": "/instance"
      },
      "input": {
        "type": "structure",
        "members": {
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "InstanceSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "IdentityManagementType": {},
                "InstanceAlias": {
                  "shape": "S2b"
                },
                "CreatedTime": {
                  "type": "timestamp"
                },
                "ServiceRole": {},
                "InstanceStatus": {},
                "InboundCallsEnabled": {
                  "type": "boolean"
                },
                "OutboundCallsEnabled": {
                  "type": "boolean"
                }
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListIntegrationAssociations": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/integration-associations"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "IntegrationType": {
            "location": "querystring",
            "locationName": "integrationType"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IntegrationAssociationSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "IntegrationAssociationId": {},
                "IntegrationAssociationArn": {},
                "InstanceId": {},
                "IntegrationType": {},
                "IntegrationArn": {},
                "SourceApplicationUrl": {},
                "SourceApplicationName": {},
                "SourceType": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListLambdaFunctions": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/lambda-functions"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "LambdaFunctions": {
            "type": "list",
            "member": {}
          },
          "NextToken": {}
        }
      }
    },
    "ListLexBots": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/lex-bots"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "LexBots": {
            "type": "list",
            "member": {
              "shape": "S5"
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListPhoneNumbers": {
      "http": {
        "method": "GET",
        "requestUri": "/phone-numbers-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "PhoneNumberTypes": {
            "location": "querystring",
            "locationName": "phoneNumberTypes",
            "type": "list",
            "member": {}
          },
          "PhoneNumberCountryCodes": {
            "location": "querystring",
            "locationName": "phoneNumberCountryCodes",
            "type": "list",
            "member": {}
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "PhoneNumberSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "PhoneNumber": {},
                "PhoneNumberType": {},
                "PhoneNumberCountryCode": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListPrompts": {
      "http": {
        "method": "GET",
        "requestUri": "/prompts-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "PromptSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Name": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListQueueQuickConnects": {
      "http": {
        "method": "GET",
        "requestUri": "/queues/{InstanceId}/{QueueId}/quick-connects"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "NextToken": {},
          "QuickConnectSummaryList": {
            "shape": "S9x"
          }
        }
      }
    },
    "ListQueues": {
      "http": {
        "method": "GET",
        "requestUri": "/queues-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueTypes": {
            "location": "querystring",
            "locationName": "queueTypes",
            "type": "list",
            "member": {}
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "QueueSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Name": {},
                "QueueType": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListQuickConnects": {
      "http": {
        "method": "GET",
        "requestUri": "/quick-connects/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          },
          "QuickConnectTypes": {
            "location": "querystring",
            "locationName": "QuickConnectTypes",
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "QuickConnectSummaryList": {
            "shape": "S9x"
          },
          "NextToken": {}
        }
      }
    },
    "ListRoutingProfileQueues": {
      "http": {
        "method": "GET",
        "requestUri": "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "RoutingProfileId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "RoutingProfileId": {
            "location": "uri",
            "locationName": "RoutingProfileId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "NextToken": {},
          "RoutingProfileQueueConfigSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "QueueId",
                "QueueArn",
                "QueueName",
                "Priority",
                "Delay",
                "Channel"
              ],
              "members": {
                "QueueId": {},
                "QueueArn": {},
                "QueueName": {},
                "Priority": {
                  "type": "integer"
                },
                "Delay": {
                  "type": "integer"
                },
                "Channel": {}
              }
            }
          }
        }
      }
    },
    "ListRoutingProfiles": {
      "http": {
        "method": "GET",
        "requestUri": "/routing-profiles-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "RoutingProfileSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Name": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListSecurityKeys": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/security-keys"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "SecurityKeys": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "AssociationId": {},
                "Key": {},
                "CreationTime": {
                  "type": "timestamp"
                }
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListSecurityProfilePermissions": {
      "http": {
        "method": "GET",
        "requestUri": "/security-profiles-permissions/{InstanceId}/{SecurityProfileId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "SecurityProfileId",
          "InstanceId"
        ],
        "members": {
          "SecurityProfileId": {
            "location": "uri",
            "locationName": "SecurityProfileId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Permissions": {
            "shape": "S3f"
          },
          "NextToken": {}
        }
      }
    },
    "ListSecurityProfiles": {
      "http": {
        "method": "GET",
        "requestUri": "/security-profiles-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "SecurityProfileSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Name": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListTagsForResource": {
      "http": {
        "method": "GET",
        "requestUri": "/tags/{resourceArn}"
      },
      "input": {
        "type": "structure",
        "required": [
          "resourceArn"
        ],
        "members": {
          "resourceArn": {
            "location": "uri",
            "locationName": "resourceArn"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "tags": {
            "shape": "S1e"
          }
        }
      }
    },
    "ListUseCases": {
      "http": {
        "method": "GET",
        "requestUri": "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "IntegrationAssociationId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "IntegrationAssociationId": {
            "location": "uri",
            "locationName": "IntegrationAssociationId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "UseCaseSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "UseCaseId": {},
                "UseCaseArn": {},
                "UseCaseType": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListUserHierarchyGroups": {
      "http": {
        "method": "GET",
        "requestUri": "/user-hierarchy-groups-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "UserHierarchyGroupSummaryList": {
            "type": "list",
            "member": {
              "shape": "S66"
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListUsers": {
      "http": {
        "method": "GET",
        "requestUri": "/users-summary/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "NextToken": {
            "location": "querystring",
            "locationName": "nextToken"
          },
          "MaxResults": {
            "location": "querystring",
            "locationName": "maxResults",
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "UserSummaryList": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Id": {},
                "Arn": {},
                "Username": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ResumeContactRecording": {
      "http": {
        "requestUri": "/contact/resume-recording"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId",
          "InitialContactId"
        ],
        "members": {
          "InstanceId": {},
          "ContactId": {},
          "InitialContactId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "SearchUsers": {
      "http": {
        "requestUri": "/search-users"
      },
      "input": {
        "type": "structure",
        "members": {
          "InstanceId": {},
          "NextToken": {},
          "MaxResults": {
            "type": "integer"
          },
          "SearchFilter": {
            "type": "structure",
            "members": {
              "TagFilter": {
                "type": "structure",
                "members": {
                  "OrConditions": {
                    "type": "list",
                    "member": {
                      "shape": "Sbb"
                    }
                  },
                  "AndConditions": {
                    "shape": "Sbb"
                  },
                  "TagCondition": {
                    "shape": "Sbc"
                  }
                }
              }
            }
          },
          "SearchCriteria": {
            "shape": "Sbe"
          },
          "ResponseType": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Users": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Arn": {},
                "DirectoryUserId": {},
                "HierarchyGroupId": {},
                "Id": {},
                "IdentityInfo": {
                  "type": "structure",
                  "members": {
                    "FirstName": {},
                    "LastName": {}
                  }
                },
                "PhoneConfig": {
                  "shape": "S3u"
                },
                "RoutingProfileId": {},
                "SecurityProfileIds": {
                  "shape": "S3z"
                },
                "Tags": {
                  "shape": "S1e"
                },
                "Username": {}
              }
            }
          },
          "NextToken": {},
          "ApproximateTotalCount": {
            "type": "long"
          }
        }
      }
    },
    "StartChatContact": {
      "http": {
        "method": "PUT",
        "requestUri": "/contact/chat"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowId",
          "ParticipantDetails"
        ],
        "members": {
          "InstanceId": {},
          "ContactFlowId": {},
          "Attributes": {
            "shape": "S6n"
          },
          "ParticipantDetails": {
            "type": "structure",
            "required": [
              "DisplayName"
            ],
            "members": {
              "DisplayName": {}
            }
          },
          "InitialMessage": {
            "type": "structure",
            "required": [
              "ContentType",
              "Content"
            ],
            "members": {
              "ContentType": {},
              "Content": {}
            }
          },
          "ClientToken": {
            "idempotencyToken": true
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContactId": {},
          "ParticipantId": {},
          "ParticipantToken": {}
        }
      }
    },
    "StartContactRecording": {
      "http": {
        "requestUri": "/contact/start-recording"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId",
          "InitialContactId",
          "VoiceRecordingConfiguration"
        ],
        "members": {
          "InstanceId": {},
          "ContactId": {},
          "InitialContactId": {},
          "VoiceRecordingConfiguration": {
            "type": "structure",
            "members": {
              "VoiceRecordingTrack": {}
            }
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "StartContactStreaming": {
      "http": {
        "requestUri": "/contact/start-streaming"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId",
          "ChatStreamingConfiguration",
          "ClientToken"
        ],
        "members": {
          "InstanceId": {},
          "ContactId": {},
          "ChatStreamingConfiguration": {
            "type": "structure",
            "required": [
              "StreamingEndpointArn"
            ],
            "members": {
              "StreamingEndpointArn": {}
            }
          },
          "ClientToken": {
            "idempotencyToken": true
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "StreamingId"
        ],
        "members": {
          "StreamingId": {}
        }
      }
    },
    "StartOutboundVoiceContact": {
      "http": {
        "method": "PUT",
        "requestUri": "/contact/outbound-voice"
      },
      "input": {
        "type": "structure",
        "required": [
          "DestinationPhoneNumber",
          "ContactFlowId",
          "InstanceId"
        ],
        "members": {
          "DestinationPhoneNumber": {},
          "ContactFlowId": {},
          "InstanceId": {},
          "ClientToken": {
            "idempotencyToken": true
          },
          "SourcePhoneNumber": {},
          "QueueId": {},
          "Attributes": {
            "shape": "S6n"
          },
          "AnswerMachineDetectionConfig": {
            "type": "structure",
            "members": {
              "EnableAnswerMachineDetection": {
                "type": "boolean"
              },
              "AwaitAnswerMachinePrompt": {
                "type": "boolean"
              }
            }
          },
          "CampaignId": {},
          "TrafficType": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContactId": {}
        }
      }
    },
    "StartTaskContact": {
      "http": {
        "method": "PUT",
        "requestUri": "/contact/task"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowId",
          "Name"
        ],
        "members": {
          "InstanceId": {},
          "PreviousContactId": {},
          "ContactFlowId": {},
          "Attributes": {
            "shape": "S6n"
          },
          "Name": {},
          "References": {
            "shape": "Scf"
          },
          "Description": {},
          "ClientToken": {
            "idempotencyToken": true
          },
          "ScheduledTime": {
            "type": "timestamp"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "ContactId": {}
        }
      }
    },
    "StopContact": {
      "http": {
        "requestUri": "/contact/stop"
      },
      "input": {
        "type": "structure",
        "required": [
          "ContactId",
          "InstanceId"
        ],
        "members": {
          "ContactId": {},
          "InstanceId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "StopContactRecording": {
      "http": {
        "requestUri": "/contact/stop-recording"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId",
          "InitialContactId"
        ],
        "members": {
          "InstanceId": {},
          "ContactId": {},
          "InitialContactId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "StopContactStreaming": {
      "http": {
        "requestUri": "/contact/stop-streaming"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId",
          "StreamingId"
        ],
        "members": {
          "InstanceId": {},
          "ContactId": {},
          "StreamingId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "SuspendContactRecording": {
      "http": {
        "requestUri": "/contact/suspend-recording"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId",
          "InitialContactId"
        ],
        "members": {
          "InstanceId": {},
          "ContactId": {},
          "InitialContactId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "TagResource": {
      "http": {
        "requestUri": "/tags/{resourceArn}"
      },
      "input": {
        "type": "structure",
        "required": [
          "resourceArn",
          "tags"
        ],
        "members": {
          "resourceArn": {
            "location": "uri",
            "locationName": "resourceArn"
          },
          "tags": {
            "shape": "S1e"
          }
        }
      }
    },
    "UntagResource": {
      "http": {
        "method": "DELETE",
        "requestUri": "/tags/{resourceArn}"
      },
      "input": {
        "type": "structure",
        "required": [
          "resourceArn",
          "tagKeys"
        ],
        "members": {
          "resourceArn": {
            "location": "uri",
            "locationName": "resourceArn"
          },
          "tagKeys": {
            "location": "querystring",
            "locationName": "tagKeys",
            "type": "list",
            "member": {}
          }
        }
      }
    },
    "UpdateAgentStatus": {
      "http": {
        "requestUri": "/agent-status/{InstanceId}/{AgentStatusId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "AgentStatusId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "AgentStatusId": {
            "location": "uri",
            "locationName": "AgentStatusId"
          },
          "Name": {},
          "Description": {},
          "State": {},
          "DisplayOrder": {
            "type": "integer"
          },
          "ResetOrderNumber": {
            "type": "boolean"
          }
        }
      }
    },
    "UpdateContact": {
      "http": {
        "requestUri": "/contacts/{InstanceId}/{ContactId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactId": {
            "location": "uri",
            "locationName": "ContactId"
          },
          "Name": {},
          "Description": {},
          "References": {
            "shape": "Scf"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateContactAttributes": {
      "http": {
        "requestUri": "/contact/attributes"
      },
      "input": {
        "type": "structure",
        "required": [
          "InitialContactId",
          "InstanceId",
          "Attributes"
        ],
        "members": {
          "InitialContactId": {},
          "InstanceId": {},
          "Attributes": {
            "shape": "S6n"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateContactFlowContent": {
      "http": {
        "requestUri": "/contact-flows/{InstanceId}/{ContactFlowId}/content"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowId",
          "Content"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowId": {
            "location": "uri",
            "locationName": "ContactFlowId"
          },
          "Content": {}
        }
      }
    },
    "UpdateContactFlowMetadata": {
      "http": {
        "requestUri": "/contact-flows/{InstanceId}/{ContactFlowId}/metadata"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowId": {
            "location": "uri",
            "locationName": "ContactFlowId"
          },
          "Name": {},
          "Description": {},
          "ContactFlowState": {}
        }
      }
    },
    "UpdateContactFlowModuleContent": {
      "http": {
        "requestUri": "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/content"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowModuleId",
          "Content"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowModuleId": {
            "location": "uri",
            "locationName": "ContactFlowModuleId"
          },
          "Content": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateContactFlowModuleMetadata": {
      "http": {
        "requestUri": "/contact-flow-modules/{InstanceId}/{ContactFlowModuleId}/metadata"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowModuleId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowModuleId": {
            "location": "uri",
            "locationName": "ContactFlowModuleId"
          },
          "Name": {},
          "Description": {},
          "State": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateContactFlowName": {
      "http": {
        "requestUri": "/contact-flows/{InstanceId}/{ContactFlowId}/name"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactFlowId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "ContactFlowId": {
            "location": "uri",
            "locationName": "ContactFlowId"
          },
          "Name": {},
          "Description": {}
        }
      }
    },
    "UpdateContactSchedule": {
      "http": {
        "requestUri": "/contact/schedule"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "ContactId",
          "ScheduledTime"
        ],
        "members": {
          "InstanceId": {},
          "ContactId": {},
          "ScheduledTime": {
            "type": "timestamp"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateHoursOfOperation": {
      "http": {
        "requestUri": "/hours-of-operations/{InstanceId}/{HoursOfOperationId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "HoursOfOperationId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "HoursOfOperationId": {
            "location": "uri",
            "locationName": "HoursOfOperationId"
          },
          "Name": {},
          "Description": {},
          "TimeZone": {},
          "Config": {
            "shape": "S21"
          }
        }
      }
    },
    "UpdateInstanceAttribute": {
      "http": {
        "requestUri": "/instance/{InstanceId}/attribute/{AttributeType}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "AttributeType",
          "Value"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "AttributeType": {
            "location": "uri",
            "locationName": "AttributeType"
          },
          "Value": {}
        }
      }
    },
    "UpdateInstanceStorageConfig": {
      "http": {
        "requestUri": "/instance/{InstanceId}/storage-config/{AssociationId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "AssociationId",
          "ResourceType",
          "StorageConfig"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "AssociationId": {
            "location": "uri",
            "locationName": "AssociationId"
          },
          "ResourceType": {
            "location": "querystring",
            "locationName": "resourceType"
          },
          "StorageConfig": {
            "shape": "Sc"
          }
        }
      }
    },
    "UpdateQueueHoursOfOperation": {
      "http": {
        "requestUri": "/queues/{InstanceId}/{QueueId}/hours-of-operation"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId",
          "HoursOfOperationId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          },
          "HoursOfOperationId": {}
        }
      }
    },
    "UpdateQueueMaxContacts": {
      "http": {
        "requestUri": "/queues/{InstanceId}/{QueueId}/max-contacts"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          },
          "MaxContacts": {
            "type": "integer"
          }
        }
      }
    },
    "UpdateQueueName": {
      "http": {
        "requestUri": "/queues/{InstanceId}/{QueueId}/name"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          },
          "Name": {},
          "Description": {}
        }
      }
    },
    "UpdateQueueOutboundCallerConfig": {
      "http": {
        "requestUri": "/queues/{InstanceId}/{QueueId}/outbound-caller-config"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId",
          "OutboundCallerConfig"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          },
          "OutboundCallerConfig": {
            "shape": "S2p"
          }
        }
      }
    },
    "UpdateQueueStatus": {
      "http": {
        "requestUri": "/queues/{InstanceId}/{QueueId}/status"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QueueId",
          "Status"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QueueId": {
            "location": "uri",
            "locationName": "QueueId"
          },
          "Status": {}
        }
      }
    },
    "UpdateQuickConnectConfig": {
      "http": {
        "requestUri": "/quick-connects/{InstanceId}/{QuickConnectId}/config"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QuickConnectId",
          "QuickConnectConfig"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QuickConnectId": {
            "location": "uri",
            "locationName": "QuickConnectId"
          },
          "QuickConnectConfig": {
            "shape": "S2x"
          }
        }
      }
    },
    "UpdateQuickConnectName": {
      "http": {
        "requestUri": "/quick-connects/{InstanceId}/{QuickConnectId}/name"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "QuickConnectId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "QuickConnectId": {
            "location": "uri",
            "locationName": "QuickConnectId"
          },
          "Name": {},
          "Description": {}
        }
      }
    },
    "UpdateRoutingProfileConcurrency": {
      "http": {
        "requestUri": "/routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "RoutingProfileId",
          "MediaConcurrencies"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "RoutingProfileId": {
            "location": "uri",
            "locationName": "RoutingProfileId"
          },
          "MediaConcurrencies": {
            "shape": "S38"
          }
        }
      }
    },
    "UpdateRoutingProfileDefaultOutboundQueue": {
      "http": {
        "requestUri": "/routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "RoutingProfileId",
          "DefaultOutboundQueueId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "RoutingProfileId": {
            "location": "uri",
            "locationName": "RoutingProfileId"
          },
          "DefaultOutboundQueueId": {}
        }
      }
    },
    "UpdateRoutingProfileName": {
      "http": {
        "requestUri": "/routing-profiles/{InstanceId}/{RoutingProfileId}/name"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "RoutingProfileId"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "RoutingProfileId": {
            "location": "uri",
            "locationName": "RoutingProfileId"
          },
          "Name": {},
          "Description": {}
        }
      }
    },
    "UpdateRoutingProfileQueues": {
      "http": {
        "requestUri": "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues"
      },
      "input": {
        "type": "structure",
        "required": [
          "InstanceId",
          "RoutingProfileId",
          "QueueConfigs"
        ],
        "members": {
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          },
          "RoutingProfileId": {
            "location": "uri",
            "locationName": "RoutingProfileId"
          },
          "QueueConfigs": {
            "shape": "S10"
          }
        }
      }
    },
    "UpdateSecurityProfile": {
      "http": {
        "requestUri": "/security-profiles/{InstanceId}/{SecurityProfileId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "SecurityProfileId",
          "InstanceId"
        ],
        "members": {
          "Description": {},
          "Permissions": {
            "shape": "S3f"
          },
          "SecurityProfileId": {
            "location": "uri",
            "locationName": "SecurityProfileId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "UpdateUserHierarchy": {
      "http": {
        "requestUri": "/users/{InstanceId}/{UserId}/hierarchy"
      },
      "input": {
        "type": "structure",
        "required": [
          "UserId",
          "InstanceId"
        ],
        "members": {
          "HierarchyGroupId": {},
          "UserId": {
            "location": "uri",
            "locationName": "UserId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "UpdateUserHierarchyGroupName": {
      "http": {
        "requestUri": "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name"
      },
      "input": {
        "type": "structure",
        "required": [
          "Name",
          "HierarchyGroupId",
          "InstanceId"
        ],
        "members": {
          "Name": {},
          "HierarchyGroupId": {
            "location": "uri",
            "locationName": "HierarchyGroupId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "UpdateUserHierarchyStructure": {
      "http": {
        "requestUri": "/user-hierarchy-structure/{InstanceId}"
      },
      "input": {
        "type": "structure",
        "required": [
          "HierarchyStructure",
          "InstanceId"
        ],
        "members": {
          "HierarchyStructure": {
            "type": "structure",
            "members": {
              "LevelOne": {
                "shape": "Sdt"
              },
              "LevelTwo": {
                "shape": "Sdt"
              },
              "LevelThree": {
                "shape": "Sdt"
              },
              "LevelFour": {
                "shape": "Sdt"
              },
              "LevelFive": {
                "shape": "Sdt"
              }
            }
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "UpdateUserIdentityInfo": {
      "http": {
        "requestUri": "/users/{InstanceId}/{UserId}/identity-info"
      },
      "input": {
        "type": "structure",
        "required": [
          "IdentityInfo",
          "UserId",
          "InstanceId"
        ],
        "members": {
          "IdentityInfo": {
            "shape": "S3q"
          },
          "UserId": {
            "location": "uri",
            "locationName": "UserId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "UpdateUserPhoneConfig": {
      "http": {
        "requestUri": "/users/{InstanceId}/{UserId}/phone-config"
      },
      "input": {
        "type": "structure",
        "required": [
          "PhoneConfig",
          "UserId",
          "InstanceId"
        ],
        "members": {
          "PhoneConfig": {
            "shape": "S3u"
          },
          "UserId": {
            "location": "uri",
            "locationName": "UserId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "UpdateUserRoutingProfile": {
      "http": {
        "requestUri": "/users/{InstanceId}/{UserId}/routing-profile"
      },
      "input": {
        "type": "structure",
        "required": [
          "RoutingProfileId",
          "UserId",
          "InstanceId"
        ],
        "members": {
          "RoutingProfileId": {},
          "UserId": {
            "location": "uri",
            "locationName": "UserId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    },
    "UpdateUserSecurityProfiles": {
      "http": {
        "requestUri": "/users/{InstanceId}/{UserId}/security-profiles"
      },
      "input": {
        "type": "structure",
        "required": [
          "SecurityProfileIds",
          "UserId",
          "InstanceId"
        ],
        "members": {
          "SecurityProfileIds": {
            "shape": "S3z"
          },
          "UserId": {
            "location": "uri",
            "locationName": "UserId"
          },
          "InstanceId": {
            "location": "uri",
            "locationName": "InstanceId"
          }
        }
      }
    }
  },
  "shapes": {
    "S5": {
      "type": "structure",
      "members": {
        "Name": {},
        "LexRegion": {}
      }
    },
    "S8": {
      "type": "structure",
      "members": {
        "AliasArn": {}
      }
    },
    "Sc": {
      "type": "structure",
      "required": [
        "StorageType"
      ],
      "members": {
        "AssociationId": {},
        "StorageType": {},
        "S3Config": {
          "type": "structure",
          "required": [
            "BucketName",
            "BucketPrefix"
          ],
          "members": {
            "BucketName": {},
            "BucketPrefix": {},
            "EncryptionConfig": {
              "shape": "Si"
            }
          }
        },
        "KinesisVideoStreamConfig": {
          "type": "structure",
          "required": [
            "Prefix",
            "RetentionPeriodHours",
            "EncryptionConfig"
          ],
          "members": {
            "Prefix": {},
            "RetentionPeriodHours": {
              "type": "integer"
            },
            "EncryptionConfig": {
              "shape": "Si"
            }
          }
        },
        "KinesisStreamConfig": {
          "type": "structure",
          "required": [
            "StreamArn"
          ],
          "members": {
            "StreamArn": {}
          }
        },
        "KinesisFirehoseConfig": {
          "type": "structure",
          "required": [
            "FirehoseArn"
          ],
          "members": {
            "FirehoseArn": {}
          }
        }
      }
    },
    "Si": {
      "type": "structure",
      "required": [
        "EncryptionType",
        "KeyId"
      ],
      "members": {
        "EncryptionType": {},
        "KeyId": {}
      }
    },
    "Sw": {
      "type": "list",
      "member": {}
    },
    "S10": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "QueueReference",
          "Priority",
          "Delay"
        ],
        "members": {
          "QueueReference": {
            "shape": "S12"
          },
          "Priority": {
            "type": "integer"
          },
          "Delay": {
            "type": "integer"
          }
        }
      }
    },
    "S12": {
      "type": "structure",
      "required": [
        "QueueId",
        "Channel"
      ],
      "members": {
        "QueueId": {},
        "Channel": {}
      }
    },
    "S1e": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S21": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Day",
          "StartTime",
          "EndTime"
        ],
        "members": {
          "Day": {},
          "StartTime": {
            "shape": "S24"
          },
          "EndTime": {
            "shape": "S24"
          }
        }
      }
    },
    "S24": {
      "type": "structure",
      "required": [
        "Hours",
        "Minutes"
      ],
      "members": {
        "Hours": {
          "type": "integer"
        },
        "Minutes": {
          "type": "integer"
        }
      }
    },
    "S2b": {
      "type": "string",
      "sensitive": true
    },
    "S2p": {
      "type": "structure",
      "members": {
        "OutboundCallerIdName": {},
        "OutboundCallerIdNumberId": {},
        "OutboundFlowId": {}
      }
    },
    "S2x": {
      "type": "structure",
      "required": [
        "QuickConnectType"
      ],
      "members": {
        "QuickConnectType": {},
        "UserConfig": {
          "type": "structure",
          "required": [
            "UserId",
            "ContactFlowId"
          ],
          "members": {
            "UserId": {},
            "ContactFlowId": {}
          }
        },
        "QueueConfig": {
          "type": "structure",
          "required": [
            "QueueId",
            "ContactFlowId"
          ],
          "members": {
            "QueueId": {},
            "ContactFlowId": {}
          }
        },
        "PhoneConfig": {
          "type": "structure",
          "required": [
            "PhoneNumber"
          ],
          "members": {
            "PhoneNumber": {}
          }
        }
      }
    },
    "S38": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Channel",
          "Concurrency"
        ],
        "members": {
          "Channel": {},
          "Concurrency": {
            "type": "integer"
          }
        }
      }
    },
    "S3f": {
      "type": "list",
      "member": {}
    },
    "S3q": {
      "type": "structure",
      "members": {
        "FirstName": {},
        "LastName": {},
        "Email": {}
      }
    },
    "S3u": {
      "type": "structure",
      "required": [
        "PhoneType"
      ],
      "members": {
        "PhoneType": {},
        "AutoAccept": {
          "type": "boolean"
        },
        "AfterContactWorkTimeLimit": {
          "type": "integer"
        },
        "DeskPhoneNumber": {}
      }
    },
    "S3z": {
      "type": "list",
      "member": {}
    },
    "S5h": {
      "type": "structure",
      "members": {
        "AttributeType": {},
        "Value": {}
      }
    },
    "S66": {
      "type": "structure",
      "members": {
        "Id": {},
        "Arn": {},
        "Name": {}
      }
    },
    "S6a": {
      "type": "structure",
      "members": {
        "Id": {},
        "Arn": {},
        "Name": {}
      }
    },
    "S6n": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S6r": {
      "type": "structure",
      "members": {
        "Queues": {
          "type": "list",
          "member": {}
        },
        "Channels": {
          "type": "list",
          "member": {}
        }
      }
    },
    "S6u": {
      "type": "list",
      "member": {}
    },
    "S6x": {
      "type": "structure",
      "members": {
        "Name": {},
        "Unit": {}
      }
    },
    "S75": {
      "type": "structure",
      "members": {
        "Queue": {
          "type": "structure",
          "members": {
            "Id": {},
            "Arn": {}
          }
        },
        "Channel": {}
      }
    },
    "S7d": {
      "type": "string",
      "sensitive": true
    },
    "S7g": {
      "type": "structure",
      "members": {
        "Name": {},
        "Threshold": {
          "type": "structure",
          "members": {
            "Comparison": {},
            "ThresholdValue": {
              "type": "double"
            }
          }
        },
        "Statistic": {},
        "Unit": {}
      }
    },
    "S9x": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Id": {},
          "Arn": {},
          "Name": {},
          "QuickConnectType": {}
        }
      }
    },
    "Sbb": {
      "type": "list",
      "member": {
        "shape": "Sbc"
      }
    },
    "Sbc": {
      "type": "structure",
      "members": {
        "TagConditionOperator": {},
        "TagKey": {},
        "TagValue": {}
      }
    },
    "Sbe": {
      "type": "structure",
      "members": {
        "OrConditions": {
          "shape": "Sbf"
        },
        "AndConditions": {
          "shape": "Sbf"
        },
        "StringCondition": {
          "type": "structure",
          "members": {
            "FieldName": {},
            "Value": {},
            "ComparisonType": {}
          }
        },
        "TagCondition": {
          "shape": "Sbc"
        },
        "HierarchyGroupCondition": {
          "type": "structure",
          "members": {
            "Value": {},
            "HierarchyGroupMatchType": {}
          }
        }
      }
    },
    "Sbf": {
      "type": "list",
      "member": {
        "shape": "Sbe"
      }
    },
    "Scf": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "required": [
          "Value",
          "Type"
        ],
        "members": {
          "Value": {},
          "Type": {}
        }
      }
    },
    "Sdt": {
      "type": "structure",
      "required": [
        "Name"
      ],
      "members": {
        "Name": {}
      }
    }
  }
}