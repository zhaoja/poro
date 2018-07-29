let es_data = {
    "from": 0,
    "size": 30,
    "query": {
        "bool": {
            "must": [
            {
                "query_string": {
                    "query": "*"
                }
            }]
        }
    }
}
export const getEsSearch =()=> JSON.stringify(es_data)

export const getEsGather = ()=>{
    es_data.aggs ={
          "file_type" :{
                "nested": {
                    "path": "file"
                },
                "aggs":{
                    "file_type": {
                        "filter": {
                        "bool": {
                          "must": [ { "exists": { "field": "file.type" } } ],
                          "must_not": [{ "terms": { "file.type": [ "unknown", "" ] }} ]
                        }
                      },
                      "aggs":{
                        "details": {
                          "terms": {
                            "field": "file.type",
                            "size": 20
                          }
                        },
                        "可执行程序": {
                          "filter": {
                            "regexp": {
                              "file.type": "BinExecute.*"
                            }
                          }
                        },
                        "脚本": {
                          "filter": {
                            "regexp": {
                              "file.type": "Script.*"
                            }
                          }
                        },
                        "文档": {
                          "filter": {
                            "regexp": {
                              "file.type": "Document.*"
                            }
                          }
                        },
                        "压缩包": {
                          "filter": {
                            "regexp": {
                              "file.type": "Archive.*"
                            }
                          }
                        },
                        "图片": {
                          "filter": {
                            "regexp": {
                              "file.type": "Picture.*"
                            }
                          }
                        },
                        "文本": {
                          "filter": {
                            "regexp": {
                              "file.type": "Text.*"
                            }
                          }
                        },
                        "多媒体": {
                          "filter": {
                            "regexp": {
                              "file.type": "Media.*"
                            }
                          }
                        },
                        "软件数据": {
                          "filter": {
                            "regexp": {
                              "file.type": "SoftData.*"
                            }
                          }
                        },
                        "其他": {
                          "filter": {
                            "regexp": {
                              "file.type": "Other.*"
                            }
                          }
                        }
                     }
                    }
                }

          },

        "etype":{
            "terms":{
                "field":"etype",
                "size":6
            }
        },
        "bhr_label":{
            "terms":{
                "field":"bhr_label",
                "size":6 
            }
        },
        "proto":{
            "terms":{
                "field":"proto",
                "size":6 
            }
        },
        "ip":{
            "terms":{
                "field":"ip",
                "size":6 
            }
        },
        "domain_name": {
            "nested": {
                "path": "domain"
            },
            "aggs":{
                "domain_name": {
                    "terms": {
                        "field": "domain.name",
                        "size":6 
                    }
                }
            }
        }
    }
    return JSON.stringify(es_data)
}
