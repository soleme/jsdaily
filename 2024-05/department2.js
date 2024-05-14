const jsonData = [
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv2',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv2",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": "SPC_Lv1",
        "cust_orgLevel": "2",
        "endDate": "/Date(253402214400000)/",
        "name": "Dep_Lv2",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv1',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv1",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": null,
        "cust_orgLevel": "1",
        "endDate": "/Date(253402214400000)/",
        "name": "Dep_Lv1",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv3',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv3",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": "SPC_Lv2",
        "cust_orgLevel": "3",
        "endDate": "/Date(253402214400000)/",
        "name": "Dep_Lv3",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv5',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv5",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": "SPC_Lv3",
        "cust_orgLevel": "5",
        "endDate": "/Date(253402214400000)/",
        "name": "Test Depart",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv7',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv7",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": "SPC_Lv5",
        "cust_orgLevel": "7",
        "endDate": "/Date(253402214400000)/",
        "name": "Dep_Lv7",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000005',startDate=datetime'1900-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000005",
        "startDate": "/Date(-2208988800000)/",
        "cust_legalEntity": "8000",
        "parent": null,
        "cust_orgLevel": "1",
        "endDate": "/Date(253402214400000)/",
        "name": "에스피씨(주)",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000006',startDate=datetime'1900-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000006",
        "startDate": "/Date(-2208988800000)/",
        "cust_legalEntity": "8000",
        "parent": "99000005",
        "cust_orgLevel": "5",
        "endDate": "/Date(253402214400000)/",
        "name": "인사실_에스피씨(주)",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000008',startDate=datetime'1900-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000008",
        "startDate": "/Date(-2208988800000)/",
        "cust_legalEntity": "8000",
        "parent": "99000006",
        "cust_orgLevel": "7",
        "endDate": "/Date(253402214400000)/",
        "name": "총무팀_에스피씨(주)",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000033',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000033",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_SPC",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000054',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000054",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000012',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000012",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "SPCIN",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000026',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000026",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000034',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000034",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000005",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "총무인사팀",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000037',startDate=datetime'2024-02-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000037",
        "startDate": "/Date(1706745600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000045',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000045",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "50001613",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "경영지원팀",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000021',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000021",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000022",
        "cust_orgLevel": "7",
        "endDate": "/Date(253402214400000)/",
        "name": "피비노무",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000013',startDate=datetime'2024-03-11T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000013",
        "startDate": "/Date(1710115200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000027',startDate=datetime'2024-03-13T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000027",
        "startDate": "/Date(1710288000000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000055',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000055",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000057',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000057",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000061',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000061",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서2_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000051',startDate=datetime'2024-04-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000051",
        "startDate": "/Date(1711929600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000014",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000047',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000047",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000014",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "SPC",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000014',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000014",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "에스피씨_인사팀",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000053',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000053",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000065',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000065",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "에스피씨_인사팀",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000007',startDate=datetime'2024-03-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000007",
        "startDate": "/Date(1709251200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000006",
        "cust_orgLevel": "7",
        "endDate": "/Date(253402214400000)/",
        "name": "인사팀_에스피씨(주)",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000025',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000025",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000044',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000044",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "GFS",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000032',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000032",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "34300606",
        "cust_orgLevel": "5",
        "endDate": "/Date(253402214400000)/",
        "name": "t",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000018',startDate=datetime'2024-03-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000018",
        "startDate": "/Date(1709251200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000006",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000046',startDate=datetime'2024-05-09T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000046",
        "startDate": "/Date(1715212800000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트_서울동부",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000052',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000052",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "TEST_SPC",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000060',startDate=datetime'2024-03-11T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000060",
        "startDate": "/Date(1710115200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_PBPS덕영",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000042',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000042",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000039',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000039",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "샌드팜_시화(TEST)",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000036',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000036",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000040',startDate=datetime'2024-03-27T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000040",
        "startDate": "/Date(1711497600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트_끼꼬끼꼬",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000058',startDate=datetime'2024-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000058",
        "startDate": "/Date(1704067200000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "TEST",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000059',startDate=datetime'2024-03-14T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000059",
        "startDate": "/Date(1710374400000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "test_경영",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='99000062',startDate=datetime'2024-03-12T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "99000062",
        "startDate": "/Date(1710201600000)/",
        "cust_legalEntity": "8000",
        "parent": "99000007",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "테스트부서_에스피씨",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv8',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv8",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": "SPC_Lv7",
        "cust_orgLevel": "8",
        "endDate": "/Date(253402214400000)/",
        "name": "SPC_Lv8",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv4',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv4",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": "SPC_Lv2",
        "cust_orgLevel": "4",
        "endDate": "/Date(253402214400000)/",
        "name": "Dep_Lv4",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv6',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv6",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": "SPC_Lv1",
        "cust_orgLevel": "6",
        "endDate": "/Date(253402214400000)/",
        "name": "Test Depart",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    },
    {
        "__metadata": {
            "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FODepartment(externalCode='SPC_Lv9',startDate=datetime'2020-01-01T00:00:00')",
            "type": "SFOData.FODepartment"
        },
        "externalCode": "SPC_Lv9",
        "startDate": "/Date(1577836800000)/",
        "cust_legalEntity": "8000",
        "parent": "SPC_Lv8",
        "cust_orgLevel": "9",
        "endDate": "/Date(253402214400000)/",
        "name": "SPC_Lv9",
        "status": "A",
        "cust_legalEntityNav": {
            "__metadata": {
                "uri": "https://port8080-workspaces-ws-hcw2k.jp10.applicationstudio.cloud.sap/odata/v2/FOCompany(externalCode='8000',startDate=datetime'2024-04-09T00:00:00')",
                "type": "SFOData.FOCompany"
            },
            "name": "에스피씨㈜"
        }
    }
]

// 코드1
// function processDepartmentData(departmentData) {
//     const departments = {};
//
//     departmentData.forEach(department => {
//         const { externalCode, startDate, cust_legalEntity, parent, cust_orgLevel, name, status } = department;
//
//         if (!departments[externalCode]) {
//             departments[externalCode] = {
//                 externalCode,
//                 startDate: new Date(startDate),
//                 legalEntity: cust_legalEntity,
//                 parent,
//                 orgLevel: cust_orgLevel,
//                 name,
//                 status,
//                 children: []
//             };
//         }
//
//         if (parent && departments[parent]) {
//             departments[parent].children.push(departments[externalCode]);
//         }
//     });
//
//     return departments;
// }
//
// function buildDepartmentTable(departmentHierarchy, level = 2) {
//     const headers = ["externalCode", "parent", "name"];
//     const levelHeaders = [];
//     for (let i = level; i <= 7; i++) {
//         levelHeaders.push(`level${i}`);
//     }
//     headers.push(...levelHeaders);
//
//     const rows = [];
//
//     function traverseHierarchy(departments, levelPrefix, parentCode) {
//         for (const [externalCode, department] of Object.entries(departments)) {
//             const row = {
//                 externalCode,
//                 parent: parentCode,
//                 name: department.name
//             };
//
//             row[`level${department.orgLevel}`] = department.name;
//
//             rows.push(row);
//
//             if (department.children.length > 0) {
//                 traverseHierarchy(department.children, levelPrefix, externalCode);
//             }
//         }
//     }
//
//     traverseHierarchy(departmentHierarchy, "", "");
//
//     return { headers, rows };
// }
//
// const departmentHierarchy = processDepartmentData(jsonData);
// const tableData = buildDepartmentTable(departmentHierarchy);
//
// console.log("부서 테이블 데이터:");
// console.log(tableData);


// 코드2
function processDepartmentData(departmentData) {
    const departments = {};

    departmentData.forEach(department => {
        const { externalCode, startDate, cust_legalEntity, parent, cust_orgLevel, name, status } = department;

        if (!departments[externalCode]) {
            departments[externalCode] = {
                externalCode,
                startDate: new Date(startDate),
                legalEntity: cust_legalEntity,
                parent,
                orgLevel: cust_orgLevel,
                name,
                status,
                children: []
            };
        }

        if (parent && departments[parent]) {
            departments[parent].children.push(departments[externalCode]);
        }
    });

    return departments;
}

const departmentHierarchy = processDepartmentData(jsonData);

console.log("부서 계층 구조:");
console.log(JSON.stringify(departmentHierarchy, null, 2));

// 코드3
// function processDepartmentData(departmentData) {
//     const departments = [];
//     const rootDepartments = [];
//     const departmentLevels = {};
//
//     departmentData.forEach(department => {
//         const { externalCode, startDate, cust_legalEntity, parent, cust_orgLevel, name, status } = department;
//
//         departments.push({
//             externalCode,
//             startDate: new Date(startDate),
//             legalEntity: cust_legalEntity,
//             parent,
//             orgLevel: cust_orgLevel,
//             name,
//             status
//         });
//
//         if (!departmentLevels[cust_orgLevel]) {
//             departmentLevels[cust_orgLevel] = [];
//         }
//         departmentLevels[cust_orgLevel].push({
//             externalCode,
//             name
//         });
//
//         if (!parent) {
//             rootDepartments.push({
//                 externalCode,
//                 name,
//                 description: "부모 부서가 없는 루트 부서입니다."
//             });
//         }
//     });
//
//     return {
//         departments,
//         rootDepartments,
//         departmentLevels
//     };
// }
//
// const { departments, rootDepartments, departmentLevels } = processDepartmentData(jsonData);
// console.log(departments);
// console.log("루트 부서:");
// console.log(rootDepartments);
// console.log("부서 레벨:");
// console.log(departmentLevels);

// function processDepartmentData(departmentData) {
//     const departments = [];
//     const rootDepartments = [];
//     const departmentLevels = {};
//
//     departmentData.forEach(department => {
//         const { externalCode, startDate, cust_legalEntity, parent, cust_orgLevel, name, status } = department;
//
//         departments.push({
//             externalCode,
//             startDate: new Date(startDate),
//             legalEntity: cust_legalEntity,
//             parent,
//             orgLevel: cust_orgLevel,
//             name,
//             status
//         });
//
//         if (!departmentLevels[cust_orgLevel]) {
//             departmentLevels[cust_orgLevel] = [];
//         }
//         departmentLevels[cust_orgLevel].push({
//             externalCode,
//             name
//         });
//
//         if (!parent) {
//             rootDepartments.push({
//                 externalCode,
//                 name
//             });
//         }
//     });
//
//     return {
//         departments,
//         rootDepartments,
//         departmentLevels
//     };
// }

// const { departments, rootDepartments, departmentLevels } = processDepartmentData(jsonData);
// //console.log(departments);
// console.log("Root Departments:", rootDepartments);
// console.log(departmentLevels);

// function processDepartmentData(departmentData) {
//     const departments = [];
//     const departmentLevels = {};
//
//     departmentData.forEach(department => {
//         const { externalCode, startDate, cust_legalEntity, parent, cust_orgLevel, name, status } = department;
//
//         departments.push({
//             externalCode,
//             startDate: new Date(startDate),
//             legalEntity: cust_legalEntity,
//             parent,
//             orgLevel: cust_orgLevel,
//             name,
//             status
//         });
//
//         if (!departmentLevels[cust_orgLevel]) {
//             departmentLevels[cust_orgLevel] = [];
//         }
//         departmentLevels[cust_orgLevel].push({
//             externalCode,
//             name
//         });
//     });
//
//     return {
//         departments,
//         departmentLevels
//     };
// }
//
// const { departments, departmentLevels } = processDepartmentData(jsonData);
// console.log(departments);
// console.log(departmentLevels);