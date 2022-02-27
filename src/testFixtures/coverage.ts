export const coverage = {
  resourceType: "Bundle",
  id: "fe7cecae-ecd9-4839-89dc-b38a139f2b2c",
  meta: {
    lastUpdated: "2022-02-14T17:27:56.303-05:00",
  },
  type: "searchset",
  total: 4,
  link: [
    {
      relation: "first",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/Coverage?_format=application%2Fjson%2Bfhir&startIndex=0&_count=10&beneficiary=Patient%2F-19990000000001",
    },
    {
      relation: "last",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/Coverage?_format=application%2Fjson%2Bfhir&startIndex=0&_count=10&beneficiary=Patient%2F-19990000000001",
    },
    {
      relation: "self",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/Coverage/?_count=10&_format=application%2Fjson%2Bfhir&beneficiary=Patient%2F-19990000000001&startIndex=0",
    },
  ],
  entry: [
    {
      resource: {
        resourceType: "Coverage",
        id: "part-a--19990000000001",
        meta: {
          lastUpdated: "2021-06-07T21:50:48.132-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/ms_cd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/ms_cd",
              code: "10",
              display: "Aged without end-stage renal disease (ESRD)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/orec",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/orec",
              code: "0",
              display: "Old age and survivor’s insurance (OASI)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/crec",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/crec",
              code: "0",
              display: "Old age and survivor’s insurance (OASI)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/esrd_ind",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/esrd_ind",
              code: "0",
              display: "the beneficiary does not have ESRD",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/a_trm_cd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/a_trm_cd",
              code: "0",
              display: "Not Terminated",
            },
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
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin01",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin01",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin02",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin02",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin03",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin03",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin04",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin04",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin05",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin05",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin06",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin06",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin07",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin07",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin08",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin08",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin09",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin09",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin10",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin10",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin11",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin11",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin12",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin12",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              code: "SUBSIDIZ",
            },
          ],
        },
        subscriberId: "1S00A00AA00",
        beneficiary: {
          reference: "Patient/-19990000000001",
        },
        relationship: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
              code: "self",
              display: "Self",
            },
          ],
        },
        period: {
          start: "1983-03-24",
        },
        payor: [
          {
            identifier: {
              value: "Centers for Medicare and Medicaid Services",
            },
          },
        ],
        class: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "group",
                  display: "Group",
                },
              ],
            },
            value: "Medicare",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "plan",
                  display: "Plan",
                },
              ],
            },
            value: "Part A",
          },
        ],
        contract: [
          {
            id: "contract1",
          },
          {
            reference: "Coverage/part-a-contract1",
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "Coverage",
        id: "part-b--19990000000001",
        meta: {
          lastUpdated: "2021-06-07T21:50:48.132-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/ms_cd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/ms_cd",
              code: "10",
              display: "Aged without end-stage renal disease (ESRD)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/b_trm_cd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/b_trm_cd",
              code: "0",
              display: "Not Terminated",
            },
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
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin01",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin01",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin02",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin02",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin03",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin03",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin04",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin04",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin05",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin05",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin06",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin06",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin07",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin07",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin08",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin08",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin09",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin09",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin10",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin10",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin11",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin11",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/buyin12",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/buyin12",
              code: "C",
              display: "Part A and Part B state buy-in",
            },
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              code: "SUBSIDIZ",
            },
          ],
        },
        subscriberId: "1S00A00AA00",
        beneficiary: {
          reference: "Patient/-19990000000001",
        },
        relationship: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
              code: "self",
              display: "Self",
            },
          ],
        },
        period: {
          start: "1983-03-24",
        },
        payor: [
          {
            identifier: {
              value: "Centers for Medicare and Medicaid Services",
            },
          },
        ],
        class: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "group",
                  display: "Group",
                },
              ],
            },
            value: "Medicare",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "plan",
                  display: "Plan",
                },
              ],
            },
            value: "Part B",
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "Coverage",
        id: "part-c--19990000000001",
        meta: {
          lastUpdated: "2021-06-07T21:50:48.132-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_01",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_01",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_02",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_02",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_03",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_03",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_04",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_04",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_05",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_05",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_06",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_06",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_07",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_07",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_08",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_08",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_09",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_09",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_10",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_10",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_11",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_11",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_12",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_cntrct_id_12",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_01",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_01",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_02",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_02",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_03",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_03",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_04",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_04",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_05",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_05",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_06",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_06",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_07",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_07",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_08",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_08",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_09",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_09",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_10",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_10",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_11",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_11",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_12",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_pbp_id_12",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_01",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_01",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_02",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_02",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_03",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_03",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_04",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_04",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_05",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_05",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_06",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_06",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_07",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_07",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_08",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_08",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_09",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_09",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_10",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_10",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_11",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_11",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_12",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptc_plan_type_cd_12",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_01",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_01",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_02",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_02",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_03",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_03",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_04",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_04",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_05",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_05",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_06",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_06",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_07",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_07",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_08",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_08",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_09",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_09",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_10",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_10",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_11",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_11",
              code: "D",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/hmo_ind_12",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/hmo_ind_12",
              code: "D",
            },
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
        status: "active",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              code: "SUBSIDIZ",
            },
          ],
        },
        subscriberId: "1S00A00AA00",
        beneficiary: {
          reference: "Patient/-19990000000001",
        },
        relationship: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
              code: "self",
              display: "Self",
            },
          ],
        },
        payor: [
          {
            identifier: {
              value: "Centers for Medicare and Medicaid Services",
            },
          },
        ],
        class: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "group",
                  display: "Group",
                },
              ],
            },
            value: "Medicare",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "plan",
                  display: "Plan",
                },
              ],
            },
            value: "Part C",
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "Coverage",
        id: "part-d--19990000000001",
        meta: {
          lastUpdated: "2021-06-07T21:50:48.132-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/ms_cd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/ms_cd",
              code: "10",
              display: "Aged without end-stage renal disease (ESRD)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct01",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct01",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct02",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct02",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct03",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct03",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct04",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct04",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct05",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct05",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct06",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct06",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct07",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct07",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct08",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct08",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct09",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct09",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct10",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct10",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct11",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct11",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct12",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct12",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct01/3-1",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct01",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct02/3-2",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct02",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct03/3-3",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct03",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct04/3-4",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct04",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct05/3-5",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct05",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct06/3-6",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct06",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct07/3-7",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct07",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct08/3-8",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct08",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct09/3-9",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct09",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct10/3-10",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct10",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct11/3-11",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct11",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdcntrct12/3-12",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdcntrct12",
              code: "Z0000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid01",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid01",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid02",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid02",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid03",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid03",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid04",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid04",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid05",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid05",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid06",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid06",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid07",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid07",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid08",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid08",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid09",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid09",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid10",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid10",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid11",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid11",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/ptdpbpid12",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/ptdpbpid12",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid01",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid01",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid02",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid02",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid03",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid03",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid04",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid04",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid05",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid05",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid06",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid06",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid07",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid07",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid08",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid08",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid09",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid09",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid10",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid10",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid11",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid11",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/sgmtid12",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/sgmtid12",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr01",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr01",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr02",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr02",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr03",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr03",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr04",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr04",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr05",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr05",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr06",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr06",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr07",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr07",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr08",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr08",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr09",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr09",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr10",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr10",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr11",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr11",
              code: "AA",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/cstshr12",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/cstshr12",
              code: "BB",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind01",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind01",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind02",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind02",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind03",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind03",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind04",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind04",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind05",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind05",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind06",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind06",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind07",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind07",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind08",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind08",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind09",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind09",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind10",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind10",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind11",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind11",
              code: "C",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/rdsind12",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/rdsind12",
              code: "C",
            },
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
        status: "active",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              code: "SUBSIDIZ",
            },
          ],
        },
        subscriberId: "1S00A00AA00",
        beneficiary: {
          reference: "Patient/-19990000000001",
        },
        relationship: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
              code: "self",
              display: "Self",
            },
          ],
        },
        payor: [
          {
            identifier: {
              value: "Centers for Medicare and Medicaid Services",
            },
          },
        ],
        class: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "group",
                  display: "Group",
                },
              ],
            },
            value: "Medicare",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "plan",
                  display: "Plan",
                },
              ],
            },
            value: "Part D",
          },
        ],
      },
    },
  ],
};