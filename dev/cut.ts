export const completionSpec: Fig.Spec = {
  name: "cut",
  description: "cut out selected portions of each line of a file",
  args: {
    template: "filepaths",
    isOptional: true,
    variadic: true,
  },
  options: [
    {
      name: "-b",
      description: "byte positions as a comma or - separated list of numbers",
      args: [
        {
          name: "list",
          description: "specifies byte positions",
        },
        {
          name: "-n",
          description: "do not split multi-byte characters",
          isOptional: true,
        },
        {
          name: "file",
          template: "filepaths",
          isOptional: true,
          variadic: true,
        },
      ],
    },
    {
      name: "-c",
      description: "column positions as a comma or - separated list of numbers",
      args: [
        {
          name: "list",
          description: "specifies column positions",
        },
        {
          name: "file",
          template: "filepaths",
          isOptional: true,
          variadic: true,
        },
      ],
    },
    {
      name: ["-f"],
      description: "field positions as a comma or - separated list of numbers",
      args: [
        {
          name: "list",
          description: "specifies column positions",
        },
        {
          name: "-d",
          description:
            "use delim as the field delimiter character instead of the tab character.",
          isOptional: true,
        },
        {
          name: "-s",
          description:
            "suppress lines with no field delimiter characters.  unless specified, lines with no delimiters are passed through unmodified.",
          isOptional: true,
        },
        {
          name: "file",
          template: "filepaths",
          isOptional: true,
          variadic: true,
        },
      ],
    },
  ],
};
