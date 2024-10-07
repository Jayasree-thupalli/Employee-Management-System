import React from "react";
import { Link } from "react-router-dom";
import "./OrgDetails.css";

const OrganizationType = {
  SALES: "SALES",
  MANAGEMENT: "MANAGEMENT",
};

const mockData = [
  {
    orgId: 1,
    companyNameShort: "",
    companyName: "Agile",
    description: "Agile Group",
    phoneNumber: 999999,
    email: "agile@agile.com",
    website: "agilegroup.com",
    PanNumber: "ABCck3456h",
    PfNumber: "1123456-pf number1",
    EsiNumber: "78975431",
    Ptaxnumber: "HDSKJHFKUEHU72341",
    CorporateIdentityNumber: "corporate-pin-12341",
    RegistrationNumber: "123456",
    SACCode: "324234-sac code1",
    MSMENumber: "342341",
    BankAccountNumber: "12345789",
    address: {
      id: 1001,
      addressLine1: "hnum 21 , street ",
      addressLine2: "near landmark",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "50049",
      country: "India",
      countryId: 2,
      stateId: 31,
      cityId: 124,
      permanentAddress: null,
    },
    type: OrganizationType.SALES,
    units: 10,
    createdBy: "Admin",
    creationTime: 12321321,
  },
];

const OrgDetails = () => {
  const organization = mockData[0];

  const handleSave = () => {
    alert("Saved successfully!");
  };

  return (
    <div className="OrgDetails">
      <h3>Organization Details</h3>
      <form className="smaller-form">
        <div className="form-group">
          <label htmlFor="companyNameShort" className="label-large">
            Company Short Name
          </label>
          <input
            type="text"
            id="companyNameShort"
            name="companyNameShort"
            value={organization.companyNameShort}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName" className="label-large">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={organization.companyName}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="label-large">
            Description
          </label>
          <input
            id="description"
            name="description"
            value={organization.description}
            className="form-control"
            rows="4"
            disabled
          />
        </div>

        {/* Address container moved here */}
        <div className="address-container">
          <h4>Address Details</h4>
          <div className="form-group">
            <label htmlFor="addressLine1" className="label-large">
              Address Line 1
            </label>
            <input
              id="addressLine1"
              name="addressLine1"
              value={organization.address.addressLine1}
              className="form-control"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2" className="label-large">
              Address Line 2
            </label>
            <input
              id="addressLine2"
              name="addressLine2"
              value={organization.address.addressLine2}
              className="form-control"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="country" className="label-large">
              Country
            </label>
            <input
              id="country"
              name="country"
              value={organization.address.country}
              className="form-control"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="state" className="label-large">
              State
            </label>
            <input
              id="state"
              name="state"
              value={organization.address.state}
              className="form-control"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="city" className="label-large">
              City
            </label>
            <input
              id="city"
              name="city"
              value={organization.address.city}
              className="form-control"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode" className="label-large">
              Pincode
            </label>
            <input
              id="pincode"
              name="pincode"
              value={organization.address.pincode}
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="label-large">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            value={organization.phoneNumber}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label-large">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={organization.email}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="website" className="label-large">
            Website
          </label>
          <input
            id="website"
            name="website"
            value={organization.website}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="panNumber" className="label-large">
            PAN Number
          </label>
          <input
            id="panNumber"
            name="panNumber"
            value={organization.PanNumber}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="pfNumber" className="label-large">
            PF Number
          </label>
          <input
            id="pfNumber"
            name="pfNumber"
            value={organization.PfNumber}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="esiNumber" className="label-large">
            ESI Number
          </label>
          <input
            id="esiNumber"
            name="esiNumber"
            value={organization.EsiNumber}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="ptaxNumber" className="label-large">
            P Tax Number
          </label>
          <input
            id="ptaxNumber"
            name="ptaxNumber"
            value={organization.Ptaxnumber}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="corporateIdentityNumber" className="label-large">
            Corporate Identity Number
          </label>
          <input
            id="corporateIdentityNumber"
            name="corporateIdentityNumber"
            value={organization.CorporateIdentityNumber}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="registrationNumber" className="label-large">
            Registration Number
          </label>
          <input
            id="registrationNumber"
            name="registrationNumber"
            value={organization.RegistrationNumber}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="sacCode" className="label-large">
            SAC Code
          </label>
          <input
            id="sacCode"
            name="sacCode"
            value={organization.SACCode}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="msmeNumber" className="label-large">
            MSME Number
          </label>
          <input
            id="msmeNumber"
            name="msmeNumber"
            value={organization.MSMENumber}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="bankAccountNumber" className="label-large">
            Bank Account Number
          </label>
          <input
            id="bankAccountNumber"
            name="bankAccountNumber"
            value={organization.BankAccountNumber}
            className="form-control"
            disabled
          />
        </div>
      </form>

      <div className="text-center mt-4">
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default OrgDetails;
