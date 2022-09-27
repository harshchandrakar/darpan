import React from "react";
import FilterBar from "./Utils/FilterBar";
import Navbar from "./Utils/Navbar";
import Path from "./Utils/Path";
import SearchBar from "./Utils/SearchBar";
import classes from "./Styles/MainPage.module.css";
import MenuCard from "./Utils/MenuCard";
import MainCard from "./Utils/MainCard";

const menu = [
  {
    heading: "Related Category",
    options: [
      "Paracetamol Tablets",
      "Paracetamol Syrup",
      "Paracetamol Powder",
      "Aceclofenac",
      "Magaladrate Simethicone Oral Suspension",
      "Mefenamic Paracetamol Syrup",
    ],
  },
  {
    heading: "Related Brands",
    options: [
      "Paracetamol Tablets",
      "Paracetamol Syrup",
      "Paracetamol Powder",
      "Aceclofenac",
      "Magaladrate Simethicone Oral Suspension",
      "Mefenamic Paracetamol Syrup",
    ],
  },
  {
    heading: "Bussiness Type",
    options: ["Wholesaler", "Manufacturer", "Retailer", "Exporter"],
  },
  {
    heading: "Strength",
    options: ["500 mg", "650 mg"],
  },
  {
    heading: "Prescription/Non Prescription",
    options: ["intas Pharmaceutical Ltd.", "Alkern Laboratories Ltd."],
  },
];
const main = [
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
  {
    pic: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    price: 1775,
    companyname: "Glenmark Pharmaceutical Limited",
    name: "Favipiravin 400mg (Fabiflu) Tablets",
    address: "PARVAT PATIYA ,SURAT,GUJRAT",
  },
];
function MainPage() {
  return (
    <div>
      <Navbar
        menuItem={["Home", "Products", "Distributors", "About us", "Blog"]}
        logo="https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80"
      />
      <Path path={["Medical Darpan", "Search", "FabiFlu Tablet"]} />
      <div style={{ width: "450px" }}>
        <SearchBar val={1} placeholder="Search Medicine" />
      </div>

      <FilterBar
        heading="Paracetamol"
        qty={128}
        tags={["Aceclofenac", "500mg"]}
      />
      <div className={classes.gridContainer}>
        <div className={classes.menu}>
          {menu.map((data) => (
            <MenuCard heading={data.heading} options={data.options} />
          ))}
        </div>
        <div className={classes.main}>
          {main.map((data) => (
            <MainCard
              price={data.price}
              companyname={data.companyname}
              name={data.name}
              address={data.address}
              pic={data.pic}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
