"use client";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function LanguagePicker() {
  const [selected, setSelected] = useState("PL");
  return (
    <div className="">
      <ReactFlagsSelect
        selected={selected}
        countries={["PL", "GB"]}
        showSecondarySelectedLabel={false}
        showOptionLabel={false}
        showSelectedLabel={false}
        fullWidth={false}
        onSelect={(code) => setSelected(code)}
      />
    </div>
  );
}
