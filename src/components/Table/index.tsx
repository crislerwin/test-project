import React from "react";
import "./styles.css";
import 'handsontable/dist/handsontable.full.css';
import { HotTable, HotColumn } from "@handsontable/react";
import { data } from "../../constants/dummyData";
import { ProgressBarRenderer } from "../renderers/ProgressBar";
import { StarsRenderer } from "../renderers/Stars";

import {
  drawCheckboxInRowHeaders,
  addClassesToRows,
  changeCheckboxCell,
  alignHeaders
} from "../../hooks/hooksCallbacks";

import "handsontable/dist/handsontable.min.css";

 const Table = () => {
  return (
    <HotTable
      data={data}
      height={450}
      colWidths={[
        150,
        214,
        140,
        127,
        103,
        126,
        192,
        99,
        100,
        100,
        100,
        110,
        100
      ]}
      nestedHeaders={[
        [
          {
            label: "Customer",
            colspan: 6
          },
          {
            label: "Order",
            colspan: 7
          }
        ],
        [
          "Full name",
          "Job title",
          "Company name",
          "City",
          "Phone",
          "Country",
          "Name",
          "Sell date",
          "Order ID",
          "In stock",
          "Qty",
          "Progress",
          "Rating"
        ]
      ]}
      collapsibleColumns={[
        {
          row: -2,
          col: 0,
          collapsible: true
        },
        {
          row: -2,
          col: 6,
          collapsible: true
        }
      ]}
      dropdownMenu={true}
      multiColumnSorting={true}
      filters={true}
      minSpareRows={1}
      rowHeaders={true}
      afterGetColHeader={alignHeaders}
      beforeRenderer={addClassesToRows}
      afterGetRowHeader={drawCheckboxInRowHeaders}
      afterOnCellMouseDown={changeCheckboxCell}
      manualRowMove={true}
      licenseKey="non-commercial-and-evaluation"
    >
      <HotColumn data={1} />
      <HotColumn data={2} />
      <HotColumn data={3} />
      <HotColumn data={4} />
      <HotColumn data={5} />
      <HotColumn data={6} />
      <HotColumn data={7} />
      <HotColumn data={8} type="date" allowInvalid={false} />
      <HotColumn data={9} />
      <HotColumn data={10} type="checkbox" className="htCenter" />
      <HotColumn data={11} type="numeric" />
      <HotColumn data={12} className="htMiddle">
        {/* @ts-ignore Element inherits some props. It's hard to type it. */}
        <ProgressBarRenderer hot-renderer />
      </HotColumn>
      <HotColumn data={13} className="htCenter">
        {/* @ts-ignore Element inherits some props. It's hard to type it. */}
        <StarsRenderer hot-renderer />
      </HotColumn>
    </HotTable>
  );
};


export default Table;