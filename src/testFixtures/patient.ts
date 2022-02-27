export const patient = {
  resourceType: "Bundle",
  id: "f2301fa0-6fd7-4cec-9e99-fb5f4faa1d82",
  meta: {
    lastUpdated: "2022-02-14T17:27:56.303-05:00",
  },
  type: "searchset",
  total: 1,
  link: [
    {
      relation: "first",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/Patient?_format=application%2Fjson%2Bfhir&startIndex=0&_count=10&_id=-19990000000001",
    },
    {
      relation: "last",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/Patient?_format=application%2Fjson%2Bfhir&startIndex=0&_count=10&_id=-19990000000001",
    },
    {
      relation: "self",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/Patient/?_count=10&_format=application%2Fjson%2Bfhir&_id=-19990000000001&startIndex=0",
    },
  ],
  entry: [
    {
      resource: {
        resourceType: "Patient",
        id: "-19990000000001",
        meta: {
          lastUpdated: "2021-06-07T21:50:48.132-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Patient",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/race",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/race",
              code: "1",
              display: "White",
            },
          },
          {
            url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
            extension: [
              {
                url: "ombCategory",
                valueCoding: {
                  system: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
                  code: "UNK",
                  display: "Unknown",
                },
              },
              {
                url: "text",
                valueString: "Unknown",
              },
            ],
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rfrnc_yr",
            valueDate: "0003",
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_01",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_01",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_02",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_02",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_03",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_03",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_04",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_04",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_05",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_05",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_06",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_06",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_07",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_07",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_08",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_08",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_09",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_09",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_10",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_10",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_11",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_11",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/dual_12",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/dual_12",
              code: "AA",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "MB",
                  display: "Member Number",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/bene_id",
            value: "-19990000000001",
          },
          {
            type: {
              coding: [
                {
                  extension: [
                    {
                      url: "https://bluebutton.cms.gov/resources/codesystem/identifier-currency",
                      valueCoding: {
                        system:
                          "https://bluebutton.cms.gov/resources/codesystem/identifier-currency",
                        code: "current",
                        display: "Current",
                      },
                    },
                  ],
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "MC",
                  display: "Patient's Medicare number",
                },
              ],
            },
            system: "http://hl7.org/fhir/sid/us-mbi",
            value: "1S00A00AA00",
            period: {
              start: "2020-01-01",
            },
          },
        ],
        name: [
          {
            use: "usual",
            family: "Doe",
            given: ["Jane", "X"],
          },
        ],
        gender: "female",
        birthDate: "1999-06-01",
        deceasedDateTime: "1981-03-17",
        address: [
          {
            state: "30",
            postalCode: "99999",
          },
        ],
      },
    },
  ],
};
