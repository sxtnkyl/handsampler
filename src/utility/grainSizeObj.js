const grainSizeObj = {
  question: "Is the majority of the sample coarse or fine grained?",
  options: [
    {
      id: "coarse",
      descrip: "The sample is >50% coarse grains, <50% fines",
      question: "What is the sand to gravel ratio?",
      options: [
        {
          id: "gravel",
          descrip: "The amount of gravel > sand",
          question: "The sample is made of what % of fine grain sediments?",
          options: [
            {
              id: 5,
              descrip: "sample contains < 5% fines",
              question: "Is the sample well graded or poorly graded?",
              options: [
                {
                  id: "wellgraded",
                  descrip:
                    "A well graded soil is a soil that contains particles of a wide range of sizes and has a good representation of all sizes from the No. 4 to No. 200 sieves.",
                  question: "Is the sample > or < 15% sand?",
                  options: [
                    {
                      id: "<15% sand",
                      symbol: "GW",
                      name: "well graded gravel",
                    },
                    {
                      id: ">15% sand",
                      symbol: "GW",
                      name: "well graded gravel with sand",
                    },
                  ],
                },
                {
                  id: "poorlygraded",
                  descrip:
                    "A poorly graded soil is a soil that does not have a good representation of all sizes of particles from the No. 4 to No. 200 sieve.",
                  question: "Is the sample > or < 15% sand?",
                  options: [
                    {
                      id: "<15% sand",
                      symbol: "GP",
                      name: "poorly graded gravel",
                    },
                    {
                      id: ">15% sand",
                      symbol: "GP",
                      name: "poorly graded gravel with sand",
                    },
                  ],
                },
              ],
            },
            {
              id: 10,
              descrip: "sample contains 6-14% fines",
              question: "Is the sample well graded or poorly graded?",
              options: [
                {
                  id: "wellgraded",
                  descrip:
                    "A well graded soil is a soil that contains particles of a wide range of sizes and has a good representation of all sizes from the No. 4 to No. 200 sieves.",
                  question: "Are the fines non-plastic or plastic?",
                  options: [
                    {
                      id: "nonplastic",
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                      question: "Is the sample > or < 15% sand?",
                      options: [
                        {
                          id: "<15% sand",
                          symbol: "GW-GM",
                          name: "well graded gravel with silt",
                        },
                        {
                          id: ">15% sand",
                          symbol: "GW-GM",
                          name: "well graded gravel with silt and sand",
                        },
                      ],
                    },
                    {
                      id: "plastic",
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                      question: "Is the sample > or < 15% sand?",
                      options: [
                        {
                          id: "<15% sand",
                          symbol: "GW-GC",
                          name: "well graded gravel with clay",
                        },
                        {
                          id: ">15% sand",
                          symbol: "GW-GC",
                          name: "well graded gravel with clay and sand",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "poorlygraded",
                  descrip:
                    "A poorly graded soil is a soil that does not have a good representation of all sizes of particles from the No. 4 to No. 200 sieve.",
                  question: "Are fines plastic or non-plastic?",
                  options: [
                    {
                      id: "nonplastic",
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                      question: "Is the sample > or < 15% sand?",
                      options: [
                        {
                          id: "<15% sand",
                          symbol: "GP-GM",
                          name: "poorly graded gravel with silt",
                        },
                        {
                          id: ">15% sand",
                          symbol: "GP-GM",
                          name: "poorly graded gravel with silt and sand",
                        },
                      ],
                    },
                    {
                      id: "plastic",
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                      question: "Is the sample > or < 15% sand?",
                      options: [
                        {
                          id: "<15% sand",
                          symbol: "GP-GC",
                          name: "poorly graded gravel with clay",
                        },
                        {
                          id: ">15% sand",
                          symbol: "GP-GC",
                          name: "poorly graded gravel with clay and sand",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 15,
              descrip: "sample contains > 15% fines",
              question: "Are the fines non-plastic or plastic?",
              options: [
                {
                  id: "nonplastic",
                  descrip:
                    "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                  question: "Is the sample > or < 15% sand?",
                  options: [
                    {
                      id: "<15% sand",
                      symbol: "GM",
                      name: "silty gravel",
                    },
                    {
                      id: ">15% sand",
                      symbol: "GM",
                      name: "silty gravel with sand",
                    },
                  ],
                },
                {
                  id: "plastic",
                  descrip:
                    "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                  question: "Is the sample > or < 15% sand?",
                  options: [
                    {
                      id: "<15% sand",
                      symbol: "GC",
                      name: "clayey gravel",
                    },
                    {
                      id: ">15% sand",
                      symbol: "GC",
                      name: "clayey gravel with sand",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "sand",
          descrip: "The amount of gravel < sand",
          question: "The sample is made of what % of fine grain sediments?",
          options: [
            {
              id: 5,
              descrip: "sample contains < 5% fines",
              question: "Is the sample well graded or poorly graded?",
              options: [
                {
                  id: "wellgraded",
                  descrip:
                    "A well graded soil is a soil that contains particles of a wide range of sizes and has a good representation of all sizes from the No. 4 to No. 200 sieves.",
                  question: "Is the sample > or < 15% gravel?",
                  options: [
                    {
                      id: "<15% gravel",
                      symbol: "SW",
                      name: "well graded sand",
                    },
                    {
                      id: ">15% gravel",
                      symbol: "SW",
                      name: "well graded sand with gravel",
                    },
                  ],
                },
                {
                  id: "poorlygraded",
                  descrip:
                    "A poorly graded soil is a soil that does not have a good representation of all sizes of particles from the No. 4 to No. 200 sieve.",
                  question: "Is the sample > or < 15% gravel?",
                  options: [
                    {
                      id: "<15% sand",
                      symbol: "SP",
                      name: "poorly graded sand",
                    },
                    {
                      id: ">15% sand",
                      symbol: "SP",
                      name: "poorly graded sand with gravel",
                    },
                  ],
                },
              ],
            },
            {
              id: 10,
              descrip: "sample contains 6-14% fines",
              question: "Is the sample well graded or poorly graded?",
              options: [
                {
                  id: "wellgraded",
                  descrip:
                    "A well graded soil is a soil that contains particles of a wide range of sizes and has a good representation of all sizes from the No. 4 to No. 200 sieves.",
                  question: "Are the fines non-plastic or plastic?",
                  options: [
                    {
                      id: "nonplastic",
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                      question: "Is the sample > or < 15% gravel?",
                      options: [
                        {
                          id: "<15% gravel",
                          symbol: "SW-SM",
                          name: "well graded sand with silt",
                        },
                        {
                          id: ">15% gravel",
                          symbol: "SW-SM",
                          name: "well graded sand with silt and gravel",
                        },
                      ],
                    },
                    {
                      id: "plastic",
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                      question: "Is the sample > or < 15% gravel?",
                      options: [
                        {
                          id: "<15% gravel",
                          symbol: "SW-SC",
                          name: "well graded sand with clay",
                        },
                        {
                          id: ">15% gravel",
                          symbol: "SW-SC",
                          name: "well graded sand with clay and gravel",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "poorlygraded",
                  descrip:
                    "A poorly graded soil is a soil that does not have a good representation of all sizes of particles from the No. 4 to No. 200 sieve.",
                  question: "Are fines plastic or non-plastic?",
                  options: [
                    {
                      id: "nonplastic",
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                      question: "Is the sample > or < 15% gravel?",
                      options: [
                        {
                          id: "<15% gravel",
                          symbol: "SP-SM",
                          name: "poorly graded sand with silt",
                        },
                        {
                          id: ">15% gravel",
                          symbol: "SP-SM",
                          name: "poorly graded sand with silt and gravel",
                        },
                      ],
                    },
                    {
                      id: "plastic",
                      descrip:
                        "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                      question: "Is the sample > or < 15% gravel?",
                      options: [
                        {
                          id: "<15% gravel",
                          symbol: "SP-SC",
                          name: "poorly graded sand with clay",
                        },
                        {
                          id: ">15% gravel",
                          symbol: "SP-SC",
                          name: "poorly graded sand with clay and gravel",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 15,
              descrip: "sample contains > 15% fines",
              question: "Are the fines non-plastic or plastic?",
              options: [
                {
                  id: "nonplastic",
                  descrip:
                    "A thread of fine soil is rolled over a flat, smooth surface. If the thread cracks or breaks while narrowing down to a smaller diameter, the soil is termed to have a non-plastic nature.",
                  question: "Is the sample > or < 15% gravel?",
                  options: [
                    {
                      id: "<15% gravel",
                      symbol: "SM",
                      name: "silty gravel",
                    },
                    {
                      id: ">15% gravel",
                      symbol: "SM",
                      name: "silty gravel with sand",
                    },
                  ],
                },
                {
                  id: "plastic",
                  descrip:
                    "A thread of fine soil is rolled over a flat, smooth surface. If the thread keeps narrowing down to a much smaller diameter without cracking, the soil is termed to have a plastic nature.",
                  question: "Is the sample > or < 15% gravel?",
                  options: [
                    {
                      id: "<15% gravel",
                      symbol: "SC",
                      name: "clayey sand",
                    },
                    {
                      id: ">15% gravel",
                      symbol: "SC",
                      name: "clayey sand with gravel",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fine",
      descrip: "The sample is <50% coarse graines, >50% fines",
      question: "Does organic content influence soil properties?",
      options: [
        {
          id: "yes",
          descrip:
            "The soil exhibits properties indicative of biochemical reactions such as oxidation patterns, organic odors, and physical matter such as roots, compost, and microbes.",
          question: "Is the sample > or < 30% coarse grained sediments?",
          options: [
            {
              id: "<30",
              question:
                "Is the sample <15% or 15-25% coarse grained sediments?",
              descrip: "The sample is <30% coarse sediemnt",
              options: [
                {
                  id: "<15%",
                  symbol: "OL/OH",
                  name: "organic soil",
                },
                {
                  id: "15-25%",
                  question: "Is the sample more sand or gravel?",
                  descrip: "The sample is 15-25% coarse sediment",
                  options: [
                    {
                      id: "% sand > % gravel",
                      symbol: "OL/OH",
                      name: "organic soil with sand",
                    },
                    {
                      id: "% sand < % gravel",
                      symbol: "OL/OH",
                      name: "organic soil with gravel",
                    },
                  ],
                },
              ],
            },
            {
              id: ">30",
              question: "Is the sample more sand or gravel?",
              descrip: "The sample is >30% coarse sediemnt",
              options: [
                {
                  id: "% sand > % gravel",
                  question: "Is the sample more or less than 15% gravel?",
                  descrip: "The sample is more sand than gravel",
                  options: [
                    {
                      id: "<15% gravel",
                      symbol: "OL/OH",
                      name: "sandy organic soil",
                    },
                    {
                      id: ">15% gravel",
                      symbol: "OL/OH",
                      name: "sandy organic soil with gravel",
                    },
                  ],
                },
                {
                  id: "% sand < % gravel",
                  question: "Is the sample more or less than 15% gravel?",
                  descrip: "The sample is more gravel than sand",
                  options: [
                    {
                      id: "<15% sand",
                      symbol: "OL/OH",
                      name: "gravelly organic soil",
                    },
                    {
                      id: ">15% sand",
                      symbol: "OL/OH",
                      name: "gravelly organic soil with sand",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "no",
          descrip: "The soil contains no organic matter.",
          question: "What is the plasticity of the sample?",
          options: [
            {
              id: "ML",
              descrip: "Nonplastic to Low",
              question: "Is the sample > or < 30% coarse sediment?",
              options: [
                {
                  id: "<30",
                  question: "What is the % coarse grain sediment?",
                  descrip: "The sample is <30% coarse sediment",
                  options: [
                    { id: "<15%", symbol: "ML", name: "silt" },
                    {
                      id: "15-25%",
                      question: "Is the sample more sand or gravel?",
                      descrip: "The sample is 15-25% sand and gravel",
                      options: [
                        {
                          id: "% sand > % gravel",
                          symbol: "ML",
                          name: "silt with sand",
                        },
                        {
                          id: "% sand < % gravel",
                          symbol: "ML",
                          name: "silt with gravel",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: ">30",
                  question: "Is the sample more sand or gravel?",
                  descrip: "The sample is >30% coarse sediment",
                  options: [
                    {
                      id: "% sand > % gravel",
                      question: "What percent of the sample is gravel?",
                      descrip: "The sample is more sand than gravel",
                      options: [
                        { id: "<15% gravel", symbol: "ML", name: "sandy silt" },
                        {
                          id: ">15% gravel",
                          symbol: "ML",
                          name: "sandy silt with gravel",
                        },
                      ],
                    },
                    {
                      id: "% sand < % gravel",
                      question: "What percent of the sample is sand?",
                      descrip: "The sample is more gravel than sand",
                      options: [
                        {
                          id: "<15% sand",
                          symbol: "ML",
                          name: "gravelly silt",
                        },
                        {
                          id: ">15% sand",
                          symbol: "ML",
                          name: "gravelly silt with sand",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "CL",
              descrip: "Medium Plasticity",
              question: "Is the sample > or < 30% coarse sediment?",
              options: [
                {
                  id: "<30",
                  question: "What % of the sample is coarse grained sediment?",
                  descrip: "The sample is <30% coarse sediment",
                  options: [
                    { id: "<15%", symbol: "CL", name: "lean clay" },
                    {
                      id: "15-25%",
                      question: "Is the sample more sand or gravel?",
                      descrip: "The sample is 15-25% coarse sediment",
                      options: [
                        {
                          id: "% sand > % gravel",
                          symbol: "CL",
                          name: "lean clay with sand",
                        },
                        {
                          id: "% sand < % gravel",
                          symbol: "CL",
                          name: "lean clay with gravel",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: ">30",
                  question: "Is the sample more sand or gravel?",
                  descrip: "The sample is >30% coarse sediment",
                  options: [
                    {
                      id: "% sand > % gravel",
                      question: "Does the sample have > or < 15% gravel?",
                      descrip: "The sample is more sand than gravel",
                      options: [
                        {
                          id: "<15% gravel",
                          symbol: "CL",
                          name: "sandy lean clay",
                        },
                        {
                          id: ">15% gravel",
                          symbol: "CL",
                          name: "sandy lean clay with gravel",
                        },
                      ],
                    },
                    {
                      id: "% sand < % gravel",
                      question: "Does the sample have > or < 15% sand?",
                      descrip: "The sample is more gravel than sand",
                      options: [
                        {
                          id: "<15% sand",
                          symbol: "CL",
                          name: "gravelly lean clay",
                        },
                        {
                          id: ">15% sand",
                          symbol: "CL",
                          name: "gravelly lean clay with sand",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "CH",
              question: "Is the sample > or < 30% coarse sediment?",
              descrip: "High Plastcity",
              options: [
                {
                  id: "<30",
                  question: "What % of the sample is coarse grained sediment?",
                  descrip: "The sample is <30% coarse sediment",
                  options: [
                    { id: "<15%", symbol: "CH", name: "fat clay" },
                    {
                      id: "15-25%",
                      question: "Is the sample more sand or gravel?",
                      descrip: "The sample is 15-25% coarse sediment",
                      options: [
                        {
                          id: "% sand > % gravel",
                          symbol: "CH",
                          name: "fat clay with sand",
                        },
                        {
                          id: "% sand < % gravel",
                          symbol: "CH",
                          name: "fat clay with gravel",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: ">30",
                  question: "Is the sample more sand or gravel?",
                  descrip: "The sample is >30% coarse sediment",
                  options: [
                    {
                      id: "% sand > % gravel",
                      question: "Does the sample have > or < 15% gravel?",
                      descrip: "The sample is more sand than gravel",
                      options: [
                        {
                          id: "<15% gravel",
                          symbol: "CH",
                          name: "sandy fat clay",
                        },
                        {
                          id: ">15% gravel",
                          symbol: "CH",
                          name: "sandy fat clay with gravel",
                        },
                      ],
                    },
                    {
                      id: "% sand < % gravel",
                      question: "Does the sample have > or < 15% sand?",
                      descrip: "The sample is more gravel than sand",
                      options: [
                        {
                          id: "<15% sand",
                          symbol: "CH",
                          name: "gravelly fat clay",
                        },
                        {
                          id: ">15% sand",
                          symbol: "CH",
                          name: "gravelly fat clay with sand",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default grainSizeObj;
