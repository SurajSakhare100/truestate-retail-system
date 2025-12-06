import fs from "fs";
import path from "path";
import { parse } from "csv-parse";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Sale from "../models/Sale.js";

dotenv.config();

const __dirname = path.resolve();

const csvFilePath = path.join(__dirname, "src", "data", "sales.csv");

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "truestate",
    });

    console.log("MongoDB Connected");

    // Clear old data (optional but recommended)
    await Sale.deleteMany({});
    console.log("Old data cleared.");

    const parser = fs
      .createReadStream(csvFilePath)
      .pipe(
        parse({
          columns: true,
          skip_empty_lines: true,
        })
      );

    let count = 0;

    for await (const row of parser) {
      const sale = {
        transactionId: row["Transaction ID"],
        date: new Date(row["Date"]),
        customerId: row["Customer ID"],
        customerName: row["Customer Name"],
        phoneNumber: row["Phone Number"],
        gender: row["Gender"],
        age: Number(row["Age"]),
        customerRegion: row["Customer Region"],
        customerType: row["Customer Type"],
        productId: row["Product ID"],
        productName: row["Product Name"],
        brand: row["Brand"],
        productCategory: row["Product Category"],
        tags: row["Tags"] ? row["Tags"].split(",").map(t => t.trim()) : [],
        quantity: Number(row["Quantity"]),
        pricePerUnit: Number(row["Price per Unit"]),
        discountPercentage: Number(row["Discount Percentage"]),
        totalAmount: Number(row["Total Amount"]),
        finalAmount: Number(row["Final Amount"]),
        paymentMethod: row["Payment Method"],
        orderStatus: row["Order Status"],
        deliveryType: row["Delivery Type"],
        storeId: row["Store ID"],
        storeLocation: row["Store Location"],
        salespersonId: row["Salesperson ID"],
        employeeName: row["Employee Name"],
      };

      await Sale.create(sale);
      count++;

      if (count % 100 === 0) {
        console.log(`Inserted ${count} records...`);
      }
    }

    console.log(`Import completed. Total records inserted: ${count}`);
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importData();
