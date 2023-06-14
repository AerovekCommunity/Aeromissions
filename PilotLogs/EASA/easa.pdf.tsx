import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

const EASAPDF = () => {
  return (
    <div>
      <PDFDownloadLink document={<TableDocument />} fileName="easa.pdf">
        {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
      <PDFViewer>
        <TableDocument />
      </PDFViewer>
    </div>
  );
};

const TableDocument = () => (
  <Document>
    <Page size="A4" orientation="landscape">
      <View style={styles.table}>
        //Create PDF Document
      </View>
    </Page>
  </Document>
);

export default EASAPDF;
