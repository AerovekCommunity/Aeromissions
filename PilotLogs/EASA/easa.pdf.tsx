import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { EASAFlightRecord } from "./easa.interface";

const EASAPDF = () => {
  return (
    <React.Fragment>
      <PDFDownloadLink document={<TableDocument />} fileName="easa.pdf">
        {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
      <PDFViewer>
        <TableDocument />
      </PDFViewer>
    </React.Fragment>
  );
};

const TableDocument = () => (
  <Document>
    <Page size="A4" orientation="landscape">
      <View style={styles.table}>
        //Create PDF EASA table document
      </View>
    </Page>
  </Document>
);

export default EASAPDF;
