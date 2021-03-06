const moistureObj = {
  descrip: "Moisture is a measure of liquid in a sample.",
  question: "How much moisture is in the sample?",
  options: [
    {
      descrip: "There is no water. Sample is dry.",
      id: "Dry",
      answer: "Dry",
    },
    {
      descrip: "The sample is slightly wet.",
      id: "Moist",
      answer: "Moist",
    },
    {
      descrip: "Water is visible and saturates the sample.",
      id: "Wet",
      answer: "Wet",
    },
  ],
};

//https://stackoverflow.com/questions/2242086/how-to-detect-the-screen-resolution-with-javascript
//create a popover with circle of correct mm using method above
const plasticityObj = {
  descrip:
    "The plasticity can be attributed to the rolling technique. This is the ability of a cylindrical roll of soil rolled between the fingers to hold a 6, 4, or 2mm diameter.",
  question: "What is the plasticity of the sample?",
  options: [
    {
      id: "non",
      descrip: "Will NOT support a 6mm roll",
      answer: "Non-plastic",
    },
    {
      id: "low",
      descrip: "Can support a 6mm roll, but not 4mm",
      answer: "Low Plasticity",
    },
    {
      id: "medium",
      descrip: "Can support a 4mm roll, but not 2mm",
      answer: "Medium Plasticity",
    },
    {
      id: "high",
      descrip: "Can support a 2mm roll",
      answer: "High Plasticity",
    },
  ],
};

const cohesivenessObj = {
  descrip:
    "Cohesion is the component of shear strength and property applied to clay containing soils.",
  question: "Does the sample exhibit cohesion?",
  options: [
    {
      id: "yes",
      descrip: "The sample can form a 6mm diamter with the roll test",
      answer: "Cohesive",
    },
    {
      id: "no",
      descrip: "The sample can NOT form a 6mm diamter with the roll test",
      answer: "Noncohesive",
    },
  ],
};

//https://en.wikipedia.org/wiki/Sedimentary_structures
const sedimentaryStructureObj = {
  descrip:
    "Having a sedimentary structure suggests the sample contains bedding from deposition.",
  question: "Which sedimentary structure, if any, apply to the sample?",
  options: [
    {
      id: "massive",
      descrip: "The stratification is thick and homogeneous.",
      answer: "Massive",
    },
    {
      id: "thick",
      descrip: "Beds are >30cm",
      answer: "Thickly Bedded",
    },
    {
      id: "bedded",
      descrip: "Beds are 3-30cm",
      answer: "Bedded",
    },
    {
      id: "thin",
      descrip: "Beds are 0.5-30cm",
      answer: "Thinly Bedded",
    },
    {
      id: "laminated",
      descrip: "Beds are <0.5cm",
      answer: "Laminated",
    },
  ],
};

const weatheringObj = {
  descrip:
    "Exposure to the water table or elements in the atmosphere can cause various kinds of chemical alterations in a sample. Check all that apply for each type of weathering.",
  question: "Is there any evidence of chemical weathering?",
  questions: [
    {
      descrip: "These are extra properties that may or may not be present",
      question: "modifier symbol",
      options: [
        {
          name: "mottled",
          descrip:
            "The soil contains colors not associated with the compositional properties",
          answer: "M",
        },
        {
          name: "jointed",
          descrip:
            "Has fractures, spaces, or cracks that show no offset across the fracture",
          answer: "J",
        },
      ],
    },
    {
      descrip: "Is there any signs of oxidation present?",
      question: "oxidation",
      options: [
        {
          name: "oxidized",
          descrip: "Signs of oxidation are present in the sample.",
          answer: "O",
        },
        {
          name: "reduced",
          descrip: "Signs of Redux reactions are persent.",
          answer: "R",
        },
        {
          name: "unoxidized",
          descrip: "No sign of oxidation or reduction.",
          answer: "U",
        },
      ],
    },
    {
      descrip:
        "An example could be discoloration from chemical reactions due to fluid movement within the sample.",
      question: "leaching",
      options: [
        {
          name: "leached",
          descrip: "Has evidence of leaching",
          answer: "L",
        },
        {
          name: "unleached",
          descrip: "No evidence of leaching",
          answer: "U",
        },
      ],
    },
    {
      descrip:
        "Fluid movement in cracks and faults can lead to secondary mineral precipitation",
      question: "carbonates",
      options: [
        {
          name: "carbonates",
          descrip:
            "The sample contains trace carbonate from secondary precipitation.",
          answer: "2",
        },
      ],
    },
  ],
};

//https://munsell.com/color-products/color-communications-products/environmental-color-communication/munsell-soil-color-charts/
//FUTURE FEATURE: add dropdown for different color pages
const colorObj = {
  descrip: "Using the Munsell Color Chart, determine the color of the sample.",
  question: "What is the primary color?",
  options: {
    "5Y": {
      descrip: "some yellow color",
      answer: "5/2 5Y",
    },
  },
};

const densityObj = {
  question: "Is the sample coarse or fine grained?",
  descrip:
    "Correct terminology for a sample's density can be described based on the deposited grain sizes and corresponding N-value.",
  nValue:
    "The N value represents a standard value of energy required to penetrate 30 cm into soil by percussion drilling. It is standardized as the energy of a falling hammer from a height of 0,76 m or about 472,95 J. In North America it is considered that the percussion has a 60% energy efficiency, or 283.8J.  As SPT is the most most popular field test, the N value is widely used. Engineers correlate it to granular soils density and clays consistency. The N value is implemented on design using empirical correlations, specially in foundations design. Friction angle, cohesion, stiffness and even the risk of liquefaction can be estimated by the N value correlations.",
  options: [
    {
      id: "coarse",
      max: 50,
      values: [
        { value: 0, label: "0N", descriptor: "very loose" },
        { value: 5, label: "5N", descriptor: "loose" },
        { value: 11, label: "11N", descriptor: "medium dense" },
        { value: 30, label: "30N", descriptor: "dense" },
        { value: 50, label: "50N", descriptor: "very dense" },
      ],
    },
    {
      id: "fine",
      max: 30,
      values: [
        { value: 0, label: "0N", descriptor: "very soft" },
        { value: 3, label: "3N", descriptor: "soft" },
        { value: 5, label: "5N", descriptor: "medium" },
        { value: 9, label: "9N", descriptor: "stiff" },
        { value: 16, label: "16N", descriptor: "very stiff" },
        { value: 30, label: "30N", descriptor: "hard" },
      ],
    },
  ],
};

const stratContactObj = {
  descrip:
    "Evidence of a contact can be viewed in grainsize variation or mineral composition. Note that some gradational contats may be reflected over multiple bedding variations or a gradational change in sedimentary structures.",
  question: "Are there are any notable stratigraphic contacts?",
  options: [
    {
      name: "Sharp",
      descrip: "The contact is over a distance of < 10cm",
      answer: "Sharp Contact",
    },
    {
      name: "Gradational",
      descrip: "The contact is over a distance of > 10cm",
      answer: "Gradational Contact",
    },
  ],
};

export {
  moistureObj,
  plasticityObj,
  cohesivenessObj,
  sedimentaryStructureObj,
  weatheringObj,
  colorObj,
  densityObj,
  stratContactObj,
};
