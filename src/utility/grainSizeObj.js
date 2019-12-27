const grainSizeObj = {
  question: "Is the majority of the sample coarse or fine grained?",
  options: {
    coarse: {
      descrip: "The sample is >50% coarse grains, <50% fines",
      question: "What is the sand to gravel ratio?",
      options: {
        gravel: {
          descrip: "The amount of gravel > sand",
          question: "The sample is made of what % of fine grain sediments?",
          options: {
            5: {
              descrip: "sample contains < 5% fines",
              question: "Is the sample well graded or poorly graded?",
              options: {
                wellgraded: {
                  descrip:
                    "A well graded soil is a soil that contains particles of a wide range of sizes and has a good representation of all sizes from the No. 4 to No. 200 sieves.",
                  question: "Is the sample > or < 15% sand?",
                  options: {
                    "<15% sand": { symbol: "GW", name: "well graded gravel" },
                    ">15% sand": {
                      symbol: "GW",
                      name: "well graded gravel with sand"
                    }
                  }
                },
                poorlygraded: {
                  descrip:
                    "A poorly graded soil is a soil that does not have a good representation of all sizes of particles from the No. 4 to No. 200 sieve.",
                  question: "Is the sample > or < 15% sand?",
                  options: {
                    "<15% sand": {
                      symbol: "GP",
                      name: "poorly graded gravel"
                    },
                    ">15% sand": {
                      symbol: "GP",
                      name: "poorly graded gravel with sand"
                    }
                  }
                }
              }
            },
            10: {
              descrip: "sample contains 6-14% fines",
              question: "Is the sample well graded or poorly graded?",
              options: {
                wellgraded: {
                  descrip:
                    "A well graded soil is a soil that contains particles of a wide range of sizes and has a good representation of all sizes from the No. 4 to No. 200 sieves.",
                  question: "Are the fines non-plastic or plastic?",
                  options: {
                    nonplastic: {
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                      question: "Is the sample > or < 15% sand?",
                      options: {
                        "<15% sand": {
                          symbol: "GW-GM",
                          name: "well graded gravel with silt"
                        },
                        ">15% sand": {
                          symbol: "GW-GM",
                          name: "well graded gravel with silt and sand"
                        }
                      }
                    },
                    plastic: {
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                      question: "Is the sample > or < 15% sand?",
                      options: {
                        "<15% sand": {
                          symbol: "GW-GC",
                          name: "well graded gravel with clay"
                        },
                        ">15% sand": {
                          symbol: "GW-GC",
                          name: "well graded gravel with clay and sand"
                        }
                      }
                    }
                  }
                },
                poorlygraded: {
                  descrip:
                    "A poorly graded soil is a soil that does not have a good representation of all sizes of particles from the No. 4 to No. 200 sieve.",
                  question: "Are fines plastic or non-plastic?",
                  options: {
                    nonplastic: {
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                      question: "Is the sample > or < 15% sand?",
                      options: {
                        "<15% sand": {
                          symbol: "GP-GM",
                          name: "poorly graded gravel with silt"
                        },
                        ">15% sand": {
                          symbol: "GP-GM",
                          name: "poorly graded gravel with silt and sand"
                        }
                      }
                    },
                    plastic: {
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                      question: "Is the sample > or < 15% sand?",
                      options: {
                        "<15% sand": {
                          symbol: "GP-GC",
                          name: "poorly graded gravel with clay"
                        },
                        ">15% sand": {
                          symbol: "GP-GC",
                          name: "poorly graded gravel with clay and sand"
                        }
                      }
                    }
                  }
                }
              }
            },
            15: {
              descrip: "sample contains > 15% fines",
              question: "Are the fines non-plastic or plastic?",
              options: {
                nonplastic: {
                  descrip:
                    "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                  question: "Is the sample > or < 15% sand?",
                  options: {
                    "<15% sand": {
                      symbol: "GM",
                      name: "silty gravel"
                    },
                    ">15% sand": {
                      symbol: "GM",
                      name: "silty gravel with sand"
                    }
                  }
                },
                plastic: {
                  descrip:
                    "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                  question: "Is the sample > or < 15% sand?",
                  options: {
                    "<15% sand": {
                      symbol: "GC",
                      name: "clayey gravel"
                    },
                    ">15% sand": {
                      symbol: "GC",
                      name: "clayey gravel with sand"
                    }
                  }
                }
              }
            }
          }
        },
        sand: {
          descrip: "The amount of gravel < sand",
          question: "The sample is made of what % of fine grain sediments?",
          options: {
            5: {
              descrip: "sample contains < 5% fines",
              question: "Is the sample well graded or poorly graded?",
              options: {
                wellgraded: {
                  descrip:
                    "A well graded soil is a soil that contains particles of a wide range of sizes and has a good representation of all sizes from the No. 4 to No. 200 sieves.",
                  question: "Is the sample > or < 15% gravel?",
                  options: {
                    "<15% gravel": { symbol: "SW", name: "well graded sand" },
                    ">15% gravel": {
                      symbol: "SW",
                      name: "well graded sand with gravel"
                    }
                  }
                },
                poorlygraded: {
                  descrip:
                    "A poorly graded soil is a soil that does not have a good representation of all sizes of particles from the No. 4 to No. 200 sieve.",
                  question: "Is the sample > or < 15% gravel?",
                  options: {
                    "<15% sand": {
                      symbol: "SP",
                      name: "poorly graded sand"
                    },
                    ">15% sand": {
                      symbol: "SP",
                      name: "poorly graded sand with gravel"
                    }
                  }
                }
              }
            },
            10: {
              descrip: "sample contains 6-14% fines",
              question: "Is the sample well graded or poorly graded?",
              options: {
                wellgraded: {
                  descrip:
                    "A well graded soil is a soil that contains particles of a wide range of sizes and has a good representation of all sizes from the No. 4 to No. 200 sieves.",
                  question: "Are the fines non-plastic or plastic?",
                  options: {
                    nonplastic: {
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                      question: "Is the sample > or < 15% gravel?",
                      options: {
                        "<15% gravel": {
                          symbol: "SW-SM",
                          name: "well graded sand with silt"
                        },
                        ">15% gravel": {
                          symbol: "SW-SM",
                          name: "well graded sand with silt and gravel"
                        }
                      }
                    },
                    plastic: {
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                      question: "Is the sample > or < 15% gravel?",
                      options: {
                        "<15% gravel": {
                          symbol: "SW-SC",
                          name: "well graded sand with clay"
                        },
                        ">15% gravel": {
                          symbol: "SW-SC",
                          name: "well graded sand with clay and gravel"
                        }
                      }
                    }
                  }
                },
                poorlygraded: {
                  descrip:
                    "A poorly graded soil is a soil that does not have a good representation of all sizes of particles from the No. 4 to No. 200 sieve.",
                  question: "Are fines plastic or non-plastic?",
                  options: {
                    nonplastic: {
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                      question: "Is the sample > or < 15% gravel?",
                      options: {
                        "<15% gravel": {
                          symbol: "SP-SM",
                          name: "poorly graded sand with silt"
                        },
                        ">15% gravel": {
                          symbol: "SP-SM",
                          name: "poorly graded sand with silt and gravel"
                        }
                      }
                    },
                    plastic: {
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                      question: "Is the sample > or < 15% gravel?",
                      options: {
                        "<15% gravel": {
                          symbol: "SP-SC",
                          name: "poorly graded sand with clay"
                        },
                        ">15% gravel": {
                          symbol: "SP-SC",
                          name: "poorly graded sand with clay and gravel"
                        }
                      }
                    }
                  }
                }
              }
            },
            15: {
              descrip: "sample contains > 15% fines",
              question: "Are the fines non-plastic or plastic?",
              options: {
                nonplastic: {
                  descrip:
                    "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                  question: "Is the sample > or < 15% gravel?",
                  options: {
                    "<15% gravel": {
                      symbol: "SM",
                      name: "silty gravel"
                    },
                    ">15% gravel": {
                      symbol: "SM",
                      name: "silty gravel with sand"
                    }
                  }
                },
                plastic: {
                  descrip:
                    "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                  question: "Is the sample > or < 15% gravel?",
                  options: {
                    "<15% gravel": {
                      symbol: "SC",
                      name: "clayey sand"
                    },
                    ">15% gravel": {
                      symbol: "SC",
                      name: "clayey sand with gravel"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    fine: {
      descrip: "The sample is <50% coarse graines, >50% fines",
      question: "Does organic content influence soil properties?",
      options: {
        yes: {
          descrip:
            "The soil exhibits properties indicative of biochemical reactions such as oxidation patterns, organic odors, and physical matter such as roots, compost, and microbes.",
          question: "Is the sample > or < 30% coarse grained sediments?",
          options: {
            "<30": {
              question:
                "Is the sample <15% or 15-25% coarse grained sediments?",
              options: {
                "<15%": {
                  symbol: "OL/OH",
                  name: "organic soil"
                },
                "15-25%": {
                  question: "Is the sample more sand or gravel?",
                  options: {
                    "% sand > % gravel": { name: "organic soil with sand" },
                    "% sand < % gravel": { name: "organic soil with gravel" }
                  }
                }
              }
            },
            ">30": {
              question: "Is the sample more sand or gravel?",
              options: {
                "% sand > % gravel": {
                  question: "Is the sample more or less than 15% gravel?",
                  options: {
                    "<15% gravel": {
                      symbol: "OL/OH",
                      name: "sandy organic soil"
                    },
                    ">15% gravel": {
                      symbol: "OL/OH",
                      name: "sandy organic soil with gravel"
                    }
                  }
                },
                "% sand < % gravel": {
                  question: "Is the sample more or less than 15% gravel?",
                  options: {
                    "<15% sand": {
                      symbol: "OL/OH",
                      name: "gravelly organic soil"
                    },
                    ">15% sand": {
                      symbol: "OL/OH",
                      name: "gravelly organic soil with sand"
                    }
                  }
                }
              }
            }
          }
        },
        no: {
          descrip: "The soil contains no organic matter.",
          question: "What is the plasticity of the sample?",
          options: {
            ML: {
              descrip: "Nonplastic to Low",
              question: "Is the sample > or < 30% coarse sediment?",
              options: {
                "<30": {
                  question: "What is the % coarse grain sediment?",
                  options: {
                    "<15%": { symbol: "ML", name: "silt" },
                    "15-25%": {
                      question: "Is the sample more sand or gravel?",
                      options: {
                        "% sand > % gravel": {
                          symbol: "ML",
                          name: "silt with sand"
                        },
                        "% sand < % gravel": {
                          symbol: "ML",
                          name: "silt with gravel"
                        }
                      }
                    }
                  }
                },
                ">30": {
                  question: "Is the sample more sand or gravel?",
                  options: {
                    "% sand > % gravel": {
                      question: "What percent of the sample is gravel?",
                      options: {
                        "<15% gravel": { symbol: "ML", name: "sandy silt" },
                        ">15% gravel": {
                          symbol: "ML",
                          name: "sandy silt with gravel"
                        }
                      }
                    }
                  },
                  "% sand < % gravel": {
                    question: "What percent of the sample is sand?",
                    options: {
                      "<15% sand": { symbol: "ML", name: "gravelly silt" },
                      ">15% sand": {
                        symbol: "ML",
                        name: "gravelly silt with sand"
                      }
                    }
                  }
                }
              }
            },
            CL: {
              descrip: "Medium Plasticity",
              question: "Is the sample > or < 30% coarse sediment?",
              "<30": {
                question: "What % is coarse grained sediment?",
                options: {
                  "<15%": { symbol: "CL", name: "lean clay" },
                  "15-25%": {
                    question: "Is the sample more sand or gravel?",
                    options: {
                      "% sand > % gravel": {
                        symbol: "CL",
                        name: "lean clay with sand"
                      },
                      "% sand < % gravel": {
                        symbol: "CL",
                        name: "lean clay with gravel"
                      }
                    }
                  }
                }
              },
              ">30": {
                question: "Is the sample more sand or gravel?",
                options: {
                  "% sand > % gravel": {
                    question: "Does the sample have > or < 15% gravel?",
                    options: {
                      "<15% gravel": {
                        symbol: "CL",
                        name: "sandy lean clay"
                      },
                      ">15% gravel": {
                        symbol: "CL",
                        name: "sandy lean clay with gravel"
                      }
                    }
                  },
                  "% sand < % gravel": {
                    question: "Does the sample have > or < 15% sand?",
                    options: {
                      "<15% sand": {
                        symbol: "CL",
                        name: "gravelly lean clay"
                      },
                      ">15% sand": {
                        symbol: "CL",
                        name: "gravelly lean clay with sand"
                      }
                    }
                  }
                }
              }
            },
            CH: {
              question: "Is the sample > or < 30% coarse sediment?",
              descrip: "High Plastcity",
              "<30": {
                question: "What % is coarse grained sediment?",
                options: {
                  "<15%": { symbol: "CH", name: "fat clay" },
                  "15-25%": {
                    question: "Is the sample more sand or gravel?",
                    options: {
                      "% sand > % gravel": {
                        symbol: "CH",
                        name: "fat clay with sand"
                      },
                      "% sand < % gravel": {
                        symbol: "CH",
                        name: "fat clay with gravel"
                      }
                    }
                  }
                }
              },
              ">30": {
                question: "Is the sample more sand or gravel?",
                options: {
                  "% sand > % gravel": {
                    question: "Does the sample have > or < 15% gravel?",
                    options: {
                      "<15% gravel": { symbol: "CH", name: "sandy fat clay" },
                      ">15% gravel": {
                        symbol: "CH",
                        name: "sandy fat clay with gravel"
                      }
                    }
                  },
                  "% sand < % gravel": {
                    question: "Does the sample have > or < 15% sand?",
                    options: {
                      "<15% sand": {
                        symbol: "CH",
                        name: "gravelly fat clay"
                      },
                      ">15% sand": {
                        symbol: "CH",
                        name: "gravelly fat clay with sand"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export default grainSizeObj;
