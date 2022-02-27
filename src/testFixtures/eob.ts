export const eob = {
  resourceType: "Bundle",
  id: "6c967a09-a731-4a34-a420-a7e8dd8e5bf4",
  meta: {
    lastUpdated: "2022-02-14T17:27:56.303-05:00",
  },
  type: "searchset",
  total: 52,
  link: [
    {
      relation: "first",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/ExplanationOfBenefit?_format=application%2Fjson%2Bfhir&startIndex=0&_count=10&patient=-19990000000001",
    },
    {
      relation: "next",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/ExplanationOfBenefit?_format=application%2Fjson%2Bfhir&startIndex=10&_count=10&patient=-19990000000001",
    },
    {
      relation: "last",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/ExplanationOfBenefit?_format=application%2Fjson%2Bfhir&startIndex=50&_count=10&patient=-19990000000001",
    },
    {
      relation: "self",
      url: "https://sandbox.bluebutton.cms.gov/v2/fhir/ExplanationOfBenefit/?_count=10&_format=application%2Fjson%2Bfhir&patient=-19990000000001&startIndex=0",
    },
  ],
  entry: [
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "carrier--10344810963",
        meta: {
          lastUpdated: "2021-06-07T21:51:33.688-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "O",
              display:
                "Part B physician/supplier claim record (processed by local carriers; can include DMEPOS services)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_num",
            valueIdentifier: {
              system: "https://bluebutton.cms.gov/resources/variables/carr_num",
              value: "99999",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
            valueIdentifier: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
              value: "00000000000000000000000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
              code: "1",
              display: "Physician/supplier",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
              code: "A",
              display: "Assigned claim",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
              code: "1",
              display:
                "Original debit; void of original debit (If CLM_DISP_CD = 3, code 1 means voided original debit)",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-10344810963",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "71",
              display:
                "Local carrier non-durable medical equipment, prosthetics, orthotics, and supplies (DMEPOS) claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "CARRIER",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "professional",
              display: "Professional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          start: "2000-08-01",
          end: "2000-08-01",
        },
        created: "2022-02-26T16:52:08-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        referral: {
          identifier: {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "UPIN",
                  display:
                    "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                },
              ],
            },
            value: "999999999999",
          },
        },
        outcome: "complete",
        disposition: "01",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "referring",
                  display: "Referring",
                },
              ],
            },
          },
          {
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "99999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "referring",
                  display: "Referring",
                },
              ],
            },
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                  code: "1",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                  code: "1",
                  display: "Participating",
                },
              },
            ],
            sequence: 3,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            responsible: true,
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
            qualification: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prvdr_spclty",
                  code: "999",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "2000-08-25",
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "2113",
                  display: "BENIGN NEOPLASM LG BOWEL",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "principal",
                  },
                ],
              },
            ],
          },
          {
            sequence: 2,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "9999999",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "secondary",
                    display: "Secondary",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueQuantity: {
                  value: 1,
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                  code: "3",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/betos_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/betos_cd",
                  code: "T1G",
                  display: "Lab tests - other (Medicare fee schedule)",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                  code: "A",
                  display: "Allowed",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                  code: "0",
                  display: "Service Subject to Deductible",
                },
              },
            ],
            sequence: 1,
            careTeamSequence: [3],
            diagnosisSequence: [2],
            category: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                  code: "5",
                  display: "Diagnostic laboratory",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "88305",
                },
              ],
            },
            servicedPeriod: {
              start: "2000-08-01",
              end: "2000-08-01",
            },
            locationCodeableConcept: {
              extension: [
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                    code: "99",
                    display:
                      "With 000 county code is American Samoa; otherwise unknown",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                    code: "999999999",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                    code: "99",
                  },
                },
              ],
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_place_of_srvc_cd",
                  code: "99",
                  display:
                    "Other Place of Service. Other place of service not identified above.",
                },
              ],
            },
            quantity: {
              value: 1,
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator",
                      code: "denialreason",
                      display: "Denial Reason",
                    },
                  ],
                },
                reason: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/carr_line_rdcd_pmt_phys_astn_c",
                      code: "0",
                      display: "N/A",
                    },
                  ],
                },
              },
              {
                extension: [
                  {
                    url: "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                    valueCoding: {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                      code: "0",
                      display: "80%",
                    },
                  },
                ],
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "benefit",
                      display: "Benefit Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_nch_pmt_amt",
                      display: "Line NCH Medicare Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 60,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_pmt_amt",
                      display: "Line Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                      display: "Line Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 60,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                      display: "Line Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_prmry_pyr_pd_amt",
                      display:
                        "Line Primary Payer (if not Medicare) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                      display: "Line Beneficiary Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                      display: "Line Submitted Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 90,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "eligible",
                      display: "Eligible Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                      display: "Line Allowed Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 90,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                  code: "priorpayerpaid",
                  display: "Prior payer paid",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 0,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 60,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/carr_clm_cash_ddctbl_apld_amt",
                      display:
                        "Carrier Claim Cash Deductible Applied Amount (sum of all line-level deductible amounts)",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_prvdr_pmt_amt",
                      display: "NCH Claim Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 60,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_bene_pmt_amt",
                      display: "NCH Claim Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_sbmtd_chrg_amt",
                      display:
                        "NCH Carrier Claim Submitted Charge Amount (sum of all line-level submitted charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 90,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_alowd_amt",
                      display:
                        "NCH Carrier Claim Allowed Charge Amount (sum of all line-level allowed charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 80,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "carrier--10520418572",
        meta: {
          lastUpdated: "2021-06-07T21:51:33.688-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "O",
              display:
                "Part B physician/supplier claim record (processed by local carriers; can include DMEPOS services)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_num",
            valueIdentifier: {
              system: "https://bluebutton.cms.gov/resources/variables/carr_num",
              value: "99999",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
            valueIdentifier: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
              value: "00000000000000000000000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
              code: "1",
              display: "Physician/supplier",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
              code: "A",
              display: "Assigned claim",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
              code: "1",
              display:
                "Original debit; void of original debit (If CLM_DISP_CD = 3, code 1 means voided original debit)",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-10520418572",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "71",
              display:
                "Local carrier non-durable medical equipment, prosthetics, orthotics, and supplies (DMEPOS) claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "CARRIER",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "professional",
              display: "Professional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          start: "2000-08-01",
          end: "2000-08-01",
        },
        created: "2022-02-26T16:52:08-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        outcome: "complete",
        disposition: "01",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "99999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "referring",
                  display: "Referring",
                },
              ],
            },
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                  code: "2",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                  code: "1",
                  display: "Participating",
                },
              },
            ],
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            responsible: true,
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
            qualification: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prvdr_spclty",
                  code: "999",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "2000-08-25",
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "2113",
                  display: "BENIGN NEOPLASM LG BOWEL",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "principal",
                  },
                ],
              },
            ],
          },
          {
            sequence: 2,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "5640",
                  display: "CONSTIPATION",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "secondary",
                    display: "Secondary",
                  },
                ],
              },
            ],
          },
          {
            sequence: 3,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "9999999",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "secondary",
                    display: "Secondary",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueQuantity: {
                  value: 1,
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                  code: "3",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/betos_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/betos_cd",
                  code: "P8D",
                  display: "Endoscopy - colonoscopy",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                  code: "A",
                  display: "Allowed",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                  code: "0",
                  display: "Service Subject to Deductible",
                },
              },
            ],
            sequence: 1,
            careTeamSequence: [2],
            diagnosisSequence: [3],
            category: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                  code: "F",
                  display:
                    "Ambulatory surgical center (facility usage for surgical services)",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "45385",
                },
              ],
            },
            modifier: [
              {
                coding: [
                  {
                    system:
                      "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                    version: "8",
                    code: "99999",
                  },
                ],
              },
            ],
            servicedPeriod: {
              start: "2000-08-01",
              end: "2000-08-01",
            },
            locationCodeableConcept: {
              extension: [
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                    code: "99",
                    display:
                      "With 000 county code is American Samoa; otherwise unknown",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                    code: "999999999",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                    code: "99",
                  },
                },
              ],
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_place_of_srvc_cd",
                  code: "99",
                  display:
                    "Other Place of Service. Other place of service not identified above.",
                },
              ],
            },
            quantity: {
              value: 1,
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator",
                      code: "denialreason",
                      display: "Denial Reason",
                    },
                  ],
                },
                reason: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/carr_line_rdcd_pmt_phys_astn_c",
                      code: "0",
                      display: "N/A",
                    },
                  ],
                },
              },
              {
                extension: [
                  {
                    url: "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                    valueCoding: {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                      code: "0",
                      display: "80%",
                    },
                  },
                ],
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "benefit",
                      display: "Benefit Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_nch_pmt_amt",
                      display: "Line NCH Medicare Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 350,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_pmt_amt",
                      display: "Line Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                      display: "Line Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 350,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                      display: "Line Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_prmry_pyr_pd_amt",
                      display:
                        "Line Primary Payer (if not Medicare) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                      display: "Line Beneficiary Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 90,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                      display: "Line Submitted Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 650,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "eligible",
                      display: "Eligible Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                      display: "Line Allowed Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 650,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                  code: "priorpayerpaid",
                  display: "Prior payer paid",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 0,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 350,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/carr_clm_cash_ddctbl_apld_amt",
                      display:
                        "Carrier Claim Cash Deductible Applied Amount (sum of all line-level deductible amounts)",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_prvdr_pmt_amt",
                      display: "NCH Claim Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 350,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_bene_pmt_amt",
                      display: "NCH Claim Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_sbmtd_chrg_amt",
                      display:
                        "NCH Carrier Claim Submitted Charge Amount (sum of all line-level submitted charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 650,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_alowd_amt",
                      display:
                        "NCH Carrier Claim Allowed Charge Amount (sum of all line-level allowed charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 450,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "carrier--11205033623",
        meta: {
          lastUpdated: "2021-06-07T21:51:19.387-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "O",
              display:
                "Part B physician/supplier claim record (processed by local carriers; can include DMEPOS services)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_num",
            valueIdentifier: {
              system: "https://bluebutton.cms.gov/resources/variables/carr_num",
              value: "99999",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
            valueIdentifier: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
              value: "00000000000000000000000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
              code: "1",
              display: "Physician/supplier",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
              code: "A",
              display: "Assigned claim",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
              code: "1",
              display:
                "Original debit; void of original debit (If CLM_DISP_CD = 3, code 1 means voided original debit)",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-11205033623",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "71",
              display:
                "Local carrier non-durable medical equipment, prosthetics, orthotics, and supplies (DMEPOS) claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "CARRIER",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "professional",
              display: "Professional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          start: "1999-11-01",
          end: "1999-11-01",
        },
        created: "2022-02-26T16:52:08-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        referral: {
          identifier: {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "UPIN",
                  display:
                    "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                },
              ],
            },
            value: "999999999999",
          },
        },
        outcome: "complete",
        disposition: "01",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "referring",
                  display: "Referring",
                },
              ],
            },
          },
          {
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "99999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "referring",
                  display: "Referring",
                },
              ],
            },
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                  code: "7",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                  code: "1",
                  display: "Participating",
                },
              },
            ],
            sequence: 3,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            responsible: true,
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
            qualification: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prvdr_spclty",
                  code: "999",
                },
              ],
            },
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                  code: "7",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                  code: "1",
                  display: "Participating",
                },
              },
            ],
            sequence: 4,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            responsible: true,
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
            qualification: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prvdr_spclty",
                  code: "999",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "1999-12-03",
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "4011",
                  display: "BENIGN HYPERTENSION",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "principal",
                  },
                ],
              },
            ],
          },
          {
            sequence: 2,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "9999999",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "secondary",
                    display: "Secondary",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueQuantity: {
                  value: 1,
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                  code: "3",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/betos_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/betos_cd",
                  code: "M1B",
                  display: "Office visits - established",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                  code: "A",
                  display: "Allowed",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                  code: "0",
                  display: "Service Subject to Deductible",
                },
              },
            ],
            sequence: 1,
            careTeamSequence: [3],
            diagnosisSequence: [2],
            category: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                  code: "1",
                  display: "Medical care",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "99213",
                },
              ],
            },
            servicedPeriod: {
              start: "1999-11-01",
              end: "1999-11-01",
            },
            locationCodeableConcept: {
              extension: [
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                    code: "99",
                    display:
                      "With 000 county code is American Samoa; otherwise unknown",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                    code: "999999999",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                    code: "99",
                  },
                },
              ],
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_place_of_srvc_cd",
                  code: "99",
                  display:
                    "Other Place of Service. Other place of service not identified above.",
                },
              ],
            },
            quantity: {
              value: 1,
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator",
                      code: "denialreason",
                      display: "Denial Reason",
                    },
                  ],
                },
                reason: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/carr_line_rdcd_pmt_phys_astn_c",
                      code: "0",
                      display: "N/A",
                    },
                  ],
                },
              },
              {
                extension: [
                  {
                    url: "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                    valueCoding: {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                      code: "0",
                      display: "80%",
                    },
                  },
                ],
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "benefit",
                      display: "Benefit Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_nch_pmt_amt",
                      display: "Line NCH Medicare Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 30,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_pmt_amt",
                      display: "Line Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                      display: "Line Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 30,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                      display: "Line Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_prmry_pyr_pd_amt",
                      display:
                        "Line Primary Payer (if not Medicare) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                      display: "Line Beneficiary Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                      display: "Line Submitted Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 60,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "eligible",
                      display: "Eligible Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                      display: "Line Allowed Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 60,
                  currency: "USD",
                },
              },
            ],
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueQuantity: {
                  value: 1,
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                  code: "3",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/betos_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/betos_cd",
                  code: "T1A",
                  display:
                    "Lab tests - routine venipuncture (non-Medicare fee schedule)",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                  code: "A",
                  display: "Allowed",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                  code: "1",
                  display: "Service Not Subject to Deductible",
                },
              },
            ],
            sequence: 2,
            careTeamSequence: [4],
            diagnosisSequence: [2],
            category: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                  code: "5",
                  display: "Diagnostic laboratory",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "G0001",
                },
              ],
            },
            servicedPeriod: {
              start: "1999-11-01",
              end: "1999-11-01",
            },
            locationCodeableConcept: {
              extension: [
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                    code: "99",
                    display:
                      "With 000 county code is American Samoa; otherwise unknown",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                    code: "999999999",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                    code: "99",
                  },
                },
              ],
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_place_of_srvc_cd",
                  code: "99",
                  display:
                    "Other Place of Service. Other place of service not identified above.",
                },
              ],
            },
            quantity: {
              value: 1,
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator",
                      code: "denialreason",
                      display: "Denial Reason",
                    },
                  ],
                },
                reason: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/carr_line_rdcd_pmt_phys_astn_c",
                      code: "0",
                      display: "N/A",
                    },
                  ],
                },
              },
              {
                extension: [
                  {
                    url: "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                    valueCoding: {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                      code: "1",
                      display: "100%",
                    },
                  },
                ],
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "benefit",
                      display: "Benefit Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_nch_pmt_amt",
                      display: "Line NCH Medicare Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_pmt_amt",
                      display: "Line Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                      display: "Line Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                      display: "Line Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_prmry_pyr_pd_amt",
                      display:
                        "Line Primary Payer (if not Medicare) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                      display: "Line Beneficiary Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                      display: "Line Submitted Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "eligible",
                      display: "Eligible Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                      display: "Line Allowed Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                  code: "priorpayerpaid",
                  display: "Prior payer paid",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 0,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 30,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/carr_clm_cash_ddctbl_apld_amt",
                      display:
                        "Carrier Claim Cash Deductible Applied Amount (sum of all line-level deductible amounts)",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_prvdr_pmt_amt",
                      display: "NCH Claim Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 30,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_bene_pmt_amt",
                      display: "NCH Claim Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_sbmtd_chrg_amt",
                      display:
                        "NCH Carrier Claim Submitted Charge Amount (sum of all line-level submitted charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 70,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_alowd_amt",
                      display:
                        "NCH Carrier Claim Allowed Charge Amount (sum of all line-level allowed charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 40,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "carrier--11218100099",
        meta: {
          lastUpdated: "2021-06-07T21:51:19.387-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "O",
              display:
                "Part B physician/supplier claim record (processed by local carriers; can include DMEPOS services)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_num",
            valueIdentifier: {
              system: "https://bluebutton.cms.gov/resources/variables/carr_num",
              value: "99999",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
            valueIdentifier: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
              value: "00000000000000000000000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
              code: "1",
              display: "Physician/supplier",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
              code: "A",
              display: "Assigned claim",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
              code: "1",
              display:
                "Original debit; void of original debit (If CLM_DISP_CD = 3, code 1 means voided original debit)",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-11218100099",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "71",
              display:
                "Local carrier non-durable medical equipment, prosthetics, orthotics, and supplies (DMEPOS) claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "CARRIER",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "professional",
              display: "Professional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          start: "1999-11-01",
          end: "1999-11-01",
        },
        created: "2022-02-26T16:52:08-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        referral: {
          identifier: {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                  code: "UPIN",
                  display:
                    "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                },
              ],
            },
            value: "999999999999",
          },
        },
        outcome: "complete",
        disposition: "01",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "referring",
                  display: "Referring",
                },
              ],
            },
          },
          {
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "99999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "referring",
                  display: "Referring",
                },
              ],
            },
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                  code: "7",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                  code: "1",
                  display: "Participating",
                },
              },
            ],
            sequence: 3,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            responsible: true,
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
            qualification: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prvdr_spclty",
                  code: "999",
                },
              ],
            },
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                  code: "7",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                  code: "1",
                  display: "Participating",
                },
              },
            ],
            sequence: 4,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            responsible: true,
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
            qualification: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prvdr_spclty",
                  code: "999",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "1999-11-26",
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "4011",
                  display: "BENIGN HYPERTENSION",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "principal",
                  },
                ],
              },
            ],
          },
          {
            sequence: 2,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "2724",
                  display: "HYPERLIPIDEMIA NEC/NOS",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "secondary",
                    display: "Secondary",
                  },
                ],
              },
            ],
          },
          {
            sequence: 3,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "9999999",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "secondary",
                    display: "Secondary",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueQuantity: {
                  value: 1,
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                  code: "3",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/betos_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/betos_cd",
                  code: "T1H",
                  display: "Lab tests - other (non-Medicare fee schedule)",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                  code: "A",
                  display: "Allowed",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                  code: "1",
                  display: "Service Not Subject to Deductible",
                },
              },
            ],
            sequence: 1,
            careTeamSequence: [3],
            diagnosisSequence: [3],
            category: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                  code: "5",
                  display: "Diagnostic laboratory",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "80058",
                },
              ],
            },
            servicedPeriod: {
              start: "1999-11-01",
              end: "1999-11-01",
            },
            locationCodeableConcept: {
              extension: [
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                    code: "99",
                    display:
                      "With 000 county code is American Samoa; otherwise unknown",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                    code: "999999999",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                    code: "99",
                  },
                },
              ],
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_place_of_srvc_cd",
                  code: "99",
                  display:
                    "Other Place of Service. Other place of service not identified above.",
                },
              ],
            },
            quantity: {
              value: 1,
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator",
                      code: "denialreason",
                      display: "Denial Reason",
                    },
                  ],
                },
                reason: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/carr_line_rdcd_pmt_phys_astn_c",
                      code: "0",
                      display: "N/A",
                    },
                  ],
                },
              },
              {
                extension: [
                  {
                    url: "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                    valueCoding: {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                      code: "1",
                      display: "100%",
                    },
                  },
                ],
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "benefit",
                      display: "Benefit Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_nch_pmt_amt",
                      display: "Line NCH Medicare Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_pmt_amt",
                      display: "Line Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                      display: "Line Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                      display: "Line Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_prmry_pyr_pd_amt",
                      display:
                        "Line Primary Payer (if not Medicare) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                      display: "Line Beneficiary Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                      display: "Line Submitted Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 50,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "eligible",
                      display: "Eligible Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                      display: "Line Allowed Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 50,
                  currency: "USD",
                },
              },
            ],
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueQuantity: {
                  value: 1,
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                  code: "3",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/betos_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/betos_cd",
                  code: "T1H",
                  display: "Lab tests - other (non-Medicare fee schedule)",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                  code: "A",
                  display: "Allowed",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                  code: "1",
                  display: "Service Not Subject to Deductible",
                },
              },
            ],
            sequence: 2,
            careTeamSequence: [4],
            diagnosisSequence: [3],
            category: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                  code: "5",
                  display: "Diagnostic laboratory",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "80061",
                },
              ],
            },
            servicedPeriod: {
              start: "1999-11-01",
              end: "1999-11-01",
            },
            locationCodeableConcept: {
              extension: [
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                    code: "99",
                    display:
                      "With 000 county code is American Samoa; otherwise unknown",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                    code: "999999999",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                    code: "99",
                  },
                },
              ],
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_place_of_srvc_cd",
                  code: "99",
                  display:
                    "Other Place of Service. Other place of service not identified above.",
                },
              ],
            },
            quantity: {
              value: 1,
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator",
                      code: "denialreason",
                      display: "Denial Reason",
                    },
                  ],
                },
                reason: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/carr_line_rdcd_pmt_phys_astn_c",
                      code: "0",
                      display: "N/A",
                    },
                  ],
                },
              },
              {
                extension: [
                  {
                    url: "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                    valueCoding: {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                      code: "1",
                      display: "100%",
                    },
                  },
                ],
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "benefit",
                      display: "Benefit Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_nch_pmt_amt",
                      display: "Line NCH Medicare Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_pmt_amt",
                      display: "Line Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                      display: "Line Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                      display: "Line Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_prmry_pyr_pd_amt",
                      display:
                        "Line Primary Payer (if not Medicare) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                      display: "Line Beneficiary Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                      display: "Line Submitted Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 60,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "eligible",
                      display: "Eligible Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                      display: "Line Allowed Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 60,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                  code: "priorpayerpaid",
                  display: "Prior payer paid",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 0,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 20,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/carr_clm_cash_ddctbl_apld_amt",
                      display:
                        "Carrier Claim Cash Deductible Applied Amount (sum of all line-level deductible amounts)",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_prvdr_pmt_amt",
                      display: "NCH Claim Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_bene_pmt_amt",
                      display: "NCH Claim Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_sbmtd_chrg_amt",
                      display:
                        "NCH Carrier Claim Submitted Charge Amount (sum of all line-level submitted charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 100,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_alowd_amt",
                      display:
                        "NCH Carrier Claim Allowed Charge Amount (sum of all line-level allowed charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 20,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "carrier--11355351340",
        meta: {
          lastUpdated: "2021-06-07T21:51:19.387-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician",
          ],
        },
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "O",
              display:
                "Part B physician/supplier claim record (processed by local carriers; can include DMEPOS services)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_num",
            valueIdentifier: {
              system: "https://bluebutton.cms.gov/resources/variables/carr_num",
              value: "99999",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
            valueIdentifier: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_cntl_num",
              value: "00000000000000000000000",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_pmt_dnl_cd",
              code: "1",
              display: "Physician/supplier",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
            valueCoding: {
              system: "https://bluebutton.cms.gov/resources/variables/asgmntcd",
              code: "A",
              display: "Assigned claim",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/carr_clm_entry_cd",
              code: "1",
              display:
                "Original debit; void of original debit (If CLM_DISP_CD = 3, code 1 means voided original debit)",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-11355351340",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "71",
              display:
                "Local carrier non-durable medical equipment, prosthetics, orthotics, and supplies (DMEPOS) claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "CARRIER",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "professional",
              display: "Professional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          start: "1999-06-01",
          end: "1999-06-01",
        },
        created: "2022-02-26T16:52:08-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        outcome: "complete",
        disposition: "01",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "99999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "referring",
                  display: "Referring",
                },
              ],
            },
          },
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_prvdr_type_cd",
                  code: "1",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prtcptng_ind_cd",
                  code: "2",
                  display:
                    "All or some covered and allowed expenses applied to deductible Participating",
                },
              },
            ],
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            responsible: true,
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
            qualification: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/prvdr_spclty",
                  code: "999",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "1999-06-11",
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "70219",
                  display: "OTHER SBORHEIC KERATOSIS",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "principal",
                  },
                ],
              },
            ],
          },
          {
            sequence: 2,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "9999999",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "secondary",
                    display: "Secondary",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            extension: [
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueQuantity: {
                  value: 1,
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/carr_line_mtus_cnt",
                  code: "3",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/betos_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/betos_cd",
                  code: "M1B",
                  display: "Office visits - established",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_prcsg_ind_cd",
                  code: "A",
                  display: "Allowed",
                },
              },
              {
                url: "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                valueCoding: {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_service_deductible",
                  code: "0",
                  display: "Service Subject to Deductible",
                },
              },
            ],
            sequence: 1,
            careTeamSequence: [2],
            diagnosisSequence: [2],
            category: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_cms_type_srvc_cd",
                  code: "1",
                  display: "Medical care",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "99212",
                },
              ],
            },
            servicedPeriod: {
              start: "1999-06-01",
              end: "1999-06-01",
            },
            locationCodeableConcept: {
              extension: [
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_state_cd",
                    code: "99",
                    display:
                      "With 000 county code is American Samoa; otherwise unknown",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/prvdr_zip",
                    code: "999999999",
                  },
                },
                {
                  url: "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                  valueCoding: {
                    system:
                      "https://bluebutton.cms.gov/resources/variables/carr_line_prcng_lclty_cd",
                    code: "99",
                  },
                },
              ],
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/line_place_of_srvc_cd",
                  code: "99",
                  display:
                    "Other Place of Service. Other place of service not identified above.",
                },
              ],
            },
            quantity: {
              value: 1,
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator",
                      code: "denialreason",
                      display: "Denial Reason",
                    },
                  ],
                },
                reason: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/carr_line_rdcd_pmt_phys_astn_c",
                      code: "0",
                      display: "N/A",
                    },
                  ],
                },
              },
              {
                extension: [
                  {
                    url: "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                    valueCoding: {
                      system:
                        "https://bluebutton.cms.gov/resources/variables/line_pmt_80_100_cd",
                      code: "0",
                      display: "80%",
                    },
                  },
                ],
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "benefit",
                      display: "Benefit Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_nch_pmt_amt",
                      display: "Line NCH Medicare Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_pmt_amt",
                      display: "Line Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_prvdr_pmt_amt",
                      display: "Line Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_ptb_ddctbl_amt",
                      display: "Line Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_bene_prmry_pyr_pd_amt",
                      display:
                        "Line Primary Payer (if not Medicare) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_coinsrnc_amt",
                      display: "Line Beneficiary Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_sbmtd_chrg_amt",
                      display: "Line Submitted Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 40,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "eligible",
                      display: "Eligible Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/line_alowd_chrg_amt",
                      display: "Line Allowed Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 40,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                  code: "priorpayerpaid",
                  display: "Prior payer paid",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 0,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 10,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/carr_clm_cash_ddctbl_apld_amt",
                      display:
                        "Carrier Claim Cash Deductible Applied Amount (sum of all line-level deductible amounts)",
                    },
                  ],
                },
                usedMoney: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_prvdr_pmt_amt",
                      display: "NCH Claim Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_clm_bene_pmt_amt",
                      display: "NCH Claim Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_sbmtd_chrg_amt",
                      display:
                        "NCH Carrier Claim Submitted Charge Amount (sum of all line-level submitted charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 40,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_carr_clm_alowd_amt",
                      display:
                        "NCH Carrier Claim Allowed Charge Amount (sum of all line-level allowed charges)",
                    },
                  ],
                },
                usedMoney: {
                  value: 30,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "outpatient--1147969185",
        meta: {
          lastUpdated: "2021-06-07T21:53:31.564-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional",
          ],
        },
        contained: [
          {
            resourceType: "Organization",
            id: "provider-org",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization",
              ],
            },
            identifier: [
              {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "PRN",
                    },
                  ],
                },
                value: "999999",
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                    },
                  ],
                },
                system: "http://hl7.org/fhir/sid/us-npi",
                value: "9999999999",
              },
            ],
            active: true,
          },
        ],
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "W",
              display:
                "Part B institutional claim record (outpatient [HOP], HHA)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
              code: "3",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-1147969185",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "40",
              display: "Hospital Outpatient claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "OUTPATIENT",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "institutional",
              display: "Institutional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
                code: "3",
                display: "Final bill",
              },
            },
          ],
          start: "2000-04-01",
          end: "2000-04-01",
        },
        created: "2022-02-26T16:52:09-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        provider: {
          reference: "#provider-org",
        },
        facility: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
                code: "1",
                display: "Hospital",
              },
            },
          ],
        },
        outcome: "complete",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 3,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 4,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 5,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 6,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 7,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 8,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 9,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 10,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 11,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 12,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 13,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 14,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 15,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 16,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "2000-05-19",
          },
          {
            sequence: 2,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "typeofbill",
                  display: "Type of Bill",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/clm_freq_cd",
                  code: "1",
                  display: "Admit thru discharge claim",
                },
              ],
            },
          },
          {
            sequence: 3,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "discharge-status",
                  display: "Discharge Status",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/ptnt_dschrg_stus_cd",
                  code: "1",
                },
              ],
            },
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "2720",
                  display: "PURE HYPERCHOLESTEROLEM",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "Principal Diagnosis",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            sequence: 1,
            careTeamSequence: [7, 8],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "80061",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 60,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 2,
            careTeamSequence: [9, 10],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "82550",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 3,
            careTeamSequence: [11, 12],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "83721",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 50,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 4,
            careTeamSequence: [13, 14],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "84460",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 5,
            careTeamSequence: [15, 16],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0001",
                  display: "Total charge",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 100,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/adjudication",
                  code: "submitted",
                  display: "Submitted Amount",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 100,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 30,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_profnl_cmpnt_chrg_amt",
                      display: "Professional Component Charge Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_ddctbl_amt",
                      display: "NCH Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_coinsrnc_amt",
                      display: "NCH Beneficiary Part B Coinsurance Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_prvdr_pmt_amt",
                      display: "Claim Outpatient Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 30,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_bene_pmt_amt",
                      display: "Claim Outpatient Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_blood_ddctbl_lblty_am",
                      display:
                        "NCH Beneficiary Blood Deductible Liability Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/prpayamt",
                      display:
                        "NCH Primary Payer (if not Medicare) Claim Paid Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "outpatient--1149299544",
        meta: {
          lastUpdated: "2021-06-07T21:53:31.564-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional",
          ],
        },
        contained: [
          {
            resourceType: "Organization",
            id: "provider-org",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization",
              ],
            },
            identifier: [
              {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "PRN",
                    },
                  ],
                },
                value: "999999",
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                    },
                  ],
                },
                system: "http://hl7.org/fhir/sid/us-npi",
                value: "9999999999",
              },
            ],
            active: true,
          },
        ],
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "W",
              display:
                "Part B institutional claim record (outpatient [HOP], HHA)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
              code: "4",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-1149299544",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "40",
              display: "Hospital Outpatient claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "OUTPATIENT",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "institutional",
              display: "Institutional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
                code: "3",
                display: "Final bill",
              },
            },
          ],
          start: "2000-08-01",
          end: "2000-08-01",
        },
        created: "2022-02-26T16:52:09-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        provider: {
          reference: "#provider-org",
        },
        facility: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
                code: "1",
                display: "Hospital",
              },
            },
          ],
        },
        outcome: "complete",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 3,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 4,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 5,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 6,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 7,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 8,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 9,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 10,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 11,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 12,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "2000-09-22",
          },
          {
            sequence: 2,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "typeofbill",
                  display: "Type of Bill",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/clm_freq_cd",
                  code: "1",
                  display: "Admit thru discharge claim",
                },
              ],
            },
          },
          {
            sequence: 3,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "discharge-status",
                  display: "Discharge Status",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/ptnt_dschrg_stus_cd",
                  code: "1",
                },
              ],
            },
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "79093",
                  display: "ELVTD PRSTATE SPCF ANTGN",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "Principal Diagnosis",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            sequence: 1,
            careTeamSequence: [7, 8],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "G0001",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 2,
            careTeamSequence: [9, 10],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "84153",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 100,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 3,
            careTeamSequence: [11, 12],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0001",
                  display: "Total charge",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 150,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/adjudication",
                  code: "submitted",
                  display: "Submitted Amount",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 150,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 20,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_profnl_cmpnt_chrg_amt",
                      display: "Professional Component Charge Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_ddctbl_amt",
                      display: "NCH Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_coinsrnc_amt",
                      display: "NCH Beneficiary Part B Coinsurance Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_prvdr_pmt_amt",
                      display: "Claim Outpatient Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_bene_pmt_amt",
                      display: "Claim Outpatient Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_blood_ddctbl_lblty_am",
                      display:
                        "NCH Beneficiary Blood Deductible Liability Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/prpayamt",
                      display:
                        "NCH Primary Payer (if not Medicare) Claim Paid Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "outpatient--1149521265",
        meta: {
          lastUpdated: "2021-06-07T21:53:31.564-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional",
          ],
        },
        contained: [
          {
            resourceType: "Organization",
            id: "provider-org",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization",
              ],
            },
            identifier: [
              {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "PRN",
                    },
                  ],
                },
                value: "999999",
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                    },
                  ],
                },
                system: "http://hl7.org/fhir/sid/us-npi",
                value: "9999999999",
              },
            ],
            active: true,
          },
        ],
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "W",
              display:
                "Part B institutional claim record (outpatient [HOP], HHA)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
              code: "3",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-1149521265",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "40",
              display: "Hospital Outpatient claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "OUTPATIENT",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "institutional",
              display: "Institutional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
                code: "3",
                display: "Final bill",
              },
            },
          ],
          start: "2000-05-01",
          end: "2000-05-01",
        },
        created: "2022-02-26T16:52:09-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        provider: {
          reference: "#provider-org",
        },
        facility: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
                code: "1",
                display: "Hospital",
              },
            },
          ],
        },
        outcome: "complete",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 3,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 4,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 5,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 6,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 7,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 8,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 9,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 10,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 11,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 12,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "2000-07-07",
          },
          {
            sequence: 2,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "typeofbill",
                  display: "Type of Bill",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/clm_freq_cd",
                  code: "1",
                  display: "Admit thru discharge claim",
                },
              ],
            },
          },
          {
            sequence: 3,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "discharge-status",
                  display: "Discharge Status",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/ptnt_dschrg_stus_cd",
                  code: "1",
                },
              ],
            },
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "7813",
                  display: "LACK OF COORDINATION",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "Principal Diagnosis",
                  },
                ],
              },
            ],
          },
          {
            sequence: 2,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "7948",
                  display: "ABN LIVER FUNCTION STUDY",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "other",
                    display: "Other",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            sequence: 1,
            careTeamSequence: [7, 8],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "80076",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 40,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 2,
            careTeamSequence: [9, 10],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "82607",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 60,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 3,
            careTeamSequence: [11, 12],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0001",
                  display: "Total charge",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 100,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/adjudication",
                  code: "submitted",
                  display: "Submitted Amount",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 100,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 30,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_profnl_cmpnt_chrg_amt",
                      display: "Professional Component Charge Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_ddctbl_amt",
                      display: "NCH Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_coinsrnc_amt",
                      display: "NCH Beneficiary Part B Coinsurance Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_prvdr_pmt_amt",
                      display: "Claim Outpatient Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 30,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_bene_pmt_amt",
                      display: "Claim Outpatient Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_blood_ddctbl_lblty_am",
                      display:
                        "NCH Beneficiary Blood Deductible Liability Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/prpayamt",
                      display:
                        "NCH Primary Payer (if not Medicare) Claim Paid Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "outpatient--1152265228",
        meta: {
          lastUpdated: "2021-06-07T21:53:31.564-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional",
          ],
        },
        contained: [
          {
            resourceType: "Organization",
            id: "provider-org",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization",
              ],
            },
            identifier: [
              {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "PRN",
                    },
                  ],
                },
                value: "999999",
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                    },
                  ],
                },
                system: "http://hl7.org/fhir/sid/us-npi",
                value: "9999999999",
              },
            ],
            active: true,
          },
        ],
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "W",
              display:
                "Part B institutional claim record (outpatient [HOP], HHA)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
              code: "1",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-1152265228",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "40",
              display: "Hospital Outpatient claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "OUTPATIENT",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "institutional",
              display: "Institutional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
                code: "3",
                display: "Final bill",
              },
            },
          ],
          start: "2000-09-01",
          end: "2000-09-01",
        },
        created: "2022-02-26T16:52:09-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        provider: {
          reference: "#provider-org",
        },
        facility: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
                code: "7",
                display:
                  "Clinic services or hospital-based renal dialysis facility",
              },
            },
          ],
        },
        outcome: "complete",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 3,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 4,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 5,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 6,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 7,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 8,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 9,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 10,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "2000-10-20",
          },
          {
            sequence: 2,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "typeofbill",
                  display: "Type of Bill",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/clm_freq_cd",
                  code: "1",
                  display: "Admit thru discharge claim",
                },
              ],
            },
          },
          {
            sequence: 3,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "discharge-status",
                  display: "Discharge Status",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/ptnt_dschrg_stus_cd",
                  code: "1",
                },
              ],
            },
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "4011",
                  display: "BENIGN HYPERTENSION",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "Principal Diagnosis",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            sequence: 1,
            careTeamSequence: [7, 8],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0521",
                  display:
                    "Free-standing clinic-Clinic visit by a member to RHC/FQHC (eff. 7/1/06). Prior to 7/1/06 - Rural Health-Clinic",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "99212",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 40,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 2,
            careTeamSequence: [9, 10],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0001",
                  display: "Total charge",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 40,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/adjudication",
                  code: "submitted",
                  display: "Submitted Amount",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 40,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 30,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_profnl_cmpnt_chrg_amt",
                      display: "Professional Component Charge Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_ddctbl_amt",
                      display: "NCH Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_coinsrnc_amt",
                      display: "NCH Beneficiary Part B Coinsurance Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_prvdr_pmt_amt",
                      display: "Claim Outpatient Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 30,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_bene_pmt_amt",
                      display: "Claim Outpatient Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_blood_ddctbl_lblty_am",
                      display:
                        "NCH Beneficiary Blood Deductible Liability Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/prpayamt",
                      display:
                        "NCH Primary Payer (if not Medicare) Claim Paid Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: "ExplanationOfBenefit",
        id: "outpatient--1179310789",
        meta: {
          lastUpdated: "2021-06-07T21:53:31.564-04:00",
          profile: [
            "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional",
          ],
        },
        contained: [
          {
            resourceType: "Organization",
            id: "provider-org",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization",
              ],
            },
            identifier: [
              {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "PRN",
                    },
                  ],
                },
                value: "999999",
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                    },
                  ],
                },
                system: "http://hl7.org/fhir/sid/us-npi",
                value: "9999999999",
              },
            ],
            active: true,
          },
        ],
        extension: [
          {
            url: "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_near_line_rec_ident_cd",
              code: "W",
              display:
                "Part B institutional claim record (outpatient [HOP], HHA)",
            },
          },
          {
            url: "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
            valueCoding: {
              system:
                "https://bluebutton.cms.gov/resources/variables/clm_srvc_clsfctn_type_cd",
              code: "3",
            },
          },
        ],
        identifier: [
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system: "https://bluebutton.cms.gov/resources/variables/clm_id",
            value: "-1179310789",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                  code: "uc",
                  display: "Unique Claim ID",
                },
              ],
            },
            system:
              "https://bluebutton.cms.gov/resources/identifier/claim-group",
            value: "-44077735787",
          },
        ],
        status: "active",
        type: {
          coding: [
            {
              system:
                "https://bluebutton.cms.gov/resources/variables/nch_clm_type_cd",
              code: "40",
              display: "Hospital Outpatient claim",
            },
            {
              system:
                "https://bluebutton.cms.gov/resources/codesystem/eob-type",
              code: "OUTPATIENT",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/claim-type",
              code: "institutional",
              display: "Institutional",
            },
          ],
        },
        use: "claim",
        patient: {
          reference: "Patient/-19990000000001",
        },
        billablePeriod: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/claim_query_cd",
                code: "3",
                display: "Final bill",
              },
            },
          ],
          start: "2000-11-01",
          end: "2000-11-01",
        },
        created: "2022-02-26T16:52:09-05:00",
        insurer: {
          identifier: {
            value: "CMS",
          },
        },
        provider: {
          reference: "#provider-org",
        },
        facility: {
          extension: [
            {
              url: "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
              valueCoding: {
                system:
                  "https://bluebutton.cms.gov/resources/variables/clm_fac_type_cd",
                code: "1",
                display: "Hospital",
              },
            },
          ],
        },
        outcome: "complete",
        careTeam: [
          {
            sequence: 1,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 2,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "attending",
                  display: "Attending",
                },
              ],
            },
          },
          {
            sequence: 3,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 4,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "operating",
                  display: "Operating",
                },
              ],
            },
          },
          {
            sequence: 5,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "9999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 6,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "otheroperating",
                  display: "Other Operating",
                },
              ],
            },
          },
          {
            sequence: 7,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 8,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 9,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 10,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 11,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 12,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 13,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 14,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 15,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                      code: "UPIN",
                      display:
                        "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
          {
            sequence: 16,
            provider: {
              identifier: {
                type: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType",
                      code: "npi",
                      display: "National Provider Identifier",
                    },
                  ],
                },
                value: "999999999999",
              },
            },
            role: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole",
                  code: "performing",
                  display: "Performing provider",
                },
              ],
            },
          },
        ],
        supportingInfo: [
          {
            sequence: 1,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "clmrecvddate",
                  display: "Claim Received Date",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/information",
                  code: "https://bluebutton.cms.gov/resources/variables/nch_wkly_proc_dt",
                  display: "NCH Weekly Claim Processing Date",
                },
              ],
            },
            timingDate: "2000-12-01",
          },
          {
            sequence: 2,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "typeofbill",
                  display: "Type of Bill",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/clm_freq_cd",
                  code: "1",
                  display: "Admit thru discharge claim",
                },
              ],
            },
          },
          {
            sequence: 3,
            category: {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType",
                  code: "discharge-status",
                  display: "Discharge Status",
                },
              ],
            },
            code: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/ptnt_dschrg_stus_cd",
                  code: "1",
                },
              ],
            },
          },
        ],
        diagnosis: [
          {
            sequence: 1,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "2720",
                  display: "PURE HYPERCHOLESTEROLEM",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
                    code: "principal",
                    display: "Principal Diagnosis",
                  },
                ],
              },
            ],
          },
          {
            sequence: 2,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "4019",
                  display: "HYPERTENSION NOS",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "other",
                    display: "Other",
                  },
                ],
              },
            ],
          },
          {
            sequence: 3,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "6272",
                  display: "SYMPT FEM CLIMACT STATE",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "other",
                    display: "Other",
                  },
                ],
              },
            ],
          },
          {
            sequence: 4,
            diagnosisCodeableConcept: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/icd-9-cm",
                  code: "43310",
                  display: "OCL CRTD ART WO INFRCT",
                },
              ],
            },
            type: [
              {
                coding: [
                  {
                    system:
                      "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType",
                    code: "other",
                    display: "Other",
                  },
                ],
              },
            ],
          },
        ],
        insurance: [
          {
            coverage: {
              reference: "Coverage/part-b--19990000000001",
            },
          },
        ],
        item: [
          {
            sequence: 1,
            careTeamSequence: [7, 8],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0300",
                  display: "Laboratory-general classification",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "G0001",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 2,
            careTeamSequence: [9, 10],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0301",
                  display: "Laboratory-chemistry",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "80053",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 3,
            careTeamSequence: [11, 12],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0301",
                  display: "Laboratory-chemistry",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "80061",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 50,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 4,
            careTeamSequence: [13, 14],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0305",
                  display: "Laboratory-hematology",
                },
              ],
            },
            productOrService: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/hcpcs",
                  code: "85025",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 10,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 20,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
          {
            sequence: 5,
            careTeamSequence: [15, 16],
            revenue: {
              coding: [
                {
                  system:
                    "https://bluebutton.cms.gov/resources/variables/rev_cntr",
                  code: "0001",
                  display: "Total charge",
                },
              ],
            },
            locationAddress: {
              state: "99",
            },
            adjudication: [
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rate_amt",
                      display: "Revenue Center Rate Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_tot_chrg_amt",
                      display: "Revenue Center Total Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 90,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "noncovered",
                      display: "Noncovered",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ncvrd_chrg_amt",
                      display: "Revenue Center Non-Covered Charge Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_blood_ddctbl_amt",
                      display: "Revenue Center Blood Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "deductible",
                      display: "Deductible",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_cash_ddctbl_amt",
                      display: "Revenue Center Cash Deductible Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_coinsrnc_wge_adjstd_c",
                      display:
                        "Revenue Center Coinsurance/Wage Adjusted Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "coinsurance",
                      display: "Co-insurance",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_rdcd_coinsrnc_amt",
                      display: "Revenue Center Reduced Coinsurance Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_1st_msp_pd_amt",
                      display:
                        "Revenue Center 1st Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "priorpayerpaid",
                      display: "Prior payer paid",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_2nd_msp_pd_amt",
                      display:
                        "Revenue Center 2nd Medicare Secondary Payer (MSP) Paid Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtoprovider",
                      display: "Paid to provider",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_prvdr_pmt_amt",
                      display:
                        "Revenue Center (Medicare) Provider Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidtopatient",
                      display: "Paid to patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_bene_pmt_amt",
                      display: "Revenue Center Payment Amount to Beneficiary",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication",
                      code: "paidbypatient",
                      display: "Paid by patient",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_ptnt_rspnsblty_pmt",
                      display:
                        "Revenue Center Patient Responsibility Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                category: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/adjudication",
                      code: "submitted",
                      display: "Submitted Amount",
                    },
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                      code: "https://bluebutton.cms.gov/resources/variables/rev_cntr_pmt_amt_amt",
                      display: "Revenue Center (Medicare) Payment Amount",
                    },
                  ],
                },
                amount: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
        total: [
          {
            category: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/adjudication",
                  code: "submitted",
                  display: "Submitted Amount",
                },
                {
                  system:
                    "https://bluebutton.cms.gov/resources/codesystem/adjudication",
                  code: "https://bluebutton.cms.gov/resources/variables/clm_tot_chrg_amt",
                  display: "Claim Total Charge Amount",
                },
              ],
            },
            amount: {
              value: 90,
              currency: "USD",
            },
          },
        ],
        payment: {
          amount: {
            value: 40,
            currency: "USD",
          },
        },
        benefitBalance: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "1",
                  display: "Medical Care",
                },
              ],
            },
            financial: [
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_profnl_cmpnt_chrg_amt",
                      display: "Professional Component Charge Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_ddctbl_amt",
                      display: "NCH Beneficiary Part B Deductible Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_ptb_coinsrnc_amt",
                      display: "NCH Beneficiary Part B Coinsurance Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_prvdr_pmt_amt",
                      display: "Claim Outpatient Provider Payment Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 40,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/clm_op_bene_pmt_amt",
                      display: "Claim Outpatient Payment Amount to Beneficiary",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/nch_bene_blood_ddctbl_lblty_am",
                      display:
                        "NCH Beneficiary Blood Deductible Liability Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      system:
                        "https://bluebutton.cms.gov/resources/codesystem/benefit-balance",
                      code: "https://bluebutton.cms.gov/resources/variables/prpayamt",
                      display:
                        "NCH Primary Payer (if not Medicare) Claim Paid Amount",
                    },
                  ],
                },
                usedMoney: {
                  value: 0,
                  currency: "USD",
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
